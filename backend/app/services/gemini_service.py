import os

from dotenv import load_dotenv
from google import genai
from google.genai import types
from pydantic import BaseModel

load_dotenv()

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

    prompt = f"""
Improve this resume professionally.

Do NOT invent information.
Improve grammar.
Improve wording.
Make experience and projects ATS friendly.

Resume

Name: {cv.full_name}

Job Title:
{cv.job_title}

Summary:
{cv.summary}

Experience:
{cv.experience}

Education:
{cv.education}

Skills:
{cv.skills}

Projects:
{cv.projects}
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