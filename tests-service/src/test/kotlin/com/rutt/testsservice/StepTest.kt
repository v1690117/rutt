package com.rutt.testsservice

import org.assertj.core.util.Lists
import org.junit.jupiter.api.Test

class StepTest {

    @Test
    fun test() {
        var list: List<Int> = Lists.newArrayList(1,2,3,4,5)
        print(list[1])
    }
}