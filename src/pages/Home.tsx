import { useForm } from 'react-hook-form'
import Card from '../components/ui/Card'
import Head from '../components/ui/text/Head'

type AuthForm = {
  email: string
  password: string
}

const Home: React.FC = () => {
  const { register, handleSubmit } = useForm<AuthForm>()
  const onSubmit = handleSubmit((data) => console.log(data))
  return (
    <>
      <Card>
        <Head>Profile</Head>
        <form>
          <input {...register('email')} type="email" />
          <input {...register('password')} type="password" />
          <button type="submit" onClick={onSubmit}>
            Submit
          </button>
        </form>
      </Card>
    </>
  )
}

export default Home
