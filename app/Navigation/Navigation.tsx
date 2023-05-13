"use client";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const links = [
  {
    label: "home",
    route: "/",
  },
  {
    label: "xoncat",
    route: "/Contact",
  },
  {
    label: "services",
    route: "/Services",
  },
];

const Navigation = (props: Props) => {
  return (
    <div>
      <nav>
        <header>
          <div className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-3">
            <div>
              <ul className="flex gap-10 mx-10 p-2 my-3">
                {" "}
                {links.map(({ label, route }) => (
                  <li
                    key={route}
                    className="text-white  hover:bg-slate-600  p-1 px-4 rounded-md"
                  >
                    <Link href={route}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <motion.div
              initial={{
                x: -500,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: 1.5 }}
              className="flex flex-row items-center gap-3"
            >
              <SocialIcon
                url="https://www.youtube.com"
                fgColor="white"
                bgColor="transparent"
              />
              <SocialIcon url="https://www.facebook.com" />
              <SocialIcon url="https://www.github.com" />
              <SocialIcon url="https://www.instagram.com" />
            </motion.div>

            <motion.div
              initial={{
                x: 500,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: 1.5 }}
              className="flex flex-row items-center cursor-pointer"
            >
              <SocialIcon
                className="cursor-pointer"
                network="email"
                fgColor="white"
                bgColor="transparent"
              />
              <p className="uppercase hidden md:inline-flex">GET IN TOUCH</p>
            </motion.div>
          </div>
        </header>
      </nav>
    </div>
  );
};

export default Navigation;
