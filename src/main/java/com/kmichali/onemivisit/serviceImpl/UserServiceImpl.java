package com.kmichali.onemivisit.serviceImpl;

import com.kmichali.onemivisit.model.User;
import com.kmichali.onemivisit.repository.UserRepository;
import com.kmichali.onemivisit.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User save(User entity) {
        return userRepository.save(entity);
    }

    @Override
    public User update(User entity) {
        return userRepository.save(entity);
    }

    @Override
    public void delete(User entity) {
        userRepository.delete(entity);
    }

    @Override
    public void delete(long id) {
        userRepository.deleteById(id);
    }

    @Override
    public Iterable<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User findById(long id) {
        return userRepository.findById(id);
    }

    @Override
    public User findByPesel(String pesel) {
        return userRepository.findByPesel(pesel);
    }

    @Override
    public boolean countByPesel(String pesel) {
        return userRepository.countByPesel(pesel) > 0 ? true: false;
    }
}
