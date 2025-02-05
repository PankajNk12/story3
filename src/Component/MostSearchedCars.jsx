import React from "react";
import "./MostSearchedCars.css";

const CarCard = ({ image, name, priceRange, offerLink }) => (
  <div className="car-card">
    <img src={image} alt={name} className="car-image" />
    <h3 className="car-name">{name}</h3>
    <p className="car-price">₹ {priceRange}</p>
    <a href={offerLink} className="car-offer-button">
      Check January Offers
    </a>
  </div>
);

const MostSearchedCars = () => {
  const cars = [
    {
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Kylaq/11528/1733225175669/front-left-side-47.jpg?tr=w-300",
      name: "Mahindra Bolero",
      priceRange: "9.79 - 10.91 Lakh*",
      offerLink: "#",
    },
    {
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Scorpio-N/10817/1690351800434/front-left-side-47.jpg?tr=w-664",
      name: "Toyota Fortuner",
      priceRange: "33.43 - 51.94 Lakh*",
      offerLink: "#",
    },
    {
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Bolero/10754/1697696929365/front-left-side-47.jpg?tr=w-300",
      name: "Tata Punch",
      priceRange: "6 - 10.32 Lakh*",
      offerLink: "#",
    },
    {
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg?tr=w-300",
      name: "Mahindra Thar ROXX",
      priceRange: "12.99 - 23.09 Lakh*",
      offerLink: "#",
    },
    {
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Punch/10681/1691392713058/front-left-side-47.jpg?tr=w-300",
      name:"TATA Punch",
      priceRange: "12.99 - 23.09 Lakh*",
      offerLink: "#",
    },
  ];

  return (
    <div className="most-searched-cars">
      <h2 className="title">The most searched cars</h2>
      <div className="tabs">
        <button className="tab active">SUV</button>
        <button className="tab">Hatchback</button>
        <button className="tab">Sedan</button>
        <button className="tab">MUV</button>
        <button className="tab">Luxury</button>
      </div>
      <div className="car-list">
        {cars.map((car, index) => (
          <CarCard
            key={index}
            image={car.image}
            name={car.name}
            priceRange={car.priceRange}
            offerLink={car.offerLink}
          />
        ))}
      </div>
      <button className="view-all-button">View All SUV Cars</button>
    </div>
  );
};

export default MostSearchedCars;