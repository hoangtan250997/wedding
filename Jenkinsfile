pipeline {
    agent {
        docker { image 'node:18.16.0-bullseye' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}