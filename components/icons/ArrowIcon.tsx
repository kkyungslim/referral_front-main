function ArrowIcon({ width, height }: { width: number; height: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.75 2.5L15.25 15L2.75 27.5"
        stroke="#767676"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowIcon;
