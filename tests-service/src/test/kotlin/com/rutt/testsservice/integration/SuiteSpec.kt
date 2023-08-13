package com.rutt.testsservice.integration

import com.rutt.testsservice.FeignTestConfig
import com.rutt.testsservice.api.SuiteAPI
import com.rutt.testsservice.domain.Suite
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.cloud.openfeign.EnableFeignClients
import org.springframework.context.annotation.Import

@EnableFeignClients
@Import(FeignTestConfig::class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
class SuiteSpec {
    @Autowired
    lateinit var suiteAPI: SuiteAPI

    @Test
    fun `after we call create there are more suites in the db`() {
        val suites = suiteAPI.findAll();
        suiteAPI.create(Suite("First one", ""));
        assertThat(suiteAPI.findAll().size).isEqualTo(suites.size + 1);
    }
}