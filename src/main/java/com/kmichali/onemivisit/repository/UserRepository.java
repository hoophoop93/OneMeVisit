package com.kmichali.onemivisit.repository;

import com.kmichali.onemivisit.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

     User findById(long id);
     User findByPesel(String pesel);
}
