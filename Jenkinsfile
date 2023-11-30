pipeline {
    agent {
        docker {
            image 'alpine:latest'
            label 'master'
            args  '-v /tmp:/tmp'
        }
    }
    stages {
        stage('01') {
            steps {
                sh "echo STAGE01"
            }
        }
        stage('02') {
            steps {
                sh "echo STAGE02"
            }
        }
    }
}
stage('Deploy') {
    steps {
        sh "docker stop ${IMAGE_NAME} || true && docker rm ${IMAGE_NAME} || true"
        sh "docker run -d \
            --name ${IMAGE_NAME} \
            --publish ${PORT}:443 \
            ${IMAGE_NAME}:${BUILD_ID}"
    }
}