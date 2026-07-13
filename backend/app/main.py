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
    allow_origins=[
        "http://localhost:5173",
        "https://cv-genius-99txxzddm-bkm2.vercel.app",
    ],
    allow_credentials=True,
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

    print("========== CV RECEIVED ==========")
    print(cv.model_dump())
    print("=================================")

    # Improve CV using Gemini
    improved_data = improve_cv(cv)

    # Build LaTeX
    latex = render_resume(cv, improved_data)

    # Output folder
    output_dir = Path("output")
    output_dir.mkdir(exist_ok=True)

    # Save resume.tex
    tex_file = output_dir / "resume.tex"
    tex_file.write_text(latex, encoding="utf-8")

    # Compile PDF
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