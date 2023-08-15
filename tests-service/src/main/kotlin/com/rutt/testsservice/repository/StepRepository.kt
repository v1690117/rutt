package com.rutt.testsservice.repository

import com.rutt.testsservice.domain.Step
import org.springframework.data.repository.CrudRepository

interface StepRepository : CrudRepository<Step, Long> {
    fun findStepsByCaseId(id: Long): List<Step>
}