import Link from "next/link";
import { Footer } from "flowbite-react";

export function Foot() {
  return (
    <Footer className="bg-black text-white py-6">
      <div className="text-center mx-auto ">
        <p className="text-sm">
          &copy; 2024 Elevate Properties. All rights reserved.
        </p>
        <div className="mt-2">
          <Link href="#" className="text-sm text-gray-400 hover:text-white">
            Privacy Policy
          </Link>
          <span className="mx-2 text-gray-400">|</span>
          <Link href="#" className="text-sm text-gray-400 hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </Footer>
  );
}
