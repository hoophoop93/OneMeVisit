package com.kmichali.onemivisit.serviceImpl;

import com.kmichali.onemivisit.dto.UserDTO;
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
    public Visit saveDTO(VisitDTO dtoEntity) {
        Visit visit = visitMapper.dtoToEntity(dtoEntity);
        return visitRepository.save(visit);
    }

    @Override
    public Visit update(Visit entity) {
        return visitRepository.save(entity);
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
        //return visitRepository.findAll();
        return null;
    }

    @Override
    public List<VisitDTO> getVisitByUser(User user) {
        List<Visit> visitList = visitRepository.findByUser(user);

        List<VisitDTO> visitDTO = visitMapper.entityListToDtoList(visitList);

        return visitDTO;
    }
}
