import Image from "next/image";
import Hero from "./sections/Hero";
import AboutSection from "./sections/About";
import Services from "./sections/Services";
import WorksSection from "./sections/Works";
import FAQSection from "./sections/FAQs";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mb-48">
        <AboutSection />
      </div>
      <div className="mt-32 md:-mt-48">
        <Services />
      </div>
      <div className="-mt-24">
        <WorksSection />
      </div>
      <div className="-mt-12">
        <FAQSection />
      </div>
    </div>
  );
}
