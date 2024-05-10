package com.trudiary.repository;

import com.trudiary.model.Comment;
import com.trudiary.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
    List<Comment> findByCommenter(User commenter);
    Comment getByCommentId(int commentId);
    List<Comment> findByCommenterId(int commenterId);

}