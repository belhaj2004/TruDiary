package com.trudiary.model;

import javax.persistence.*;

@Entity
@Table(name = "RSVP", uniqueConstraints = @UniqueConstraint(columnNames={"userID", "eventID"}))
public class RSVP {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;
    private int userID;
    private int eventID;
    private String resType;

    public RSVP() {

    }

    public int getID() {
        return ID;
    }

    public int getUserID() {
        return userID;
    }

    public int getEventID() {
        return eventID;
    }

    public String getResType() {
        return resType;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public void setEventID(int eventID) {
        this.eventID = eventID;
    }

    public void setResType(String resType) {
        this.resType = resType;
    }
}
