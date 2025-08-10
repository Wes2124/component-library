import React from "react";

interface DotsGridBackgroundProps {
  className?: string;
  dotSize?: number;
  dotColor?: string;
  spacing?: number;
}

export const DotsGridBackground: React.FC<DotsGridBackgroundProps> = ({
  className = "",
  dotSize = 0.5,
  dotColor = "#e5e7eb",
  spacing = 16,
}) => {
  const patternId = `dots-pattern-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.4 }}
      >
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width={spacing}
            height={spacing}
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx={spacing / 2}
              cy={spacing / 2}
              r={dotSize}
              fill={dotColor}
              fillOpacity="0.8"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
};
