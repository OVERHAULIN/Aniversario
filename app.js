import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Music, Play, Pause, SkipForward, SkipBack, 
  Film, Dumbbell, Smartphone, Gift, Star, Sparkles
} from 'lucide-react';

const TulipIcon = ({ className }) => (
  <svg viewBox="0 0 512 512" className={className} fill="currentColor">
    <path d="M495.3,184.2c-15.6-59.2-56-107.5-111-133c-36-16.7-93.7-28-128.3-28c-34.7,0-92.3,11.3-128.3,28C72.8,76.6,32.3,125,16.7,184.2C2.1,239.5,8.8,300,38.7,347c17.5,27.5,42.5,50.7,73.1,65.8c34.9,17.2,74,25.8,113.8,25.8h1c-2.4,14-4,35-4,61.4c0,11.9,13.6,18.7,23.3,11.7l14.1-10.2c8.2-5.9,13-15.5,13-25.7V395.9v-79.6c0-11-9-20-20-20s-20,9-20,20v61.7c-29.2-5.3-56.9-18.4-80.4-38.3c-28.7-24.3-48.4-58.8-55-96.8c-10.5-60.6,15.2-120.3,66-153.2c4-2.6,9.4-1.9,12.7,1.7l60,65l60-65c3.3-3.6,8.7-4.3,12.7-1.7c50.8,32.9,76.5,92.6,66,153.2c-6.6,38.1-26.4,72.5-55,96.8c-23.5,19.9-51.2,33-80.4,38.3v70.7c39.9,0,79.1-8.5,114.1-25.8c30.6-15.1,55.6-38.4,73.1-65.8C503.2,300,509.9,239.5,495.3,184.2z" />
  </svg>
);

const LilyIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12,2C12,2 10,7 6,9C2,11 2,16 6,18C10,20 12,22 12,22C12,22 14,20 18,18C22,16 22,11 18,9C14,7 12,2 12,2M12,22V24M12,8C12,8 14.5,13 18.5,14M12,8C12,8 9.5,13 5.5,14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const IPhoneMockup = () => (
  <svg viewBox="0 0 300 600" className="w-full h-auto drop-shadow-2xl">
    <defs>
      <linearGradient id="cherryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff4d6d" />
        <stop offset="50%" stopColor="#800f2f" />
        <stop offset="100%" stopColor="#590d22" />
      </linearGradient>
      <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1a0b12" />
        <stop offset="100%" stopColor="#3d1424" />
      </linearGradient>
    </defs>
    {/* Body */}
    <rect x="10" y="10" width="280" height="580" rx="45" fill="url(#cherryGrad)" stroke="#4a0a18" strokeWidth="4" />
    {/* Screen */}
    <rect x="18" y="18" width="264" height="564" rx="38" fill="url(#screenGrad)" />
    {/* Dynamic Island */}
    <rect x="95" y="30" width="110" height="30" rx="15" fill="#000" />
    {/* Screen Content - Lock Screen Info */}
    <text x="150" y="120" fill="#fff" fontSize="48" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">10:09</text>
    <text x="150" y="150" fill="#ffb3c6" fontSize="16" fontFamily="sans-serif" textAnchor="middle">Viernes, 9 Octubre</text>
    
    <Heart x="138" y="220" width="24" height="24" fill="#ff4d6d" className="animate-pulse" />
    <text x="150" y="270" fill="#fff" fontSize="20" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">Felices 3 Meses</text>
    <text x="150" y="295" fill="#ffb3c6" fontSize="14" fontFamily="sans-serif" textAnchor="middle">iPhone 18 Pro Max</text>
    <text x="150" y="315" fill="#ffb3c6" fontSize="14" fontFamily="sans-serif" textAnchor="middle">Color Cherry Exclusivo</text>
    
    {/* Camera Module (Back view illusion overlapping) */}
    <g transform="translate(18, 18)">
      <rect x="0" y="0" width="100" height="100" rx="25" fill="rgba(255,255,255,0.1)" backdrop-filter="blur(10px)" />
      <circle cx="30" cy="30" r="15" fill="#111" stroke="#333" strokeWidth="2" />
      <circle cx="70" cy="30" r="15" fill="#111" stroke="#333" strokeWidth="2" />
      <circle cx="30" cy="70" r="15" fill="#111" stroke="#333" strokeWidth="2" />
      <circle cx="70" cy="70" r="8" fill="#222" /> {/* Flash */}
    </g>
  </svg>
);

