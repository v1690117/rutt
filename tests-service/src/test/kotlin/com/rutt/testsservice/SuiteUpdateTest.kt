package com.rutt.testsservice

import com.rutt.testsservice.controler.SuiteController
import com.rutt.testsservice.domain.Suite
import com.rutt.testsservice.dto.SuiteDto
import com.rutt.testsservice.repository.SuiteRepository
import com.rutt.testsservice.service.SuiteService
import org.junit.jupiter.api.Test
import java.util.*
class SuiteUpdateTest {
    @Test
    fun test() {

        val suite = Suite(null, "New description", null, null)
        suiteService.update(0, suite);
    }


    private val suiteService = SuiteService(object : SuiteRepository {
        override fun <S : Suite> save(entity: S): S {
            return entity
        }

        override fun <S : Suite?> saveAll(entities: MutableIterable<S>): MutableIterable<S> {
            return entities
        }

        override fun findAll(): MutableIterable<Suite> {
            return mutableListOf()
        }

        override fun findAllById(ids: MutableIterable<Long>): MutableIterable<Suite> {
            return mutableListOf()
        }

        override fun count(): Long {
            return 0;
        }

        override fun delete(entity: Suite) {
        }

        override fun deleteAllById(ids: MutableIterable<Long>) {
        }

        override fun deleteAll(entities: MutableIterable<Suite>) {
        }

        override fun deleteAll() {
        }

        override fun deleteById(id: Long) {
        }

        override fun existsById(id: Long): Boolean {
            return true
        }

        override fun findById(id: Long): Optional<Suite> {
            return Optional.of(Suite("old title", "old Description", mutableListOf(), 2))
        }
    })

    }
