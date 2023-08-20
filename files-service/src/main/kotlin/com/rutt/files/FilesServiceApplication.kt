package com.rutt.files

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
open class FilesServiceApplication

fun main(args: Array<String>) {
    runApplication<FilesServiceApplication>(*args)
}
