"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Download, ArrowRight, Brain, Zap, Code } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary/30 selection:text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center glass-light border-b border-primary/20 bg-background/50 backdrop-blur-xl">
        <h1 className="text-2xl font-black tracking-tighter text-gradient drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">VM.</h1>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-mono text-gray-300">
          <motion.a whileHover={{ y: -2, color: "var(--primary)" }} href="#about" className="transition-colors">About</motion.a>
          <motion.a whileHover={{ y: -2, color: "var(--primary)" }} href="#poc" className="transition-colors">POCs</motion.a>
          <motion.a whileHover={{ y: -2, color: "var(--primary)" }} href="#ebooks" className="transition-colors">Ebooks</motion.a>
          <motion.a whileHover={{ y: -2, color: "var(--primary)" }} href="#newsletter" className="transition-colors">Newsletter</motion.a>
        </div>
      </nav>

      <main className="flex-grow pt-32 pb-16 px-6 sm:px-12 md:px-24 max-w-7xl mx-auto space-y-40">
        
        {/* HERO SECTION */}
        <section className="min-h-[70vh] flex flex-col justify-center gap-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={staggerItem} className="inline-block px-4 py-2 rounded-full glass mb-6 text-sm font-mono text-primary border border-primary/40 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              ✨ Available for visionary projects
            </motion.div>
            
            <motion.h2 variants={staggerItem} className="text-5xl md:text-7xl font-black leading-tight tracking-tighter text-white drop-shadow-xl">
              Hi, I'm <span className="text-gradient hover:animate-pulse cursor-default drop-shadow-[0_0_20px_rgba(138,43,226,0.6)]">Vivek Misra</span>. <br/>
              A Sr UX Designer <span className="text-gray-500 font-light">&</span> <br/>
              AI Innovator.
            </motion.h2>
            
            <motion.p variants={staggerItem} className="mt-8 text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
              I blend <strong className="text-primary font-medium">cutting-edge artificial intelligence</strong> with premium web architecture. 
              Building the future of interfaces using Next.js, Framer Motion, and Machine Learning.
            </motion.p>

            <motion.div variants={staggerItem} className="flex gap-4 mt-10">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold flex items-center gap-2 shadow-[0_0_30px_rgba(0,240,255,0.4)]"
              >
                View Work <ArrowRight size={18}/>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl glass border border-white/20 text-gray-100 font-bold flex items-center gap-2 hover:border-primary/50 transition-colors"
               >
                My Ebooks
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="relative z-10">
           <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
           >
             <motion.div variants={staggerItem} whileHover={{ y: -10, borderColor: "var(--primary)" }} className="md:col-span-1 glass p-8 rounded-3xl border border-white/5 transition-colors shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors" />
                <Brain className="text-primary w-12 h-12 mb-6 drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]"/>
                <h3 className="text-2xl font-bold mb-4 text-white">AI Strategy</h3>
                <p className="text-gray-300 leading-relaxed text-sm">Translating complex ML architectures into intuitive user experiences that scale seamlessly.</p>
             </motion.div>
             <motion.div variants={staggerItem} whileHover={{ y: -10, borderColor: "var(--secondary)" }} className="md:col-span-1 glass p-8 rounded-3xl border border-white/5 transition-colors shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/30 transition-colors" />
                <Zap className="text-secondary w-12 h-12 mb-6 drop-shadow-[0_0_10px_rgba(138,43,226,0.8)]"/>
                <h3 className="text-2xl font-bold mb-4 text-white">Performance</h3>
                <p className="text-gray-300 leading-relaxed text-sm">Building blazing fast web applications heavily utilizing Next.js, edge caching, and fine-tuned UI interactions.</p>
             </motion.div>
             <motion.div variants={staggerItem} whileHover={{ y: -10, borderColor: "var(--accent)" }} className="md:col-span-1 glass p-8 rounded-3xl border border-white/5 transition-colors shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/30 transition-colors" />
                <Code className="text-accent w-12 h-12 mb-6 drop-shadow-[0_0_10px_rgba(255,0,127,0.8)]"/>
                <h3 className="text-2xl font-bold mb-4 text-white">Modern Stack</h3>
                <p className="text-gray-300 leading-relaxed text-sm">Specializing in Next.js, React Query, Zustand, and Framer Motion to craft fluid application flows.</p>
             </motion.div>
           </motion.div>
        </section>

        {/* AI POCs SECTION */}
        <section id="poc" className="space-y-12 shrink-0 z-10 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-black mb-4 text-white drop-shadow-lg">Featured POCs</h2>
            <p className="text-gray-300 text-lg">Experimental interfaces blending AI models with fluid layouts.</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-8">
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="group glass rounded-[2.5rem] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-primary/20 relative block max-w-4xl mx-auto w-full"
            >
              <div className="h-[400px] overflow-hidden relative">
                 <Image src="/images/poc-ml.png" alt="ML Dashboard" fill sizes="(max-width: 768px) 100vw, 800px" priority className="object-cover group-hover:scale-110 transition-transform duration-[1500ms] blur-[1px] group-hover:blur-0" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B1A] via-[#0B0B1A]/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-10 transform group-hover:-translate-y-4 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-4">
                   <span className="bg-primary/20 border border-primary/50 text-primary text-xs font-mono px-3 py-1.5 rounded-full shadow-[0_0_10px_rgba(0,240,255,0.2)]">React Query</span>
                   <span className="bg-secondary/20 border border-secondary/50 text-secondary text-xs font-mono px-3 py-1.5 rounded-full shadow-[0_0_10px_rgba(138,43,226,0.2)]">Zustand</span>
                </div>
                <h3 className="text-3xl font-black text-white mb-2 shadow-sm drop-shadow-md">ML Analytics Dashboard</h3>
                <p className="text-gray-300 max-w-lg">Real-time model inference stats using websockets and optimistic updates bundled into a sleek glassmorphic UI.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EBOOKS SECTION */}
        <section id="ebooks" className="space-y-12 z-10 relative">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12 border-b border-white/10 pb-8">
              <div className="max-w-2xl">
                 <h2 className="text-4xl font-black mb-4 text-white">The <span className="text-gradient">AI Decoded</span> Series</h2>
                 <p className="text-gray-300 text-lg">Deep dives into making artificial intelligence accessible for product engineers and designers. Blending the hype with actual architecture.</p>
              </div>
            </div>
            <div className="flex justify-center">
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2000}>
                <div className="relative group rounded-3xl overflow-hidden w-[350px] h-[500px] shadow-[0_0_80px_rgba(138,43,226,0.4)] border border-white/10">
                  <Image src="/images/ebook-ai.png" alt="AI Decoded: Myth vs. Reality" fill sizes="(max-width: 768px) 100vw, 350px" className="object-cover" />
                  <div className="absolute inset-0 bg-[#0B0B1A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-8 backdrop-blur-md">
                    <h4 className="text-2xl font-black mb-2 text-white">Book One</h4>
                    <p className="text-lg text-primary mb-2 font-bold drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]">Myth vs. Reality</p>
                    <p className="text-sm text-gray-300 mb-8 leading-relaxed">Uncover the truth behind common AI misconceptions and how to practically apply LLMs.</p>
                    <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(138,43,226,0.5)]">
                       <Download size={18}/> Download PDF
                    </button>
                  </div>
                </div>
              </Tilt>
            </div>
        </section>

        {/* NEWSLETTER SECTION */}
        <section id="newsletter" className="glass p-12 rounded-[3rem] text-center max-w-4xl mx-auto border-secondary/40 shadow-[0_0_150px_rgba(138,43,226,0.15)] relative overflow-hidden z-10">
           <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
           
           <Mail className="mx-auto text-primary w-16 h-16 mb-6 relative z-10 drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
           <h2 className="text-4xl font-black mb-4 relative z-10 text-white">Join my Weekly Newsletter</h2>
           <p className="text-gray-300 mb-10 max-w-xl mx-auto relative z-10 text-lg">Get cutting-edge insights on building AI-integrated web applications delivered to your inbox and WhatsApp every Sunday.</p>
           
           <form action={async (formData) => {
              const { subscribeToNewsletter } = await import('./actions');
              const res = await subscribeToNewsletter(formData);
              alert(res.message);
           }} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto relative z-10">
              <input type="email" name="email" placeholder="hi@example.com" className="bg-[#0B0B1A]/80 border border-white/20 rounded-xl px-6 py-4 flex-grow focus:outline-none focus:border-primary/80 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all text-white placeholder-gray-500" />
              <input type="text" name="phone" placeholder="+1234567890 (WhatsApp)" className="bg-[#0B0B1A]/80 border border-white/20 rounded-xl px-6 py-4 shrink-0 focus:outline-none focus:border-secondary/80 focus:shadow-[0_0_15px_rgba(138,43,226,0.3)] transition-all text-white w-48 placeholder-gray-500" />
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-10 py-4 rounded-xl whitespace-nowrap shadow-[0_0_20px_rgba(138,43,226,0.4)]">Subscribe</motion.button>
           </form>
           <p className="text-sm text-gray-500 mt-8 relative z-10 font-mono">Join 5,000+ other developers and designers. Unsubscribe at any time.</p>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 mt-24 py-12 px-6 bg-background/80 backdrop-blur-lg relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-sm font-light">
          <p>© {new Date().getFullYear()} Vivek Misra. All rights reserved.</p>
          <div className="flex gap-8">
            <motion.a whileHover={{ y: -3, color: "var(--primary)" }} href="#" className="transition-colors"><FaTwitter size={22}/></motion.a>
            <motion.a whileHover={{ y: -3, color: "var(--primary)" }} href="#" className="transition-colors"><FaGithub size={22}/></motion.a>
            <motion.a whileHover={{ y: -3, color: "var(--primary)" }} href="#" className="transition-colors"><FaLinkedin size={22}/></motion.a>
          </div>
        </div>
      </footer>
    </div>
  );
}
