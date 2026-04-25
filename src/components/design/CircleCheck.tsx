const CircleCheck = ({ color="", size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
   <circle cx="11" cy="11" r="11" className={`${color}`} />
      <path d="M8 11.5L10.5 14L14 8" className="stroke-black dark:stroke-white" />
  </svg>
)

export default CircleCheck
