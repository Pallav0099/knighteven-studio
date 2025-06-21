import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-neutral-500 py-12 px-8 text-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <p className="mb-4">Still scrolling? Okay, we see you.</p>
        <div className="flex gap-6 mb-8">
          <Link href="#" className="hover:text-white transition-colors text-2xl">
            🐦
          </Link>
          <Link href="#" className="hover:text-white transition-colors text-2xl">
            📸
          </Link>
          <Link href="#" className="hover:text-white transition-colors text-2xl">
            💼
          </Link>
        </div>
        {/* Spotify widget can be embedded here */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Knighteven Studio. Don't steal our
          stuff.
        </p>
      </div>
    </footer>
  );
} 