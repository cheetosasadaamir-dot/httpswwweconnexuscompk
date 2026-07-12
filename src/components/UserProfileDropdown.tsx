import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, LayoutDashboard, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const UserProfileDropdown =  => {
 const { user, signOut } = useAuth;
 const [open, setOpen] = useState(false);
 const ref = useRef<HTMLDivElement>(null);
 const navigate = useNavigate;

 useEffect( => {
 const handleClickOutside = (e: MouseEvent) => {
 if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
 };
 document.addEventListener('mousedown', handleClickOutside);
 return  => document.removeEventListener('mousedown', handleClickOutside);
 }, []);

 if (!user) return null;

 const avatarUrl = user.user_metadata?.avatar_url || user.user_metadata?.picture;
 const displayName = user.user_metadata?.full_name || user.user_metadata?.name || user.email;

 const handleLogout = async  => {
 setOpen(false);
 await signOut;
 navigate('/login');
 };

 return (
 <div ref={ref} className="relative">
 <button
 onClick={ => setOpen(!open)}
 className="flex items-center justify-center w-9 h-9 rounded-full border border-border/50 bg-muted/30 hover:bg-muted/50 transition-colors overflow-hidden"
 aria-label="User menu"
 >
 {avatarUrl ? (
 <img src={avatarUrl} alt="" className="w-full h-full object-cover rounded-full" />
 ): (
 <User className="w-4 h-4 text-muted-foreground" />
 )}
 </button>

 <AnimatePresence>
 {open && (
 <motion.div
 initial={{ opacity: 0, y: -8, scale: 0.95 }}
 animate={{ opacity: 1, y: 0, scale: 1 }}
 exit={{ opacity: 0, y: -8, scale: 0.95 }}
 transition={{ duration: 0.15 }}
 className="absolute right-0 top-12 w-64 rounded-xl border border-border/50 bg-card/90 backdrop-blur-xl shadow-xl shadow-black/30 overflow-hidden z-[9999]"
 >
 {/* User info */}
 <div className="px-4 py-3 border-b border-border/30">
 <p className="text-sm font-medium text-foreground truncate">{displayName}</p>
 <p className="text-xs text-muted-foreground truncate">{user.email}</p>
 </div>

 {/* Links */}
 <div className="py-1">
 <Link
 to="/dashboard"
 onClick={ => setOpen(false)}
 className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-muted/40 transition-colors"
 >
 <LayoutDashboard className="w-4 h-4 text-primary" />
 Go to Dashboard
 </Link>
 <button
 onClick={handleLogout}
 className="flex items-center gap-3 px-4 py-2.5 text-sm text-destructive hover:bg-destructive/10 transition-colors w-full text-left"
 >
 <LogOut className="w-4 h-4" />
 Logout
 </button>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 );
};

export default UserProfileDropdown;
