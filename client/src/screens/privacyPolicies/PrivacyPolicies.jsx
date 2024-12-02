import React, { useEffect } from "react";
import Footer from "../../components/footer/LightFooter";
import { useAnimation } from "../../context/animationContext/AnimationContextProvider";

export default function PrivacyPolicies() {
  const { delayLandingPage, setDelayLandingPage } = useAnimation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    document.title =
      "Privacy Policy - Best Agency in Affordable Budget | Devion Ark";
  }, []);
  useEffect(() => {
    if (delayLandingPage !== 0) {
      setDelayLandingPage(0);
    }
  }, []);
  return (
    <div className="pt-20 w-full font-bodyFont overflow-x-hidden bg-darkPrimary text-lightBodyText flex flex-col lg:gap-10 sm:gap-7 gap-5">
      <section className="flex flex-col gap-3 sm:gap-5 px-5 sm:px-7 lg:px-10 xl:px-20">
        <h1 className="uppercase text-3xl sm:text-4xl font-bold font-titleFont text-lightPrimary">
          Privacy Policy
        </h1>
        <p className="font-light text-sm sm:text-base">
          Last updated: December 02, 2024
        </p>
        <p className="font-light text-sm sm:text-base">
          This Privacy Policy describes our policies and procedures on the
          collection, use and disclosure of your information when you use the{" "}
          <span className="font-semibold">Devion Ark</span>
          &apos;s services and tells you about your privacy rights and how the
          law protects you.
        </p>
        <p className="font-light text-sm sm:text-base">
          <span className="font-semibold">Devion Ark Digital Solutions</span>{" "}
          ("we," "us," "our") is committed to protecting the privacy and
          security of our clients and users. This Privacy Policy outlines how we
          collect, use, disclose, and safeguard your information when you
          interact with our services. By engaging with our services, you agree
          to the practices described in this policy.
        </p>
        <h2 className="uppercase text-2xl sm:text-3xl font-semibold font-titleFont text-lightPrimary">
          Information We Collect
        </h2>
        <p className="font-light text-sm sm:text-base">
          We collect and process the following types of information:
        </p>
        <ul className="font-light text-sm sm:text-base list-disc ps-5">
          <li>
            <span className="font-semibold">Personal Information:</span> First
            name, last name, email address, phone number, address, project
            details, interests, and budget.
          </li>
          <li>
            <span className="font-semibold">Technical Information:</span> Data
            related to user interaction with our website, including IP address,
            device type, and browsing activity.
          </li>
          <li>
            <span className="font-semibold">Client Data Access:</span> For
            specific services such as social media marketing and search engine
            marketing, we may require access to clients’ social media accounts
            and websites.
          </li>
        </ul>
        <h2 className="uppercase text-2xl sm:text-3xl font-semibold font-titleFont text-lightPrimary">
          How We Use Your Information
        </h2>
        <p className="font-light text-sm sm:text-base">
          The information we collect is used for the following purposes:
        </p>
        <ul className="font-light text-sm sm:text-base list-disc ps-5">
          <li>
            <span className="font-semibold">Service Delivery:</span> To provide
            business solutions, including branding, digital marketing, SEO,
            website and software development, and related services.
          </li>
          <li>
            <span className="font-semibold">Communication:</span> To respond to
            inquiries, communicate about projects, and share updates about our
            services.
          </li>
          <li>
            <span className="font-semibold">Analysis and Improvement:</span> To
            enhance our offerings by analyzing client preferences and project
            data.
          </li>
          <li>
            <span className="font-semibold">Legal and Compliance:</span> To
            comply with applicable legal and contractual obligations.
          </li>
        </ul>
        <h2 className="uppercase text-2xl sm:text-3xl font-semibold font-titleFont text-lightPrimary">
          Data Security
        </h2>
        <p className="font-light text-sm sm:text-base">
          We take data protection seriously and implement industry-standard
          measures, including encryption and access control, to safeguard your
          information. However, no data transmission over the internet is 100%
          secure. By using our services, you acknowledge and accept this
          inherent risk.
        </p>
        <h2 className="uppercase text-2xl sm:text-3xl font-semibold font-titleFont text-lightPrimary">
          Information Sharing
        </h2>
        <p className="font-light text-sm sm:text-base">
          We do not sell, rent, or share your personal information with third
          parties except:
        </p>
        <ul className="font-light text-sm sm:text-base list-disc ps-5">
          <li>
            <span className="font-semibold">With Your Consent:</span> When you
            explicitly authorize us to share your data.
          </li>
          <li>
            <span className="font-semibold">Service Providers:</span> With
            trusted third-party vendors assisting in service delivery.
          </li>
          <li>
            <span className="font-semibold">Legal Requirements:</span> When
            required to comply with laws, court orders, or governmental
            requests.
          </li>
        </ul>

        <h2 className="uppercase text-2xl sm:text-3xl font-semibold font-titleFont text-lightPrimary">
          Terms of Service for Clients
        </h2>
        <ul className="font-light text-sm sm:text-base list-disc ps-5">
          <li>
            <span className="font-semibold">Subscription Services:</span>{" "}
            Clients on monthly or yearly subscriptions can cancel at any time.
            However, fees already paid are non-refundable.
          </li>
          <li>
            <span className="font-semibold">One-Time Projects:</span> Once a
            one-time project is confirmed and initiated, it cannot be canceled.
          </li>
          <li>
            <span className="font-semibold">Paid Promotions:</span> For
            marketing services, any additional costs for paid advertisements
            must be borne by the client. These expenses are not included in our
            standard charges.
          </li>
          <li>
            <span className="font-semibold">Technical Services:</span> For
            website and software development, clients are responsible for
            bearing the costs of domain registration, hosting, databases, and
            server expenses.
          </li>
        </ul>

        <h2 className="uppercase text-2xl sm:text-3xl font-semibold font-titleFont text-lightPrimary">
          Client Responsibilities
        </h2>
        <ul className="font-light text-sm sm:text-base list-disc ps-5">
          <li>
            Clients must provide timely access and permissions to social media
            platforms and websites necessary for us to execute their projects.
          </li>
          <li>
            Accurate and up-to-date information must be provided to ensure
            smooth project execution.
          </li>
        </ul>

        <h2 className="uppercase text-2xl sm:text-3xl font-semibold font-titleFont text-lightPrimary">
          Your Privacy Rights
        </h2>
        <p className="font-light text-sm sm:text-base">
          You have the right to:
        </p>
        <ul className="font-light text-sm sm:text-base list-disc ps-5">
          <li>Access, correct, or delete your personal data.</li>
          <li>Opt out of receiving promotional communications.</li>
          <li>
            Request information about how your data is used and processed.
          </li>
        </ul>
        <p className="font-light text-sm sm:text-base">
          To exercise these rights, contact us at{" "}
          <span className="font-semibold underline underline-offset-2">
            info@devionark.com
          </span>
          .
        </p>

        <h2 className="uppercase text-2xl sm:text-3xl font-semibold font-titleFont text-lightPrimary">
          Updates to This Policy
        </h2>
        <p className="font-light text-sm sm:text-base">
          This Privacy Policy may be updated periodically to reflect changes in
          our practices or for other operational, legal, or regulatory reasons.
          Any updates will be posted on this page with a revised "Last Updated"
          date.
        </p>

        <h2 className="uppercase text-2xl sm:text-3xl font-semibold font-titleFont text-lightPrimary">
          Contact Information
        </h2>
        <p className="font-light text-sm sm:text-base">
          If you have questions, concerns, or feedback about this Privacy
          Policy, you can reach us at:
        </p>
        <ul className="font-light text-sm sm:text-base list-disc ps-5">
          <li>
            <span className="font-semibold">Email:</span> info@devionark.com
          </li>
          <li>
            <span className="font-semibold">Phone:</span> 88 01782 734573
          </li>
          <li>
            <span className="font-semibold">Address:</span> 08 Tootpara Central
            Rd, Khulna-9100, Bangladesh
          </li>
          <li>
            <span className="font-semibold">Website:</span> www.devionark.com
          </li>
        </ul>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
