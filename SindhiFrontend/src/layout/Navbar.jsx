import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu, Search, User } from "lucide-react";

function Navbar() {
  return (
    <header className="bg-white shadow">
      {/* 🔹 Top Navbar */}
      <div className="border-b">
        <div className="max-w-8xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="assets/images/logo2.png"
              alt="Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Location */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="text-gray-700 flex items-center py-5"
                >
                  Location <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Option 1</DropdownMenuItem>
                <DropdownMenuItem>Option 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Product */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="text-gray-700 flex items-center py-5"
                >
                  Product <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Option 1</DropdownMenuItem>
                <DropdownMenuItem>Option 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                className="pl-10 w-72 lg:w-80 border-gray-300 py-5"
                placeholder="Search for product, service, vendors..."
              />
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-300" />

            {/* Buttons */}
            <Button className="bg-red-600 text-white py-5">Free Listing</Button>
            <Button className="bg-black text-white py-5">We Are Hiring</Button>
            <Button
              variant="outline"
              className="flex items-center space-x-1 text-gray-700 py-5"
            >
              <User className="h-4 w-4" /> <span>Login</span>
            </Button>
          </div>

          {/* 🔹 Mobile Menu */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Search in drawer */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="p-0">
                  <Search className="h-6 w-6 text-gray-700" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="p-4">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    className="pl-10 w-full border-gray-300"
                    placeholder="Search products, vendors..."
                  />
                </div>
              </SheetContent>
            </Sheet>

            {/* Hamburger Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="p-0">
                  <Menu className="h-6 w-6 text-gray-700" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[280px] sm:w-[360px] bg-white"
              >
                <div className="flex flex-col space-y-4 mt-6 p-4 sm:p-4">

                  {/* Dropdown buttons */}
                  <Button variant="outline" className="w-full justify-between">
                    Location <ChevronDown className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    Product <ChevronDown className="h-4 w-4" />
                  </Button>

                  {/* Action Buttons */}
                  <Button className="bg-red-600 text-white w-full">
                    Free Listing
                  </Button>
                  <Button className="bg-black text-white w-full">
                    We Are Hiring
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center justify-center w-full"
                  >
                    <User className="h-4 w-4 mr-2" /> Login
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Navbar (Gray Background) */}
      <div className="bg-[#053951] text-white">
        <div className="max-w-7xl mx-auto flex items-center space-x-6 h-15 px-4 sm:px-4 lg:px-8 overflow-x-auto text-sm sm:text-base">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center text-white text-sm font-medium whitespace-nowrap hover:underline focus:outline-none">
                Categories <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Category 1</DropdownMenuItem>
              <DropdownMenuItem>Category 2</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="#" className="whitespace-nowrap hover:underline">
            Home
          </a>
          <a href="/products" className="whitespace-nowrap hover:underline">
            Products
          </a>
          <a href="/services" className="whitespace-nowrap hover:underline">
            Services
          </a>
          <a href="/vendor" className="whitespace-nowrap hover:underline">
            Vendors
          </a>
          <a href="#" className="whitespace-nowrap hover:underline">
            About Us
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
