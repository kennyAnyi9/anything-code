import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Learning React
          </Link>
          
          <div className="flex gap-6">
            <Link href="/hooks" className="hover:text-blue-600">Hooks</Link>
            <Link href="/forms" className="hover:text-blue-600">Forms</Link>
            <Link href="/file-uploads" className="hover:text-blue-600">File Uploads</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
