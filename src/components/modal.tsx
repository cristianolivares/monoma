import React from "react";
import close from '../assets/close.svg';

interface ModalProps {
  name: string;
  peso: string;
  altura: string;
  tipo: string;
  id: string;
  image: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  name,
  peso,
  altura,
  id,
  image,
  tipo,
  onClose,
}) => {
  return (
    <div className="fixed z-50 top-0 left-0 right-0 bottom-0 flex items-center justify-center ">
    <div className="absolute w-11/12 md:max-w-md mx-auto bg-white rounded-lg shadow-lg z-50 overflow-y-auto">
      <div className="p-4">
        <div className="relative">
          <img src={image} alt={name} className="w-full h-80 object-cover rounded-t-lg" />
          <button className="absolute top-0 right-0 m-4 text-gray-700 hover:text-gray-800" onClick={onClose}>
          <img src={close} height="24" width="24" alt="some file" />
          </button>
        </div>
        <div className="p-4 grid grid-cols-2">
          <p className="text-rose-700 capitalize col-span-2 p-4">{name}</p>
          <h2 className="text-xl font-medium text-gray-800 mb-2 col-span-1 p-2">ID Pokedex: {id}</h2>
          <h2 className="text-xl font-medium text-gray-800 mb-2 col-span-1 p-2">Tipo: {tipo}</h2>
          <h2 className="text-xl font-medium text-gray-800 mb-2 col-span-1 p-2">Peso: {peso} Kg</h2>
          <h2 className="text-xl font-medium text-gray-800 mb-2 col-span-1 p-2">Altura: {altura} mts</h2>       
        </div>
      </div>
    </div>
    <div className="modal-bg fixed top-0 left-0 bottom-0 right-0 z-30"></div>
  </div>
  );
};

export default Modal;
