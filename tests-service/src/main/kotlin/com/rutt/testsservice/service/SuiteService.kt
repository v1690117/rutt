package com.rutt.testsservice.service

import com.rutt.testsservice.domain.Suite
import com.rutt.testsservice.repository.SuiteRepository
import org.springframework.stereotype.Service
import java.util.logging.Logger
import kotlin.reflect.KMutableProperty
import kotlin.reflect.full.declaredMemberProperties
@Service
class SuiteService(private val suiteRepository: SuiteRepository) {
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
        copyNonNullMutableFields(source, suiteToUpdate)
        return suiteRepository.save(suiteToUpdate)
    }

    fun delete(id: Long) {
        suiteRepository.deleteById(id)
    }

    private fun copyNonNullMutableFields(src: Suite, dst: Suite) {
        val fields = Suite::class.declaredMemberProperties

        for (f in fields) {
            if (f is KMutableProperty<*> && f.getter.call(src) != null) {
                val oldValue = f.getter.call(src)
                f.setter.call(dst, f.getter.call(src))
                log.config("Suite id = ${dst.id} property changed: ${f.name}: $oldValue -> ${f.getter.call(dst)}")
            }
        }
    }

}
