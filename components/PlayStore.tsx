import React from "react";
import Image from "next/image";



const MedfinderPromo = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-orange-400 text-white px-6 md:px-16 py-12 w-11/12 mx-auto rounded-xl">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Save time and money with Medfinder
        </h2>
        <p className="text-lg mb-6">
          Discover a simpler way to access the medicines you need, medfinder connects you to nearby pharmacies, helping you to save time, reduce cost and get trusted care, fast and hassle-free. Experience convenience, affordability and availability like never before, <span className="font-bold">get started</span> today.
        </p>
        <button className="bg-white border border-gray-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Download Medfinder
        </button>
      </div>

      {/* Right Side - Mobile Image */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/Homepage 1.webp" // Move the uploaded image to public/assets
          alt="Medfinder App"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default MedfinderPromo;