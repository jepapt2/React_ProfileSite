import { ErrorMessage } from '@hookform/error-message'
import { useForm } from 'react-hook-form'
import Card from '../components/ui/Card'
import FormErrorMessage from '../components/ui/form/FormErrorMessage'
import TextInput from '../components/ui/form/TextInput'
import authValidation from '../components/ui/home/authValidation'
import Head from '../components/ui/text/Head'

export type AuthForm = {
  email: string
  password: string
}

const Home: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthForm>()
  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <>
      <Card>
        <Head>Profile</Head>
        <form>
          <TextInput
            register={register('email')}
            type="email"
            placeholder="メールアドレス"
          />
          <FormErrorMessage errors={errors} name="email" />
          <TextInput
            register={register('password')}
            type="password"
            placeholder="パスワード"
          />
          {errors.password && <p>パスワードを入力してください</p>}
          <button onClick={onSubmit}>Submit</button>
        </form>
      </Card>
    </>
  )
}

export default Home
