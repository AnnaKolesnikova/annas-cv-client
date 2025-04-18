interface ICv {
  personalDetails: IPersonalDetails;
  summary: ISummary;
  workExperience: IJob[];
  education: IEducation;
  skills: string[];
  languages: string[];
}

interface ISummary {
  description: string;
  softSkills: string;
}

interface IPersonalDetails {
  fullName: string;
  title: string;
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

interface IResponse {
  cvs: ICv[];
}

export {
  ICv,
  ISummary,
  IPersonalDetails,
  IJob,
  IProject,
  IEducation,
  IResponse,
};
