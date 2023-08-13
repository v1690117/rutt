package com.rutt.testsservice.api

import com.rutt.testsservice.domain.Suite
import org.springframework.cloud.openfeign.FeignClient
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody

@FeignClient(name = "suites", url = "http://localhost:8070")
interface SuiteAPI {
    @GetMapping("/suites")
    fun findAll(): List<Suite>;

    @PostMapping("/suites")
    fun create(@RequestBody suite: Suite): Suite;
}

