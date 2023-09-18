package com.rutt.files.config

import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider
import software.amazon.awssdk.regions.Region
import software.amazon.awssdk.services.s3.S3Client
import software.amazon.awssdk.services.s3.model.Bucket
import software.amazon.awssdk.services.s3.model.CreateBucketRequest
import software.amazon.awssdk.services.s3.model.ListBucketsRequest
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
        val client = S3Client.builder()
            .region(Region.EU_WEST_3)
            .forcePathStyle(true)
            .credentialsProvider(StaticCredentialsProvider.create(AwsBasicCredentials.create(accessKey, secretKey)))
            .endpointOverride(URI.create(endpoint))
//            .httpClientBuilder(NettyNioAsyncHttpClient.builder().maxConcurrency(5).maxPendingConnectionAcquires(50000).build())
            .build()

        val listBucketsRequest = ListBucketsRequest.builder().build()
        val listBucketsResponse = client!!.listBuckets(listBucketsRequest)
        if (!listBucketsResponse.buckets().stream().anyMatch { b: Bucket -> b.name() == "files" }) {
            // todo this does not work
            client!!.createBucket(
                CreateBucketRequest
                    .builder()
                    .bucket("files")
                    .build()
            )
        }
        return client
    }
}
