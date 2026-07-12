const MeshGradientBackground =  => {
 return (
 <div className="fixed inset-0 z-0">
 {/* Base mesh gradient */}
 <div className="absolute inset-0 mesh-gradient" />
 
 {/* Animated orbs for depth */}
 <div 
 className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-pulse-slow"
 style={{
 background: 'radial-gradient(circle, hsl(234 89% 74% / 0.4) 0%, transparent 70%)',
 top: '10%',
 left: '20%',
 }}
 />
 <div 
 className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-3xl animate-float"
 style={{
 background: 'radial-gradient(circle, hsl(217 91% 60% / 0.3) 0%, transparent 70%)',
 bottom: '20%',
 right: '15%',
 animationDelay: '-3s',
 }}
 />
 <div 
 className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-3xl animate-pulse-slow"
 style={{
 background: 'radial-gradient(circle, hsl(220 14% 75% / 0.2) 0%, transparent 70%)',
 top: '50%',
 left: '60%',
 animationDelay: '-5s',
 }}
 />
 
 {/* Subtle noise overlay */}
 <div 
 className="absolute inset-0 opacity-[0.03]"
 style={{
 backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
 }}
 />
 </div>
 );
};

export default MeshGradientBackground;