const FloatingPetals = () => {
  const petals = Array.from({ length: 30 });
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((_, i) => {
        const isTulip = i % 2 === 0;
        return (
          <motion.div
            key={i}
            className={`absolute text-rose-${Math.random() > 0.5 ? '500' : '400'}/30`}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: -50,
              rotate: Math.random() * 360,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: window.innerHeight + 100,
              rotate: Math.random() * 360 + 180,
              x: `calc(${Math.random() * 100}vw - 50vw)`
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * -20 
            }}
          >
            {isTulip ? <TulipIcon className="w-8 h-8" /> : <LilyIcon className="w-10 h-10" />}
          </motion.div>
        );
      })}
    </div>
  );
};

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  
  const playlist = [
    { title: "Typa Girl", artist: "BLACKPINK", color: "from-pink-500 to-black" },
    { title: "SHEESH", artist: "BABYMONSTER", color: "from-red-600 to-red-900" },
    { title: "Corazón Vacío", artist: "Maria Becerra", color: "from-purple-500 to-rose-500" }
  ];

  const nextSong = () => setCurrentSong((prev) => (prev + 1) % playlist.length);
  const prevSong = () => setCurrentSong((prev) => (prev - 1 + playlist.length) % playlist.length);

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="relative p-1 rounded-3xl bg-gradient-to-r from-rose-500/30 to-fuchsia-500/30 backdrop-blur-md border border-white/10 shadow-2xl max-w-md mx-auto mt-12"
    >
      <div className="bg-black/40 rounded-[22px] p-6 text-white text-center">
        <h3 className="text-sm font-medium text-rose-300 uppercase tracking-widest mb-4 flex justify-center items-center gap-2">
          <Music size={16} /> Soundtrack de Nuestro Amor
        </h3>
        
        <div className={`h-32 rounded-2xl bg-gradient-to-br ${playlist[currentSong].color} flex items-center justify-center mb-6 shadow-inner relative overflow-hidden transition-all duration-700`}>
          <div className="absolute inset-0 bg-black/20" />
          {isPlaying ? (
            <div className="flex gap-2 items-end h-12 z-10">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ height: ["20%", "100%", "20%"] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
                  className="w-3 bg-white rounded-t-sm"
                />
              ))}
            </div>
          ) : (
            <Heart size={48} className="text-white/80 z-10 drop-shadow-md" />
          )}
        </div>

        <motion.div
          key={currentSong}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h4 className="text-2xl font-bold text-white mb-1">{playlist[currentSong].title}</h4>
          <p className="text-rose-200">{playlist[currentSong].artist}</p>
        </motion.div>

        <div className="flex justify-center items-center gap-6">
          <button onClick={prevSong} className="p-3 hover:bg-white/10 rounded-full transition-colors text-rose-300">
            <SkipBack size={24} />
          </button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)} 
            className="p-5 bg-rose-600 hover:bg-rose-500 rounded-full transition-all shadow-lg shadow-rose-600/30 text-white transform hover:scale-105"
          >
            {isPlaying ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
          </button>
          <button onClick={nextSong} className="p-3 hover:bg-white/10 rounded-full transition-colors text-rose-300">
            <SkipForward size={24} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const PassionCard = ({ icon: Icon, title, subtitle, bgGradient, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.03, rotateY: 5 }}
    className={`group relative overflow-hidden rounded-3xl p-1 bg-gradient-to-br ${bgGradient} border border-white/20`}
    style={{ transformStyle: 'preserve-3d' }}
  >
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-0" />
    <div className="relative z-10 p-8 flex flex-col h-full min-h-[300px] justify-end">
      <Icon className="w-12 h-12 text-white/90 mb-auto drop-shadow-md" />
      <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{title}</h3>
      <h4 className="text-lg font-medium text-white/80 mb-4">{subtitle}</h4>
      <p className="text-white/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
        {description}
      </p>
    </div>
  </motion.div>
);

