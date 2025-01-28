import Image from "next/image";
import React from "react";
import Card1 from "@/public/card1.png";
import Card2 from "@/public/card2.png";
import Card3 from "@/public/card3.png";
import Card4 from "@/public/card4.png";
import Card5 from "@/public/card5.png";
import Card6 from "@/public/card6.png";
import subCard from "@/public/subCard.png";
import IconStar from "@/public/IconStar.svg";

const styles = {
  button: "bg-[#F1722833] px-4 py-2 rounded-lg font-bold",
  closedStatus: "text-[#F17228]",
  openStatus: "text-green-600 font-bold",
  cardImage: "rounded-2xl hover:scale-105 transition-all",
  restaurant_name: "font-bold text-[#424242] text-[22px]",
  restaurant_ratingText: "text-[#FFB30E] text-[22px]",
};

const data = [
  {
    id: 1,
    cardImage: Card1,
    subCardImage: subCard,
    restaurant_name: "Bow Lasagna",
    restaurant_rating: 4.2,
    restaurant_status: "Closed",
  },
  {
    id: 2,
    cardImage: Card2,
    subCardImage: subCard,
    restaurant_name: "Bow Lasagna",
    restaurant_rating: 4.2,
    restaurant_status: "Closed",
  },
  {
    id: 3,
    cardImage: Card3,
    subCardImage: subCard,
    restaurant_name: "Bow Lasagna",
    restaurant_rating: 4.2,
    restaurant_status: "Open Now",
  },
  {
    id: 4,
    cardImage: Card4,
    subCardImage: subCard,
    restaurant_name: "Bow Lasagna",
    restaurant_rating: 4.2,
    restaurant_status: "Closed",
  },
  {
    id: 5,
    cardImage: Card5,
    subCardImage: subCard,
    restaurant_name: "Bow Lasagna",
    restaurant_rating: 3.2,
    restaurant_status: "Open Now",
  },
  {
    id: 6,
    cardImage: Card6,
    subCardImage: subCard,
    restaurant_name: "Bow Lasagna",
    restaurant_rating: 2.2,
    restaurant_status: "Closed",
  },
  {
    id: 7,
    cardImage: Card6,
    subCardImage: subCard,
    restaurant_name: "Bow Lasagna",
    restaurant_rating: 2.2,
    restaurant_status: "Closed",
  },
  {
    id: 8,
    cardImage: Card6,
    subCardImage: subCard,
    restaurant_name: "Bow Lasagna",
    restaurant_rating: 2.2,
    restaurant_status: "Closed",
  },
];

function FeatureRestaurantSection() {
  return (
    <div className="bg-white">
      <div className="mt-[80px]">
        <p className="text-[#212121] text-[43px] flex justify-center font-bold">
          Featured Restaurants
        </p>
        <div className="mx-[160px] mt-[88px]">
          <div className="grid grid-cols-4 gap-2">
            {data.map((item) => (
              <div key={item.id} className="flex flex-col space-y-6">
                <Image
                  src={item.cardImage}
                  width={230}
                  height={230}
                  alt="about_image"
                  className={styles.cardImage}
                />
                <div className="flex space-x-4">
                  <Image
                    src={item.subCardImage}
                    width={50}
                    height={36}
                    alt="about_image"
                    className={styles.cardImage}
                  />
                  <div className="flex flex-col">
                    <p className={styles.restaurant_name}>{item.restaurant_name}</p>
                    <div className="flex space-x-2">
                      <Image
                        src={IconStar}
                        width={22}
                        height={19}
                        alt="about_image"
                        className={styles.cardImage}
                      />
                      <p className={styles.restaurant_ratingText}>{item.restaurant_rating}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className={`${styles.button} ${
                      item.restaurant_status === "Open Now"
                        ? styles.openStatus
                        : styles.closedStatus
                    }`}
                  >
                    {item.restaurant_status}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureRestaurantSection;
