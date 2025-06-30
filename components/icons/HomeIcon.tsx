function HomeIcon({ width, height }: { width: number; height: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 35.6666V19H22V35.6666M2 14L17 2.33331L32 14V32.3333C32 33.2174 31.6488 34.0652 31.0237 34.6903C30.3986 35.3155 29.5507 35.6666 28.6667 35.6666H5.33333C4.44928 35.6666 3.60143 35.3155 2.97631 34.6903C2.35119 34.0652 2 33.2174 2 32.3333V14Z"
        stroke="#111111"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default HomeIcon;
