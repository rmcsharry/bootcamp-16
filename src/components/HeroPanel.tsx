interface HeroPanelProps {
  className?: string
}

export const HeroPanel = ({ className }: HeroPanelProps) => {
  return (
    <div className={`${className} relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r`}>
      <div className="absolute inset-0 bg-zinc-900"></div>
      <div className="relative z-20 flex items-center text-lg font-medium">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-6 w-6"
        >
          <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
        </svg>
        Acme Inc
      </div>
      <div className="relative z-20 mt-auto">
        <blockquote className="space-y-2">
          <p className="text-lg">
            “A simple ToDo React app built with Vite, React Query, React Router and calling a Django REST JSON api.”
          </p>
          <footer className="text-sm">Richard McSharry</footer>
        </blockquote>
      </div>
    </div>
  )
}
