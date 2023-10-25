package com.pwc.expenserestapi.repository;


import com.pwc.expenserestapi.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
