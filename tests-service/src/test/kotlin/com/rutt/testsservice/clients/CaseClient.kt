package com.rutt.testsservice.clients

import com.rutt.testsservice.api.CaseAPI
import org.springframework.cloud.openfeign.FeignClient
import org.springframework.context.annotation.Primary

@Primary
@FeignClient(name = "cases", url = "http://localhost:8070")
interface CaseClient : CaseAPI