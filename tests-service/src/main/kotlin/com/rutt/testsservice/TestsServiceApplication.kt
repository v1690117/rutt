package com.rutt.testsservice

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class TestsServiceApplication

fun main(args: Array<String>) {
    runApplication<TestsServiceApplication>(*args)
}
