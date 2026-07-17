from pathlib import Path

TEMPLATE_PATH = Path("templates/resume.tex")


def render_resume(cv, improved):

    template = TEMPLATE_PATH.read_text(encoding="utf-8")

    # -----------------------------
    # Experience
    # -----------------------------
    experience_tex = ""

    for exp in cv.experience:
        if not (
            exp.company
            or exp.position
            or exp.description
        ):
            continue

        experience_tex += f"""
\\textbf{{{exp.position}}} \\hfill {exp.start_date} -- {exp.end_date}

{exp.company} - {exp.location}

{exp.description}

\\vspace{{0.3cm}}
"""

    # -----------------------------
    # Education
    # -----------------------------
    education_tex = ""

    for edu in cv.education:
        if not (
            edu.university
            or edu.degree
            or edu.description
        ):
            continue

        education_tex += f"""
\\textbf{{{edu.degree}}} \\hfill {edu.start_date} -- {edu.end_date}

{edu.university}

{edu.field}

{edu.location}

{edu.description}

\\vspace{{0.3cm}}
"""

    # -----------------------------
    # Internships
    # -----------------------------
    internships_tex = ""

    for internship in cv.internships:
        if not (
            internship.company
            or internship.role
            or internship.description
        ):
            continue

        internships_tex += f"""
\\textbf{{{internship.role}}}

{internship.company}

{internship.location}

{internship.start_date} -- {internship.end_date}

{internship.description}

\\vspace{{0.3cm}}
"""

    # -----------------------------
    # Workshops
    # -----------------------------
    workshops_tex = ""

    for workshop in cv.workshops:
        if not (
            workshop.name
            or workshop.organization
            or workshop.description
        ):
            continue

        workshops_tex += f"""
\\textbf{{{workshop.name}}}

{workshop.organization}

{workshop.date}

{workshop.description}

\\vspace{{0.3cm}}
"""

    # -----------------------------
    # Projects
    # -----------------------------
    projects_tex = ""

    for project in cv.projects:
        if not (
            project.name
            or project.role
            or project.description
        ):
            continue

        projects_tex += f"""
\\textbf{{{project.name}}}

Role: {project.role}

Technologies: {project.technologies}

GitHub: {project.github}

Demo: {project.demo}

{project.start_date} -- {project.end_date}

{project.description}

\\vspace{{0.3cm}}
"""

    # -----------------------------
    # Certificates
    # -----------------------------
    certificates_tex = ""

    for cert in cv.certificates:
        if not (
            cert.name
            or cert.organization
        ):
            continue

        certificates_tex += f"""
\\textbf{{{cert.name}}}

{cert.organization}

{cert.issue_date}

Credential: {cert.credential}

\\vspace{{0.3cm}}
"""

    # -----------------------------
    # Languages
    # -----------------------------
    languages_tex = ""

    for lang in cv.languages:
        if not lang.name:
            continue

        languages_tex += (
            f"{lang.name} - {lang.level}\\\\\n"
        )

    # -----------------------------
    # Skills
    # -----------------------------
    skills_tex = ""

    if cv.skills:
        skills_tex = " • ".join(cv.skills)

    # -----------------------------
    # Replace placeholders
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
    latex = latex.replace("INTERNSHIPS", internships_tex)
    latex = latex.replace("WORKSHOPS", workshops_tex)
    latex = latex.replace("PROJECTS", projects_tex)
    latex = latex.replace("CERTIFICATES", certificates_tex)
    latex = latex.replace("LANGUAGES", languages_tex)
    latex = latex.replace("SKILLS", skills_tex)

    return latex