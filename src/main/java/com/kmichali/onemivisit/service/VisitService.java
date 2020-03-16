package com.kmichali.onemivisit.service;

import com.kmichali.onemivisit.generic.GenericService;
import com.kmichali.onemivisit.model.User;
import com.kmichali.onemivisit.model.Visit;

import java.util.List;

public interface VisitService extends GenericService<Visit> {

     List<Visit> getVisitByUser(User user);
}
