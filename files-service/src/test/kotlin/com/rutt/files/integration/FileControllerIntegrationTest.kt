package com.rutt.files.integration

import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.mock.web.MockMultipartFile
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.multipart
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.content
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
class FileControllerIntegrationTest(@Autowired val mockMvc: MockMvc) {
    @Test
    fun `should upload and retrieve file`() {
        val mockFile = MockMultipartFile(
            "file",
            "filename.txt",
            "text/plain",
            "sample content".byteInputStream()
        )

        val result = mockMvc.perform(multipart("/files").file(mockFile))
            .andExpect(status().isOk)
            .andReturn()

        val uploadedFileId = result.response.contentAsString

        mockMvc.perform(get("/files/$uploadedFileId"))
            .andExpect(status().isOk)
            .andExpect(content().string("sample content"))
    }
}
