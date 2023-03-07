import { AuthForm } from '../../../pages/Home'

//Home.tsx で使用するバリデーションの定義

type AuthValidationType = { [K in keyof AuthForm]: object }

const validation: AuthValidationType = {
  email: {
    required: 'メールアドレスを入力してください',
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: '有効なEメールを入力してください',
    },
  },
  password: {
    required: 'パスワードを入力してください',
    minLength: {
      value: 6,
      message: 'パスワードは6文字以上で入力してください',
    },
    maxLength: {
      value: 128,
      message: 'パスワードは128文字以下で入力してください',
    },
  },
}

export default validation
