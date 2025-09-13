import React, { useState } from "react";
import {
  MapPin,
  Clock,
  SlidersHorizontal,
  Grid,
  List,
  Heart,
  Star,
  Filter,
  Search,
  ShoppingCart,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";
import Layout from "../../layout/Layout";

function Product() {
  const products = [
    {
      id: 1,
      name: "Premium Cotton Textiles",
      description: "High-quality cotton fabrics for wholesale distribution",
      price: "₹120-150",
      originalPrice: "₹200-250",
      unit: "piece",
      moq: "500 pieces",
      delivery: "7-10 days",
      rating: 4.8,
      reviews: 124,
      vendor: "Sindhi Textiles Co.",
      location: "Mumbai, Maharashtra",
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=300&fit=crop",
      category: "Textiles",
      brand: "Premium Textiles",
      badges: ["Premium Quality", "Fast Delivery"],
      inStock: true,
      discount: 25,
      freeShipping: true,
    },
    {
      id: 2,
      name: "Traditional Handicrafts",
      description: "Authentic Sindhi handicrafts and decorative items",
      price: "₹80-120",
      originalPrice: "₹100-150",
      unit: "piece",
      moq: "100 pieces",
      delivery: "5-7 days",
      rating: 4.7,
      reviews: 89,
      vendor: "Heritage Crafts Ltd.",
      location: "Jodhpur, Rajasthan",
      image:
        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop",
      category: "Handicrafts",
      brand: "Heritage Crafts",
      badges: ["Authentic", "Handmade"],
      inStock: true,
      discount: 20,
      freeShipping: false,
    },
    {
      id: 3,
      name: "Organic Spices Bundle",
      description: "Premium quality organic spices for wholesale distribution",
      price: "₹200-300",
      originalPrice: "₹250-350",
      unit: "kg",
      moq: "50 kg",
      delivery: "3-5 days",
      rating: 4.9,
      reviews: 203,
      vendor: "Spice Masters Inc.",
      location: "Delhi, Delhi",
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop",
      category: "Food & Spices",
      brand: "Spice Masters",
      badges: ["Organic", "Premium"],
      inStock: true,
      discount: 15,
      freeShipping: true,
    },
    {
      id: 4,
      name: "Designer Jewelry Set",
      description: "Elegant jewelry pieces with traditional designs",
      price: "₹500-800",
      originalPrice: "₹700-1000",
      unit: "set",
      moq: "20 sets",
      delivery: "10-15 days",
      rating: 4.6,
      reviews: 156,
      vendor: "Royal Jewelers",
      location: "Jaipur, Rajasthan",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
      category: "Jewelry",
      brand: "Royal Collection",
      badges: ["Designer", "Premium"],
      inStock: false,
      discount: 30,
      freeShipping: true,
    },
    {
      id: 5,
      name: "Leather Goods Collection",
      description: "Genuine leather bags, wallets and accessories",
      price: "₹300-600",
      originalPrice: "₹400-700",
      unit: "piece",
      moq: "100 pieces",
      delivery: "7-12 days",
      rating: 4.5,
      reviews: 78,
      vendor: "Leather Craft Co.",
      location: "Kanpur, Uttar Pradesh",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
      category: "Leather Goods",
      brand: "Leather Craft",
      badges: ["Genuine Leather", "Handcrafted"],
      inStock: true,
      discount: 25,
      freeShipping: false,
    },
    {
      id: 6,
      name: "Electronic Accessories",
      description: "Mobile phone cases, chargers and electronic accessories",
      price: "₹50-200",
      originalPrice: "₹80-250",
      unit: "piece",
      moq: "1000 pieces",
      delivery: "5-8 days",
      rating: 4.4,
      reviews: 267,
      vendor: "Tech Solutions Ltd.",
      location: "Bengaluru, Karnataka",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
      category: "Electronics",
      brand: "TechSol",
      badges: ["Tech", "Bulk Orders"],
      inStock: true,
      discount: 35,
      freeShipping: true,
    },
    {
      id: 7,
      name: "Home Decor Items",
      description: "Beautiful home decoration pieces and furnishing items",
      price: "₹150-400",
      originalPrice: "₹200-500",
      unit: "piece",
      moq: "50 pieces",
      delivery: "6-9 days",
      rating: 4.7,
      reviews: 145,
      vendor: "Home Style Co.",
      location: "Ahmedabad, Gujarat",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      category: "Home Decor",
      brand: "HomeStyle",
      badges: ["Stylish", "Modern"],
      inStock: true,
      discount: 20,
      freeShipping: false,
    },
    {
      id: 8,
      name: "Ayurvedic Products",
      description: "Natural ayurvedic medicines and health supplements",
      price: "₹100-250",
      originalPrice: "₹150-300",
      unit: "bottle",
      moq: "200 bottles",
      delivery: "4-6 days",
      rating: 4.8,
      reviews: 312,
      vendor: "Ayur Wellness",
      location: "Haridwar, Uttarakhand",
      image:
        "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop",
      category: "Health & Wellness",
      brand: "AyurWell",
      badges: ["Natural", "Certified"],
      inStock: true,
      discount: 18,
      freeShipping: true,
    },
  ];

  const categories = [
    { name: "All", count: products.length },
    { name: "Textiles", count: 12 },
    { name: "Handicrafts", count: 8 },
    { name: "Food & Spices", count: 15 },
    { name: "Jewelry", count: 6 },
    { name: "Leather Goods", count: 9 },
    { name: "Electronics", count: 24 },
    { name: "Home Decor", count: 11 },
    { name: "Health & Wellness", count: 7 },
  ];

  const brands = [
    { name: "Premium Textiles", count: 5 },
    { name: "Heritage Crafts", count: 8 },
    { name: "Spice Masters", count: 12 },
    { name: "Royal Collection", count: 4 },
    { name: "Leather Craft", count: 7 },
    { name: "TechSol", count: 15 },
    { name: "HomeStyle", count: 6 },
    { name: "AyurWell", count: 9 },
  ];

  const priceRanges = [
    { label: "Under ₹100", min: 0, max: 100 },
    { label: "₹100 - ₹300", min: 100, max: 300 },
    { label: "₹300 - ₹500", min: 300, max: 500 },
    { label: "₹500 - ₹1000", min: 500, max: 1000 },
    { label: "Above ₹1000", min: 1000, max: Infinity },
  ];

  const discountRanges = [
    { label: "10% and above", min: 10 },
    { label: "20% and above", min: 20 },
    { label: "30% and above", min: 30 },
    { label: "40% and above", min: 40 },
  ];

  const ratingFilters = [4, 3, 2, 1];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedDiscounts, setSelectedDiscounts] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [sortOption, setSortOption] = useState("Latest added");
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [showFreeShippingOnly, setShowFreeShippingOnly] = useState(false);

  // Filter section toggles
  const [showCategories, setShowCategories] = useState(true);
  const [showBrands, setShowBrands] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [showDiscount, setShowDiscount] = useState(true);
  const [showRatings, setShowRatings] = useState(true);

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const togglePriceRange = (range) => {
    setSelectedPriceRanges((prev) =>
      prev.some((r) => r.label === range.label)
        ? prev.filter((r) => r.label !== range.label)
        : [...prev, range]
    );
  };

  const toggleDiscount = (discount) => {
    setSelectedDiscounts((prev) =>
      prev.includes(discount)
        ? prev.filter((d) => d !== discount)
        : [...prev, discount]
    );
  };

  const toggleRating = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategory("All");
    setSelectedBrands([]);
    setSelectedPriceRanges([]);
    setSelectedDiscounts([]);
    setSelectedRatings([]);
    setSearchQuery("");
    setShowInStockOnly(false);
    setShowFreeShippingOnly(false);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStock = !showInStockOnly || product.inStock;
    const matchesShipping = !showFreeShippingOnly || product.freeShipping;
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);

    let matchesPrice = selectedPriceRanges.length === 0;
    if (selectedPriceRanges.length > 0) {
      const productPrice = parseInt(
        product.price.split("-")[0].replace("₹", "")
      );
      matchesPrice = selectedPriceRanges.some(
        (range) =>
          productPrice >= range.min &&
          (range.max === Infinity || productPrice < range.max)
      );
    }

    let matchesDiscount = selectedDiscounts.length === 0;
    if (selectedDiscounts.length > 0) {
      matchesDiscount = selectedDiscounts.some(
        (discount) => product.discount >= discount
      );
    }

    let matchesRating = selectedRatings.length === 0;
    if (selectedRatings.length > 0) {
      matchesRating = selectedRatings.some(
        (rating) => product.rating >= rating
      );
    }

    return (
      matchesCategory &&
      matchesSearch &&
      matchesStock &&
      matchesShipping &&
      matchesBrand &&
      matchesPrice &&
      matchesDiscount &&
      matchesRating
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "Name A-Z") return a.name.localeCompare(b.name);
    if (sortOption === "Name Z-A") return b.name.localeCompare(a.name);
    if (sortOption === "Price Low to High")
      return (
        parseInt(a.price.split("-")[0].replace("₹", "")) -
        parseInt(b.price.split("-")[0].replace("₹", ""))
      );
    if (sortOption === "Price High to Low")
      return (
        parseInt(b.price.split("-")[0].replace("₹", "")) -
        parseInt(a.price.split("-")[0].replace("₹", ""))
      );
    if (sortOption === "Rating High to Low") return b.rating - a.rating;
    if (sortOption === "Discount High to Low") return b.discount - a.discount;
    return b.id - a.id; // Latest added
  });

  return (
    <Layout>
      <section className="bg-gray-50 min-h-screen py-10 px-6">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Marketplace Products
          </h1>
          <p className="text-gray-600">
            We have{" "}
            <span className="font-semibold">{sortedProducts.length}</span>{" "}
            products available
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 container mx-auto">
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-4">
            {/* Search */}
            <aside className="bg-white shadow-md rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
                Search Products
              </h2>
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </aside>

            {/* Clear Filters */}
            {(selectedBrands.length > 0 ||
              selectedPriceRanges.length > 0 ||
              selectedDiscounts.length > 0 ||
              selectedRatings.length > 0 ||
              showInStockOnly ||
              showFreeShippingOnly) && (
              <aside className="bg-white shadow-md rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Active Filters
                  </h2>
                  <button
                    onClick={clearAllFilters}
                    className="text-red-600 text-sm hover:text-red-700 flex items-center gap-1"
                  >
                    <X className="w-4 h-4" /> Clear All
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedBrands.map((brand) => (
                    <span
                      key={brand}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs flex items-center gap-1"
                    >
                      {brand}
                      <X
                        className="w-3 h-3 cursor-pointer"
                        onClick={() => toggleBrand(brand)}
                      />
                    </span>
                  ))}
                  {selectedPriceRanges.map((range) => (
                    <span
                      key={range.label}
                      className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs flex items-center gap-1"
                    >
                      {range.label}
                      <X
                        className="w-3 h-3 cursor-pointer"
                        onClick={() => togglePriceRange(range)}
                      />
                    </span>
                  ))}
                </div>
              </aside>
            )}

            {/* Categories */}
            <aside className="bg-white shadow-md rounded-xl p-6">
              <div
                className="flex justify-between items-center mb-4 cursor-pointer"
                onClick={() => setShowCategories(!showCategories)}
              >
                <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
                  Product Categories
                </h2>
                {showCategories ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
              {showCategories && (
                <ul className="space-y-3">
                  {categories.map((cat, i) => (
                    <li
                      key={i}
                      className={`flex justify-between items-center cursor-pointer transition ${
                        selectedCategory === cat.name
                          ? "text-blue-600 font-semibold"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                      onClick={() => setSelectedCategory(cat.name)}
                    >
                      <span>{cat.name}</span>
                      <span className="bg-gray-100 px-2 py-0.5 rounded text-sm text-gray-600">
                        {cat.count}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </aside>

            {/* Brands */}
            <aside className="bg-white shadow-md rounded-xl p-6">
              <div
                className="flex justify-between items-center mb-4 cursor-pointer"
                onClick={() => setShowBrands(!showBrands)}
              >
                <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
                  Brands
                </h2>
                {showBrands ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
              {showBrands && (
                <ul className="space-y-3">
                  {brands.map((brand, i) => (
                    <li key={i} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`brand-${i}`}
                        checked={selectedBrands.includes(brand.name)}
                        onChange={() => toggleBrand(brand.name)}
                        className="mr-3"
                      />
                      <label
                        htmlFor={`brand-${i}`}
                        className="text-gray-700 cursor-pointer flex-1"
                      >
                        {brand.name}
                      </label>
                      <span className="text-xs text-gray-500">
                        ({brand.count})
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </aside>

            {/* Price Filter */}
            <aside className="bg-white shadow-md rounded-xl p-6">
              <div
                className="flex justify-between items-center mb-4 cursor-pointer"
                onClick={() => setShowPrice(!showPrice)}
              >
                <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
                  Price Range
                </h2>
                {showPrice ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
              {showPrice && (
                <ul className="space-y-3">
                  {priceRanges.map((range, i) => (
                    <li key={i} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`price-${i}`}
                        checked={selectedPriceRanges.some(
                          (r) => r.label === range.label
                        )}
                        onChange={() => togglePriceRange(range)}
                        className="mr-3"
                      />
                      <label
                        htmlFor={`price-${i}`}
                        className="text-gray-700 cursor-pointer"
                      >
                        {range.label}
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </aside>

            {/* Discount Filter */}
            <aside className="bg-white shadow-md rounded-xl p-6">
              <div
                className="flex justify-between items-center mb-4 cursor-pointer"
                onClick={() => setShowDiscount(!showDiscount)}
              >
                <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
                  Discount
                </h2>
                {showDiscount ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
              {showDiscount && (
                <ul className="space-y-3">
                  {discountRanges.map((discount, i) => (
                    <li key={i} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`discount-${i}`}
                        checked={selectedDiscounts.includes(discount.min)}
                        onChange={() => toggleDiscount(discount.min)}
                        className="mr-3"
                      />
                      <label
                        htmlFor={`discount-${i}`}
                        className="text-gray-700 cursor-pointer"
                      >
                        {discount.label}
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </aside>

            {/* Rating Filter */}
            <aside className="bg-white shadow-md rounded-xl p-6">
              <div
                className="flex justify-between items-center mb-4 cursor-pointer"
                onClick={() => setShowRatings(!showRatings)}
              >
                <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
                  Customer Rating
                </h2>
                {showRatings ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
              {showRatings && (
                <ul className="space-y-3">
                  {ratingFilters.map((rating, i) => (
                    <li key={i} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`rating-${i}`}
                        checked={selectedRatings.includes(rating)}
                        onChange={() => toggleRating(rating)}
                        className="mr-3"
                      />
                      <label
                        htmlFor={`rating-${i}`}
                        className="text-gray-700 cursor-pointer flex items-center"
                      >
                        <div className="flex">
                          {[...Array(rating)].map((_, idx) => (
                            <Star
                              key={idx}
                              className="w-4 h-4 text-yellow-500 fill-current"
                            />
                          ))}
                          {[...Array(5 - rating)].map((_, idx) => (
                            <Star key={idx} className="w-4 h-4 text-gray-300" />
                          ))}
                        </div>
                        <span className="ml-2">& Up</span>
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </aside>

            {/* Additional Filters */}
            <aside className="bg-white shadow-md rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
                Additional Filters
              </h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="inStock"
                    checked={showInStockOnly}
                    onChange={(e) => setShowInStockOnly(e.target.checked)}
                    className="mr-3"
                  />
                  <label
                    htmlFor="inStock"
                    className="text-gray-700 cursor-pointer"
                  >
                    In Stock Only
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="freeShipping"
                    checked={showFreeShippingOnly}
                    onChange={(e) => setShowFreeShippingOnly(e.target.checked)}
                    className="mr-3"
                  />
                  <label
                    htmlFor="freeShipping"
                    className="text-gray-700 cursor-pointer"
                  >
                    Free Shipping
                  </label>
                </div>
              </div>
            </aside>
          </div>

          {/* Products Section */}
          <div className="md:col-span-3">
            {/* Filter + Sort Bar */}
            <div className="bg-white shadow-md rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 mb-6 border">
              {/* Clear Filters */}
              <button
                onClick={clearAllFilters}
                className="flex items-center gap-2 px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
              >
                <Filter className="w-5 h-5" />
                Clear Filters
              </button>

              {/* Showing results */}
              <div className="text-gray-600 text-sm">
                Showing <span className="font-semibold">1</span>–
                <span className="font-semibold">
                  {Math.min(itemsPerPage, sortedProducts.length)}
                </span>{" "}
                of{" "}
                <span className="font-semibold">{sortedProducts.length}</span>{" "}
                results
              </div>

              {/* Sort By */}
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Sort by:</span>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border rounded-md px-2 py-1 text-sm text-gray-700"
                >
                  <option>Latest added</option>
                  <option>Name A-Z</option>
                  <option>Name Z-A</option>
                  <option>Price Low to High</option>
                  <option>Price High to Low</option>
                  <option>Rating High to Low</option>
                  <option>Discount High to Low</option>
                </select>
              </div>

              {/* Show Items */}
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Show</span>
                <select
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  className="border rounded-md px-2 py-1 text-sm text-gray-700"
                >
                  <option value={8}>8 items</option>
                  <option value={12}>12 items</option>
                  <option value={24}>24 items</option>
                  <option value={48}>48 items</option>
                </select>
              </div>

              {/* Grid/List Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 border rounded-md ${
                    viewMode === "grid"
                      ? "bg-blue-600 text-white"
                      : "text-gray-600"
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 border rounded-md ${
                    viewMode === "list"
                      ? "bg-blue-600 text-white"
                      : "text-gray-600"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Product Cards */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.slice(0, itemsPerPage).map((product) => (
                  <div
                    key={product.id}
                    className="bg-white border rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
                  >
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      <span className="absolute bottom-2 right-2 bg-white px-2 py-1 text-xs rounded shadow flex items-center gap-1">
                        <Star className="w-4 h-4 text-[#FFCD29] fill-[#FFCD29]" />
                        {product.rating}
                      </span>
                      <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors">
                        <Heart className="w-4 h-4 text-gray-400 hover:text-red-500" />
                      </button>
                      {product.discount > 0 && (
                        <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                          {product.discount}% OFF
                        </div>
                      )}
                      {product.freeShipping && (
                        <div className="absolute top-8 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                          Free Shipping
                        </div>
                      )}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Out of Stock
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-4 flex flex-col flex-grow">
                      <h4 className="font-semibold text-lg text-gray-900 line-clamp-1">
                        {product.name}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {product.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 mt-3">
                        <span className="px-3 py-1 text-xs bg-[#E48F07] text-white rounded-full">
                          MOQ: {product.moq}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-600 border px-3 py-1 rounded-lg">
                          <Clock className="w-4 h-4" /> {product.delivery}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1 mt-2">
                        {product.badges.map((badge, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 px-2 py-1 text-xs rounded text-gray-700"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>

                      <div className="mt-3">
                        <div className="flex items-center gap-2">
                          <p className="text-red-600 font-semibold text-xl">
                            {product.price}
                            <span className="text-sm text-gray-500">
                              /{product.unit}
                            </span>
                          </p>
                          {product.originalPrice && (
                            <p className="text-gray-400 text-sm line-through">
                              {product.originalPrice}
                            </p>
                          )}
                        </div>
                      </div>

                      <p className="text-sm text-gray-800 py-1 font-semibold">
                        {product.vendor}
                      </p>

                      <p className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" /> {product.location}
                      </p>

                      <div className="flex gap-2 mt-4">
                        <button
                          className={`flex-1 py-2 rounded-lg text-sm font-medium transition duration-300 ${
                            product.inStock
                              ? "bg-red-600 hover:bg-red-700 text-white"
                              : "bg-gray-300 text-gray-500 cursor-not-allowed"
                          }`}
                          disabled={!product.inStock}
                        >
                          Enquire Now →
                        </button>
                        <button
                          className={`p-2 rounded-lg border transition duration-300 ${
                            product.inStock
                              ? "border-red-600 text-red-600 hover:bg-red-50"
                              : "border-gray-300 text-gray-400 cursor-not-allowed"
                          }`}
                          disabled={!product.inStock}
                        >
                          <ShoppingCart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {sortedProducts.slice(0, itemsPerPage).map((product) => (
                  <div
                    key={product.id}
                    className="bg-white border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex gap-6">
                      {/* Image Section */}
                      <div className="relative flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-48 h-32 object-cover rounded-lg"
                        />
                        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors">
                          <Heart className="w-4 h-4 text-gray-400 hover:text-red-500" />
                        </button>
                        {product.discount > 0 && (
                          <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                            {product.discount}% OFF
                          </div>
                        )}
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                            <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                              Out of Stock
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content Section */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-semibold text-gray-800">
                            {product.name}
                          </h3>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-[#FFCD29] fill-[#FFCD29]" />
                            <span className="ml-1 font-semibold text-gray-800">
                              {product.rating}
                            </span>
                            <span className="ml-1 text-gray-500">
                              ({product.reviews} reviews)
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-3">
                          {product.description}
                        </p>

                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{product.location}</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="px-3 py-1 text-xs bg-[#E48F07] text-white rounded-full">
                            MOQ: {product.moq}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-gray-600 border px-3 py-1 rounded-lg">
                            <Clock className="w-4 h-4" /> {product.delivery}
                          </span>
                          {product.freeShipping && (
                            <span className="px-3 py-1 text-xs bg-green-600 text-white rounded-full">
                              Free Shipping
                            </span>
                          )}
                          {product.badges.map((badge, idx) => (
                            <span
                              key={idx}
                              className="bg-gray-100 px-2 py-1 text-xs rounded text-gray-700"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>

                        <div className="flex justify-between items-center">
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="text-red-600 font-semibold text-2xl">
                                {product.price}
                                <span className="text-sm text-gray-500">
                                  /{product.unit}
                                </span>
                              </p>
                              {product.originalPrice && (
                                <p className="text-gray-400 text-lg line-through">
                                  {product.originalPrice}
                                </p>
                              )}
                            </div>
                            <p className="text-sm text-gray-800 font-semibold">
                              {product.vendor}
                            </p>
                          </div>

                          <div className="flex gap-3">
                            <button
                              className={`px-6 py-2 rounded-lg text-sm font-medium transition duration-300 ${
                                product.inStock
                                  ? "bg-red-600 hover:bg-red-700 text-white"
                                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                              }`}
                              disabled={!product.inStock}
                            >
                              Enquire Now →
                            </button>
                            <button
                              className={`p-2 rounded-lg border transition duration-300 ${
                                product.inStock
                                  ? "border-red-600 text-red-600 hover:bg-red-50"
                                  : "border-gray-300 text-gray-400 cursor-not-allowed"
                              }`}
                              disabled={!product.inStock}
                            >
                              <ShoppingCart className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {sortedProducts.length > itemsPerPage && (
              <div className="flex justify-center mt-8">
                <button className="px-6 py-2 bg-white border rounded-lg text-gray-600 hover:bg-gray-50 transition duration-300">
                  Load More Products
                </button>
              </div>
            )}

            {/* No Results */}
            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No products found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={clearAllFilters}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Product;
