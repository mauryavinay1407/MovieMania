const Logo = ({ size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Film Strip */}
      <rect x="8" y="12" width="48" height="40" rx="6" fill="#FACC15" />
      <rect x="12" y="16" width="8" height="8" fill="#0F172A" />
      <rect x="24" y="16" width="8" height="8" fill="#0F172A" />
      <rect x="36" y="16" width="8" height="8" fill="#0F172A" />
      <rect x="48" y="16" width="4" height="8" fill="#0F172A" />

      <rect x="12" y="40" width="8" height="8" fill="#0F172A" />
      <rect x="24" y="40" width="8" height="8" fill="#0F172A" />
      <rect x="36" y="40" width="8" height="8" fill="#0F172A" />
      <rect x="48" y="40" width="4" height="8" fill="#0F172A" />

      {/* Play Icon (Center) */}
      <polygon points="28,24 44,32 28,40" fill="#0F172A" />
    </svg>
  );
};

export default Logo;
