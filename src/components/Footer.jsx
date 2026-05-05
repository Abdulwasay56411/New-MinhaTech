import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const footerText = [
  {
    id: 1,
    title: "Services",
    links: [
      "Android Development",
      "IOS Development",
      "Cross Platforms Apps Development",
      "App Monetization",
      "ASO Services",
    ],
  },
  {
    id: 2,
    title: "Company",
    links: ["Home", "About Us", "Projects", "Contact Us"],
  },
];

const socialLinks = [
  { Icon: FaInstagram, url: "https://www.instagram.com/minhatechofficial?igsh=dW1mb3YxaDdtazlr" },
  { Icon: FaLinkedinIn, url: "https://www.linkedin.com/company/minhatech/" },
  { Icon: FaFacebookF, url: "https://www.facebook.com/share/1JcuY4LJoR/?mibextid=wwXIfr" },
];

const Footer = () => {
  return (
    <footer className="mt-20 bg-linear-to-t from-[#12253E] to-[#12253E00] w-full py-2">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-5 py-10"
      >
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
          <div>
            <h1 className="text-[#06B8FF] font-semibold text-5xl">MinhaTech</h1>
            <p className="text-[#C6C7C8] text-lg mt-4 lg:max-w-xl">
              Building revenue generated mobile apps for startups and enterprises.
              From Idea to App Store, we deliver excellence.
            </p>
            <div className="flex items-center gap-3 my-8">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#06B8FF26] border border-[#06B8FF26] text-white w-12 h-12 flex items-center justify-center rounded-2xl cursor-pointer duration-200 hover:scale-105 hover:text-[#06B8FF] hover:border-[#06B8FF]"
                >
                  <item.Icon size={22} />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 sm:gap-20">
            {footerText.map((section) => (
              <div key={section.id}>
                <h2 className="font-bold text-white mb-4 text-xl">{section.title}</h2>
                <ul className="space-y-2">
                  {section.links.map((link, index) => (
                    <li key={index} className="text-[#C6C7C8] hover:text-[#06B8FF] cursor-pointer duration-200">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 overflow-hidden">
          <h1 className="text-shine text-[clamp(40px,13.5vw,200px)] font-bold text-[#FFFFFF1A] uppercase tracking-[0.07em] leading-none w-full">
            MINHATECH
          </h1>
        </div>

        <hr className="border-[#D9D9D96B] my-6" />
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <p className="font-medium text-sm text-[#FFFFFFC7]">
            ©2022-2023 Minha Tech. All Rights Reserved
          </p>
          <div className="flex gap-8">
            <p className="font-medium text-sm text-[#FFFFFFC7] cursor-pointer hover:text-white">Privacy Policy</p>
            <p className="font-medium text-sm text-[#FFFFFFC7] cursor-pointer hover:text-white">Terms of Use</p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;