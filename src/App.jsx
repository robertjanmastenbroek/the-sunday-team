import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  Play, 
  Phone, 
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
  ThumbsUp,
  MoreHorizontal,
  Bell,
  TrendingUp,
  BarChart3,
  Globe
} from 'lucide-react';

// --- LEGAL MODALS ---

const LegalModal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col animate-scale-in">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-900"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto text-sm text-gray-600 leading-relaxed space-y-4">
          {content}
        </div>
        
        <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
          <button 
            onClick={onClose}
            className="w-full py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// --- PRIVACY & TERMS CONTENT ---

const PrivacyContent = (
  <>
    <p><strong>Last Updated: January 2025</strong></p>
    <p>At The Sunday Team ("we", "us", or "our"), we respect your privacy and are committed to protecting the personal information of our pastoral clients and their ministries.</p>
    
    <h4 className="font-bold text-gray-900 mt-4">1. Information We Collect</h4>
    <p>We collect information necessary to provide our video repurposing and distribution services, including:</p>
    <ul className="list-disc pl-5 space-y-1 mt-2">
      <li>Contact information (Name, Email, Phone Number).</li>
      <li>Ministry details (Church Name, Social Media Handles).</li>
      <li>Content materials (YouTube links, Video files).</li>
      <li>Payment information (Processed securely via our third-party provider).</li>
    </ul>

    <h4 className="font-bold text-gray-900 mt-4">2. How We Use Your Information</h4>
    <p>We use your data to:</p>
    <ul className="list-disc pl-5 space-y-1 mt-2">
      <li>Edit and distribute your sermon content.</li>
      <li>Communicate with you via our Ministry Portal App (LeadConnector).</li>
      <li>Process monthly subscription payments.</li>
    </ul>

    <h4 className="font-bold text-gray-900 mt-4">3. Third-Party Tools & Sub-Processors</h4>
    <p>To provide "World Class" service, we utilize trusted third-party technologies. By using our service, you acknowledge that data may be processed by:</p>
    <ul className="list-disc pl-5 space-y-1 mt-2">
      <li><strong>GoHighLevel / LeadConnector:</strong> For CRM and App communication.</li>
      <li><strong>Vizard.ai:</strong> For AI-assisted transcription and clip identification.</li>
      <li><strong>Metricool:</strong> For social media scheduling and analytics.</li>
    </ul>

    <h4 className="font-bold text-gray-900 mt-4">4. Data Security</h4>
    <p>We implement industry-standard security measures to protect your account credentials and content. However, no method of transmission over the Internet is 100% secure.</p>
  </>
);

const TermsContent = (
  <>
    <p><strong>Last Updated: January 2025</strong></p>
    <p>Welcome to The Sunday Team. By accessing our website or purchasing our services, you agree to these Terms of Service.</p>

    <h4 className="font-bold text-gray-900 mt-4">1. Service Description</h4>
    <p>The Sunday Team provides "Done-For-You" video repurposing services for pastors and churches. We turn long-form video content into short-form clips for social media.</p>

    <h4 className="font-bold text-gray-900 mt-4">2. The "Good Steward" Guarantee</h4>
    <p>We offer a 14-day money-back guarantee. If you are unsatisfied with the quality or theological accuracy of our work within the first 14 days of your subscription, you may request a full refund in writing. After 14 days, no refunds will be issued for the current billing cycle.</p>

    <h4 className="font-bold text-gray-900 mt-4">3. Content Ownership & License</h4>
    <p><strong>You retain 100% ownership</strong> of all your original sermon content. You grant The Sunday Team a worldwide, royalty-free license to edit, reproduce, and distribute your content solely for the purpose of fulfilling your service order.</p>

    <h4 className="font-bold text-gray-900 mt-4">4. Theological Integrity</h4>
    <p>We strive for biblical accuracy in all clips. However, final approval of all content is the responsibility of the Client via the Ministry Portal App. We are not liable for public reception of your content.</p>

    <h4 className="font-bold text-gray-900 mt-4">5. Cancellation</h4>
    <p>You may cancel your monthly subscription at any time. Services will continue until the end of your current billing period.</p>
  </>
);

