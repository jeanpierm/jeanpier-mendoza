export interface ExperienceIntf {
  jobTitle: string;
  company: Company;
  period: string;
  description?: string;
  technologies?: string;
}

export interface Company {
  name: string;
  website?: string;
}
