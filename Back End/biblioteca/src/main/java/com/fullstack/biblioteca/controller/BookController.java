package com.fullstack.biblioteca.controller;

import com.fullstack.biblioteca.book.Book;
import com.fullstack.biblioteca.book.BookRepository;
import com.fullstack.biblioteca.book.BookRequestDTO;
import com.fullstack.biblioteca.book.BookResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("book")
public class BookController {

    @Autowired
    private BookRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveBook(@RequestBody BookRequestDTO data){
        Book bookData = new Book(data);
        repository.save(bookData);
        return;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<BookResponseDTO> getAll(){

        List<BookResponseDTO> bookList = repository.findAll().stream().map(BookResponseDTO::new).toList();
        return bookList;
    }
}
