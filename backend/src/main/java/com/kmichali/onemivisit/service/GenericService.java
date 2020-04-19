package com.kmichali.onemivisit.service;

import java.util.List;

public interface GenericService<T extends Object, D> {

    T save(T entity);
    T saveFromDTO(D dtoEntity);
    T update(T entity);
    T updateFromDTO(D dtoEntity, T entity);
    void delete(T entity);
    void delete(long id);
    List<T> findAll();
}
