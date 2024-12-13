import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";

export function Header() {
  return (
    <Navbar className="bg-black text-white py-8 px-4" fluid rounded>
      <NavbarBrand as={Link} href="/">
        <span className="self-center whitespace-nowrap ml-20 text-2xl tracking-wider font-semibold dark:text-white">
          Elevate Properties
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className="text-xl text-white">
        <Link href="/" passHref>
          <span className="mr-5 text-2xl text-white cursor-pointer">Home</span>
        </Link>
        <Link href="/about" passHref>
          <span className="mr-5 text-2xl text-white cursor-pointer">About</span>
        </Link>
        <Link href="/properties" passHref>
          <span className="mr-20 text-2xl text-white cursor-pointer">Properties</span>
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}
