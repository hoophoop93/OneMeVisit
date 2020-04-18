package com.kmichali.onemivisit.service;

import com.kmichali.onemivisit.dto.DoctorDTO;
import com.kmichali.onemivisit.model.Doctor;

import java.util.List;

public interface DoctorService extends GenericService<Doctor, DoctorDTO> {

    List<DoctorDTO> getAllDoctor();
}
