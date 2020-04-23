package com.kmichali.onemivisit.controler;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@AutoConfigureMockMvc
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void createUser() {
    }

    @Test
    void updateUser() {
    }

    @Test
    void findUser() throws Exception{
        //mockMvc.perform("/user/{id}",1)
    }

    @Test
    void getUser() {
    }

    @Test
    void delete() {
    }

    @Test
    void update() {
    }

    @Test
    void getUsers() {
    }
}