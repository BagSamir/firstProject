package ru.kata.spring.boot_security.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.kata.spring.boot_security.demo.model.Role;

import java.util.Collection;

public interface RoleDao extends JpaRepository<Role, Long> {
    Collection<Role> findByName(String name);
}
