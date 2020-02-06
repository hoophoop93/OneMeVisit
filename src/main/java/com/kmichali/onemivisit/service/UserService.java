package com.kmichali.onemivisit.service;

import com.kmichali.onemivisit.generic.GenericService;
import com.kmichali.onemivisit.model.User;

public interface UserService extends GenericService<User> {

    User findById(long id);
    User findByPesel(String pesel);
}
