import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  useEffect(() => {
    document.title = "SideNote | Contact";
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto pb-40 lg:ml-8 lg:mr-8 px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-white mt-10 ">Contact</h1>
        <p className="text-lg text-gray-300 mb-10">
          If you have any questions, suggestions, or feedback, please feel free
          to reach out to me using the contact information below:
        </p>
        <div className="text-white flex flex-col items-center">
          <FaEnvelope className="text-4xl mb-2" />
          <h2 className="text-xl font-bold mb-2">Email:</h2>
          <p className="text-gray-500">carlobortolan@gmail.com</p>
        </div>
        <div className="text-white flex flex-col items-center mt-8">
          <FaGithub className="text-4xl mb-2" />
          <h2 className="text-xl font-bold mb-2">GitHub:</h2>
          <p className="text-gray-500">carlobortolan</p>
        </div>
        <div className="text-white flex flex-col items-center mt-8">
          <FaLinkedin className="text-4xl mb-2" />
          <h2 className="text-xl font-bold mb-2">LinkedIn:</h2>
          <p className="text-gray-500">in/carlobortolan</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
