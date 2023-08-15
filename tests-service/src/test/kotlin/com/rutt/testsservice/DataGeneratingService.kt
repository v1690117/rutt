package com.rutt.testsservice

import com.rutt.testsservice.api.SuiteAPI
import com.rutt.testsservice.domain.Case
import com.rutt.testsservice.domain.Suite
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.util.*

@Service
class DataGeneratingService {
    @Autowired
    lateinit var suiteAPI: SuiteAPI

    fun suite(): Suite = suiteAPI.create(Suite("S-${UUID.randomUUID()}", "Sample suite"))

    fun suiteWithCases(casesNumber: Int = 1): Suite {
        val suite = suite()
        val cases = mutableListOf<Case>();
        for (i in 1..casesNumber) {
            cases.add(Case("C-${UUID.randomUUID()}", "sample case"))
        }
        return suiteAPI.addNewCases(suite.id!!, cases)
    }

}