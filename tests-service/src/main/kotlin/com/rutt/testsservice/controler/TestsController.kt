package com.rutt.testsservice.controler

import com.rutt.testsservice.domain.Step
import com.rutt.testsservice.repository.StepRepository
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
class TestsController (private val stepRepo: StepRepository){

    @GetMapping("tests/steps")
    fun getStepsByCaseId(@RequestParam(name = "case_id") caseId: Long): List<Step> {
        return stepRepo.findAllByCaseId(caseId)
    }
}