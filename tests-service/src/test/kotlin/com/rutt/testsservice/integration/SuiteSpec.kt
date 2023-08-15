package com.rutt.testsservice.integration

import com.rutt.testsservice.DataGeneratingService
import com.rutt.testsservice.api.CaseAPI
import com.rutt.testsservice.api.SuiteAPI
import com.rutt.testsservice.domain.Case
import com.rutt.testsservice.domain.Step
import com.rutt.testsservice.domain.Suite
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired

class SuiteSpec : IntegrationTest() {
    @Autowired
    lateinit var suiteAPI: SuiteAPI

    @Autowired
    lateinit var caseAPI: CaseAPI

    @Autowired
    lateinit var dataService: DataGeneratingService

    @Test
    fun `after we call create there are more suites in the db`() {
        val suites = suiteAPI.findAll()
        dataService.suite()
        assertThat(suiteAPI.findAll().size).isEqualTo(suites.size + 1)
    }

    @Test
    fun `can add existing case into suite`() {
        var suite = dataService.suiteWithCases()

        var case = caseAPI.create(
            Case(
                "title",
                "description",
                mutableListOf(
                    Step("do smth", "do smth"),
                    Step("do smth else", "do smth else"),
                )
            )
        )

        suiteAPI.addExistingCases(suite.id!!, listOf(case.id!!))

        var anotherSuite = suiteAPI.create(Suite("Second one"))
        suiteAPI.addExistingCases(anotherSuite.id!!, listOf(case.id!!))

        suite = suiteAPI.get(suite.id!!)
        assertThat(suite.cases.size).isEqualTo(2)

        anotherSuite = suiteAPI.get(anotherSuite.id!!)
        assertThat(anotherSuite.cases.size).isEqualTo(1)

        case = caseAPI.findById(case.id!!)
        assertThat(case.suites.size).isEqualTo(2)
    }
}
