package com.kmichali.onemivisit.utils;

import com.kmichali.onemivisit.model.User;
import com.kmichali.onemivisit.serviceImpl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DataLoader {

    private UserServiceImpl userService;

    @Autowired
    public DataLoader(UserServiceImpl userService) {
        this.userService = userService;
        this.initData();
    }

    private void initData() {
        if (userService.findById(1) == null) {
            User user = new User();
            user.setName("SUPER");
            user.setSurname("USER");
            user.setEmail("email@test.com");
            user.setPhoneNumber("000-111-222");
            user.setPesel("12121212121");
            user.setPassword("password1");

            userService.save(user);
        }
    }
}
