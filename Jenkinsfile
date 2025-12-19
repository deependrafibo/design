pipeline {
    agent any

    options {
        disableConcurrentBuilds()
    }
    
    stages {
        stage('Initializing branch') {
            steps {
                script {
                    // Determine which branch to check out based on the environment
                    def branchToCheckout = "main" // Default to user-selected branch
                    echo "Branch selected: ${branchToCheckout}"
                    env.SELECTED_BRANCH = branchToCheckout 
                }
            }
        }

        stage('Checkout') {
            steps {
                script {
                    try {
                        echo "Checking out branch: ${env.SELECTED_BRANCH} for environment: ${params.ENVIRONMENT}"
                        checkout([$class: 'GitSCM', 
                            branches: [[name: "${env.SELECTED_BRANCH}"]],
                            userRemoteConfigs: [[url: 'git@github.com:trumio/trumio-design-system.git', credentialsId: 'github_access']]
                        ])
                    } catch (Exception e) {
                        error "Failed to checkout branch ${env.SELECTED_BRANCH}. Error: ${e.message}"
                    }
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                    // Docker Compose
                    sh """
                        sed -i "s/{SERVICE_NAME}/tru-dev/g" docker-compose.yml
                        sed -i "s/{SERVICE_PORT}/6006/g" docker-compose.yml
                        sed -i "s/{TARGET_PORT}/6006/g" docker-compose.yml
                        docker compose build
                        docker compose up -d
                    """
                    cleanWs()
                }
            }
        }

post { 
        always {
            script {
                def paramsSubtitle = "Build with parameters:"
                def paramsSummary = """
                    JOB_NAME=${env.JOB_NAME}
                    ENVIRONMENT=${params.ENVIRONMENT}
                    BRANCH=${params.BRANCH}
                    DEPENDENCY=${params.DEPENDENCY}
                """.stripIndent().trim()

                currentBuild.description = "${paramsSubtitle}\n${paramsSummary}"
            }
        }
    }
}
