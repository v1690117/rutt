package com.rutt.testsservice.integration

import com.rutt.testsservice.clients.API
import com.rutt.testsservice.domain.Step
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import java.util.*

class StepSpec : IntegrationTest() {
    @Autowired
    lateinit var api: API

    @Test
    fun `basic usage scenario`() {
        val case = api.dataService.suiteWithCases(1).cases[0]
        var steps = api.caseAPI.getSteps(case.id!!)
        assertThat(steps.size).isEqualTo(0)

        api.caseAPI.addStep(
            case.id!!,
            Step("STEP-${UUID.randomUUID()}", "sample step")
        )
        api.caseAPI.addStep(
            case.id!!,
            Step("STEP-${UUID.randomUUID()}", "sample step")
        )
        steps = api.caseAPI.getSteps(case.id!!)
        assertThat(steps.size).isEqualTo(2)
        assertThat(steps[0].index).isEqualTo(0)
        assertThat(steps[1].index).isEqualTo(1)
    }
}
