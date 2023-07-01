package com.rutt.testsservice.security

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configurers.AuthorizeHttpRequestsConfigurer
import org.springframework.security.web.SecurityFilterChain

@Configuration
class SecurityConfig {
    @Bean
    fun defaultSecurityFilterChain(http: HttpSecurity): SecurityFilterChain? {
        (http.authorizeRequests()
            .anyRequest() as AuthorizeHttpRequestsConfigurer<HttpSecurity>.AuthorizedUrl).authenticated()
        http.formLogin()
        http.httpBasic()
        http.csrf().disable()
        return http.build() as SecurityFilterChain
    }
}