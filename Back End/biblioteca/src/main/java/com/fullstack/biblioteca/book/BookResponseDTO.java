package com.fullstack.biblioteca.book;

public record BookResponseDTO(Long id, String title, String image, Integer price) {
    public BookResponseDTO(Book book){
        this(book.getId(), book.getTitle(), book.getImage(), book.getPrice());
    }
}
