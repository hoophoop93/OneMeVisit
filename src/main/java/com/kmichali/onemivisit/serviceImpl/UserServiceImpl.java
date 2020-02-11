package com.kmichali.onemivisit.serviceImpl;

import com.kmichali.onemivisit.config.CustomUser;
import com.kmichali.onemivisit.model.User;
import com.kmichali.onemivisit.repository.UserRepository;
import com.kmichali.onemivisit.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Arrays;
import java.util.List;

@Service
public class UserServiceImpl implements UserService, UserDetailsService {

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

    /**
     * Get user by pesel. Login process.
     *
     * @param pesel The user's special number
     * @return UserDetails object
     * @throws UsernameNotFoundException No user found
     */
    @Override
    public CustomUser loadUserByUsername(String pesel) throws UsernameNotFoundException {
        User user = userRepository.findByPesel(pesel);
        CustomUser customUser = new CustomUser(user);
        if(user == null){
            throw new UsernameNotFoundException("Invalid pesel or password.");
        }
        return customUser;
    }

    private List<SimpleGrantedAuthority> getAuthorityList(){
        return Arrays.asList(new SimpleGrantedAuthority("USER"));
    }
}
