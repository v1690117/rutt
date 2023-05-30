package com.rutt.testsservice.controler

import com.rutt.testsservice.domain.Case
import com.rutt.testsservice.domain.Step
import com.rutt.testsservice.service.CaseService

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.util.*

@RestController
    @RequestMapping("tests-api/cases")
class TestCaseController (private val caseService: CaseService){

    @GetMapping()
    fun findAllCases(): List<Case> {
        return caseService.findAllCases().toList()
    }

    @GetMapping("/create")
    fun createCase(@RequestParam name: String): Case {
        val case = Case(name)
        return caseService.save(case)
    }

    @PostMapping("/create")
    fun createCase(@RequestParam name: String, @RequestBody description: String): Case {
        val case = Case(name)
        case.description = description
        return caseService.save(case)
    }

    @GetMapping("/{id}")
    fun getCaseById(@PathVariable(name = "id") caseId: Long): Case {
        return caseService.findById(caseId)
    }

    @GetMapping("/{id}/rename")
    fun renameCase(@PathVariable(name = "id") caseId: Long, @RequestParam name: String): Case {
        val case = caseService.findById(caseId)
        case.name = name
        return caseService.save(case)
    }

    @PostMapping("/{id}/update_description")
    fun updateDescription(@PathVariable(name = "id") caseId: Long, @RequestParam description: String): Case {
        val case = caseService.findById(caseId)
        case.description = description
        return caseService.save(case)
    }

    @PostMapping("/{id}/add_step", consumes = ["application/json"])
    fun addStepToCase(@RequestBody step: Step,
                      @PathVariable(name = "id") caseId: Long,
                      @RequestParam(required = false) index: Int?): Case {
        val case = caseService.findById(caseId)
        caseService.addStepToCase(step, case, index)
        return caseService.save(case)
    }

    @PostMapping("/{id}/update_step", consumes = ["application/json"])
    fun updateStepAtIndex(@PathVariable(name = "id") caseId: Long,
                          @RequestParam index: Int,
                          @RequestBody newStep: Step): Case {
        val case = caseService.findById(caseId)
        caseService.updateStepInCaseAtIndex(case, index, newStep)
        return caseService.save(case)
    }

    @GetMapping("/{id}/move_step")
    fun moveStepInCase(@PathVariable(name = "id") caseId: Long,
                       @RequestParam from: Int,
                       @RequestParam to: Int): Case {
        val case = caseService.findById(caseId)
        case.moveStep(from, to)
        return caseService.save(case)
    }

    @GetMapping("/{id}/delete_step")
    fun deleteStepAtIndex(@PathVariable(name = "id") caseId: Long, @RequestParam index: Int): Case {
        val case = caseService.findById(caseId)
        caseService.deleteStepInCaseAtIndex(case, index)
        return caseService.save(case)
    }

    @GetMapping("/{id}/delete_case")
    fun deleteCase(@PathVariable(name = "id") caseId: Long, @RequestParam confirm: Boolean) {
        if (confirm) caseService.deleteCase(caseId)
    }
}