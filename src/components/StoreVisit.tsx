import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Calendar,
  ShieldCheck,
  Award,
  ChevronDown,
  CheckCircle2,
  Navigation,
  Sparkles,
  CreditCard,
  Tv
} from 'lucide-react';
import { STORE_INFO } from '../data/jewelryData';
import { AppointmentData } from '../types';

export const StoreVisit: React.FC = () => {
  const [appointment, setAppointment] = useState<AppointmentData>({
    fullName: '',
    phoneNumber: '',
    city: 'Sariya',
    serviceType: 'Bridal Jewellery Consultation',
    preferredDate: '',
    preferredTime: 'Afternoon (1:00 PM – 4:00 PM)',
    notes: '',
  });

  const [booked, setBooked] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appointment.fullName || !appointment.phoneNumber) return;

    const message = encodeURIComponent(
      `*Namaste Laxmi Jewellers Sariya - Showroom Visit Booking*\n\n` +
      `• *Client Name*: ${appointment.fullName}\n` +
      `• *Phone*: ${appointment.phoneNumber}\n` +
      `• *City / Town*: ${appointment.city}\n` +
      `• *Service*: ${appointment.serviceType}\n` +
      `• *Preferred Date*: ${appointment.preferredDate || 'Upcoming Weekend'}\n` +
      `• *Time Slot*: ${appointment.preferredTime}\n` +
      `• *Special Request*: ${appointment.notes || 'None'}\n\n` +
      `_Booked via Laxmi Jewellers Sariya Official Website_`
    );

    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${message}`, '_blank');
    setBooked(true);
  };

  const faqs = [
    {
      q: 'Do you provide government-recognized BIS Hallmark on all jewellery?',
      a: 'Yes, absolutely. 100% of our gold jewellery is hallmarked with the official BIS Triangle Logo, Purity mark (22K916 / 18K750), and unique 6-digit laser HUID code verifiable on the BIS Care App.',
    },
    {
      q: 'How do you calculate old gold exchange value?',
      a: 'We test your gold in front of you using our computerized non-destructive Karatmeter. Net pure weight is evaluated at current live Sariya market gold rates with zero deductions on gold value.',
    },
    {
      q: 'Is the showroom open on Sundays?',
      a: 'Yes! Laxmi Jewellers Sariya is open 7 days a week from 10:00 AM to 8:30 PM to serve families traveling for wedding shopping and festive purchases.',
    },
    {
      q: 'Can you create customized bridal sets from photographs or Pinterest references?',
      a: 'Yes, our master karigars specialize in bespoke CAD handcrafted bridal sets, antique Rajasthani/Chhattisgarhi ornaments, and diamond solitaires tailored to your exact budget and weight requirements.',
    },
    {
      q: 'What payment modes are accepted at the Sariya showroom?',
      a: 'We accept all major Debit/Credit Cards, UPI (Google Pay, PhonePe, Paytm), Net Banking / RTGS / NEFT, and standard cash transactions in accordance with government GST guidelines.',
    },
  ];

  return (
    <section id="store-visit-section" className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#B8934C]/30 text-[#8A6720] text-[10px] uppercase tracking-[3px] font-bold shadow-xs mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#B8934C]" />
          <span>Sariya, Chhattisgarh</span>
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-normal text-[#1C1917] mb-3 tracking-tight">
          Visit Our <span className="text-[#8A6720] font-semibold">Showroom</span>
        </h2>
        <p className="text-[#574F48] text-sm sm:text-base leading-relaxed font-normal font-sans">
          Experience the warmth of traditional hospitality and touch the hallmark purity in person. Located in the heart of Sariya's historic Sarafa Market.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        
        {/* Left Column: Location & Amenities Card */}
        <div className="lg:col-span-6 space-y-6">
          <div className="sober-card p-6 sm:p-8 rounded-sm space-y-6 relative overflow-hidden shadow-md">
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#8A6720] via-[#B8934C] to-[#8A6720]" />
            
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[9px] text-[#8A6720] font-bold uppercase tracking-[3px] block">
                  Historic Flagship Showroom
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-[#1C1917] mt-1 tracking-wide">
                  {STORE_INFO.name}
                </h3>
                <p className="text-xs text-[#8A6720] font-semibold mt-0.5">{STORE_INFO.founder}</p>
              </div>
              <div className="p-3 bg-[#FAF6F0] text-[#8A6720] border border-[#B8934C]/30 rounded-sm">
                <MapPin className="w-6 h-6" />
              </div>
            </div>

            {/* Address & Contact Items */}
            <div className="space-y-3.5 text-xs">
              
              <div className="flex items-start gap-3 p-3.5 bg-[#FAF8F5] border border-[rgba(184,147,76,0.2)] rounded-sm">
                <Navigation className="w-4 h-4 text-[#8A6720] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#1C1917] block mb-0.5 uppercase tracking-wider text-[11px]">Showroom Address:</span>
                  <p className="text-[#574F48] leading-relaxed font-normal font-sans">{STORE_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-[#FAF8F5] border border-[rgba(184,147,76,0.2)] rounded-sm">
                <Clock className="w-4 h-4 text-[#8A6720] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#1C1917] block mb-0.5 uppercase tracking-wider text-[11px]">Showroom Timings:</span>
                  <p className="text-[#574F48] font-normal font-sans">{STORE_INFO.workingHours}</p>
                  <span className="text-[11px] text-[#15803D] font-bold block mt-0.5 font-sans">
                    Open All 7 Days (Including Sundays)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-[#FAF8F5] border border-[rgba(184,147,76,0.2)] rounded-sm">
                <Phone className="w-4 h-4 text-[#8A6720] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#1C1917] block mb-0.5 uppercase tracking-wider text-[11px]">Direct Helplines:</span>
                  <div className="flex flex-wrap gap-3 mt-1 font-mono">
                    <a href={`tel:${STORE_INFO.phone}`} className="text-[#8A6720] font-bold hover:underline">
                      {STORE_INFO.phone}
                    </a>
                    <span className="text-[#D9CFC4]">|</span>
                    <a href={`tel:${STORE_INFO.alternatePhone}`} className="text-[#8A6720] font-bold hover:underline">
                      {STORE_INFO.alternatePhone}
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* In-Store Customer Amenities */}
            <div className="pt-4 border-t border-[rgba(184,147,76,0.18)] space-y-3">
              <h4 className="font-cinzel text-xs uppercase tracking-wider font-bold text-[#1C1917]">
                Showroom Amenities & Standards
              </h4>
              <div className="grid grid-cols-2 gap-3 text-[11px] text-[#574F48] font-normal font-sans">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#8A6720]" />
                  <span>Computerized Karatmeter</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tv className="w-4 h-4 text-[#8A6720]" />
                  <span>Live Metal Rate Screens</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#8A6720]" />
                  <span>Digital & Card Payments</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#8A6720]" />
                  <span>VIP Bridal Lounge</span>
                </div>
              </div>
            </div>

            {/* Direct Google Maps & WhatsApp Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-[#FFFFFF] hover:bg-[#FAF6F0] text-[#1C1917] border border-[rgba(184,147,76,0.3)] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors rounded-sm shadow-xs"
              >
                <Navigation className="w-4 h-4 text-[#8A6720]" />
                <span>Directions on Maps</span>
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Namaste%20Laxmi%20Jewellers%20Sariya,%20I%20am%20planning%20to%20visit%20the%20showroom.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 btn-sober-gold rounded-sm text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>
        </div>

        {/* Right Column: Appointment Scheduler */}
        <div className="lg:col-span-6">
          <div className="sober-card p-6 sm:p-8 rounded-sm shadow-md relative">
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#8A6720] via-[#B8934C] to-[#8A6720]" />
            
            <div className="pb-4 mb-6 border-b border-[rgba(184,147,76,0.18)]">
              <h3 className="font-cinzel text-xl font-bold text-[#1C1917] tracking-wide">
                Book a Private Consultation
              </h3>
              <p className="text-xs text-[#78716C]">
                Reserve dedicated time with our senior goldsmith for bridal sets or gold exchange.
              </p>
            </div>

            {booked ? (
              <div className="p-8 text-center bg-[#F0FDF4] border border-[#86EFAC] rounded-sm space-y-4">
                <div className="w-14 h-14 bg-[#FFFFFF] text-[#15803D] border border-[#86EFAC] rounded-full mx-auto flex items-center justify-center shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-cinzel text-xl font-bold text-[#166534]">Appointment Reserved!</h4>
                <p className="text-xs text-[#166534] max-w-md mx-auto leading-relaxed font-sans">
                  Thank you, <strong className="text-[#1C1917]">{appointment.fullName}</strong>. We look forward to welcoming you at Laxmi Jewellers Sariya (Shri Sadhuram Sonar Ji Ki Dukan).
                </p>
                <button
                  onClick={() => setBooked(false)}
                  className="btn-sober-outline rounded-sm text-xs py-2 px-5 bg-[#FFFFFF]"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-4 text-xs">
                
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#1C1917] mb-1.5 uppercase tracking-wider text-[11px]">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anjali Sharma"
                      value={appointment.fullName}
                      onChange={(e) => setAppointment({ ...appointment, fullName: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[rgba(184,147,76,0.3)] focus:border-[#B8934C] px-3.5 py-2.5 text-[#1C1917] focus:outline-none rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1C1917] mb-1.5 uppercase tracking-wider text-[11px]">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98271 XXXXX"
                      value={appointment.phoneNumber}
                      onChange={(e) => setAppointment({ ...appointment, phoneNumber: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[rgba(184,147,76,0.3)] focus:border-[#B8934C] px-3.5 py-2.5 text-[#1C1917] focus:outline-none font-mono rounded-sm"
                    />
                  </div>
                </div>

                {/* City & Purpose */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#1C1917] mb-1.5 uppercase tracking-wider text-[11px]">
                      Your City / Village
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sariya, Sarangarh, Raigarh, Baramkela"
                      value={appointment.city}
                      onChange={(e) => setAppointment({ ...appointment, city: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[rgba(184,147,76,0.3)] focus:border-[#B8934C] px-3.5 py-2.5 text-[#1C1917] focus:outline-none rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1C1917] mb-1.5 uppercase tracking-wider text-[11px]">
                      Consultation Purpose
                    </label>
                    <select
                      value={appointment.serviceType}
                      onChange={(e) => setAppointment({ ...appointment, serviceType: e.target.value as any })}
                      className="w-full bg-[#FFFFFF] border border-[rgba(184,147,76,0.3)] focus:border-[#B8934C] px-3.5 py-2.5 text-[#1C1917] focus:outline-none cursor-pointer rounded-sm"
                    >
                      <option value="Bridal Jewellery Consultation">Bridal Jewellery Consultation</option>
                      <option value="Custom Design Request">Custom Design & CAD Preview</option>
                      <option value="Old Gold Exchange / Testing">Old Gold Karatmeter Testing & Exchange</option>
                      <option value="General Store Visit">General Fine Jewellery Shopping</option>
                    </select>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#1C1917] mb-1.5 uppercase tracking-wider text-[11px]">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={appointment.preferredDate}
                      onChange={(e) => setAppointment({ ...appointment, preferredDate: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[rgba(184,147,76,0.3)] focus:border-[#B8934C] px-3.5 py-2.5 text-[#1C1917] focus:outline-none rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1C1917] mb-1.5 uppercase tracking-wider text-[11px]">
                      Preferred Time Slot
                    </label>
                    <select
                      value={appointment.preferredTime}
                      onChange={(e) => setAppointment({ ...appointment, preferredTime: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[rgba(184,147,76,0.3)] focus:border-[#B8934C] px-3.5 py-2.5 text-[#1C1917] focus:outline-none cursor-pointer rounded-sm"
                    >
                      <option value="Morning (10:30 AM – 1:00 PM)">Morning (10:30 AM – 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM – 4:30 PM)">Afternoon (1:00 PM – 4:30 PM)</option>
                      <option value="Evening (4:30 PM – 8:00 PM)">Evening (4:30 PM – 8:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block font-bold text-[#1C1917] mb-1.5 uppercase tracking-wider text-[11px]">
                    Any specific items you wish to inspect?
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Looking for lightweight 22K bridal choker and matching bangles..."
                    value={appointment.notes}
                    onChange={(e) => setAppointment({ ...appointment, notes: e.target.value })}
                    className="w-full bg-[#FFFFFF] border border-[rgba(184,147,76,0.3)] focus:border-[#B8934C] px-3.5 py-2.5 text-[#1C1917] focus:outline-none font-sans rounded-sm"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3.5 btn-sober-gold rounded-sm shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Showroom Appointment via WhatsApp</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

      {/* Frequently Asked Questions Accordion */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#1C1917] mb-2 tracking-wide">
            Frequently Asked Questions
          </h3>
          <p className="text-xs sm:text-sm text-[#78716C] font-sans">
            Clear answers about purity, hallmark guarantees, making charges, and store policies.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="sober-card rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-[#1C1917] hover:text-[#8A6720] font-cinzel text-sm sm:text-base font-bold tracking-wide transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#8A6720] transition-transform shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#574F48] font-normal leading-relaxed border-t border-[rgba(184,147,76,0.18)] font-sans bg-[#FAF8F5]/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};
