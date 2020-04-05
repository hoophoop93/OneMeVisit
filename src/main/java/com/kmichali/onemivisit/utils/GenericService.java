package com.kmichali.onemivisit.utils;

import java.util.List;

public interface GenericService<T extends Object, D> {

    T save(T entity);
    T saveDTO(D dtoEntity);
    T update(T entity);
    T updateDTO(D dtoEntity, T entity);
    void delete(T entity);
    void delete(long id);
    List<T> findAll();
}
