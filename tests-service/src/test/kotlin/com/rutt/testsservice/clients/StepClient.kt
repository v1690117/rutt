package com.rutt.testsservice.clients

import com.rutt.testsservice.api.StepAPI
import org.springframework.cloud.openfeign.FeignClient
import org.springframework.context.annotation.Primary

@Primary
@FeignClient(name = "steps", url = "http://localhost:8070")
interface StepClient : StepAPI