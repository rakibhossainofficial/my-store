"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
  ];

  // Add dashboard link only if logged in
  if (session) {
    navItems.push({ label: "Add Product", href: "/dashboard/add-product" });
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            MyStore
          </Link>

          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-600 hover:text-indigo-600"
                } transition-colors duration-200`}
              >
                {item.label}
              </Link>
            ))}

            {status === "loading" ? (
              <span className="text-gray-500">Loading...</span>
            ) : session ? (
              <div className="flex items-center space-x-3">
                <span className="text-gray-700">
                  Hi, <strong>{session.user?.name || "User"}</strong>
                </span>
                <button
                  onClick={() => signOut()}
                  className="px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => signIn()}
                className="px-4 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
