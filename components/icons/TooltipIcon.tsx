function TooltipIcon({width, height}: {width: number, height: number}) {
  return (
    <svg width={width} height={height} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.5002 15.6666V11.4999M11.5002 7.33325H11.5106M21.9168 11.4999C21.9168 17.2529 17.2531 21.9166 11.5002 21.9166C5.7472 21.9166 1.0835 17.2529 1.0835 11.4999C1.0835 5.74695 5.7472 1.08325 11.5002 1.08325C17.2531 1.08325 21.9168 5.74695 21.9168 11.4999Z"
        stroke="#767676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export default TooltipIcon;