import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="pt-5 pb-5 bg-gray-900">
      <ul className="flex flex-row justify-center gap-12 text-xl">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
