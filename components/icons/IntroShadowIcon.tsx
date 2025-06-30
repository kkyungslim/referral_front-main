function IntroShadowIcon({width, height, className = ""} : {width: number, height: number | string, className: string}) {
  return (
    <svg width={width} height={height} className={`h-auto ${className}`} viewBox="0 0 138 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="69" cy="13.5" rx="69" ry="13.5" fill="black" fillOpacity="0.3" />
    </svg>

  )
}

export default IntroShadowIcon;