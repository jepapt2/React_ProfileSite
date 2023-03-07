import { useForm } from 'react-hook-form'
import Card from '../components/ui/Card'
import TextInput from '../components/ui/form/TextInput'
import Head from '../components/ui/text/Head'

export type AuthForm = {
  email: string
  password: string
}

const Home: React.FC = () => {
  const {
    register,
    getValues,
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
            register={register('email', { required: true })}
            type="email"
            placeholder="メールアドレス"
          />
          {errors.email && <p>メールアドレスを入力してください</p>}
          <TextInput
            register={register('password', { required: true })}
            type="password"
            placeholder="パスワード"
          />
          {errors.password && <p>パスワードを入力してください</p>}
          {/* <button type="submit" onClick={onSubmit}>
            Submit
          </button> */}
        </form>
      </Card>
    </>
  )
}

export default Home
