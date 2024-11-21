package com.niasian.Camplogin.repository;

import com.niasian.Camplogin.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface userRepo extends JpaRepository<User, String> {

    Optional<User> findByEmail(String email);
}
