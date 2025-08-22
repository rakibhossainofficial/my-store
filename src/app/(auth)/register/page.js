import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";

export default function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full flex items-center justify-center bg-gray-50 p-2">
        <div className="w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Create an Account
          </h1>

          <p className="text-center text-gray-500 text-sm">
            Please fill in your details to register
          </p>

          <RegisterForm />

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
