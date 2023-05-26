package com.rutt.testsservice.service

import com.rutt.testsservice.domain.Case
import com.rutt.testsservice.domain.Step
import com.rutt.testsservice.repository.CaseRepository
import com.rutt.testsservice.repository.StepRepository
import org.springframework.stereotype.Service

@Service
class CaseService(private val stepRepo: StepRepository, private val caseRepo: CaseRepository) {

    fun findById(id: Long): Case {
        val case = caseRepo.findById(id).orElseThrow { NoSuchElementException("No test case with id = $id found") }
        case.steps.sortBy { step -> step.index }
        return case
    }

    fun saveCase(case: Case) {
        fixIndexes(case)
        caseRepo.save(case)
    }

    private fun fixIndexes(case: Case) {
        for (i in case.steps.indices) case.steps[i].index = i
    }

    private fun findAllByCaseId(caseId: Long): List<Step> {
        return stepRepo.findAllByCaseId(caseId).sortedWith(compareBy())
    }
}