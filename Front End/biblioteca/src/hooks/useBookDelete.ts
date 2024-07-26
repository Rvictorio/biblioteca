import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const API_URL = 'http://localhost:8080';

const deleteBook = async (id: number) => {
  await axios.delete(`${API_URL}/book/${id}`);
};

export function useDeleteBook() {
  const queryClient = useQueryClient();

  const mutation = useMutation(deleteBook, {
    onSuccess: () => {
      queryClient.invalidateQueries(['book-data']);
    },
    onError: (error) => {
      console.error("Erro ao deletar o livro", error);
    }
  });

  return mutation;
}
