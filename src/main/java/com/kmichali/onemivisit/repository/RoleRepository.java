package com.kmichali.onemivisit.repository;

import com.kmichali.onemivisit.model.Role;
import com.kmichali.onemivisit.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends CrudRepository<Role, Long> {
}
