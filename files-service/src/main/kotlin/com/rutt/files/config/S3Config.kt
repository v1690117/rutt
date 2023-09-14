package com.rutt.files.config

import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider
import software.amazon.awssdk.regions.Region
import software.amazon.awssdk.services.s3.S3Client
import java.net.URI


@Configuration
class S3Config {
    @Value("\${aws.accessKeyId:minio}")
    private val accessKey: String? = null

    @Value("\${aws.secretKey:password}")
    private val secretKey: String? = null

    @Value("\${aws.s3.endpoint:}")
    private val endpoint: String? = null

    @Bean
    fun s3Client(): S3Client? {
        return S3Client.builder()
            .region(Region.EU_WEST_3)
            .credentialsProvider(StaticCredentialsProvider.create(AwsBasicCredentials.create(accessKey, secretKey)))
            .endpointOverride(URI.create(endpoint))
//            .httpClientBuilder(NettyNioAsyncHttpClient.builder().maxConcurrency(5).maxPendingConnectionAcquires(50000).build())
            .build()
    }
}
