package com.trudiary.controller;

import com.trudiary.model.Event;
import com.trudiary.model.RSVP;
import com.trudiary.model.User;
import com.trudiary.repository.EventRepository;
import com.trudiary.repository.UserRepository;
import com.trudiary.repository.RSVPRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@RestController
@RequestMapping("/event")
@CrossOrigin
public class EventController {
    @Autowired
    private EventRepository er;

    @Autowired
    private UserRepository ur;

    @PostMapping("/addEvent")
    public String add(@RequestBody Event event){
        er.save(event);
        return "Saved Event" + event;
    }

    @GetMapping("/getAll")
    public List<Event> getAllEvents() {
        return er.findAll();
    }

    @Autowired
    private RSVPRepository rr;

    @GetMapping("/getMyEvents")
    public List<Event> getEventsByUserID(@RequestParam int ID) {
        List<RSVP> temp = rr.findAll();
        List<Event> ret = new ArrayList<>();
        for (RSVP r : temp) {
            if (r == null) {continue;}
            if (r.getUserID() == ID && r.getResType().equals("Going")) {
                System.out.println("it is");
                ret.add(er.getByEventId(r.getEventID()));
            }
        }
        return ret;
    }

    @PostMapping("/editEvent{id}")
    public void edit(@RequestParam Integer ID, @RequestBody Event event) {
        er.deleteById(ID);
        er.save(event);
    }

    @CrossOrigin
    @DeleteMapping("/deleteById")
    public void deleteEvent(@RequestParam Integer ID) {
        er.deleteById(ID);
    }

    @PostMapping("/joinEvent")
    public String joinEvent(@RequestParam int eventId, @RequestParam int userId) {
        Event event = er.getById(eventId);
        User user = ur.getById(userId);
        
        user.getJoinedEvents().add(event);
        ur.save(user);
        
        return "User joined the event successfully";
    }

}
