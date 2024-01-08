import React from "react";
import logodukan from "@/public/logodukan.jpg";
import Image from "next/image";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoColorPaletteOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { CiDiscount1 } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { AiTwotoneSound } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiMemoPad } from "react-icons/ci";
import { TfiLocationArrow } from "react-icons/tfi";
import { CiWallet } from "react-icons/ci";
type Props = {};

const Nav = (props: Props) => {
  const Links = [
    {
      icon: <GoHome />,
      label: "Home",
      link: "/",
    },
    {
      icon: <CiMemoPad />,
      label: "Orders",
      link: "/",
    },
    {
      icon: <IoGridOutline />,
      label: "Products",
      link: "/",
    },
    {
      icon: <CiDeliveryTruck />,
      label: "Delivery",
      link: "/",
    },
    {
      icon: <AiTwotoneSound />,
      label: "Marketing",
      link: "/",
    },
    {
      icon: <TbBrandGoogleAnalytics />,
      label: "Analytics",
      link: "/",
    },
    {
      icon: <MdOutlinePayments />,
      label: "Payments",
      link: "/",
    },
    {
      icon: <TfiLocationArrow />,
      label: "Tools",
      link: "/",
    },
    {
      icon: <CiDiscount1 />,
      label: "Discounts",
      link: "/",
    },
    {
      icon: <LuUsers />,
      label: "Audience",
      link: "/",
    },
    {
      icon: <IoColorPaletteOutline />,
      label: "Appearance",
      link: "/",
    },
    {
      icon: <AiOutlineThunderbolt />,
      label: "Plugins",
      link: "/",
    },
  ];
  return (
    <>
      <section className="bg-[#1E2640] h-screen text-white">
        <nav className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-2">
            <Image
              src={logodukan}
              alt="logo"
              className="w-16 h-16  rounded-lg p-2"
            />
            <div>
              <p>Nishyan</p>
              <Link className="underline" href={"#"}>
                Visit Store
              </Link>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-down m-2 cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 9l6 6l6 -6" />
          </svg>
        </nav>
        <nav>
          <ul className="pt-3">
            {Links.map((link) => (
              <li key={link.label} className="flex w-72 justify-start items-start">
                <Link
                  href={link.link}
                  className="flex items-center justify-start gap-2 p-2 text-lg
                  hover:bg-[#343C53]  mx-3 rounded-md px-20 
                  "
                >
                  <div>{link.icon}</div>
                  <p>{link.label}</p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center bg-[#353C53] py-2 px-6 rounded-md m-2 mt-16 gap-2">
            <div>
              <CiWallet
                size={32}
                className="bg-gray-300 text-gray-700 rounded-md"
              />
            </div>
            <div className="">
              <h2>Available credits</h2>
              <p>222.10</p>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Nav;
