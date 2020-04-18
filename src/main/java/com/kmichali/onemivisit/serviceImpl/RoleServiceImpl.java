package com.kmichali.onemivisit.serviceImpl;

import com.kmichali.onemivisit.model.Address;
import com.kmichali.onemivisit.model.Role;
import com.kmichali.onemivisit.repository.RoleRepository;
import com.kmichali.onemivisit.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    RoleRepository roleRepository;

    @Override
    public Role save(Role entity) {
        return roleRepository.save(entity);
    }

    @Override
    public Role saveFromDTO(Void dtoEntity) {
        return null;
    }

    @Override
    public Role update(Role entity) {
        return null;
    }

    @Override
    public Role updateFromDTO(Void dtoEntity, Role entity) {
        return null;
    }

    @Override
    public void delete(Role entity) {
        this.roleRepository.delete(entity);
    }

    @Override
    public void delete(long id) {
        this.roleRepository.deleteById(id);
    }

    @Override
    public List<Role> findAll() {
        List<Role> roleList = StreamSupport.stream(roleRepository.findAll().spliterator(),false).collect(Collectors.toList());
        return roleList;
    }
}
