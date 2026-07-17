from pydantic import BaseModel
from typing import List


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
# Internships
# -----------------------------
class Internship(BaseModel):
    company: str
    role: str
    location: str
    start_date: str
    end_date: str
    description: str


# -----------------------------
# Workshops
# -----------------------------
class Workshop(BaseModel):
    name: str
    organization: str
    date: str
    description: str


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

    internships: List[Internship]

    workshops: List[Workshop]

    skills: List[str]

    projects: List[Project]

    certificates: List[Certificate]

    languages: List[Language]