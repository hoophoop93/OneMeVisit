package com.kmichali.onemivisit.mapper;

import com.kmichali.onemivisit.dto.VisitDTO;
import com.kmichali.onemivisit.model.Visit;

import java.util.ArrayList;
import java.util.List;

public class VisitMapper extends BaseMapper<Visit, VisitDTO> {

    private DoctorMapper doctorMapper;
    private UserMapper userMapper;

    public VisitMapper(){
        this.doctorMapper = new DoctorMapper();
        this.userMapper = new UserMapper();
    }

    @Override
    public Visit dtoToEntity(VisitDTO dto) {
        Visit visit = new Visit();
        visit.setId(dto.getId());
        visit.setVisitDate(dto.getVisitDate());
        visit.setRegistrationDate(dto.getRegistrationDate());
        visit.setVisitHour(dto.getVisitHour());
        visit.setUser(userMapper.dtoToEntity(dto.getUserDTO()));
        visit.setDoctor(doctorMapper.dtoToEntity(dto.getDoctorDTO()));

        return visit;
    }

    @Override
    public VisitDTO entityToDto(Visit entity) {
        VisitDTO visitDTO = new VisitDTO();
        visitDTO.setId(entity.getId());
        visitDTO.setVisitDate(entity.getVisitDate());
        visitDTO.setRegistrationDate(entity.getRegistrationDate());
        visitDTO.setVisitHour(entity.getVisitHour());
        visitDTO.setUserDTO(userMapper.entityToDto(entity.getUser()));
        visitDTO.setDoctorDTO(doctorMapper.entityToDto(entity.getDoctor()));

        return visitDTO;
    }

    public Visit dtoToEntityForUpdate(VisitDTO dto, Visit visit) {
        visit.setId(dto.getId());
        visit.setVisitDate(dto.getVisitDate());
        visit.setRegistrationDate(dto.getRegistrationDate());
        visit.setVisitHour(dto.getVisitHour());
        visit.setUser(userMapper.dtoToEntity(dto.getUserDTO()));
        visit.setDoctor(doctorMapper.dtoToEntity(dto.getDoctorDTO()));

        return visit;
    }

    public List<VisitDTO> entityListToDtoList(List<Visit> entity) {
        List<VisitDTO> visitDTOList = new ArrayList<VisitDTO>();
        for(int i =0; i< entity.size(); i++){
            VisitDTO visitDTO = new VisitDTO();
            visitDTO.setId(entity.get(i).getId());
            visitDTO.setVisitDate(entity.get(i).getVisitDate());
            visitDTO.setRegistrationDate(entity.get(i).getRegistrationDate());
            visitDTO.setVisitHour(entity.get(i).getVisitHour());
            visitDTO.setUserDTO(userMapper.entityToDto(entity.get(i).getUser()));
            visitDTO.setDoctorDTO(doctorMapper.entityToDto(entity.get(i).getDoctor()));
            visitDTOList.add(visitDTO);
        }
        return visitDTOList;
    }
}
