import React from 'react';
import carmensLogoTransparent from '../assets/images/carmens_logo_transparent.png';
import carmensLogoContour from '../assets/images/carmens_logo_contour.png';

export interface CarmensLogoProps {
  className?: string;
  variant?: 'full' | 'horizontal' | 'symbol' | 'compact' | 'hero-badge';
  theme?: 'duotone' | 'light' | 'monochrome-gold';
  withWhiteContour?: boolean;
}

export const CarmensLogo: React.FC<CarmensLogoProps> = ({
  className = 'w-auto',
  variant = 'horizontal',
  theme = 'light',
  withWhiteContour = true,
}) => {
  const textNavy = theme === 'light' ? '#FFFFFF' : '#0a1635';
  const textGold = '#e9b949';
  const logoSrc = withWhiteContour ? carmensLogoContour : carmensLogoTransparent;

  // 1. Horizontal Lockup (Header, Footer, Navbars)
  if (variant === 'horizontal') {
    return (
      <div
        className={`flex items-center gap-3.5 sm:gap-4 ${className}`}
        id="carmens-horizontal-logo"
      >
        <div className="relative flex-shrink-0 w-12 h-12 sm:w-15 sm:h-15 md:w-16 md:h-16 flex items-center justify-center">
          <img
            src={logoSrc}
            alt="Logo Carmen's Transportes"
            className="w-full h-full object-contain filter drop-shadow-[0_3px_10px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex flex-col justify-center select-none">
          <span
            className="text-xl sm:text-2xl md:text-[26px] font-extrabold tracking-tight leading-none"
            style={{
              color: textNavy,
              fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif",
            }}
          >
            CARMEN'S
          </span>
          <span
            className="text-[9.5px] sm:text-[11px] md:text-xs font-bold uppercase tracking-[0.36em] mt-1.5 leading-none"
            style={{ color: theme === 'light' ? textGold : '#0a1635' }}
          >
            TRANSPORTES
          </span>
        </div>
      </div>
    );
  }

  // 2. Full Lockup (Centered / Splash / Modals)
  if (variant === 'full') {
    return (
      <div
        className={`flex flex-col items-center justify-center p-3 ${className}`}
        id="carmens-full-logo"
      >
        <div className="w-32 sm:w-44 md:w-52 aspect-square flex items-center justify-center">
          <img
            src={logoSrc}
            alt="Logo Oficial Carmen's Transportes"
            className="w-full h-full object-contain filter drop-shadow-[0_6px_20px_rgba(0,0,0,0.4)]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="mt-4 flex flex-col items-center text-center select-none">
          <span
            className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-none"
            style={{
              color: textNavy,
              fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif",
            }}
          >
            CARMEN'S
          </span>
          <span
            className="text-xs sm:text-sm font-bold uppercase tracking-[0.38em] mt-2"
            style={{
              color: theme === 'light' ? textGold : '#0a1635',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            TRANSPORTES
          </span>
        </div>
      </div>
    );
  }

  // 3. Hero Badge (Prominent in Hero section)
  if (variant === 'hero-badge') {
    return (
      <div className={`flex items-center gap-4 sm:gap-5 ${className}`} id="carmens-hero-badge">
        <div className="w-18 h-18 sm:w-22 sm:h-22 flex-shrink-0 flex items-center justify-center">
          <img
            src={logoSrc}
            alt="Emblema Oficial Carmen's Transportes"
            className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a1635]/90 border border-[#e9b949]/40 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#e9b949] w-fit mb-1.5 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Logística Rodoviária & Cargas Pesadas</span>
          </div>
          <span
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-none"
            style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}
          >
            CARMEN'S TRANSPORTES
          </span>
        </div>
      </div>
    );
  }

  // 4. Compact Minimal Lockup
  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`} id="carmens-compact-logo">
        <div className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center">
          <img
            src={logoSrc}
            alt="Carmen's Transportes"
            className="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
            referrerPolicy="no-referrer"
          />
        </div>
        <span
          className="text-lg sm:text-xl font-black tracking-tight"
          style={{ color: textNavy }}
        >
          CARMEN'S
        </span>
      </div>
    );
  }

  // 5. Symbol Only
  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      id="carmens-symbol-logo"
    >
      <img
        src={logoSrc}
        alt="Símbolo Carmen's Transportes"
        className="w-14 h-14 sm:w-16 sm:h-16 object-contain filter drop-shadow-[0_3px_10px_rgba(0,0,0,0.35)]"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default CarmensLogo;
