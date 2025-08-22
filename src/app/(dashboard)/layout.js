"use client";

import React from "react";
import ProtectedAuthProvider from "@/provider/ProtectedAuthProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const isActive = pathname === "/dashboard/add-product";

  return (
    <ProtectedAuthProvider>
      <div className="flex min-h-screen bg-gray-50">
        <aside className="w-64 bg-white shadow-sm hidden md:flex flex-col">
          <Link href={"/"} className="p-4 text-2xl font-bold border-b">
            Dashboard
          </Link>
          <nav className="flex-1 p-4 space-y-2">
            <Link
              href="/dashboard/add-product"
              className={`block px-3 py-2 rounded-md transition ${
                isActive
                  ? "bg-indigo-100 text-indigo-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              ➕ Add Product
            </Link>
          </nav>
        </aside>

        <div className="flex-1 flex flex-col">
          {/* <header className="h-14 bg-white border-b px-4 flex items-center justify-between">
            <h1 className="text-lg font-semibold">
              {isActive ? "Add Product" : "Dashboard"}
            </h1>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-gray-300" />
            </div>
          </header> */}

          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </ProtectedAuthProvider>
  );
}
