package com.ufps.semilleros.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ufps.semilleros.entity.Blog;

@Repository
public interface BlogRepository extends JpaRepository<Blog, Long> {
}