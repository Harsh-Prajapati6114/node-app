pipeline{
    agent any
    tools{
        nodejs 'nodejs'
        dockerTool 'docker'
    }
    stages{
        stage('download from github'){
            steps{
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/Harsh-Prajapati6114/node-app.git']])
            }   
        }
        stage('build docker image'){
            steps{
                sh 'docker build -t harsh6/node-app:v1 .'
            }
        }
        stage('run docker container'){
            steps{
                sh 'docker run -d -p 3001:3001 --name node-app harsh6/node-app:v1'
            }
        }
    }
}