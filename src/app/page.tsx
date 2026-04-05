"use client";

import { motion } from "framer-motion";
import { Mail, Download, ArrowRight, Brain, Zap, Code } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center glass">
        <h1 className="text-xl font-bold tracking-tighter text-gradient">VK.</h1>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-mono text-gray-300">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#poc" className="hover:text-primary transition-colors">POCs</a>
          <a href="#ebooks" className="hover:text-primary transition-colors">Ebooks</a>
          <a href="#newsletter" className="hover:text-primary transition-colors">Newsletter</a>
        </div>
      </nav>

      <main className="flex-grow pt-32 pb-16 px-6 sm:px-12 md:px-24 max-w-7xl mx-auto space-y-40">
        
        {/* HERO SECTION */}
        <section className="min-h-[70vh] flex flex-col justify-center gap-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full glass mb-6 text-sm font-mono text-secondary border border-secondary/20 shadow-lg shadow-secondary/5">
              Available for new projects
            </div>
            <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
              Hi, I'm <span className="text-gradient hover:animate-pulse cursor-default">Vivek Misra</span>. <br/>
              A Sr UX Designer & <br/>
              AI Innovator.
            </h2>
            <p className="mt-6 text-lg text-gray-400 max-w-2xl leading-relaxed">
              I blend cutting-edge artificial intelligence with premium web architecture.
              Building the future of interfaces using Next.js, Framer Motion, and Machine Learning.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex gap-4"
          >
            <button className="px-8 py-3 rounded-xl bg-primary hover:bg-primary/80 transition-all font-semibold flex items-center gap-2 shadow-lg shadow-primary/20 hover:-translate-y-1">
              View Work <ArrowRight size={18}/>
            </button>
            <button className="px-8 py-3 rounded-xl glass hover:bg-white/10 transition-all font-semibold flex items-center gap-2 hover:-translate-y-1 text-gray-200">
              My Ebooks
            </button>
          </motion.div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="relative">
           <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
           >
             <div className="md:col-span-1 glass p-8 rounded-3xl">
                <Brain className="text-primary w-12 h-12 mb-6"/>
                <h3 className="text-2xl font-bold mb-4">AI Strategy</h3>
                <p className="text-gray-400 leading-relaxed text-sm">Translating complex ML architectures into intuitive user experiences that scale seamlessly.</p>
             </div>
             <div className="md:col-span-1 glass p-8 rounded-3xl">
                <Zap className="text-secondary w-12 h-12 mb-6"/>
                <h3 className="text-2xl font-bold mb-4">Performance</h3>
                <p className="text-gray-400 leading-relaxed text-sm">Building blazing fast web applications heavily utilizing Next.js, edge caching, and fine-tuned UI interactions.</p>
             </div>
             <div className="md:col-span-1 glass p-8 rounded-3xl">
                <Code className="text-accent w-12 h-12 mb-6"/>
                <h3 className="text-2xl font-bold mb-4">Modern Stack</h3>
                <p className="text-gray-400 leading-relaxed text-sm">Specializing in Next.js, React Query, Zustand, and Framer Motion to craft fluid application flows.</p>
             </div>
           </motion.div>
        </section>

        {/* AI POCs SECTION */}
        <section id="poc" className="space-y-12 shrink-0">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4">Featured POCs</h2>
            <p className="text-gray-400">Experimental interfaces blending AI models with fluid layouts.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="group glass rounded-3xl overflow-hidden shadow-2xl relative block"
            >
              <div className="h-64 overflow-hidden relative">
                 <Image src="/images/poc-ml.png" alt="ML Dashboard" fill sizes="(max-width: 768px) 100vw, 50vw" priority className="object-cover group-hover:scale-105 transition-transform duration-700 blur-[2px] group-hover:blur-0" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-8 transform group-hover:-translate-y-2 transition-transform">
                <div className="flex items-center gap-2 mb-2">
                   <span className="bg-primary/20 text-primary text-xs font-mono px-2 py-1 rounded">React Query</span>
                   <span className="bg-secondary/20 text-secondary text-xs font-mono px-2 py-1 rounded">Zustand</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 shadow-sm drop-shadow-md">ML Analytics Dashboard</h3>
                <p className="text-gray-300 text-sm">Real-time model inference stats using websockets and optimistic updates.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EBOOKS SECTION */}
        <section id="ebooks" className="space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
              <div className="max-w-xl">
                 <h2 className="text-4xl font-bold mb-4">AI Decoded Series</h2>
                 <p className="text-gray-400">Deep dives into making artificial intelligence accessible for product engineers and designers.</p>
              </div>
            </div>
            <div className="flex justify-center">
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2000}>
                <div className="relative group rounded-3xl overflow-hidden w-[300px] h-[400px] shadow-[0_0_50px_rgba(139,92,246,0.3)]">
                  {/* Using the uploaded cover image here - replace /images/ebook-ai.png with the exact file once placed in public folder */}
                  <Image src="/images/ebook-ai.png" alt="AI Decoded: Myth vs. Reality" fill sizes="(max-width: 768px) 100vw, 300px" className="object-cover" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-center p-6 backdrop-blur-sm">
                    <h4 className="text-xl font-bold mb-2">Book One</h4>
                    <p className="text-sm text-gray-300 mb-2 font-bold text-gradient">Myth vs. Reality</p>
                    <p className="text-xs text-gray-400 mb-6">Uncover the truth behind common AI misconceptions.</p>
                    <button className="bg-white text-black px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-gray-200 transition-colors">
                       <Download size={16}/> Download PDF
                    </button>
                  </div>
                </div>
              </Tilt>
            </div>
        </section>

        {/* NEWSLETTER SECTION */}
        <section id="newsletter" className="glass p-12 rounded-[3rem] text-center max-w-3xl mx-auto border-primary/20 shadow-[0_0_100px_rgba(139,92,246,0.1)] relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />
           <Mail className="mx-auto text-primary w-12 h-12 mb-6 relative z-10" />
           <h2 className="text-3xl font-bold mb-4 relative z-10">Join my Weekly Newsletter</h2>
           <p className="text-gray-400 mb-8 max-w-lg mx-auto relative z-10">Get cutting-edge insights on building AI-integrated web applications delivered to your inbox and WhatsApp every Sunday.</p>
           <form action={async (formData) => {
              const { subscribeToNewsletter } = await import('./actions');
              const res = await subscribeToNewsletter(formData);
              alert(res.message);
           }} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10">
              <input type="email" name="email" placeholder="hi@example.com" className="bg-black/50 border border-white/10 rounded-xl px-6 py-3 flex-grow focus:outline-none focus:border-primary/50 transition-colors" />
              <input type="text" name="phone" placeholder="+1234567890 (WhatsApp)" className="bg-black/50 border border-white/10 rounded-xl px-6 py-3 shrink-0 focus:outline-none focus:border-primary/50 transition-colors w-40" />
              <button type="submit" className="bg-primary hover:bg-primary/80 transition-colors text-white font-bold px-8 py-3 rounded-xl whitespace-nowrap shadow-lg shadow-primary/20">Subscribe</button>
           </form>
           <p className="text-xs text-gray-500 mt-6 relative z-10">Join 5,000+ other developers and designers. Unsubscribe at any time.</p>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 mt-24 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Vivek Misra. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors"><FaTwitter size={20}/></a>
            <a href="#" className="hover:text-primary transition-colors"><FaGithub size={20}/></a>
            <a href="#" className="hover:text-primary transition-colors"><FaLinkedin size={20}/></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
