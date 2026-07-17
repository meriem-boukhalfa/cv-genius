from pathlib import Path
import subprocess

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse

from app.schemas.cv import CVData
from app.services.gemini_service import improve_cv
from app.services.template_service import render_resume

app = FastAPI(
    title="CV Genius API",
    version="1.0.0"
)

# -----------------------------
# CORS
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# Home
# -----------------------------
@app.get("/")
def home():
    return {
        "message": "Welcome to CV Genius API"
    }

# -----------------------------
# Generate Resume
# -----------------------------
@app.post("/generate-cv")
def generate_cv(cv: CVData):

    print("\n========== CV RECEIVED ==========")
    print(cv.model_dump())

    print("\n========== EXPERIENCE ==========")
    print(cv.experience)

    print("\n========== EDUCATION ==========")
    print(cv.education)

    print("\n========== INTERNSHIPS ==========")
    print(cv.internships)

    print("\n========== WORKSHOPS ==========")
    print(cv.workshops)

    print("\n========== PROJECTS ==========")
    print(cv.projects)

    print("\n========== CERTIFICATES ==========")
    print(cv.certificates)

    print("\n========== LANGUAGES ==========")
    print(cv.languages)

    print("\n========== SKILLS ==========")
    print(cv.skills)

    print("\n=================================\n")

    # Improve CV
    improved_data = improve_cv(cv)

    # Generate LaTeX
    latex = render_resume(cv, improved_data)

    # -----------------------------
    # DEBUG
    # -----------------------------
    print("\n========== CURRENT DIRECTORY ==========")
    print(Path.cwd())

    output_dir = Path("output")
    output_dir.mkdir(exist_ok=True)

    print("\n========== OUTPUT DIRECTORY ==========")
    print(output_dir.resolve())

    print("\n========== GENERATED LATEX ==========")
    print(latex[:1500])   # أول 1500 حرف

    # -----------------------------
    # Save resume.tex
    # -----------------------------
    tex_file = output_dir / "resume.tex"
    tex_file.write_text(latex, encoding="utf-8")

    print("\n========== SAVED FILE ==========")
    print(tex_file.resolve())

    # -----------------------------
    # Compile PDF
    # -----------------------------
    result = subprocess.run(
        [
            "pdflatex",
            "-interaction=nonstopmode",
            tex_file.name,
        ],
        cwd=output_dir,
        capture_output=True,
        text=True,
    )

    print(result.stdout)

    if result.stderr:
        print(result.stderr)

    if result.returncode != 0:
        raise Exception(result.stdout)

    pdf_file = output_dir / "resume.pdf"

    return {
        "status": "success",
        "latex": latex,
        "pdf_file": str(pdf_file),
    }

# -----------------------------
# Download PDF
# -----------------------------
@app.get("/download-pdf")
def download_pdf():

    pdf_file = Path("output") / "resume.pdf"

    if not pdf_file.exists():
        return {
            "status": "error",
            "message": "PDF not found"
        }

    return FileResponse(
        path=pdf_file,
        media_type="application/pdf",
        filename="resume.pdf",
    )