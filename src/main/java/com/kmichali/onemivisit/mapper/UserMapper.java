package com.kmichali.onemivisit.mapper;

import com.kmichali.onemivisit.dto.UserDTO;
import com.kmichali.onemivisit.dto.VisitDTO;
import com.kmichali.onemivisit.model.User;
import com.kmichali.onemivisit.model.Visit;

public class UserMapper extends BaseMapper<User, UserDTO> {

    @Override
    public User dtoToEntity(UserDTO dto) {
        User user = new User();
        user.setId(dto.getId());
        user.setName(dto.getName());
        user.setSurname(dto.getSurname());
        user.setPesel(dto.getPesel());
        user.setPhoneNumber(dto.getPhoneNumber());
        user.setPassword(dto.getPassword());
        user.setEmail(dto.getEmail());
        return user;
    }

    @Override
    public UserDTO entityToDto(User entity) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(entity.getId());
        userDTO.setName(entity.getName());
        userDTO.setSurname(entity.getSurname());
        userDTO.setPesel(entity.getPesel());
        userDTO.setPhoneNumber(entity.getPhoneNumber());
        userDTO.setPassword(entity.getPassword());
        userDTO.setEmail(entity.getEmail());
        return userDTO;
    }

    public User dtoToEntityForUpdate(UserDTO userdto, User user) {
        user.setId(userdto.getId());
        user.setName(userdto.getName());
        user.setSurname(userdto.getSurname());
        user.setPesel(userdto.getPesel());
        user.setPhoneNumber(userdto.getPhoneNumber());
        user.setPassword(userdto.getPassword());
        user.setEmail(userdto.getEmail());

        return user;
    }
}
