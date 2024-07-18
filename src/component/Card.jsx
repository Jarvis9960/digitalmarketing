import React from "react";
// import "../css/card.css";

const Cards = ({ title, description }) => (
  <div className="transform transition duration-500 hover:scale-105 bg-white p-6 rounded-lg shadow-lg m-4 min-h-[300px] flex flex-col justify-center items-center w-3/4">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-700 text-center">{description}</p>
  </div>
);

function Card() {
  return (
    <div className="bg-gray-100 flex items-center justify-center p-10">
      <section className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Cards
            title="Card 1"
            description="This is the description for card 1."
          />
          <Cards
            title="Card 2"
            description="This is the description for card 2."
          />
          <Cards
            title="Card 3"
            description="This is the description for card 3."
          />
        </div>
      </section>
    </div>
  );
}

export default Card;
