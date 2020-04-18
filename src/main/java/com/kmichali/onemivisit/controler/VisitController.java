package com.kmichali.onemivisit.controler;

import com.kmichali.onemivisit.dto.VisitDTO;
import com.kmichali.onemivisit.model.User;
import com.kmichali.onemivisit.model.Visit;
import com.kmichali.onemivisit.serviceImpl.UserServiceImpl;
import com.kmichali.onemivisit.serviceImpl.VisitServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import java.util.List;

@RestController
public class VisitController {

    @Autowired
    private VisitServiceImpl visitService;

    @Autowired
    private UserServiceImpl userService;

    @GetMapping("/visits/{id}")
    public List<VisitDTO> getVisit(@PathVariable("id") long id) {
        User user = userService.findById(id);
        return visitService.getVisitByUser(user);
    }

    @PostMapping("/addVisit")
    public ResponseEntity<String> addVisit(@RequestBody VisitDTO visit) {
        visitService.saveFromDTO(visit);
        return new ResponseEntity<>("Success - visit created.", HttpStatus.CREATED);
    }

    @PutMapping("/updateVisit")
    public ResponseEntity<String> updateVisit(@RequestBody VisitDTO visit) {
        Visit visitToUpdate = visitService.findById(visit.getId());
        visitService.updateFromDTO(visit, visitToUpdate);
        return new ResponseEntity<>("Success - visit updated correctly.", HttpStatus.CREATED);
    }

    @DeleteMapping("/deleteVisit/{id}")
    public ResponseEntity<String> delete(@PathVariable("id") long id) {
        visitService.delete(id);
        Visit visit = visitService.findById(id);
        if (visit == null)
            return new ResponseEntity<>("Success - Visit deleted.", HttpStatus.OK);
        else
            return new ResponseEntity<>("Failed - visit not deleted.", HttpStatus.BAD_REQUEST);
    }
}
