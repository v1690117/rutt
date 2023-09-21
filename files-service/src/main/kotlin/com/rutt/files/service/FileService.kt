package com.rutt.files.service

import com.rutt.files.domain.FileDocument
import com.rutt.files.repository.FileRepository
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile
import software.amazon.awssdk.core.sync.RequestBody
import software.amazon.awssdk.services.s3.S3Client
import software.amazon.awssdk.services.s3.model.GetObjectRequest
import software.amazon.awssdk.services.s3.model.PutObjectRequest
import java.util.*

@Service
class FileService(
    private val fileRepository: FileRepository,
    private val s3Client: S3Client
) {
    fun uploadFile(file: MultipartFile): String {
        val uuid = UUID.randomUUID().toString()
        s3Client.putObject(
            PutObjectRequest.builder().bucket("files").key(uuid).build(),
            RequestBody.fromInputStream(file.inputStream, file.size)
        )
        fileRepository.save(
            FileDocument(
                id = uuid,
                name = file.originalFilename!!
            )
        )
        return uuid
    }

    fun getFileMetadata(id: String): FileDocument {
        return fileRepository.findById(id).orElseThrow();
    }

    fun retrieveFile(id: String): ByteArray {
        val getObjectResponse = s3Client.getObject(
            GetObjectRequest.builder().bucket("files").key(id).build()
        )
        return getObjectResponse.readAllBytes()
    }
}
