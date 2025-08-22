"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";



export default function Header() {
  const pathname = usePathname();
  
  const link = (
    <>
      <li>
        <Link
          className={`no-underline text-secondary font-semibold link ${
            pathname === "/" ? "border-b-2 border-secondary   " : ""
          }`}
          href="/"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          className={`no-underline text-secondary font-semibold link ${
            pathname === "/snake" ? "border-b-2 border-secondary   " : ""
          }`}
          href="/snake"
        >
          Snake
        </Link>
      </li>
      <li>
        <Link
          className={`no-underline text-secondary font-semibold link ${
            pathname === "/dashboard/add-snake"
              ? "border-b-2 border-secondary   "
              : ""
          }`}
          href="/dashboard/add-snake"
        >
          add snake
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-primary shadow-sm md:px-10 sticky top-0 z-40">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <Link
          href={"/"}
          className=" btn-ghost text-secondary font-extrabold text-2xl"
        >
          Snaker
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        <Link href={'/login'} className="btn border-secondary shadow-none text-secondary bg-primary rounded-xs hover:bg-secondary hover:text-primary">
          login
        </Link>
      </div>
    </div>
  );
}
