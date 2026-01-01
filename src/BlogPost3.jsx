import React, { useEffect, useState } from 'react';
import { ArrowLeft, Share2, Copy, Check } from 'lucide-react';

export default function BlogPost3({ onBack }) {
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
            TikTok for Pastors: Reaching Gen Z Without Being Cringe
          </h1>
          
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">RJ</div>
              <div>
                <p className="font-semibold text-gray-900">Robert-Jan Mastenbroek</p>
                <p className="text-sm">6 min read</p>
              </div>
            </div>
            <div className="flex gap-2 ml-auto">
              <button onClick={copyToClipboard} className="p-2 hover:bg-white rounded-lg transition">
                {copied ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
              </button>
              <a
                href="https://wa.me/31681150445?text=Hi%21%20I%20want%20to%20reach%20Gen%20Z%20on%20TikTok."
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-white rounded-lg transition"
              >
                <Share2 size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <img 
          src="/blog-3.jpg"
          alt="TikTok marketing"
          className="w-full rounded-2xl shadow-lg mb-12 h-96 object-cover"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 font-light leading-relaxed mb-8">
            "I'm not putting my sermon on TikTok. That's for dancing teenagers and lip-sync videos." 
            <br/><br/>
            I hear this from pastors constantly. And I understand the hesitation. TikTok feels shallow. It's the opposite of your 45-minute sermon about deep theology. 
            <br/><br/>
            But here's what most pastors don't realize: Gen Z is on TikTok. And if your message isn't there, you've already lost them.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 tracking-tight">The Reality Check: Where Gen Z Actually Is</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Gen Z (born 1997-2012) doesn't watch YouTube. They don't read blogs. They don't come to Sunday morning service without a reason to.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            But they ARE on TikTok. Not just for entertainment—for information. Surveys show Gen Z uses TikTok to:
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-3 mb-8">
            <li><strong>Learn</strong> - "How to handle anxiety," "What's the meaning of life," "Is faith even real?"</li>
            <li><strong>Find community</strong> - They follow creators who share their values</li>
            <li><strong>Process faith questions</strong> - Belief, doubt, meaning, purpose</li>
            <li><strong>Discover authentic voices</strong> - They can smell inauthenticity from a mile away</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6">
            Your sermon about "Finding God's Purpose" might get 50 people on Sunday. But that same message on TikTok could reach 50,000 Gen Z kids who are desperately looking for exactly that answer.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 tracking-tight">Why TikTok Actually Works for Gospel Content</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            TikTok's algorithm is different from YouTube. It doesn't require subscribers. It doesn't require followers. It just asks: "Is this valuable? Is this authentic?"
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            That's why a random pastor's 60-second clip about faith can go viral alongside dancing teenagers. Because authenticity travels.
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-8 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-3">The TikTok Algorithm Favors:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Authenticity</strong> - Raw, unpolished, real. Gen Z hates fake</li>
              <li><strong>Hook</strong> - First 3 seconds decide everything</li>
              <li><strong>Relatability</strong> - Does this apply to MY life right now?</li>
              <li><strong>Completion rate</strong> - Did they watch the whole video?</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 tracking-tight">How to Do TikTok Without Being Cringe</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The key to authentic Gospel content on TikTok is NOT forcing the platform. You can't dance your way to faith. You can't be someone you're not.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Share Your Real Thoughts</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Post a quick 30-60 second take on something Gen Z is actually asking about:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 mb-8">
            <li>"Why is it okay to doubt your faith?"</li>
            <li>"The church got this wrong about dating"</li>
            <li>"What I wish I knew at your age"</li>
            <li>"Your anxiety might actually be telling you something important"</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6">
            You're not performing. You're just sharing wisdom.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Extract From Your Sermon</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your Sunday sermon is FULL of TikTok moments. You probably said 15 things that could each be their own video. Find them.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Example:</strong> In your sermon about "Faith During Doubt," you said: "Doubt isn't the opposite of faith. Apathy is. Doubt means you care enough to question."
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            That sentence IS a TikTok. 15 seconds of you saying it. Then done.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Answer Actual Questions</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Search TikTok for questions people are asking in your area of ministry:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 mb-8">
            <li>"Is it wrong to be depressed as a Christian?"</li>
            <li>"How do I talk to my parents about my faith?"</li>
            <li>"Why doesn't prayer work?"</li>
            <li>"Can I be Christian and [whatever Gen Z is asking about]?"</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6">
            Answer one question per video. Quick. Thoughtful. Real.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Be Willing to Be Wrong</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Gen Z respects pastors who admit they don't have all the answers. "That's a great question. Honestly, I'm still figuring that out too." This is MORE credible than pretending certainty about everything.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 tracking-tight">What This Actually Looks Like: Real Numbers</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Tenerife Family Church's TikTok results:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 mb-8">
            <li><strong>74K views</strong> since October 21 (and growing)</li>
            <li><strong>105 new followers</strong> - people who want to see more</li>
            <li><strong>Zero paid ads</strong> - organic reach through the algorithm</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6">
            Those 105 followers are Gen Z kids who are now connected to your church. Some of them will show up to youth group. Some will eventually visit on Sunday. Some might actually meet Jesus through a 60-second video.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 tracking-tight">The Uncomfortable Truth</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you want to reach Gen Z, you have to meet them where they are. Not where you wish they were. Not on platforms you prefer. But where they actually spend their attention.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            That's TikTok. That's YouTube Shorts. That's Instagram Reels.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            This doesn't mean compromising your message. It means translating it. Speaking their language while staying true to your truth.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 tracking-tight">Your Next Step</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            You could spend the next 3 months learning TikTok's algorithm, editing software, posting strategy, and engagement tactics. Or you could focus on what you're good at (preaching) and let someone else handle the platform work.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Either way, the clock is ticking. Every month you're not on TikTok, your church is invisible to an entire generation.
          </p>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4">Ready to reach Gen Z where they actually are?</h3>
            <p className="mb-6">Let's create a TikTok strategy that reaches your next generation without feeling forced or cringe.</p>
            <a 
              href="https://wa.me/31681150445?text=Hi%21%20I%20want%20to%20reach%20Gen%20Z%20on%20TikTok."
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
