// ─────────────────────────────────────────────────────────────
//  VIDEO ARCHIVE DATA — add new videos by adding an object below.
//  Paste the YouTube link into `videoUrl` and the button goes live.
// ─────────────────────────────────────────────────────────────
export const CHANNEL_URL = "https://www.youtube.com/@VantaRoot-i4z";

export type VideoItem = {
  title: string;
  description: string;
  category: string; // CTF, BUG BOUNTY, PENTEST, RESEARCH...
  thumbnail?: string; // e.g. "/thumbnails/robot-ctf.png" (put the image in /public). Optional.
  videoUrl: string; // "" until published
  publishedAt: string; // YYYY-MM-DD
  status: string; // shown while videoUrl is empty, e.g. "COMING SOON"
  featured?: boolean; // the featured video gets the large card
  hud?: { label: string; value: string }[]; // decorative terminal readout (featured card)
};

export const videos: VideoItem[] = [
  {
    title: "Robot CTF — TryHackMe",
    description: "Offensive security walkthrough and exploitation of the Robot CTF.",
    category: "CTF",
    thumbnail: "",
    videoUrl: "", // ← paste the YouTube URL here once published
    publishedAt: "2026-10-01",
    status: "COMING SOON",
    featured: true,
    hud: [
      { label: "TARGET", value: "ROBOT" },
      { label: "STATUS", value: "ANALYZING" },
      { label: "THREAT LEVEL", value: "UNKNOWN" },
      { label: "ENVIRONMENT", value: "TRYHACKME" },
    ],
  },
  // Add the next video like this:
  // {
  //   title: "Your Video Title",
  //   description: "Short description.",
  //   category: "BUG BOUNTY",
  //   videoUrl: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
  //   publishedAt: "2026-10-15",
  //   status: "COMING SOON",
  // },
];

export const isLive = (url: string) => /^https:\/\/(www\.)?(youtube\.com|youtu\.be)\//.test(url);
export const effectiveStatus = (v: VideoItem) => (isLive(v.videoUrl) ? "LIVE" : v.status);

// Uses your own thumbnail, otherwise the YouTube thumbnail once a real URL exists.
export function getThumbnail(v: VideoItem) {
  if (v.thumbnail) return v.thumbnail;
  const id = v.videoUrl.match(/(?:v=|youtu\.be\/|shorts\/)([\w-]{11})/)?.[1];
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : "";
}

const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
export function formatDate(d: string) {
  const [y, m, day] = d.split("-");
  return `${day} ${MONTHS[Number(m) - 1] ?? ""} ${y}`;
}