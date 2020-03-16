package com.kmichali.onemivisit.utils;

import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BCryptHashPassword {

    @Bean
    public static String hashPassword(String text) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String hashedPassword = passwordEncoder.encode(text);

        return hashedPassword;
    }

    @Bean
    public static boolean checkPassword(String providedPassword, String hashedPasswordFromDatabase) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        return passwordEncoder.matches(providedPassword, hashedPasswordFromDatabase);
    }
}
