package com.rutt.files.controler

import com.rutt.files.domain.FileDocument
import com.rutt.files.service.FileService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile

@RestController
@RequestMapping("/files")
class FileController(private val fileService: FileService) {

    @PostMapping("/upload")
    fun uploadFile(@RequestParam("file") file: MultipartFile): String {
        return fileService.uploadFile(file)
    }

    @GetMapping("/{id}")
    fun getFile(@PathVariable id: String): FileDocument {
        return fileService.getFileMetadata(id)
    }

    @GetMapping("/{id}/content")
    fun download(@PathVariable id: String): ResponseEntity<ByteArray> {
        val fileBytes = fileService.retrieveFile(id)
        return ResponseEntity.ok(fileBytes)
    }
}
