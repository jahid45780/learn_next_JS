"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathName = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Service",
      path: "/service",
    },
  ];

  return (
    <div>
      <nav className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold">
                Logo
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-4">
              {links?.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`${
                    pathName === link.path ? "text-red-500" : ""
                  } hover:text-gray-300 px-3 py-2 rounded`}
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Links */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-blue-700">
            {links?.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block px-4 py-2 ${
                  pathName === link.path ? "text-red-500" : "text-white"
                } hover:bg-blue-800`}
                onClick={() => setMobileMenuOpen(false)} // Close menu on link click
              >
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
