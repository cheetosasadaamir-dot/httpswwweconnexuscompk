import { TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface EconNexusLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  linkHome?: boolean;
  className?: string;
  watermark?: boolean;
}

const sizeMap = {
  sm: { icon: 'w-5 h-5', iconBox: 'w-8 h-8', text: 'text-lg', gap: 'gap-2' },
  md: { icon: 'w-6 h-6', iconBox: 'w-10 h-10', text: 'text-xl', gap: 'gap-3' },
  lg: { icon: 'w-8 h-8', iconBox: 'w-14 h-14', text: 'text-3xl', gap: 'gap-4' },
};

const EconNexusLogo = ({ size = 'md', showText = true, linkHome = true, className, watermark = false }: EconNexusLogoProps) => {
  const s = sizeMap[size];

  const content = (
    <div className={cn(
      'flex items-center', s.gap,
      watermark && 'opacity-[0.06] select-none pointer-events-none',
      className
    )}>
      <div className={cn(
        s.iconBox,
        'rounded-xl bg-gradient-to-br from-[#00f2ff] to-[#7c3aed] flex items-center justify-center shrink-0',
        'shadow-[0_0_20px_rgba(0,242,255,0.3)]'
      )}>
        <TrendingUp className={cn(s.icon, 'text-white')} strokeWidth={2.5} />
      </div>
      {showText && (
        <span className={cn(s.text, 'font-bold tracking-wide')}>
          <span className="text-white">Econ</span>
          <span className="text-[#00f2ff] drop-shadow-[0_0_8px_rgba(0,242,255,0.8)]">Nexus</span>
        </span>
      )}
    </div>
  );

  if (linkHome && !watermark) {
    return <Link to="/" className="inline-flex group">{content}</Link>;
  }
  return content;
};

export default EconNexusLogo;
