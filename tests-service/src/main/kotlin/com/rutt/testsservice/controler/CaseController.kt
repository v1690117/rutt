package com.rutt.testsservice.controler

import com.rutt.testsservice.api.CaseAPI
import com.rutt.testsservice.domain.Case
import com.rutt.testsservice.domain.Step
import com.rutt.testsservice.service.CaseService
import org.springframework.web.bind.annotation.RestController

@RestController
class CaseController(private val caseService: CaseService) : CaseAPI {
    override fun findAll(): List<Case> {
        return caseService.findAll().toList()
    }

    override fun findById(caseId: Long): Case {
        return caseService.findById(caseId)
    }

    override fun create(case: Case): Case {
        return caseService.create(case)
    }

    override fun update(case: Case): Case {
        return caseService.update(case)
    }

    override fun delete(caseId: Long) {
        caseService.delete(caseId)
    }

    override fun getSteps(id: Long): List<Step> {
        return caseService.getSteps(id)
    }

    override fun addStep(id: Long, step: Step) {
        caseService.addStep(id, step)
    }
}