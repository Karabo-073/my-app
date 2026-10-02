export const introLines = [
  "EVERY SYSTEM YOU TRUST", "IS WATCHING YOU.", "",
  "EVERY MOVE YOU MAKE", "LEAVES A TRACE.", "",
  "BUT TOGETHER,", "WE LEAVE NONE.",
];

export type Stat = { value: string; label: string };
export type Project = { number: string; title: string; category: string; description: string; tags: string[]; link: string };
export type Article = { title: string; description: string; link: string; label: string };
export type Book = { status: string; title: string; description: string; tags: string[]; note?: string; link?: string };

export const profile = {
  name: "Manuel Molapo",
  role: "Cybersecurity Researcher | Bug Bounty Hunter",
  location: "Johannesburg, South Africa",
  bio: "I’m a cybersecurity researcher and bug hunter focused on offensive security, vulnerability research, and web application security. I participate in CTFs and bug bounty programs, researching vulnerabilities and attack paths across web applications and APIs.",
};

export const stats: Stat[] = [
  { value: "Top 1%", label: "TryHackMe Global" },
  { value: "#15", label: "TryHackMe South Africa" },
  { value: "100+", label: "CTFs Completed" },
  { value: "13", label: "Professional Reports" },
  { value: "7", label: "7 reports validated on Bugcrowd, HackerOne & YesWeHack" },
  { value: "20", label: "Articles Published" },
  { value: "10", label: "YouTube Videos" },
  { value: "3", label: "Books In Development" },
];

export const skills = [
  "Web Application Pentesting", "API Security", "Bug Bounty Hunting", "Vulnerability Research",
  "SQL Injection", "IDOR", "Broken Access Control", "SSRF", "HTTP Request Smuggling",
  "Path Traversal", "XSS", "Privilege Escalation", "Network Security", "Red Teaming",
];

export const tools = ["Burp Suite", "Nmap", "FFUF", "Gobuster", "Wireshark", "Kali Linux", "Linux", "Git & GitHub"];

export const projects: Project[] = [
  {
    number: "01", title: "NeuroLock IDS", category: "NETWORK SECURITY · C++",
    description: "A lightweight intrusion detection system built with C++ and libpcap to identify suspicious network activity, including port scans, ICMP floods, and suspicious HTTP payload patterns.",
    tags: ["C++", "libpcap", "IDS", "Network Monitoring"],
    link: "https://github.com/Karabo-073/Neurolock_IDS",
  },
  {
    number: "02", title: "Phishing attack", category: "Social Engineering",
    description: "A stimulated phishing campaign  was conducted on an user who works on local comapany to manipulate employee into revealing sensitive information on the company. ",
    tags: ["Security", "Social engineering"],
    link: "https://github.com/Karabo-073/Phishing-Attack",
  },
  {
    number: "03", title: "Web Application Security Research", category: "BUG BOUNTY · WEB SECURITY",
    description: "Hands-on vulnerability research covering SQL injection, IDOR, broken access control, SSRF, HTTP request smuggling, path traversal, and related attack paths.",
    tags: ["Bug Bounty", "Web Pentesting", "Research"],
    link: "https://github.com/Karabo-073/CTF-Reports",
  },
];

