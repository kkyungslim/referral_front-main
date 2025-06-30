function DeepCoinBoxIcon({ width, height }: { width: number; height: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="50" height="50" rx="5" fill="#111111" />
      <path
        d="M24.4517 25.9552V38.889H10V25.9552H24.4517ZM40.35 25.9552C40.35 33.0272 34.0084 38.7731 26.137 38.8874L25.8983 38.889V25.9552H40.35ZM24.4517 11.7285V24.6607H10V11.7285H24.4517ZM25.8983 11.7285C33.8012 11.7285 40.2205 17.4033 40.35 24.4471L40.3518 24.6607H25.9002V11.7285H25.8983Z"
        fill="#FE7701"
      />
    </svg>
  );
}

export default DeepCoinBoxIcon;
