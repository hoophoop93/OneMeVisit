package com.kmichali.onemivisit.serviceImpl;

import com.kmichali.onemivisit.model.Address;
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

    @Override
    public Address save(Address entity) {
        return addressRepository.save(entity);
    }

    @Override
    public Address saveDTO(Void entity) {
        return null;
    }


    @Override
    public Address update(Address entity) {
        return addressRepository.save(entity);
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
}
