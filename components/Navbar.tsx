import NavbarItem from "./NavbarItem";
import MobileMenu from "./MobileMenu";
import SearchMenu from "./SearchMenu";
import AccountMenu from "./AccountMenu";
import { BsChevronDown, BsSearch } from "react-icons/bs";
import { useCallback, useEffect, useRef, useState } from "react";
import useCurrentUser from "@/hooks/useCurrentUser";
import router from "next/router";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const { data: currentUser } = useCurrentUser();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);
  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);
  const toggleSearchMenu = useCallback(() => {
    setShowSearchMenu((current) => !current);
  }, []);

  const openSearchMenu = useCallback(() => {
    setShowSearchMenu(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (
        divRef.current &&
        !divRef.current.contains(event.target) &&
        showSearchMenu
      ) {
        toggleSearchMenu();
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggleSearchMenu, showSearchMenu]);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <img
          className="h-7 lg:h-7 cursor-pointer transition hover:scale-105"
          src="../images/logo.png"
          alt="Logo"
          onClick={() => router.push(`/`)}
        ></img>
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <div
            onClick={() => router.push(`/`)}
            className="cursor-pointer transition"
          >
            <NavbarItem label="Home" />
          </div>
          <div
            onClick={() => router.push(`/browse/trailers`)}
            className="cursor-pointer transition"
          >
            <NavbarItem label="Trailers" />
          </div>
          <div
            onClick={() => router.push(`/browse/latest`)}
            className="cursor-pointer transition"
          >
            <NavbarItem label="New & Popular" />
          </div>
          <div
            onClick={() => router.push(`/browse/my-list`)}
            className="cursor-pointer transition"
          >
            <NavbarItem label="My List" />
          </div>
          <div
            onClick={() => router.push(`/browse/category`)}
            className="cursor-pointer transition"
          >
            <NavbarItem label="Browse by category" />
          </div>
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown
            className={`text-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div
          onClick={openSearchMenu}
          className="flex flex-row ml-auto gap-7 items-center"
        >
          <div
            ref={divRef}
            className="flex flex-row items-center gap-2 relative"
          >
            <BsSearch
              className={`disabled ${
                showSearchMenu
                  ? "disabled text-transparent"
                  : "text-gray-200 hover:text-gray-300 cursor-pointer transition hover:underline hover:translate-y-[-2px] transition-transform duration-200"
              }`}
            />
            <SearchMenu visible={showSearchMenu} />
          </div>
          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src={currentUser?.image} alt="" />
            </div>

            <BsChevronDown
              className={`text-white transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
