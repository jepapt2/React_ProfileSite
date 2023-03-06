import { useForm } from 'react-hook-form'
import Card from '../components/ui/Card'
import TextInput from '../components/ui/form/TextInput'
import Head from '../components/ui/text/Head'

type AuthForm = {
  email: string
  password: string
}

const Home: React.FC = () => {
  const { register, handleSubmit } = useForm<AuthForm>()
  const onSubmit = handleSubmit((data) => console.log(data))

  register

  return (
    <>
      <Card>
        <Head>Profile</Head>
        <form>
          <TextInput
            register={register('email', { required: true })}
            type="email"
          />
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
