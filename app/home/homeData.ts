// All homepage copy lives here. Edit text, statuses and links in this file.
export const aboutParagraphs = [
  "I am a cybersecurity researcher and bug bounty hunter focused on discovering vulnerabilities, understanding attack paths, and identifying weaknesses across modern applications, networks, and connected devices.",
  "My work combines practical offensive security testing with vulnerability analysis, technical investigation, and responsible reporting. I study how authentication mechanisms fail, how trust boundaries can be bypassed, and how weaknesses in software and device implementations can expose users and infrastructure to risk.",
  "My research extends beyond conventional web application security into wireless technologies, Android security, Bluetooth, Wi-Fi, camera systems, and automotive security. I am interested in the security boundaries between software, hardware, wireless communications, and the systems that depend on them.",
  "I approach security research through hands-on testing, careful validation, technical documentation, and a commitment to responsible disclosure.",
  "My goal is to produce meaningful security findings, contribute to stronger defensive engineering, and work alongside teams responsible for protecting widely used technology.",
];

export type Status = "HANDS-ON" | "UNDER INVESTIGATION";
// Change `status` to "HANDS-ON" once a domain is backed by your own work.
export const domains: { id: string; title: string; status: Status; items: string[] }[] = [
  { id: "A", title: "Vulnerability Research & CVE Hunting", status: "HANDS-ON", items: ["Software vulnerability discovery", "Root-cause analysis", "Vulnerability validation and impact assessment", "CVE research and disclosure workflows", "Security advisories and technical reporting"] },
  { id: "B", title: "Web Application & API Security", status: "HANDS-ON", items: ["Authentication and authorization weaknesses", "IDOR and broken access control", "SQL injection and cross-site scripting", "SSRF and path traversal", "HTTP request smuggling", "Business logic flaws and privilege escalation", "API trust boundaries and access-control failures"] },
  { id: "C", title: "Wireless Security", status: "HANDS-ON", items: ["Wi-Fi security and protocol analysis", "Bluetooth security", "Wireless attack surfaces and insecure device pairing", "Network traffic analysis", "Authentication and configuration weaknesses"] },
  { id: "D", title: "Android & Mobile Security", status: "HANDS-ON", items: ["Android application security", "Insecure data storage and exposed secrets", "Permission and authentication weaknesses", "Mobile application attack surfaces", "Malware behavior and mobile threat analysis"] },
  { id: "E", title: "Camera & Connected-Device Security", status: "HANDS-ON", items: ["Camera device and management-interface security", "Exposed services and insecure configurations", "IoT attack surfaces", "Authentication and firmware security", "Network communication analysis"] },
  { id: "F", title: "Automotive Security", status: "HANDS-ON", items: ["Vehicle-connected systems and attack surfaces", "Automotive wireless interfaces", "Telematics and connected-device security", "Protocol and trust-boundary analysis", "Research into vehicle software and communication security"] },
];

export const expertise = ["Offensive security testing", "Bug bounty hunting", "Vulnerability research", "Web application penetration testing", "API security", "Network security", "Attack-path analysis", "Vulnerability documentation", "Responsible disclosure"];
export const toolkit = ["Burp Suite", "Nmap", "FFUF", "Gobuster", "Wireshark", "Kali Linux", "Linux", "Git and GitHub"];

export const practice: { title: string; text: string; href?: string }[] = [
  { title: "Bug Bounty Research", text: "Hands-on investigation of web application and API vulnerabilities, with a focus on identifying weaknesses, validating security impact, and documenting reproducible findings.", href: "/writeups" },
  { title: "Professional Security Reports", text: "A collection of structured reports documenting vulnerability behavior, technical evidence, impact, reproduction steps, and remediation considerations.", href: "https://github.com/Karabo-073/CTF-Reports" },
  { title: "Vulnerability Research & CVE Hunting", text: "Research into software weaknesses, vulnerability validation, root-cause investigation, and responsible disclosure." },
  { title: "Technical Research & Publications", text: "Technical writing covering security concepts, practical investigations, vulnerability analysis, and offensive security techniques.", href: "/articles" },
  { title: "Hands-on Security Challenges", text: "Practical work across CTF environments, security labs, and deliberately vulnerable systems to investigate exploitation techniques and defensive weaknesses.", href: "https://tryhackme.com/p/VantaRoot" },
];

export const work = [
  { title: "Bug Bounty Writeups", text: "Detailed writeups of real findings.", href: "/writeups" },
  { title: "Security Reports", text: "Structured vulnerability reports and CTF reports.", href: "https://github.com/Karabo-073/CTF-Reports" },
  { title: "Technical Articles", text: "Technical research published on Medium.", href: "/articles" },
  { title: "YouTube Research Videos", text: "Walkthroughs and technical videos.", href: "/videos" },
  { title: "TryHackMe Rooms", text: "Hands-on rooms I have created.", href: "/tryhackme" },
  { title: "Security Projects & Tools", text: "NeuroLock IDS, a phishing simulation, and web application research.", href: "https://github.com/Karabo-073/" },
];

export const contactLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/manuel-molapo-619182342/" },
  { label: "GitHub", href: "https://github.com/Karabo-073/" },
  { label: "TryHackMe", href: "https://tryhackme.com/p/VantaRoot" },
  { label: "Medium", href: "https://medium.com/@molapomanuel709" },
  { label: "Research Videos", href: "https://vantaroot.vercel.app/videos" },
];