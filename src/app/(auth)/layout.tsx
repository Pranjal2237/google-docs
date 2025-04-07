interface AuthLayoutProps {
    children: React.ReactNode
    }

const AuthLayout = ({children}:AuthLayoutProps) => {
  return (
    <div>
        <nav className="bg-red-300">Auth navbar</nav>
        {children}
    </div>
  )
}

export default AuthLayout