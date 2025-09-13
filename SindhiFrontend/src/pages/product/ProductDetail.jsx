import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Heart,
  Star,
  ShoppingCart,
  Share2,
  MessageCircle,
  Phone,
  Mail,
  Truck,
  Shield,
  Award,
  Users,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Check,
  X,
  Info,
} from "lucide-react";
import Layout from "../../layout/Layout";

function ProductDetail() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = {
    id: 1,
    name: "Premium Cotton Textiles",
    description:
      "High-quality cotton fabrics for wholesale distribution. These premium cotton textiles are sourced from the finest cotton farms and processed using advanced techniques to ensure superior quality and durability. Perfect for clothing manufacturers, home textile producers, and craft enthusiasts.",
    price: "₹120-150",
    originalPrice: "₹200-250",
    unit: "piece",
    moq: 500,
    delivery: "7-10 days",
    rating: 4.8,
    reviews: 124,
    vendor: {
      name: "Sindhi Textiles Co.",
      since: "2015",
      location: "Mumbai, Maharashtra",
      totalProducts: 450,
      rating: 4.7,
      responseTime: "Within 2 hours",
      phone: "+91 98765 43210",
      email: "info@sindhitextiles.com",
      verified: true,
    },
    images: [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582735689369-4fe89db99592?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=600&h=600&fit=crop",
    ],
    category: "Textiles",
    brand: "Premium Textiles",
    badges: ["Premium Quality", "Fast Delivery", "Verified Supplier"],
    inStock: true,
    stockCount: 5000,
    discount: 25,
    freeShipping: true,
    specifications: {
      Material: "100% Cotton",
      "Thread Count": "200-300 TC",
      Width: "44-45 inches",
      Weight: "150-200 GSM",
      "Color Options": "50+ Colors Available",
      Pattern: "Plain, Printed, Dyed",
      "Care Instructions": "Machine Washable",
      Origin: "India",
    },
    features: [
      "Premium quality 100% cotton fabric",
      "Soft and comfortable texture",
      "Durable and long-lasting",
      "Available in multiple colors and patterns",
      "Suitable for various applications",
      "Eco-friendly production process",
      "Quality tested and certified",
      "Bulk quantity discounts available",
    ],
    shippingInfo: {
      freeShipping: true,
      freeShippingMinOrder: 1000,
      estimatedDelivery: "7-10 business days",
      shippingCost: "₹50 per kg",
      packagingDetails: "Securely packed in moisture-resistant packaging",
    },
    returnPolicy: {
      returnable: true,
      returnWindow: "15 days",
      conditions: "Items must be unused and in original packaging",
      returnShipping: "Buyer pays return shipping",
    },
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Silk Blend Fabric",
      price: "₹200-300/meter",
      image:
        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=300&fit=crop",
      rating: 4.6,
      vendor: "Silk Weavers Ltd.",
    },
    {
      id: 3,
      name: "Organic Cotton Blend",
      price: "₹150-200/piece",
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=300&fit=crop",
      rating: 4.7,
      vendor: "Eco Textiles Co.",
    },
    {
      id: 4,
      name: "Designer Print Fabric",
      price: "₹180-250/meter",
      image:
        "https://images.unsplash.com/photo-1582735689369-4fe89db99592?w=300&h=300&fit=crop",
      rating: 4.5,
      vendor: "Creative Prints",
    },
    {
      id: 5,
      name: "Denim Cotton Fabric",
      price: "₹160-220/meter",
      image:
        "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=300&h=300&fit=crop",
      rating: 4.8,
      vendor: "Denim Masters",
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Excellent quality cotton fabric. The texture is very soft and the colors are vibrant. Highly recommended for clothing manufacturing.",
      verified: true,
    },
    {
      id: 2,
      name: "Priya Sharma",
      rating: 4,
      date: "1 month ago",
      comment:
        "Good quality fabric at reasonable price. Fast delivery and well-packaged. Will order again.",
      verified: true,
    },
    {
      id: 3,
      name: "Mohammed Ali",
      rating: 5,
      date: "3 weeks ago",
      comment:
        "Perfect for our textile business. Consistent quality across all orders. Great vendor to work with.",
      verified: true,
    },
  ];

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-6 py-4">
            <nav className="text-sm text-gray-600">
              <span className="hover:text-blue-600 cursor-pointer">Home</span>
              <span className="mx-2">/</span>
              <span className="hover:text-blue-600 cursor-pointer">
                {product.category}
              </span>
              <span className="mx-2">/</span>
              <span className="text-gray-800 font-medium">{product.name}</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative bg-white rounded-xl overflow-hidden shadow-md">
                <img
                  src={product.images[selectedImageIndex]}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                {product.discount > 0 && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.discount}% OFF
                  </div>
                )}
                {product.freeShipping && (
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Free Shipping
                  </div>
                )}
              </div>

              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index
                        ? "border-blue-600"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-500 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-lg font-semibold">
                      {product.rating}
                    </span>
                    <span className="ml-2 text-gray-600">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {product.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded-full"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl font-bold text-red-600">
                    {product.price}
                    <span className="text-lg text-gray-500">
                      /{product.unit}
                    </span>
                  </div>
                  {product.originalPrice && (
                    <div className="text-xl text-gray-400 line-through">
                      {product.originalPrice}
                    </div>
                  )}
                  {product.discount > 0 && (
                    <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Save {product.discount}%
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Delivery: {product.delivery}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    <span>
                      {product.freeShipping ? "Free Shipping" : "Paid Shipping"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span>MOQ: {product.moq} pieces</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-green-600">
                      In Stock ({product.stockCount} available)
                    </span>
                  </div>
                </div>

                {/* Quantity and Actions */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={decrementQuantity}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 font-semibold">{quantity}</span>
                    <button
                      onClick={incrementQuantity}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.unit}(s)
                  </span>
                </div>

                <div className="flex gap-3 mb-4">
                  <button className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                    Send Inquiry
                  </button>
                  <button className="flex-1 border border-red-600 text-red-600 py-3 rounded-lg hover:bg-red-50 transition-colors font-semibold">
                    Get Quote
                  </button>
                </div>

                <div className="flex justify-center gap-6 pt-4 border-t">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      isWishlisted
                        ? "text-red-600 bg-red-50"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        isWishlisted ? "fill-current" : ""
                      }`}
                    />
                    {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors">
                    <Share2 className="w-5 h-5" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="bg-white rounded-xl shadow-md mb-8">
            <div className="border-b">
              <nav className="flex space-x-8 px-6">
                {["description", "specifications", "shipping", "reviews"].map(
                  (tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab
                          ? "border-blue-600 text-blue-600"
                          : "border-transparent text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  )
                )}
              </nav>
            </div>

            <div className="p-6">
              {activeTab === "description" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Product Description
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {product.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "specifications" && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Product Specifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between py-3 border-b border-gray-100"
                        >
                          <span className="font-medium text-gray-700">
                            {key}:
                          </span>
                          <span className="text-gray-600">{value}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              {activeTab === "shipping" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Shipping Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Truck className="w-5 h-5 text-blue-600" />
                          <div>
                            <p className="font-semibold">Free Shipping</p>
                            <p className="text-sm text-gray-600">
                              On orders above ₹
                              {product.shippingInfo.freeShippingMinOrder}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-green-600" />
                          <div>
                            <p className="font-semibold">Estimated Delivery</p>
                            <p className="text-sm text-gray-600">
                              {product.shippingInfo.estimatedDelivery}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Shield className="w-5 h-5 text-purple-600" />
                          <div>
                            <p className="font-semibold">Secure Packaging</p>
                            <p className="text-sm text-gray-600">
                              {product.shippingInfo.packagingDetails}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Info className="w-5 h-5 text-orange-600" />
                          <div>
                            <p className="font-semibold">Shipping Cost</p>
                            <p className="text-sm text-gray-600">
                              {product.shippingInfo.shippingCost} (if not free)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Return Policy
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-green-600" />
                          <span>
                            {product.returnPolicy.returnWindow} return window
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Info className="w-5 h-5 text-blue-600" />
                          <span>Items must be unused</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-3">
                        {product.returnPolicy.conditions}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Customer Reviews</h3>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Write Review
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-gray-900 mb-2">
                          {product.rating}
                        </div>
                        <div className="flex justify-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.floor(product.rating)
                                  ? "text-yellow-500 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-600">
                          {product.reviews} reviews
                        </p>
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-4">
                      {reviews.map((review) => (
                        <div
                          key={review.id}
                          className="border-b border-gray-100 pb-4"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold">
                                  {review.name}
                                </span>
                                {review.verified && (
                                  <span className="bg-green-100 text-green-800 px-2 py-0.5 text-xs rounded-full">
                                    Verified Purchase
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < review.rating
                                          ? "text-yellow-500 fill-current"
                                          : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-600">
                                  {review.date}
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Vendor Information */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Vendor Information</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-600">
                      {product.vendor.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      {product.vendor.name}
                      {product.vendor.verified && (
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded-full">
                          Verified
                        </span>
                      )}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>{product.vendor.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{product.vendor.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        <span>Since {product.vendor.since}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-semibold text-gray-900">
                      {product.vendor.totalProducts}
                    </div>
                    <div className="text-sm text-gray-600">Total Products</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-semibold text-gray-900">
                      {product.vendor.responseTime}
                    </div>
                    <div className="text-sm text-gray-600">Response Time</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <span>{product.vendor.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <span>{product.vendor.email}</span>
                </div>
                <div className="flex gap-3 pt-4">
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Contact Vendor
                  </button>
                  <button className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                    View All Products
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Related Products</h2>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                View All →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="border rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
                >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {relatedProduct.name}
                    </h4>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">
                        {relatedProduct.rating}
                      </span>
                    </div>
                    <p className="text-red-600 font-semibold mb-2">
                      {relatedProduct.price}
                    </p>
                    <p className="text-sm text-gray-600">
                      {relatedProduct.vendor}
                    </p>
                    <button className="w-full mt-3 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm">
                      View Product
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetail;
