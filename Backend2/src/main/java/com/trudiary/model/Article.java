package com.trudiary.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;

@Entity
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int articleId;
    private String title;
    private String author;
    private String time;
    @Column(columnDefinition = "LONGTEXT")
    private String description;
    private Date date;
    @Column(columnDefinition = "LONGTEXT")    private String content;

    @OneToMany(mappedBy = "article", cascade = {CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JsonManagedReference
    private List<Comment> comments;


    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public void addComment(Comment comment) {
        if (comments == null) {
            comments = new ArrayList<>();
        }
        comments.add(comment);
        comment.setArticle(this);
    }

    public void setContent(String content) { this.content = content; }

    public void setArticleId(int articleId) {
        this.articleId = articleId;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setAuthor(String author) { this.author =  author;}

    public void setDate(Date date) {
        this.date = date;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getArticleId() {
        return articleId;
    }

    public String getAuthor() { return author; }

    public String getTitle() {
        return title;
    }

    public Date getDate() {
        return date;
    }

    public String getTime() {
        return time;
    }
    
    public String getDescription() {
        return description;
    }
    
    public String getContent() { return content; }

    public Article() {}
}