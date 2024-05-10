package com.trudiary.service;

import com.trudiary.model.User;
import com.trudiary.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class UserServiceImp implements UserService{
    @Autowired
    private UserRepository ur;

    @Override
    public User saveUser(User e) {
        return null;
    }
}
