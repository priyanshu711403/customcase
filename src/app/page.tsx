import HeroSection from "@/components/HeroSection";
import ReviewSection from "@/components/ReviewSection";
import DemoSection from "@/components/DemoSection";

export default function Home() {
   return (
      <div>
         <HeroSection />

         {/* value proposition section */}
         <ReviewSection />

         <DemoSection />
      </div>
   );
}
