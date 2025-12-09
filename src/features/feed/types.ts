export type ReleaseType = "Major Release" | "Minor Update" | "Patch" | "Other";

export interface ReleaseItem {
  id: string;
  framework: string;
  title: string;
  subtitle: string;
  dateLabel: string;  
  badge?: string;   
  typeLabel: ReleaseType;
}

export interface ReleaseSection {
  id: string;
  title: string;   
  data: ReleaseItem[];
}