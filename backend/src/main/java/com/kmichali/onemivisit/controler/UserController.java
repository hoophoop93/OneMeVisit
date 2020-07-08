package com.kmichali.onemivisit.controler;

import com.kmichali.onemivisit.dto.UserDTO;
import com.kmichali.onemivisit.model.Role;
import com.kmichali.onemivisit.model.User;
import com.kmichali.onemivisit.serviceImpl.RoleServiceImpl;
import com.kmichali.onemivisit.serviceImpl.UserServiceImpl;
import com.kmichali.onemivisit.utils.AuthorityType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private RoleServiceImpl roleService;

    @PostMapping("/registration")
    public ResponseEntity<String> createUser(@RequestBody UserDTO userDTO) {

        if (userService.countByPesel(userDTO.getPesel())) {
            return new ResponseEntity("The pesel number is already taken!", HttpStatus.BAD_REQUEST);
        }
        User user = userService.saveFromDTO(userDTO);
        Role role = new Role();
        role.setRoleName(AuthorityType.ROLE_USER);
        role.setUser(user);
        roleService.save(role);

        return new ResponseEntity("Success - User created.", HttpStatus.CREATED);
    }

    @PutMapping("/updateUser")
    public ResponseEntity<String> updateUser(@RequestBody UserDTO userDTO) {
        User userToUpdate = userService.findById(userDTO.getId());
        userService.updateFromDTO(userDTO, userToUpdate);
        return new ResponseEntity<>("Success - User updated correctly.", HttpStatus.CREATED);

    }

    @GetMapping("/user/{id}")
    public User findUser(@PathVariable("id") long id) {
        User user = userService.findById(id);
        return user;
    }

    @GetMapping("/user")
    public UserDTO getUser(@RequestParam(value ="pesel") String pesel) {
        UserDTO user = userService.getUserDTOByPesel(pesel);
        return user;
    }
    @GetMapping("/userEmail")
    public UserDTO getUserByEmail(@RequestParam(value = "email") String email) throws Exception {
        UserDTO user = userService.getUserDTOByEmail(email);
        if (user.getEmail() == null) {
            throw new Exception("User not found");
        }
        return user;
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable("id") long id) {
        userService.delete(id);
    }

    @PutMapping()
    public User update(@RequestBody User user) {
        return userService.update(user);
    }

    @GetMapping("/users")
    public Iterable<User> getUsers() {
        return userService.findAll();
    }
}
