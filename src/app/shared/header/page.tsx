import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export function Header() {
  return (
    <Navbar className="bg-black text-white py-8 px-4" fluid rounded>
      <NavbarBrand as={Link} href="">
       
        <span className="self-center whitespace-nowrap text-2xl tracking-wider font-semibold dark:text-white">Elevate Properties</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className="text-xl  text-white" >
        <NavbarLink className=" text-2xl text-white" href="#" active>
          Home
        </NavbarLink>
        <NavbarLink className=" text-2xl text-white" as={Link} href="#">
          About
        </NavbarLink>
        <NavbarLink className=" text-2xl text-white" href="#">Services</NavbarLink>
       
      </NavbarCollapse>
    </Navbar>
  );
}