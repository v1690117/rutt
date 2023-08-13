package com.rutt.testsservice.api

import com.rutt.testsservice.domain.Case
import com.rutt.testsservice.domain.Suite
import org.springframework.cloud.openfeign.FeignClient
import org.springframework.web.bind.annotation.*

@FeignClient(name = "suites", url = "http://localhost:8070")
interface SuiteAPI {
    @GetMapping("/suites")
    fun findAll(): List<Suite>;

    @GetMapping("/suites/{id}")
    fun get(@PathVariable(name = "id") id: Long): Suite

    @PostMapping("/suites")
    fun create(@RequestBody suite: Suite): Suite;

    @PostMapping("/suites/{id}/cases")
    fun addNewCases(@PathVariable(name = "id") suiteId: Long, @RequestBody cases: List<Case>): Suite

    @PutMapping("/suites/{id}/cases")
    fun addExistingCases(@PathVariable(name = "id") suiteId: Long, @RequestBody caseIds: List<Long>): Suite

    @PutMapping("/suites/{id}")
    fun update(@PathVariable id: Long, @RequestBody newSuite: Suite): Suite

    @DeleteMapping("/suites/{id}")
    fun deleteCase(@PathVariable(name = "id") id: Long)
}

