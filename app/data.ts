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
  { value: "#2000", label: "TryHackMe Global Ranking" },
  { value: "#14", label: "TryHackMe South Africa Ranking" },
  { value: "100+", label: "CTF Challenges Completed" },
  { value: "13", label: "Professional Security Reports" },
  { value: "7", label: "Reports Validated on Bugcrowd, HackerOne & YesWeHack" },
  { value: "20", label: "Technical Articles Published" },
  { value: "5", label: "Research Blogs" },
  { value: "10", label: "YouTube Research & Technical Videos" },
  { value: "5", label: "Bug Bounty Writeups" },
  { value: "2", label: "TryHackMe Rooms Created" },
  { value: "1", label: "CVE Pending" },
  { value: "4", label: "Books In Development" },
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
  {
    title: "Binary and Hexadecimal: The Numbers Behind Computers",
    description: "An introduction to binary and hexadecimal, the number systems that computers use to represent data.",
    label: "FUNDAMENTALS",
    link: "https://medium.com/@molapomanuel709/binary-and-hexadecimal-the-numbers-behind-computers-9ac30fc83462",
  },
  {
    title: "From Numbers to Cryptography: Understanding How Data Becomes Crypto",
    description: "A beginner-friendly look at how numbers and data are turned into cryptography.",
    label: "CRYPTOGRAPHY",
    link: "https://medium.com/@molapomanuel709/from-numbers-to-cryptography-understanding-how-data-becomes-crypto-17959bc00134",
  },
  {
    title: "Understanding Memory, the Stack, the Heap, and Registers",
    description: "An explanation of memory, the stack, the heap, and registers, the foundations of binary exploitation.",
    label: "BINARY EXPLOITATION",
    link: "https://medium.com/@molapomanuel709/understanding-memory-the-stack-the-heap-and-registers-1c8b2812dd84",
  },
  {
    title: "Binary Exploitation: A Practical Guide to Memory, Buffers, and Control Flow",
    description: "A practical guide to binary exploitation, covering memory, buffers, and control flow.",
    label: "BINARY EXPLOITATION",
    link: "https://medium.com/@molapomanuel709/binary-exploitation-a-practical-guide-to-memory-buffers-and-control-flow-eaed2db1af3f",
  },
  {
    title: "Cryptographic Vulnerabilities: When Strong Cryptography Fails",
    description: "A look at cryptographic vulnerabilities and how strong cryptography can still fail in practice.",
    label: "CRYPTOGRAPHY",
    link: "https://medium.com/@molapomanuel709/cryptographic-vulnerabilities-when-strong-cryptography-fails-eb42bbe41a14",
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
    tags: ["Security Research"],
  },
  {
    status: "IN DEVELOPMENT", title: "How to Become a Bug Hunter",
    description: "A book currently in development on how to become a bug hunter, from the mindset to the methodology.",
    tags: ["Bug Bounty", "Methodology"],
  },
  {
    status: "AVAILABLE ON 12 OCT", title: "The Mathematics Behind Cryptography",
    description: "A security research book exploring the mathematics that underpins cryptography.",
    tags: ["Cryptography", "Mathematics"],
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