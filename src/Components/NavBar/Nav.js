import React, { useState } from "react";
import MobileLink from "./MobileLink";
import Navbar from "./Navbar";

const Nav = () => {
  const [show, setShow] = useState(false);
  return (
    <section className="relative">
      <Navbar MobileLink={setShow} />
      <div
        className={`${
          show ? "-right-0" : "-right-full"
        } fixed top-0 bottom-0 z-30 w-full transition-all ease-in duration-500`}
      >
        <MobileLink MobileLink={setShow} />
      </div>
    </section>
  );
};

export default Nav;
