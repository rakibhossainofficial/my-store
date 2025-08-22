import React from "react";
import Link from "next/link";
import LoginForm from "@/components/LoginForm";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full flex items-center justify-center bg-gray-50 p-4">
        <div className="w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 text-sm">
            Please sign in to continue
          </p>

          <LoginForm />

          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
