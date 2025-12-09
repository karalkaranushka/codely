export interface SavedUpdate {
  id: string;
  name: string;           
  description: string;       // instead of subtitle
  frameworkName: string;     // instead of framework
  savedDate: string;         // instead of dateLabel
  isNew?: boolean;           // optional for "New" badge
  category?: string;         // instead of typeLabel
}