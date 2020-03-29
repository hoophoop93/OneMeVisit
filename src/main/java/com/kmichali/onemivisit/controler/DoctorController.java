package com.kmichali.onemivisit.controler;

import com.kmichali.onemivisit.dto.DoctorDTO;
import com.kmichali.onemivisit.serviceImpl.DoctorServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DoctorController {

    @Autowired
    private DoctorServiceImpl doctorService;

    @GetMapping("/doctors")
    public List<DoctorDTO> getAllDoctors(){
        return doctorService.getAllDoctor();
    }
}
