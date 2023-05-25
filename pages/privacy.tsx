import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

export default function Privacy() {
  useEffect(() => {
    document.title = "SideNote | Privacy";
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto pb-40 lg:ml-8 lg:mr-8 px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-white mt-10">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Your privacy is important to us. This Privacy Policy outlines how we
          collect, use, and protect your personal information. In the event our
          site contains links to third-party sites and services, please be aware
          that those sites and services have their own privacy policies. After
          following a link to any third-party content, you should read their
          posted privacy policy information about how they collect and use
          personal information. This Privacy Policy does not apply to any of
          your activities after you leave our site.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-white">
          Information Collection
        </h2>
        <p className="text-lg text-gray-300 mb-4">
          We collect personal information when you:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-300 mb-8">
          <li>Create an account</li>
          <li>Interact with the application</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4 text-white">Information Use</h2>
        <p className="text-lg text-gray-300 mb-4">
          We use your personal information for:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-300 mb-8">
          <li>Providing and improving our services</li>
          <li>Personalizing your experience</li>
          <li>Communicating with you</li>
          <li>Conducting analytics and research</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4 text-white">
          Information Sharing
        </h2>
        <p className="text-lg text-gray-300 mb-4">
          We may share your personal information with:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-300 mb-8">
          <li>Legal and government authorities</li>
          <li>
            Third-party service providers for the purpose of enabling them to
            provide their services, including (without limitation) IT service
            providers, data storage, hosting and server providers, analytics,
            error loggers, debt collectors, maintenance or problem-solving
            providers, marketing providers, professional advisors, and payment
            systems operators
          </li>
          <li>Our employees, contractors, and/or related entities</li>
          <li>Our existing or potential agents or business partners</li>
          <li>
            Credit reporting agencies, courts, tribunals, and regulatory
            authorities, in the event you fail to pay for goods or services we
            have provided to you
          </li>
          <li>
            Courts, tribunals, regulatory authorities, and law enforcement
            officers, as required by law, in connection with any actual or
            prospective legal proceedings, or in order to establish, exercise,
            or defend our legal rights
          </li>
          <li>
            Third parties, including agents or sub-contractors, who assist us in
            providing information, products, services, or direct marketing to
            you
          </li>
          <li>
            An entity that buys, or to which we transfer all or substantially
            all of our assets and business
          </li>
        </ul>
        <h2 className="text-2xl font-bold mb-4 text-white">Transaction Data</h2>
        <p className="text-lg text-gray-300 mb-4">
          Transaction data refers to data that accumulates over the normal
          course of operation on our platform. This may include transaction
          records, stored files, user profiles, analytics data and other
          metrics, as well as other types of information, created or generated,
          as users interact with our services.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-white">
          International Transfers of Personal Information
        </h2>
        <p className="text-lg text-gray-300 mb-4">
          The personal information we collect is stored and/or processed in
          Germany, or where we or our partners, affiliates, and third-party
          providers maintain facilities.
        </p>
        <p className="text-lg text-gray-300 mb-4">
          The countries to which we store, process, or transfer your personal
          information may not have the same data protection laws as the country
          in which you initially provided the information. If we transfer your
          personal information to third parties in other countries: (i) we will
          perform those transfers in accordance with the requirements of
          applicable law; and (ii) we will protect the transferred personal
          information in accordance with this privacy policy.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-white">
          International Transfers Outside of the European Economic Area (EEA)
        </h2>
        <p className="text-lg text-gray-300 mb-4">
          We will ensure that any transfer of personal information from
          countries in the European Economic Area (EEA) to countries outside the
          EEA will be protected by appropriate safeguards, for example by using
          standard data protection clauses approved by the European Commission,
          or the use of binding corporate rules or other legally accepted means.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-white">
          Legitimate Reasons for Processing Your Personal Information
        </h2>
        <p className="text-lg text-gray-300 mb-4">
          We only collect and use your personal information when we have a
          legitimate reason for doing so. In which instance, we only collect
          personal information that is reasonably necessary to provide our
          services to you.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-white">
          Security of Your Personal Information
        </h2>
        <p className="text-lg text-gray-300 mb-4">
          When we collect and process personal information, and while we retain
          this information, we will protect it within commercially acceptable
          means to prevent loss and theft, as well as unauthorized access,
          disclosure, copying, use, or modification.
        </p>
        <p className="text-lg text-gray-300 mb-4">
          Although we will do our best to protect the personal information you
          provide to us, we advise that no method of electronic transmission or
          storage is 100% secure, and no one can guarantee absolute data
          security.
        </p>
        <p className="text-lg text-gray-300 mb-4">
          You are responsible for selecting any password and its overall
          security strength, ensuring the security of your own information
          within the bounds of our services. For example, ensuring any passwords
          associated with accessing your personal information and accounts are
          secure and confidential.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-white">Data Security</h2>
        <p className="text-lg text-gray-300 mb-4">
          We prioritize the security of your personal information and take
          appropriate measures to protect it.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-white">
          Updates to this Policy
        </h2>
        <p className="text-lg text-gray-300 mb-4">
          At our discretion, we may change our privacy policy to reflect updates
          to our business processes, current acceptable practices, or
          legislative or regulatory changes. If we decide to change this privacy
          policy, we will post the changes here at the same link by which you
          are accessing this privacy policy.
        </p>
        <p className="text-lg text-gray-300 mb-4">
          If the changes are significant, or if required by applicable law, we
          will contact you (based on your selected preferences for
          communications from us) and all our registered users with the new
          details and links to the updated or changed policy.
        </p>
        <p className="text-lg text-gray-300 mb-4">
          If required by law, we will get your permission or give you the
          opportunity to opt in to or opt out of, as applicable, any new uses of
          your personal information.
        </p>
      </div>
      <Footer />
    </>
  );
}
