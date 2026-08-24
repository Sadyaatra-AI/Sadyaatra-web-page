import Image from "next/image";

import Hero from "./components/Hero";
import Features from "./components/Features";
import ExploreSection from "./components/Explore";
import UserFlow from "./components/userflow";
import WaitlistForm from "./components/WaitlistForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <ExploreSection />
      <UserFlow />
      <WaitlistForm />
      <Footer />

    </main>
  );
}