const GrandFinaleGift = () => {
  const [isUnboxed, setIsUnboxed] = useState(false);

  const handleUnbox = () => {
    setIsUnboxed(true);
    // Vibrate device if supported
    if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
  };

  return (
    <div className="relative py-24 flex flex-col items-center justify-center min-h-[80vh]">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-500"
      >
        Tu Sorpresa Especial
      </motion.h2>

      <AnimatePresence mode="wait">
        {!isUnboxed ? (
          <motion.div
            key="box"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0, rotate: 180 }}
            transition={{ duration: 0.6 }}
            className="cursor-pointer group relative"
            onClick={handleUnbox}
          >
            <div className="absolute -inset-10 bg-rose-600/20 blur-3xl rounded-full animate-pulse z-0" />
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="relative z-10 bg-gradient-to-br from-rose-600 to-pink-800 p-12 rounded-3xl shadow-2xl shadow-rose-900/50 border border-rose-400/30 flex flex-col items-center"
            >
              <Gift size={100} className="text-white mb-6 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-white font-bold text-xl tracking-wide uppercase">Toca para abrir</p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="gift"
            initial={{ scale: 0.5, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 15, stiffness: 100 }}
            className="relative flex flex-col items-center z-20"
          >
            {/* Confetti Explosion (CSS simulated) */}
            <div className="absolute inset-0 pointer-events-none">
               {[...Array(40)].map((_, i) => (
                 <motion.div
                   key={i}
                   initial={{ x: 0, y: 0, opacity: 1 }}
                   animate={{ 
                     x: (Math.random() - 0.5) * 400, 
                     y: (Math.random() - 0.5) * 400 - 200,
                     opacity: 0,
                     rotate: Math.random() * 360
                   }}
                   transition={{ duration: 1.5, ease: "easeOut" }}
                   className={`absolute left-1/2 top-1/2 w-3 h-3 rounded-full ${['bg-rose-500', 'bg-pink-400', 'bg-white', 'bg-fuchsia-500'][Math.floor(Math.random()*4)]}`}
                 />
               ))}
            </div>

            <div className="relative w-64 md:w-80 mb-8">
               <div className="absolute -inset-10 bg-rose-500/30 blur-[60px] rounded-full z-0" />
               <motion.div 
                 initial={{ rotateY: -180 }}
                 animate={{ rotateY: 0 }}
                 transition={{ duration: 1.5, delay: 0.2, type: "spring" }}
                 className="relative z-10"
               >
                 <IPhoneMockup />
               </motion.div>
               {/* Decorative flowers around the phone */}
               <motion.div initial={{ opacity:0, scale:0 }} animate={{ opacity:1, scale:1 }} transition={{ delay: 1 }} className="absolute -right-12 -top-10 text-pink-400 z-20 drop-shadow-lg"><TulipIcon className="w-20 h-20 rotate-45" /></motion.div>
               <motion.div initial={{ opacity:0, scale:0 }} animate={{ opacity:1, scale:1 }} transition={{ delay: 1.2 }} className="absolute -left-10 bottom-10 text-white z-20 drop-shadow-lg"><LilyIcon className="w-16 h-16 -rotate-12" /></motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="text-center max-w-lg bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-rose-500/30"
            >
              <h3 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-3">
                <Sparkles className="text-rose-400" /> iPhone 18 Pro Max <Sparkles className="text-rose-400" />
              </h3>
              <p className="text-rose-300 text-lg font-medium mb-4">Edición Exclusiva Color Cherry 🍒</p>
              <p className="text-white/90">
                Mi amor, sé cuánto te encanta este color. Este es un adelanto virtual de tu regalo sorpresa. Mereces lo mejor, hoy y siempre. ¡Felices 3 meses!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function AnniversaryApp() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-rose-500 selection:text-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-rose-950/40 to-slate-950 -z-10" />
      
      <FloatingPetals />

      <main className="relative z-10 container mx-auto px-6 py-12 md:py-24">
        
        {/* Hero Section */}
        <section className="text-center min-h-[70vh] flex flex-col justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-block p-4 rounded-full bg-rose-500/20 backdrop-blur-sm border border-rose-500/30 mb-6">
              <Heart className="w-12 h-12 text-rose-500 fill-rose-500 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-rose-200 via-pink-400 to-rose-600 mb-6 drop-shadow-lg tracking-tight">
              ¡Felices 3 Meses<br/>Mi Amor!
            </h1>
            <p className="text-xl md:text-2xl text-rose-200/90 max-w-2xl mx-auto font-light leading-relaxed">
              Tres meses de risas, de aventuras, de tulípanes, lirios y de un amor que crece cada día con más fuerza.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 animate-bounce text-rose-400/60"
          >
            Desliza hacia abajo
            <div className="w-px h-12 bg-gradient-to-b from-rose-400/60 to-transparent mx-auto mt-2" />
          </motion.div>
        </section>

        {/* Music Section */}
        <section className="py-20 z-20 relative">
          <MusicPlayer />
        </section>

        {/* Passions / Interests Section */}
        <section className="py-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-rose-400"
          >
            Tus Pasiones, Nuestro Mundo
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PassionCard 
              icon={Film}
              title="Cine & Series GL"
              subtitle="Con Becky Armstrong"
              bgGradient="from-violet-600/40 to-fuchsia-900/60"
              description="Esas tardes viendo tus series favoritas, compartiendo tu emoción por Becky Armstrong, son momentos de película que quiero repetir siempre. (🎟️ Ticket VIP para maratones eternas juntos)."
              delay={0.1}
            />
            <PassionCard 
              icon={Star}
              title="Aventuras Ninja"
              subtitle="El Mundo de Boruto"
              bgGradient="from-orange-500/40 to-red-900/60"
              description="Tu lado otaku me fascina. Cada batalla en Boruto y cada momento épico que disfrutas, hace que admire aún más la chica tan increíble y llena de contrastes que eres. ¡Dattebasa!"
              delay={0.3}
            />
            <PassionCard 
              icon={Dumbbell}
              title="Nuestro Gym Time"
              subtitle="Fitness Couple"
              bgGradient="from-emerald-500/40 to-teal-900/60"
              description="Admiro tu disciplina. Levantar pesas, esforzarnos y vernos sudar juntos en el gym se ha convertido en mi rutina favorita. Eres mi motivación más grande, mi gym bro y mi amor."
              delay={0.5}
            />
          </div>
        </section>

        {/* Gift Reveal */}
        <GrandFinaleGift />

        {/* Love Letter Footer */}
        <section className="py-24 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-16 rounded-[40px] shadow-2xl relative"
          >
            <div className="absolute -top-8 -left-8 text-rose-500/30 rotate-[-15deg]">
               <TulipIcon className="w-24 h-24" />
            </div>
            <div className="absolute -bottom-10 -right-10 text-pink-500/20 rotate-[15deg]">
               <LilyIcon className="w-32 h-32" />
            </div>
            
            <h3 className="text-3xl font-serif italic text-rose-300 mb-8 text-center">Para la niña de mis ojos...</h3>
            <div className="space-y-6 text-lg text-rose-100/80 leading-relaxed font-light">
              <p>
                Hoy cumplimos 3 meses. Parece que fue ayer cuando empezamos esta hermosa aventura, pero al mismo tiempo siento que te conozco de toda la vida.
              </p>
              <p>
                Quería hacerte algo especial, algo que reuniera todo lo que te encanta: desde escuchar a BLACKPINK, BABYMONSTER y Maria Becerra, hasta nuestras charlas sobre series GL, Boruto, y por supuesto, nuestro inquebrantable tiempo en el gym.
              </p>
              <p>
                Tus flores favoritas (tulipanes y lirios) adornan este regalo, al igual que el color Cherry que tanto te gusta, plasmado en ese iPhone 18 Pro Max virtual que diseñé solo para verte sonreír.
              </p>
              <p className="font-medium text-rose-200 text-center pt-6 text-xl">
                Te amo con todo mi corazón. Por muchos meses y años más juntos. ❤️
              </p>
            </div>
          </motion.div>
        </section>
        
      </main>
    </div>
  );
}
