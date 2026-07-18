from pathlib import Path

TEMPLATE_PATH = Path("templates/resume.tex")


def render_resume(cv, improved):

    template = TEMPLATE_PATH.read_text(encoding="utf-8")

    # ============================================
    # EXPERIENCE
    # ============================================

    experience_tex = ""

    for exp in cv.experience:

        if not exp.position:
            continue

        experience_tex += f"""
\\experience
{{{exp.position}}}
{{{exp.start_date} -- {exp.end_date}}}
{{{exp.company} - {exp.location}}}
{{{exp.description}}}
"""

    # ============================================
    # EDUCATION
    # ============================================

    education_tex = ""

    for edu in cv.education:

        if not edu.degree:
            continue

        education_tex += f"""
\\education
{{{edu.degree}}}
{{{edu.start_date} -- {edu.end_date}}}
{{{edu.university}}}
{{{edu.field}}}
{{{edu.description}}}
"""

    # ============================================
    # INTERNSHIPS
    # ============================================

    internships_tex = ""

    for internship in cv.internships:

        if not internship.role:
            continue

        internships_tex += f"""
\\internship
{{{internship.role}}}
{{{internship.start_date} -- {internship.end_date}}}
{{{internship.company}}}
{{{internship.description}}}
"""

    # ============================================
    # WORKSHOPS
    # ============================================

    workshops_tex = ""

    for workshop in cv.workshops:

        if not workshop.name:
            continue

        workshops_tex += f"""
\\workshop
{{{workshop.name}}}
{{{workshop.date}}}
{{{workshop.organization}}}
{{{workshop.description}}}
"""
    # ============================================
    # PROJECTS
    # ============================================

    projects_tex = ""

    for project in cv.projects:

        if not project.name:
            continue

        projects_tex += f"""
\\project
{{{project.name}}}
{{{project.role}}}
{{{project.technologies}}}
{{{project.github}}}
{{{project.demo}}}
{{{project.start_date} -- {project.end_date}}}
{{{project.description}}}
"""

    # ============================================
    # SKILLS
    # ============================================

    skills_tex = ""

    if cv.skills:

        for skill in cv.skills:

            if skill.strip():

                skills_tex += f"\\skillbadge{{{skill}}}"

    # ============================================
    # CERTIFICATES
    # ============================================

    certificates_tex = ""

    for cert in cv.certificates:

        if not cert.name:
            continue

        certificates_tex += f"""
\\certificate
{{{cert.name}}}
{{{cert.issue_date}}}
{{{cert.organization}}}
{{{cert.credential}}}
"""

    # ============================================
    # LANGUAGES
    # ============================================

    languages_tex = ""

    for lang in cv.languages:

        if not lang.name:
            continue

        languages_tex += f"""
\\cvlanguage
{{{lang.name}}}
{{{lang.level}}}
"""
    # ============================================
    # REPLACE PLACEHOLDERS
    # ============================================

    latex = template

    latex = latex.replace("FULL_NAME", cv.full_name or "")
    latex = latex.replace("JOB_TITLE", cv.job_title or "")

    latex = latex.replace("EMAIL", cv.email or "")
    latex = latex.replace("PHONE", cv.phone or "")
    latex = latex.replace("LOCATION", cv.location or "")

    latex = latex.replace("LINKEDIN", cv.linkedin or "#")
    latex = latex.replace("GITHUB", cv.github or "#")

    latex = latex.replace(
    "SUMMARY",
    improved.get("summary") or ""
    )

    latex = latex.replace("EXPERIENCE", experience_tex)
    latex = latex.replace("EDUCATION", education_tex)
    latex = latex.replace("INTERNSHIPS", internships_tex)
    latex = latex.replace("WORKSHOPS", workshops_tex)
    latex = latex.replace("PROJECTS", projects_tex)
    latex = latex.replace("SKILLS", skills_tex)
    latex = latex.replace("CERTIFICATES", certificates_tex)
    latex = latex.replace("LANGUAGES", languages_tex)

    return latex