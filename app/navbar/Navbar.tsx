import React from "react";
import Logo from "./Logo";
import { NavigationBar } from "./NavigationBar";
import BridgeAction from "./BridgeAction";
import { ModeToggle } from "@/components/dark-mode-toggle";

const navbarStyle = {
  height: "4.6rem", // Bu değer 19px'e yakındır (1 rem genellikle 16px'e eşittir)
};

// const Navbar = () => {
//   return (
//     <div className='flex justify-between items-center px-28 border-b h-20'>
//       <div className='flex items-center space-x-3'>
//         <Logo/>
//       </div>
//       <div className='flex items-center space-x-0'>
//         <NavigationBar/>
//       </div>
//       <BridgeAction/>
//     </div>
//   )
// }

const Navbar = () => {
  return (
    <div className="h-[8vh] flex justify-start items-center px-24 border-b ">
      {/* justify-start kullanarak elemanları sola hizaladık ve px-8 ile yatay padding'i azalttık */}
      <div className="flex items-center space-x-6">
        <Logo />
        <div
          style={{
            fontFamily: "Poppins",
            fontSize: "medium",
            color: "#43d288",
          }}
          className="flex items-center space-x-2 text-inherit"
        >
          Felina
        </div>
      </div>
      <div className="flex items-center space-x-0 ml-20">
        {/* ml-4 (margin-left) ile NavigationBar ve Logo arasında biraz boşluk bıraktık */}
        <NavigationBar />
      </div>
      <div className="flex-grow"></div>
      {/* flex-grow ile BridgeAction'ı sağa itiyoruz */}
      <BridgeAction />
    </div>
  );
};

export default Navbar;
