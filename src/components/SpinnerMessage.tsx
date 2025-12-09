import { Spinner } from './Spinner'

interface SpinnerMessageProps {
  message: string
}

export const SpinnerMessage = ({ message }: SpinnerMessageProps) => {
  return (
    <span className="flex">
      <Spinner />
      <p className="ml-2">{message}</p>
    </span>
  )
}