// --- MAIN COMPONENTS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tighter text-gray-900 flex items-center gap-2">
          The Sunday Team<span className="text-indigo-600 text-3xl">.</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600 items-center">
          <a href="#results" className="hover:text-gray-900 transition">Results</a>
          <a href="#process" className="hover:text-gray-900 transition">How It Works</a>
          <a href="#team" className="hover:text-gray-900 transition">Our Family</a>
          <a href="#pricing" className="hover:text-gray-900 transition">Pricing</a>
          <button 
            onClick={() => window.open('https://calendly.com/', '_blank')} 
            className="px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition shadow-lg transform hover:-translate-y-0.5"
          >
            Book Strategy Call
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-6">
          <a href="#results" className="text-lg font-medium text-gray-800" onClick={() => setIsOpen(false)}>Results</a>
          <a href="#process" className="text-lg font-medium text-gray-800" onClick={() => setIsOpen(false)}>How It Works</a>
          <a href="#team" className="text-lg font-medium text-gray-800" onClick={() => setIsOpen(false)}>Our Family</a>
          <a href="#pricing" className="text-lg font-medium text-gray-800" onClick={() => setIsOpen(false)}>Pricing</a>
          <button 
            onClick={() => window.open('https://calendly.com/', '_blank')} 
            className="w-full py-4 bg-indigo-600 text-white text-lg font-bold rounded-xl"
          >
            Book Strategy Call
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-indigo-50/50 to-white">
    {/* Abstract Background Elements */}
    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>
    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-50 animate-pulse-slow delay-700"></div>

    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur text-indigo-700 text-xs font-bold uppercase tracking-wider mb-8 border border-indigo-100 shadow-sm animate-fade-in-up hover:scale-105 transition duration-300 cursor-default">
        <ShieldCheck size={14} /> Biblical Integrity Guaranteed
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-tight animate-fade-in-up delay-100">
        Your sermon shouldn't <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          end on Sunday.
        </span>
      </h1>

      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
        We turn your weekly message into <span className="font-semibold text-gray-900">5 daily short videos</span>. 
        Hand-checked for theological accuracy, optimized for reach, and delivered to your phone.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
        <button 
          onClick={() => window.open('https://calendly.com/', '_blank')} 
          className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white text-lg font-bold rounded-full hover:bg-indigo-700 transition shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 transform hover:-translate-y-1 flex items-center justify-center gap-2"
        >
          Start Reaching More People <ArrowRight size={20} />
        </button>
        <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 text-lg font-bold rounded-full hover:bg-gray-50 transition flex items-center justify-center gap-2">
          <Play size={18} fill="currentColor" /> See Examples
        </button>
      </div>
      
      <p className="mt-8 text-sm text-gray-400 font-medium animate-fade-in-up delay-500">
        Trusted by The Mastenbroek Family & Pastors Worldwide
      </p>
    </div>
  </section>
);

