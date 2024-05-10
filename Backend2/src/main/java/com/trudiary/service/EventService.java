package com.trudiary.service;

import com.trudiary.model.Event;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface EventService {
    public Event saveEvent(Event e);
    public List<Event> getAllEvents();

    void deleteEvent(Integer id);
}
