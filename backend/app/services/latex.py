from pathlib import Path

OUTPUT_DIR = Path("output")
OUTPUT_DIR.mkdir(exist_ok=True)


def generate_latex():
    latex = r"""
\documentclass{article}

\begin{document}

Hello from CV Genius!

\end{document}
"""

    tex_file = OUTPUT_DIR / "resume.tex"

    tex_file.write_text(latex, encoding="utf-8")

    return tex_file