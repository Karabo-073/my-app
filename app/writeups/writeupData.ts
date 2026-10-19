// ─────────────────────────────────────────────────────────────
//  WRITE YOUR WRITEUPS HERE. This is the only file you usually edit.
//
//  1. Each writeup is one object in the `writeups` array.
//  2. `section` controls which of the three sections it appears in:
//     "BUG BOUNTY" | "CVE" | "RESEARCH BLOG"
//  3. `content` is the article, built from simple blocks (see below).
//  4. Keep `published: false` while you write, or for an empty
//     placeholder card. Set it to true and the card becomes clickable.
//  5. The page lives at /writeups/<slug> (you can always open it directly).
//  6. Images: put the file in  public/writeups/  and use src: "/writeups/name.png"
// ─────────────────────────────────────────────────────────────
export type Block =
  | { type: "h2" | "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; lang?: string; code: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "link"; href: string; label: string }
  | { type: "note"; text: string };

export type Section = "BUG BOUNTY" | "CVE" | "RESEARCH BLOG";

export type Writeup = {
  slug: string; // used in the web address: /writeups/<slug>
  id: string;
  section: Section;
  category: string;
  title: string; // heading on the writeup page
  cardTitle?: string; // optional shorter title shown on the card
  tags: string[];
  date: string; // free text, e.g. "October 2026"
  published: boolean; // false = "Coming Soon" card, no page is linked
  content: Block[];
};

export const writeups: Writeup[] = [
  // ───────────────────────── BUG BOUNTY ─────────────────────────
  {
    slug: "business-logic-subscription-validation",
    id: "WRITEUP_01",
    section: "BUG BOUNTY",
    category: "BUSINESS LOGIC",
    title: "How I Identified a Potential Subscription Payment Enforcement Issue Despite Insufficient Funds",
    cardTitle: "Business Logic / Subscription Validation on real live target",
    tags: ["Bug Bounty", "Writeup"],
    date: "",
    published: true,
    content: [
      { type: "note", text: "This research was conducted on a live target, and the issue was privately reported to the platform." },

      { type: "h2", text: "Summary" },
      { type: "p", text: "The application uses an automatic subscription renewal feature. On the 29th, the scheduled payment failed because my bank account had insufficient funds to complete the international transaction." },
      { type: "p", text: "Following the failed payment, I observed that the application continued to provide access to premium features. Instead of restricting access, the application sent me an email requesting that I update my payment method. After updating the payment method, premium access remained available." },
      { type: "p", text: "Seven days after the initial failed payment, the application automatically retried the payment. However, premium access remained available despite the initial payment failure." },
      { type: "p", text: "This behaviour may indicate a potential inconsistency between payment status and subscription entitlement enforcement. Further investigation was conducted to determine whether this is an unintended vulnerability or an intentional billing grace period." },

      { type: "h2", text: "Proof of Concept" },
      { type: "p", text: "The initial payment attempt failed because my bank notified me that my account had insufficient funds to process the international payment." },
      { type: "image", src: "/writeups/bank-notice.png", alt: "Bank notification of insufficient funds", caption: "Bank notification of the failed international payment" },
      { type: "p", text: "Although the payment failed, I did not update my payment method. I observed that the application continued to grant access to premium features instead of restricting them due to the unsuccessful payment. The application only sent an email requesting that I update my payment method, while premium access remained available." },
      { type: "image", src: "/writeups/email-notice.png", alt: "Email requesting a payment method update", caption: "Email requesting a payment method update while premium access remained available" },
      { type: "p", text: "After the initial payment failure, I updated my payment method using invalid bank account details to determine whether the application properly validated the new payment information." },
      { type: "p", text: "The application appeared to accept the updated payment method without immediately verifying whether the payment could be successfully processed. Despite using invalid payment details, I continued to have access to premium features." },
      { type: "image", src: "/writeups/payment-update.jpeg", alt: "Payment method update", caption: "Payment method update" },
      { type: "p", text: "When the application repeated its payment process, I observed the same behaviour: premium access remained available even though I had not established a valid, successful payment." },
      { type: "image", src: "/writeups/retry-access.png", alt: "Premium access after the payment retry", caption: "Premium access still available after the payment retry" },
      { type: "p", text: "These observations suggest a potential weakness in payment validation and subscription entitlement enforcement." },

      { type: "h2", text: "Remediation" },
      { type: "p", text: "To prevent potential subscription payment bypasses, applications should enforce subscription entitlements based on verified payment and subscription states rather than simply accepting an updated payment method." },
      { type: "p", text: "Recommended measures include:" },
      {
        type: "list",
        items: [
          "Enforce server-side subscription validation: Verify the user’s subscription status on the server before granting access to premium features.",
          "Validate payment status: Treat pending, failed, and declined payments differently from confirmed successful transactions. Updating payment details must not automatically be treated as proof of payment.",
          "Implement clear billing grace periods: If temporary premium access is permitted after a failed payment, define a specific grace period and enforce its expiration consistently.",
          "Synchronize payment events: Ensure payment-provider notifications, retries, and subscription state transitions are processed reliably to prevent inconsistencies between billing records and access permissions.",
          "Revoke expired entitlements: When the applicable grace period expires without a successful payment, restrict premium access according to the application’s billing policy.",
          "Test subscription lifecycle scenarios: Include failed payments, pending transactions, invalid payment details, expired subscriptions, payment retries, and successful payment recovery in security and regression testing.",
        ],
      },
      { type: "p", text: "These measures help ensure that premium access is granted according to verified subscription entitlements and that payment failures are handled consistently." },
    ],
  },
  // Five empty placeholder cards — fill in slug/title/content and set published: true when ready.
  { slug: "bug-bounty-placeholder-2", id: "WRITEUP_02", section: "BUG BOUNTY", category: "COMING SOON", title: "", cardTitle: "Coming Soon", tags: ["Bug Bounty"], date: "", published: false, content: [] },
  { slug: "bug-bounty-placeholder-3", id: "WRITEUP_03", section: "BUG BOUNTY", category: "COMING SOON", title: "", cardTitle: "Coming Soon", tags: ["Bug Bounty"], date: "", published: false, content: [] },
  { slug: "bug-bounty-placeholder-4", id: "WRITEUP_04", section: "BUG BOUNTY", category: "COMING SOON", title: "", cardTitle: "Coming Soon", tags: ["Bug Bounty"], date: "", published: false, content: [] },
  { slug: "bug-bounty-placeholder-5", id: "WRITEUP_05", section: "BUG BOUNTY", category: "COMING SOON", title: "", cardTitle: "Coming Soon", tags: ["Bug Bounty"], date: "", published: false, content: [] },
  { slug: "bug-bounty-placeholder-6", id: "WRITEUP_06", section: "BUG BOUNTY", category: "COMING SOON", title: "", cardTitle: "Coming Soon", tags: ["Bug Bounty"], date: "", published: false, content: [] },

  // ───────────────────────────── CVE ─────────────────────────────
  // One empty placeholder card — no CVE has been assigned yet, so no ID or link is shown.
  { slug: "cve-placeholder-1", id: "CVE_01", section: "CVE", category: "COMING SOON", title: "", cardTitle: "Coming Soon", tags: ["CVE"], date: "", published: false, content: [] },

  // ───────────────────────── RESEARCH BLOG ─────────────────────────
  
  // ───────────────────────── RESEARCH BLOG ─────────────────────────
  {
    slug: "bluetooth-dos-research",
    id: "BLOG_01",
    section: "RESEARCH BLOG",
    category: "BLUETOOTH SECURITY",
    title: "Bluetooth Denial-of-Service Research Using BTStorm",
    cardTitle: "Bluetooth DoS: Practical Investigation",
    tags: ["Bluetooth", "DoS", "Kali Linux", "Security Research"],
    date: "October 2026",
    published: true,
    content: [
      {
        type: "note",
        text: "Testing was performed against my own Huawei smartphone. This article documents the observed behaviour of the tested setup and does not claim that the technique affects every Bluetooth device."
      },
      {
        type: "image",
        src: "/writeups/DDOS%20attack%20on%20Bluetooth%20frontpage.png",
        alt: "Bluetooth denial-of-service research",
        caption: "Bluetooth security testing with Kali Linux"
      },
      { type: "h2", text: "Introduction" },
      {
        type: "p",
        text: "Bluetooth is widely used for audio, file transfers, input devices, and communication between mobile devices. Although it provides convenient short-range connectivity, weaknesses in protocol implementations and connection handling can expose devices to availability attacks."
      },
      {
        type: "p",
        text: "In this investigation, I examined BTStorm, an open-source Python-based tool designed to attempt Bluetooth denial-of-service (DoS) attacks using techniques such as L2CAP echo-request flooding and connection disruption."
      },
      {
        type: "link",
        href: "https://github.com/thakur2309/BTSTORM",
        label: "View the BTStorm repository on GitHub"
      },
      { type: "h2", text: "How Bluetooth DoS Works" },
      {
        type: "p",
        text: "A denial-of-service attack attempts to make a service unavailable or unreliable. Bluetooth attacks may involve excessive requests, repeated connection attempts, or weaknesses in a device's Bluetooth protocol implementation."
      },
      {
        type: "p",
        text: "L2CAP, the Logical Link Control and Adaptation Protocol, supports communication mechanisms including echo requests and responses. A vulnerable implementation may handle excessive traffic poorly, although flooding does not automatically cause a device to disconnect or crash."
      },
      { type: "h2", text: "Research Environment" },
      {
        type: "list",
        items: [
          "Kali Linux running on my laptop.",
          "BTStorm, an open-source Bluetooth testing tool.",
          "My own Huawei smartphone as the test device.",
          "Bluetooth discovery and service inspection utilities."
        ]
      },
      {
        type: "image",
        src: "/writeups/Picture1.png",
        alt: "BTStorm research screenshot",
        caption: "Tool investigation"
      },
      {
        type: "image",
        src: "/writeups/Respiratory%20cloning.png",
        alt: "BTStorm repository setup",
        caption: "Repository setup and tool configuration"
      },
      { type: "h2", text: "Observations" },
      {
        type: "p",
        text: "I inspected the tool and prepared the Bluetooth environment for testing. My laptop identified my Huawei phone during device discovery."
      },
      {
        type: "image",
        src: "/writeups/hciConfig%20command.png",
        alt: "Bluetooth interface configuration",
        caption: "Bluetooth interface inspection"
      },
      {
        type: "image",
        src: "/writeups/Phone%20discover.png",
        alt: "Huawei phone discovered over Bluetooth",
        caption: "My Huawei smartphone appeared during device discovery"
      },
      {
        type: "p",
        text: "After selecting my own device for the test, I observed a disruption in Bluetooth connectivity and was unable to connect to other devices as expected during the experiment. This was an observation from my particular test setup, not proof of a universal Bluetooth vulnerability."
      },
      {
        type: "image",
        src: "/writeups/DDOS%20attack.png",
        alt: "Bluetooth testing results",
        caption: "Observed Bluetooth connectivity disruption"
      },
      { type: "h2", text: "Limitations" },
      {
        type: "p",
        text: "The observed disruption does not establish the precise cause, prove that the phone's Bluetooth stack crashed, or demonstrate that the same behaviour affects other models. Further controlled testing and diagnostic evidence would be needed to establish the underlying mechanism."
      },
      { type: "h2", text: "Defensive Measures" },
      {
        type: "list",
        items: [
          "Keep the operating system and Bluetooth firmware updated.",
          "Disable Bluetooth when it is not needed.",
          "Avoid accepting unexpected pairing requests.",
          "Remove unknown paired devices.",
          "Investigate unexpected connection failures and report reproducible implementation vulnerabilities to the relevant vendor."
        ]
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "This investigation explored Bluetooth availability risks and the behaviour of an existing open-source tool. The main lesson is that tool execution alone is not sufficient to establish a vulnerability: reliable security research requires reproducible evidence, analysis of the underlying cause, and clear documentation of limitations."
      }
    ]
  },
  {
    slug: "wifi-security-research",
    id: "BLOG_02",
    section: "RESEARCH BLOG",
    category: "WIRELESS SECURITY",
    title: "Wi-Fi Security Research: WPA2 Handshake Capture and Password Assessment",
    cardTitle: "Wi-Fi Security: WPA2 Handshake Analysis",
    tags: ["Wi-Fi", "WPA2", "Aircrack-ng", "Wireless Research"],
    date: "October 2026",
    published: true,
    content: [
      {
        type: "note",
        text: "This experiment used my own Huawei mobile hotspot, my own client device, and my Kali Linux laptop. Password assessment was limited to my authorised lab."
      },
      {
        type: "image",
        src: "/writeups/Wifi%20image.png",
        alt: "Wi-Fi security research",
        caption: "Wireless security testing with Kali Linux"
      },
      { type: "h2", text: "Introduction" },
      {
        type: "p",
        text: "Wi-Fi security depends on the authentication protocol, password strength, access point configuration, and the security of connected devices. This experiment explored wireless reconnaissance, traffic capture, WPA2 handshake observation, and password assessment in a controlled environment."
      },
      { type: "h2", text: "Research Objective" },
      {
        type: "p",
        text: "The objective was to investigate how a nearby observer could collect wireless authentication traffic and assess whether a captured WPA2-Personal handshake could be matched against candidate passwords."
      },
      { type: "h2", text: "Lab Environment" },
      {
        type: "list",
        items: [
          "Kali Linux on my laptop.",
          "The laptop's built-in wireless adapter.",
          "My own Huawei smartphone configured as a hotspot.",
          "A second device authorised to connect to the hotspot.",
          "Aircrack-ng wireless analysis tools."
        ]
      },
      { type: "h2", text: "Methodology and Observations" },
      {
        type: "p",
        text: "I first identified my hotspot's BSSID, operating channel, and security configuration. This reconnaissance established which wireless network I was examining."
      },
      {
        type: "image",
        src: "/writeups/Discovery%20wifi.png",
        alt: "Hotspot discovery",
        caption: "Identifying the test hotspot"
      },
      {
        type: "p",
        text: "I prepared a candidate password wordlist for the authorised assessment. Wordlist-based testing checks whether a candidate matches the password used to derive the network's authentication keys; it does not automatically reveal every password."
      },
      {
        type: "image",
        src: "/writeups/Wordlist%20Creation.png",
        alt: "Candidate wordlist creation",
        caption: "Preparing candidate passwords"
      },
      {
        type: "image",
        src: "/writeups/Payloads%20wordlist.png",
        alt: "Password assessment wordlist",
        caption: "Candidate password list"
      },
      {
        type: "p",
        text: "Using Kali Linux and the Aircrack-ng suite, I monitored the wireless environment and observed authentication traffic associated with a client reconnection. A valid capture of the WPA2 four-way handshake can provide material for offline password verification."
      },
      {
        type: "image",
        src: "/writeups/Start%20wlan.png",
        alt: "Wireless interface preparation",
        caption: "Preparing the wireless interface"
      },
      {
        type: "image",
        src: "/writeups/Traffic%20Capture.png",
        alt: "Wireless traffic capture",
        caption: "Monitoring the authorised lab network"
      },
      {
        type: "image",
        src: "/writeups/Handshake.png",
        alt: "WPA2 handshake observation",
        caption: "Handshake capture observation"
      },
      { type: "h2", text: "Password Assessment" },
      {
        type: "p",
        text: "I then assessed the captured authentication material against my candidate wordlist and identified a matching password for my own hotspot. This demonstrated that the tested password was present in the candidate set and could be verified using the captured material."
      },
      {
        type: "image",
        src: "/writeups/Passwordcracking.png",
        alt: "Offline password assessment",
        caption: "Password assessment in the authorised lab"
      },
      { type: "h2", text: "Technical Findings" },
      {
        type: "list",
        items: [
          "Wireless reconnaissance identified the test hotspot and its configuration.",
          "The client reconnection provided an opportunity to observe WPA2 authentication traffic.",
          "Offline candidate testing identified the hotspot password in the wordlist used.",
          "The result illustrates the importance of using long, unique, unpredictable Wi-Fi passwords."
        ]
      },
      { type: "h2", text: "Limitations" },
      {
        type: "p",
        text: "The result applies to the password and devices used in this lab. It does not mean every WPA2 network can be compromised. Offline password assessment depends on obtaining suitable authentication material and having a candidate that matches the actual password."
      },
      { type: "h2", text: "Defensive Recommendations" },
      {
        type: "list",
        items: [
          "Use a long, unique, randomly generated Wi-Fi password.",
          "Prefer WPA3-Personal where supported, or properly configured WPA2-AES.",
          "Disable obsolete security modes such as WEP and avoid legacy compatibility settings where possible.",
          "Keep router and client firmware updated.",
          "Use a separate guest network for untrusted devices."
        ]
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "This authorised experiment demonstrated the relationship between wireless authentication traffic and offline password assessment. Strong credentials and modern wireless security settings substantially improve resistance to common password-guessing attacks."
      }
    ]
  },
  {
    slug: "evil-twin-access-point-detection",
    id: "BLOG_03",
    section: "RESEARCH BLOG",
    category: "EVIL TWIN SECURITY",
    title: "Wi-Fi Access Point Detection on Android Using Kali Linux: A Preliminary Experiment",
    cardTitle: "Evil Twin Threats: Android and Wi-Fi",
    tags: ["Evil Twin", "Wi-Fi", "Android", "Wireless Research"],
    date: "October 2026",
    published: true,
    content: [
      {
        type: "note",
        text: "This was a preliminary experiment using a test access point that I created. It did not establish that a full Evil Twin attack succeeded."
      },
      {
        type: "image",
        src: "/writeups/Wifi%20image.png",
        alt: "Wireless access point security research",
        caption: "Investigating Wi-Fi access point behaviour"
      },
      { type: "h2", text: "Introduction" },
      {
        type: "p",
        text: "An Evil Twin attack involves a rogue wireless access point that impersonates or resembles a legitimate Wi-Fi network. Depending on the configuration and user behaviour, such an attack may create opportunities for phishing, traffic manipulation, or other abuse."
      },
      {
        type: "p",
        text: "A matching network name alone does not prove that a phone will connect to a rogue access point, disclose credentials, or expose encrypted traffic. The outcome depends on authentication, device behaviour, and other security controls."
      },
      { type: "h2", text: "Research Objective" },
      {
        type: "p",
        text: "I wanted to verify that my Kali Linux wireless adapter could create a test access point and observe whether my Huawei Android phone detected it."
      },
      { type: "h2", text: "Lab Environment" },
      {
        type: "list",
        items: [
          "Kali Linux laptop.",
          "Built-in wireless adapter identified as wlan0.",
          "NetworkManager and nmcli.",
          "My Huawei Android smartphone.",
          "A test access point named VantaRoot-Lab."
        ]
      },
      { type: "h2", text: "Methodology" },
      {
        type: "p",
        text: "I inspected the wireless interfaces and supported operating modes to determine whether the adapter could operate as an access point."
      },
      {
        type: "image",
        src: "/writeups/device%20status.png",
        alt: "Wireless adapter status",
        caption: "Inspecting wireless adapter capabilities"
      },
      {
        type: "p",
        text: "I then configured a test hotspot named VantaRoot-Lab using NetworkManager. This established a controlled wireless environment for observing the phone's behaviour."
      },
      {
        type: "image",
        src: "/writeups/wifi%20properties.png",
        alt: "Test Wi-Fi access point properties",
        caption: "Configuring the test access point"
      },
      {
        type: "p",
        text: "I opened the Wi-Fi settings on my Huawei smartphone and observed the list of available networks."
      },
      {
        type: "image",
        src: "/writeups/Visible%20network.png",
        alt: "Test network visible on Android",
        caption: "The phone detected VantaRoot-Lab"
      },
      { type: "h2", text: "Findings" },
      {
        type: "list",
        items: [
          "The wireless adapter supported the access point configuration used in the experiment.",
          "The Huawei phone detected the test network.",
          "No obvious warning appeared when the network was displayed in the available networks list."
        ]
      },
      {
        type: "p",
        text: "The absence of a visible warning does not mean that Android failed to detect a confirmed Evil Twin. It only records the phone's observed behaviour when the test access point was available."
      },
      { type: "h2", text: "Limitations" },
      {
        type: "list",
        items: [
          "Only one test access point was created.",
          "A simultaneous duplicate-SSID scenario was not tested.",
          "Credential collection and traffic interception were not tested.",
          "The experiment did not establish a bypass of Android security controls.",
          "Results were not compared across Android versions or device manufacturers."
        ]
      },
      { type: "h2", text: "Defensive Measures" },
      {
        type: "list",
        items: [
          "Verify public Wi-Fi connection details with the network owner.",
          "Disable automatic connection to untrusted networks.",
          "Check website security indicators and never ignore certificate warnings.",
          "Be cautious of unexpected captive portals requesting account credentials.",
          "Use strong wireless authentication and monitor for unauthorised access points in managed environments."
        ]
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "This preliminary experiment established that my adapter could create a test access point and that my phone could detect it. A genuine Evil Twin assessment would require a controlled comparison between legitimate and impersonating access points, with documented connection behaviour and clear limits on what was tested."
      }
    ]
  },
  {
    slug: "nfc-security-explained",
    id: "BLOG_04",
    section: "RESEARCH BLOG",
    category: "NFC SECURITY",
    title: "NFC Security Explained: From the Basics to Real-World Attacks",
    cardTitle: "NFC Security: Protocols, Attacks and Defences",
    tags: ["NFC", "Cryptography", "Mobile Security", "IoT"],
    date: "October 2026",
    published: true,
    content: [
      {
        type: "note",
        text: "This is a technical overview of NFC security concepts and known attack classes, not a claim that payment cards or access-control systems were experimentally compromised."
      },
      { type: "h2", text: "What Is NFC?" },
      {
        type: "p",
        text: "Near Field Communication (NFC) is a short-range wireless technology commonly used in contactless payments, access cards, public transport, and communication between compatible devices. It commonly operates at 13.56 MHz."
      },
      {
        type: "p",
        text: "NFC describes a communication method, not a complete security system. Security depends on the tag or card technology, authentication protocol, cryptographic implementation, reader, and connected application."
      },
      { type: "h2", text: "How NFC Works" },
      {
        type: "p",
        text: "In a common interaction, a reader communicates with a nearby tag or card. Depending on the technology, the card may expose stored data, return an identifier, or perform a cryptographic authentication operation. The reader or backend system then decides what action to allow."
      },
      { type: "h2", text: "Common NFC Security Risks" },
      {
        type: "list",
        items: [
          "Weak authentication: a system trusts a public identifier instead of verifying a legitimate cryptographic response.",
          "Replay attacks: a system accepts previously captured messages instead of requiring fresh authentication.",
          "Relay attacks: communications between legitimate devices are forwarded to defeat expected proximity.",
          "Insecure tags: writable tags redirect users to unexpected or malicious websites.",
          "Poor key management: exposed, weak, or shared cryptographic keys undermine otherwise sound designs."
        ]
      },
      { type: "h2", text: "Cloning, Replay and Relay" },
      {
        type: "p",
        text: "Some basic tags contain data that can be copied, and certain legacy access technologies have known cloning weaknesses. Copying tag contents does not necessarily reproduce cryptographic credentials, so modern protected cards cannot generally be cloned simply by reading their data."
      },
      {
        type: "p",
        text: "A replay attack attempts to reuse a previously recorded message. Well-designed protocols use fresh challenges, counters, or other protections to reject stale authentication exchanges."
      },
      {
        type: "p",
        text: "A relay attack forwards live messages between a legitimate card and a reader. Unlike cloning, it may use the genuine device without extracting its secret key. Effective protection depends on the protocol and the system's ability to verify proximity and transaction legitimacy."
      },
      { type: "h2", text: "Tools for NFC Research" },
      {
        type: "list",
        items: [
          "NFC Tools: inspect and write supported NFC tags.",
          "Proxmark3: analyse supported RFID and NFC technologies and investigate certain protocol weaknesses.",
          "Flipper Zero: explore supported tags and compatible NFC technologies.",
          "NFCGate: study NFC communication and relay behaviour on compatible Android devices."
        ]
      },
      {
        type: "p",
        text: "These tools have different hardware and protocol capabilities. Their presence does not mean every payment card, access badge, or phone can be read, copied, or emulated."
      },
      { type: "h2", text: "A Safe Practical Research Path" },
      {
        type: "list",
        items: [
          "Start with a blank NFC tag you own.",
          "Read its publicly accessible contents with a compatible phone.",
          "Write a harmless test URL to a writable tag and read it back.",
          "Compare the stored data with what your phone displays.",
          "Document the tag type, test conditions, results, and limitations."
        ]
      },
      { type: "h2", text: "Defensive Recommendations" },
      {
        type: "list",
        items: [
          "Use cryptographic authentication rather than trusting identifiers alone.",
          "Implement replay protection with fresh challenges or counters.",
          "Protect cryptographic keys and apply sound key-management practices.",
          "Use appropriate device and account verification when provisioning payment credentials.",
          "Monitor suspicious transactions and keep devices and applications updated.",
          "Inspect unexpected NFC links before opening them."
        ]
      },
      {
        type: "h2",
        text: "Conclusion",
      },
      {
        type: "p",
        text: "NFC security cannot be judged by communication range alone. Effective research examines the complete system, including the card, reader, authentication protocol, application, and backend. The goal is to establish whether the system verifies identity, prevents replay and relay abuse, protects sensitive data, and rejects unauthorised operations.",
      },
    ],
  },
];

export const getWriteup = (slug: string) =>
  writeups.find((w) => w.slug === slug);

export const bySection = (s: Section) =>
  writeups.filter((w) => w.section === s);