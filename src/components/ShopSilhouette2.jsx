// eslint-disable-next-line no-unused-vars
import React from "react";
import BigImg from "../assets/Collection Page Images/18_098.jpg";
import Img1 from "../assets/Collection Page Images/ClassicSwim.webp";
import Img2 from "../assets/Collection Page Images/Wild-Steve-NoirLite-HiddenFace_3.webp";
import Img3 from "../assets/Collection Page Images/ShopRunSmall_800x.webp";
import Img4 from "../assets/Collection Page Images/WarmSteve-NoirLite-HiddenFace_2.webp";

// Hover images
import HoverImg1 from "../assets/Collection Page Images/NSNoirLiteSmall_800x.webp";
import HoverImg2 from "../assets/Collection Page Images/Wild-Steve-NoirLite-HiddenFace_1.webp";
import HoverImg3 from "../assets/Collection Page Images/RSBlackSmall_800x.webp";
import HoverImg4 from "../assets/Collection Page Images/WRSNOIRSMALL_800x.webp";

const ShopSilhouette2 = () => {
  const gridImages = [
    { default: Img1, hover: HoverImg1, title: "Classic Swim", price: "$120" },
    { default: Img2, hover: HoverImg2, title: "Wild Steve", price: "$140" },
    { default: Img3, hover: HoverImg3, title: "Shop Run", price: "$100" },
    { default: Img4, hover: HoverImg4, title: "Warm Steve", price: "$160" },
  ];

  return (
    <div className="my-16">
      <div className="text-center mb-6">
        <h2 className="text-5xl font-bold text-black pb-16">Shop the Silhouette</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-5">
        {/* Left Section - Big Image */}
        <div className="relative">
          <img
            src={BigImg}
            alt="Big Visual"
            className="object-cover w-full lg:h-[120vh] rounded-lg"
          />
        </div>

        {/* Right Section - Grid of 4 Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {gridImages.map((image, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Top Section - Image */}
              <div className="relative group">
                <img
                  src={image.default}
                  alt={`Grid Image ${index + 1}`}
                  className="w-full h-[300px] object-cover group-hover:hidden"
                />
                <img
                  src={image.hover}
                  alt={`Hover Image ${index + 1}`}
                  className="w-full h-[300px] object-cover hidden group-hover:block"
                />
              </div>

              {/* Bottom Section - Title and Price */}
              <div className="bg-white p-4 text-center">
                <h3 className="text-black text-lg font-semibold">{image.title}</h3>
                <p className="text-black text-sm font-medium">{image.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopSilhouette2;