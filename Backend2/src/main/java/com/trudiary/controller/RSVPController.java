package com.trudiary.controller;

import com.trudiary.model.RSVP;
import com.trudiary.model.User;
import com.trudiary.repository.RSVPRepository;
import com.trudiary.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/RSVP")
@CrossOrigin
public class RSVPController {
    @Autowired
    private RSVPRepository rr;

    @Autowired
    private UserRepository ur;

    @PostMapping("/addRSVP")
    public String add(@RequestBody RSVP rsvp){
        rr.save(rsvp);
        System.out.println(rsvp.getResType());
        System.out.println(rsvp.getEventID());
        System.out.println(rsvp.getUserID());
        return "Saved RSVP" + rsvp;
    }

    @PostMapping("/addRSVPByEmail")
    public String add(@RequestParam String email, @RequestParam int eventID) {
        List<User> users = ur.findUserByEmail(email);
        if (users.size() == 0) {
            return "User Does Not Exist";
        } else {
            RSVP rsvp = new RSVP();
            rsvp.setEventID(eventID);
            rsvp.setUserID(users.get(0).getUserId());
            rsvp.setResType("Going");
            rr.save(rsvp);
            return "RSVP Made";
        }
    }

    @GetMapping("/getAll")
    public List<RSVP> getAllRSVPs() {
        return rr.findAll();
    }

    @GetMapping("/getByUserAndEvent")
    public List<RSVP> getRSVPsByUserIDAndEventID(@RequestParam int userID, @RequestParam int eventID) {
        return rr.findByUserIDAndEventID(userID, eventID);
    }

    @GetMapping("/getByEventID")
    public List<RSVP> getRSVPsByEventID(@RequestParam int eventID) {
        return rr.findByEventID(eventID);
    }

    @GetMapping("/getCountByEventID")
    public int getCountByEventID(@RequestParam int eventID) {
        List<RSVP> temp = rr.findByEventID(eventID);
        System.out.println(temp);
        int retGoing = 0;
        for (RSVP t : temp) {
            if (t.getResType().equals("Going")) {
                retGoing++;
            }
        }
        return retGoing;
    }

    @GetMapping("/getGoingUsers")
    public List<User> getGoingUsers(@RequestParam int eventID) {
        List<RSVP> temp = rr.findByEventID(eventID);
        List<User> users = new ArrayList<User>();
        for (RSVP curr : temp) {
            if (curr.getResType().equals("Going")) {
                User user = ur.findByUserId(curr.getUserID()).get(0);
                users.add(user);
            }
        }
        return users;
    }

    @GetMapping("/getMaybeUsers")
    public List<User> getMaybeUsers(@RequestParam int eventID) {
        List<RSVP> temp = rr.findByEventID(eventID);
        List<User> users = new ArrayList<User>();
        for (RSVP curr : temp) {
            System.out.println("going into maybe loop");
            if (curr.getResType().equals("Maybe")) {
                User user = ur.findByUserId(curr.getUserID()).get(0);
                users.add(user);
                System.out.println("added to maybe list");
            }
        }
        return users;
    }

    @CrossOrigin("*")
    @DeleteMapping("/deleteById")
    public void deleteRSVP(@RequestParam Integer ID) {
        rr.deleteById(ID);
    }

    @DeleteMapping("/deleteByUserAndEvent")
    public List<RSVP> deleteRSVPsByUserIDAndEventID(@RequestParam int userID, @RequestParam int eventID) {
        System.out.println("removing"+userID);
        return rr.deleteByUserIDAndEventID(userID, eventID);
    }
}
