import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-neutral-400 py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg font-semibold text-white">Knighteven Studio</p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition-colors">
            <IconBrandTwitter size={24} />
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            <IconBrandInstagram size={24} />
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            <IconBrandGithub size={24} />
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            <IconBrandLinkedin size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
} 