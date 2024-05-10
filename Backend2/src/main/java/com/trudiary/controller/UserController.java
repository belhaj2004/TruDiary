package com.trudiary.controller;

import com.trudiary.model.User;
import com.trudiary.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    @Autowired
    private UserRepository ur;

    @PostMapping("/addUser")
    public String add(@RequestBody User user) {
        ur.save(user);
        return "Saved User" + user;
    }

    @GetMapping("/getAll")
    public List<User> getAllUsers() {
        return ur.findAll();
    }

    @GetMapping("/getUserByID")
    public List<User> findUserByID(@RequestParam int ID) { return ur.findByUserId(ID); }

    @GetMapping("/getUserByName")
    public List<User> findUserByName(@RequestParam String name) {
        return ur.findByFirstName(name);
    }

    @GetMapping("/getUserByEmail")
    public List<User> findUserByEmail(@RequestParam String email) {
        return ur.findUserByEmail(email);
    }

    @PostMapping("/updateProfile")
    public String updateProfile(@RequestParam int userId, @RequestParam User updatedUser) {
        User user = ur.getById(userId);

        user.setFirstName(updatedUser.getFirstName());
        user.setLastName(updatedUser.getLastName());
        user.setEmail(updatedUser.getEmail());

        ur.save(user);

        return "User profile updated successfully";
    }
}
