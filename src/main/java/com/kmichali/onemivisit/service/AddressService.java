package com.kmichali.onemivisit.service;

import com.kmichali.onemivisit.dto.AddressDTO;
import com.kmichali.onemivisit.dto.UserDTO;
import com.kmichali.onemivisit.model.User;
import com.kmichali.onemivisit.utils.GenericService;
import com.kmichali.onemivisit.model.Address;

public interface AddressService extends GenericService<Address, AddressDTO> {
    Address findById(long id);
    AddressDTO findAddressDtoByUser(User user);
    Address findByUser(UserDTO user);
}
