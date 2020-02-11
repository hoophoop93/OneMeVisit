package com.kmichali.onemivisit.config;

import com.kmichali.onemivisit.model.Role;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class CustomUser extends User {


    private Collection<? extends GrantedAuthority> userRole;

    public CustomUser(com.kmichali.onemivisit.model.User user) {
        //super(user.getPesel(), user.getPassword(), (Collection<? extends GrantedAuthority>) user.getRoleList());
        super(user.getPesel(), user.getPassword(), getUserRole(user.getRoleList()));
    }
    private static Collection<? extends GrantedAuthority> getUserRole(List<Role> roles){
        List<GrantedAuthority> roleList = new ArrayList<>();
        String name = null;
        for(Role role: roles){
            name = role.getRoleName();
            roleList.add(new SimpleGrantedAuthority(name));
        }
        return roleList;
    }
}
