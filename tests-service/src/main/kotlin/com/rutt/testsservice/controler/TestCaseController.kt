package com.rutt.testsservice.controler

import com.rutt.testsservice.domain.Case
import com.rutt.testsservice.service.CaseService
import org.springframework.web.bind.annotation.*

@RestController
class TestCaseController(private val caseService: CaseService) {
    @GetMapping("/api/cases")
    fun findAll(): List<Case> {
        return caseService.findAll().toList()
    }

    @GetMapping("/api/cases/{id}")
    fun findById(@PathVariable(name = "id") caseId: Long): Case {
        return caseService.findById(caseId)
    }

    @PostMapping("/api/cases")
    fun create(@RequestBody case: Case): Case {
        return caseService.create(case)
    }

    @PutMapping("/api/cases")
    fun update(@RequestBody case: Case): Case {
        return caseService.update(case)
    }

    @DeleteMapping("/api/cases/{id}/delete")
    fun delete(@PathVariable(name = "id") caseId: Long) {
        caseService.delete(caseId)
    }
}