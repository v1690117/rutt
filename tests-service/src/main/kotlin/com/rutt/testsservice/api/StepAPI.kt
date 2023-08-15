package com.rutt.testsservice.api

import com.rutt.testsservice.domain.Step
import org.springframework.web.bind.annotation.*

interface StepAPI {
    @GetMapping("/steps/{id}")
    fun get(@PathVariable(name = "id") id: Long): Step

    @PutMapping("/steps")
    fun update(@RequestBody step: Step): Step
}
