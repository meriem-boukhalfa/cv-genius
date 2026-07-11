import subprocess
from pathlib import Path


def compile_pdf(tex_file: str):

    tex_path = Path(tex_file)

    subprocess.run(
        [
            "pdflatex",
            "-interaction=nonstopmode",
            tex_path.name,
        ],
        cwd=tex_path.parent,
        check=True,
    )

    return tex_path.with_suffix(".pdf")