package com.rutt.testsservice.api

import com.rutt.testsservice.domain.Case
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
}
