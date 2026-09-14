import { CaseStudy, ServiceItem, ProcessStep, TestimonialItem, FaqItem } from '../types';

export const AGENCY_CONFIG = {
  name: "Asdullah Ahmed",
  tagline: "Digital Expert | Trusted Recovery Assistance",
  phone: "+91 8271465644",
  rawPhone: "918271465644",
  whatsappUrl: "https://wa.me/918271465644",
  email: "support@recovery-assistance.internal",
  responseWindow: "15–45 minutes average response",
  guaranteeNotice: "Recovery outcomes depend strictly on platform review and applicable terms. No recovery outcome is guaranteed."
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-01",
    title: "WhatsApp Account Ban Reversal",
    platform: "WhatsApp",
    statusBefore: "This account can't use WhatsApp",
    statusDuring: "Account in review (Review requested: Aug 2026)",
    statusAfter: "This account can now use WhatsApp — Unban Done",
    badgeText: "Full Account Restored",
    dateStr: "August 2026",
    summary: "Client experienced an unexpected ban on their primary personal communication account. We assisted in gathering account history, framing the appropriate official platform review, and successfully received access restoration.",
    highlights: [
      "Chats, media, and contact graph 100% intact",
      "Official review cleared by WhatsApp trust systems",
      "Account verified and logged back in smoothly",
      "No security credentials or passwords ever required"
    ],
    clientQuote: "Alhamdulillah! Back in action, chats & media completely preserved.",
    imageVisualType: "whatsapp-unban",
    notificationSnippet: "WhatsApp Support: Welcome back to WhatsApp. Verify your account so you can start chatting."
  },
  {
    id: "case-02",
    title: "Instagram Feature Restriction Removal",
    platform: "Instagram",
    statusBefore: "Feature Restricted — Can't view followers, send DMs, or share links",
    statusDuring: "Community Standards Appeal Submitted",
    statusAfter: "Account Meets All Guidelines — All Restrictions Cleared",
    badgeText: "Restriction Lifted",
    dateStr: "September 2026",
    summary: "Creator profile faced severe feature limits preventing messaging and link sharing. Structured case documentation was prepared for Instagram moderation review, resulting in complete removal of all active penalties.",
    highlights: [
      "Messaging restrictions ending Oct 2026 lifted early",
      "Recommendation eligibility fully green & restored",
      "Monetisation and branded content status cleared",
      "Under-18 availability restored"
    ],
    clientQuote: "Account Status is completely green again. Followers and DMs working seamlessly.",
    imageVisualType: "instagram-restrict",
    notificationSnippet: "Your account meets all of our guidelines. Feature restrictions removed."
  },
  {
    id: "case-03",
    title: "Direct WhatsApp Client Case Journey",
    platform: "WhatsApp",
    statusBefore: "Mera WhatsApp gya 🥺 (Account Banned: 25 August)",
    statusDuring: "Process Done ✅ 6–12 Hours Review Window",
    statusAfter: "WhatsApp Account Restored Successfully 💚",
    badgeText: "Rapid Turnaround",
    dateStr: "25 August 2026",
    summary: "Real-time client assistance conversation. Client submitted ban proof at 15:35, case review submitted at 16:29, and WhatsApp Support notification received at 16:49 confirming full restoration.",
    highlights: [
      "Assistance initiated within 15 minutes of intake",
      "Client kept updated at every review milestone",
      "Official platform push notification received on device",
      "Client confirmed: 'Jazakallah khair bhai ❤️🥺🥺'"
    ],
    clientQuote: "Jazakallah khair bhai ❤️❤️❤️ Mera WhatsApp wapas aa gaya!",
    imageVisualType: "chat-proof",
    notificationSnippet: "WhatsApp Support • 1m: Welcome back to WhatsApp. Verify your account so you can start chatting."
  },
  {
    id: "case-04",
    title: "WhatsApp Business Commercial Account Restored",
    platform: "WhatsApp Business",
    statusBefore: "Business Account Banned — Client Comms Halted",
    statusDuring: "Terms of Service Clarification Appeal",
    statusAfter: "Device & Activity Cleared — Back to Business",
    badgeText: "Enterprise / Business",
    dateStr: "August 2026",
    summary: "High-volume business number was flagged during bulk customer order updates. Structured verification and policy alignment support helped restore customer communication without lost order data.",
    highlights: [
      "Business profile and catalog access preserved",
      "Customer chat logs safely restored upon re-login",
      "Device info validated with WhatsApp Business Support",
      "Follow-up guidance provided to prevent recurring flags"
    ],
    clientQuote: "Ready for Business. Back to work with 0 lost customer contacts.",
    imageVisualType: "side-by-side",
    notificationSnippet: "WhatsApp Business: Welcome back to WhatsApp. Verify your account so you can start chatting."
  },
  {
    id: "case-05",
    title: "Verified Device Notification Proofs",
    platform: "WhatsApp",
    statusBefore: "Multiple Suspended Devices",
    statusDuring: "Systematic Multi-Case Review Routing",
    statusAfter: "Simultaneous Restorations Confirmed on Jio 5G",
    badgeText: "Multi-Case Proof",
    dateStr: "Aug–Sep 2026",
    summary: "Hardware lock screen logs demonstrating consecutive official restoration notifications received on client smartphones (0:31, 10:24, 22:33) confirming successful review conclusions.",
    highlights: [
      "Genuine system push notifications on physical devices",
      "Standard WhatsApp and WhatsApp Business restorations",
      "Transparent timestamps across consecutive dates",
      "Bank payment receipt & client satisfaction confirmations"
    ],
    clientQuote: "Verified notifications on lockscreen — 100% official platform flow.",
    imageVisualType: "lockscreen-proof",
    notificationSnippet: "WhatsApp Support: Welcome back to WhatsApp (3h, 5h, 20h confirmations)"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "WhatsApp Account Restrictions",
    platform: "WhatsApp",
    description: "Specialized assistance for personal accounts that have been temporarily or permanently banned, disabled, or placed under automated review.",
    details: [
      "Analysis of specific ban type (spam flag, temporary suspension, or permanent notice)",
      "Preparation of structured official review appeal statement",
      "Guidance on app re-verification steps post-review",
      "Prevention audit to avoid re-triggering automated filters"
    ],
    timeline: "Standard reviews typically processed in 6–24 hours",
    iconName: "ShieldAlert"
  },
  {
    number: "02",
    title: "Instagram Account Restrictions",
    platform: "Instagram",
    description: "Assistance with disabled, suspended, restricted, or shadow-limited Instagram creator and personal profiles.",
    details: [
      "Assessment of Community Guidelines flags (DMs, link sharing, follow limits)",
      "Assistance with in-app identity confirmation & selfie verification guidance",
      "Preparation of formal appeal cases for human moderation review",
      "Recovery of compromised or inaccessible login handles"
    ],
    timeline: "Review decisions typically rendered in 24–72 hours",
    iconName: "Instagram"
  },
  {
    number: "03",
    title: "Review & Appeal Assistance",
    platform: "Cross-Platform",
    description: "Hands-on help navigating the official review and appeal portals provided by Meta and WhatsApp support infrastructures.",
    details: [
      "Careful wording that adheres to official platform terms of service",
      "Elimination of emotional or aggressive language that causes instant rejections",
      "Tracking appeal response codes and escalation channels",
      "Guidance on secondary review submissions when first appeal is pending"
    ],
    timeline: "Case file prepared and submitted same-day",
    iconName: "FileSearch"
  },
  {
    number: "04",
    title: "Account Access Issues",
    platform: "Authentication & 2FA",
    description: "Guidance for legitimate account owners facing verification code delivery failures, registration loops, or session lockouts.",
    details: [
      "Resolution of SMS OTP delivery roadblocks with network carriers",
      "Assistance when 2-Step Verification PIN was forgotten or reset timer is stuck",
      "Guidance on official backup recovery code retrieval",
      "Strict zero-credential policy: we never ask for your passwords or OTPs"
    ],
    timeline: "Intake and technical guidance within 1 hour",
    iconName: "KeyRound"
  },
  {
    number: "05",
    title: "Recovery Case Assessment",
    platform: "Pre-Review Diagnostic",
    description: "Initial diagnostic review of your account condition to evaluate recovery feasibility before undertaking the appeal process.",
    details: [
      "Review of error screenshots and restriction notices",
      "Realistic assessment of platform policy severity and reinstatement odds",
      "Identification of whether ban is device-level, IP-level, or number-level",
      "Clear, honest advice without false promises or guarantees"
    ],
    timeline: "Rapid diagnostic within 15–30 minutes on WhatsApp",
    iconName: "Activity"
  },
  {
    number: "06",
    title: "Business Account Assistance",
    platform: "WhatsApp Business & API",
    description: "Priority support for businesses facing revenue and client communication disruptions due to account restrictions.",
    details: [
      "Business verification support and Meta Business Manager compliance checks",
      "Messaging template guideline review to prevent automated bulk bans",
      "Customer communications continuity strategy while review is pending",
      "Escalation pathways for registered business entities"
    ],
    timeline: "Priority case handling for active commercial operations",
    iconName: "Briefcase"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Tell Us What Happened",
    tag: "Case Intake",
    description: "Send us a screenshot of your restricted screen and brief details of how the restriction occurred via our direct WhatsApp line.",
    deliverable: "Instant acknowledgement and case intake receipt"
  },
  {
    number: "02",
    title: "Case Assessment",
    tag: "Diagnostic",
    description: "We analyze the restriction category, review history, and policy violation tag to evaluate the appropriate appeal angle.",
    deliverable: "Clear diagnostic report on recovery feasibility"
  },
  {
    number: "03",
    title: "Recovery / Review Guidance",
    tag: "Structured Action",
    description: "We prepare the structured formal statement and guide you through the exact official platform appeal submission flow.",
    deliverable: "Custom appeal wording aligned with Terms of Service"
  },
  {
    number: "04",
    title: "Platform Review",
    tag: "Status Tracking",
    description: "Your case is submitted to the platform's review team. We track the review timeline and prepare any necessary follow-up documentation.",
    deliverable: "Active monitoring until platform decision is returned"
  },
  {
    number: "05",
    title: "Account Access Restored — Where Approved",
    tag: "Re-Verification",
    description: "Upon a favorable platform decision, we guide you through the final re-verification and safety checks to get back to chatting securely.",
    deliverable: "Account re-login, full chat restore & prevention guide"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Structured Assistance",
    desc: "Every case receives an individual assessment rather than automated bot replies or generic script templates.",
    icon: "Shield"
  },
  {
    title: "Clear Communication",
    desc: "Direct 1-on-1 updates via WhatsApp so you know exactly where your case stands throughout the review.",
    icon: "MessageSquare"
  },
  {
    title: "Case-Based Approach",
    desc: "Solutions tailored to whether your account is a personal number, high-value creator profile, or business account.",
    icon: "Layers"
  },
  {
    title: "Privacy-Conscious Handling",
    desc: "We strictly never ask for passwords, OTPs, or recovery codes. All reviews are submitted directly from your own device.",
    icon: "Lock"
  },
  {
    title: "WhatsApp Direct Support",
    desc: "No cumbersome ticket queues. Reach out directly on WhatsApp (+91 8271465644) for immediate human response.",
    icon: "Smartphone"
  },
  {
    title: "Transparent Process",
    desc: "Honest feasibility evaluations upfront with clear, platform-compliant expectations. No false claims or hacking gimmicks.",
    icon: "CheckCircle2"
  }
];

