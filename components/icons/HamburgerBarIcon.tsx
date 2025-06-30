function HamburgerBarIcon({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="59" height="59" rx="9.5" stroke="#FF6900" />
      <path
        d="M17.375 30.5H43.625M17.375 21.75H43.625M17.375 39.25H43.625"
        stroke="#FF6900"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default HamburgerBarIcon;
