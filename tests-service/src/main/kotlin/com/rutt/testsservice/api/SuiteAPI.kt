package com.rutt.testsservice.api

import com.rutt.testsservice.domain.Case
import com.rutt.testsservice.domain.Suite
import org.springframework.web.bind.annotation.*

interface SuiteAPI {
    @GetMapping("/api/suites")
    fun findAll(): List<Suite>;

    @GetMapping("/api/suites/{id}")
    fun get(@PathVariable(name = "id") id: Long): Suite

    @PostMapping("/api/suites")
    fun create(@RequestBody suite: Suite): Suite;

    @PostMapping("/api/suites/{id}/cases")
    fun addNewCases(@PathVariable(name = "id") suiteId: Long, @RequestBody cases: List<Case>): Suite

    @PutMapping("/api/suites/{id}/cases")
    fun addExistingCases(@PathVariable(name = "id") suiteId: Long, @RequestBody caseIds: List<Long>): Suite

    @PutMapping("/api/suites/{id}")
    fun update(@PathVariable id: Long, @RequestBody newSuite: Suite): Suite

    @DeleteMapping("/api/suites/{id}")
    fun deleteCase(@PathVariable(name = "id") id: Long)
}
