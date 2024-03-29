// package com.pwc.expenserestapi.config;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.Customizer;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.core.userdetails.User;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.provisioning.InMemoryUserDetailsManager;
// import org.springframework.security.web.SecurityFilterChain;

// @Configuration
// public class SecurityConfig {
//     SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
//         http.csrf().disable()
//                 .authorizeRequests((authorize) -> authorize
//                         .anyRequest()
//                         .authenticated()
//                 ).httpBasic(Customizer.withDefaults());
//         return http.build();
//     }
//     @Bean
//     public static PasswordEncoder passwordEncoder() {
//         return new BCryptPasswordEncoder();
//     }

//     @Bean
//     public UserDetailsService userDetailsService() {
//         UserDetails mark = User.builder()
//                 .username("Mark")
//                 .password(passwordEncoder().encode("123"))
//                 .roles("USER")
//                 .build();

//         UserDetails admin = User.builder()
//                 .username("admin")
//                 .password(passwordEncoder().encode("123"))
//                 .roles("ADMIN")
//                 .build();
//         return new InMemoryUserDetailsManager(mark, admin);
//     }
// }
