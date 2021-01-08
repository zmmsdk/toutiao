// #!groovy

def label = "jenkins-nginx"
podTemplate(label: label, cloud: 'kubernetes')
{
node(label) {
    agent any
       tools {
        nodejs 'NodeJS 15.5.1'
        // gradle "gradle"
    }
    // 指定一个小时的全局执行超时，之后Jenkins将中止Pipeline运行
    // options {
    //     timeout(time: 1, unit: 'HOURS') 
    // }
     //常量参数，初始确定后一般不需更改
    environment{
        //git服务全系统只读账号cred_id【参数值对外隐藏】
        // CRED_ID='*****-****-****-****-*********'
        //测试人员邮箱地址【参数值对外隐藏】
        // QA_EMAIL='*****@*****.com'
        //接口测试（网络层）的job名，一般由测试人员编写
        // ITEST_JOBNAME='Guahao_InterfaceTest_ExpertPatient'
        HARBOR_USER_USR='admin'
        HARBOR_USER_PSW='Harbor12345'

    }
        stage('pull code') {
            echo "拉取代码"
        }
        stage('build') {
            echo "代码编译"
        }
        stage('SonarQube') {
            echo "质量扫描"
        }
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
        stage('Deploy') {
            steps {
                echo 'Deploying'
                sh 'docker login -u admin -P Harbor12345 http://39.101.135.227:85'      

                   echo 'Harbor登录成功'

                // sh 'docker tag goharbor/nginx-photon:v1.9.2 http://39.101.135.227:85/harbor/nginx:latest'
                // sh 'docker push 39.101.135.227:85/harbor/nginx:latest'
                // sh 'mvn clean deploy'  # 此处调用脚本或者ansible、saltstak，部署到远程
            }
        }
    }
    }
}





