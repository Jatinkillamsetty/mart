import React from "react";

export function CategoryGraphic({ id }: { id: string }) {
  switch (id) {
    case "All":
      return (
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="cat-graphic-svg">
          <rect width="200" height="140" rx="16" fill="#F0F4F9" />
          {/* Top bolt */}
          <rect x="30" y="25" width="140" height="10" rx="5" fill="#CBD5E1" />
          <circle cx="40" cy="30" r="3" fill="#94A3B8" />
          <circle cx="160" cy="30" r="3" fill="#94A3B8" />
          {/* Hinge */}
          <rect x="130" y="45" width="40" height="40" rx="4" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
          <rect x="130" y="45" width="20" height="40" rx="4" fill="#FDE047" stroke="#EAB308" strokeWidth="2" />
          <circle cx="140" cy="55" r="2.5" fill="#CA8A04" />
          <circle cx="140" cy="75" r="2.5" fill="#CA8A04" />
          <circle cx="160" cy="55" r="2.5" fill="#64748B" />
          <circle cx="160" cy="75" r="2.5" fill="#64748B" />
          {/* Handle */}
          <rect x="30" y="95" width="110" height="14" rx="7" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
          <rect x="35" y="90" width="10" height="24" rx="3" fill="#94A3B8" />
          <rect x="125" y="90" width="10" height="24" rx="3" fill="#94A3B8" />
        </svg>
      );
    case "hinges":
      return (
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="cat-graphic-svg">
          <rect width="200" height="140" rx="16" fill="#F0F4F9" />
          <g transform="translate(45, 20)">
            <rect x="0" y="0" width="50" height="100" rx="6" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
            <rect x="50" y="0" width="60" height="100" rx="6" fill="#FEF08A" stroke="#EAB308" strokeWidth="2" strokeDasharray="0 0" />
            <rect x="44" y="-4" width="12" height="108" rx="6" fill="#94A3B8" />
            <circle cx="20" cy="20" r="4" fill="#64748B" />
            <circle cx="20" cy="50" r="4" fill="#64748B" />
            <circle cx="20" cy="80" r="4" fill="#64748B" />
            <circle cx="85" cy="25" r="4" fill="#CA8A04" />
            <circle cx="85" cy="75" r="4" fill="#CA8A04" />
          </g>
        </svg>
      );
    case "tower-bolts":
      return (
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="cat-graphic-svg">
          <rect width="200" height="140" rx="16" fill="#F0F4F9" />
          <g transform="translate(25, 45)">
            <rect x="0" y="10" width="115" height="30" rx="6" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
            <rect x="125" y="10" width="25" height="30" rx="6" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
            <rect x="-10" y="18" width="150" height="14" rx="7" fill="#CBD5E1" stroke="#64748B" strokeWidth="2" />
            <circle cx="70" cy="25" r="8" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
            <circle cx="15" cy="25" r="3" fill="#64748B" />
            <circle cx="100" cy="25" r="3" fill="#64748B" />
            <circle cx="137" cy="25" r="3" fill="#64748B" />
          </g>
        </svg>
      );
    case "aldrops":
      return (
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="cat-graphic-svg">
          <rect width="200" height="140" rx="16" fill="#F0F4F9" />
          <g transform="translate(20, 40)">
            <rect x="0" y="20" width="160" height="12" rx="6" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
            <rect x="20" y="5" width="24" height="42" rx="4" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
            <rect x="116" y="5" width="24" height="42" rx="4" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
            <circle cx="80" cy="26" r="10" fill="#EAB308" stroke="#854D0E" strokeWidth="2" />
            <path d="M80 36 L80 55" stroke="#854D0E" strokeWidth="4" strokeLinecap="round" />
            <circle cx="80" cy="55" r="4" fill="#854D0E" />
          </g>
        </svg>
      );
    case "latches":
      return (
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="cat-graphic-svg">
          <rect width="200" height="140" rx="16" fill="#F0F4F9" />
          <g transform="translate(40, 35)">
            <rect x="0" y="0" width="80" height="70" rx="8" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
            <rect x="85" y="0" width="35" height="70" rx="8" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
            <rect x="40" y="25" width="60" height="20" rx="4" fill="#CBD5E1" stroke="#64748B" strokeWidth="2" />
            <rect x="15" y="22" width="20" height="26" rx="3" fill="#64748B" />
          </g>
        </svg>
      );
    case "handles":
      return (
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="cat-graphic-svg">
          <rect width="200" height="140" rx="16" fill="#F0F4F9" />
          <g transform="translate(45, 30)">
            <circle cx="45" cy="40" r="32" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
            <path d="M45 40 Q80 20 120 40 Q80 50 45 40 Z" fill="#CBD5E1" stroke="#64748B" strokeWidth="2" />
            <circle cx="45" cy="40" r="10" fill="#0F2942" />
            <rect x="42" y="40" width="6" height="14" fill="#0F2942" />
          </g>
        </svg>
      );
    case "coat-hooks":
      return (
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="cat-graphic-svg">
          <rect width="200" height="140" rx="16" fill="#F0F4F9" />
          <g transform="translate(60, 25)">
            <rect x="25" y="10" width="30" height="70" rx="8" fill="#CBD5E1" stroke="#64748B" strokeWidth="2" />
            <path d="M40 70 Q0 50 10 30" stroke="#0F2942" strokeWidth="8" strokeLinecap="round" fill="none" />
            <path d="M40 80 Q90 60 75 35" stroke="#0F2942" strokeWidth="8" strokeLinecap="round" fill="none" />
            <circle cx="40" cy="30" r="3" fill="#64748B" />
            <circle cx="40" cy="60" r="3" fill="#64748B" />
          </g>
        </svg>
      );
    case "baby-latches":
      return (
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="cat-graphic-svg">
          <rect width="200" height="140" rx="16" fill="#F0F4F9" />
          <g transform="translate(30, 45)">
            <rect x="0" y="0" width="140" height="50" rx="25" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="2" />
            <circle cx="25" cy="25" r="12" fill="#0284C7" />
            <rect x="85" y="15" width="40" height="20" rx="10" stroke="#0284C7" strokeWidth="4" fill="#FFFFFF" />
          </g>
        </svg>
      );
    case "door-stoppers":
      return (
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="cat-graphic-svg">
          <rect width="200" height="140" rx="16" fill="#F0F4F9" />
          <g transform="translate(50, 35)">
            <path d="M10 70 C10 30 90 30 90 70 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
            <rect x="5" y="65" width="90" height="10" rx="3" fill="#64748B" />
            <rect x="75" y="20" width="16" height="50" rx="8" fill="#0F2942" />
          </g>
        </svg>
      );
    case "deluxe-window-stays":
      return (
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="cat-graphic-svg">
          <rect width="200" height="140" rx="16" fill="#F0F4F9" />
          <g transform="translate(30, 40)">
            <rect x="0" y="20" width="140" height="16" rx="8" fill="#CBD5E1" stroke="#64748B" strokeWidth="2" />
            <circle cx="20" cy="28" r="3" fill="#0F2942" />
            <circle cx="45" cy="28" r="3" fill="#0F2942" />
            <circle cx="70" cy="28" r="3" fill="#0F2942" />
            <circle cx="95" cy="28" r="3" fill="#0F2942" />
            <circle cx="120" cy="28" r="3" fill="#0F2942" />
            <circle cx="135" cy="40" r="7" fill="#EF4444" stroke="#B91C1C" strokeWidth="2" />
          </g>
        </svg>
      );
    case "wardrobe-handles-knobs":
      return (
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="cat-graphic-svg">
          <rect width="200" height="140" rx="16" fill="#F0F4F9" />
          <g transform="translate(35, 30)">
            <rect x="10" y="10" width="110" height="12" rx="6" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
            <rect x="10" y="40" width="110" height="12" rx="6" fill="#CBD5E1" stroke="#64748B" strokeWidth="2" />
            <circle cx="140" cy="16" r="14" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
            <circle cx="140" cy="46" r="14" fill="#0F2942" />
          </g>
        </svg>
      );
    case "box-hinges":
      return (
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="cat-graphic-svg">
          <rect width="200" height="140" rx="16" fill="#F0F4F9" />
          <g transform="translate(40, 30)">
            <path d="M10 20 L50 20 L70 50 L110 50 L110 70 L70 70 L50 40 L10 40 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
            <circle cx="20" cy="30" r="4" fill="#854D0E" />
            <circle cx="100" cy="60" r="4" fill="#854D0E" />
            <rect x="45" y="25" width="20" height="20" rx="4" fill="#CBD5E1" stroke="#64748B" strokeWidth="2" />
          </g>
        </svg>
      );
    case "telescope-channels":
      return (
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="cat-graphic-svg">
          <rect width="200" height="140" rx="16" fill="#F0F4F9" />
          <g transform="translate(20, 45)">
            <rect x="0" y="0" width="160" height="16" rx="4" fill="#CBD5E1" stroke="#64748B" strokeWidth="2" />
            <rect x="20" y="16" width="140" height="14" rx="4" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
            <circle cx="30" cy="8" r="2.5" fill="#0F2942" />
            <circle cx="60" cy="8" r="2.5" fill="#0F2942" />
            <circle cx="90" cy="8" r="2.5" fill="#0F2942" />
            <circle cx="120" cy="8" r="2.5" fill="#0F2942" />
            <circle cx="150" cy="8" r="2.5" fill="#0F2942" />
          </g>
        </svg>
      );
    case "plywood":
      return (
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="cat-graphic-svg">
          <rect width="200" height="140" rx="16" fill="#FEF3C7" />
          <g transform="translate(30, 30)">
            <rect x="0" y="0" width="140" height="80" rx="6" fill="#D97706" stroke="#92400E" strokeWidth="2" />
            <line x1="0" y1="20" x2="140" y2="20" stroke="#F59E0B" strokeWidth="2" />
            <line x1="0" y1="40" x2="140" y2="40" stroke="#F59E0B" strokeWidth="2" />
            <line x1="0" y1="60" x2="140" y2="60" stroke="#F59E0B" strokeWidth="2" />
            <path d="M20 10 Q 70 25 120 10" stroke="#B45309" strokeWidth="1.5" fill="none" />
            <path d="M10 50 Q 70 65 130 50" stroke="#B45309" strokeWidth="1.5" fill="none" />
          </g>
        </svg>
      );
    case "block-board":
      return (
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="cat-graphic-svg">
          <rect width="200" height="140" rx="16" fill="#FDF6B2" />
          <g transform="translate(25, 35)">
            <rect x="0" y="0" width="150" height="70" rx="4" fill="#B45309" stroke="#78350F" strokeWidth="2" />
            <rect x="10" y="10" width="25" height="50" fill="#D97706" rx="2" />
            <rect x="40" y="10" width="25" height="50" fill="#F59E0B" rx="2" />
            <rect x="70" y="10" width="25" height="50" fill="#D97706" rx="2" />
            <rect x="100" y="10" width="25" height="50" fill="#F59E0B" rx="2" />
          </g>
        </svg>
      );
    case "mdp-boards":
      return (
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="cat-graphic-svg">
          <rect width="200" height="140" rx="16" fill="#F3E8FF" />
          <g transform="translate(30, 30)">
            <rect x="0" y="0" width="140" height="80" rx="8" fill="#7E22CE" stroke="#581C87" strokeWidth="2" />
            <rect x="15" y="15" width="110" height="50" rx="4" fill="#A855F7" opacity="0.6" />
            <circle cx="70" cy="40" r="15" fill="#E9D5FF" opacity="0.8" />
          </g>
        </svg>
      );
    case "doors":
      return (
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="cat-graphic-svg">
          <rect width="200" height="140" rx="16" fill="#E0F2FE" />
          <g transform="translate(60, 20)">
            <rect x="0" y="0" width="80" height="100" rx="6" fill="#0284C7" stroke="#0369A1" strokeWidth="2" />
            <rect x="10" y="10" width="28" height="38" rx="3" fill="#38BDF8" opacity="0.6" />
            <rect x="42" y="10" width="28" height="38" rx="3" fill="#38BDF8" opacity="0.6" />
            <rect x="10" y="54" width="28" height="38" rx="3" fill="#38BDF8" opacity="0.6" />
            <rect x="42" y="54" width="28" height="38" rx="3" fill="#38BDF8" opacity="0.6" />
            <circle cx="68" cy="50" r="4" fill="#FACC15" />
          </g>
        </svg>
      );
    case "flexible-plywood":
      return (
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="cat-graphic-svg">
          <rect width="200" height="140" rx="16" fill="#DCFCE7" />
          <g transform="translate(30, 25)">
            <path d="M10 70 Q 70 0 130 70" stroke="#16A34A" strokeWidth="12" fill="none" strokeLinecap="round" />
            <path d="M10 85 Q 70 15 130 85" stroke="#22C55E" strokeWidth="8" fill="none" strokeLinecap="round" />
          </g>
        </svg>
      );
    case "nfc-boards":
      return (
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="cat-graphic-svg">
          <rect width="200" height="140" rx="16" fill="#EFF6FF" />
          <g transform="translate(45, 25)">
            <rect x="0" y="0" width="110" height="90" rx="8" fill="#1D4ED8" stroke="#1E40AF" strokeWidth="2" />
            <path d="M55 20 L80 45 L55 70 L30 45 Z" fill="#60A5FA" />
            <circle cx="55" cy="45" r="10" fill="#DBEAFE" />
          </g>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="cat-graphic-svg">
          <rect width="200" height="140" rx="16" fill="#F0F4F9" />
          <circle cx="100" cy="70" r="30" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
        </svg>
      );
  }
}
