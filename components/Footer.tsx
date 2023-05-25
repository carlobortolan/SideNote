import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4 flex flex-col h-full">
        <div className="flex flex-wrap justify-center">
          <div className="flex items-center mr-6 ml-6 mb-4">
            <a href="https://github.com/carlobortolan/SideNote">
              <FaGithub className="text-white text-4xl mr-2" />
            </a>
          </div>
          <div className="flex items-center mr-6 mb-4">
            <a href="https://linkedin.com/in/carlobortolan">
              <FaLinkedin className="text-white text-4xl mr-2" />
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <ul className="flex text-gray-300 text-center space-x-4">
            <li>
              <Link href="/">Home</Link>{" "}
            </li>
            <li>
              <Link href="/about">About</Link>{" "}
            </li>
            <li>
              <Link href="/contact">Contact</Link>{" "}
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>{" "}
            </li>
          </ul>
        </div>
        <p className="text-gray-400 text-center text-sm mt-8">
          &copy; {new Date().getFullYear()} SideNote.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
