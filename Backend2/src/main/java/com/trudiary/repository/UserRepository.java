package com.trudiary.repository;
import com.trudiary.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {
    List<User> findByFirstName(String firstName);

    List<User> findByLastName(String lastName);

    List<User> findUserByEmail(String email);

    List<User> findByUserId(int userId);
}
