export type BookingType = 'campsite' | 'whatsapp_recovery' | 'instagram_recovery' | 'cyber_audit';

export type BookingStatus = 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';

export interface Booking {
  id: string;
  type: BookingType;
  customerName: string;
  contact: string; // phone or email
  locationOrPlatform: string; // e.g. "Mountain Pine Campsite - Site #4" or "WhatsApp Account (+91 8271...)"
  date: string; // e.g. "2026-09-18"
  timeSlot?: string; // e.g. "Check-in 14:00" or "Urgent 1-Hour Review"
  guestsOrUnits: number; // e.g. 3 guests or 1 account
  priceOrEstimate?: string;
  notes: string;
  status: BookingStatus;
  createdAt: string; // ISO string
}
