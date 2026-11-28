import React from 'react';
import { ArrowRight, Users, Sparkles, ShieldCheck } from 'lucide-react';
import { useRouter } from '../router';

export const TeamBehindWorkSection: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 max-w-[1440px] mx-auto select-none">
      <div className="bg-[#ffffff] border border-[#c4c7c7]/80 rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden shadow-sm hover:border-[#b9e86a] transition-all duration-300">
        {/* Subtle engineering grid background */}
        <div className="tech-grid absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
          {/* Left Column: Heading, Subtitle & Value Proposition */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 border border-[#c4c7c7] px-3 py-1 rounded-full bg-[#f9faf7] mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#476800] animate-pulse" />
              <span className="font-mono-tech text-[10px] sm:text-xs text-[#476800] uppercase font-bold tracking-wider">
                # LEADERSHIP &amp; ENGINEERING
              </span>
            </div>

            <h2 className="font-display-tech text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#000000] tracking-tight mb-3">
              THE TEAM BEHIND <span className="text-[#476800]">OUR WORK.</span>
            </h2>

            <p className="font-display-tech text-sm sm:text-base text-[#444748] leading-relaxed mb-6">
              We don&apos;t outsource your technology. Our founding team of specialized embedded developers, CAD designers, and robotics engineers builds and verifies every prototype in-house.
            </p>

            {/* In-House Quality & Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-[#c4c7c7]/40 font-mono-tech text-xs text-[#191c1b]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#476800]" />
                <span className="font-semibold">In-House Verification</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#476800]" />
                <span className="font-semibold">Hardware + Firmware Native</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, High-Tech Meet Our Team Action Card (No Photos) */}
          <div className="w-full lg:max-w-md shrink-0 flex flex-col justify-center">
            <div 
              onClick={() => navigate('/about')}
              className="bg-[#f9faf7] border border-[#c4c7c7]/80 rounded-2xl p-6 sm:p-8 hover:border-black hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col items-start gap-4 relative overflow-hidden"
            >
              {/* Subtle accent corner glow */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#c8f179]/20 rounded-full blur-2xl pointer-events-none group-hover:bg-[#c8f179]/30 transition-all duration-300" />

              <div className="flex items-center gap-3.5 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-[#c8f179] shadow-sm group-hover:scale-105 transition-transform duration-300">
                  <Users className="w-6 h-6 text-[#c8f179]" />
                </div>
                <div>
                  <div className="font-mono-tech text-[10px] text-[#476800] uppercase font-bold tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#476800]" />
                    <span>LEADERSHIP DIRECTORY</span>
                  </div>
                  <h3 className="font-display-tech text-base sm:text-lg font-bold text-black tracking-tight group-hover:text-[#476800] transition-colors">
                    Meet The Engineers
                  </h3>
                </div>
              </div>

              <p className="font-display-tech text-xs sm:text-sm text-[#444748] leading-relaxed relative z-10">
                Discover the founders, embedded firmware developers, and robotics architects behind every Zen Tech deployment.
              </p>

              {/* Prominent Meet Our Team CTA Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/about');
                }}
                id="home-meet-team-cta-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#000000] text-[#c8f179] hover:bg-[#191c1b] font-mono-tech font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md group-hover:shadow-[0_0_24px_rgba(200,241,121,0.35)] cursor-pointer mt-1 relative z-10"
                title="Navigate to About Us page to meet our full team"
              >
                <Users className="w-4 h-4 text-[#c8f179]" />
                <span>MEET OUR TEAM</span>
                <ArrowRight className="w-4 h-4 text-[#c8f179] group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
