import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu, Search, User } from "lucide-react";

 function Navbar() {
  return (
    <header className="bg-white">
      {/* Top Navbar */}
      <div className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-900">SEW <span className="text-blue-700">connect</span><span className="text-blue-900">→</span></h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="text-gray-700 flex items-center space-x-1">
                    Location <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {/* Add location options here */}
                  <DropdownMenuItem>Option 1</DropdownMenuItem>
                  <DropdownMenuItem>Option 2</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="text-gray-700 flex items-center space-x-1">
                    Product <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {/* Add product options here */}
                  <DropdownMenuItem>Option 1</DropdownMenuItem>
                  <DropdownMenuItem>Option 2</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="relative ml-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  className="pl-10 w-64 md:w-72 lg:w-80 border-gray-300"
                  placeholder="Search for product, service,vendors..."
                />
              </div>

              <div className="h-6 w-px bg-blue-300 mx-4" /> {/* Blue divider */}

              <Button className="bg-red-600 text-white">Free Listing</Button>
              <Button className="bg-black text-white ml-2">We Are Hiring</Button>
              <Button variant="outline" className="ml-2 flex items-center space-x-1">
                <User className="h-4 w-4" /> <span>Login</span>
              </Button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="md:hidden flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  className="pl-10 w-full max-w-xs border-gray-300"
                  placeholder="Search..."
                />
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="p-0">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-4 mt-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-full justify-between">
                          Location <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full">
                        <DropdownMenuItem>Option 1</DropdownMenuItem>
                        <DropdownMenuItem>Option 2</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-full justify-between">
                          Product <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full">
                        <DropdownMenuItem>Option 1</DropdownMenuItem>
                        <DropdownMenuItem>Option 2</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <Button className="bg-red-600 text-white">Free Listing</Button>
                    <Button className="bg-black text-white">We Are Hiring</Button>
                    <Button variant="outline" className="flex items-center justify-center space-x-1">
                      <User className="h-4 w-4" /> <span>Login</span>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="bg-red-600 text-white">
        <div className="container mx-auto  sm:px-6 lg:px-0">
          <div className="flex items-center space-x-6 h-10 overflow-x-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white p-0 flex items-center">
                  Categories (See All) <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {/* Add category options here */}
                <DropdownMenuItem>Category 1</DropdownMenuItem>
                <DropdownMenuItem>Category 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#" className="whitespace-nowrap hover:underline">Home</a>
            <a href="#" className="whitespace-nowrap hover:underline">Products</a>
            <a href="#" className="whitespace-nowrap hover:underline">Offers</a>
            <a href="#" className="whitespace-nowrap hover:underline">About Us</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;