import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'

export default function ProtectedRouteMessage() {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate('/')
  }

  return (
    <div className="p-8 h-screen w-full flex justify-center items-center">
      <div className="mx-auto flex flex-col space-y-6 sm:w-[350px]">
        <h1 className="mx-auto">You must be logged in to visit this page!</h1>
        <Button variant="highlight" onClick={handleGoHome}>
          OK
        </Button>
      </div>
    </div>
  )
}
