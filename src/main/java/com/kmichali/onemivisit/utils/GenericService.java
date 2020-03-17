package com.kmichali.onemivisit.utils;

public interface GenericService<T extends Object, D> {

    T save(T entity);
    T saveDTO(D entity);
    T update(T entity);
    void delete(T entity);
    void delete(long id);
    Iterable<T> findAll();
}
