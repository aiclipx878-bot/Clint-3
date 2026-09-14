export interface CaseStudy {
  id: string;
  title: string;
  platform: 'WhatsApp' | 'Instagram' | 'WhatsApp Business';
  statusBefore: string;
  statusDuring: string;
  statusAfter: string;
  badgeText: string;
  dateStr: string;
  summary: string;
  highlights: string[];
  clientQuote?: string;
  imageVisualType: 'whatsapp-unban' | 'instagram-restrict' | 'lockscreen-proof' | 'chat-proof' | 'side-by-side';
  phoneProofSrc?: string;
  notificationSnippet?: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  platform: string;
  description: string;
  details: string[];
  timeline: string;
  iconName: 'ShieldAlert' | 'Instagram' | 'FileSearch' | 'KeyRound' | 'Activity' | 'Briefcase';
}

export interface ProcessStep {
  number: string;
  title: string;
  tag: string;
  description: string;
  deliverable: string;
}

export interface TestimonialItem {
  id: string;
  clientContext: string;
  platform: 'WhatsApp' | 'Instagram' | 'Business Account';
  quote: string;
  outcomeTime: string;
  verifiedStatus: string;
  dateStr: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Security' | 'Platform Policies';
}
