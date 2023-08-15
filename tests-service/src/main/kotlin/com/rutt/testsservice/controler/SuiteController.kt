package com.rutt.testsservice.controler

import com.rutt.testsservice.api.SuiteAPI
import com.rutt.testsservice.domain.Case
import com.rutt.testsservice.domain.Suite
import com.rutt.testsservice.service.SuiteService
import org.springframework.web.bind.annotation.RestController

@RestController
class SuiteController(private val suiteService: SuiteService) : SuiteAPI {
    override fun findAll(): List<Suite> {
        return suiteService.findAll().toList()
    }

    override fun get(id: Long): Suite {
        return suiteService.getById(id)
    }

    override fun create(suite: Suite): Suite {
        return suiteService.create(suite)
    }

    override fun addNewCases(suiteId: Long, cases: List<Case>): Suite {
        return suiteService.addNewCasesToSuite(suiteId, cases)
    }

    override fun addExistingCases(suiteId: Long, caseIds: List<Long>): Suite {
        return suiteService.addExistingCases(suiteId, caseIds)
    }

    override fun update(id: Long, newSuite: Suite): Suite {
        return suiteService.update(id, newSuite)
    }

    override fun deleteCase(id: Long) {
        suiteService.delete(id)
    }
}
