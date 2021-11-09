import type { NextPage } from 'next'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle 
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
      />
      <UserInformation 
        name={'Marcelo Mangini'}
        picture='https://github.com/marcelomangini.png'
        rating={3}
        description='São Paulo'
      />
      <UserInformation 
        name={'Murilo Mangini'}
        picture='https://github.com/marcelomangini.png'
        rating={5}
        description='General Carneiro'
      />      
    </div>

  )
}

export default Home
