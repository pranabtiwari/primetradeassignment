"use client";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-100 font-sans selection:bg-emerald-500/30">
      
      {/* Navigation */}
      <nav className="border-b border-slate-800/60 backdrop-blur-md sticky top-0 z-50 bg-slate-900/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center transform rotate-3">
              <span className="text-slate-950 font-bold text-xl">T</span>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              TaskManager
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link 
              href="/login" 
              className="text-slate-400 hover:text-emerald-400 font-medium transition-colors duration-200"
            >
              Sign in
            </Link>
            <Link 
              href="/register" 
              className="px-5 py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center relative overflow-hidden">
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-emerald-400 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            v2.0 is now live
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
            Organize work. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 animate-gradient-x">
              Amplify focus.
            </span>
          </h1>
          
          <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
            Stop juggling tasks in your head. Experience a clean, powerful, and distraction-free environment built for getting things done.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Link 
              href="/register" 
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 text-slate-950 text-lg font-bold rounded-xl hover:bg-emerald-400 shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              Start for free
            </Link>
            <Link 
              href="/login" 
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-slate-300 border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800/50 hover:text-emerald-400 text-lg font-semibold rounded-xl transition-all duration-300 text-center"
            >
              View Demo
            </Link>
          </div>

          <div className="pt-8 flex items-center gap-8 text-sm font-medium text-slate-500 border-t border-slate-800/50">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Free Forever Plan
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              No Credit Card
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative z-10 lg:pl-10">
          <div className="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group hover:border-slate-700 transition-colors duration-500">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500"></div>
             
             {/* Fake UI Header */}
             <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
               <div className="flex space-x-2">
                 <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                 <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
                 <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
               </div>
               <div className="ml-4 h-2 w-24 bg-slate-800 rounded-full"></div>
             </div>

             {/* Fake UI Body */}
             <div className="p-6 space-y-6 bg-slate-950/50 min-h-[400px]">
                
                {/* Task Item 1 */}
                <div className="flex items-center p-4 bg-slate-900/80 border border-slate-800/60 rounded-xl hover:border-emerald-500/30 transition-colors group/item">
                   <div className="w-6 h-6 rounded-full border-2 border-slate-700 group-hover/item:border-emerald-500 flex items-center justify-center transition-colors">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                   </div>
                   <div className="ml-4 flex-1">
                      <div className="h-2.5 w-32 bg-slate-700 rounded mb-2"></div>
                      <div className="h-2 w-20 bg-slate-800 rounded"></div>
                   </div>
                   <div className="text-xs px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      High Priority
                   </div>
                </div>

                {/* Task Item 2 */}
                <div className="flex items-center p-4 bg-slate-900/80 border border-slate-800/60 rounded-xl hover:border-emerald-500/30 transition-colors group/item">
                   <div className="w-6 h-6 rounded-full border-2 border-slate-700 group-hover/item:border-emerald-500 flex items-center justify-center transition-colors"></div>
                   <div className="ml-4 flex-1">
                      <div className="h-2.5 w-48 bg-slate-700 rounded mb-2"></div>
                      <div className="h-2 w-24 bg-slate-800 rounded"></div>
                   </div>
                   <div className="text-xs px-2 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      In Review
                   </div>
                </div>

                {/* Task Item 3 */}
                <div className="flex items-center p-4 bg-slate-900/80 border border-slate-800/60 rounded-xl opacity-60">
                   <div className="w-6 h-6 rounded-full border-2 border-emerald-500/50 bg-emerald-500/10 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                   </div>
                   <div className="ml-4 flex-1">
                      <div className="h-2.5 w-40 bg-slate-800 rounded mb-2 line-through text-slate-600"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </main>

      {/* Features Grid */}
      <section className="bg-slate-950 py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Everything you need to <span className="text-emerald-400">succeed</span></h2>
            <p className="text-slate-400 text-lg">Powerful features wrapped in a simple, intuitive interface that gets out of your way.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Smart Organization", 
                desc: "Automatically categorize tasks with AI-driven tags and smart filters.",
                icon: (
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                )
              },
              { 
                title: "Seamless Sync", 
                desc: "Your data stays in sync across all devices instantly and securely.",
                icon: (
                  <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                )
              },
              { 
                title: "Focus Mode", 
                desc: "Eliminate distractions with our zen-like focus mode for deep work.",
                icon: (
                  <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:bg-slate-900 hover:border-emerald-500/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-slate-800 group-hover:bg-emerald-500/10 flex items-center justify-center mb-6 transition-colors border border-slate-700 group-hover:border-emerald-500/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">{feature.title}</h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} TaskManager. Built for efficiency.</p>
      </footer>
    </div>
  );
}
