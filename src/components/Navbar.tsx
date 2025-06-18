import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-white shadow-md">
      <ul className="flex gap-6 items-center justify-center text-lg font-medium">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="hover:text-blue-600 transition">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
