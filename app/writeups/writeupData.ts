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
  {
    slug: "bluetooth-hacking",
    id: "BLOG_01",
    section: "RESEARCH BLOG",
    category: "BLUETOOTH SECURITY",
    title: "Bluetooth Hacking",
    tags: ["Bluetooth", "Research", "Tool Analysis"],
    date: "",
    published: true,
    content: [
      { type: "note", text: "This article is a technical analysis of an existing open-source tool. It discusses concepts and the tool's intended techniques, not confirmed exploitation results against any specific device." },

      { type: "h2", text: "Overview" },
      { type: "p", text: "BTStorm is a Python-based Bluetooth denial-of-service (DoS) tool. It attempts to disrupt Bluetooth connections using L2ping flooding and device-disconnection techniques." },
      { type: "link", href: "https://github.com/thakur2309/BTSTORM", label: "View the BTStorm repository on GitHub" },

      { type: "h2", text: "How Bluetooth L2CAP Ping Works" },
      { type: "p", text: "Bluetooth's Logical Link Control and Adaptation Protocol (L2CAP) includes an echo request and response mechanism, commonly referred to as l2ping. It is used to check whether a Bluetooth device is reachable, similar in concept to an ICMP ping on an IP network." },
      { type: "p", text: "A flooding approach sends a high volume of these echo requests to a target device in a short period. If a device cannot process the volume of requests, its Bluetooth stack or active connections may become unresponsive, which is the basis of the denial-of-service technique BTStorm attempts to use." },

      { type: "h2", text: "Examining the Tool" },
      { type: "p", text: "At a conceptual level, BTStorm's approach involves identifying a target device over Bluetooth, then generating repeated L2CAP echo requests aimed at that device, alongside logic intended to force or encourage an existing connection to drop." },
      { type: "p", text: "The tool's effectiveness depends heavily on the target device's Bluetooth chipset, firmware, operating system, distance, interference, and how that implementation handles a high volume of echo requests. Results are expected to vary significantly between devices, and some modern devices include protections against this kind of flooding." },

      { type: "h2", text: "Research Focus" },
      {
        type: "list",
        items: [
          "Understand how Bluetooth communication and L2CAP ping mechanisms work.",
          "Examine the tool's implementation and identify the techniques it attempts to use.",
          "Discuss Bluetooth availability risks and potential defensive measures.",
          "Explain the limitations of the tool and the importance of testing only on authorized devices and isolated lab environments.",
        ],
      },

      { type: "h2", text: "Defensive Considerations" },
      { type: "p", text: "Bluetooth availability risks like this generally fall under denial-of-service rather than data compromise, but a disrupted connection can still have real consequences, for example on devices relied on for audio, input, or control. Devices and firmware that rate-limit or ignore excessive echo requests, and that fail safely when a connection drops unexpectedly, are more resilient to this class of technique." },

      { type: "h2", text: "Limitations & Responsible Testing" },
      { type: "p", text: "This article does not claim that BTStorm works against every device, and no specific test results are reported here. Any hands-on testing of tools like this should only be carried out against devices you own or are explicitly authorized to test, inside an isolated lab environment, never against devices or networks belonging to other people." },
    ],
  },
  // Four empty placeholder cards — fill in slug/title/content and set published: true when ready.
  { slug: "research-blog-placeholder-2", id: "BLOG_02", section: "RESEARCH BLOG", category: "COMING SOON", title: "", cardTitle: "Coming Soon", tags: ["Research Blog"], date: "", published: false, content: [] },
  { slug: "research-blog-placeholder-3", id: "BLOG_03", section: "RESEARCH BLOG", category: "COMING SOON", title: "", cardTitle: "Coming Soon", tags: ["Research Blog"], date: "", published: false, content: [] },
  { slug: "research-blog-placeholder-4", id: "BLOG_04", section: "RESEARCH BLOG", category: "COMING SOON", title: "", cardTitle: "Coming Soon", tags: ["Research Blog"], date: "", published: false, content: [] },
  { slug: "research-blog-placeholder-5", id: "BLOG_05", section: "RESEARCH BLOG", category: "COMING SOON", title: "", cardTitle: "Coming Soon", tags: ["Research Blog"], date: "", published: false, content: [] },
];

export const getWriteup = (slug: string) => writeups.find((w) => w.slug === slug);
export const bySection = (s: Section) => writeups.filter((w) => w.section === s);