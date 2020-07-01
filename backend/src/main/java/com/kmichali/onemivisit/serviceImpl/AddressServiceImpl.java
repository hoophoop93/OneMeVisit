package com.kmichali.onemivisit.serviceImpl;

import com.kmichali.onemivisit.dto.AddressDTO;
import com.kmichali.onemivisit.dto.UserDTO;
import com.kmichali.onemivisit.mapper.AddressMapper;
import com.kmichali.onemivisit.mapper.UserMapper;
import com.kmichali.onemivisit.model.Address;
import com.kmichali.onemivisit.model.Doctor;
import com.kmichali.onemivisit.model.User;
import com.kmichali.onemivisit.repository.AddressRepository;
import com.kmichali.onemivisit.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

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
    public Address saveFromDTO(AddressDTO dtoEntity) {
        return null;
    }

    @Override
    public Address update(Address entity) {
        return addressRepository.save(entity);
    }

    @Override
    public Address updateFromDTO(AddressDTO dtoEntity, Address entity) {
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
        List<Address> addressList = StreamSupport.stream(addressRepository.findAll().spliterator(),false).collect(Collectors.toList());
        return addressList;
    }

    @Override
    public Address findById(long id) {
        return addressRepository.findById(id);
    }

    @Override
    public AddressDTO findAddressDtoByUser(User user) {
        Address address = addressRepository.findByUser(user);
        AddressDTO addressDTO = null;
        if(address != null) {
            addressDTO = addressMapper.entityToDto(addressRepository.findByUser(user));
            UserDTO userDto = userMapper.entityToDto(user);
            addressDTO.setUserDTO(userDto);
        }
        return addressDTO;
    }

    @Override
    public Address findByUser(UserDTO userDTO) {
        User user = userMapper.dtoToEntity(userDTO);
        return addressRepository.findByUser(user);
    }
}
