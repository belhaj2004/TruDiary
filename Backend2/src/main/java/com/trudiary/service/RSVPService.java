package com.trudiary.service;

import com.trudiary.model.RSVP;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RSVPService {
    RSVP saveRSVP(RSVP r);

    List<RSVP> getAllRSVPs();
}
