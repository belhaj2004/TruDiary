package com.trudiary.model;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;
import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id")
    private int commentId;


    private String text;

    @Column(name = "commenter_id") // Specify the column name for the foreign key
    private int commenterId;

    // other fields and methods

    @ManyToOne
    @JoinColumn(name="userId")
    private User commenter;

    private Date date;
    private String time;

    @ManyToOne(cascade = {CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name = "article_id")
    @JsonBackReference 
    private Article article;

    @ManyToMany(cascade = CascadeType.REFRESH)
    @JoinTable(
            name = "user_liked_comments",
            joinColumns = @JoinColumn(name = "comment_id"),
            inverseJoinColumns = @JoinColumn(name = "userId")
    )
    private Set<User> likedByUsers;

    public void setCommentId(int commentId) {
        this.commentId = commentId;
    }
    public void setArticle(Article article) {
        this.article = article;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setCommenter(User commenter) {
        this.commenter = commenter;
    }


    public void setCommenterId(int commenterId) {
        this.commenterId = commenterId;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public int getCommentId() {
        return commentId;
    }

    public Article getArticle() {
        return article;
    }

    public String getText() {
        return text;
    }

    public int getCommenterId() {
        return commenterId;
    }

    public User getCommenter() {
        return commenter;
    }

    public Date getDate() {
        return date;
    }

    public String getTime() {
        return time;
    }

    public int getLikes() {
        return likedByUsers.size();
    }

    public Comment() {
    }
}
