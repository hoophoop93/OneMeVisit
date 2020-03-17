package com.kmichali.onemivisit.service;

import com.kmichali.onemivisit.dto.UserDTO;
import com.kmichali.onemivisit.dto.VisitDTO;
import com.kmichali.onemivisit.utils.GenericService;
import com.kmichali.onemivisit.model.User;
import com.kmichali.onemivisit.model.Visit;
import com.sun.org.apache.xpath.internal.objects.XNull;

import java.util.List;

public interface VisitService extends GenericService<Visit, VisitDTO> {

     List<VisitDTO> getVisitByUser(User user);
}
