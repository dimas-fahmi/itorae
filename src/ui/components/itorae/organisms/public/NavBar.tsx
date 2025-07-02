import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-40 text-white grid grid-cols-[180px_auto_180px] gap-6">
      {/* Socials */}
      <div className="flex items-center justify-center gap-2 py-4 px-4 md:px-6 lg:px-12">
        <button>
          <Instagram className="w-5 h-5" />
        </button>
        <button>
          <Facebook className="w-5 h-5" />
        </button>
        <button>
          <Youtube className="w-5 h-5" />
        </button>
      </div>

      {/* NavLinks */}
      <div className="flex items-center justify-center gap-4 py-4 px-4 md:px-6 lg:px-12">
        {/* Nav Items */}
        <div className="font-subtitle">Home</div>
        <div className="font-subtitle">About</div>
        <div className="font-subtitle">Menu</div>
        <div className="flex-1/2 flex items-center justify-center text-2xl font-bold font-cursive">
          ITORAE
        </div>
        <div className="font-subtitle">Blogs</div>
        <div className="font-subtitle">Outlets</div>
        <div className="font-subtitle">Contact</div>
      </div>

      {/* CTA */}
      <div className="py-4 px-4 md:px-6 lg:px-12 flex items-center justify-center">
        <button className="px-4 py-2 border border-yellow-300 bg-yellow-300 text-slate-900 rounded-md font-semibold font-subtitle shadow-2xl cursor-pointer text-xs">
          Register
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
