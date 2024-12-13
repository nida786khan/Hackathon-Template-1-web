import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import React from "react";
import { NavMenu } from "../navbar.types";
import { MenuList } from "./MenuList";
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { MenuItem } from "./MenuItem";
import Image from "next/image";
import InputGroup from "@/components/ui/input-group";
import ResTopNavbar from "./ResTopNavbar";
import CartBtn from "./CartBtn";

const data: NavMenu = [
  {
    id: 1,
    label: "Shop",
    type: "MenuList",
    children: [
      { id: 11, label: "Men's clothes", url: "/shop#men-clothes" },
      { id: 12, label: "Women's clothes", url: "/shop#women-clothes" },
      { id: 13, label: "Kids clothes", url: "/shop#kids-clothes" },
      { id: 14, label: "Bags and Shoes", url: "/shop#bag-shoes" },
    ],
  },
  { id: 2, type: "MenuItem", label: "On Sale", url: "/shop#on-sale" },
  { id: 3, type: "MenuItem", label: "New Arrivals", url: "/shop#new-arrivals" },
  { id: 4, type: "MenuItem", label: "Brands", url: "/shop#brands" },
];

const TopNavbar = () => {
  return (
    <nav className="sticky top-0 bg-white z-20">
      <div className="flex relative max-w-frame mx-auto items-center justify-between py-5 px-4 md:px-0">
        {/* Mobile/Responsive Navbar */}
        <div className="flex items-center">
          <div className="block md:hidden mr-4">
            <ResTopNavbar data={data} />
          </div>
          <Link href="/" className={cn(integralCF.className, "text-2xl lg:text-[32px] mb-2 mr-3 lg:mr-10")}>
            SHOP.CO
          </Link>
        </div>

        {/* Main Navigation Menu */}
        <NavigationMenu className="hidden md:flex mr-2 lg:mr-7">
          <NavigationMenuList>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                {item.type === "MenuItem" ? (
                  <MenuItem label={item.label} url={item.url} />
                ) : (
                  <MenuList data={item.children} label={item.label} />
                )}
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search Input */}
        <InputGroup className="hidden md:flex bg-[#F0F0F0] mr-3 lg:mr-10">
          <InputGroup.Text>
            <Image priority src="/icons/search.svg" height={20} width={20} alt="search" />
          </InputGroup.Text>
          <InputGroup.Input type="search" name="search" placeholder="Search for products..." className="bg-transparent" />
        </InputGroup>

        {/* Cart and User Icons */}
        <div className="flex items-center">
          <Link href="/search" className="block md:hidden mr-[14px] p-1">
            <Image priority src="/icons/search-black.svg" height={22} width={22} alt="search" />
          </Link>
          <CartBtn />
          <Link href="/#signin" className="p-1">
            <Image priority src="/icons/user.svg" height={22} width={22} alt="user" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
