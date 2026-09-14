import { useState, useRef, ChangeEvent, FormEvent, DragEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  MessageCircle,
  UploadCloud,
  Send,
  ShieldAlert,
  CheckCircle2,
  FileCheck,
  Phone,
  ArrowRight,
  AlertCircle,
  Tent,
  ShieldCheck,
  Calendar,
  Users,
  Compass,
} from 'lucide-react';
import { AGENCY_CONFIG } from '../data/cases';
import { addBooking } from '../services/bookingStorage';

export function ContactSection() {
  const [bookingMode, setBookingMode] = useState<'recovery' | 'campsite'>('recovery');

  // Recovery Form State
  const [formData, setFormData] = useState({
    name: '',
    platform: 'WhatsApp' as 'WhatsApp' | 'Instagram' | 'WhatsApp Business',
    contactHandle: '',
    issueDetails: '',
  });

  // Campsite Booking State
  const [campsiteData, setCampsiteData] = useState({
    customerName: '',
    contact: '',
    campsiteLocation: 'Silver Pine Campsite — Pitch #12 (Riverfront)',
    date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
    guests: 2,
    timeSlot: 'Check-in: 14:00 (Weekend Stay)',
    notes: '',
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lastCreatedBookingId, setLastCreatedBookingId] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      setUploadedFile(file);
    } else {
      alert('Please upload an image screenshot of your restricted account screen.');
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let createdId = '';

    if (bookingMode === 'campsite') {
      if (!campsiteData.customerName || !campsiteData.contact) {
        alert('Please provide your name and contact phone or email.');
        return;
      }

      // Add to live real-time booking storage
      const newBooking = addBooking({
        type: 'campsite',
        customerName: campsiteData.customerName,
        contact: campsiteData.contact,
        locationOrPlatform: campsiteData.campsiteLocation,
        date: campsiteData.date,
        timeSlot: campsiteData.timeSlot,
        guestsOrUnits: campsiteData.guests,
        priceOrEstimate: `$${campsiteData.guests * 80}`,
        notes: campsiteData.notes || 'Booked via campsite intake form.',
        status: 'pending',
      });
      createdId = newBooking.id;

      // Prepare WhatsApp booking confirmation message
      const msg = `*NEW CAMPSITE BOOKING — [${createdId}]*\nName: ${campsiteData.customerName}\nContact: ${campsiteData.contact}\nCampsite: ${campsiteData.campsiteLocation}\nDate: ${campsiteData.date}\nGuests: ${campsiteData.guests}\nSpecial Notes: ${campsiteData.notes || 'None'}`;
      const directUrl = `${AGENCY_CONFIG.whatsappUrl}?text=${encodeURIComponent(msg)}`;

      setTimeout(() => {
        window.open(directUrl, '_blank');
      }, 1400);

    } else {
      if (!formData.name || !formData.contactHandle) {
        alert('Please provide your name and account identifier (Phone number or handle).');
        return;
      }

      // Add to live real-time booking storage
      const newBooking = addBooking({
        type: formData.platform === 'Instagram' ? 'instagram_recovery' : 'whatsapp_recovery',
        customerName: formData.name,
        contact: formData.contactHandle,
        locationOrPlatform: `${formData.platform} Account Review`,
        date: new Date().toISOString().split('T')[0],
        timeSlot: 'Priority 1-Hour Protocol',
        guestsOrUnits: 1,
        priceOrEstimate: 'Structured Case',
        notes: formData.issueDetails || 'Account restriction review requested.',
        status: 'pending',
      });
      createdId = newBooking.id;

      // Prepare WhatsApp URL with prefilled case information
      const msg = `*NEW CASE INTAKE — [${createdId}] — ${formData.platform.toUpperCase()}*\nName: ${formData.name}\nAccount: ${formData.contactHandle}\nPlatform: ${formData.platform}\nIssue: ${formData.issueDetails || 'Account restricted/banned'}\nScreenshot Attached: ${uploadedFile ? uploadedFile.name : 'Ready on WhatsApp'}`;
      const directUrl = `${AGENCY_CONFIG.whatsappUrl}?text=${encodeURIComponent(msg)}`;

      setTimeout(() => {
        window.open(directUrl, '_blank');
      }, 1400);
    }

    setLastCreatedBookingId(createdId);
    setSubmitted(true);

    // Trigger celebratory success particles
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#18D65A', '#35E875', '#B8FFCC', '#FFFFFF'],
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#070B08] border-t border-[#18D65A]/15 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#18D65A]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#18D65A]" />
            <span className="text-xs font-mono tracking-[0.2em] text-[#B8FFCC] uppercase font-semibold">
              INTAKE & BOOKING DESK
            </span>
            <span className="w-2 h-2 rounded-full bg-[#18D65A]" />
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F5F7F5] uppercase">
            Submit Case & Live Bookings
          </h2>

          <p className="mt-3 text-base text-[#8B968E] max-w-xl leading-relaxed">
            Reserve priority account recovery assistance or book a secure campsite retreat. All submissions are broadcast live to our administrator panel instantly.
          </p>

          {/* Dual Intake Mode Selector */}
          <div className="mt-8 flex p-1.5 rounded-2xl bg-[#0B0F0C] border border-[#18D65A]/30 max-w-md w-full shadow-xl">
            <button
              type="button"
              onClick={() => setBookingMode('recovery')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all ${
                bookingMode === 'recovery'
                  ? 'bg-[#18D65A] text-[#050706] shadow-lg shadow-[#18D65A]/20'
                  : 'text-[#8B968E] hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Digital Recovery</span>
            </button>

            <button
              type="button"
              id="tab-campsite-booking"
              onClick={() => setBookingMode('campsite')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all ${
                bookingMode === 'campsite'
                  ? 'bg-[#18D65A] text-[#050706] shadow-lg shadow-[#18D65A]/20'
                  : 'text-[#8B968E] hover:text-white'
              }`}
            >
              <Tent className="w-4 h-4" />
              <span>Book Campsite</span>
            </button>
          </div>
        </div>

        {/* Card Form Container */}
        <div className="rounded-3xl bg-[#0B0F0C] border border-[#18D65A]/30 p-6 sm:p-10 shadow-2xl shadow-black/80">
          
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key={`intake-form-${bookingMode}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {bookingMode === 'recovery' ? (
                  /* RECOVERY FORM */
                  <>
                    {/* Platform Selector Tabs */}
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#B8FFCC] mb-2 font-semibold">
                        Select Restricted Platform *
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {(['WhatsApp', 'Instagram', 'WhatsApp Business'] as const).map((p) => (
                          <button
                            key={p}
                            type="button"
                            onClick={() => setFormData({ ...formData, platform: p })}
                            className={`py-3 px-3 rounded-xl border text-xs font-mono font-bold tracking-wide transition-all ${
                              formData.platform === p
                                ? 'bg-[#18D65A]/15 border-[#18D65A] text-white shadow-md shadow-[#18D65A]/10'
                                : 'bg-[#101512] border-white/5 text-[#8B968E] hover:border-white/20'
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Identifier Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="client-name"
                          className="block text-xs font-mono uppercase text-[#8B968E] mb-2 font-semibold"
                        >
                          Your Name *
                        </label>
                        <input
                          id="client-name"
                          type="text"
                          required
                          placeholder="e.g. Asad or Sarah"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[#101512] border border-white/10 focus:border-[#18D65A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#8B968E]/40 outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-handle"
                          className="block text-xs font-mono uppercase text-[#8B968E] mb-2 font-semibold"
                        >
                          {formData.platform === 'Instagram'
                            ? 'Instagram @Username *'
                            : 'Phone Number with Country Code *'}
                        </label>
                        <input
                          id="contact-handle"
                          type="text"
                          required
                          placeholder={formData.platform === 'Instagram' ? '@yourhandle' : '+91 8271465644'}
                          value={formData.contactHandle}
                          onChange={(e) => setFormData({ ...formData, contactHandle: e.target.value })}
                          className="w-full bg-[#101512] border border-white/10 focus:border-[#18D65A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#8B968E]/40 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Issue Description */}
                    <div>
                      <label
                        htmlFor="issue-details"
                        className="block text-xs font-mono uppercase text-[#8B968E] mb-2 font-semibold"
                      >
                        What happened? (Brief Description)
                      </label>
                      <textarea
                        id="issue-details"
                        rows={3}
                        placeholder="e.g. Received an unexpected ban notice this morning, or account features disabled after sending messages..."
                        value={formData.issueDetails}
                        onChange={(e) => setFormData({ ...formData, issueDetails: e.target.value })}
                        className="w-full bg-[#101512] border border-white/10 focus:border-[#18D65A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#8B968E]/40 outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Screenshot Upload with Drag and Drop */}
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#8B968E] mb-2 font-semibold">
                        Upload Error Screenshot (Recommended)
                      </label>

                      <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                        className={`cursor-pointer border-2 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all ${
                          isDragging
                            ? 'border-[#18D65A] bg-[#18D65A]/10'
                            : uploadedFile
                            ? 'border-[#18D65A]/50 bg-[#122416]/30'
                            : 'border-white/10 hover:border-white/25 bg-[#101512]'
                        }`}
                      >
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                        />

                        {uploadedFile ? (
                          <div className="flex items-center gap-3 text-xs font-mono text-[#35E875]">
                            <FileCheck className="w-6 h-6 text-[#18D65A]" />
                            <div className="text-left">
                              <span className="font-bold block text-white">{uploadedFile.name}</span>
                              <span className="text-[#8B968E]">
                                {(uploadedFile.size / 1024).toFixed(1)} KB • Ready for review
                              </span>
                            </div>
                          </div>
                        ) : (
                          <>
                            <UploadCloud className="w-8 h-8 text-[#18D65A] mb-2" />
                            <p className="text-xs font-medium text-white mb-1">
                              Drag and drop your screenshot here, or <span className="text-[#18D65A] underline">browse files</span>
                            </p>
                            <p className="text-[11px] text-[#8B968E]">
                              Supports PNG, JPG, or JPEG of your restriction notice
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  /* CAMPSITE BOOKING FORM */
                  <>
                    <div className="p-4 rounded-2xl bg-[#122216] border border-[#18D65A]/40 flex items-center gap-3">
                      <Tent className="w-6 h-6 text-[#18D65A] shrink-0" />
                      <div>
                        <h4 className="text-sm font-bold text-white font-sans">Live Campsite Reservation Form</h4>
                        <p className="text-xs text-[#B8FFCC]">
                          Booking is registered instantly into the Live Admin Panel below and dispatched to WhatsApp.
                        </p>
                      </div>
                    </div>

                    {/* Campsite Location Selection */}
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#B8FFCC] mb-2 font-semibold">
                        Choose Campsite & Pitch *
                      </label>
                      <select
                        value={campsiteData.campsiteLocation}
                        onChange={(e) => setCampsiteData({ ...campsiteData, campsiteLocation: e.target.value })}
                        className="w-full bg-[#101512] border border-white/10 focus:border-[#18D65A] rounded-xl px-4 py-3 text-sm text-white outline-none"
                      >
                        <option value="Silver Pine Campsite — Pitch #12 (Riverfront)">Silver Pine Campsite — Pitch #12 (Riverfront)</option>
                        <option value="Whispering Cedars Campsite — Eco Glamping Dome 2">Whispering Cedars Campsite — Eco Glamping Dome 2</option>
                        <option value="Redwood Valley Campsite — Wilderness Camp 07">Redwood Valley Campsite — Wilderness Camp 07</option>
                        <option value="Emerald Lake Campsite — Meadow Pitch #4">Emerald Lake Campsite — Meadow Pitch #4</option>
                        <option value="Highland Overlook Campsite — Stargazer Tent #9">Highland Overlook Campsite — Stargazer Tent #9</option>
                      </select>
                    </div>

                    {/* Customer Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="campsite-client-name"
                          className="block text-xs font-mono uppercase text-[#8B968E] mb-2 font-semibold"
                        >
                          Your Full Name *
                        </label>
                        <input
                          id="campsite-client-name"
                          type="text"
                          required
                          placeholder="e.g. Marcus Vance"
                          value={campsiteData.customerName}
                          onChange={(e) => setCampsiteData({ ...campsiteData, customerName: e.target.value })}
                          className="w-full bg-[#101512] border border-white/10 focus:border-[#18D65A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#8B968E]/40 outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="campsite-contact"
                          className="block text-xs font-mono uppercase text-[#8B968E] mb-2 font-semibold"
                        >
                          Phone Number or Email *
                        </label>
                        <input
                          id="campsite-contact"
                          type="text"
                          required
                          placeholder="+1 (415) 890-2144"
                          value={campsiteData.contact}
                          onChange={(e) => setCampsiteData({ ...campsiteData, contact: e.target.value })}
                          className="w-full bg-[#101512] border border-white/10 focus:border-[#18D65A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#8B968E]/40 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Date & Guests */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="campsite-date"
                          className="block text-xs font-mono uppercase text-[#8B968E] mb-2 font-semibold"
                        >
                          Arrival / Check-in Date *
                        </label>
                        <input
                          id="campsite-date"
                          type="date"
                          required
                          value={campsiteData.date}
                          onChange={(e) => setCampsiteData({ ...campsiteData, date: e.target.value })}
                          className="w-full bg-[#101512] border border-white/10 focus:border-[#18D65A] rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="campsite-guests"
                          className="block text-xs font-mono uppercase text-[#8B968E] mb-2 font-semibold"
                        >
                          Number of Campers / Guests *
                        </label>
                        <input
                          id="campsite-guests"
                          type="number"
                          min={1}
                          max={15}
                          required
                          value={campsiteData.guests}
                          onChange={(e) => setCampsiteData({ ...campsiteData, guests: parseInt(e.target.value) || 1 })}
                          className="w-full bg-[#101512] border border-white/10 focus:border-[#18D65A] rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div>
                      <label
                        htmlFor="campsite-notes"
                        className="block text-xs font-mono uppercase text-[#8B968E] mb-2 font-semibold"
                      >
                        Special Equipment, Parking or Bonfire Requests
                      </label>
                      <textarea
                        id="campsite-notes"
                        rows={2}
                        placeholder="e.g. Tent pitch assistance, extra firewood bundle, trailer parking..."
                        value={campsiteData.notes}
                        onChange={(e) => setCampsiteData({ ...campsiteData, notes: e.target.value })}
                        className="w-full bg-[#101512] border border-white/10 focus:border-[#18D65A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#8B968E]/40 outline-none transition-colors resize-none"
                      />
                    </div>
                  </>
                )}

                {/* Security Note */}
                <div className="p-4 rounded-xl bg-[#14100D] border border-amber-500/20 flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-[#8B968E] leading-relaxed">
                    <strong className="text-amber-300 font-semibold">Live Dispatch: </strong>
                    Your reservation is recorded instantly into the live admin panel below and logged with a unique tracking ID.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  id="btn-submit-case"
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#18D65A] to-[#35E875] text-[#050706] py-4 rounded-full font-bold text-sm tracking-wide shadow-xl shadow-[#18D65A]/25 hover:shadow-[#18D65A]/40 transition-all hover:scale-[1.01] cursor-pointer"
                >
                  {bookingMode === 'campsite' ? (
                    <>
                      <Tent className="w-4 h-4 text-[#050706]" />
                      <span>CONFIRM CAMPSITE BOOKING & SYNC TO ADMIN</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 fill-[#050706]" />
                      <span>SUBMIT CASE FOR REVIEW & SYNC TO ADMIN</span>
                    </>
                  )}
                </button>

                {/* Direct Telephone Line */}
                <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#8B968E] pt-2">
                  <span>Direct Assistance Line: +91 8271465644</span>
                  <span>Average Response: 15–30 minutes</span>
                </div>
              </motion.form>
            ) : (
              /* Submission Successful State */
              <motion.div
                key="submitted-state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#18D65A]/20 border border-[#18D65A]/50 flex items-center justify-center text-[#18D65A] mb-4">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="text-xs font-mono px-3 py-1 rounded-full bg-[#18D65A]/20 text-[#35E875] border border-[#18D65A]/50 mb-2 font-bold">
                  BOOKING ID: {lastCreatedBookingId}
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-2">
                  {bookingMode === 'campsite' ? 'Campsite Booked & Synced Live!' : 'Case Intake Dispatched & Synced!'}
                </h3>

                <p className="text-sm text-[#8B968E] max-w-md mb-6 leading-relaxed">
                  Your reservation is now live in the Admin Panel at the end of this website. Our team has received your ticket and WhatsApp dispatch is ready.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#admin-panel"
                    className="flex items-center justify-center gap-2 bg-[#18D65A] text-[#050706] px-6 py-3 rounded-full font-bold text-xs tracking-wide shadow-lg shadow-[#18D65A]/30 hover:bg-[#35E875] transition-colors"
                  >
                    <span>View In Live Admin Panel ↓</span>
                  </a>

                  <a
                    href={AGENCY_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#101512] border border-[#18D65A]/50 text-white px-5 py-3 rounded-full font-bold text-xs tracking-wide hover:bg-[#142618]"
                  >
                    <MessageCircle className="w-4 h-4 text-[#18D65A]" />
                    <span>Open WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-3 rounded-full bg-[#101512] border border-white/10 text-xs font-mono text-[#8B968E] hover:text-white"
                  >
                    Book Another Slot
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}

