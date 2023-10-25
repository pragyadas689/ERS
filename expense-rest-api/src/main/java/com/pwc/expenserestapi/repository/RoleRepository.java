package com.pwc.expenserestapi.repository;

import com.pwc.expenserestapi.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role,Long> {
}
