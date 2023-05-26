package com.rutt.testsservice

import com.rutt.testsservice.domain.Case

class Utils {

    companion object {
        /**
         * Set [index][com.rutt.testsservice.domain.Step.index] fields for all steps in test case according to their position in the list
         */
        fun fixIndexes(case: Case) {
            for (i in case.steps.indices) case.steps[i].index = i
        }
    }
}