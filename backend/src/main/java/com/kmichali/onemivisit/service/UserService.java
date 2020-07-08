package com.kmichali.onemivisit.service;

import com.kmichali.onemivisit.dto.UserDTO;
import com.kmichali.onemivisit.model.User;

public interface UserService extends GenericService<User, UserDTO> {

    User findById(long id);

    UserDTO findUserDtoByUser(User user);

    User findByPesel(String pesel);

    UserDTO getUserDTOByEmail(String email);

    UserDTO getUserDTOByPesel(String pesel);

    boolean countByPesel(String pesel);
}
