package com.kmichali.onemivisit.controler;

import com.kmichali.onemivisit.dto.AddressDTO;
import com.kmichali.onemivisit.model.Address;
import com.kmichali.onemivisit.model.User;
import com.kmichali.onemivisit.serviceImpl.AddressServiceImpl;
import com.kmichali.onemivisit.serviceImpl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
public class AddressController {

    @Autowired
    AddressServiceImpl addressService;

    @Autowired
    UserServiceImpl userService;

    @PutMapping("/updateAddress")
    public ResponseEntity<String> updateAddress(@RequestBody AddressDTO addressDTO){
        Address addressToUpdate = addressService.findByUser(addressDTO.getUserDTO());
        addressService.updateFromDTO(addressDTO,addressToUpdate);
        return new ResponseEntity<>("Success - address updated correctly.", HttpStatus.CREATED);
    }

    @GetMapping("/address/{id}")
    public AddressDTO getAddress(@PathVariable("id") long id){
        User user = userService.findById(id);
        AddressDTO address = addressService.findAddressDtoByUser(user);
        return address;
    }

}
