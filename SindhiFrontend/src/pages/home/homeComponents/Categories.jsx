import React from 'react';

const Categories = () => {
  return (
    <div className="w-full bg-gray-50 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Products */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v12z"/>
                </svg>
              </div>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                New
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Products</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Discover authentic Sindhi products from community businesses
            </p>
            
            <button className="w-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 py-3 rounded-xl font-medium transition-all duration-300">
              Explore Product
            </button>
          </div>

          {/* Jobs */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 bg-gray-200 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7C14.7 7 14.4 7.1 14.1 7.3L12.5 8.5C12.2 8.7 11.8 8.7 11.5 8.5L9.9 7.3C9.6 7.1 9.3 7 9 7H3V9H8.5L10.5 10.5C11.3 11.1 12.7 11.1 13.5 10.5L15.5 9H21ZM7 12V22H9V16H15V22H17V12H7Z"/>
                </svg>
              </div>
              <div className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                Verified
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Jobs</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Find career opportunities within the Sindhi business network
            </p>
            
            <button className="w-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 py-3 rounded-xl font-medium transition-all duration-300">
              Find Jobs
            </button>
          </div>

          {/* Services */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                </svg>
              </div>
              <div className="bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                New
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Services</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Professional services from trusted community members
            </p>
            
            <button className="w-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 py-3 rounded-xl font-medium transition-all duration-300">
              Hire Services
            </button>
          </div>

          {/* Members */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 bg-gray-200 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4C18.2 4 20 5.8 20 8S18.2 12 16 12 12 10.2 12 8 13.8 4 16 4M16 14C20.4 14 24 15.8 24 18V20H8V18C8 15.8 11.6 14 16 14M12.5 11.5C14.4 11.5 16 9.9 16 8S14.4 4.5 12.5 4.5 9 6.1 9 7.5 10.6 11.5 12.5 11.5M12.5 13C8.1 13 4.5 14.8 4.5 17V19.5H23V17C23 14.8 19.4 13 12.5 13Z"/>
                </svg>
              </div>
              <div className="bg-orange-200 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                Verified
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Members</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Connect with Sindhi professionals and entrepreneurs worldwide
            </p>
            
            <button className="w-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 py-3 rounded-xl font-medium transition-all duration-300">
              Browse Members
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;