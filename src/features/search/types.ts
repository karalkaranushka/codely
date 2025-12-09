export interface RecentSearch {
  id: string;
  query: string;
}

export type FrameworkKind =
  | "Library"
  | "Runtime"
  | "Framework"
  | "API"
  | "Language";

export interface FrameworkItem {
  id: string;
  name: string;
  kind: FrameworkKind;
}