package com.kmichali.onemivisit.serviceImpl;

import com.kmichali.onemivisit.dto.UserDTO;
import com.kmichali.onemivisit.mapper.UserMapper;
import com.kmichali.onemivisit.model.User;
import com.kmichali.onemivisit.repository.UserRepository;
import com.kmichali.onemivisit.service.UserService;
import com.kmichali.onemivisit.utils.BCryptHashPassword;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    private UserMapper userMapper;

    @Autowired
    public UserServiceImpl(){
        this.userMapper = new UserMapper();
    }

    @Override
    public User save(User entity) {
        return userRepository.save(entity);
    }

    @Override
    public User saveDTO(UserDTO dtoEntity) {
        User user = userMapper.dtoToEntity(dtoEntity);
        user.setPassword(BCryptHashPassword.hashPassword(user.getPassword()));
        return userRepository.save(user);
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
    public List<User> findAll() {
        //return userRepository.findAll();
        return null;
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
