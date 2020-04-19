package com.kmichali.onemivisit.repository;

import com.kmichali.onemivisit.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    User findById(long id);

    User findByPesel(String pesel);

    @Query("select count(u) from User u where u.pesel=:pesel")
    Long countByPesel(String pesel);
}
