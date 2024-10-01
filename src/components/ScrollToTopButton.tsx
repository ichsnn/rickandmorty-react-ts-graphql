import { Icon } from "@iconify/react";

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="fixed bg-slate-700 text-white p-4 rounded-full shadow-lg bottom-8 right-8 z-50"
      onClick={scrollToTop}
    >
      <Icon className="text-2xl" icon="pajamas:scroll-up" />
    </button>
  );
}
