function ShadowIcon({width, height = "auto", color = "dbdbdb"} : {width: number | string, height: number | string, color?: string}) {
  return (
    <svg
      width={width}
      height={height}
      className="h-auto"
      viewBox="0 0 260 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="130" cy="10" rx="130" ry="10" fill={`#${color}`} />
    </svg>
  );
}

export default ShadowIcon;