import React, { useEffect, useState } from 'react';
import { ArrowLeft, Share2, Copy, Check } from 'lucide-react';

export default function BlogPost2({ onBack }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <button 
            onClick={onBack || (() => window.history.back())}
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold mb-6 transition"
          >
            <ArrowLeft size={18} /> Back to Home
          </button>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Why Your Church's YouTube Channel is Failing (And How to Fix It)
          </h1>
          
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">RM</div>
              <div>
                <p className="font-semibold text-gray-900">Roderick Mastenbroek</p>
                <p className="text-sm">8 min read</p>
              </div>
            </div>
            <div className="flex gap-2 ml-auto">
              <button onClick={copyToClipboard} className="p-2 hover:bg-white rounded-lg transition">
                {copied ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
              </button>
              <a href="#" className="p-2 hover:bg-white rounded-lg transition">
                <Share2 size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <img 
          src="/blog-2.jpg"
          alt="YouTube analytics"
          className="w-full rounded-2xl shadow-lg mb-12 h-96 object-cover"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 font-light leading-relaxed mb-8">
            Your church uploaded a video to YouTube. It got 47 views. Of those, 30 were probably church members watching it twice. You spent an hour filming and uploading. You reached maybe 15 new people. This is the reality for most church YouTube channels.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 tracking-tight">The Problem: Uploading ≠ Strategy</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Most churches treat YouTube like a filing cabinet. "Let's upload our sermon so people can find it." But YouTube isn't a filing system—it's an algorithm. And your channel is invisible to it.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Why? Because:
          </p>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-3">1. Long-Form Content Gets Buried</h4>
            <p className="text-gray-700">A 45-minute sermon uploaded to YouTube doesn't perform well. The algorithm rewards watch time and engagement. Most people don't sit through long-form unless they already know you. You're creating content for your existing audience, not new people.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-3">2. Your Titles Are Invisible</h4>
            <p className="text-gray-700">Most church titles: "Sunday Service - January 7, 2026" or "Sermon: The Gospel of Mark." These don't show up in YouTube search because nobody is searching for these terms. You're using internal language, not the language people actually use.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-3">3. Your Thumbnails Say "Skip"</h4>
            <p className="text-gray-700">A thumbnail of your pastor standing at a pulpit is forgettable. YouTube's biggest channels use bold text, high contrast, and emotional expressions. Your thumbnail has to make people STOP scrolling. Does yours?</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-3">4. No Hook (First 3 Seconds Are Critical)</h4>
            <p className="text-gray-700">On YouTube, 50% of viewers leave in the first 3 seconds if they don't see something compelling. Your 45-minute sermon starts with a prayer and silence. You've lost half your audience before the message begins.</p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 tracking-tight">The YouTube Algorithm: Understanding How It Works</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            YouTube's algorithm optimizes for three metrics:
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-8 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-3">1. Click-Through Rate (CTR)</h4>
            <p className="text-gray-700"><strong>What it is:</strong> What % of people who see your thumbnail click it<br/>
            <strong>Why it matters:</strong> If your thumbnail gets clicked, YouTube recommends it more<br/>
            <strong>The target:</strong> 4%+ is good for niche content. Churches typically get 0.5-1%</p>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-8 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-3">2. Watch Time</h4>
            <p className="text-gray-700"><strong>What it is:</strong> Total minutes people watch your video<br/>
            <strong>Why it matters:</strong> The algorithm LOVES content that keeps people watching<br/>
            <strong>The problem:</strong> 45-minute sermons have terrible watch time. Average: 3-4 minutes</p>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-8 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-3">3. Engagement (Likes, Comments, Shares)</h4>
            <p className="text-gray-700"><strong>What it is:</strong> How much people interact with your content<br/>
            <strong>Why it matters:</strong> Engagement signals that content is valuable<br/>
            <strong>The problem:</strong> 47 viewers won't generate much engagement</p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 tracking-tight">The Solution: The Algorithm-First Strategy</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Here's how top churches actually grow on YouTube:
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step 1: Short-Form Content (Shorts)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Create 60-second clips extracted from your sermon. These are GOLDMINES for reach. Why?
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 mb-8">
            <li>YouTube actively promotes Shorts to build watch time</li>
            <li>Shorts get recommended to people outside your subscriber base</li>
            <li>Viral Shorts funnel viewers to your full-length content</li>
            <li>One good Short can get 10,000+ views. One sermon might get 47</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step 2: Optimized Titles & Descriptions</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Bad title:</strong> "Sunday Service - January 7, 2026"<br/>
            <strong>Good title:</strong> "How to Find Joy When Life Falls Apart | Full Sermon"
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The difference? The second one is searchable. Someone who's struggling WILL search "How to find joy when life falls apart." They won't search "Sunday Service January 7."
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step 3: High-CTR Thumbnails</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your thumbnail needs:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 mb-8">
            <li>Bold, readable text (usually 2-4 words max)</li>
            <li>High contrast (red/yellow = high click rates)</li>
            <li>An emotional expression or interesting image</li>
            <li>Consistency with your brand</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step 4: The Hook</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your first 3 seconds must grab attention. Show your best clip. State your premise. Make a bold claim. Don't start with silence or welcome remarks.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 tracking-tight">Real Results: What This Actually Looks Like</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            When Tenerife Family Church applied this strategy:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 mb-8">
            <li>YouTube: 170.2K views + 194 new subscribers</li>
            <li>All other platforms: 236K+ additional views</li>
            <li>459 total new followers across platforms</li>
            <li>Growth that compounds week over week</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6">
            They didn't change their preaching. They just aligned their content strategy with how YouTube actually works.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 tracking-tight">The Honest Truth</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            This is not simple. It requires understanding the algorithm, creating high-quality thumbnails, writing SEO-optimized titles, and extracting compelling clips. It's technical work.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            But here's what's simple: <strong>Not doing it.</strong> You can keep uploading sermons that get 47 views. Or you can apply proven strategy and reach thousands.
          </p>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4">Ready to actually grow your YouTube reach?</h3>
            <p className="mb-6">Let's talk about how we can handle all the technical work while you focus on preaching.</p>
            <a 
              href="https://wa.me/31681150445?text=Hi%21%20I%20want%20to%20grow%20our%20church%20YouTube%20channel."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
