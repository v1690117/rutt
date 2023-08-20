package com.rutt.files.domain

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "files")
data class FileDocument(
    @Id val id: String? = null,
    val name: String,
)