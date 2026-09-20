import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageCircle,
  ShieldCheck,
  Send,
  Phone,
  CheckCircle2,
  Lock,
  ArrowRight,
  Clock,
  AlertCircle,
  FileText,
} from 'lucide-react';
import { AGENCY_CONFIG } from '../data/cases';
import { addBooking } from '../services/bookingStorage';
import { BookingType } from '../types/booking';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    platform: 'WhatsApp' as 'WhatsApp' | 'Instagram' | 'WhatsApp Business',
    issueType: 'Account Banned / Suspended',
    accountHandleOrNumber: '',
    description: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const bType: BookingType =
      formData.platform === 'WhatsApp' || formData.platform === 'WhatsApp Business'
        ? 'whatsapp_recovery'
        : 'instagram_recovery';

    const newBooking = addBooking({
      type: bType,
      customerName: formData.name,
      contact: formData.phone,
      locationOrPlatform: `${formData.platform} (${formData.accountHandleOrNumber || 'Direct'})`,
      date: new Date().toISOString().split('T')[0],
      timeSlot: 'Immediate Intake',
      guestsOrUnits: 1,
      priceOrEstimate: 'Free Feasibility Intake',
      notes: `Issue: ${formData.issueType}. Details: ${formData.description || 'N/A'}`,
      status: 'pending',
    });

    setTicketId(newBooking.id);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      platform: 'WhatsApp',
      issueType: 'Account Banned / Suspended',
      accountHandleOrNumber: '',
      description: '',
    });
    setIsSubmitted(false);
    setTicketId('');
  };

  return (
    <section id="contact" className="relative py-24 bg-[#070B08] border-t border-[#18D65A]/15 overflow-hidden">
      {/* Anchor for #book link */}
      <div id="book" className="absolute -top-20" />

      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-96 bg-[#18D65A]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#18D65A]" />
            <span className="text-xs font-mono tracking-[0.2em] text-[#B8FFCC] uppercase font-semibold">
              INTAKE & CASE REGISTRATION • BOOK / CONTACT
            </span>
            <span className="w-2 h-2 rounded-full bg-[#18D65A]" />
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F5F7F5] uppercase">
            Book Case Intake & Contact
          </h2>

          <p className="mt-3 text-base text-[#8B968E] max-w-xl leading-relaxed">
            Register your restriction case below or reach out directly on WhatsApp for immediate 1-on-1 human guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct WhatsApp Contact Card */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="rounded-3xl bg-[#0B0F0C] border border-[#18D65A]/30 p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#18D65A]/10 blur-[80px] pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#102216] border border-[#18D65A]/40 flex items-center justify-center text-[#18D65A] shadow-md shadow-[#18D65A]/15">
                  <MessageCircle className="w-6 h-6 fill-[#18D65A]/20" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    Direct WhatsApp Support
                  </h3>
                  <p className="text-xs font-mono text-[#35E875]">
                    Fastest Response Channel
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#8B968E] leading-relaxed mb-6">
                For quickest assistance, send a screenshot of your restricted screen directly to our verified helpline.
              </p>

              <div className="p-4 rounded-xl bg-[#050706] border border-white/5 space-y-3 mb-6 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#8B968E]">Helpline:</span>
                  <span className="text-white font-semibold">{AGENCY_CONFIG.phone}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8B968E]">Response Window:</span>
                  <span className="text-[#35E875] font-semibold">15–45 Minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8B968E]">Active Hours:</span>
                  <span className="text-[#A0AEA4]">24/7 Intake Monitoring</span>
                </div>
              </div>

              <a
                href={AGENCY_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full bg-[#18D65A] hover:bg-[#35E875] text-[#040605] py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#18D65A]/20 hover:scale-102"
              >
                <MessageCircle className="w-4 h-4 fill-[#040605]" />
                <span>Open WhatsApp Chat Now</span>
              </a>
            </div>

            {/* Zero Credential Security Badge */}
            <div className="p-6 rounded-2xl bg-[#0B0F0C] border border-white/5 flex items-start gap-4 text-xs">
              <Lock className="w-5 h-5 text-[#18D65A] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-display font-bold text-white block">
                  Strict Confidentiality & Privacy
                </span>
                <p className="text-[#8B968E] leading-relaxed">
                  We never ask for your account password, SMS OTP codes, or personal credentials. Official appeals are submitted by you with our structured wording.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Case Intake Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0B0F0C] border border-white/10 p-8 sm:p-10 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 flex flex-col items-center text-center space-y-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#18D65A]/20 border border-[#18D65A]/50 flex items-center justify-center text-[#18D65A] shadow-xl shadow-[#18D65A]/20">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="font-display font-extrabold text-2xl text-white">
                      Case Intake Ticket Created!
                    </h3>

                    <div className="px-4 py-2 rounded-xl bg-[#050706] border border-[#18D65A]/40 font-mono text-sm text-[#35E875] font-bold">
                      Ticket ID: {ticketId}
                    </div>

                    <p className="text-xs text-[#8B968E] max-w-md leading-relaxed">
                      Your recovery case has been registered into our active dispatch system. Click below to initiate your 1-on-1 WhatsApp review consultation with this ticket ID.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 w-full justify-center">
                      <a
                        href={`${AGENCY_CONFIG.whatsappUrl}?text=Hello%20Asdullah,%20I%20have%20registered%20case%20ticket%20${ticketId}%20for%20${encodeURIComponent(formData.name)}.%20Platform:%20${formData.platform}.%20Issue:%20${encodeURIComponent(formData.issueType)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-[#18D65A] text-[#040605] hover:bg-[#35E875] px-6 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-colors w-full sm:w-auto"
                      >
                        <MessageCircle className="w-4 h-4 fill-[#040605]" />
                        <span>Send Ticket to WhatsApp</span>
                      </a>

                      <button
                        onClick={resetForm}
                        className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-[#8B968E] hover:text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer w-full sm:w-auto"
                      >
                        Submit Another Case
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-5 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#A0AEA4] mb-2 font-semibold">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full px-4 py-3 rounded-xl bg-[#050706] border border-white/10 focus:border-[#18D65A]/60 focus:outline-none text-white text-xs font-mono transition-colors"
                        />
                      </div>

                      {/* Phone / WhatsApp */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#A0AEA4] mb-2 font-semibold">
                          WhatsApp / Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-[#050706] border border-white/10 focus:border-[#18D65A]/60 focus:outline-none text-white text-xs font-mono transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Platform */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#A0AEA4] mb-2 font-semibold">
                          Platform Affected *
                        </label>
                        <select
                          value={formData.platform}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              platform: e.target.value as 'WhatsApp' | 'Instagram' | 'WhatsApp Business',
                            })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-[#050706] border border-white/10 focus:border-[#18D65A]/60 focus:outline-none text-white text-xs font-mono transition-colors"
                        >
                          <option value="WhatsApp">WhatsApp (Personal Number)</option>
                          <option value="Instagram">Instagram (Creator / Personal)</option>
                          <option value="WhatsApp Business">WhatsApp Business Account</option>
                        </select>
                      </div>

                      {/* Issue Category */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#A0AEA4] mb-2 font-semibold">
                          Issue Category *
                        </label>
                        <select
                          value={formData.issueType}
                          onChange={(e) => setFormData({ ...formData, issueType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#050706] border border-white/10 focus:border-[#18D65A]/60 focus:outline-none text-white text-xs font-mono transition-colors"
                        >
                          <option value="Account Banned / Suspended">Account Banned / Suspended</option>
                          <option value="Feature Restriction (DM / Link)">Feature Restriction (DM / Link)</option>
                          <option value="Registration / SMS Loop">Registration / SMS Loop</option>
                          <option value="Review Request Stuck">Review Request Stuck</option>
                          <option value="Identity Confirmation Flag">Identity Confirmation Flag</option>
                        </select>
                      </div>
                    </div>

                    {/* Account Handle or Registered Number */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#A0AEA4] mb-2 font-semibold">
                        Account Handle or Registered Number (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.accountHandleOrNumber}
                        onChange={(e) =>
                          setFormData({ ...formData, accountHandleOrNumber: e.target.value })
                        }
                        placeholder="e.g. +91 82714... or @username"
                        className="w-full px-4 py-3 rounded-xl bg-[#050706] border border-white/10 focus:border-[#18D65A]/60 focus:outline-none text-white text-xs font-mono transition-colors"
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#A0AEA4] mb-2 font-semibold">
                        Brief Situation / Error Message Details
                      </label>
                      <textarea
                        rows={3}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Describe what happened when you opened the app..."
                        className="w-full px-4 py-3 rounded-xl bg-[#050706] border border-white/10 focus:border-[#18D65A]/60 focus:outline-none text-white text-xs font-mono transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-[#18D65A] hover:bg-[#35E875] text-[#040605] py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#18D65A]/25 cursor-pointer hover:scale-101 active:scale-99"
                    >
                      <Send className="w-4 h-4" />
                      <span>Register Case For Feasibility Assessment</span>
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
