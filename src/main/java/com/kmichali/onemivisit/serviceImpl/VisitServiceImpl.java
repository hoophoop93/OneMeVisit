package com.kmichali.onemivisit.serviceImpl;

import com.kmichali.onemivisit.dto.VisitDTO;
import com.kmichali.onemivisit.mapper.VisitMapper;
import com.kmichali.onemivisit.model.User;
import com.kmichali.onemivisit.model.Visit;
import com.kmichali.onemivisit.repository.VisitRepository;
import com.kmichali.onemivisit.service.VisitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
@Transactional
public class VisitServiceImpl implements VisitService {


    @Autowired
    private VisitRepository visitRepository;
    private VisitMapper visitMapper;

    @Autowired
    public VisitServiceImpl(){
        this.visitMapper = new VisitMapper();
    }

    @Override
    public Visit save(Visit entity) {
        return visitRepository.save(entity);
    }

    @Override
    public Visit saveFromDTO(VisitDTO dtoEntity) {
        Visit visit = visitMapper.dtoToEntity(dtoEntity);
        return visitRepository.save(visit);
    }

    @Override
    public Visit update(Visit entity) {
        return visitRepository.save(entity);
    }

    @Override
    public Visit updateFromDTO(VisitDTO dtoEntity, Visit entity) {
        Visit visit = visitMapper.dtoToEntityForUpdate(dtoEntity,entity);
        return visitRepository.save(visit);
    }


    @Override
    public void delete(Visit entity) {
        visitRepository.delete(entity);
    }

    @Override
    public void delete(long id) {
        visitRepository.deleteById(id);
    }

    @Override
    public List<Visit> findAll() {
        List<Visit> visitList = StreamSupport.stream(visitRepository.findAll().spliterator(),false).collect(Collectors.toList());
        return visitList;
    }

    @Override
    public Visit findById(long id) {
        return visitRepository.findById(id);
    }

    @Override
    public List<VisitDTO> getVisitByUser(User user) {
        List<Visit> visitList = visitRepository.findByUser(user);
        List<VisitDTO> visitDTO = visitMapper.entityListToDtoList(visitList);

        return visitDTO;
    }
}
