package com.rutt.files.config

import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider
import software.amazon.awssdk.regions.Region
import software.amazon.awssdk.services.s3.S3Client
import software.amazon.awssdk.services.s3.model.CreateBucketRequest
import software.amazon.awssdk.services.s3.model.HeadBucketRequest
import software.amazon.awssdk.services.s3.model.NoSuchBucketException
import java.net.URI


@Configuration
class S3Config {
    private val BUCKET_NAME = "files"

    @Value("\${aws.accessKeyId:minio}")
    private val accessKey: String? = null

    @Value("\${aws.secretKey:password}")
    private val secretKey: String? = null

    @Value("\${aws.s3.endpoint:}")
    private val endpoint: String? = null

    @Bean
    fun s3Client(): S3Client? {
        val client = S3Client.builder()
            .region(Region.EU_WEST_3)
            .forcePathStyle(true)
            .credentialsProvider(StaticCredentialsProvider.create(AwsBasicCredentials.create(accessKey, secretKey)))
            .endpointOverride(URI.create(endpoint))
            .build()
        ensureDefaultBucketExist(client, BUCKET_NAME)
        return client
    }

    private fun ensureDefaultBucketExist(client: S3Client, bucketName: String) {
        try {
            client.headBucket(HeadBucketRequest.builder().bucket(bucketName).build())
        } catch (e: NoSuchBucketException) {
            client.createBucket(CreateBucketRequest.builder().bucket(bucketName).build())
        }
    }
}
