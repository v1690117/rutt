package com.rutt.testsservice.service

import com.rutt.testsservice.domain.Suite
import com.rutt.testsservice.repository.SuiteRepository
import org.springframework.stereotype.Service

@Service
class SuiteService(private val suiteRepository: SuiteRepository) {
    fun findAll(): MutableIterable<Suite> {
        return suiteRepository.findAll()
    }

    fun getById(id: Long): Suite {
        return suiteRepository.findById(id).orElseThrow()
    }

    fun create(suite: Suite): Suite {
        return suiteRepository.save(suite)
    }

    fun update(suite: Suite): Suite {
        // todo temp decision
        return create(suite)
    }

    fun delete(id: Long) {
        suiteRepository.deleteById(id)
    }
}
