package com.kmichali.onemivisit.serviceImpl;

import com.kmichali.onemivisit.model.Doctor;
import com.kmichali.onemivisit.repository.DoctorRepository;
import com.kmichali.onemivisit.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    DoctorRepository doctorRepository;

    @Override
    public Doctor save(Doctor entity) {
        return doctorRepository.save(entity);
    }

    @Override
    public Doctor saveDTO(Void entity) {
        return null;
    }


    @Override
    public Doctor update(Doctor entity) {
        return doctorRepository.save(entity);
    }

    @Override
    public void delete(Doctor entity) {
        doctorRepository.delete(entity);
    }

    @Override
    public void delete(long id) {
        doctorRepository.deleteById(id);
    }

    @Override
    public Iterable<Doctor> findAll() {
        return doctorRepository.findAll();
    }
}
