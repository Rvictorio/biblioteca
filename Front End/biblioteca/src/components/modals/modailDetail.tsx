import { useState, useEffect } from 'react';
import { useBookDetails } from '../../hooks/useBookDetails';
import './styleDetailModal.css'; 

interface BookDetailsModalProps {
  book: {
    id: number;
    title: string;
    image: string;
    price: number;
  };
  closeModal: () => void;
}

export function BookDetailsModal({ book, closeModal }: BookDetailsModalProps) {
  const [title, setTitle] = useState(book.title);
  const [image, setImage] = useState(book.image);
  const [price, setPrice] = useState(book.price);
  const { mutate, isLoading, isSuccess } = useBookDetails();

  const handleUpdate = () => {
    const updatedBook = {
      id: book.id,
      title,
      image,
      price
    };
    mutate(updatedBook);
  };

  useEffect(() => {
    if (isSuccess) {
      closeModal();
    }
  }, [isSuccess, closeModal]);

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <button className="close-btn" onClick={closeModal}>✖</button>
        <h2>Editar Livro</h2>
        <img src={image} alt={title} className="modal-image"/>
        <form className="input-container">
          <label>
            Título:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Imagem URL:
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value))}
            />
          </label>
        </form>
        <button onClick={handleUpdate} className="btn-primary">
          {isLoading ? 'Atualizando...' : 'Atualizar'}
        </button>
      </div>
    </div>
  );
}
