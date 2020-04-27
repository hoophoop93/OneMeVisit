package com.kmichali.onemivisit.controler;

import com.kmichali.onemivisit.model.User;
import com.kmichali.onemivisit.serviceImpl.UserServiceImpl;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@RunWith(SpringRunner.class)
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserServiceImpl userServiceMock;

    @Before
    public void init(){
        User user = new User(1L,"User","Super","12345678900","333-333-333","password1","user@test.pl");
        //Optional<User> userObject = Optional.of(user);
        Mockito.when(userServiceMock.findById(1L)).thenReturn(user);
    }

    @Test
    public void createUser() {
        User user = new User();
        user.setId(1L);

    }

    @Test
    public void updateUser() {
    }

    @Test
    public void findUser() throws Exception{
        mockMvc.perform(get("/user/{id}",1L)
                .header("Origin","*"))
                .andDo(print())
                .andExpect(status().isOk());
    }

    @Test
    public void getUser() {
    }

    @Test
    public void delete() {
    }

    @Test
    public void update() {
    }

    @Test
    public void getUsers() {
    }
}