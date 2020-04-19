package com.kmichali.onemivisit.mapper;

import com.kmichali.onemivisit.dto.DoctorDTO;
import com.kmichali.onemivisit.model.Doctor;

import java.util.List;

public class DoctorMapper extends BaseMapper<Doctor, DoctorDTO> {

    @Override
    public Doctor dtoToEntity(DoctorDTO dto) {
        Doctor doctor = new Doctor();
        doctor.setId(dto.getId());
        doctor.setName(dto.getName());
        doctor.setSurname(dto.getSurname());
        doctor.setRoom(dto.getRoom());
        doctor.setSpecialization(dto.getSpecialization());

        return doctor;
    }

    @Override
    public DoctorDTO entityToDto(Doctor entity) {
        DoctorDTO doctorDTO = new DoctorDTO();
        doctorDTO.setId(entity.getId());
        doctorDTO.setName(entity.getName());
        doctorDTO.setSurname(entity.getSurname());
        doctorDTO.setRoom(entity.getRoom());
        doctorDTO.setSpecialization(entity.getSpecialization());

        return doctorDTO;
    }

    @Override
    public List<Doctor> dtoListToEntityList(List<DoctorDTO> dtoList) {
        return super.dtoListToEntityList(dtoList);
    }

    @Override
    public List<DoctorDTO> entityListToDtoList(List<Doctor> entityList) {
        return super.entityListToDtoList(entityList);
    }

}
