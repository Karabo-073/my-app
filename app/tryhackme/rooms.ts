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
  roomUrl: string; // e.g. "https://tryhackme.com/room/your-room-name"
  visual: "terminal" | "network";
};

export const rooms: Room[] = [
  {
    id: "ROOM_01",
    title: "Hunters",
    description: ".",
    topics: [""],
    roomUrl: "",
    visual: "terminal",
  },
  {
    id: "ROOM_02",
    title: "Root Me",
    description: "",
    topics: [""],
    roomUrl: "",
    visual: "network",
  },
];

export const isRoomLive = (url: string) => /^https:\/\/(www\.)?tryhackme\.com\//.test(url);