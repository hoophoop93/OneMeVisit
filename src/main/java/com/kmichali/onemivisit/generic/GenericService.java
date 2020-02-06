package com.kmichali.onemivisit.generic;

public interface GenericService<T extends Object> {

    T save(T entity);
    T update(T entity);
    void delete(T entity);
    void delete(long id);
    Iterable<T> findAll();
}
