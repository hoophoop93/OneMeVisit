package com.kmichali.onemivisit.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.kmichali.onemivisit.utils.AuthorityType;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="role")
public class Role implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Enumerated(EnumType.STRING)
    private AuthorityType roleName;

    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name="user_id", nullable = false)
    private User user;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public AuthorityType getRoleName() {
        return roleName;
    }

    public void setRoleName(AuthorityType roleName) {
        this.roleName = roleName;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