export const REAL_REVIEWS: TestimonialItem[] = [
  {
    id: "rev-1",
    clientContext: "Personal WhatsApp Ban Case",
    platform: "WhatsApp",
    quote: "Jazakallah khair bhai ❤️🥺🥺... Mera WhatsApp wapas aa gaya within hours! Process was very smooth and transparent.",
    outcomeTime: "6–12 Hours Turnaround",
    verifiedStatus: "Verified WhatsApp Support Restoration",
    dateStr: "Aug 2026"
  },
  {
    id: "rev-2",
    clientContext: "Instagram Creator Restriction",
    platform: "Instagram",
    quote: "All my messaging and link sharing limits were cleared. Account Status is back to green! Thank you for the structured review guidance.",
    outcomeTime: "Community Guidelines Cleared",
    verifiedStatus: "Verified In-App Account Status",
    dateStr: "Sep 2026"
  },
  {
    id: "rev-3",
    clientContext: "Commercial WA Business Number",
    platform: "Business Account",
    quote: "Alhamdulillah, back in action without losing any of our customer order history. Transparent, respectful, and very responsive on WhatsApp.",
    outcomeTime: "Business Number Re-Verified",
    verifiedStatus: "Official Verification Pass",
    dateStr: "Aug 2026"
  }
];

