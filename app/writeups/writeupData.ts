// ─────────────────────────────────────────────────────────────
//  WRITE YOUR WRITEUPS HERE. This is the only file you edit.
//
//  1. Each writeup is one object in the `writeups` array.
//  2. `content` is the article, built from simple blocks (see below).
//  3. Keep `published: false` while you write. Set it to true and the
//     card on the Writeups page becomes clickable.
//  4. The page lives at /writeups/<slug> (you can always open it directly).
//  5. Images: put the file in  public/writeups/  and use src: "/writeups/name.png"
// ─────────────────────────────────────────────────────────────
export type Block =
  | { type: "h2" | "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; lang?: string; code: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "note"; text: string };

export type Writeup = {
  slug: string; // used in the web address: /writeups/<slug>
  id: string;
  category: string;
  title: string; // heading on the writeup page
  cardTitle?: string; // optional shorter title shown on the card
  tags: string[];
  date: string; // free text, e.g. "October 2026"
  published: boolean;
  content: Block[];
};

export const writeups: Writeup[] = [
  {
    slug: "business-logic-subscription-validation",
    id: "WRITEUP_01",
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
];

export const getWriteup = (slug: string) => writeups.find((w) => w.slug === slug);