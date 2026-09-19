import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

export function NavDropdownArrow({ className, size = 12, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 8"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M8 7.27392C7.93442 7.27472 7.86941 7.26178 7.80913 7.23595C7.74885 7.21012 7.69465 7.17195 7.65 7.12392L3.15 2.62392C2.95 2.42392 2.95 2.11392 3.15 1.91392C3.35 1.71392 3.66 1.71392 3.86 1.91392L8.01 6.06392L12.15 1.92392C12.35 1.72392 12.66 1.72392 12.86 1.92392C13.06 2.12392 13.06 2.43392 12.86 2.63392L8.36 7.13392C8.26 7.23392 8.13 7.28392 8.01 7.28392L8 7.27392Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HeroArrow({ className, size = 20, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 46 46"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M15.4333 30.5231L30.1418 15.8145M21.2375 15.5854L30.5182 15.4382L30.3709 24.7189"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ServiceArrow({ className, size = 18, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M11.5767 22.8911L22.6081 11.8597M15.9299 11.6878L22.8904 11.5774L22.7799 18.538"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarIcon({ className, filled = true, size = 22, ...props }: IconProps & { filled?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ color: filled ? "#ffc54f" : "#cdd5df" }}
      {...props}
    >
      <path
        d="M25.731 9.94368H16.048L13.0673 0.736938L10.0689 9.94368L0.385986 9.92604L8.217 15.6229L5.21864 24.8297L13.0497 19.1328L20.8807 24.8297L17.9 15.6229L25.731 9.94368Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SliderArrowLeft({ className, size = 20, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M20.333 10H4.33301"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.66699 2L1.66699 10L9.66699 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SliderArrowRight({ className, size = 20, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M1.66651 9L19.2568 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.333 1L20.333 9L12.333 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FaqIcon({ className, isOpen = false, size = 16, ...props }: IconProps & { isOpen?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""} ${className || ""}`}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0046 1.65307H1.85156V1H17.0046V1.65307Z"
        fill="currentColor"
        stroke="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.9986 1.32632L16.9986 17L16.3672 17L16.3672 1.32632L16.9986 1.32632Z"
        fill="currentColor"
        stroke="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5849 1.8905L1.43182 16.5846L1 16.1081L16.153 1.41406L16.5849 1.8905Z"
        fill="currentColor"
        stroke="currentColor"
      />
    </svg>
  );
}

export function FacebookIcon({ className, size = 16, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 0H2C0.897 0 0 0.897 0 2V14C0 15.103 0.897 16 2 16H8V10.5H6V8H8V6C8 5.20435 8.31607 4.44129 8.87868 3.87868C9.44129 3.31607 10.2044 3 11 3H13V5.5H12C11.448 5.5 11 5.448 11 6V8H13.5L12.5 10.5H11V16H14C15.103 16 16 15.103 16 14V2C16 0.897 15.103 0 14 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TwitterIcon({ className, size = 18, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M19.5 1.86044C18.8452 2.30784 18.0764 2.5454 17.2907 2.54315C18.1308 2.03341 18.7597 1.22354 19.0581 0.267437C18.3618 0.873808 17.4843 1.21527 16.5727 1.23462C15.9716 0.600508 15.1871 0.18429 14.3369 0.0484272C13.4867 -0.0874361 12.6167 0.0643832 11.8574 0.481101C11.098 0.897819 10.4904 1.55696 10.1256 2.3596C9.76086 3.16224 9.65864 4.06509 9.8343 4.93265C8.28743 4.84853 6.77502 4.43024 5.39528 3.70493C4.01554 2.97962 2.79932 1.96351 1.82558 0.722581C1.34909 1.6107 1.20958 2.64938 1.43407 3.6374C1.65856 4.62542 2.23108 5.49244 3.0407 6.07051C2.42967 6.07941 1.82487 5.94313 1.27326 5.67226C1.28811 6.58871 1.60093 7.47355 2.16167 8.18523C2.72241 8.89691 3.49867 9.39432 4.36628 9.59787C3.78874 9.75323 3.18466 9.77267 2.59884 9.65477C2.85155 10.4666 3.34391 11.1771 4.00726 11.687C4.67062 12.1969 5.4719 12.4809 6.29942 12.4994C4.55172 13.5915 2.5441 14.1627 0.5 14.1493C2.21195 15.3005 4.20048 15.9398 6.24424 15.996C8.28799 16.0521 10.3068 15.5229 12.0759 14.4673C13.8449 13.4117 15.2949 11.871 16.2644 10.0169C17.2338 8.16279 17.6847 6.06791 17.5669 3.96548C18.2957 3.35152 18.9453 2.64411 19.5 1.86044Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function YoutubeIcon({ className, size = 18, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M21.45 2.42857C21.175 1.42857 20.4875 0.714286 19.525 0.428572C17.875 2.55448e-07 10.8625 0 10.8625 0C10.8625 0 3.98751 2.55448e-07 2.20001 0.428572C1.23751 0.714286 0.549996 1.42857 0.274996 2.42857C-4.20026e-06 4.28572 0 8 0 8C0 8 4.17978e-06 11.7143 0.412504 13.5714C0.687504 14.5714 1.375 15.2857 2.3375 15.5714C3.9875 16 11 16 11 16C11 16 17.875 16 19.6625 15.5714C20.625 15.2857 21.3125 14.5714 21.5875 13.5714C22 11.7143 22 8 22 8C22 8 22 4.28572 21.45 2.42857ZM8.79999 11.4286V4.57143L14.575 8L8.79999 11.4286Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ScrollToTopArrow({ className, size = 14, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 11 10"
      fill="none"
      className={className}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.79144 1.08337L10.6081 4.90006C10.8423 5.13427 10.8423 5.514 10.6081 5.74821L6.79144 9.5649C6.55723 9.79911 6.1775 9.79911 5.94329 9.5649C5.70908 9.33069 5.70908 8.95096 5.94329 8.71674L8.73616 5.92387L0.571655 5.92387L0.571655 4.7244H8.73616L5.94329 1.93153C5.70908 1.69731 5.70908 1.31758 5.94329 1.08337C6.1775 0.849162 6.55723 0.849162 6.79144 1.08337Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CheckmarkIcon({ className, size = 18, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="10" cy="10" r="10" fill="#0e63f3" />
      <path
        d="M6 10.5L8.5 13L14 7.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
