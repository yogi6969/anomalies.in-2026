export interface LeadFormData {
  email: string;
  company: string;
  inquiry: string;
}

export enum FormStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}