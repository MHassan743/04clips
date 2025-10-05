import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Navigation.css";
import ScrollToTop from "./ScrollToTop";

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleDropdownToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 100);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isCurrentPage = (path) => {
    return location.pathname === path;
  };

  const isInDropdown = (paths) => {
    return paths.includes(location.pathname);
  };

  return (
    <>
      <ScrollToTop />
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration={400}
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar w-nav"
      >
        <div className="container-new">
          <div className="navbar-wrapper">
            <Link
              id="w-node-_1cb60298-e8f7-1caa-9138-0ed5c018e3ce-c018e3cb"
              to="/"
              className={`brand w-nav-brand ${
                isCurrentPage("/") ? "w--current" : ""
              }`}
            >
              <img
                loading="lazy"
                src="/irmedia.png"
                alt="The media agency"
                className="nav-logo"
              />
            </Link>
            <nav
              role="navigation"
              id="w-node-_1cb60298-e8f7-1caa-9138-0ed5c018e3d0-c018e3cb"
              className={`nav-menu w-nav-menu ${
                isMobileMenuOpen ? "w--open" : ""
              }`}
            >
              <Link
                to="/"
                className={`nav-link-2 w-nav-link ${
                  isCurrentPage("/") ? "w--current" : ""
                }`}
              >
                home
              </Link>
              <div
                ref={dropdownRef}
                className={`dropdown w-dropdown ${
                  isDropdownOpen ? "w--open" : ""
                }`}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div
                  className={`nav-dropdown w-dropdown-toggle ${
                    isDropdownOpen ? "w--open" : ""
                  }`}
                  onClick={handleDropdownToggle}
                >
                  <span
                    className={`nav-link-2 w-nav-link ${
                      isInDropdown(["/ghosthost", "/credits", "/powerpod"])
                        ? "w--current"
                        : ""
                    }`}
                    style={{ cursor: "pointer" }}
                  >
                    solutions
                  </span>
                  <div className="dropdown-icon w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6 9l6 6l6 -6" />
                    </svg>
                  </div>
                </div>
                <nav
                  className={`dropdown-list w-dropdown-list ${
                    isDropdownOpen ? "w--open" : ""
                  }`}
                  style={{ display: isDropdownOpen ? "block" : "none" }}
                >
                  <Link
                    to="/ghosthost"
                    className={`dropdown-link sub w-dropdown-link ${
                      isCurrentPage("/ghosthost") ? "w--current" : ""
                    }`}
                  >
                    GhostHost™
                  </Link>
                  <Link
                    to="/credits"
                    className={`dropdown-link sub w-dropdown-link ${
                      isCurrentPage("/credits") ? "w--current" : ""
                    }`}
                  >
                    Credits™
                  </Link>
                  <Link
                    to="/powerpod"
                    className={`dropdown-link sub w-dropdown-link ${
                      isCurrentPage("/powerpod") ? "w--current" : ""
                    }`}
                  >
                    PowerPod™
                  </Link>
                </nav>
              </div>
              <Link to="/portfolio" className="nav-link-2 w-nav-link">
                Portfolio
              </Link>
              <Link to="/client-success" className="nav-link-2 w-nav-link">
                Client Success
              </Link>

              <div className="nav-link-2 hide-on-desktop">
                <a
                  href="https://wa.me/message/4KAVDMIYUEA3K1"
                  className="button-3 w-button"
                >
                  Book a call
                </a>
              </div>
            </nav>
            <div
              id="w-node-_1cb60298-e8f7-1caa-9138-0ed5c018e3d9-c018e3cb"
              className="button-group"
            >
              <a
                href="https://wa.me/message/4KAVDMIYUEA3K1"
                className="button-3 hide-on-mobile w-button"
              >
                Book a call
              </a>
              <div
                className={`menu-button w-nav-button ${
                  isMobileMenuOpen ? "w--open" : ""
                }`}
                onClick={toggleMobileMenu}
              >
                <div className="w-icon-nav-menu" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Floating WhatsApp button (fixed to bottom-right on all pages) */}
      <a
        href="https://wa.me/message/4KAVDMIYUEA3K1"
        className="whatsapp-fab"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open WhatsApp chat"
      >
        <img src="/whatsapp.jpeg" alt="WhatsApp" />
      </a>
    </>
  );
};

export default Navigation;
