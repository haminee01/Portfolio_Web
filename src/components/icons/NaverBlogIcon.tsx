import { LucideProps } from "lucide-react";

const NaverBlogIcon = ({ className, ...props }: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    {/* 네이버 블로그 로고: 녹색 말풍선 + 흰색 B */}
    <path
      d="M19 4H5c-1.1 0-2 .9-2 2v10c0 1.1 .9 2 2 2h3l3 3 3-3h5c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"
      fill="#03C75A"
    />
    <text
      x="12"
      y="16"
      textAnchor="middle"
      fill="white"
      fontSize="10"
      fontWeight="bold"
      fontFamily="Arial, sans-serif"
    >
      B
    </text>
  </svg>
);

export default NaverBlogIcon;
