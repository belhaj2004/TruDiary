package com.trudiary.controller;

import com.trudiary.model.Article;
import com.trudiary.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@RestController
@RequestMapping("/article")
@CrossOrigin
public class ArticleController {
    @Autowired
    private ArticleRepository ar;

    @PostMapping("/addArticle")
    public String add(@RequestBody Article article){
        ar.save(article);
        return "Saved article" + article;
    }

    @CrossOrigin
    @DeleteMapping("/deleteArticleById")
    public void deleteArticle(@RequestBody int id) {
        ar.deleteById(id);
    }

    @GetMapping("/getAllArticles")
    public List<Article> getListOfArticles() {
        return ar.findAll();
    }
}
