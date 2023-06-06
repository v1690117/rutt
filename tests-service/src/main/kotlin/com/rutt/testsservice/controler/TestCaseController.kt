package com.rutt.testsservice.controler

import com.rutt.testsservice.domain.Case
import com.rutt.testsservice.service.CaseService
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("tests-api/cases")
class TestCaseController(private val caseService: CaseService) {

    @GetMapping
    fun findAllCases(): List<Case> {
        return caseService.findAllCases().toList()
    }

    @GetMapping("/{id}")
    fun findCaseById(@PathVariable(name = "id") caseId: Long): Case {
        val case = caseService.findById(caseId)
        return caseService.findById(caseId)
    }

    @PutMapping
    fun updateOrCreateCase(@RequestBody case: Case): Case {
        return caseService.save(case)
    }

    @DeleteMapping("/{id}/delete")
    fun deleteCase(@PathVariable(name = "id") caseId: Long) {
        caseService.deleteCase(caseId)
    }
}