package com.trudiary.service;

import com.trudiary.model.Event;
import com.trudiary.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class EventServiceImp implements EventService {
    @Autowired
    private EventRepository er;

    @Override
    public Event saveEvent(Event e) {
        return null;
    }

    @Override
    public List<Event> getAllEvents() {
        return er.findAll();
    }

    public void deleteEvent(Integer ID) {
        er.deleteById(ID);
    }
}
