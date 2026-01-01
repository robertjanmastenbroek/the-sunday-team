import React, { useEffect, useState } from 'react';
import { ArrowLeft, Share2, Copy, Check } from 'lucide-react';

export default function BlogPost1({ onBack }) {
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
            How to Repurpose Your Weekly Sermon Into 5 Daily Videos
          </h1>
          
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">RJ</div>
              <div>
                <p className="font-semibold text-gray-900">Robert-Jan Mastenbroek</p>
                <p className="text-sm">7 min read</p>
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
          src="https://images.unsplash.com/photo-1509099836639-18ba71f5bacc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Video creation"
          className="w-full rounded-2xl shadow-lg mb-12 h-96 object-cover"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 font-light leading-relaxed mb-8">
            You spend 20 hours preparing your sermon. You preach it once to 200 people on Sunday morning. Then it's done. By Monday, that message is archived, forgotten, and lost to the digital world. This is a stewardship issue.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 tracking-tight">The Problem: One Sermon, One Audience</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your sermon contains Kingdom truth that could transform lives. But here's the reality:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 mb-8">
            <li>The average pastor reaches 200-300 people on Sunday</li>
            <li>Your sermon is never heard by Gen Z (they're on TikTok, not in church)</li>
            <li>People who miss Sunday never get to hear your message</li>
            <li>That 40-minute sermon could be 5+ powerful 60-second clips</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 tracking-tight">The Solution: Repurposing Into Short-Form Videos</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            What if you could take that one sermon and turn it into 5 short-form videos that reach thousands? Not by creating new content—by extracting the best moments from what you already preached.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The 5-Video Framework</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every powerful sermon contains at least 5 "sticky" moments. Here's how to find and amplify them:
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-8 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-3">Video 1: The Hook (First 30 seconds)</h4>
            <p className="text-gray-700">Find your most provocative statement. The thing that makes people think "Wait, what?" This grabs attention on the feed and makes people stop scrolling.</p>
            <p className="text-gray-700 mt-3"><strong>Example:</strong> "Most Christians have it backwards about money. Here's what Jesus actually said..." [Cut to relevant quote]</p>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-8 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-3">Video 2: The Teaching (The Core Truth)</h4>
            <p className="text-gray-700">Extract the main point of your sermon. This is where you deliver theological weight in digestible form.</p>
            <p className="text-gray-700 mt-3"><strong>Duration:</strong> 45-90 seconds. Should stand alone as complete teaching.</p>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-8 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-3">Video 3: The Story (Emotional Connection)</h4>
            <p className="text-gray-700">Every good sermon has a story. Find yours. Stories drive engagement and create memory.</p>
            <p className="text-gray-700 mt-3"><strong>Duration:</strong> 60-120 seconds. Make people feel something.</p>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-8 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-3">Video 4: The Challenge (The Call to Action)</h4>
            <p className="text-gray-700">What decision or change does your sermon call people toward? Make it clear and compelling.</p>
            <p className="text-gray-700 mt-3"><strong>Duration:</strong> 45-90 seconds. Drive conviction.</p>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-8 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-3">Video 5: The Truth Bomb (The Quote)</h4>
            <p className="text-gray-700">Your most quotable moment. The thing people will screenshot and share. Usually a paradox or powerful reframe.</p>
            <p className="text-gray-700 mt-3"><strong>Duration:</strong> 15-30 seconds. Pure gold.</p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 tracking-tight">Why This Works</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            This framework works because:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 mb-8">
            <li><strong>Meets people where they are.</strong> Short-form video is how Gen Z and Millennials consume content</li>
            <li><strong>Increases reach.</strong> 5 videos posted daily reach WAY more people than one Sunday service</li>
            <li><strong>Builds authority.</strong> Consistent, valuable teaching positions you as a credible voice</li>
            <li><strong>Drives deeper engagement.</strong> People who like your clips come to church wanting to hear MORE</li>
            <li><strong>No new content needed.</strong> You're not creating—you're repurposing what you already did</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 tracking-tight">The Real Impact: Tenerife Family Church</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            When we started this process with Tenerife Family Church in October, they had a powerful message but zero digital reach. By applying this framework:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 mb-8">
            <li><strong>406K+ total views</strong> across all platforms since Oct 21</li>
            <li><strong>459 new followers</strong> (194 YouTube, 132 Instagram, 105 TikTok, 28 Facebook)</li>
            <li><strong>Exponential growth</strong> that continues to compound</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            They didn't change their preaching. They just made it available where people actually are.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 tracking-tight">The Next Step</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you're ready to amplify your sermon beyond Sunday morning, let's talk. We handle all the editing, fact-checking, and posting. You focus on preaching. We focus on reach.
          </p>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4">Ready to repurpose your sermons?</h3>
            <p className="mb-6">Let's schedule a clarity call and show you exactly how this works for your church.</p>
            <a 
              href="https://wa.me/31681150445?text=Hi%21%20I%20want%20to%20learn%20more%20about%20repurposing%20my%20sermons%20into%20videos."
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
