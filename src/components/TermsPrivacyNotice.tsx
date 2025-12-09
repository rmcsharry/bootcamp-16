interface TermsPrivacyNoticeProps {
  className?: string
}

export const TermsPrivacyNotice = ({ className }: TermsPrivacyNoticeProps) => {
  return (
    <p className={`${className} px-8 text-center text-sm text-muted-foreground`}>
      By continuing, you agree to our{' '}
      <span className="underline underline-offset-4 hover:text-primary">Terms of Service</span> and{' '}
      <span className="underline underline-offset-4 hover:text-primary">Privacy Policy</span>.
    </p>
  )
}

export default TermsPrivacyNotice
