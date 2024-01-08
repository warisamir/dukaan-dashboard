"use client";
import React, { FormEvent, useState } from "react";
import { CiCircleQuestion } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Table from "../DashTable/Table";
import { LuArrowUpDown } from "react-icons/lu";
import Pagination from "../Pagination/Pagination";
import { GoDownload } from "react-icons/go";
type Props = {};

const Payment = (props: Props) => {
  const [selectedMonth, setSelectedMonth] = useState("");

  const handleMonthChange = (event: FormEvent) => {
    setSelectedMonth(event.target.value);
  };

  const months = ["Last Month", "This Month", "Other"];
  return (
    <>
      <section className="bg-white h-screen text-black">
        {/* top nav  */}
        <nav className="flex items-center justify-between gap-2 border-b-2 border-b-gray-300 px-3 h-14">
          <div className="[&_h2]:font-bold [&_h2]:text-xl [&_p]:flex [&_p]:items-center [&_p]:gap-2 flex items-center gap-2 ">
            <h2>Payments</h2>
            <p>
              <CiCircleQuestion />
              <p>How it works</p>
            </p>
          </div>
          <div className="flex items-center justify-normal">
            <CiSearch className="-mx-6 z-40" size={20} />
            <input
              type="search"
              name="search"
              id="searchId"
              className="w-[30rem] border-2 outline-none border-gray-200 py-2 px-6 rounded-md"
              placeholder="Search features,tutorial,etc "
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="bg-gray-300 h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-message"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 9h8" />
                <path d="M8 13h6" />
                <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
              </svg>
            </div>
            <div className="bg-gray-300 h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-caret-down-filled"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z"
                  stroke-width="0"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </nav>
        {/* main section  */}
        <section id="dashboard">
          <div className="flex items-center justify-between p-2">
            <div>
              <h2 className="text-lg p-2">Overview</h2>
            </div>
            <div className="border-2 py-2 px-6">
              <select
                id="monthSelect"
                value={selectedMonth}
                onChange={handleMonthChange}
                className="outline-none cursor-pointer"
              >
                <option value="">Select...</option>
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-start justify-between p-2 [&_div>p]:text-xl [&_div>p]:font-semibold m-2">
            <div>
              <h2>Online Orders</h2>
              <p className="px-2">231</p>
            </div>
            <div>
              <h2>Amount received</h2>
              <p>₹23,92,321.19</p>
            </div>
            <div></div>
          </div>
          <div className="px-3 m-2 flex items-center justify-between gap-2">
            <div>
              <h2 className="font-semibold text-lg mt-2">
                Transactions | {selectedMonth || "This month"}
              </h2>
              <input
                type="search"
                name="search"
                id="searchId"
                className="w-96 border-2 outline-none border-gray-200 py-2 px-6 rounded-md"
                placeholder="Search by order ID "
              />
            </div>
            <div className="flex items-center justify-end gap-2">
              <button className="py-2 px-5 rounded-md cursor-pointer flex items-center justify-center gap-2 border-2">
                Sort <LuArrowUpDown />
              </button>
              <button className="py-2 px-5 rounded-md cursor-pointer flex items-center justify-center gap-2 border-2">
                <GoDownload size={24} />
              </button>
            </div>
          </div>
          <Table />
          <Pagination />
        </section>
      </section>
    </>
  );
};

export default Payment;
