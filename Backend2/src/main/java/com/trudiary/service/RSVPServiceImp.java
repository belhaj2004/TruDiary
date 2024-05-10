package com.trudiary.service;

import com.trudiary.model.RSVP;
import com.trudiary.repository.RSVPRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class RSVPServiceImp implements RSVPService {
    @Autowired
    private RSVPRepository rr;

    @Override
    public RSVP saveRSVP(RSVP r) {
        return null;
    }

    @Override
    public List<RSVP> getAllRSVPs() {
        return rr.findAll();
    }

    public void deleteRSVP(Integer ID) {
        rr.deleteById(ID);
    }
}
