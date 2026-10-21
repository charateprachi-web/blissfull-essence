
import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import BridalFeature from "@/components/home/BridalFeature";
import Transformation from "@/components/home/Transformation";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import Experience from "@/components/home/Experience";
import Testimonials from "@/components/home/Testimonials";
import InstagramSection from "@/components/home/InstagramSection";
import BookingCTA from "@/components/home/BookingCTA";

export const metadata = {
  title: "Bridal Makeup Artist in Latur",
  description:
    "Premium bridal makeup, professional makeup, hairstyling and beauty services by Blissful Makeup Studio in Latur, Maharashtra.",
};

export default function HomePage() {
  const phoneNumber = "918830266595";
  const locationUrl =
    "https://www.google.com/maps/search/?api=1&query=Blissful+Makeup+Studio+Latur";

  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutPreview />
      <ServicesPreview />
      <BridalFeature />
      <Transformation />
      <PortfolioPreview />
      <Experience />
      <Testimonials />
      <InstagramSection />
      <BookingCTA />

      {/* Floating Contact Icons */}
      <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-2.5">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#B98291] text-white shadow-md transition-all duration-300 hover:scale-110 hover:bg-[#A56B7B]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.83 11.83 0 0 0 12.1 0C5.55 0 .21 5.34.21 11.9c0 2.1.55 4.16 1.59 5.97L.1 24l6.28-1.65a11.9 11.9 0 0 0 5.7 1.45h.01C18.65 23.8 24 18.46 24 11.9a11.83 11.83 0 0 0-3.48-8.42ZM12.1 21.8a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.73.98.99-3.64-.24-.38a9.86 9.86 0 0 1-1.51-5.26c0-5.46 4.44-9.9 9.91-9.9a9.84 9.84 0 0 1 7.01 2.9 9.84 9.84 0 0 1 2.9 7.01c0 5.46-4.45 9.89-9.92 9.89Zm5.43-7.41c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.38-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.3 1.26.48 1.69.61.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
          </svg>
        </a>

        {/* Call */}
        <a
          href={`tel:+${phoneNumber}`}
          aria-label="Call now"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#96758E] text-white shadow-md transition-all duration-300 hover:scale-110 hover:bg-[#795A72]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-[18px] w-[18px]"
            aria-hidden="true"
          >
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.56 3.57.56.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.19 2.45.56 3.57a1 1 0 0 1-.25 1.02l-2.19 2.2Z" />
          </svg>
        </a>

        {/* Location */}
        <a
          href={locationUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Find our location on Google Maps"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C5A78B] text-white shadow-md transition-all duration-300 hover:scale-110 hover:bg-[#A88A6F]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-[18px] w-[18px]"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
            />
          </svg>
        </a>
      </div>
    </>
  );
}
