import { useState } from 'react';
import './App.css';
import { Card } from './components/cards/card';
import { CreateModal } from './components/modals/modailCreate';
import { BookDetailsModal } from './components/modals/modailDetail';
import { useBookData } from './hooks/useBookData';
import axios from 'axios';
import { BookData } from './interface/BookData';

function App() {
  const { data, refetch } = useBookData();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<BookData | null>(null);

  const handleOpenCreateModal = () => {
    setIsCreateModalOpen(prev => !prev);
  };

  const handleOpenDetailsModal = (book: BookData) => {
    setSelectedBook(book);
    setIsDetailsModalOpen(true);
  };

  const handleCloseDetailsModal = () => {
    setSelectedBook(null);
    setIsDetailsModalOpen(false);
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/book/${id}`);
      refetch();
    } catch (error) {
      console.error("Erro ao deletar o livro", error);
    }
  };

  return (
    <div className="container">
      <h1>Biblioteca</h1>
      <div className="card-grid">
        {data?.map(bookData => (
          <Card 
            key={bookData.id}
            price={bookData.price} 
            title={bookData.title}
            image={bookData.image}
            onDelete={() => handleDelete(bookData.id)}
            onViewDetails={() => handleOpenDetailsModal(bookData)}
          />
        ))}
      </div>
      {isCreateModalOpen && <CreateModal closeModal={handleOpenCreateModal} />}
      {isDetailsModalOpen && selectedBook && (
        <BookDetailsModal book={selectedBook} closeModal={handleCloseDetailsModal} />
      )}
      <button onClick={handleOpenCreateModal}>Novo</button>
    </div>
  );
}

export default App;
