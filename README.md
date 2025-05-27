This repository contains a Jenkins-powered CI/CD pipeline that automates building, testing, and deploying a Dockerized Node.js application.
Automated Builds & Deployment via Jenkins, Dockerized Node.js Application, GitHub Webhooks for Continuous Integration, Firewall & Security Adjustments for Cloud Deployment, Port Mapping Fix for External Access
Jenkins installed & configured
 Docker installed & running
 GitHub Webhook for automatic build triggers
 Firewall rules allowing external traffic on the app port

 CI/CD Workflow
1️⃣ GitHub Push: Triggers Jenkins build 2️⃣ Jenkins Pipeline: Pulls the latest code and builds the Docker image 3️⃣ Docker Container: Starts app and makes it accessible
