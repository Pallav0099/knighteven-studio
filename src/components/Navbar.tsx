import Link from "next/link";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "Studio", href: "/studio" },
  { label: "News", href: "/news" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="w-full px-8 py-6 flex items-center justify-between bg-black text-white">
      <Link href="/" className="text-2xl font-bold">
        Knighteven Studio
      </Link>
      <ul className="flex gap-8 items-center text-lg">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="hover:text-neutral-400 transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
