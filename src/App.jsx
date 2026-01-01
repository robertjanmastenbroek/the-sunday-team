import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  Play, 
  ShieldCheck, 
  Zap, 
  Users, 
  ArrowRight, 
  Menu, 
  X,
  Smartphone,
  Calendar,
  MessageSquare,
  Lock,
  FileText,
  Battery,
  Wifi,
  Signal,
  TrendingUp,
  BarChart3,
  Globe,
  Mail,
  Send,
  Star,
  ChevronRight,
  MonitorPlay,
  Heart,
  Instagram,
  Facebook,
  Youtube,
  Download,
  Sparkles
} from 'lucide-react';

// --- LEGAL MODALS ---

const LegalModal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col animate-scale-in border border-white/20 overflow-hidden ring-1 ring-black/5">
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white/50">
          <h3 className="text-xl font-bold text-gray-900 tracking-tight">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-900"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-8 overflow-y-auto text-sm text-gray-600 leading-relaxed space-y-6">
          {content}
        </div>
        
        <div className="p-6 border-t border-gray-100 bg-gray-50/50 rounded-b-3xl">
          <button 
            onClick={onClose}
            className="w-full py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition shadow-lg hover:shadow-gray-900/20"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};

// --- CONTACT MODAL ---

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', church: '', message: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Inquiry from ${formData.name} (${formData.church})`);
    const body = encodeURIComponent(`Name: ${formData.name}\nChurch: ${formData.church}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:mastenbroekrobertjan@gmail.com?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg flex flex-col animate-scale-in overflow-hidden ring-1 ring-black/5">
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 tracking-tight">
            <Mail size={20} className="text-indigo-600"/> Contact The Team
          </h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-900">
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Your Name</label>
            <input 
              required
              type="text" 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition focus:bg-white"
              placeholder="e.g. Pastor John Doe"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Church Name</label>
            <input 
              required
              type="text" 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition focus:bg-white"
              placeholder="e.g. Grace Community Church"
              value={formData.church}
              onChange={(e) => setFormData({...formData, church: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">How can we serve you?</label>
            <textarea 
              required
              rows={4}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition resize-none focus:bg-white"
              placeholder="I'm interested in The Growth plan..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>
          
          <button type="submit" className="w-full py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-bold rounded-xl hover:from-gray-800 hover:to-gray-700 transition flex items-center justify-center gap-2 shadow-xl hover:shadow-gray-900/20 transform hover:-translate-y-0.5">
            <Send size={18} /> Send Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

// --- PRIVACY & TERMS CONTENT ---

const PrivacyContent = (
  <div className="space-y-4">
    <p className="text-sm text-gray-500"><strong>Last Updated: January 2026</strong></p>
    <p>At The Sunday Team ("we", "us", or "our"), we respect your privacy and are committed to protecting the personal information of our pastoral clients and their ministries. This policy outlines our practices.</p>
    <h4 className="font-bold text-gray-900 text-lg mt-4">1. Information We Collect</h4>
    <p>We collect information necessary to provide our video repurposing services, specifically: Identity, Contact, Ministry, and Content Data.</p>
    <h4 className="font-bold text-gray-900 text-lg mt-4">2. Data Security</h4>
    <p>We implement industry-standard security measures to protect your account credentials and content.</p>
  </div>
);

const TermsContent = (
  <div className="space-y-4">
    <p className="text-sm text-gray-500"><strong>Last Updated: January 2026</strong></p>
    <p>Welcome to The Sunday Team. By accessing our website or purchasing our services, you agree to these Terms of Service.</p>
    <h4 className="font-bold text-gray-900 text-lg mt-4">Refund Policy</h4>
    <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
      <p className="font-medium text-indigo-900">We offer a 14-day money-back guarantee.</p>
      <p className="text-sm text-indigo-800 mt-1">If you are unsatisfied with the quality or theological accuracy of our work within the first 14 days, you may request a full refund.</p>
    </div>
  </div>
);

// --- MAIN COMPONENTS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm py-4 border-b border-white/20' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tighter text-gray-900 flex items-center gap-1 group cursor-pointer select-none">
          The Sunday Team<span className="text-indigo-600 text-4xl leading-3 group-hover:text-purple-600 transition-colors">.</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-sm font-semibold text-gray-600 items-center">
          <a href="#results" className="hover:text-gray-900 transition duration-300">Results</a>
          <a href="#process" className="hover:text-gray-900 transition duration-300">Method</a>
          <a href="#team" className="hover:text-gray-900 transition duration-300">Team</a>
          <a href="#pricing" className="hover:text-gray-900 transition duration-300">Pricing</a>
          <button 
            onClick={() => window.open('https://calendly.com/', '_blank')} 
            className="px-6 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-full hover:bg-gray-800 transition shadow-lg shadow-gray-900/20 transform hover:-translate-y-0.5"
          >
            Book Clarity Call
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-900 p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl py-8 px-6 flex flex-col gap-6 animate-fade-in-up origin-top">
          <a href="#results" className="text-xl font-bold text-gray-800" onClick={() => setIsOpen(false)}>Results</a>
          <a href="#process" className="text-xl font-bold text-gray-800" onClick={() => setIsOpen(false)}>Method</a>
          <a href="#team" className="text-xl font-bold text-gray-800" onClick={() => setIsOpen(false)}>Team</a>
          <a href="#pricing" className="text-xl font-bold text-gray-800" onClick={() => setIsOpen(false)}>Pricing</a>
          <button 
            onClick={() => window.open('https://calendly.com/', '_blank')} 
            className="w-full py-4 bg-gray-900 text-white text-lg font-bold rounded-xl shadow-lg active:scale-95 transition"
          >
            Book Clarity Call
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-white">
    {/* --- VIDEO BACKGROUND (The 1% Upgrade) --- */}
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-20" // Low opacity so text pops
      >
        {/* Placeholder video that feels like "Signal/Data" */}
        <source src="https://assets.mixkit.co/videos/preview/mixkit-white-abstract-technology-network-lines-2738-large.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay to ensure readability */}
      <div className="absolute inset-0 bg-white/80 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
    </div>
    
    {/* Subtle Grid Pattern Overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] z-0"></div>

    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
      {/* Exclusive Tag */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md text-gray-600 text-xs font-bold uppercase tracking-wider mb-8 border border-white/50 shadow-sm animate-fade-in-up cursor-default hover:bg-white/80 transition">
        <Sparkles size={14} className="text-indigo-500" /> The New Standard for Digital Stewardship
      </div>
      
      {/* Main Headline */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 tracking-tight mb-8 leading-[1.05] animate-fade-in-up delay-100">
        The Gospel Has <br className="hidden md:block"/> Gone Digital.<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-300% animate-gradient">
          Are You Ready?
        </span>
      </h1>

      {/* Subheadline */}
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200 font-light tracking-wide">
        Stop stressing over algorithms. Reclaim your time for ministry while we amplify your message to reach the lost. 
        <span className="font-semibold text-gray-900 block mt-2">Preach the Word. We'll handle the signal.</span>
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up delay-300">
        <button 
          onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })} 
          className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-bold rounded-full hover:shadow-2xl hover:shadow-indigo-500/30 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
        >
          View Ministry Plans <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="w-full sm:w-auto px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200 text-lg font-bold rounded-full hover:bg-white transition flex items-center justify-center gap-3 hover:border-gray-300 hover:shadow-lg">
          <Play size={18} fill="currentColor" /> See Examples
        </button>
      </div>
      
      {/* Social Proof */}
      <div className="mt-12 flex items-center justify-center gap-3 text-sm text-gray-500 font-medium animate-fade-in-up delay-500 opacity-80">
         <div className="flex -space-x-2">
             <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-400">?</div>
             <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-400">?</div>
             <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-400">?</div>
        </div>
        <span className="tracking-wide">Accepting Limited Partners for 2026</span>
      </div>
    </div>
  </section>
);

const SocialProof = () => (
  <section id="results" className="py-20 bg-white border-b border-gray-100 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Distributing Kingdom Content On</p>
        <div className="flex flex-wrap justify-center gap-10 md:gap-20 items-center mt-8 opacity-40 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
          <Youtube className="w-8 h-8 md:w-10 md:h-10 transition-transform hover:scale-110" strokeWidth={1.5} />
          <Instagram className="w-8 h-8 md:w-10 md:h-10 transition-transform hover:scale-110" strokeWidth={1.5} />
          <Facebook className="w-8 h-8 md:w-10 md:h-10 transition-transform hover:scale-110" strokeWidth={1.5} />
          <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center font-bold text-xl border-2 border-current rounded-full transition-transform hover:scale-110">Tk</div>
        </div>
      </div>

      {/* Case Study Card */}
      <div className="mt-12 bg-gray-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl group transition-transform duration-700 hover:scale-[1.01]">
         {/* Background Glow Effect */}
         <div className="absolute top-[-20%] right-[-20%] w-[800px] h-[800px] bg-indigo-600/30 rounded-full blur-[150px] pointer-events-none group-hover:bg-indigo-600/40 transition duration-700 mix-blend-screen"></div>
         <div className="absolute bottom-[-20%] left-[-20%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
         
         <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            {/* Text Side */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-md">
                <BarChart3 size={14} /> Proven Results
              </div>
              <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">Tenerife Family Church</h3>
              <p className="text-indigo-100/80 text-lg leading-relaxed mb-10 max-w-md font-light">
                TFC had a powerful message but limited reach. Within the first month of partnering with us, their digital impact exploded.
              </p>
              
              <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                <div>
                   <p className="text-5xl font-extrabold text-white mb-2 tracking-tighter">150K+</p>
                   <p className="text-indigo-300 text-xs font-bold uppercase tracking-widest"><TrendingUp size={14} className="inline mr-1 mb-1"/> Total Views</p>
                </div>
                <div>
                   <p className="text-5xl font-extrabold text-white mb-2 tracking-tighter">28</p>
                   <p className="text-indigo-300 text-xs font-bold uppercase tracking-widest">Days</p>
                </div>
              </div>
            </div>

            {/* Visual Graph Mockup (Glassmorphism) */}
            <div className="bg-white/5 backdrop-blur-2xl rounded-[2rem] p-8 border border-white/10 relative shadow-2xl ring-1 ring-white/10">
               <div className="flex justify-between items-center mb-8">
                  <div>
                    <p className="text-xs text-indigo-200 uppercase tracking-widest font-bold mb-1">Total Views (Last 28 Days)</p>
                    <p className="text-3xl font-bold text-white tracking-tight">150,300</p>
                  </div>
                  <div className="bg-green-500/20 text-green-400 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 border border-green-500/30 shadow-[0_0_15px_rgba(74,222,128,0.2)]">
                    <TrendingUp size={14} /> +999%
                  </div>
               </div>
               
               {/* Platform Breakdown Bars */}
               <div className="space-y-6">
                  {/* YouTube */}
                  <div>
                    <div className="flex justify-between text-xs mb-2">
                        <span className="text-gray-300 flex items-center gap-2 font-semibold"><Youtube size={14}/> YouTube Shorts</span>
                        <span className="font-bold text-white">61.0K</span>
                    </div>
                    <div className="w-full bg-gray-700/30 rounded-full h-2 overflow-hidden backdrop-blur-sm">
                        <div className="bg-gradient-to-r from-red-600 to-red-500 h-2 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.4)] w-[65%]"></div>
                    </div>
                  </div>

                  {/* TikTok */}
                  <div>
                    <div className="flex justify-between text-xs mb-2">
                        <span className="text-gray-300 flex items-center gap-2 font-semibold">TikTok</span>
                        <span className="font-bold text-white">34.0K</span>
                    </div>
                    <div className="w-full bg-gray-700/30 rounded-full h-2 overflow-hidden backdrop-blur-sm">
                        <div className="bg-gradient-to-r from-cyan-500 to-cyan-400 h-2 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.4)] w-[45%]"></div>
                    </div>
                  </div>

                  {/* Facebook */}
                  <div>
                    <div className="flex justify-between text-xs mb-2">
                        <span className="text-gray-300 flex items-center gap-2 font-semibold"><Facebook size={14}/> Facebook Reels</span>
                        <span className="font-bold text-white">28.0K</span>
                    </div>
                    <div className="w-full bg-gray-700/30 rounded-full h-2 overflow-hidden backdrop-blur-sm">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-500 h-2 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.4)] w-[38%]"></div>
                    </div>
                  </div>

                   {/* Instagram */}
                   <div>
                    <div className="flex justify-between text-xs mb-2">
                        <span className="text-gray-300 flex items-center gap-2 font-semibold"><Instagram size={14}/> Instagram Reels</span>
                        <span className="font-bold text-white">27.3K</span>
                    </div>
                    <div className="w-full bg-gray-700/30 rounded-full h-2 overflow-hidden backdrop-blur-sm">
                        <div className="bg-gradient-to-r from-pink-600 to-pink-500 h-2 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.4)] w-[36%]"></div>
                    </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  </section>
);

const PainPoints = () => (
  <section id="process" className="py-32 bg-gray-50/50 relative">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">The "Sermon Graveyard" Problem</h2>
      <p className="text-gray-600 mb-16 max-w-2xl mx-auto text-lg leading-relaxed font-light">Most sermons are preached once and then forgotten in an archive. We believe that is a stewardship issue. Your message deserves to live longer than 40 minutes.</p>
      
      <div className="grid md:grid-cols-3 gap-8 text-left">
        {[
          { 
            icon: <Zap size={28} />, 
            title: "The 20-Hour Effort", 
            text: "You spend 20 hours prepping a sermon. Preaching it once to 200 people is good. Reaching 20,000 all week long is Kingdom stewardship." 
          },
          { 
            icon: <Users size={28} />, 
            title: "The Missing Gen Z", 
            text: "Your future congregation is on TikTok and Reels. If you aren't speaking their language on their platforms, you are invisible to them." 
          },
          { 
            icon: <ShieldCheck size={28} />, 
            title: "The AI Risk", 
            text: "Cheap AI tools cut Jesus off mid-sentence or highlight the wrong point. You need spiritual discernment and human eyes on every frame." 
          }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-2xl transition duration-500 border border-gray-100 group hover:-translate-y-2">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition duration-300">
              {item.icon}
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-900">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TeamSection = () => (
  <section id="team" className="py-32 bg-gray-900 text-white overflow-hidden relative">
    {/* Decorative BG - Dark Mode Slickness */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
    <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
       <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-indigo-500 rounded-full blur-[150px] animate-pulse-slow"></div>
       <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[150px] animation-delay-2000"></div>
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        {/* IMAGE SIDE */}
        <div className="relative group perspective-1000">
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[2.5rem] opacity-30 blur-xl group-hover:opacity-50 transition duration-700"></div>
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-gray-800 aspect-[4/3] transform transition duration-700 group-hover:rotate-1">
             {/* Placeholder for Family Photo */}
            <img 
              src="/og-image.jpg" 
              alt="The Mastenbroek Family" 
              className="w-full h-full object-cover transform transition duration-1000 group-hover:scale-105"
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>

            {/* Labels on Image */}
            <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end">
               <div className="text-left">
                  <p className="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">Theology & QC</p>
                  <p className="font-bold text-white text-xl">Roderick</p>
               </div>
               <div className="text-right">
                  <p className="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">Strategy & Growth</p>
                  <p className="font-bold text-white text-xl">Robert-Jan</p>
               </div>
            </div>
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-8 -right-8 bg-white text-gray-900 p-6 rounded-2xl shadow-2xl hidden md:block max-w-xs z-20 backdrop-blur-sm bg-white/90">
            <p className="text-xs font-bold uppercase text-gray-400 mb-1">Founded by</p>
            <p className="font-bold font-serif italic text-xl leading-none">The Mastenbroek Family</p>
          </div>
        </div>

        {/* TEXT SIDE */}
        <div>
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-8 border border-white/10 backdrop-blur-md">
             Not an Agency. A Family.
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">Family Values.<br/>Digital Excellence.</h2>
          <p className="text-lg text-indigo-100/80 mb-8 leading-relaxed font-light">
            In a digital world full of faceless agencies and cold algorithms, we chose a different path. We are the <strong>Mastenbroek family</strong>.
          </p>
          <p className="text-lg text-indigo-100/80 mb-12 leading-relaxed font-light">
            We believe that stewarding the Gospel online requires more than just editing skills—it requires spiritual discernment. Supported by our parents, Emiel & Roosmarie, we are dedicated to helping your church claim its digital territory.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-6 group">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-indigo-400 shrink-0 border border-white/10 shadow-lg group-hover:bg-indigo-500 group-hover:text-white transition duration-300">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h4 className="font-bold text-white text-xl mb-1">Theological Integrity</h4>
                <p className="text-indigo-200/70 leading-relaxed text-sm">Roderick personally reviews clips to ensure no point is ever taken out of context. Truth before trends.</p>
              </div>
            </div>
            <div className="flex gap-6 group">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-indigo-400 shrink-0 border border-white/10 shadow-lg group-hover:bg-indigo-500 group-hover:text-white transition duration-300">
                <Users size={32} />
              </div>
              <div>
                <h4 className="font-bold text-white text-xl mb-1">Personal Relationship</h4>
                <p className="text-indigo-200/70 leading-relaxed text-sm">You aren't a ticket number. Robert-Jan is your direct line for strategy and growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AppFeature = () => (
  <section className="py-32 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
      <div className="order-2 lg:order-1">
        <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6 border border-indigo-100">
          Powered by Technology
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Your Media Team,<br/>Now in Your Pocket.</h2>
        <p className="text-gray-600 text-lg mb-10 leading-relaxed font-light">
          Forget messy email threads with DropBox links. We give you a dedicated <strong>Ministry Portal App</strong> (powered by LeadConnector) to manage your content effortlessly.
        </p>
        
        <div className="space-y-6">
          {[
            { icon: <CheckCircle className="text-green-500" size={24} />, text: "Approve clips in one tap while getting coffee." },
            { icon: <MessageSquare className="text-indigo-500" size={24} />, text: "Chat directly with Robert-Jan & Roderick." },
            { icon: <Download className="text-purple-500" size={24} />, text: "Download clips instantly to your phone." }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:border-indigo-100 hover:-translate-x-1">
              <div className="bg-gray-50 p-3 rounded-full">{item.icon}</div>
              <span className="font-bold text-gray-700 text-lg">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Phone Mockup - Slick Glass */}
      <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
        <div className="relative border-gray-900 bg-gray-900 border-[10px] rounded-[3rem] h-[720px] w-[360px] shadow-2xl transform transition hover:scale-[1.01] duration-500 z-10 ring-4 ring-gray-100">
          {/* Buttons */}
          <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[13px] top-[72px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[13px] top-[124px] rounded-l-lg"></div>
          
          <div className="rounded-[2.4rem] overflow-hidden w-full h-full bg-white relative flex flex-col">
             
             {/* Status Bar */}
             <div className="h-12 bg-indigo-600 w-full flex justify-between items-center px-6 text-white text-[12px] font-bold z-20">
                <span>9:41</span>
                <div className="flex gap-2 items-center">
                   <Signal size={14} />
                   <Wifi size={14} />
                   <Battery size={14} />
                </div>
             </div>

             {/* App Header */}
             <div className="bg-indigo-600 pb-8 px-6 rounded-b-[2.5rem] shadow-xl relative z-10">
               <div className="flex justify-between items-center text-white mb-8">
                 <div className="flex gap-3 items-center">
                    <div className="w-12 h-12 rounded-full bg-indigo-400 border-2 border-white/50 overflow-hidden ring-2 ring-white/20">
                        <img src="https://ui-avatars.com/api/?name=John+Doe&background=random" alt="User" className="w-full h-full object-cover"/>
                    </div>
                    <div>
                        <p className="text-indigo-200 text-xs font-medium uppercase tracking-wide">Welcome back</p>
                        <p className="font-bold text-xl leading-none">Pastor John</p>
                    </div>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md hover:bg-white/20 transition">
                     <MonitorPlay size={20} className="text-white" />
                 </div>
               </div>
               
               <div className="grid grid-cols-2 gap-4">
                   <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/10">
                        <p className="text-indigo-200 text-xs mb-1 font-bold uppercase">Ready to Post</p>
                        <p className="text-white text-3xl font-bold">3</p>
                   </div>
                   <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/10">
                        <p className="text-indigo-200 text-xs mb-1 font-bold uppercase">Weekly Reach</p>
                        <p className="text-white text-3xl font-bold">12.4K</p>
                   </div>
               </div>
             </div>

             {/* App Body */}
             <div className="p-6 space-y-6 bg-gray-50 flex-1 overflow-hidden relative">
               {/* Reflection Glass Effect */}
               <div className="absolute -top-40 -right-40 w-80 h-[500px] bg-gradient-to-b from-white/40 to-transparent transform rotate-45 pointer-events-none z-0"></div>

               <div className="relative z-10">
                 <div className="flex justify-between items-end mb-4">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Pending Review</p>
                    <p className="text-xs text-indigo-600 font-bold cursor-pointer hover:underline">See all</p>
                 </div>
                 
                 {/* Main Video Card */}
                 <div className="bg-white p-4 rounded-3xl shadow-lg border border-gray-100 relative group cursor-pointer hover:-translate-y-1 transition duration-300">
                   <div className="flex gap-4 mb-4">
                     <div className="w-20 h-24 bg-gray-900 rounded-2xl flex-shrink-0 relative overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition duration-700" alt="thumbnail" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-8 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                                <Play size={12} className="text-white ml-0.5" fill="currentColor" />
                            </div>
                        </div>
                     </div>
                     <div className="flex-1 min-w-0 flex flex-col justify-center">
                       <div className="flex justify-between items-start mb-1">
                           <p className="font-bold text-gray-900 text-sm leading-tight truncate">Hope in the Storm</p>
                       </div>
                       <p className="text-xs text-gray-400 mb-3">Clip #2 • Instagram Reel</p>
                       <div className="flex gap-2">
                         <button className="flex-1 bg-gray-900 text-white text-xs font-bold py-2.5 px-2 rounded-xl hover:bg-gray-800 flex items-center justify-center gap-1 transition shadow-lg shadow-gray-900/10">
                            <CheckCircle size={12} /> Approve
                         </button>
                         <button className="px-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition">
                            <MessageSquare size={14} />
                         </button>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Chat Preview */}
               <div className="relative z-10">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Messages</p>
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:bg-indigo-50/30 transition cursor-pointer">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs shrink-0 ring-4 ring-indigo-50">RJ</div>
                      <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-gray-900 flex justify-between">
                            Robert-Jan
                            <span className="text-[10px] text-gray-400 font-normal">2m ago</span>
                          </p>
                          <p className="text-xs text-gray-500 truncate mt-0.5 font-medium">The new hooks for Sunday are ready!</p>
                      </div>
                      <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full animate-pulse"></div>
                  </div>
               </div>

             </div>

             {/* Bottom Nav */}
             <div className="bg-white border-t border-gray-100 py-5 px-8 flex justify-between items-center text-gray-300 z-20">
                <div className="flex flex-col items-center gap-1 text-indigo-600">
                    <Smartphone size={24} />
                </div>
                <div className="flex flex-col items-center gap-1 hover:text-gray-600 cursor-pointer transition">
                    <MessageSquare size={24} />
                </div>
                <div className="flex flex-col items-center gap-1 hover:text-gray-600 cursor-pointer transition">
                    <Calendar size={24} />
                </div>
             </div>
             
             {/* Home Indicator */}
             <div className="h-1.5 w-1/3 bg-gray-300 mx-auto rounded-full mb-3 z-20"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- PRICING SECTION ---

const Pricing = () => {
  const plans = [
    {
      name: "The Seed",
      price: "$497",
      description: "Consistency without the headache. Perfect for maintaining a professional baseline.",
      features: [
        "12 Short-Form Videos (3 Per Week)",
        "Theological Safety Check (Human Verified)",
        "Auto-Posting to YT, IG, FB & TikTok",
        "Viral Hooks & Captions",
        "Monthly Growth Report"
      ],
      cta: "Plant the Seed",
      highlight: false
    },
    {
      name: "The Growth",
      price: "$997",
      description: "The '150k Reach' System. Dominate the algorithm with daily spiritual content.",
      features: [
        "30 Short-Form Videos (Daily Posting)",
        "1 Full Sermon Video Edit (YouTube Long-Form)",
        "3 Custom High-CTR Thumbnails",
        "Theological Safety Check (Human Verified)",
        "Priority Slack Support"
      ],
      cta: "Start Growing",
      highlight: true
    },
    {
      name: "The Harvest",
      price: "$2,497",
      description: "Complete creative partnership. We become your internal media department.",
      features: [
        "Everything in The Growth",
        "Cinematic 'Electronic Worship' Editing Style",
        "Dedicated Human Editor (No AI cuts)",
        "YouTube SEO & Keyword Strategy",
        "Bi-Weekly Strategy Calls"
      ],
      cta: "Partner for Harvest",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-white relative">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Choose Your Level of Impact</h2>
          <p className="text-xl text-gray-600 font-light">Simple month-to-month stewardship. No contracts. Cancel anytime.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-[2.5rem] p-10 transition-all duration-500 group ${
                plan.highlight 
                  ? 'bg-gray-900 text-white shadow-2xl scale-105 ring-4 ring-indigo-500/20 z-10' 
                  : 'bg-white text-gray-900 shadow-xl border border-gray-100 hover:border-indigo-100 hover:shadow-2xl hover:-translate-y-2'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}
              
              <h3 className={`text-2xl font-bold mb-3 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                <span className={`text-lg font-medium ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>/month</span>
              </div>
              <p className={`text-sm mb-10 leading-relaxed min-h-[40px] ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                {plan.description}
              </p>

              <div className="space-y-5 mb-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle size={20} className={`shrink-0 mt-0.5 ${plan.highlight ? 'text-indigo-400' : 'text-indigo-600'}`} />
                    <span className={`text-sm font-bold ${plan.highlight ? 'text-gray-200' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => window.open('https://calendly.com/', '_blank')} 
                className={`w-full py-4 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 ${
                  plan.highlight 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50' 
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                }`}
              >
                {plan.cta} <ChevronRight size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-3 bg-white/50 backdrop-blur px-6 py-3 rounded-2xl text-indigo-900 text-sm font-semibold border border-indigo-100 shadow-sm">
                <ShieldCheck size={18} className="text-indigo-600"/> 
                <span><strong>14-Day "Good Steward" Guarantee:</strong> Love our work or get a full refund.</span>
            </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onOpenPrivacy, onOpenTerms, onOpenContact }) => (
  <footer className="bg-gray-950 text-white border-t border-gray-900 py-24">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
      <div className="text-left">
        <span className="text-3xl font-bold text-white tracking-tighter">The Sunday Team.</span>
        <p className="text-gray-500 mt-4 text-sm max-w-xs leading-relaxed font-light">
          Helping pastors reclaim the digital space for the Kingdom.
          <br/>Clarity. Technology. Truth.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 text-sm font-bold text-gray-500">
        <button onClick={onOpenPrivacy} className="hover:text-white transition flex items-center gap-2 group">
          <Lock size={16} className="group-hover:text-indigo-400 transition" /> Privacy Policy
        </button>
        <button onClick={onOpenTerms} className="hover:text-white transition flex items-center gap-2 group">
          <FileText size={16} className="group-hover:text-indigo-400 transition" /> Terms of Service
        </button>
        <button 
          onClick={onOpenContact} 
          className="hover:text-white transition flex items-center gap-2 group"
        >
          <Mail size={16} className="group-hover:text-indigo-400 transition" /> Contact Support
        </button>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-900/50 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
      <p>© {new Date().getFullYear()} The Sunday Team. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-white transition">Instagram</a>
        <a href="#" className="hover:text-white transition">LinkedIn</a>
        <a href="#" className="hover:text-white transition">Twitter</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-indigo-500 selection:text-white scroll-smooth antialiased">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <PainPoints />
        <TeamSection />
        <AppFeature />
        <Pricing />
      </main>
      <Footer 
        onOpenPrivacy={() => setShowPrivacy(true)} 
        onOpenTerms={() => setShowTerms(true)} 
        onOpenContact={() => setShowContact(true)}
      />
      
      {/* Modals */}
      <LegalModal 
        isOpen={showPrivacy} 
        onClose={() => setShowPrivacy(false)} 
        title="Privacy Policy"
        content={PrivacyContent}
      />
      <LegalModal 
        isOpen={showTerms} 
        onClose={() => setShowTerms(false)} 
        title="Terms of Service"
        content={TermsContent}
      />
      <ContactModal
        isOpen={showContact}
        onClose={() => setShowContact(false)}
      />
      
      {/* Global CSS for Animations */}
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translate3d(0, 40px, 0); } to { opacity: 1; transform: translate3d(0, 0, 0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        @keyframes pulseSlow { 0%, 100% { opacity: 0.4; transform: scale(1); } 50% { opacity: 0.2; transform: scale(1.1); } }
        @keyframes gradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
        .animate-scale-in { animation: scaleIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-pulse-slow { animation: pulseSlow 8s infinite ease-in-out; }
        .animate-gradient { background-size: 200% 200%; animation: gradient 6s ease infinite; }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </div>
  );
}