export const FAQS: FaqItem[] = [
  {
    category: "Platform Policies",
    question: "Do you guarantee account recovery?",
    answer: "No. Account recovery decisions are ultimately and exclusively made by the relevant platform (Meta, WhatsApp, or Instagram). We provide structured, professional assistance with the official review and appeal process to maximize your chance of a favorable review outcome. We never make false 100% recovery promises."
  },
  {
    category: "Security",
    question: "Should I give you my password or OTP?",
    answer: "No. Absolutely never share passwords, OTPs, SMS verification codes, or authentication keys with anyone, including our agency. All legitimate review requests and verification steps are completed directly on your own device through official platform interfaces."
  },
  {
    category: "General",
    question: "Can every WhatsApp account be recovered?",
    answer: "Not all accounts can be reinstated. Accounts restricted due to automated false positives, temporary spam flags, or misunderstandings have a strong probability of review approval. However, accounts flagged for severe policy violations (such as illegal activities or repeated malicious behavior) may be permanently denied by platform teams."
  },
  {
    category: "General",
    question: "Can you help with Instagram disabled accounts?",
    answer: "Yes. We assist with suspended accounts, disabled profiles, feature blocks (DMs, comments, follower visibility), and identity confirmation review appeals for both personal and creator accounts."
  },
  {
    category: "General",
    question: "How long does recovery assistance take?",
    answer: "Case assessment and appeal preparation are completed within a few hours. Official platform review times typically range from 6 to 24 hours for WhatsApp, and 24 to 72 hours for Instagram, depending on platform review queue volumes."
  },
  {
    category: "Security",
    question: "What information do you need to get started?",
    answer: "Only a screenshot of your restricted error screen, your registered phone number or Instagram handle, and a brief description of what you were doing when the restriction took place. That is all."
  }
];
