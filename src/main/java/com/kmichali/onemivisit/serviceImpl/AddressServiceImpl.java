package com.kmichali.onemivisit.serviceImpl;

import com.kmichali.onemivisit.dto.AddressDTO;
import com.kmichali.onemivisit.dto.UserDTO;
import com.kmichali.onemivisit.mapper.AddressMapper;
import com.kmichali.onemivisit.mapper.UserMapper;
import com.kmichali.onemivisit.model.Address;
import com.kmichali.onemivisit.model.User;
import com.kmichali.onemivisit.repository.AddressRepository;
import com.kmichali.onemivisit.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class AddressServiceImpl implements AddressService {

    @Autowired
    AddressRepository addressRepository;

    AddressMapper addressMapper;

    UserMapper userMapper;

    public AddressServiceImpl(){
        this.addressMapper = new AddressMapper();
        this.userMapper = new UserMapper();
    }

    @Override
    public Address save(Address entity) {
        return addressRepository.save(entity);
    }

    @Override
    public Address saveDTO(AddressDTO dtoEntity) {
        return null;
    }

    @Override
    public Address update(Address entity) {
        return addressRepository.save(entity);
    }

    @Override
    public Address updateDTO(AddressDTO dtoEntity, Address entity) {
        Address address = addressMapper.dtoToEntityForUpdate(dtoEntity,entity);
        return addressRepository.save(address);
    }


    @Override
    public void delete(Address entity) {
        addressRepository.delete(entity);
    }

    @Override
    public void delete(long id) {
        addressRepository.deleteById(id);
    }

    @Override
    public List<Address> findAll() {
        //return addressRepository.findAll();
        return null;
    }

    @Override
    public Address findById(long id) {
        return addressRepository.findById(id);
    }

    @Override
    public AddressDTO findAddressDtoByUser(User user) {
        AddressDTO addressDTO = addressMapper.entityToDto(addressRepository.findByUser(user));
        UserDTO userDto = userMapper.entityToDto(user);
        addressDTO.setUserDTO(userDto);
        return addressDTO;
    }

    @Override
    public Address findByUser(UserDTO userDTO) {
        User user = userMapper.dtoToEntity(userDTO);
        return addressRepository.findByUser(user);
    }
}
