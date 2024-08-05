package ru.kata.spring.boot_security.demo.dao;

import org.springframework.stereotype.Repository;
import ru.kata.spring.boot_security.demo.model.Role;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class RoleDaoImpl implements RoleDao{

    @PersistenceContext
    private EntityManager em;

    @Override
    public List<Role> findByName(String name) {
        return em.createQuery("SELECT role from Role role where role.name = :name", Role.class)
                .setParameter("name", name).getResultList();
    }

    @Override
    public List<Role> listRoles() {
        return em.createQuery("SELECT role from Role role", Role.class).getResultList();
    }
}
