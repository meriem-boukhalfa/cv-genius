from pydantic import BaseModel
from typing import List
from pydantic import BaseModel


# -----------------------------
# Experience
# -----------------------------
class Experience(BaseModel):
    company: str
    position: str
    location: str
    start_date: str
    end_date: str
    description: str


# -----------------------------
# Education
# -----------------------------
class Education(BaseModel):
    university: str
    degree: str
    field: str
    location: str
    start_date: str
    end_date: str
    description: str


# -----------------------------
# Projects
# -----------------------------
class Project(BaseModel):
    name: str
    role: str
    technologies: str
    github: str
    demo: str
    start_date: str
    end_date: str
    description: str


# -----------------------------
# Certificates
# -----------------------------
class Certificate(BaseModel):
    name: str
    organization: str
    issue_date: str
    credential: str


# -----------------------------
# Languages
# -----------------------------
class Language(BaseModel):
    name: str
    level: str


# -----------------------------
# CV
# -----------------------------
class CVData(BaseModel):
    full_name: str
    email: str
    phone: str
    location: str
    linkedin: str
    github: str

    job_title: str
    summary: str

    experience: List[Experience]
    education: List[Education]
    skills: List[str]
    projects: List[Project]
    certificates: List[Certificate]
    languages: List[Language]