// ─────────────────────────────────────────────────────────────
//  EDIT YOUR TRYHACKME ROOMS HERE (this is the only file to change).
//  Replace title, description, topics, and paste the real room link
//  into `roomUrl`. While roomUrl is "" the button stays disabled.
// ─────────────────────────────────────────────────────────────
export const TRYHACKME_PROFILE = "https://tryhackme.com/p/VantaRoot";

export type Room = {
  id: string;
  title: string;
  description: string;
  topics: string[];
  roomUrl: string;
  reviewStatus?: "SUBMITTED FOR REVIEW" | "PUBLISHED";
  visual: "terminal" | "network";
};
// roomUrl example once published: "https://tryhackme.com/room/your-room-name"

export const rooms: Room[] = [
  {
    id: "ROOM_01",
    title: "Internal Reports",
    description:
      "A hands-on cybersecurity lab built around a realistic attack chain involving web enumeration, exposed credentials, WordPress administration, a path traversal vulnerability, SSH access, and Linux privilege escalation. The objective is to investigate the target systematically, identify weaknesses, establish access, and escalate privileges to obtain root.",
    topics: ["Web Enumeration", "WordPress Security", "Path Traversal", "Privilege Escalation"],
    roomUrl: "", // ← paste the published TryHackMe room URL here once approved
    reviewStatus: "SUBMITTED FOR REVIEW", // ← change to "PUBLISHED" only once the room is approved and live
    visual: "terminal",
  },
  {
    id: "ROOM_02",
    title: "Active Directory",
    description: "Placeholder: replace this with the description of your second TryHackMe room.",
    topics: ["TOPIC PLACEHOLDER", "TOPIC PLACEHOLDER"],
    roomUrl: "",
    visual: "network",
  },
];

export const isRoomLive = (url: string) => /^https:\/\/(www\.)?tryhackme\.com\//.test(url);