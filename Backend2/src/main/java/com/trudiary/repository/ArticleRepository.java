package com.trudiary.repository;

import com.trudiary.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
public interface ArticleRepository extends JpaRepository<Article, Integer> {
    List<Article> findByTitle(String title);
    Article getByArticleId(int articleId);
}