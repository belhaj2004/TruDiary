package com.trudiary.controller;

import com.trudiary.model.Comment;
import com.trudiary.model.Article;
import com.trudiary.model.User;
import com.trudiary.repository.ArticleRepository;
import com.trudiary.repository.CommentRepository;
import com.trudiary.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ArrayList;

@RestController
@RequestMapping("/comment")
@CrossOrigin
public class CommentController {
    @Autowired
    private CommentRepository cr;
    @Autowired
    private UserRepository ur;
    @Autowired
    private ArticleRepository ar;

    @PostMapping("/addComment")
    public String addComment(@RequestBody Comment comment) {
        System.out.println("hey look here: " + comment.getCommenterId());
        comment.setCommenterId(comment.getCommenterId() + 1);
        System.out.println("hey look here, i incremented: " + comment.getCommenterId());

        cr.save(comment);
        return "Saved comment: " + comment;
    }

    @DeleteMapping("/deleteCommentById")
    public void deleteComment(@RequestBody int commentId) {
        cr.deleteById(commentId);
    }

    @GetMapping("/getAllComments")
    public List<Comment> getListOfComments() {
        return cr.findAll();
    }


    @GetMapping("/getArticleComments")
    public List<String> getCommentsByArticleID(@RequestParam int articleId) {
        Article article = ar.getByArticleId(articleId);
        List<String> ret = new ArrayList<>();
        List<Comment> temp = cr.findAll();
        for (Comment comment : temp) {
            if (comment == null) {continue;}
            if (comment.getArticle() == article) {
                ret.add(comment.getText());
            }
        }
        return ret;
    }

    @GetMapping("/getMyComments")
    public List<Comment> getCommentsByUser(@RequestParam int commenterId) {
        List<Comment> ret = cr.findByCommenterId(commenterId);
        return ret;
    }
  
    @PostMapping("/likeComment")
    public String likeComment(@RequestBody int commentId, @RequestBody int userId) {
        Comment comment = cr.getById(commentId);
        User user = ur.getById(userId);
        
        if (user.getLikedComments().contains(comment)) {
            user.getLikedComments().remove(comment);
        } else {
            user.getLikedComments().add(comment);
        }
        
        ur.save(user);
        return "Comment liked/unliked successfully";
    }
}