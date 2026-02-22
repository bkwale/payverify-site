export function LogoIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* QR code pattern */}
      {/* Top-left block */}
      <rect x="2" y="2" width="14" height="14" rx="2" fill="currentColor" />
      <rect x="5" y="5" width="8" height="8" rx="1" fill="white" />
      <rect x="7" y="7" width="4" height="4" rx="0.5" fill="currentColor" />

      {/* Top-right block */}
      <rect x="32" y="2" width="14" height="14" rx="2" fill="currentColor" />
      <rect x="35" y="5" width="8" height="8" rx="1" fill="white" />
      <rect x="37" y="7" width="4" height="4" rx="0.5" fill="currentColor" />

      {/* Bottom-left block */}
      <rect x="2" y="32" width="14" height="14" rx="2" fill="currentColor" />
      <rect x="5" y="35" width="8" height="8" rx="1" fill="white" />
      <rect x="7" y="37" width="4" height="4" rx="0.5" fill="currentColor" />

      {/* Center cross pattern */}
      <rect x="19" y="2" width="4" height="4" rx="1" fill="currentColor" />
      <rect x="19" y="10" width="4" height="4" rx="1" fill="currentColor" />
      <rect x="2" y="19" width="4" height="4" rx="1" fill="currentColor" />
      <rect x="10" y="19" width="4" height="4" rx="1" fill="currentColor" />
      <rect x="19" y="19" width="4" height="4" rx="1" fill="currentColor" />

      {/* Checkmark */}
      <path
        d="M22 32L28 38L42 24"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <LogoIcon className="w-9 h-9 text-primary" />
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tight text-gray-900">
          Pay<span className="text-primary">Verify</span>
        </span>
      </div>
    </div>
  );
}
