package com.rutt.testsservice.controler

import com.rutt.testsservice.domain.Case
import com.rutt.testsservice.domain.Suite
import com.rutt.testsservice.service.SuiteService
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
class SuiteController(private val suiteService: SuiteService) {
    @GetMapping("/suites")
    fun findAll(): List<Suite> {
        return suiteService.findAll().toList()
    }

    @GetMapping("/suites/{id}")
    fun get(@PathVariable(name = "id") id: Long): Suite {
        return suiteService.getById(id)
    }

    @PostMapping("/suites")
    fun create(@RequestBody suite: Suite): Suite {
        return suiteService.create(suite)
    }

    @PostMapping("/suites/{id}/cases")
    fun addNewCases(@PathVariable(name = "id") suiteId: Long, @RequestBody cases: List<Case>): Suite {
        return suiteService.addNewCasesToSuite(cases, suiteId)
    }

    @PutMapping("/suites/{id}/cases")
    fun addExistingCases(@PathVariable(name = "id") suiteId: Long, @RequestBody caseIds: List<Long>): Suite {
        return suiteService.addExistingCasesToSuiteById(caseIds, suiteId)
    }


    @PutMapping("/suites/{id}")
    fun update(@RequestBody newSuite: Suite, @PathVariable id: Long): Suite {
        return suiteService.update(id, newSuite)
    }

    @DeleteMapping("/suites/{id}")
    fun deleteCase(@PathVariable(name = "id") id: Long) {
        suiteService.delete(id)
    }
}
