package com.kmichali.onemivisit.service;

import com.kmichali.onemivisit.dto.VisitDTO;
import com.kmichali.onemivisit.model.User;
import com.kmichali.onemivisit.model.Visit;

import java.util.List;

public interface VisitService extends GenericService<Visit, VisitDTO> {

    Visit findById(long id);

    List<VisitDTO> getVisitByUser(User user);
}
