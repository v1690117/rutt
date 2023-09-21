package com.rutt.files.repository

import com.rutt.files.domain.FileDocument
import org.springframework.data.mongodb.repository.MongoRepository

interface FileRepository : MongoRepository<FileDocument, String>
