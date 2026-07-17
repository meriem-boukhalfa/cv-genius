import os

from dotenv import load_dotenv
from google import genai
from google.genai import types
from pydantic import BaseModel

load_dotenv()

print("API KEY:", os.getenv("GEMINI_API_KEY"))

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


class ImprovedCV(BaseModel):
    summary: str
    experience: str
    education: str
    skills: str
    projects: str


def improve_cv(cv):

    experience = "\n".join(
        f"{e.position} at {e.company} ({e.start_date} - {e.end_date})\n{e.description}"
        for e in cv.experience
    )

    education = "\n".join(
        f"{e.degree} in {e.field} - {e.university} ({e.start_date} - {e.end_date})\n{e.description}"
        for e in cv.education
    )

    internships = "\n".join(
        f"{i.role} at {i.company} ({i.start_date} - {i.end_date})\n{i.description}"
        for i in cv.internships
    )

    workshops = "\n".join(
        f"{w.name} - {w.organization} ({w.date})\n{w.description}"
        for w in cv.workshops
    )

    projects = "\n".join(
        f"{p.name} ({p.start_date} - {p.end_date})\n"
        f"Role: {p.role}\n"
        f"Technologies: {p.technologies}\n"
        f"Description: {p.description}"
        for p in cv.projects
    )

    skills = ", ".join(cv.skills)

    prompt = f"""
Improve this resume professionally.

Do NOT invent information.
Improve grammar.
Improve wording.
Make the resume ATS-friendly.

Resume

Name:
{cv.full_name}

Job Title:
{cv.job_title}

Summary:
{cv.summary}

Experience:
{experience}

Education:
{education}

Internships:
{internships}

Workshops:
{workshops}

Skills:
{skills}

Projects:
{projects}
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
        config=types.GenerateContentConfig(
            response_mime_type="application/json",
            response_schema=ImprovedCV,
        ),
    )

    print(response.parsed)

    return response.parsed.model_dump()