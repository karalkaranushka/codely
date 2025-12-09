import type { Community } from "./types";

export const YOUR_COMMUNITIES: Community[] = [
  {
    id: "react",
    name: "React",
    members: 1243,
    online: 89,
    lastMessage: "Anyone tried the new server components?",
    lastActiveLabel: "2m ago",
    unreadCount: 3,
    kind: "joined",
  },
  {
    id: "node",
    name: "Node.js",
    members: 856,
    online: 45,
    lastMessage: "V8 performance improvements are insane!",
    lastActiveLabel: "15m ago",
    kind: "joined",
  },
  {
    id: "next",
    name: "Next.js",
    members: 967,
    online: 62,
    lastMessage: "How to migrate from pages to app router?",
    lastActiveLabel: "1h ago",
    unreadCount: 1,
    kind: "joined",
  },
];

export const DISCOVER_COMMUNITIES: Community[] = [
  {
    id: "ts",
    name: "TypeScript",
    members: 734,
    online: 38,
    lastMessage: "Type inference in 5.0 is much better",
    kind: "discover",
  },
  {
    id: "rn",
    name: "React Native",
    members: 621,
    online: 31,
    lastMessage: "New architecture migration tips?",
    kind: "discover",
  },
];