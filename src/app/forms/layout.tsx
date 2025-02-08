export default function FormsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <nav className="bg-slate-100 p-4 mb-4">
        <h2 className="text-xl font-semibold">Forms Section</h2>
      </nav>
      {children}
    </div>
  )
}
