package com.trudiary.repository;

import com.trudiary.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EventRepository extends JpaRepository<Event, Integer> {
    List<Event> findByTitle(String title);

    List<Event> findByHost(String host);

    Event getByEventId(int eventID);
}
