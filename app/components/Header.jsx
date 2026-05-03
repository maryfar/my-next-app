"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MenuIcon } from "./icons/MenuIcon"; 

export default function Header() {
  const [isActiveMob, setIsActiveMob] = useState(false);

  return (
    <header className="bg-blue-400">
      <div className="flex items-center justify-between w-full p-2 sm:px-8 sm:py-4">
       
        <nav className="hidden sm:flex gap-4 items-start text-white font-bold ">
          <Link href="/" className="hover:opacity-80">صفحه اصلی</Link>
          <Link href="/products" className="hover:opacity-80">محصولات</Link>
          <Link href="/cart" className="hover:opacity-80">سبد خرید</Link>
        </nav>
        <button 
          className="block sm:hidden p-2" 
          onClick={() => setIsActiveMob((prev) => !prev)}
        >
          <MenuIcon />
        </button>

        <Link href="/">
          <Image 
            src="/images.jpeg" 
            alt="store" 
            width={50} 
            height={50} 
            loading="eager"
            className="rounded-full" 
          />
        </Link>
      </div>

      {isActiveMob && (
        <nav className="sm:hidden flex flex-col gap-3 p-4 bg-blue-400 border-t border-blue-300 items-start">
          <Link 
            href="/" 
            className="py-2 px-4 hover:bg-blue-600 rounded transition"
            onClick={() => setIsActiveMob(false)}
          >
            صفحه اصلی
          </Link>
          <Link 
            href="/products" 
            className="py-2 px-4 hover:bg-blue-600 rounded transition"
            onClick={() => setIsActiveMob(false)}
          >
            محصولات
          </Link>
          <Link 
            href="/cart" 
            className="py-2 px-4 hover:bg-blue-600 rounded transition"
            onClick={() => setIsActiveMob(false)}
          >
            سبد خرید
          </Link>
        </nav>
      )}
    </header>
  );
}