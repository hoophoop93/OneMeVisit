package com.kmichali.onemivisit.repository;

import com.kmichali.onemivisit.model.Address;
import com.kmichali.onemivisit.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepository extends CrudRepository<Address, Long> {

    Address findById(long id);

    Address findByUser(User user);
}
