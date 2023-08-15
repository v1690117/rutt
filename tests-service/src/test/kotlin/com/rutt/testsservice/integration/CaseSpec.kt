package com.rutt.testsservice.integration

import com.rutt.testsservice.api.CaseAPI
import com.rutt.testsservice.domain.Case
import com.rutt.testsservice.domain.Step
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired

class CaseSpec : IntegrationTest() {
    @Autowired
    lateinit var caseAPI: CaseAPI;

    @Test
    fun `can create case`() {
        val case = Case(
            "title",
            "description",
            mutableListOf(
                Step("do smth", "do smth"),
                Step("do smth else", "do smth else"),
            )
        )
        var createdCase = caseAPI.create(
            case
        );
        assertThat(createdCase.id).isNotNull();
        assertThat(createdCase.title).isEqualTo(case.title);
        assertThat(createdCase.description).isEqualTo(case.description);
        assertThat(createdCase.steps.size).isEqualTo(2);
    }
}
