package com.kmichali.onemivisit.serviceImpl;

import com.kmichali.onemivisit.model.MyUserDetails;
import com.kmichali.onemivisit.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class DefaultUserDetailsService implements UserDetailsService {

    @Autowired
    UserServiceImpl userRepository;

    /**
     * Get user by pesel. Login process.
     *
     * @param username The user's pesel number
     * @return UserDetails object
     * @throws UsernameNotFoundException No user found
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = null;

        try {
            user = userRepository.findByPesel(username);

            if (user != null && user.getPesel() != null && !"".equalsIgnoreCase(user.getPesel())) {
                return new MyUserDetails(user);
            } else {
                throw new UsernameNotFoundException("User " + username + " was not found in the database");
            }
        } catch (Exception e) {
            throw new UsernameNotFoundException("User " + username + " was not found in the database");
        }
    }
}
