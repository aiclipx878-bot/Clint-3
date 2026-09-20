export interface ReviewPhotoItem {
  id: string;
  number: number;
  title: string;
  clientContext: string;
  platform: 'WhatsApp' | 'WhatsApp Business';
  quote: string;
  imageSrc: string;
  fallbackCdnUrl: string;
  originalLink: string;
  highlight: string;
}

export const ALL_REVIEW_PHOTOS: ReviewPhotoItem[] = [
  {
    id: 'proof-1',
    number: 1,
    title: 'Review #1 — Client Account Unban Notice Confirmed',
    clientContext: 'Client Direct Chat Proof',
    platform: 'WhatsApp',
    quote: 'Sir recovery done hogya! Thank you so much for swift action.',
    imageSrc: '/assets/reviews/review_new_1.jpg',
    fallbackCdnUrl: 'https://i.ibb.co/dsSzD6ng/8213e5d3-4ff1-4b34-a6f0-24620ea8f860.jpg',
    originalLink: 'https://ibb.co/5XdfLvqF',
    highlight: 'Official review successfully cleared'
  },
  {
    id: 'proof-2',
    number: 2,
    title: 'Review #2 — Timely Feedback & Successful Verification',
    clientContext: 'Client Direct Chat Proof',
    platform: 'WhatsApp',
    quote: 'Account unban notification arrived, working smooth.',
    imageSrc: '/assets/reviews/review_new_2.jpg',
    fallbackCdnUrl: 'https://i.ibb.co/5hDJBTbP/6d19adef-0dc9-4acc-b00c-2912fad9db64.jpg',
    originalLink: 'https://ibb.co/k2nPQKNt',
    highlight: 'Access restored cleanly'
  },
  {
    id: 'proof-3',
    number: 3,
    title: 'Review #3 — WhatsApp Business Account Restoration',
    clientContext: 'Business Profile Chat Proof',
    platform: 'WhatsApp Business',
    quote: 'Ready for business again. All customer catalogs intact.',
    imageSrc: '/assets/reviews/review_new_3.jpg',
    fallbackCdnUrl: 'https://i.ibb.co/tPqVXcMs/f53b60a7-a3b4-4d26-9e3d-c8a0c7c7f692.jpg',
    originalLink: 'https://ibb.co/Hpt5dYDz',
    highlight: 'Business continuity protected'
  },
  {
    id: 'proof-4',
    number: 4,
    title: 'Review #4 — Notification Alert & Welcome Back Screen',
    clientContext: 'Client Verification Proof',
    platform: 'WhatsApp',
    quote: 'Welcome back to WhatsApp notification received!',
    imageSrc: '/assets/reviews/review_new_4.webp',
    fallbackCdnUrl: 'https://i.im.ge/QQuHYtc/c6c989ed-d118-4d91-827a-ad46c38409f8-t600.webp',
    originalLink: 'https://im.ge/i/QQuHYtc',
    highlight: 'Instant registration unlocked'
  },
  {
    id: 'proof-5',
    number: 5,
    title: 'Review #5 — Client Journey & Relief Statement',
    clientContext: 'Verified Chat Interaction',
    platform: 'WhatsApp',
    quote: 'Mera account wapas aa gya bhai! 100% trustworthy.',
    imageSrc: '/assets/reviews/review_new_5.webp',
    fallbackCdnUrl: 'https://i.im.ge/QQuHbzL/1947be6c-e4b1-4b59-8d17-bd273dff3e26-t600.webp',
    originalLink: 'https://im.ge/i/QQuHbzL',
    highlight: 'Fast turn-around confirmation'
  },
  {
    id: 'proof-6',
    number: 6,
    title: 'Review #6 — Step-by-Step Review Tracking',
    clientContext: 'Chat Screenshot Evidence',
    platform: 'WhatsApp',
    quote: 'Process was transparent from start to finish.',
    imageSrc: '/assets/reviews/review_new_6.webp',
    fallbackCdnUrl: 'https://i.im.ge/QQuH8jx/2e58dbf5-c1dc-49d0-a8ca-627889e466d4-t600.webp',
    originalLink: 'https://im.ge/i/QQuH8jx',
    highlight: 'Full transparency maintained'
  },
  {
    id: 'proof-7',
    number: 7,
    title: 'Review #7 — Payment & Satisfaction Acknowledgment',
    clientContext: 'Client Direct Chat Proof',
    platform: 'WhatsApp',
    quote: 'Best service experience, genuine and honest guidance.',
    imageSrc: '/assets/reviews/review_new_7.webp',
    fallbackCdnUrl: 'https://i.im.ge/QQuHgFG/0060b77a-4506-4572-b105-92e1a29990d6-t600.webp',
    originalLink: 'https://im.ge/i/QQuHgFG',
    highlight: '100% customer satisfaction'
  },
  {
    id: 'proof-8',
    number: 8,
    title: 'Review #8 — Consecutive Multiple Unban Approvals',
    clientContext: 'Lock Screen System Confirmation',
    platform: 'WhatsApp',
    quote: 'Review completed without any hiccups.',
    imageSrc: '/assets/reviews/review_new_8.webp',
    fallbackCdnUrl: 'https://i.im.ge/QQuHRWa/f6553465-78bf-4bf5-b147-1da13475be50-t600.webp',
    originalLink: 'https://im.ge/i/QQuHRWa',
    highlight: 'Hardware push notifications verified'
  }
];
