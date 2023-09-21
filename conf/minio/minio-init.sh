#!/bin/sh
sleep 10
mc alias set myminio http://${MINIO_HOST}:${MINIO_PORT} $MINIO_ROOT_USER $MINIO_ROOT_PASSWORD
mc mb myminio/files
