package com.kmichali.onemivisit.controler;

import com.kmichali.onemivisit.model.User;
import com.kmichali.onemivisit.serviceImpl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
public class UserController {

    @Autowired
    UserServiceImpl userService;

    @PostMapping("/register")
    public User createUser(@RequestBody User user){
        return  userService.save(user);
    }

    @GetMapping("/user/{id}")
    public User findUser(@PathVariable("id") long id){
        return userService.findById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable("id") long id){
        userService.delete(id);
    }

    @PutMapping()
    public User update(@RequestBody User user){
        return userService.update(user);
    }

    @GetMapping("/users")
    public Iterable<User> getUsers(){
        return userService.findAll();
    }
}
