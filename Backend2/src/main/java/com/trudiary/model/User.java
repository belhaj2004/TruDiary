package com.trudiary.model;

import javax.persistence.*;

import com.password4j.Hash;
import com.password4j.Password;

import java.util.Set;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userId")
    private int userId;
    private String firstName;
    private String lastName;
    private String password;
    @Column(unique=true)
    private String email;
    private String role;
    @ManyToMany
    @JoinTable(
        name = "user_liked_comments",
        joinColumns = @JoinColumn(name = "userId"),
        inverseJoinColumns = @JoinColumn(name = "comment_id")
    )
    private Set<Comment> likedComments;
    @ManyToMany
    @JoinTable(
        name = "user_support_groups_joined",
        joinColumns = @JoinColumn(name = "userId"),
        inverseJoinColumns = @JoinColumn(name = "support_group_id")
    )
    private Set<SupportGroup> supportGroupsJoined;


    @ManyToMany
    @JoinTable(
        name = "user_events",
        joinColumns = @JoinColumn(name = "userId"),
        inverseJoinColumns = @JoinColumn(name = "event_id")
    )

    private Set<Event> joinedEvents;

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public void setFirstName(String name) {
        this.firstName = name;
    }

    public void setLastName(String name) {
        this.lastName = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setPassword(String password) {
        this.password = encrypt(password);
    }

    public int getUserId() {
        return userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getRole() {
        return role;
    }
    
    public String getPassword() {
        return password;
    }

    public Set<Comment> getLikedComments() {
        return likedComments;
    }
  
    public Set<Event> getJoinedEvents() {
        return joinedEvents;
    }
    public Set<SupportGroup> getSupportGroupsJoined() {
        return supportGroupsJoined;
    }

    public User() {
    }

    private String encrypt(String raw_text) {
        Hash hash = Password.hash(raw_text)
                            .addRandomSalt(16)
                            .withArgon2();

        return hash.getResult();
    }

}
