package com.rutt.testsservice.controler

import com.rutt.testsservice.domain.Suite
import com.rutt.testsservice.service.SuiteService
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
class SuiteController(private val suiteService: SuiteService) {
    @GetMapping("/api/suites")
    fun findAll(): List<Suite> {
        return suiteService.findAll().toList()
    }

    @GetMapping("/api/suites/{id}")
    fun get(@PathVariable(name = "id") id: Long): Suite {
        return suiteService.getById(id)
    }

    @PostMapping("/api/suites")
    fun create(@RequestBody suite: Suite): Suite {
        return suiteService.create(suite)
    }

    @PutMapping("/api/suites")
    fun update(@RequestBody suite: Suite): Suite {
        return suiteService.update(suite)
    }

    @DeleteMapping("/api/suites/{id}")
    fun deleteCase(@PathVariable(name = "id") id: Long) {
        suiteService.delete(id)
    }
}
