package com.rutt.testsservice.security

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Profile
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.web.SecurityFilterChain

@Configuration
class SecurityConfig {
    @Profile("production")
    @Bean
    fun defaultSecurityFilterChain(http: HttpSecurity): SecurityFilterChain? {
        http.authorizeRequests().anyRequest().authenticated()
        http.formLogin()
        http.httpBasic()
        http.csrf().disable()
        return http.build() as SecurityFilterChain
    }

    @Profile("!production")
    @Bean
    fun localSecurityFilterChaing(http: HttpSecurity): SecurityFilterChain? {
        return http.csrf().disable().build() as SecurityFilterChain
    }
}