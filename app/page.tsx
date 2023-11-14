import FirstSection from "./firs-section/FirstSection";
import Navbar from "./navbar/Navbar";
import { Image } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <FirstSection />
    </div>
  );
}
