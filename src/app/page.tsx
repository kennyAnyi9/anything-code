import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">React Learning Examples</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/hooks" 
          className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">React Hooks</h2>
          <p>Learn about useState, useEffect, useContext, and custom hooks</p>
        </Link>

        <Link href="/forms" 
          className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Forms</h2>
          <p>Examples of form handling, validation, and state management</p>
        </Link>

        <Link href="/file-uploads" 
          className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">File Uploads</h2>
          <p>Learn how to handle file uploads and process files</p>
        </Link>
      </div>
    </main>
  )
}
