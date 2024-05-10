package com.trudiary.model;

import javax.persistence.*;
import java.util.Set;
import java.util.List;
import java.util.ArrayList;

@Entity
public class SupportGroup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;
    private boolean isCapped;
    private int capacity;
    private String title;
    private String owner;
    private String dateCreated;
    private String description;

    @OneToMany(mappedBy = "supportGroup", cascade = CascadeType.ALL)
    private List<Event> events;

    @ManyToMany
    @JoinTable(
        name = "user_support_groups_joined",
        joinColumns = @JoinColumn(name = "support_group_id"),
        inverseJoinColumns = @JoinColumn(name = "userId")
    )
    private Set<User> usersJoined;

    public SupportGroup() {

    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public void setIsCapped(boolean isCapped) { this.isCapped = isCapped; }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setOwner(String owner) { this.owner = owner; }

    public void setDateCreated(String dateCreated) { this.dateCreated = dateCreated; }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setEvents(List<Event> events) {
        this.events = events;
    }

    public void addEvent(Event event) {
        if (events == null) {
            events = new ArrayList<>();
        }
        events.add(event);
        event.setSupportGroup(this);
    }

    public int getID() {
        return ID;
    }

    public boolean getIsCapped() {
        return isCapped;
    }

    public int getCapacity() {
        return capacity;
    }

    public String getTitle() {
        return title;
    }

    public String getOwner() { return owner; }

    public String getDateCreated() { return dateCreated; }

    public String getDescription() {
        return description;
    }

    public Set<User> getUsers() {
        return usersJoined;
    }

    public Set<Event> getEvents() {
        return Set.copyOf(events);
    }
}
