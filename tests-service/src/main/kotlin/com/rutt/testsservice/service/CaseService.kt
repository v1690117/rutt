package com.rutt.testsservice.service

import com.rutt.testsservice.domain.Case
import com.rutt.testsservice.domain.Step
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

    fun addStepToCase(step: Step, case: Case, stepIndex: Int?) {
        if (stepIndex != null) {
            case.addStep(step, stepIndex)
        } else {
            case.addStep(step)
        }
    }

    fun updateStepInCaseAtIndex(case: Case, stepIndex: Int, newStep: Step): Case {
        case.steps[stepIndex].copyFrom(newStep)
        return case
    }

    fun deleteStepInCaseAtIndex(case: Case, stepIndex: Int): Case {
        case.steps.removeAt(stepIndex)
        return case
    }

    fun deleteCase(caseId: Long) {
        caseRepo.deleteById(caseId)
    }
}