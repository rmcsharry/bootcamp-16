import { Button } from '../ui/button'
import { HeroPanel } from '../components/HeroPanel'
import AuthForm from '../components/AuthForm'
import { useState } from 'react'
import { AuthFormMode } from '../enums/AuthFormMode'

export const HomePage = () => {
  const [authFormMode, setAuthFormMode] = useState<AuthFormMode>(AuthFormMode.SignIn)

  const handleAuthButtonClick = () => {
    setAuthFormMode(toggleAuthFormMode(true))
  }
  const toggleAuthFormMode = (switchMode?: boolean) => {
    if (switchMode) {
      return authFormMode === AuthFormMode.SignIn ? AuthFormMode.SignUp : AuthFormMode.SignIn
    }
    return authFormMode
  }

  return (
    <div className="flex justify-center p-10 bg-gradient-to-b from-neutral-300 to-neutral-100/0 min-w-full w-max">
      <div className="bg-background rounded-xl shadow-lg max-w-[1334px] overflow-hidden section-preview">
        <div className="container relative h-[800px] flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
          <Button
            className="inline-flex absolute right-4 top-4 md:right-8 md:top-8 min-w-24"
            onClick={handleAuthButtonClick}
          >
            {toggleAuthFormMode()}
          </Button>
          <HeroPanel />
          <AuthForm authFormMode={authFormMode} />
        </div>
      </div>
    </div>
  )
}
