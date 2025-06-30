import React from 'react';

type CircularProgressProps = {
  size?: number; // Diameter in px
  strokeWidth?: number;
  color?: string;
};

const CircularProgress: React.FC<CircularProgressProps> = ({
  size = 40,
  strokeWidth = 4,
  color = '#ff964d',
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="circular-loader"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference * 0.25}
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from={`0 ${size / 2} ${size / 2}`}
          to={`360 ${size / 2} ${size / 2}`}
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export default CircularProgress;
