package com.kmichali.onemivisit.controler;

import com.kmichali.onemivisit.dto.VisitDTO;
import com.kmichali.onemivisit.model.User;
import com.kmichali.onemivisit.serviceImpl.UserServiceImpl;
import com.kmichali.onemivisit.serviceImpl.VisitServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class VisitController {

    @Autowired
    private VisitServiceImpl visitService;

    @Autowired
    private UserServiceImpl userService;

    @GetMapping("/visits/{id}")
    public List<VisitDTO> getVisit(@PathVariable("id") long id){
        User user = userService.findById(id);
        return visitService.getVisitByUser(user);
    }

    @PostMapping("/addVisit")
    public ResponseEntity<String> addVisit(@RequestBody VisitDTO visit){
        visitService.saveDTO(visit);
        return new ResponseEntity<>("Success - visist created.", HttpStatus.CREATED);
    }
}
