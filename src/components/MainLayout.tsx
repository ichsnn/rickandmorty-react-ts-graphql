import mortyImage from "../assets/morty.png";
import rickImage from "../assets/rick.png";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative z-10">
      <main className="max-w-4xl mx-auto py-5 px-10 z-50">{children}</main>
      <img
        src={mortyImage}
        alt="morty"
        className="hidden md:block fixed bottom-0 right-0 -z-10 -scale-x-100 h-1/2"
      />
      <img
        src={rickImage}
        alt="rick"
        className="hidden md:block fixed top-0 left-0 -z-10 h-1/2"
      />
    </div>
  );
}
