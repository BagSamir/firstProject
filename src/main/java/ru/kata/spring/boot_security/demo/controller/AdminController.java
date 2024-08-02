package ru.kata.spring.boot_security.demo.controller;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.RoleService;
import ru.kata.spring.boot_security.demo.service.UserService;

import javax.validation.Valid;
import java.security.Principal;

@Controller
public class AdminController {

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final RoleService roleService;

    public AdminController(UserService userService, RoleService roleService, PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.roleService = roleService;
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping(value = "/admin")
    public String pageForAdmin(Principal principal, ModelMap model) {
        model.addAttribute("users", userService.listUsers());
        model.addAttribute("thisUser",
                userService.findByUsername(principal.getName()));
        model.addAttribute("newUser", new User());
        model.addAttribute("roles", roleService.listRoles());
        return "users";
    }

    @GetMapping("/admin/delete")
    public String deleteUser(@RequestParam("id") Long id, Model model) {
        model.addAttribute("user", userService.getById(id));
        return "delete";
    }

    @GetMapping("/admin/update")
    public String updateUser(@RequestParam("id") Long id, Model model) {
        model.addAttribute("user", userService.getById(id));
        return "update-user";
    }

    @GetMapping("/admin/create")
    public String addUser(Model model) {
        model.addAttribute("user", new User());
        model.addAttribute("roles", roleService.listRoles());

        return "create-user";
    }

    @PostMapping("admin/updateuser")
    public String update(@ModelAttribute("user") @Valid User user,
                         BindingResult bindingResult,
                         @RequestParam("role") String selectedRole) {
        if (bindingResult.hasErrors()) {
            return "update-user";
        }

        if (selectedRole.equals("ROLE_USER")) {
            user.setRoles(roleService.findByName("ROLE_USER"));
        } else if (selectedRole.equals("ROLE_ADMIN")) {
            user.setRoles(roleService.findByName("ROLE_ADMIN"));
        }
        userService.update(user);

        return "redirect:/admin";
    }

    @PostMapping("/admin/createuser")
    public String create(@ModelAttribute("user") @Valid User user,
                         BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return "create-user";
        }

        userService.add(user);
        return "redirect:/admin";
    }

    @PostMapping("/admin/deleteuser")
    public String delete(@RequestParam("id") Long id) {
        userService.delete(id);
        return "redirect:/admin";
    }

}
