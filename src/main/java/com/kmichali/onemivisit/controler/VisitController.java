package com.kmichali.onemivisit.controler;

import com.kmichali.onemivisit.model.User;
import com.kmichali.onemivisit.model.Visit;
import com.kmichali.onemivisit.service.UserService;
import com.kmichali.onemivisit.serviceImpl.UserServiceImpl;
import com.kmichali.onemivisit.serviceImpl.VisitServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class VisitController {

    @Autowired
    VisitServiceImpl visitService;

    @Autowired
    UserServiceImpl userService;

    @GetMapping("/visits/{id}")
    private List<Visit> getVisit(@PathVariable("id") long id){
        User user = userService.findById(id);
        return visitService.getVisitByUser(user);
    }
}
