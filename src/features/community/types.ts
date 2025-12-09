export type CommunityId = "react" | "node" | "next" | "ts" | "rn";

export type CommunityKind = "joined" | "discover";

export interface Community {
  id: CommunityId;
  name: string;
  members: number;
  online: number;
  lastMessage: string;
  lastActiveLabel?: string; 
  unreadCount?: number; 
  kind: CommunityKind;
}