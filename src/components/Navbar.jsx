import React from "react";

const Navbar = () => {
  return (
    <nav className="container relative p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src="img/logo.svg" alt="logo" />
        </div>
        <ul className="hidden md:flex">
          <li>
            <a className="px-3 py-2 hover:text-darkGrayishBlue" href="/">
              Pricing
            </a>
          </li>
          <li>
            <a className="px-3 py-2 hover:text-darkGrayishBlue" href="/">
              Product
            </a>
          </li>
          <li>
            <a className="px-3 py-2 hover:text-darkGrayishBlue" href="/">
              About Us
            </a>
          </li>
          <li>
            <a className="px-3 py-2 hover:text-darkGrayishBlue" href="/">
              Careers
            </a>
          </li>
          <li>
            <a className="px-3 py-2 hover:text-darkGrayishBlue" href="/">
              Community
            </a>
          </li>
        </ul>
        <a
          href="/"
          className="rounded-full bg-brightRed px-6 py-3 pt-2 text-white hover:bg-brightRedLight "
        >
          Get started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
