import React from 'react'

const Test = () => {
  return (
     <div className="bg-[#242526] text-white rounded-2xl p-4 w-full max-w-xl mx-auto shadow">
      {/* Profile + Input */}
      <div className="flex items-center space-x-3">
        <img
          src="https://via.placeholder.com/40"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
        <input
          type="text"
          placeholder="What's on your mind, Muhammad?"
          className="flex-1 bg-[#3A3B3C] rounded-full px-4 py-2 outline-none text-gray-200 placeholder-gray-400"
        />
      </div>

      {/* Divider */}
      <div className="border-b border-gray-700 my-3"></div>

      {/* Options */}
     
    </div>
  );
}

export default Test