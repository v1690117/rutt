package com.rutt.testsservice.service

import com.rutt.testsservice.domain.Case
import com.rutt.testsservice.domain.Suite
import com.rutt.testsservice.repository.CaseRepository
import com.rutt.testsservice.repository.SuiteRepository
import org.springframework.stereotype.Service
import java.util.logging.Logger

@Service
class SuiteService(
    private val suiteRepository: SuiteRepository,
    private val caseRepository: CaseRepository,
    private val caseService: CaseService
) {
    val log: Logger = Logger.getLogger(this.javaClass.name)

    fun findAll(): MutableIterable<Suite> {
        return suiteRepository.findAll()
    }

    fun getById(id: Long): Suite {
        return suiteRepository.findById(id).orElseThrow()
    }

    fun create(suite: Suite): Suite {
        return suiteRepository.save(suite)
    }

    fun update(id: Long, source: Suite): Suite {
        val suiteToUpdate = suiteRepository.findById(id).orElseThrow()

        if (source.title != null) {
            suiteToUpdate.title = source.title
        }
        if (source.description != null) {
            suiteToUpdate.description = source.description
        }
        val cases = source.cases
        if (cases.isNotEmpty()) {
            suiteToUpdate.cases = cases
        }
        return suiteRepository.save(suiteToUpdate)
    }

    fun addNewCasesToSuite(suiteId: Long, cases: List<Case>): Suite {
        return addExistingCasesToSuite(suiteId, cases.map { c -> caseService.create(c) })
    }

    fun addExistingCases(suiteId: Long, ids: List<Long>): Suite {
        return addExistingCasesToSuite(suiteId, caseRepository.findAllById(ids).toList())
    }

    fun addExistingCasesToSuite(suiteId: Long, cases: List<Case>): Suite {
        val suite = suiteRepository.findById(suiteId).orElseThrow()
        suite.cases.addAll(cases)
        return suiteRepository.save(suite)
    }


    fun delete(id: Long) {
        suiteRepository.deleteById(id)
    }
}
