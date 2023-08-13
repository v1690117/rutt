package com.rutt.testsservice.clients

import com.rutt.testsservice.api.SuiteAPI
import org.springframework.cloud.openfeign.FeignClient
import org.springframework.context.annotation.Primary

@Primary
@FeignClient(name = "suites", url = "http://localhost:8070")
interface SuiteClient : SuiteAPI