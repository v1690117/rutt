package com.rutt.testsservice.clients

import com.rutt.testsservice.DataGeneratingService
import com.rutt.testsservice.api.CaseAPI
import com.rutt.testsservice.api.StepAPI
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class API {
    @Autowired
    lateinit var dataService: DataGeneratingService

    @Autowired
    lateinit var stepAPI: StepAPI

    @Autowired
    lateinit var caseAPI: CaseAPI
}