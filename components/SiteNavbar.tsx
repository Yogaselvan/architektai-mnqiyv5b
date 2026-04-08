"use client";

import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem,
  NavbarMenuToggle, NavbarMenu, NavbarMenuItem,
  Button, Link,
} from "@heroui/react";
import { useState } from "react";

export function SiteNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} maxWidth="xl"
      classNames={{ base: "bg-background/80 backdrop-blur-lg border-b border-divider fixed top-0 z-50", wrapper: "max-w-7xl px-6" }}>
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-3 no-underline">
            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=226,fit=crop,q=95/YZ9Wyx0bjvt63wZg/364196773_854821369552145_8061232822857158430_n-removebg-preview-mjEPOV09ryS2k7r4.png" alt="Architektai" className="h-10 w-auto object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            <span className="font-bold text-lg text-foreground">Architektai</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/" className="text-sm font-medium">Pradžia</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/konsultacijos" className="text-sm font-medium">Architekto konsultacijos</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/teritoriju-planavimas" className="text-sm font-medium">Teritorijų planavimas</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/statiniu-projektavimas" className="text-sm font-medium">Statinių projektavimas</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/namo-pridavimas" className="text-sm font-medium">Namo pridavimas</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Button as={Link} href="/contact" color="primary" variant="flat" radius="full" size="sm">Kontaktai</Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="pt-6">
        <NavbarMenuItem key="0">
          <Link className="w-full text-foreground" href="/" size="lg">Pradžia</Link>
        </NavbarMenuItem>
        <NavbarMenuItem key="1">
          <Link className="w-full text-foreground" href="/konsultacijos" size="lg">Architekto konsultacijos</Link>
        </NavbarMenuItem>
        <NavbarMenuItem key="2">
          <Link className="w-full text-foreground" href="/teritoriju-planavimas" size="lg">Teritorijų planavimas</Link>
        </NavbarMenuItem>
        <NavbarMenuItem key="3">
          <Link className="w-full text-foreground" href="/statiniu-projektavimas" size="lg">Statinių projektavimas</Link>
        </NavbarMenuItem>
        <NavbarMenuItem key="4">
          <Link className="w-full text-foreground" href="/namo-pridavimas" size="lg">Namo pridavimas</Link>
        </NavbarMenuItem>
        <NavbarMenuItem key="5">
          <Link className="w-full text-foreground" href="/contact" size="lg">Kontaktai</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
