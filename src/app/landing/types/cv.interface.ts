interface Cv {
  personalDetails: PersonalDetails;
  summary: Summary;
  workExperience: Job[];
  education: Education;
  skills: string[];
  languages: string[];
}

interface Summary {
  description: string;
  softSkills: string;
}

interface PersonalDetails {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
}

interface Job {
  dates: string;
  title: string;
  companyName: string;
  location: string;
  projects: Project[];
}

interface Project {
  description: string;
  technologies: string[];
  responsibilities: string[];
}

interface Education {
  dates: string;
  faculty: string;
  department: string;
  university: string;
  location: string;
}

interface Response {
  record: {
    cvs: Cv[];
  };
}

export { Cv, Summary, PersonalDetails, Job, Project, Education, Response };