const SocialProof = () => (
  <section id="results" className="py-12 bg-white border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-8">
        <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Distributing Kingdom Content On</p>
        <div className="flex justify-center gap-8 md:gap-16 items-center mt-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Platform Logos - Inline SVGs for quality */}
          <svg className="h-8 md:h-10 w-auto" viewBox="0 0 24 24" fill="currentColor" title="YouTube"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          <svg className="h-7 md:h-9 w-auto" viewBox="0 0 24 24" fill="currentColor" title="TikTok"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.14c0 3.48-2.3 6.37-5.54 6.9-3.24.54-6.55-.83-8.23-3.41-1.68-2.57-1.32-6.07.88-8.24 1.54-1.52 3.73-2.09 5.83-1.52v4.14c-2.15-.46-4.32.73-4.99 2.74-.67 2.01.6 4.24 2.85 4.97 2.25.73 4.77-.59 5.56-2.9.19-.55.22-1.14.09-1.71V2.89c0-1.02.04-1.92.04-1.92z"/></svg>
          <svg className="h-7 md:h-9 w-auto" viewBox="0 0 24 24" fill="currentColor" title="Instagram"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          <svg className="h-7 md:h-9 w-auto" viewBox="0 0 24 24" fill="currentColor" title="Facebook"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </div>
      </div>

      <div className="mt-16 bg-gray-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
         {/* Background Effect */}
         <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
         
         <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/30 border border-indigo-400/30 text-indigo-200 text-xs font-bold uppercase tracking-wider mb-6">
                <BarChart3 size={14} /> Case Study
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Tenerife Family Church</h3>
              <p className="text-indigo-100 text-lg leading-relaxed mb-8">
                TFC had a powerful message but limited reach. Within the first month of partnering with us, their digital impact exploded—reaching over 150,000 souls online across all platforms.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                   <p className="text-4xl font-extrabold text-white mb-1">150K+</p>
                   <p className="text-indigo-300 text-sm font-medium flex items-center gap-1"><TrendingUp size={14} /> Total Views</p>
                </div>
                <div>
                   <p className="text-4xl font-extrabold text-white mb-1">28</p>
                   <p className="text-indigo-300 text-sm font-medium">Days</p>
                </div>
              </div>
            </div>

            {/* Visual Graph Mockup */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 relative">
               <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-xs text-gray-400">Total Views (Last 28 Days)</p>
                    <p className="text-2xl font-bold text-white">150,300</p>
                  </div>
                  <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                    <TrendingUp size={12} /> +285%
                  </div>
               </div>
               
               {/* Platform Breakdown Bars */}
               <div className="space-y-4">
                  {/* YouTube */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-300 flex items-center gap-1">YouTube Shorts</span>
                        <span className="font-bold text-white">61.0K</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>

                  {/* TikTok */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-300 flex items-center gap-1">TikTok</span>
                        <span className="font-bold text-white">34.0K</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                        <div className="bg-cyan-400 h-2 rounded-full" style={{ width: '55%' }}></div>
                    </div>
                  </div>

                  {/* Facebook */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-300 flex items-center gap-1">Facebook Reels</span>
                        <span className="font-bold text-white">28.0K</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>

                   {/* Instagram */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-300 flex items-center gap-1">Instagram Reels</span>
                        <span className="font-bold text-white">27.3K</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                        <div className="bg-pink-500 h-2 rounded-full" style={{ width: '44%' }}></div>
                    </div>
                  </div>
               </div>
               
               <div className="mt-6 flex gap-2 items-center text-xs text-gray-400 justify-center bg-black/20 py-2 rounded-lg">
                  <Globe size={12} /> Verified Cross-Platform Performance
               </div>
            </div>
         </div>
      </div>
    </div>
  </section>
);

const PainPoints = () => (
  <section id="process" className="py-24 bg-white">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">The "Sermon Graveyard" Problem</h2>
      <p className="text-gray-600 mb-16 max-w-2xl mx-auto">Most sermons are preached once and then forgotten in an archive. We believe that is a stewardship issue.</p>
      
      <div className="grid md:grid-cols-3 gap-8 text-left">
        {[
          { 
            icon: <Zap size={28} />, 
            title: "The 20-Hour Effort", 
            text: "You spend 20 hours prepping a sermon. Preaching it once to 200 people is good. Reaching 20,000 throughout the week is stewardship." 
          },
          { 
            icon: <Users size={28} />, 
            title: "The Missing Gen Z", 
            text: "Your future congregation is on TikTok and Reels. If you aren't speaking their language on their platforms, you are invisible to them." 
          },
          { 
            icon: <ShieldCheck size={28} />, 
            title: "The AI Risk", 
            text: "Using cheap AI tools? They cut Jesus off mid-sentence or highlight the wrong point. You need spiritual discernment, not just algorithms." 
          }
        ].map((item, i) => (
          <div key={i} className="bg-gray-50 p-8 rounded-3xl hover:shadow-lg transition duration-300 border border-transparent hover:border-indigo-100 group">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 mb-6 shadow-sm group-hover:scale-110 transition duration-300 border border-gray-100">
              {item.icon}
            </div>
            <h3 className="font-bold text-lg mb-3 text-gray-900">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TeamSection = () => (
  <section id="team" className="py-24 bg-gradient-to-br from-indigo-900 to-slate-900 text-white overflow-hidden relative">
    {/* Decorative BG */}
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
       <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-500 rounded-full blur-[100px]"></div>
       <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-[100px]"></div>
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* IMAGE SIDE */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl opacity-75 blur-lg group-hover:opacity-100 transition duration-500"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-800 aspect-[4/3]">
             {/* USER ACTION REQUIRED: 
                Please replace the placeholder URL below with the actual path to your family photo.
                Example: src="./images/family-photo.jpg" or a hosted URL.
             */}
            <img 
              src="/Family.JPG" 
              alt="The Mastenbroek Family" 
              className="w-full h-full object-cover transform transition duration-700 hover:scale-105"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

            {/* Labels */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
               <div className="text-left">
                  <p className="text-indigo-300 text-xs font-bold uppercase tracking-wider mb-1">Theology & QC</p>
                  <p className="font-bold text-white text-lg">Roderick</p>
               </div>
               <div className="text-right">
                  <p className="text-indigo-300 text-xs font-bold uppercase tracking-wider mb-1">Strategy & Growth</p>
                  <p className="font-bold text-white text-lg">Robert-Jan</p>
               </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white text-gray-900 p-4 rounded-xl shadow-xl hidden md:block">
            <p className="text-xs font-bold uppercase text-gray-400">Founded by</p>
            <p className="font-bold font-serif italic text-lg">The Mastenbroek Family</p>
          </div>
        </div>

        {/* TEXT SIDE */}
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6 border border-indigo-500/30">
             Not an Agency. A Family.
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Family Values.<br/>Digital Excellence.</h2>
          <p className="text-lg text-indigo-100 mb-6 leading-relaxed">
            In a digital world full of faceless agencies and cold algorithms, we chose a different path. We are the <strong>Mastenbroek family</strong>.
          </p>
          <p className="text-lg text-indigo-100 mb-10 leading-relaxed">
            We believe that stewarding the Gospel online requires more than just editing skills—it requires spiritual discernment. Supported by our parents, Emiel & Roosmarie, we are dedicated to helping your church claim its digital territory.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-5">
              <div className="w-14 h-14 bg-indigo-600/20 rounded-2xl flex items-center justify-center text-indigo-300 shrink-0 border border-indigo-500/30 shadow-lg">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Theological Integrity</h4>
                <p className="text-indigo-200">Roderick personally reviews clips to ensure no point is ever taken out of context.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-14 h-14 bg-indigo-600/20 rounded-2xl flex items-center justify-center text-indigo-300 shrink-0 border border-indigo-500/30 shadow-lg">
                <Users size={28} />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Personal Relationship</h4>
                <p className="text-indigo-200">You aren't a ticket number. Robert-Jan is your direct line for strategy and growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AppFeature = () => (
  <section className="py-24 bg-gray-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <div className="order-2 lg:order-1">
        <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6 border border-indigo-200">
          Powered by Tech
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Your Media Team,<br/>Now in Your Pocket.</h2>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Forget messy email threads with DropBox links. We give you a dedicated <strong>Ministry Portal App</strong> (powered by LeadConnector).
        </p>
        
        <div className="space-y-4">
          {[
            { icon: <CheckCircle className="text-green-500" />, text: "Approve clips in one tap while getting coffee." },
            { icon: <MessageSquare className="text-indigo-500" />, text: "Chat directly with Robert-Jan & Roderick." },
            { icon: <Calendar className="text-purple-500" />, text: "View your content calendar in real-time." }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              {item.icon}
              <span className="font-medium text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Phone Mockup */}
      <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
        <div className="relative border-gray-900 bg-gray-900 border-[12px] rounded-[2.5rem] h-[640px] w-[320px] shadow-2xl transform transition hover:scale-[1.02] duration-500">
          {/* Buttons */}
          <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[12px] top-[72px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[12px] top-[124px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[12px] top-[178px] rounded-l-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[12px] top-[142px] rounded-r-lg"></div>
          
          <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative flex flex-col">
             
             {/* Status Bar */}
             <div className="h-8 bg-indigo-600 w-full flex justify-between items-center px-6 text-white text-[10px] font-bold z-20">
                <span>9:41</span>
                <div className="flex gap-1.5 items-center">
                   <Signal size={10} />
                   <Wifi size={10} />
                   <Battery size={10} />
                </div>
             </div>

             {/* App Header */}
             <div className="bg-indigo-600 pb-6 px-6 rounded-b-3xl shadow-lg relative z-10">
               <div className="flex justify-between items-center text-white mb-6">
                 <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-400 border-2 border-white overflow-hidden">
                        <img src="https://ui-avatars.com/api/?name=John+Doe&background=random" alt="User" />
                    </div>
                    <div>
                        <p className="text-indigo-200 text-xs">Good morning,</p>
                        <p className="font-bold leading-none">Pastor John</p>
                    </div>
                 </div>
                 <Bell size={20} className="text-indigo-200" />
               </div>
               
               <div className="grid grid-cols-2 gap-3">
                   <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/20">
                        <p className="text-indigo-200 text-[10px] mb-1">Videos Ready</p>
                        <p className="text-white text-xl font-bold">3</p>
                   </div>
                   <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/20">
                        <p className="text-indigo-200 text-[10px] mb-1">Weekly Reach</p>
                        <p className="text-white text-xl font-bold">12.4K</p>
                   </div>
               </div>
             </div>

             {/* App Body */}
             <div className="p-5 space-y-5 bg-gray-50 flex-1 overflow-hidden relative">
               {/* Reflection Glass Effect */}
               <div className="absolute -top-20 -right-20 w-40 h-80 bg-gradient-to-b from-white/30 to-transparent transform rotate-45 pointer-events-none z-10"></div>

               <div>
                 <div className="flex justify-between items-end mb-3">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Pending Review</p>
                    <p className="text-[10px] text-indigo-600 font-bold">See all</p>
                 </div>
                 
                 {/* Main Video Card */}
                 <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 relative">
                   <div className="flex gap-3 mb-3">
                     <div className="w-16 h-20 bg-gray-900 rounded-lg flex-shrink-0 relative overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" className="w-full h-full object-cover opacity-80" alt="thumbnail" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-6 h-6 bg-white/30 backdrop-blur rounded-full flex items-center justify-center">
                                <Play size={10} className="text-white ml-0.5" fill="currentColor" />
                            </div>
                        </div>
                     </div>
                     <div className="flex-1">
                       <div className="flex justify-between items-start">
                           <p className="font-bold text-gray-800 text-sm leading-tight">Hope in the Storm</p>
                           <MoreHorizontal size={14} className="text-gray-400" />
                       </div>
                       <p className="text-[10px] text-gray-400 mb-2 mt-0.5">Clip #2 • Instagram Reel</p>
                       <div className="flex gap-2">
                         <button className="flex-1 bg-gray-900 text-white text-[10px] font-bold py-2 px-2 rounded-lg hover:bg-gray-800 flex items-center justify-center gap-1">
                            <CheckCircle size={10} /> Approve
                         </button>
                         <button className="px-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200">
                            <MessageSquare size={12} />
                         </button>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Chat Preview */}
               <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Recent Messages</p>
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">RJ</div>
                      <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-gray-900">Robert-Jan</p>
                          <p className="text-[10px] text-gray-500 truncate">The new hooks for Sunday are ready!</p>
                      </div>
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  </div>
               </div>

             </div>

             {/* Bottom Nav */}
             <div className="bg-white border-t border-gray-100 py-3 px-6 flex justify-between items-center text-gray-400 text-[10px] font-medium">
                <div className="flex flex-col items-center gap-1 text-indigo-600">
                    <Smartphone size={20} />
                    <span>Home</span>
                </div>
                <div className="flex flex-col items-center gap-1 hover:text-gray-600 cursor-pointer">
                    <MessageSquare size={20} />
                    <span>Chat</span>
                </div>
                <div className="flex flex-col items-center gap-1 hover:text-gray-600 cursor-pointer">
                    <Calendar size={20} />
                    <span>Plan</span>
                </div>
             </div>
             
             {/* Home Indicator */}
             <div className="h-1 w-1/3 bg-gray-300 mx-auto rounded-full mb-2"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Stewardship Pricing</h2>
        <p className="text-xl text-gray-600">One flat rate. No hidden fees. Cancel anytime.</p>
      </div>

      <div className="max-w-lg mx-auto bg-white rounded-[2rem] shadow-2xl border border-indigo-50 overflow-hidden relative transform hover:-translate-y-2 transition duration-500">
        <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
        <div className="p-10 text-center">
          <h3 className="text-2xl font-bold text-gray-900">The Kingdom Reach Plan</h3>
          <div className="mt-6 flex items-baseline justify-center text-gray-900">
            <span className="text-6xl font-extrabold tracking-tight">$497</span>
            <span className="ml-2 text-xl font-semibold text-gray-400">/month</span>
          </div>
          <p className="mt-4 text-gray-500 text-sm font-medium">Less than the cost of a coffee per day.</p>
          
          <div className="mt-8 pt-8 border-t border-gray-100 space-y-4 text-left">
            {[
              "5 High-Impact Shorts Per Week (Mon-Fri)",
              "Theological Safety Check (Human Verified)",
              "Distribution to YT, IG, FB & TikTok",
              "Viral Hooks & Descriptions Written",
              "Access to Ministry Portal App",
              "Monthly Stewardship Report"
            ].map((feature, i) => (
              <li key={i} className="flex items-start">
                <div className="flex-shrink-0 w-6">
                  <CheckCircle className="h-5 w-5 text-indigo-600" />
                </div>
                <p className="ml-3 text-base text-gray-700 font-medium">{feature}</p>
              </li>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-indigo-50 rounded-xl border border-indigo-100 text-left flex gap-3 shadow-inner bg-opacity-50">
            <ShieldCheck className="text-indigo-600 flex-shrink-0" size={24} />
            <div>
                <p className="text-sm text-indigo-900 font-bold">
                14-Day "Good Steward" Guarantee
                </p>
                <p className="text-xs text-indigo-700 mt-1 leading-snug">
                If you feel we haven't stewarded your message with accuracy and excellence in the first 2 weeks, we will refund every penny.
                </p>
            </div>
          </div>

          <div className="mt-8">
            <button 
              onClick={() => window.open('https://calendly.com/', '_blank')} 
              className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-xl font-bold rounded-xl text-white bg-gray-900 hover:bg-gray-800 transition shadow-lg hover:shadow-xl hover:shadow-indigo-500/20"
            >
              Book Strategy Call <ArrowRight className="ml-2" size={20}/>
            </button>
            <p className="mt-4 text-xs text-gray-400">Limited spots available for Q1 2025</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = ({ onOpenPrivacy, onOpenTerms }) => (
  <footer className="bg-gray-900 text-white border-t border-gray-800 py-16">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <span className="text-2xl font-bold text-white tracking-tighter">The Sunday Team.</span>
        <p className="text-gray-400 mt-2 text-sm max-w-xs leading-relaxed">
          Helping pastors reclaim the digital space for the Kingdom.
          <br/>Stewardship. Technology. Truth.
        </p>
      </div>
      
      <div className="flex gap-8 text-sm font-medium text-gray-400">
        <button onClick={onOpenPrivacy} className="hover:text-white transition flex items-center gap-2">
          <Lock size={14} /> Privacy Policy
        </button>
        <button onClick={onOpenTerms} className="hover:text-white transition flex items-center gap-2">
          <FileText size={14} /> Terms of Service
        </button>
        <button 
          onClick={() => window.open('mailto:hello@thesundayteam.com')} 
          className="hover:text-white transition"
        >
          Contact
        </button>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
      © {new Date().getFullYear()} The Sunday Team. All rights reserved.
    </div>
  </footer>
);

export default function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-900 scroll-smooth">
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
      
      {/* Global CSS for Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 40px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-scale-in {
          animation: scaleIn 0.2s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulseSlow 8s infinite ease-in-out;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
      `}</style>
    </div>
  );
}