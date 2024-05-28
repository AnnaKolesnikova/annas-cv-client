export interface ICv {
  fullName: string;
  title: string;
  contactDetails: IContactDetails;
  about: string[];
  workExperience: IJob[];
  education: IEducation;
  skills: string[];
  languages: string[];
}

interface IContactDetails {
  email: string;
  phone: string;
  location: string;
}

interface IJob {
  dates: string;
  title: string;
  companyName: string;
  location: string;
  projects: IProject[];
}

interface IProject {
  description: string;
  technologies: string[];
  responsibilities: string[];
}

interface IEducation {
  dates: string;
  faculty: string;
  department: string;
  university: string;
  location: string;
}
