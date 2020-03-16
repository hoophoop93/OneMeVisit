package com.kmichali.onemivisit.repository;

import com.kmichali.onemivisit.model.User;
import com.kmichali.onemivisit.model.Visit;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VisitRepository extends CrudRepository<Visit, Long> {

    List<Visit> findByUser(User user);
}
