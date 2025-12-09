import type { RecentSearch, FrameworkItem, FrameworkId } from "../types";

export const RECENT_SEARCHES: RecentSearch[] = [
  { id: "r1", query: "React 19" },
  { id: "r2", query: "Node.js" },
  { id: "r3", query: "TypeScript 5.0" },
];

export const BROWSE_FRAMEWORKS: FrameworkItem[] = [
  { id: "react" as FrameworkId, title: "React", subtitle: "Library" },
  { id: "react-native" as FrameworkId, title: "React Native", subtitle: "Framework" },
  { id: "node" as FrameworkId, title: "Node.js", subtitle: "Runtime" },
  { id: "next" as FrameworkId, title: "Next.js", subtitle: "Framework" },
  { id: "graphql" as FrameworkId, title: "GraphQL", subtitle: "API" },
  { id: "ts" as FrameworkId, title: "TypeScript", subtitle: "Language" },
];