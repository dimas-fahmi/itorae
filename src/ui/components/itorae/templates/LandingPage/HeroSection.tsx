import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-dvh !max-h-[480px] overflow-hidden"
    >
      {/* Backdrop */}
      <div>
        <img
          src={
            "https://zvgpixcwdvbogm3e.public.blob.vercel-storage.com/itorae/art/img/photo_by_alleksana_lasagna.jpg"
          }
          alt="Some alt"
          className="w-full h-dvh !max-h-[480px] object-cover brightness-50"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0">
        {/* Content */}
        <div className="max-w-lg flex h-full items-center px-4 md:px-6 lg:px-12">
          <div className="text-white">
            <span className="text-xl font-cursive text-yellow-300">
              When Japanese meet Italian, you'll get...
            </span>
            <h1 className="text-6xl font-header mb-6">
              Most delicous foods you'll ever taste!
            </h1>
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-yellow-300 bg-yellow-300 text-slate-900 rounded-md font-semibold font-subtitle shadow-2xl cursor-pointer">
                Menu, Please!
              </button>
              <button className="px-4 py-2 border rounded-md font-semibold font-subtitle shadow-2xl cursor-pointer">
                Join the cult!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
