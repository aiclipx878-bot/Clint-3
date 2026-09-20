import { useState, useEffect, useMemo, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Tent,
  ShieldCheck,
  Search,
  Plus,
  RefreshCw,
  Sparkles,
  Calendar,
  Users,
  Clock,
  ExternalLink,
  Trash2,
  CheckCircle2,
  AlertCircle,
  X,
  FileSpreadsheet,
  Radio,
  SlidersHorizontal,
  ChevronDown,
  MessageCircle,
  Lock,
  ArrowUpRight,
} from 'lucide-react';
import { Booking, BookingStatus, BookingType } from '../types/booking';
import {
  getStoredBookings,
  saveBookings,
  addBooking,
  updateBookingStatus,
  deleteBooking,
  resetToSeedBookings,
  BOOKING_UPDATE_EVENT,
} from '../services/bookingStorage';
import { AGENCY_CONFIG } from '../data/cases';

export function AdminPanelSection() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filterType, setFilterType] = useState<'all' | 'campsite' | 'recovery' | 'pending' | 'confirmed'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<string>('Just now');
  const [livePulse, setLivePulse] = useState(false);
  const [newAlert, setNewAlert] = useState<string | null>(null);

  // Quick Add Booking Form State
  const [newBookingData, setNewBookingData] = useState({
    type: 'campsite' as BookingType,
    customerName: '',
    contact: '',
    locationOrPlatform: 'Whispering Pines Campsite — Plot #7',
    date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
    timeSlot: 'Check-in 14:00 (2 Nights)',
    guestsOrUnits: 2,
    priceOrEstimate: '$180',
    notes: '',
  });

  // Load bookings and establish live real-time listeners
  useEffect(() => {
    // Initial fetch
    setBookings(getStoredBookings());

    const handleUpdate = () => {
      const fresh = getStoredBookings();
      setBookings(fresh);
      setLastSyncTime(new Date().toLocaleTimeString());
      setLivePulse(true);
      setTimeout(() => setLivePulse(false), 1200);
    };

    window.addEventListener(BOOKING_UPDATE_EVENT, handleUpdate);
    window.addEventListener('storage', handleUpdate);

    // Heartbeat clock for live sync status
    const interval = setInterval(() => {
      setLastSyncTime(new Date().toLocaleTimeString());
    }, 15000);

    return () => {
      window.removeEventListener(BOOKING_UPDATE_EVENT, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
      clearInterval(interval);
    };
  }, []);

  // Filtered and searched bookings
  const filteredBookings = useMemo(() => {
    return bookings.filter((item) => {
      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.customerName.toLowerCase().includes(query) ||
        item.id.toLowerCase().includes(query) ||
        item.contact.toLowerCase().includes(query) ||
        item.locationOrPlatform.toLowerCase().includes(query);

      if (!matchesSearch) return false;

      // Filter tabs
      if (filterType === 'campsite') return item.type === 'campsite';
      if (filterType === 'recovery') return item.type !== 'campsite';
      if (filterType === 'pending') return item.status === 'pending';
      if (filterType === 'confirmed') return item.status === 'confirmed';
      return true;
    });
  }, [bookings, filterType, searchQuery]);

  // Quick statistics
  const stats = useMemo(() => {
    const total = bookings.length;
    const campsites = bookings.filter((b) => b.type === 'campsite').length;
    const recovery = bookings.filter((b) => b.type !== 'campsite').length;
    const pending = bookings.filter((b) => b.status === 'pending').length;
    const confirmed = bookings.filter((b) => b.status === 'confirmed' || b.status === 'completed').length;
    return { total, campsites, recovery, pending, confirmed };
  }, [bookings]);

  // Simulate an incoming live campsite booking (for testing real-time updates)
  const handleSimulateCampsiteBooking = () => {
    const sampleNames = ['Siddharth Roy', 'Claire Dubois', 'Aiden Taylor', 'Fatima Zahra', 'Kenta Takahashi'];
    const sampleSites = [
      'Emerald Lake Campsite — Meadow Pitch #4',
      'Pine Ridge Forest Campsite — Luxury Glamp #2',
      'Cedar Grove Campsite — Riverbank Deck #9',
      'Highland Overlook Campsite — Wilderness Tent #11',
    ];
    const chosenName = sampleNames[Math.floor(Math.random() * sampleNames.length)];
    const chosenSite = sampleSites[Math.floor(Math.random() * sampleSites.length)];
    const guests = Math.floor(2 + Math.random() * 4);

    const created = addBooking({
      type: 'campsite',
      customerName: chosenName,
      contact: `+1 (555) 01${Math.floor(10 + Math.random() * 89)}`,
      locationOrPlatform: chosenSite,
      date: new Date(Date.now() + 86400000 * Math.floor(2 + Math.random() * 10)).toISOString().split('T')[0],
      timeSlot: `Check-in 14:00 (${Math.floor(2 + Math.random() * 3)} Nights)`,
      guestsOrUnits: guests,
      priceOrEstimate: `$${guests * 75}`,
      notes: 'Live booking received via online portal. Requested bonfire kit and arrival guide.',
      status: 'pending',
    });

    setNewAlert(`🔔 New Live Campsite Booking: ${created.customerName} (${created.id})`);
    setTimeout(() => setNewAlert(null), 5000);
  };

  // Handle Quick Add form submit
  const handleCreateNewBooking = (e: FormEvent) => {
    e.preventDefault();
    if (!newBookingData.customerName || !newBookingData.contact) {
      alert('Please provide the customer name and contact details.');
      return;
    }

    const created = addBooking({
      ...newBookingData,
      status: 'confirmed',
    });

    setIsAddModalOpen(false);
    setNewAlert(`✓ Successfully created booking ${created.id} for ${created.customerName}`);
    setTimeout(() => setNewAlert(null), 5000);

    // Reset form
    setNewBookingData({
      type: 'campsite',
      customerName: '',
      contact: '',
      locationOrPlatform: 'Whispering Pines Campsite — Plot #7',
      date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      timeSlot: 'Check-in 14:00 (2 Nights)',
      guestsOrUnits: 2,
      priceOrEstimate: '$180',
      notes: '',
    });
  };

  // Export CSV
  const handleExportCSV = () => {
    if (bookings.length === 0) {
      alert('No bookings to export.');
      return;
    }
    const headers = ['ID', 'Type', 'Customer Name', 'Contact', 'Location/Platform', 'Date', 'Time Slot', 'Guests/Units', 'Status', 'Created At'];
    const rows = bookings.map((b) => [
      b.id,
      b.type,
      `"${b.customerName}"`,
      `"${b.contact}"`,
      `"${b.locationOrPlatform}"`,
      b.date,
      `"${b.timeSlot || ''}"`,
      b.guestsOrUnits,
      b.status,
      b.createdAt,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `live_bookings_export_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusBadge = (status: BookingStatus) => {
    switch (status) {
      case 'confirmed':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40';
      case 'pending':
        return 'bg-amber-500/15 text-amber-300 border-amber-500/40';
      case 'in_progress':
        return 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40';
      case 'completed':
        return 'bg-blue-500/15 text-blue-300 border-blue-500/40';
      case 'cancelled':
        return 'bg-red-500/15 text-red-400 border-red-500/40';
      default:
        return 'bg-zinc-800 text-zinc-300 border-zinc-700';
    }
  };

  return (
    <section
      id="admin"
      data-id="admin-panel"
      className="relative py-20 bg-[#060A07] border-t-2 border-[#18D65A]/30 text-[#F5F7F5] overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#18D65A]/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#35E875]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Admin Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#18D65A]/20">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-1 rounded-md bg-[#18D65A]/15 border border-[#18D65A]/40 text-[#35E875] text-xs font-mono font-bold flex items-center gap-1.5">
                <Radio className={`w-3.5 h-3.5 ${livePulse ? 'text-white animate-ping' : 'text-[#18D65A]'}`} />
                <span>LIVE DISPATCH ENGINE</span>
              </span>
              <span className="text-xs font-mono text-[#8B968E]">
                Sync: <strong className="text-[#35E875]">{lastSyncTime}</strong>
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-white uppercase flex items-center gap-3">
              <span>Bookings & Case Intake Admin</span>
              <span className="text-xs font-mono font-normal tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/20">
                End of Website Portal
              </span>
            </h2>
            <p className="mt-1 text-sm text-[#8B968E] max-w-2xl">
              Live central dashboard monitoring all confirmed bookings, campsite reservations, and priority assistance intakes in real time.
            </p>
          </div>

          {/* Top Quick Actions */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Live simulation button for testing */}
            <button
              type="button"
              id="btn-simulate-campsite"
              onClick={handleSimulateCampsiteBooking}
              className="group flex items-center gap-2 bg-[#122416] hover:bg-[#18331F] border border-[#18D65A]/50 hover:border-[#18D65A] text-[#B8FFCC] px-3.5 py-2 rounded-xl text-xs font-mono font-bold shadow-lg shadow-[#18D65A]/10 transition-all cursor-pointer"
              title="Click to simulate an incoming live campsite booking"
            >
              <Tent className="w-4 h-4 text-[#18D65A] group-hover:scale-110 transition-transform" />
              <span>+ Simulate Campsite Booking</span>
            </button>

            {/* Add New Booking Button */}
            <button
              type="button"
              id="btn-add-booking"
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-2 bg-[#18D65A] hover:bg-[#35E875] text-[#050706] px-4 py-2 rounded-xl text-xs font-mono font-bold shadow-lg shadow-[#18D65A]/30 transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>New Booking</span>
            </button>

            {/* Export CSV Button */}
            <button
              type="button"
              id="btn-export-csv"
              onClick={handleExportCSV}
              className="flex items-center gap-1.5 bg-[#101512] hover:bg-[#1A221E] border border-white/10 hover:border-white/20 text-[#8B968E] hover:text-white px-3 py-2 rounded-xl text-xs font-mono transition-colors cursor-pointer"
              title="Download bookings as CSV"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
              <span>Export</span>
            </button>

            {/* Reset to Seed Data */}
            <button
              type="button"
              onClick={() => {
                if (confirm('Reset to initial sample bookings?')) {
                  resetToSeedBookings();
                  setBookings(getStoredBookings());
                }
              }}
              className="p-2 rounded-xl bg-[#101512] hover:bg-[#1A221E] border border-white/10 text-[#8B968E] hover:text-white transition-colors cursor-pointer"
              title="Restore demo bookings"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Live Notification Banner */}
        <AnimatePresence>
          {newAlert && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              className="mt-4 p-3.5 rounded-xl bg-[#14331C] border border-[#18D65A] text-[#B8FFCC] text-xs font-mono flex items-center justify-between shadow-xl"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#35E875] animate-pulse" />
                <span className="font-bold">{newAlert}</span>
              </div>
              <button
                onClick={() => setNewAlert(null)}
                className="text-[#8B968E] hover:text-white p-1"
                aria-label="Dismiss alert"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Statistics Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
          <div className="bg-[#0B0F0C] border border-white/10 p-4 rounded-2xl">
            <span className="text-[11px] font-mono uppercase text-[#8B968E] block mb-1">Total Bookings</span>
            <div className="text-2xl font-bold font-mono text-white flex items-baseline gap-2">
              <span>{stats.total}</span>
              <span className="text-[10px] text-emerald-400 font-sans">Live Active</span>
            </div>
          </div>

          <div className="bg-[#0B0F0C] border border-[#18D65A]/40 p-4 rounded-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-mono uppercase text-[#35E875] font-semibold">Campsite Bookings</span>
              <Tent className="w-4 h-4 text-[#18D65A]" />
            </div>
            <div className="text-2xl font-bold font-mono text-[#F5F7F5] flex items-baseline gap-2">
              <span>{stats.campsites}</span>
              <span className="text-[10px] text-[#8B968E] font-sans">Reserved</span>
            </div>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#18D65A]" />
          </div>

          <div className="bg-[#0B0F0C] border border-white/10 p-4 rounded-2xl">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-mono uppercase text-[#8B968E]">Case Recoveries</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-bold font-mono text-white">
              {stats.recovery}
            </div>
          </div>

          <div className="bg-[#0B0F0C] border border-amber-500/30 p-4 rounded-2xl">
            <span className="text-[11px] font-mono uppercase text-amber-300 block mb-1">Pending Review</span>
            <div className="text-2xl font-bold font-mono text-amber-400">
              {stats.pending}
            </div>
          </div>

          <div className="bg-[#0B0F0C] border border-emerald-500/30 p-4 rounded-2xl col-span-2 sm:col-span-1">
            <span className="text-[11px] font-mono uppercase text-emerald-400 block mb-1">Confirmed / Active</span>
            <div className="text-2xl font-bold font-mono text-emerald-300">
              {stats.confirmed}
            </div>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="mt-8 p-4 rounded-2xl bg-[#0B0F0C] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                filterType === 'all'
                  ? 'bg-[#18D65A] text-[#050706] font-bold'
                  : 'bg-[#101512] text-[#8B968E] hover:text-white border border-white/5'
              }`}
            >
              All Bookings ({stats.total})
            </button>

            <button
              onClick={() => setFilterType('campsite')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all ${
                filterType === 'campsite'
                  ? 'bg-[#18D65A] text-[#050706] font-bold'
                  : 'bg-[#101512] text-[#8B968E] hover:text-white border border-white/5'
              }`}
            >
              <Tent className="w-3.5 h-3.5" />
              <span>Campsites ({stats.campsites})</span>
            </button>

            <button
              onClick={() => setFilterType('recovery')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                filterType === 'recovery'
                  ? 'bg-[#18D65A] text-[#050706] font-bold'
                  : 'bg-[#101512] text-[#8B968E] hover:text-white border border-white/5'
              }`}
            >
              Account Intakes ({stats.recovery})
            </button>

            <button
              onClick={() => setFilterType('pending')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                filterType === 'pending'
                  ? 'bg-amber-400 text-[#050706] font-bold'
                  : 'bg-[#101512] text-[#8B968E] hover:text-white border border-white/5'
              }`}
            >
              Pending ({stats.pending})
            </button>

            <button
              onClick={() => setFilterType('confirmed')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                filterType === 'confirmed'
                  ? 'bg-emerald-400 text-[#050706] font-bold'
                  : 'bg-[#101512] text-[#8B968E] hover:text-white border border-white/5'
              }`}
            >
              Confirmed ({stats.confirmed})
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#8B968E] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, campsite, ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#101512] border border-white/10 focus:border-[#18D65A] rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-[#8B968E]/50 outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8B968E] hover:text-white"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Live Bookings Table / List */}
        <div className="mt-6 rounded-2xl bg-[#0B0F0C] border border-white/10 overflow-hidden shadow-2xl">
          {filteredBookings.length === 0 ? (
            <div className="py-16 text-center">
              <Tent className="w-12 h-12 text-[#8B968E]/40 mx-auto mb-3" />
              <h3 className="text-base font-bold text-white">No bookings match your current criteria</h3>
              <p className="text-xs text-[#8B968E] mt-1">Try clearing filters or click "+ Simulate Campsite Booking" to add one.</p>
              <button
                onClick={handleSimulateCampsiteBooking}
                className="mt-4 inline-flex items-center gap-2 bg-[#18D65A] text-[#050706] px-4 py-2 rounded-xl text-xs font-bold font-mono"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
                Simulate Campsite Booking
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-[#0E1410] text-[11px] font-mono text-[#8B968E] uppercase tracking-wider">
                    <th className="py-3.5 px-4 font-semibold">Booking ID</th>
                    <th className="py-3.5 px-4 font-semibold">Customer</th>
                    <th className="py-3.5 px-4 font-semibold">Campsite / Service Target</th>
                    <th className="py-3.5 px-4 font-semibold">Schedule & Units</th>
                    <th className="py-3.5 px-4 font-semibold">Status</th>
                    <th className="py-3.5 px-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs font-mono">
                  {filteredBookings.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-[#121B14] transition-colors group"
                    >
                      {/* Booking ID & Type */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          {item.type === 'campsite' ? (
                            <span className="p-1 rounded-md bg-[#18D65A]/15 text-[#18D65A] border border-[#18D65A]/30">
                              <Tent className="w-3.5 h-3.5" />
                            </span>
                          ) : (
                            <span className="p-1 rounded-md bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                              <ShieldCheck className="w-3.5 h-3.5" />
                            </span>
                          )}
                          <span className="font-bold text-white tracking-wide">{item.id}</span>
                        </div>
                        <span className="text-[10px] text-[#8B968E] block mt-0.5">
                          {item.type === 'campsite' ? 'Campsite Reservation' : 'Digital Recovery'}
                        </span>
                      </td>

                      {/* Customer Name & Contact */}
                      <td className="py-3.5 px-4">
                        <div className="font-sans font-bold text-white text-sm">{item.customerName}</div>
                        <div className="text-[11px] text-[#35E875] flex items-center gap-1 mt-0.5">
                          <MessageCircle className="w-3 h-3 text-[#18D65A]" />
                          <span>{item.contact}</span>
                        </div>
                      </td>

                      {/* Campsite Location or Platform */}
                      <td className="py-3.5 px-4 max-w-xs">
                        <div className="font-medium text-[#F5F7F5] truncate" title={item.locationOrPlatform}>
                          {item.locationOrPlatform}
                        </div>
                        {item.priceOrEstimate && (
                          <span className="text-[10px] text-[#8B968E]">Fee: {item.priceOrEstimate}</span>
                        )}
                      </td>

                      {/* Date & Units */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="flex items-center gap-1.5 text-white">
                          <Calendar className="w-3 h-3 text-[#18D65A]" />
                          <span>{item.date}</span>
                        </div>
                        <div className="text-[10px] text-[#8B968E] mt-0.5 flex items-center gap-2">
                          <span>{item.timeSlot || 'Confirmed'}</span>
                          <span>•</span>
                          <span>{item.guestsOrUnits} {item.type === 'campsite' ? 'Guests' : 'Unit'}</span>
                        </div>
                      </td>

                      {/* Live Status Selector */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <select
                          value={item.status}
                          onChange={(e) => updateBookingStatus(item.id, e.target.value as BookingStatus)}
                          className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg border outline-none cursor-pointer ${getStatusBadge(
                            item.status
                          )}`}
                        >
                          <option value="pending" className="bg-[#0B0F0C] text-amber-300">Pending</option>
                          <option value="confirmed" className="bg-[#0B0F0C] text-emerald-400">Confirmed</option>
                          <option value="in_progress" className="bg-[#0B0F0C] text-cyan-300">In Progress</option>
                          <option value="completed" className="bg-[#0B0F0C] text-blue-300">Completed</option>
                          <option value="cancelled" className="bg-[#0B0F0C] text-red-400">Cancelled</option>
                        </select>
                      </td>

                      {/* Row Action Buttons */}
                      <td className="py-3.5 px-4 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          {/* View details */}
                          <button
                            onClick={() => setSelectedBooking(item)}
                            className="p-1.5 rounded-lg bg-[#141C16] hover:bg-[#1D2B20] text-[#8B968E] hover:text-white border border-white/5 transition-colors"
                            title="View Full Booking Dossier"
                          >
                            <ChevronDown className="w-3.5 h-3.5" />
                          </button>

                          {/* WhatsApp Direct Action */}
                          <a
                            href={`${AGENCY_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                              `Hello ${item.customerName}, this is Asdullah Ahmed Admin confirming your booking [${item.id}] for ${item.locationOrPlatform} on ${item.date}. Status is: ${item.status.toUpperCase()}.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-[#14331C] hover:bg-[#184524] text-[#35E875] border border-[#18D65A]/30 transition-colors"
                            title="Contact Customer on WhatsApp"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                          </a>

                          {/* Delete/Archive */}
                          <button
                            onClick={() => {
                              if (confirm(`Remove booking ${item.id} for ${item.customerName}?`)) {
                                deleteBooking(item.id);
                              }
                            }}
                            className="p-1.5 rounded-lg bg-[#1A1214] hover:bg-[#28171B] text-red-400 border border-red-500/20 transition-colors"
                            title="Delete / Cancel Booking"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer info inside the Admin Panel */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#8B968E] gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#18D65A] animate-pulse" />
            <span>Local Database Storage Synchronized • Real-Time Broadcast Active</span>
          </div>
          <div className="text-right">
            <span>Showing {filteredBookings.length} of {bookings.length} Total Bookings</span>
          </div>
        </div>
      </div>

      {/* FULL BOOKING DETAILS MODAL */}
      <AnimatePresence>
        {selectedBooking && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
            onClick={() => setSelectedBooking(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-[#0B0F0C] border-2 border-[#18D65A]/50 rounded-3xl p-6 shadow-2xl shadow-emerald-950/80"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-xl bg-[#18D65A]/15 text-[#18D65A] border border-[#18D65A]/40">
                    {selectedBooking.type === 'campsite' ? <Tent className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                  </span>
                  <div>
                    <h3 className="font-bold text-white text-lg">{selectedBooking.customerName}</h3>
                    <span className="text-xs font-mono text-[#35E875]">{selectedBooking.id} • {selectedBooking.type.toUpperCase()}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedBooking(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="py-5 space-y-4 text-xs font-mono">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-xl bg-[#101512] border border-white/5">
                    <span className="text-[#8B968E] block mb-1">Target / Campsite:</span>
                    <span className="text-white font-bold text-sm font-sans block">{selectedBooking.locationOrPlatform}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#101512] border border-white/5">
                    <span className="text-[#8B968E] block mb-1">Status:</span>
                    <span className={`inline-block px-2 py-0.5 rounded border ${getStatusBadge(selectedBooking.status)}`}>
                      {selectedBooking.status.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-xl bg-[#101512] border border-white/5">
                    <span className="text-[#8B968E] block mb-1">Date & Slot:</span>
                    <span className="text-white block font-bold">{selectedBooking.date}</span>
                    <span className="text-[#8B968E]">{selectedBooking.timeSlot || 'Full Day'}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#101512] border border-white/5">
                    <span className="text-[#8B968E] block mb-1">Customer Contact:</span>
                    <span className="text-[#35E875] block font-bold">{selectedBooking.contact}</span>
                    <span className="text-[#8B968E]">{selectedBooking.guestsOrUnits} {selectedBooking.type === 'campsite' ? 'Guests' : 'Unit'}</span>
                  </div>
                </div>

                {/* Notes */}
                <div className="p-3 rounded-xl bg-[#101512] border border-white/5">
                  <span className="text-[#8B968E] block mb-1">Booking Notes & Special Requests:</span>
                  <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                    {selectedBooking.notes || 'No special requirements noted at time of booking.'}
                  </p>
                </div>

                <div className="text-[11px] text-[#8B968E]">
                  Timestamp Created: {new Date(selectedBooking.createdAt).toLocaleString()}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => {
                    const nextStatus: BookingStatus = selectedBooking.status === 'confirmed' ? 'completed' : 'confirmed';
                    updateBookingStatus(selectedBooking.id, nextStatus);
                    setSelectedBooking({ ...selectedBooking, status: nextStatus });
                  }}
                  className="bg-[#18D65A] hover:bg-[#35E875] text-[#050706] font-bold px-4 py-2 rounded-xl text-xs font-mono cursor-pointer"
                >
                  Mark as {selectedBooking.status === 'confirmed' ? 'Completed' : 'Confirmed'}
                </button>

                <a
                  href={`${AGENCY_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                    `Hello ${selectedBooking.customerName}, regards from Asdullah Ahmed Admin about booking #${selectedBooking.id}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#14331C] text-[#35E875] border border-[#18D65A]/40 px-3.5 py-2 rounded-xl text-xs font-mono font-bold"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Open WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* QUICK ADD BOOKING MODAL */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
            onClick={() => setIsAddModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-[#0B0F0C] border-2 border-[#18D65A]/50 rounded-3xl p-6 shadow-2xl shadow-emerald-950/80"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Plus className="w-5 h-5 text-[#18D65A]" />
                  <h3 className="font-bold text-white text-lg font-display uppercase">Create New Booking</h3>
                </div>
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleCreateNewBooking} className="mt-4 space-y-4">
                {/* Type selector */}
                <div>
                  <label className="block text-xs font-mono text-[#8B968E] mb-1 uppercase">Booking Type *</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setNewBookingData({
                          ...newBookingData,
                          type: 'campsite',
                          locationOrPlatform: 'Whispering Pines Campsite — Plot #7',
                        })
                      }
                      className={`p-2.5 rounded-xl border text-xs font-mono font-bold flex items-center justify-center gap-2 ${
                        newBookingData.type === 'campsite'
                          ? 'bg-[#18D65A]/20 border-[#18D65A] text-white'
                          : 'bg-[#101512] border-white/10 text-[#8B968E]'
                      }`}
                    >
                      <Tent className="w-4 h-4 text-[#18D65A]" />
                      <span>Campsite Booking</span>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setNewBookingData({
                          ...newBookingData,
                          type: 'whatsapp_recovery',
                          locationOrPlatform: 'WhatsApp Account (+91...)',
                        })
                      }
                      className={`p-2.5 rounded-xl border text-xs font-mono font-bold flex items-center justify-center gap-2 ${
                        newBookingData.type !== 'campsite'
                          ? 'bg-[#18D65A]/20 border-[#18D65A] text-white'
                          : 'bg-[#101512] border-white/10 text-[#8B968E]'
                      }`}
                    >
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Case Intake</span>
                    </button>
                  </div>
                </div>

                {/* Name and contact */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-[#8B968E] mb-1">Customer Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jordan Hayes"
                      value={newBookingData.customerName}
                      onChange={(e) => setNewBookingData({ ...newBookingData, customerName: e.target.value })}
                      className="w-full bg-[#101512] border border-white/10 focus:border-[#18D65A] rounded-xl px-3 py-2 text-xs text-white outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#8B968E] mb-1">Phone / Email *</label>
                    <input
                      type="text"
                      required
                      placeholder="+1 (555) 019-2831"
                      value={newBookingData.contact}
                      onChange={(e) => setNewBookingData({ ...newBookingData, contact: e.target.value })}
                      className="w-full bg-[#101512] border border-white/10 focus:border-[#18D65A] rounded-xl px-3 py-2 text-xs text-white outline-none"
                    />
                  </div>
                </div>

                {/* Campsite / Platform Target */}
                <div>
                  <label className="block text-xs font-mono text-[#8B968E] mb-1">
                    {newBookingData.type === 'campsite' ? 'Campsite Location & Pitch' : 'Account Identifier / Target'}
                  </label>
                  <input
                    type="text"
                    required
                    value={newBookingData.locationOrPlatform}
                    onChange={(e) => setNewBookingData({ ...newBookingData, locationOrPlatform: e.target.value })}
                    className="w-full bg-[#101512] border border-white/10 focus:border-[#18D65A] rounded-xl px-3 py-2 text-xs text-white outline-none"
                  />
                </div>

                {/* Date & Guests */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-[#8B968E] mb-1">Date</label>
                    <input
                      type="date"
                      required
                      value={newBookingData.date}
                      onChange={(e) => setNewBookingData({ ...newBookingData, date: e.target.value })}
                      className="w-full bg-[#101512] border border-white/10 focus:border-[#18D65A] rounded-xl px-3 py-2 text-xs text-white outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#8B968E] mb-1">
                      {newBookingData.type === 'campsite' ? 'Number of Guests' : 'Units / Accounts'}
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={20}
                      value={newBookingData.guestsOrUnits}
                      onChange={(e) =>
                        setNewBookingData({ ...newBookingData, guestsOrUnits: parseInt(e.target.value) || 1 })
                      }
                      className="w-full bg-[#101512] border border-white/10 focus:border-[#18D65A] rounded-xl px-3 py-2 text-xs text-white outline-none"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-mono text-[#8B968E] mb-1">Special Notes / Requests</label>
                  <textarea
                    rows={2}
                    placeholder="Campfire requests, arrival schedule, specific equipment..."
                    value={newBookingData.notes}
                    onChange={(e) => setNewBookingData({ ...newBookingData, notes: e.target.value })}
                    className="w-full bg-[#101512] border border-white/10 focus:border-[#18D65A] rounded-xl px-3 py-2 text-xs text-white outline-none resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-3 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs font-mono text-[#8B968E] hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#18D65A] hover:bg-[#35E875] text-[#050706] font-bold px-5 py-2 rounded-xl text-xs font-mono cursor-pointer shadow-lg shadow-[#18D65A]/20"
                  >
                    Confirm & Save Booking
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
