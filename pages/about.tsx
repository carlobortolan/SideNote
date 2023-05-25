import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
export default function About() {
  useEffect(() => {
    document.title = "SideNote | About";
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto pb-40 lg:ml-8 lg:mr-8 px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-white mt-10">About</h1>
        <h2 className="text-2xl font-bold mb-4 text-white mt-8">Disclaimer</h2>
        <p className="text-lg text-gray-300 mb-8">
          This website is created and maintained for educational and learning
          purposes only. It is not intended for commercial use, and no financial
          transactions or services are provided through this platform.
        </p>
        <p className="text-lg text-gray-300 mb-8">
          The media (such as images, videos, audio, and other multimedia
          content) shown on this website are used solely for educational and
          demonstration purposes. All media displayed on this platform belongs
          to their respective owners, and I do not claim any ownership over
          them. All rights and credits for the media content belong to the
          original creators and copyright holders.
        </p>
        <p className="text-lg text-gray-300 mb-8">
          The inclusion of any media on this website does not imply endorsement,
          authorization, or sponsorship by the owners or creators of the
          original content. If you are the rightful owner of any content
          displayed on this website and would like it to be removed, please
          contact me either on GitHub or on LinkedIn.
        </p>
        <p className="text-lg text-gray-300 mb-8">
          While every effort has been made to ensure the accuracy and
          reliability of the information presented on this website, I make no
          guarantees or representations regarding the completeness, accuracy,
          reliability, or suitability of the information. The use of any
          information or materials on this website is at your own risk. I shall
          not be liable for any loss, damage, or injury arising from the use or
          misuse of this website or the information contained herein.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-white mt-8">
          Technologies used
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          SideNote is a web application built using technologies such as the
          React library, Tailwind CSS, Next.js, NextAuth, Prisma, and MongoDB.
          It offers OAuth2.0 authentication, allowing users to sign in using
          their Google or GitHub accounts.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-white mt-8">
          Introduction
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          In this fast-paced, attention-starved world, SideNote emerges as the
          true master of capturing and capitalizing on the elusive human
          attention span. Forget about wasting time on full-length movies;
          SideNote is here to serve you the finest, most exhilarating trailers
          ever conceived.
        </p>
        <p className="text-lg text-gray-300 mb-8">
          SideNote delivers an extensive catalog of handpicked trailers,
          carefully curated to maximize your adrenaline rush. From high-octane
          action flicks to sultry romances, mind-bending sci-fi adventures to
          side-splitting comedies, SideNote guarantees a high-energy experience
          like no other. We bring you the essence of cinema distilled into
          bite-sized, heart-pounding moments.
        </p>
        <p className="text-lg text-gray-300 mb-8">
          Our interface is a work of art - a visual feast designed to lure you
          into the never-ending world of trailer addiction. Prepare to be
          dazzled by a stunning platform that keeps your attention locked onto
          the screen. Discover the latest releases, explore trending trailers,
          and unlock exclusive glimpses behind the scenes. SideNote is the
          ultimate seducer, keeping you craving for more.
        </p>
        <p className="text-lg text-gray-300 mb-8">
          Whether you're at home, in transit, or on a corporate jet, SideNote is
          always within reach. With support for smartphones, tablets,
          web-browsers, you can let the world of cinema unfold in the palm of
          your hand.
        </p>
        <p className="text-lg text-gray-300 mb-8">
          SideNote is your gateway to the ultimate power play in the attention
          economy. Step into the realm where trailers reign supreme, and
          anticipation becomes the currency of success. Prepare for a future
          where SideNote dominates the attention market, fueling your addiction
          and leaving you hungry for the next adrenaline rush. Welcome to
          SideNote, where we take control of your attention, and the world is at
          our fingertips. Greed is good, my friend, and SideNote is here to
          prove it.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-white mt-8">Features</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>
            User authentication with OAuth: Users can sign in using their Google
            or GitHub accounts.
          </li>
          <li>
            Browse trailers: Users can browse a catalog of trailers and view
            detailed information about each title, including a synopsis, the
            cast, and duration.
          </li>
          <li>
            Browse by category: Users can see all available categories with the
            respective trailers.
          </li>
          <li>
            Search for titles: Users can search for trailers and TV shows by
            title or genre.
          </li>
          <li>
            Add titles to their watchlist: Users can add titles to their
            watchlist to keep track of titles they want to watch later.
          </li>
          <li>
            View recommended titles: Users can view a list of recommended titles
            based on their watch history and ratings.
          </li>
          <li>
            Manage profile: Users can update their profile information,
            including their name and profile picture.
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
