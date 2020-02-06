package com.kmichali.onemivisit.serviceImpl;

import com.kmichali.onemivisit.model.Visit;
import com.kmichali.onemivisit.repository.VisitRepository;
import com.kmichali.onemivisit.service.VisitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class VisitServiceImpl implements VisitService {


    @Autowired
    VisitRepository visitRepository;

    @Override
    public Visit save(Visit entity) {
        return visitRepository.save(entity);
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
    public Iterable<Visit> findAll() {
        return visitRepository.findAll();
    }
}
