import { GithubIcon } from './GithubIcon'
import { Button } from '../ui/button'
import TermsPrivacyNotice from './TermsPrivacyNotice'
import { AuthFormMode } from '../enums/AuthFormMode'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '../ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from '../ui/input'
import { useAuth } from '../context/useAuth'
import { User } from '../models/User'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const formSchema = z
  .object({
    username: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
    password: z.string().min(2, {
      message: 'Password must be at least 2 characters.',
    }),
  })
  .refine(
    (data): data is User => {
      // This refine method is used to add a custom validation to the schema.
      // Here, it always returns true, meaning it will always pass the validation.
      // The type predicate (data is User) ensures TypeScript understands that
      // if this validation passes, the data conforms to the User type.
      return true
    },
    {
      message: 'Invalid user data',
    }
  )

interface AuthFormProps {
  className?: string
  authFormMode: AuthFormMode
}

const AuthForm = ({ className, authFormMode }: AuthFormProps) => {
  const { user, login } = useAuth()
  const navigate = useNavigate()

  const myAuthForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    login(values)
  }

  useEffect(() => {
    if (user) {
      navigate('/todos')
    }
  }, [user, navigate])

  return (
    <div className={`${className} p-8`}>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            {authFormMode === AuthFormMode.SignUp ? 'Please sign in below' : 'Create an account'}
          </h1>
          <p className="text-sm text-muted-foreground">
            {authFormMode === AuthFormMode.SignUp
              ? 'Enter your username and password'
              : 'Fill the form below to create your account'}
          </p>
        </div>
        <div className="grid gap-6">
          <Form {...myAuthForm}>
            <form onSubmit={myAuthForm.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={myAuthForm.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Your username" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={myAuthForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Your password" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <Button type="submit" variant="highlight" className="w-full h-10 px-4 py-2">
                Sign In
              </Button>
            </form>
          </Form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <Button variant="outline">
            <GithubIcon className="mr-2 h-4 w-4" />
            Github
          </Button>
        </div>
        <TermsPrivacyNotice />
      </div>
    </div>
  )
}

export default AuthForm
