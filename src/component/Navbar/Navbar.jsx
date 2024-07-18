import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const submenuRef = useRef(null);
  const location = useLocation();
  let timeoutId = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutId.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = (event) => {
    timeoutId.current = setTimeout(() => {
      if (
        !dropdownRef.current.contains(event.relatedTarget) &&
        !submenuRef.current.contains(event.relatedTarget)
      ) {
        setIsDropdownOpen(false);
      }
    }, 200); // Delay in milliseconds
  };

  const handleSubmenuMouseEnter = () => {
    clearTimeout(timeoutId.current);
    setIsDropdownOpen(true);
  };

  const handleSubmenuMouseLeave = (event) => {
    timeoutId.current = setTimeout(() => {
      if (
        !dropdownRef.current.contains(event.relatedTarget) &&
        !submenuRef.current.contains(event.relatedTarget)
      ) {
        setIsDropdownOpen(false);
      }
    }, 300); // Delay in milliseconds
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      submenuRef.current &&
      !submenuRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsDropdownOpen(false); // Close dropdown on route change
  }, [location]);

  return (
    <div>
      <div className="flex justify-end p-4">
        <h2 className="mx-4">
          Call Us:- <a href="tel:+911234567890">+91 1234567890</a>
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-between items-center p-4 w-[80vw]">
          <div className="flex items-center gap-4">
            <img
              src="https://img.icons8.com/color/search"
              alt="Search Icon"
              className="w-14 h-14"
            />
          </div>
          <div className="flex gap-6 justify-evenly border rounded-lg p-4 bg-white w-1/2">
            <Link to={"/"} className="hover:text-blue-500 hover:cursor-pointer">
              Home
            </Link>
            <Link
              to={"/aboutus"}
              className="hover:text-blue-500 hover:cursor-pointer"
            >
              About Us
            </Link>
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="hover:text-blue-500 hover:cursor-pointer">
                Service
              </span>
              {isDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-5 w-48 bg-white shadow-md border rounded-md"
                  ref={submenuRef}
                  onMouseEnter={handleSubmenuMouseEnter}
                  onMouseLeave={handleSubmenuMouseLeave}
                >
                  <Link
                    to={"/service/digitalmarketing"}
                    className="block px-4 py-2 hover:bg-gray-100 hover:cursor-pointer"
                  >
                    Digital Marketing
                  </Link>
                  <Link
                    to={"/service/ecommerce"}
                    className="block px-4 py-2 hover:bg-gray-100 hover:cursor-pointer"
                  >
                    E-commerce
                  </Link>
                  <Link
                    to={"/service/SEM"}
                    className="block px-4 py-2 hover:bg-gray-100 hover:cursor-pointer"
                  >
                    Sem
                  </Link>
                  <Link
                    to={"/service/social"}
                    className="block px-4 py-2 hover:bg-gray-100 hover:cursor-pointer"
                  >
                    Social
                  </Link>
                  <Link
                    to={"/service/socialmedia"}
                    className="block px-4 py-2 hover:bg-gray-100 hover:cursor-pointer"
                  >
                    Social Media
                  </Link>
                  <Link
                    to={"/service/webhosting"}
                    className="block px-4 py-2 hover:bg-gray-100 hover:cursor-pointer"
                  >
                    Website Hosting
                  </Link>
                </div>
              )}
            </div>
            <Link
              to={"/blog"}
              className="hover:text-blue-500 hover:cursor-pointer"
            >
              Blog
            </Link>
            <Link
              to={"/contactus"}
              className="hover:text-blue-500 hover:cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
