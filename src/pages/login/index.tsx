import React, { ReactNode } from 'react'
import Link from 'next/link'

// Component Imports
import { Card, Button } from 'flowbite-react'

// Icon Imports
import { FiMail } from 'react-icons/fi'

// Third Party Imports
import { useForm, Controller } from 'react-hook-form'

// Custom Component Imports
import BlankLayout from 'src/components/layouts/BlankLayout.component'
import { TextInput } from 'src/components/forms'

type FormValues = {
  email: string
  password: string
}

const Login = () => {
  // Hooks
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<FormValues>()

  function handleSubmitData(data: FormValues): void {
    console.log(data)
  }

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='w-10/12 md:w-3/12'>
        <div className='mb-10 text-center'>
          <h1 className='text-grey dark:text-grey-300 font-semibold text-4xl'>Welcome To CROT</h1>
        </div>
        <Card style={{ height: 'fit-content' }}>
          <form onSubmit={handleSubmit(handleSubmitData)}>
            <Controller
              control={control}
              name={'email'}
              rules={{ required: 'Email is required' }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label='Email'
                  id='loginEmail'
                  value={value}
                  onChange={onChange}
                  type={'email'}
                  icon={FiMail}
                  placeholder={'johndoe@mail.com'}
                  errorText={errors.email?.message}
                />
              )}
            />
            <Controller
              control={control}
              name={'password'}
              rules={{ required: 'Password is required' }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label='Password'
                  id='loginPassword'
                  onChange={onChange}
                  value={value}
                  type={'password'}
                  containerClass={'mt-4'}
                  errorText={errors.password?.message}
                />
              )}
            />
            <div className='mt-1'>
              <p className='text-primary dark:text-primary-600 text-sm font-medium text-right hover:underline'>
                <Link href={'/forgot-password'}>Forgot Password?</Link>
              </p>
            </div>
            <div className='mt-4'>
              <Button type='submit' className='bg-primary dark:bg-primary hover:bg-primary-800 w-full'>
                Login
              </Button>
            </div>
          </form>
        </Card>
        <div className='mt-4 text-center'>
          <p className='inline text-sm font-medium text-textColor-primary-dark dark:text-grey-300'>New to CROT? </p>
          <p className='inline text-primary dark:text-primary-600 font-medium hover:underline'>
            <Link href={'/forgot-password'}>Create an account.</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

Login.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default Login
