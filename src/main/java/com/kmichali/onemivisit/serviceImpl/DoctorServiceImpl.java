package com.kmichali.onemivisit.serviceImpl;

import com.kmichali.onemivisit.dto.DoctorDTO;
import com.kmichali.onemivisit.mapper.BaseMapper;
import com.kmichali.onemivisit.mapper.DoctorMapper;
import com.kmichali.onemivisit.model.Doctor;
import com.kmichali.onemivisit.repository.DoctorRepository;
import com.kmichali.onemivisit.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
@Transactional
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    private DoctorMapper doctorMapper;

    public DoctorServiceImpl(){
        this.doctorMapper = new DoctorMapper();
    }

    @Override
    public Doctor save(Doctor entity) {
        return doctorRepository.save(entity);
    }

    @Override
    public Doctor saveDTO(DoctorDTO dtoEntity) {
        Doctor doctor = doctorMapper.dtoToEntity(dtoEntity);
        return doctorRepository.save(doctor);
    }


    @Override
    public Doctor update(Doctor entity) {
        return doctorRepository.save(entity);
    }

    @Override
    public Doctor updateDTO(DoctorDTO dtoEntity, Doctor entity) {
        return null;
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
    public List<Doctor> findAll() {
        List<Doctor> doctorList = StreamSupport.stream(doctorRepository.findAll().spliterator(),false).collect(Collectors.toList());
        return doctorList;
    }

    @Override
    public List<DoctorDTO> getAllDoctor() {
        List<Doctor> doctorList = this.findAll();
        List<DoctorDTO> doctorDTOList = doctorMapper.entityListToDtoList(doctorList);
        return doctorDTOList;
    }
}
