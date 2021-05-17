import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav class="bg-indigo-300 p-4 shadow-md">
        <ul class="flex space-x-4 text-white">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/pie">
              <a>PieChart</a>
            </Link>
          </li>
          <li>
            <Link href="/users">
              <a>Userschart</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
