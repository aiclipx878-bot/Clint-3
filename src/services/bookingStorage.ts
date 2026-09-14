import { Booking, BookingStatus } from '../types/booking';

const STORAGE_KEY = 'asdullah_live_bookings_v1';
export const BOOKING_UPDATE_EVENT = 'asdullah_booking_updated';

// Realistic initial seed data showing live campsite and recovery bookings
const INITIAL_SEED_BOOKINGS: Booking[] = [
  {
    id: 'CAMP-7821',
    type: 'campsite',
    customerName: 'Marcus Vance',
    contact: '+1 (415) 890-2144',
    locationOrPlatform: 'Silver Pine Campsite — Pitch #12 (Riverfront)',
    date: '2026-09-18',
    timeSlot: 'Check-in: 14:00 (3 Nights)',
    guestsOrUnits: 4,
    priceOrEstimate: '$240',
    notes: 'Requested tent setup assistance and campfire firewood bundle. Bringing 2 vehicles.',
    status: 'confirmed',
    createdAt: new Date(Date.now() - 1000 * 60 * 18).toISOString(), // 18 mins ago
  },
  {
    id: 'CAMP-7822',
    type: 'campsite',
    customerName: 'Elena Rostova',
    contact: '+44 7700 900123',
    locationOrPlatform: 'Whispering Cedars Campsite — Eco Glamping Dome 2',
    date: '2026-09-21',
    timeSlot: 'Check-in: 15:00 (2 Nights)',
    guestsOrUnits: 2,
    priceOrEstimate: '$380',
    notes: 'Anniversary retreat booking. Requested solar power pack and guided night trail map.',
    status: 'pending',
    createdAt: new Date(Date.now() - 1000 * 60 * 4).toISOString(), // 4 mins ago
  },
  {
    id: 'REC-9034',
    type: 'whatsapp_recovery',
    customerName: 'Zubair Al-Mansoor',
    contact: '+91 98450 12389',
    locationOrPlatform: 'WhatsApp Business Official Channel',
    date: '2026-09-14',
    timeSlot: 'Priority 1-Hour Protocol',
    guestsOrUnits: 1,
    priceOrEstimate: 'Priority Intake',
    notes: 'Spam flag false positive after bulk catalog update. 12,000 customers impacted.',
    status: 'in_progress',
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
  },
  {
    id: 'CAMP-7823',
    type: 'campsite',
    customerName: 'Devon Walker',
    contact: '+1 (503) 712-4490',
    locationOrPlatform: 'Redwood Valley Campsite — Wilderness Camp 07',
    date: '2026-09-25',
    timeSlot: 'Check-in: 12:00 (4 Nights)',
    guestsOrUnits: 6,
    priceOrEstimate: '$320',
    notes: 'Family camping group with kids. Requested bear locker and potable water hookup.',
    status: 'confirmed',
    createdAt: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
  },
  {
    id: 'REC-9031',
    type: 'instagram_recovery',
    customerName: 'Amina Khatun',
    contact: '@amina_couture',
    locationOrPlatform: 'Instagram Creator Account',
    date: '2026-09-13',
    timeSlot: 'Expedited Case Review',
    guestsOrUnits: 1,
    priceOrEstimate: 'Verified Case',
    notes: 'Account suspended during live fashion drop. Meta appeal ticket submitted.',
    status: 'completed',
    createdAt: new Date(Date.now() - 1000 * 60 * 240).toISOString(),
  },
];

export function getStoredBookings(): Booking[] {
  if (typeof window === 'undefined') return INITIAL_SEED_BOOKINGS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_SEED_BOOKINGS));
      return INITIAL_SEED_BOOKINGS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : INITIAL_SEED_BOOKINGS;
  } catch (err) {
    console.error('Failed to load bookings from storage', err);
    return INITIAL_SEED_BOOKINGS;
  }
}

export function saveBookings(bookings: Booking[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
    window.dispatchEvent(new CustomEvent(BOOKING_UPDATE_EVENT, { detail: bookings }));
  } catch (err) {
    console.error('Failed to save bookings to storage', err);
  }
}

export function addBooking(bookingData: Omit<Booking, 'id' | 'createdAt'>): Booking {
  const current = getStoredBookings();
  const prefix = bookingData.type === 'campsite' ? 'CAMP' : 'REC';
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const newBooking: Booking = {
    ...bookingData,
    id: `${prefix}-${randomNum}`,
    createdAt: new Date().toISOString(),
  };

  const updated = [newBooking, ...current];
  saveBookings(updated);
  return newBooking;
}

export function updateBookingStatus(id: string, newStatus: BookingStatus): void {
  const current = getStoredBookings();
  const updated = current.map((b) => (b.id === id ? { ...b, status: newStatus } : b));
  saveBookings(updated);
}

export function deleteBooking(id: string): void {
  const current = getStoredBookings();
  const updated = current.filter((b) => b.id !== id);
  saveBookings(updated);
}

export function resetToSeedBookings(): Booking[] {
  saveBookings(INITIAL_SEED_BOOKINGS);
  return INITIAL_SEED_BOOKINGS;
}
