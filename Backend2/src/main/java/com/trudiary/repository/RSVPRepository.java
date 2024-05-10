package com.trudiary.repository;

import com.trudiary.model.RSVP;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RSVPRepository extends JpaRepository<RSVP, Integer> {
    public List<RSVP> findByUserIDAndEventID(int userID, int eventID);

    List<RSVP> findByEventID(int eventID);

    List<RSVP> deleteByUserIDAndEventID(int userID, int eventID);
}
