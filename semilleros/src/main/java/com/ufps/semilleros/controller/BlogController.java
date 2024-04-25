package com.ufps.semilleros.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ufps.semilleros.entity.Blog;
import com.ufps.semilleros.repositories.BlogRepository;

import java.util.List;

@RestController
@RequestMapping("/api/blogs")
public class BlogController {

    @Autowired
    private BlogRepository blogRepository;

    // Obtener todos los blogs
    @GetMapping
    public List<Blog> getAllBlogs() {
        return blogRepository.findAll();
    }

    // Obtener un blog por su ID
    @GetMapping("/{id}")
    public ResponseEntity<Blog> getBlogById(@PathVariable(value = "id") Long blogId) {
        Blog blog = blogRepository.findById(blogId).orElse(null);
        if (blog == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(blog);
    }

    // Crear un nuevo blog
    @PostMapping
    public ResponseEntity<Blog> createBlog(@RequestBody Blog blog) {
        // if(blog.getId() != null || blog.getId() == -1) {
        //     return ResponseEntity.badRequest().build();
        // }
        Blog createdBlog = blogRepository.save(blog);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdBlog);
    }

    // Actualizar un blog existente
    @PutMapping("/{id}")
    public ResponseEntity<Blog> updateBlog(@PathVariable(value = "id") Long blogId, @RequestBody Blog blogDetails) {
        Blog blog = blogRepository.findById(blogId).orElse(null);
        if (blog == null) {
            return ResponseEntity.notFound().build();
        }
        blog.setTitulo(blogDetails.getTitulo());
        blog.setContenido(blogDetails.getContenido());
        final Blog updatedBlog = blogRepository.save(blog);
        return ResponseEntity.ok(updatedBlog);
    }

    // Eliminar un blog existente
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBlog(@PathVariable(value = "id") Long blogId) {
        Blog blog = blogRepository.findById(blogId).orElse(null);
        if (blog == null) {
            return ResponseEntity.notFound().build();
        }
        blogRepository.delete(blog);
        return ResponseEntity.noContent().build();
    }
    
}
