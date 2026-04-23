import { useNavigate, useLocation } from "react-router";
import { ArrowRight } from "lucide-react";

interface BookNowButtonProps {
  variant?: "primary" | "outline";
  className?: string;
}

export function BookNowButton({ variant = "primary", className = "" }: BookNowButtonProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === "/contact") {
      // Already on contact page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to contact page
      navigate("/contact");
    }
  };

  const baseStyles = "px-8 py-4 text-base font-semibold tracking-wide transition-all hover:scale-105 flex items-center group";
  const variantStyles = variant === "primary"
    ? "bg-white text-black hover:bg-gray-200"
    : "border-2 border-white text-white hover:bg-white hover:text-black";

  return (
    <button onClick={handleClick} className={`${baseStyles} ${variantStyles} ${className}`}>
      BOOK NOW
      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </button>
  );
}
