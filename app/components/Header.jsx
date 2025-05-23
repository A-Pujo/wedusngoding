'use client'
import Link from 'next/link'
import { FaNewspaper } from "react-icons/fa"
import { FaChartLine } from "react-icons/fa6"
import { CgWebsite } from "react-icons/cg"
import { MdHome } from "react-icons/md"

export default function Header() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar fixed z-998 bg-base-100 w-full">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">
            <img src="/assets/image/Logo-Putih-Web.png" className='w-32' />
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              <li><Link href={`/`}><MdHome /> Home</Link></li>
              <li><Link href={`/portofolio`}><CgWebsite /> Portofolio</Link></li>
              <li><Link href={`/we-do-data`}><FaChartLine /> We . Do . Data</Link></li>
              <li><Link href={`/blog`}><FaNewspaper /> Blog</Link></li>
              <li><Link href={`/contact`} className='btn btn-sm btn-secondary'>Contact Us</Link></li>
            </ul>
          </div>
        </div>

      </div>
      <div className="drawer-side z-999">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <li><Link href={`/`}><MdHome /> Home</Link></li>
          <li><Link href={`/portofolio`}><CgWebsite /> Portofolio</Link></li>
          <li><Link href={`/we-do-data`}><FaChartLine /> We . Do . Data</Link></li>
          <li><Link href={`/blog`}><FaNewspaper /> Blog</Link></li>
          <li><Link href={`/contact`} className='btn btn-sm btn-secondary'>Contact Us</Link></li>
        </ul>
      </div>
    </div>
  );
}
