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
        stage('copy-code')
        {
            
            steps{
                   sh '''
                   pwd
                   ls
                   react-big-calendar/react-big-calender-1.intelligaia.com
                   pwd
                   #cp -rp * /home/ubuntu/react-big-calendar
                   '''
            }
        }
        stage('build-code')
        {
            
            steps{
                   sh '''
                   #cd /home/ubuntu/react-big-calendar
                   #npm run build
                   '''
            }
        }
        stage('app-restart')
        {
            
            steps{
                   sh '''
                   #sudo systemctl restart nginx
                   '''
            }
        }
    }
}
