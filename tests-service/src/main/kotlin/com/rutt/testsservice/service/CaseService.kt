package com.rutt.testsservice.service

import com.rutt.testsservice.domain.Case
import com.rutt.testsservice.repository.CaseRepository
import org.springframework.stereotype.Service

@Service
class CaseService(private val caseRepo: CaseRepository) {
    fun findById(id: Long): Case {
        return caseRepo.findById(id).orElseThrow { NoSuchElementException("No test case with id = $id found") }
    }

    fun findAll(): Iterable<Case> {
        return caseRepo.findAll()
    }

    fun create(case: Case): Case {
        for (i in 0 until case.steps.size) {
            case.steps[i].case = case
            case.steps[i].index = i
        }
        return caseRepo.save(case)
    }

    fun update(case: Case): Case {
        // todo temp decision
        return create(case);
    }

    fun delete(caseId: Long) {
        caseRepo.deleteById(caseId)
    }
}