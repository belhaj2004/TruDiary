package com.trudiary.controller;

import com.trudiary.model.SupportGroup;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.trudiary.repository.SupportGroupRepository;
import com.trudiary.model.User;
import com.trudiary.repository.UserRepository;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/supportGroup")
@CrossOrigin
public class SupportGroupController {
    @Autowired
    private SupportGroupRepository sgr;
    @Autowired
    private UserRepository ur;

    @PostMapping("/addSupportGroup")
    public String add(@RequestBody SupportGroup supportGroup){
        sgr.save(supportGroup);
        return "Created Support Group: " + supportGroup;
    }

    @GetMapping("/getAll")
    public List<SupportGroup> getAllSupportGroups() {
        return sgr.findAll();
    }

    @GetMapping("/getSupportGroupByID")
    public SupportGroup findSupportGroupByID(@RequestParam int ID) {
        return sgr.getByID(ID);
    }

    @GetMapping("/getSupportGroupByTitle")
    public List<SupportGroup> findSupportGroupByName(@RequestParam String title) {
        return sgr.findByTitle(title);
    }

    @GetMapping("/getSupportGroupByOwner")
    public List<SupportGroup> findSupportGroupByOwner(@RequestParam String owner) {
        return sgr.findByOwner(owner);
    }

    @PostMapping("/editSupportGroup{id}")
    public void editSupportGroup(@RequestParam Integer ID, @RequestBody SupportGroup supportGroup) {
        sgr.deleteById(ID);
        sgr.save(supportGroup);
    }

    @CrossOrigin
    @DeleteMapping("/deleteById")
    public void deleteSupportGroup(@RequestParam Integer ID) {
        sgr.deleteById(ID);
    }

    @PostMapping("/joinSupportGroup")
    public String joinSupportGroup(@RequestBody int support_group_id, @RequestBody int userId) {
        SupportGroup supportGroup = sgr.getByID(support_group_id);
        User user = ur.getById(userId);

        boolean joined = user.getSupportGroupsJoined().add(supportGroup);
        if (joined == false) {
            return "User already in support group.";
        }

        return "User successfully joined support group.";
    }

    @PostMapping("/leaveSupportGroup")
    public String leaveSupportGroup(@RequestBody int support_group_id, @RequestBody int userId) {
        SupportGroup supportGroup = sgr.getByID(support_group_id);
        User user = ur.getById(userId);

        boolean removed = user.getSupportGroupsJoined().remove(supportGroup);
        if (removed == false) {
            return "User was not in support group.";
        }

        return "User successfully left support group.";
    }
}
