from pathlib import Path

TEMPLATE_PATH = Path("templates/resume.tex")


def render_resume(cv, improved):

    template = TEMPLATE_PATH.read_text(encoding="utf-8")

    # -----------------------------
    # Experience
    # -----------------------------
    experience_tex = ""

    for exp in cv.experience:
        experience_tex += f"""
\\experience
{{{exp.position}}}
{{{exp.start_date} -- {exp.end_date}}}
{{{exp.company} -- {exp.location}}}
{{{exp.description}}}
{{}}
"""

    # -----------------------------
    # Education
    # -----------------------------
    education_tex = ""

    for edu in cv.education:
        education_tex += f"""
\\education
{{{edu.degree}}}
{{{edu.start_date} -- {edu.end_date}}}
{{{edu.university}}}
{{{edu.field}}}
{{{edu.description}}}
{{}}
"""

    # -----------------------------
    # Projects
    # -----------------------------
    projects_tex = ""

    for project in cv.projects:
        projects_tex += f"""
\\textbf{{{project.name}}}

\\textit{{{project.role}}}

Technologies: {project.technologies}

GitHub: {project.github}

Demo: {project.demo}

{project.start_date} -- {project.end_date}

{project.description}

\\vspace{{0.5cm}}
"""

    # -----------------------------
    # Certificates
    # -----------------------------
    certificates_tex = ""

    for cert in cv.certificates:
        certificates_tex += f"""
• {cert.name} ({cert.organization}) — {cert.issue_date}

"""

    # -----------------------------
    # Languages
    # -----------------------------
    languages_tex = ""

    for lang in cv.languages:
        languages_tex += f"{lang.name} — {lang.level}\\\\\n"

    # -----------------------------
    # Skills
    # -----------------------------
    skills_tex = " \\textbullet\\ ".join(cv.skills)

    # -----------------------------
    # Replace
    # -----------------------------
    latex = template

    latex = latex.replace("FULL_NAME", cv.full_name)
    latex = latex.replace("EMAIL", cv.email)
    latex = latex.replace("PHONE", cv.phone)
    latex = latex.replace("LOCATION", cv.location)
    latex = latex.replace("LINKEDIN", cv.linkedin)
    latex = latex.replace("GITHUB", cv.github)

    latex = latex.replace("SUMMARY", improved["summary"])
    latex = latex.replace("EDUCATION", education_tex)
    latex = latex.replace("EXPERIENCE", experience_tex)
    latex = latex.replace("PROJECTS", projects_tex)
    latex = latex.replace("CERTIFICATES", certificates_tex)
    latex = latex.replace("LANGUAGES", languages_tex)
    latex = latex.replace("SKILLS", skills_tex)

    return latex