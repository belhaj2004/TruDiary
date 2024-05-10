package com.trudiary.service;

import com.trudiary.model.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    public User saveUser(User u);
}
