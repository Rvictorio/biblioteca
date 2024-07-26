import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { BookData } from '../interface/BookData';

const API_URL = 'http://localhost:8080';

const updateBookDetails = async (book: BookData) => {
  const response = await axios.put(`${API_URL}/book/${book.id}`, book);
  return response.data;
};

export function useBookDetails() {
  return useMutation(updateBookDetails);
}
