def git_url = 'https://github.com/intelligaia/react-big-calendar.git'
def git_branch = 'V1'

pipeline
{
    agent
    {
        label 'worker-1'
    }

    stages
    {
        stage('build-code')
        {
            
            steps{
                   sh '''
                   cd /home/ubuntu/react-big-calendar
                   npm run build
                   '''
            }
        }
        stage('copy-build')
        {
            
            steps{
                   sh '''
                   pwd
                   ls
                   pwd
                   rsync -parv * ubuntu@172.31.4.108:/home/ubuntu/react-big-calendar
                   '''
            }
        }
        stage('app-restart')
        {
            
            steps{
                   sh '''
                   sudo systemctl restart nginx
                   '''
            }
        }
    }
}
