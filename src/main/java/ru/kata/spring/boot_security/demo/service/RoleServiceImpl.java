package ru.kata.spring.boot_security.demo.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.kata.spring.boot_security.demo.dao.RoleDao;
import ru.kata.spring.boot_security.demo.model.Role;
import java.util.Collection;

@Service
public class RoleServiceImpl implements RoleService {
    private final RoleDao roleDao;

    public RoleServiceImpl(RoleDao roleRepository) {
        this.roleDao = roleRepository;
    }

    @Override
    public Collection<Role> findByName(String name) {
        return roleDao.findByName(name);
    }

    @Override
    @Transactional
    public Collection<Role> listRoles() {
        return roleDao.findAll();
    }

    @Override
    @Transactional
    public void addRole(Role role) {
        roleDao.save(role);
    }

    @Override
    @Transactional
    public void updateRole(Role role) {
        roleDao.save(role);
    }
    @Override
    @Transactional
    public void deleteRole(Role role) {
        roleDao.delete(role);
    }
}
