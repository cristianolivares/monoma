import React from "react";

interface CardProps {
  image: string;
  name: string;
  tipo: string;
  peso: string;
  color: string;
  onClick: () => void;
}



const Card: React.FC<CardProps> = ({ image, name, peso, color, tipo, onClick }) => {

  return (
    <div className="relative h-72 w-64 rounded-lg overflow-hidden " onClick={onClick}>
    <div className="relative">
      <img className="w-full h-52" src={image} alt={name} />

      <div className="absolute bottom-0 right-0 mr-2 mb-2">
        <span className={`${color}`}>{tipo}</span>
      </div>
    </div>

    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2 capitalize">{name}</h3>
      <p className="text-sm text-gray-500">Peso: {peso} Kg</p>
    </div>
  </div>
  );
};

export default Card;
