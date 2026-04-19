export default function BarberToolsSVG() {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      stroke="#d4d4d4"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-full max-w-md opacity-30"
    >
      {/* Scissors */}
      <ellipse cx="120" cy="110" rx="22" ry="40" transform="rotate(-20 120 110)" />
      <ellipse cx="155" cy="105" rx="22" ry="40" transform="rotate(20 155 105)" />
      <circle cx="137" cy="130" r="5" />

      {/* Straight razor */}
      <rect x="220" y="60" width="12" height="80" rx="3" transform="rotate(15 226 100)" />
      <rect x="218" y="140" width="16" height="50" rx="2" transform="rotate(15 226 165)" />

      {/* Comb */}
      <rect x="300" y="80" width="8" height="120" rx="2" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
        <line key={i} x1="308" y1={88 + i * 9} x2="328" y2={88 + i * 9} />
      ))}

      {/* Clipper outline */}
      <rect x="50" y="170" width="30" height="70" rx="6" />
      <rect x="52" y="240" width="26" height="30" rx="2" />
      <line x1="52" y1="240" x2="78" y2="240" />
    </svg>
  );
}