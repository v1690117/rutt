package com.rutt.testsservice.api

import com.rutt.testsservice.domain.Case
import com.rutt.testsservice.domain.Step
import org.springframework.web.bind.annotation.*

interface CaseAPI {
    @GetMapping("/api/cases")
    fun findAll(): List<Case>

    @GetMapping("/api/cases/{id}")
    fun findById(@PathVariable(name = "id") caseId: Long): Case

    @PostMapping("/api/cases")
    fun create(@RequestBody case: Case): Case

    @PutMapping("/api/cases")
    fun update(@RequestBody case: Case): Case

    @DeleteMapping("/api/cases/{id}/delete")
    fun delete(@PathVariable(name = "id") caseId: Long)

    @GetMapping("/api/cases/{id}/steps")
    fun getSteps(@PathVariable(name = "id") caseId: Long): List<Step>

    @PostMapping("/api/cases/{id}/steps")
    fun addStep(@PathVariable id: Long, @RequestBody step: Step)
}