export const articles: Article[] = [
  {
    title: "How attackers gain remote access using AndroRAT",
    description: "An educational breakdown of AndroRAT and how it can be abused to gain remote access to Android devices, demonstrated in controlled testing environments.",
    label: "ANDROID SECURITY",
    link: "https://medium.com/@molapomanuel709/how-attackers-gain-remote-access-using-androrat-a9221e00c85e",
  },
  {
    title: "How Hackers could spy on you using Camphish",
    description: "A look at Camphish, a technique used to capture webcam images through a spoofed permission prompt, explored here for defensive awareness.",
    label: "SOCIAL ENGINEERING",
    link: "https://medium.com/@molapomanuel709/how-hackers-could-spy-on-you-using-camphish-e377ba315597",
  },
  {
    title: "How attackers could compromise any Android phone",
    description: "An educational security research article exploring Android compromise techniques and mobile security risks.",
    label: "ANDROID SECURITY",
    link: "https://medium.com/@molapomanuel709/how-attackers-could-compromise-any-android-phone-475f0940af44",
  },
  {
    title: "When AI Agents Turned an Internal Package Service into a Bridge to Hugging Face",
    description: "A security-research breakdown of an AI-related incident and its security implications.",
    label: "AI SECURITY",
    link: "https://medium.com/@molapomanuel709/when-ai-agents-turned-an-internal-package-service-into-a-bridge-to-hugging-face-073f576bbd4f",
  },
  {
    title: "Agentic Bug Hunter",
    description: "A practical guide exploring AI agents and their potential role in bug bounty hunting.",
    label: "AI BUG HUNTING",
    link: "https://medium.com/@molapomanuel709/agentic-bug-hunter-0dc6f644c48b",
  },
  {
    title: "Password Reset Flows: Three Token Tests Every Bug Hunter Should Know",
    description: "A bug bounty guide to testing password reset flows, built around three token tests every bug hunter should know.",
    label: "BUG BOUNTY",
    link: "https://medium.com/@molapomanuel709/password-reset-flows-three-token-tests-every-bug-hunter-should-know-89f21dcdabaf",
  },
  {
    title: "How black-hat hackers spy on any android phones using Evil Droid",
    description: "An educational look at how attackers abuse Evil Droid to spy on Android phones, written for defensive awareness.",
    label: "ANDROID SECURITY",
    link: "https://medium.com/@molapomanuel709/how-black-hat-hackers-spy-on-any-android-phones-using-evil-droid-7ca4d93aa564",
  },
  {
    title: "Understanding CORS Misconfigurations: When Trusting the Browser Goes Wrong",
    description: "An explanation of CORS misconfigurations and what goes wrong when a server trusts the browser too much.",
    label: "WEB SECURITY",
    link: "https://medium.com/@molapomanuel709/understanding-cors-misconfigurations-when-trusting-the-browser-goes-wrong-d6a15ada56b5",
  },
  {
    title: "Many beginners forget Mass assignment in Bug Bounty programs",
    description: "A look at mass assignment, a vulnerability many beginners overlook in bug bounty programs.",
    label: "BUG BOUNTY",
    link: "https://medium.com/@molapomanuel709/many-beginners-forget-mass-assignment-in-bug-bounty-programs-cc4c4441de4b",
  },
];

export const books: Book[] = [
  {
    status: "OUT NOW", title: "Android Security & Attack Research",
    description: "A cybersecurity book exploring Android security, social engineering, malware threats, and mobile-device compromise from a security research perspective.",
    tags: ["Android Security", "Mobile Threats", "Ethical Hacking"],
    note: "Subscription: $5.", link: "https://molapo5.gumroad.com/l/snyvoo",
  },
  {
    status: "IN DEVELOPMENT", title: "Binary Exploitation and Cryptography",
    description: "A security research book currently in development, exploring binary exploitation and cryptography.",
    tags: ["Security Research"], note: "Subscription: $5.",
  },
  {
    status: "IN DEVELOPMENT", title: "How to Become a Bug Hunter",
    description: "A book currently in development on how to become a bug hunter, from the mindset to the methodology.",
    tags: ["Bug Bounty", "Methodology"],
  },
];

export const experience = [
  { title: "Bug Bounty Research", text: "Hands-on vulnerability research through bug bounty programs, including Bugcrowd." },
  { title: "Professional Security Reports", text: "13 reports documenting vulnerability research, technical evidence, impact, and remediation considerations." },
  { title: "Technical Writeups", text: "25 writeups covering security labs, exploitation techniques, vulnerability analysis, and attack paths." },
  { title: "CTFs & Hands-on Labs", text: "100+ completed CTFs across platforms including TryHackMe, BugForge, and picoCTF." },
];

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/manuel-molapo-619182342/" },
  { label: "GitHub", href: "https://github.com/Karabo-073/" },
  { label: "TryHackMe", href: "https://tryhackme.com/p/VantaRoot" },
  { label: "Medium", href: "https://medium.com/@molapomanuel709" },
];