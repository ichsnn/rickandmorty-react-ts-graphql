import { twMerge } from "tailwind-merge";

interface ChipButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export default function ChipButton({
  children,
  isActive,
  onClick,
}: ChipButtonProps) {
  return (
    <button
      className={twMerge(
        "py-2 px-4 rounded-full font-medium bg-white border hover:bg-slate-500 hover:text-white border-slate-500 cursor-pointer shadow-[6px_6px_0px_0px_#000000]",
        isActive && "bg-slate-500 text-white"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
