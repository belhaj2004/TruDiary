package com.trudiary.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int eventId;
    private int capacity;
    private String title;
    private String host;
    private String date;
    private String time;
    private String location;
    private String description;

    @ManyToOne
    @JoinColumn(name = "ID")
    private SupportGroup supportGroup;

    @ManyToMany(mappedBy = "joinedEvents")
    private Set<User> attendees;


    public void setID(int ID) {
        this.eventId = ID;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setHost(String host) {
        this.host = host;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setSupportGroup(SupportGroup supportGroup) {
        this.supportGroup = supportGroup;
    }

    public int getID() {
        return eventId;
    }

    public int getCapacity() {
        return capacity;
    }

    public String getTitle() {
        return title;
    }

    public String getHost() {
        return host;
    }

    public String getDate() {
        return date;
    }

    public String getTime() {
        return time;
    }

    public String getLocation() {
        return location;
    }

    public String getDescription() {
        return description;
    }

    public SupportGroup getSupportGroup() {
        return supportGroup;
    }

    public Event() {
    }
}
