import NavBar from "@/src/ui/components/itorae/organisms/public/NavBar";
import React from "react";

const PubliLayout = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return (
    <>
      {/* NavBar */}
      <NavBar />

      {/* Content */}
      <main>{children}</main>
    </>
  );
};

export default PubliLayout;
