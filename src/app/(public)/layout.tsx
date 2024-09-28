interface PublicLayoutProps {
  readonly children: React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <main className="site-auth-wrapper">
      {children}
    </main>
  )
}

export default PublicLayout;