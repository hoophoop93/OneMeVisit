package com.kmichali.onemivisit.mapper;

import com.kmichali.onemivisit.dto.DoctorDTO;
import com.kmichali.onemivisit.dto.VisitDTO;
import com.kmichali.onemivisit.model.Doctor;
import com.kmichali.onemivisit.model.Visit;

import java.util.ArrayList;
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

    public List<DoctorDTO> entityListToDtoList(List<Doctor> entity) {
        List<DoctorDTO> doctorDTOList = new ArrayList<DoctorDTO>();
        for(int i =0; i< entity.size(); i++){
            DoctorDTO doctorDTO = new DoctorDTO();
            doctorDTO.setId(entity.get(i).getId());
            doctorDTO.setName(entity.get(i).getName());
            doctorDTO.setSurname(entity.get(i).getSurname());
            doctorDTO.setSpecialization(entity.get(i).getSpecialization());
            doctorDTO.setRoom(entity.get(i).getRoom());
            doctorDTOList.add(doctorDTO);
        }
        return doctorDTOList;
    }
}
