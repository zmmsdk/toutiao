// //构建版本的名称

//构建版本的名称
def tag = "latest"
//Harbor私服地址
def harbor_url = "39.101.135.227:85"
// 镜像库项目名称
def harbor_project = "eureka-security-server"
// harbor的登录凭证ID
def harbor_auth = "e4b5d44b-b933-42a8-9746-44dcc07af3d4"
// #!groovy
pipeline {
  agent any
//工具名称必须在Jenkins 管理Jenkins → 全局工具配置中预配置。
       tools {
        nodejs 'NodeJS 15.5.1'
   
     
        // gradle "gradle"
    }
    // 指定一个小时的全局执行超时，之后Jenkins将中止Pipeline运行
    // options {
    //     timeout(time: 1, unit: 'HOURS') 
    // }
     //常量参数，初始确定后一般不需更改

    
    environment {
        HARBOR_USER_USR='admin'
        HARBOR_USER_PSW='Harbor12345'
        // HARBOR_CREDS = credentials('jenkins-harbor-creds')
        // K8S_CONFIG = credentials('jenkins-k8s-config')
        // GIT_TAG = sh(returnStdout: true,script: 'git describe --tags').trim()
    }
    // parameters {
    //     string(name: 'HARBOR_HOST', defaultValue: '39.101.135.227', description: 'http://39.101.135.227:85')
    //     string(name: 'DOCKER_IMAGE', defaultValue: 'tssp/pipeline-demo', description: 'docker镜像名')
    //     string(name: 'APP_NAME', defaultValue: 'pipeline-demo', description: 'k8s中标签名')
    //     string(name: 'K8S_NAMESPACE', defaultValue: 'demo', description: 'k8s的namespace名称')
    // }
//定期检查开发代码自动触发更新，工作日每晚4点做daily build
    // triggers {
    //     pollSCM('H 4 * * 1-5')
    // }
    stages {
        // stage('Checkout') {
        //     steps {
        //         echo 'Checkout'
        //         checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '500378f5-a6e4-4255-984e-61537fe0e455', url: 'git@gitlab.aniu.so:aniu-yunwei/game-of-life.git']]])
        //     }
        // }        
        // stage('Build') {
        //     steps {
        //         echo 'Building'
        //         // sh 'mvn clean install' # 可以用自己的 mvn clean deploy + 参数替代
        //     }
        // }
        stage('init') {
           steps {
            script{
              def dockerPath = tool 'docker' //全局配置里的docker
              env.PATH = "${dockerPath}/bin:${env.PATH}" //添加了系统环境变量上
            }
           }
    }

    stage('Build') {
        steps {
            script{
              sh "docker --version"
            }
        }
    }
          stage('Linting') {
            steps {
               script {
                sh 'npm config set registry https://registry.npm.taobao.org' 
                sh 'npm config get registry' 
                // sh 'cnpm install'

               
                   

                sh 'npm install'
                sh 'npm run build'
               }
            }
        }   
        stage('Test') {
            steps {
                // echo 'env.BRANCH_NAME'
         
                echo 'Testing'
           
                // sh 'mvn clean verify sonar:sonar' # 此处可以使用mvn test替代，笔者这步是检测代码的质量同步到自己的代码质量检测平台。
            }
        }
             
        stage('Build and Push') {
            steps {
                echo 'Deploying'


                // sh "sh -c 'echo DOCKER_OPTS=\"--insecure-registry 39.101.135.227:85\" >> /etc/default/docker'"
                // sh 'docker restart'

                echo 'docker 重启成功'
// docker tag registry:2.3.0 192.168.33.18:5000/library/registry:2.3.0
// docker push 192.168.33.18:5000/library/registry:2.3.0
                // sh 'docker login  https://39.101.135.227:85'      

                // echo 'Harbor登录成功'
                // sh 'docker build Dockerfile'
                // sh 'docker tag goharbor/nginx-photon:v1.9.2 http://39.101.135.227:85/harbor/nginx:latest'
                // sh 'docker push 39.101.135.227:85/harbor/nginx:latest'
                // sh 'mvn clean deploy'  # 此处调用脚本或者ansible、saltstak，部署到远程

                //  sh 'kubectl create -f ./dev-pod.Yaml'
            }
            
        }
        // stage('Deploy') {
        //     when { 
        //         allOf {
        //             expression { env.GIT_TAG != null }
        //         }
        //     }
        //     agent {
        //         docker {
        //             image 'lwolf/helm-kubectl-docker'
        //         }
        //     }
        //     steps {
        //         sh "mkdir -p ~/.kube"
        //         sh "echo ${K8S_CONFIG} | base64 -d > ~/.kube/config"
        //         sh "sed -e 's#{IMAGE_URL}#${params.HARBOR_HOST}/${params.DOCKER_IMAGE}#g;s#{IMAGE_TAG}#${GIT_TAG}#g;s#{APP_NAME}#${params.APP_NAME}#g;s#{SPRING_PROFILE}#k8s-test#g' k8s-deployment.tpl > k8s-deployment.yml"
        //         sh "kubectl apply -f k8s-deployment.yml --namespace=${params.K8S_NAMESPACE}"
        //     }
            
        // }

    }
}
