pipeline {
    agent any
    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-app .'
            }
        }
        stage('Run Container') {
            steps {
                sh 'docker run -d -p 8080:80 --name my-app-container my-app'
            }
        }
    }
}

