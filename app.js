const { useState, useEffect } = React;

const App = () => {
    const [showSurprise, setShowSurprise] = useState(false);
    const [hearts, setHearts] = useState([]);

    // Generador de corazones flotantes de fondo
    useEffect(() => {
        const interval = setInterval(() => {
            setHearts(prev => {
                const newHeart = {
                    id: Math.random(),
                    left: Math.random() * 100,
                    animationDuration: Math.random() * 3 + 4, // Entre 4 y 7 segundos
                    emoji: ['🍒', '❤️', '✨', '🌷'][Math.floor(Math.random() * 4)]
                };
                // Mantenemos máximo 25 corazones para optimizar el rendimiento
                return [...prev, newHeart].slice(-25);
            });
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col items-center py-12 px-4">
            
            {/* Sistema de partículas (corazones) */}
            {hearts.map(heart => (
                <div
                    key={heart.id}
                    className="absolute text-3xl opacity-40 pointer-events-none"
                    style={{
                        left: `${heart.left}%`,
                        bottom: '-50px',
                        animation: `floatUp ${heart.animationDuration}s linear forwards`,
                    }}
                >
                    {heart.emoji}
                </div>
            ))}

            {/* Título Principal */}
            <div className="text-center z-10 mb-16 animate-float mt-10">
                <h1 className="text-5xl md:text-7xl font-bold text-red-400 mb-4 drop-shadow-[0_0_15px_rgba(248,113,113,0.5)]">
                    Felices 3 Meses 🍒
                </h1>
                <p className="text-xl md:text-2xl text-pink-200 font-light drop-shadow-md">
                    Un detalle especial para la chica más increíble...
                </p>
            </div>

            {/* Contenedor de Tarjetas de Cristal */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl z-10 mb-16 w-full">
                
                <div className="glass p-8 rounded-3xl hover:scale-105 hover:bg-white/10 transition-all duration-300">
                    <div className="text-5xl mb-4 text-center">🌷🌸</div>
                    <h3 className="text-xl font-bold text-pink-300 mb-2 text-center">Tus Flores Favoritas</h3>
                    <p className="text-gray-300 text-sm text-center">Tulipanes y Lirios. Hermosos y delicados, pero nada se compara contigo.</p>
                </div>

                <div className="glass p-8 rounded-3xl hover:scale-105 hover:bg-white/10 transition-all duration-300">
                    <div className="text-5xl mb-4 text-center">📺👩‍❤️‍👩</div>
                    <h3 className="text-xl font-bold text-pink-300 mb-2 text-center">Tardes de Maratón</h3>
                    <p className="text-gray-300 text-sm text-center">Viendo Boruto, nuestras series GL favoritas y admirando a Becky Armstrong juntos.</p>
                </div>

                <div className="glass p-8 rounded-3xl hover:scale-105 hover:bg-white/10 transition-all duration-300">
                    <div className="text-5xl mb-4 text-center">🎧🖤🩷</div>
                    <h3 className="text-xl font-bold text-pink-300 mb-2 text-center">El Soundtrack Perfecto</h3>
                    <p className="text-gray-300 text-sm text-center">De BLACKPINK a BABYMONSTER, con un toque de María Becerra de fondo.</p>
                </div>

                <div className="glass p-8 rounded-3xl hover:scale-105 hover:bg-white/10 transition-all duration-300">
                    <div className="text-5xl mb-4 text-center">🏋️‍♀️🔥</div>
                    <h3 className="text-xl font-bold text-pink-300 mb-2 text-center">Disciplina Fit</h3>
                    <p className="text-gray-300 text-sm text-center">Me encanta tu energía para ir al gym, te ves increíble siempre que te esfuerzas.</p>
                </div>

                <div className="glass p-8 rounded-3xl hover:scale-105 hover:bg-white/10 transition-all duration-300">
                    <div className="text-5xl mb-4 text-center">📱✨</div>
                    <h3 className="text-xl font-bold text-pink-300 mb-2 text-center">iPhone 18 Pro Max</h3>
                    <p className="text-gray-300 text-sm text-center">En color Cherry, por supuesto. El celular de tus sueños que combina con todo esto.</p>
                </div>

                <div className="glass p-8 rounded-3xl hover:scale-105 hover:bg-white/10 transition-all duration-300">
                    <div className="text-5xl mb-4 text-center">💑💖</div>
                    <h3 className="text-xl font-bold text-pink-300 mb-2 text-center">Nosotros</h3>
                    <p className="text-gray-300 text-sm text-center">Estos 3 meses son solo el comienzo de una historia hermosa. ¡Vamos por más!</p>
                </div>

            </div>

            {/* Sección Interactiva Final */}
            <div className="z-10 text-center mt-10 mb-20">
                {!showSurprise ? (
                    <button 
                        onClick={() => setShowSurprise(true)}
                        className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_25px_rgba(239,68,68,0.6)] transition-all hover:scale-110 text-lg"
                    >
                        Toca aquí mi amor 💌
                    </button>
                ) : (
                    <div className="glass p-10 rounded-3xl animate-[bounce_1s_ease-in-out] shadow-[0_0_40px_rgba(248,113,113,0.4)]">
                        <h2 className="text-4xl md:text-5xl font-bold text-pink-300 mb-4 drop-shadow-md">
                            ¡Te quiero muchísimo! 🥰
                        </h2>
                        <p className="text-xl text-white">
                            Gracias por hacerme tan feliz. ¡Feliz Aniversario!
                        </p>
                    </div>
                )}
            </div>
            
            {/* Animación inyectada para los corazones */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes floatUp {
                    0% { transform: translateY(100vh) scale(0.5); opacity: 0; }
                    10% { opacity: 0.7; }
                    90% { opacity: 0.7; }
                    100% { transform: translateY(-100px) scale(1.5); opacity: 0; }
                }
            `}} />
        </div>
    );
};

// Renderizar la aplicación en el HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);