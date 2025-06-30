function ClockIcon({width, height}: {width: number; height: number}) {
  return (
    <svg width={width} height={height} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.49999 4.24996V8.49996L11.3333 9.91663M15.5833 8.49996C15.5833 12.412 12.412 15.5833 8.49999 15.5833C4.58797 15.5833 1.41666 12.412 1.41666 8.49996C1.41666 4.58794 4.58797 1.41663 8.49999 1.41663C12.412 1.41663 15.5833 4.58794 15.5833 8.49996Z"
        stroke="#FF6900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default ClockIcon;