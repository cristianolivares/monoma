import React, { useState } from "react";
import Card from "./card";
import { Pokemon } from "./dashboard";
import colores from '../utils/tagsColor.json';
import Modal from "./modal";

interface PaginatorProps {
  cards: Pokemon[];
}
interface Colores {
  [key: string]: string;
}
const coloresTipados: Colores = colores;

function getClassNameFromTipo(tipo: string): string {
  return coloresTipados[tipo] || 'px-2 py-1 rounded-lg bg-black text-white text-xs'; 
}

const Paginator: React.FC<PaginatorProps> = ({ cards }) => {
 
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;
  const totalPages = Math.ceil(160 / cardsPerPage);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Pokemon>();

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  const handleCardClick = (data:Pokemon) => {
    setSelectedCard(data);
    setIsModalOpen(true);
    console.log("Hola");
  };
  function fixWeight(num: number): string {
    const numStr = num.toString();
  const commaIndex = numStr.length - 1;
  return numStr.slice(0, commaIndex) + ',' + numStr.slice(commaIndex);
  }

  const renderCards = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    return cards.slice(startIndex, endIndex).map((card, index) => (
      
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4" key={index}>
        <Card name={card.name} tipo={card.types[0].type.name} image={card.sprites.front_default} peso={fixWeight(card.weight)} color={getClassNameFromTipo(card.types[0].type.name)} onClick={() => handleCardClick(card)} /> 
      </div>
    ));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`mx-1 ${
            i === currentPage ? "text-blue-500 font-bold" : "text-gray-500"
          }`}
        >
          <button onClick={() => handleClick(i)}>{i}</button>
        </li>
      );
    }

    return <ul className="flex justify-center">{pageNumbers}</ul>;
  };

  return (
     <div className="flex flex-col items-center">
      <div className="flex flex-wrap -mx-4">{renderCards()}</div>
      <div className="my-4">{renderPageNumbers()}</div>
      {isModalOpen && (
        <Modal
          name={selectedCard?.name || ''}
          peso={fixWeight(selectedCard?.weight || 0)}
          altura={fixWeight(selectedCard?.height || 0)}
          tipo={selectedCard?.types[0].type.name || ''}
          image={selectedCard?.sprites.front_default || ''}
          id={selectedCard?.id || ''}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
    
  );
};

export default Paginator;
