package com.rutt.testsservice.service

import com.rutt.testsservice.domain.Case
import com.rutt.testsservice.repository.CaseRepository
import org.springframework.stereotype.Service

@Service
class CaseService(private val caseRepo: CaseRepository) {

    fun findById(id: Long): Case {
        return caseRepo.findById(id).orElseThrow { NoSuchElementException("No test case with id = $id found") }
    }

    fun findAllCases(): Iterable<Case> {
        return caseRepo.findAll()
    }

    fun save(case: Case): Case {
        return caseRepo.save(case)
    }

    fun deleteCase(caseId: Long) {
        caseRepo.deleteById(caseId)
    }
}