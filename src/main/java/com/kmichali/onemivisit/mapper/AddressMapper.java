package com.kmichali.onemivisit.mapper;

import com.kmichali.onemivisit.dto.AddressDTO;
import com.kmichali.onemivisit.dto.UserDTO;
import com.kmichali.onemivisit.model.Address;
import com.kmichali.onemivisit.model.User;

public class AddressMapper extends BaseMapper<Address, AddressDTO> {

    UserMapper userMapper;
    public AddressMapper(){
        this.userMapper = new UserMapper();
    }
    @Override
    public Address dtoToEntity(AddressDTO dto) {
        Address address = new Address();
        address.setId(dto.getId());
        address.setStreet(dto.getStreet());
        address.setCity(dto.getCity());
        address.setPostalCode(dto.getPostalCode());
        address.setUser(userMapper.dtoToEntity(dto.getUserDTO()));

        return address;
    }

    @Override
    public AddressDTO entityToDto(Address entity) {
        AddressDTO addressDTO = new AddressDTO();
        addressDTO.setId(entity.getId());
        addressDTO.setStreet(entity.getStreet());
        addressDTO.setCity(entity.getCity());
        addressDTO.setPostalCode(entity.getPostalCode());
        addressDTO.setUserDTO(userMapper.entityToDto(entity.getUser()));

        return addressDTO;
    }

    public Address dtoToEntityForUpdate(AddressDTO addressDTO, Address address) {
        if(address == null)
            address = new Address();
        address.setId(addressDTO.getId());
        address.setStreet(addressDTO.getStreet());
        address.setCity(addressDTO.getCity());
        address.setPostalCode(addressDTO.getPostalCode());
        address.setUser(userMapper.dtoToEntity(addressDTO.getUserDTO()));

        return address;
    }
}
