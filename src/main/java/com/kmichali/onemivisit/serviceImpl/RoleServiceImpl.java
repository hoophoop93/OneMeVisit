package com.kmichali.onemivisit.serviceImpl;

import com.kmichali.onemivisit.model.Role;
import com.kmichali.onemivisit.repository.RoleRepository;
import com.kmichali.onemivisit.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    RoleRepository roleRepository;

    @Override
    public Role save(Role entity) {
        return roleRepository.save(entity);
    }

    @Override
    public Role saveDTO(Void dtoEntity) {
        return null;
    }

    @Override
    public Role update(Role entity) {
        return null;
    }

    @Override
    public Role updateDTO(Void dtoEntity, Role entity) {
        return null;
    }


    @Override
    public void delete(Role entity) {

    }

    @Override
    public void delete(long id) {

    }

    @Override
    public List<Role> findAll() {
        return null;
    }
}
