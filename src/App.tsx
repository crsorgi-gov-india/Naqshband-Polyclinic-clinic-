/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Stethoscope, 
  Activity, 
  Pill, 
  Users, 
  Ambulance, 
  PhoneCall, 
  CalendarCheck, 
  MapPin, 
  Clock, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Menu, 
  X,
  ChevronRight,
  Star,
  ShieldCheck,
  HeartPulse
} from 'lucide-react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, direction = 'up' }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: <HeartPulse size={20} /> },
    { name: 'Services', href: '#services', icon: <Stethoscope size={20} /> },
    { name: 'Doctors', href: '#doctors', icon: <Users size={20} /> },
    { name: 'Contact', href: '#contact', icon: <MapPin size={20} /> },
  ];

  return (
    <>
      {/* Top Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white">
                <HeartPulse size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 leading-tight">Naqshband</h1>
                <p className="text-[10px] sm:text-xs font-medium text-primary-600 tracking-wider uppercase">Polyclinic & Pharmacy</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Home</a>
              <a href="#about" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">About</a>
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Services</a>
              <a href="#doctors" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Doctors</a>
              <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Contact</a>
              <a 
                href="#appointment"
                className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm shadow-primary-600/20"
              >
                Book Appointment
              </a>
            </nav>

            {/* Mobile Appointment Button (Visible on top right) */}
            <a 
              href="#appointment"
              className="md:hidden bg-primary-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              Book
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation - Highly Accessible */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-100 px-6 py-3 flex justify-between items-center shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            className="flex flex-col items-center gap-1 text-slate-500 hover:text-primary-600 transition-colors"
          >
            <div className="p-1">
              {link.icon}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-tighter">{link.name}</span>
          </a>
        ))}
      </nav>
    </>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full bg-primary-50/50" />
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-primary-100/50 rounded-l-full blur-3xl opacity-50 transform translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                <ShieldCheck size={16} />
                <span>Trusted Healthcare in Srinagar</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight mb-6">
                Quality Healthcare <br/>
                <span className="text-primary-600">You Can Trust</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Providing comprehensive medical services, expert consultations, and a fully-stocked in-house pharmacy for the Khanyar community. Your health is our priority.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#appointment"
                  className="inline-flex justify-center items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 hover:-translate-y-0.5"
                >
                  <CalendarCheck size={20} />
                  Book Appointment
                </a>
                <a 
                  href="tel:+910000000000"
                  className="inline-flex justify-center items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-base font-medium transition-all hover:border-slate-300"
                >
                  <PhoneCall size={20} className="text-primary-600" />
                  Call Now
                </a>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="mt-10 flex items-center gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Clock size={16} />
                  </div>
                  <span>Open Mon-Sat</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <MapPin size={16} />
                  </div>
                  <span>Khanyar, Srinagar</span>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <div className="relative lg:h-[600px] hidden lg:block">
            <FadeIn delay={0.2} direction="left">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=1000&auto=format&fit=crop" 
                  alt="Modern Clinic Interior" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                
                {/* Floating Badge */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute bottom-8 left-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">10k+</p>
                    <p className="text-sm font-medium text-slate-500">Happy Patients</p>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Doctor with patient" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square rounded-3xl overflow-hidden border-8 border-white shadow-xl hidden sm:block">
                <img 
                  src="https://images.unsplash.com/photo-1586695937109-47cfc073d363?q=80&w=1000&auto=format&fit=crop" 
                  alt="Pharmacy" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </FadeIn>
          
          <div>
            <FadeIn>
              <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">About Our Clinic</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">A Legacy of Care in the Heart of Srinagar</h3>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed italic border-l-4 border-primary-600 pl-6 py-2">
                "We don't just treat symptoms; we care for people. Our mission is to bring world-class healthcare to every doorstep in Khanyar."
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Naqshband Polyclinic and Pharmacy stands as a beacon of hope and healing in Khanyar, Srinagar. Founded on the principles of integrity and excellence, we have evolved into a trusted healthcare destination for thousands of families in Jammu & Kashmir.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our facility is designed to provide a seamless experience, integrating expert medical consultations with a state-of-the-art pharmacy. Whether it's a routine checkup or specialized pediatric care, our team of dedicated professionals is here to ensure you receive the most compassionate and effective treatment possible.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <ul className="space-y-4 mb-8">
                {[
                  'Experienced & Compassionate Doctors',
                  'Modern Diagnostic Facilities',
                  'Fully Stocked In-House Pharmacy',
                  'Patient-Centric Approach'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">
                      <ShieldCheck size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <a 
                href="#services"
                className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
              >
                Explore Our Services
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Stethoscope size={32} />,
      title: 'General Physician',
      description: 'Expert consultation for common illnesses, chronic disease management, and preventive care.'
    },
    {
      icon: <Activity size={32} />,
      title: 'Health Checkups',
      description: 'Comprehensive basic health screenings to monitor your vitals and overall well-being.'
    },
    {
      icon: <Pill size={32} />,
      title: 'Pharmacy',
      description: 'In-house pharmacy stocked with genuine medicines for immediate prescription fulfillment.'
    },
    {
      icon: <Users size={32} />,
      title: 'Family Healthcare',
      description: 'Holistic medical care tailored for patients of all ages, from children to the elderly.'
    },
    {
      icon: <Ambulance size={32} />,
      title: 'Emergency Consultation',
      description: 'Prompt medical attention and stabilization for urgent, non-life-threatening conditions.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Comprehensive Healthcare Solutions</h3>
            <p className="text-slate-600">We offer a wide range of medical services designed to meet the healthcare needs of you and your family.</p>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-primary-100 transition-all group h-full">
                <div className="w-16 h-16 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const PharmacySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-900 rounded-3xl overflow-hidden shadow-2xl relative">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-800 rounded-l-full opacity-50 transform translate-x-1/3" />
          
          <div className="grid md:grid-cols-2 items-center relative z-10">
            <div className="p-10 md:p-16 lg:p-20">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-800 text-primary-200 text-sm font-medium mb-6">
                  <Pill size={16} />
                  <span>In-House Convenience</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                  Fully Stocked Pharmacy
                </h3>
                <p className="text-primary-100 text-lg mb-8 leading-relaxed">
                  Skip the extra trip. Get your prescribed medicines immediately after your consultation at our in-house pharmacy. We ensure the availability of genuine, high-quality medications for your convenience and peace of mind.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Genuine Medicines', 'Expert Pharmacists', 'Quick Dispensing'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white font-medium">
                      <ShieldCheck size={18} className="text-primary-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
            <div className="h-full min-h-[300px] relative hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1000&auto=format&fit=crop" 
                alt="Pharmacy" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Doctors = () => {
  const doctors = [
    {
      name: 'Dr. Tariq Ahmed',
      specialty: 'General Physician',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Dr. Saima Bhat',
      specialty: 'Pediatrician',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Dr. Farooq Khan',
      specialty: 'Internal Medicine',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Specialists</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Meet Our Experienced Doctors</h3>
            <p className="text-slate-600">Dedicated professionals committed to providing you with the highest standard of medical care.</p>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group">
                <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{doctor.name}</h4>
                  <p className="text-primary-600 font-medium">{doctor.specialty}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: 'Showkat Ali',
      text: 'Excellent facility in Khanyar. The doctors are very patient and listen carefully. Having the pharmacy right there saved me a lot of time.',
      rating: 5
    },
    {
      name: 'Nusrat Jahan',
      text: 'Very clean and professional clinic. I visited for a general checkup and was impressed by the modern equipment and friendly staff.',
      rating: 5
    },
    {
      name: 'Bilal Ahmad',
      text: 'Quality healthcare indeed. The waiting time was minimal, and the consultation was thorough. Highly recommend Naqshband Polyclinic.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">What Our Patients Say</h3>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-slate-50 p-8 rounded-2xl h-full flex flex-col">
                <div className="flex gap-1 mb-4 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6 flex-grow">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Appointment = () => {
  return (
    <section id="appointment" className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-5">
            <div className="lg:col-span-2 bg-primary-900 p-10 text-white flex flex-col justify-center">
              <FadeIn>
                <h3 className="text-3xl font-serif font-bold mb-4">Book an Appointment</h3>
                <p className="text-primary-100 mb-8">
                  Schedule your visit online. Fill out the form, and our reception team will contact you to confirm your appointment time.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center shrink-0">
                      <PhoneCall size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-primary-200 mb-1">Call for urgent booking</p>
                      <p className="font-semibold text-lg">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-primary-200 mb-1">Working Hours</p>
                      <p className="font-semibold">Mon - Sat: 9:00 AM - 8:00 PM</p>
                      <p className="text-sm text-primary-200">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <div className="lg:col-span-3 p-10 lg:p-12">
              <FadeIn delay={0.2}>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                    <input 
                      type="date" 
                      id="date" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all text-slate-700"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Briefly describe your symptoms or reason for visit..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-lg transition-colors shadow-md shadow-primary-600/20"
                  >
                    Request Appointment
                  </button>
                </form>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">Contact Us</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Get In Touch</h3>
          </FadeIn>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <FadeIn>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Clinic Address</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Naqshband Polyclinic and Pharmacy<br />
                    Main Road Khanyar,<br />
                    Srinagar, Jammu & Kashmir 190003
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                  <PhoneCall size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Phone Number</h4>
                  <p className="text-slate-600">+91 98765 43210</p>
                  <p className="text-slate-600">+91 194 2000000</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Email Address</h4>
                  <p className="text-slate-600">info@naqshbandpolyclinic.com</p>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="w-full h-[400px] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 relative flex items-center justify-center">
              {/* Google Maps Placeholder */}
              <div className="text-center p-6">
                <MapPin size={48} className="text-slate-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-slate-700 mb-2">Google Maps Integration</h4>
                <p className="text-slate-500 text-sm">Map showing location in Khanyar, Srinagar will be embedded here.</p>
              </div>
              {/* In a real app, replace the above div with an iframe:
              <iframe 
                src="https://www.google.com/maps/embed?pb=..." 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              */}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white">
                <HeartPulse size={20} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white leading-tight">Naqshband</h2>
                <p className="text-[10px] font-medium text-primary-400 tracking-wider uppercase">Polyclinic & Pharmacy</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Quality healthcare you can trust. Providing comprehensive medical services and in-house pharmacy to the Khanyar community.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#doctors" className="hover:text-primary-400 transition-colors">Our Doctors</a></li>
              <li><a href="#appointment" className="hover:text-primary-400 transition-colors">Book Appointment</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary-400 transition-colors">General Physician</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Health Checkups</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Pharmacy</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Family Healthcare</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Emergency Care</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Working Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>Monday - Friday</span>
                <span className="text-white">9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>Saturday</span>
                <span className="text-white">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sunday</span>
                <span className="text-primary-400 font-medium">Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Naqshband Polyclinic and Pharmacy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-primary-200 selection:text-primary-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <PharmacySection />
        <Doctors />
        <Testimonials />
        <Appointment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
