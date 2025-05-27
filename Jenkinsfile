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
                sh 'docker run -d -p 8081:80 --name my-app-container-27052025 my-app'
            }
        }
    }
}

