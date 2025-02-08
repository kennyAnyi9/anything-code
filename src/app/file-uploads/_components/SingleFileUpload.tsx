'use client'

import { useState, ChangeEvent } from 'react'

export default function SingleFileUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      
      // Create preview for images
      if (selectedFile.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onloadend = () => {
          setPreview(reader.result as string)
        }
        reader.readAsDataURL(selectedFile)
      } else {
        setPreview(null)
      }
    }
  }

  const handleUpload = async () => {
    if (!file) return

    // In a real app, you would upload to your server here
    alert(`Ready to upload: ${file.name} (${file.type})`)
  }

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Single File Upload</h3>
      
      <div className="space-y-4">
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100"
        />

        {preview && (
          <div className="mt-4">
            <p className="text-sm font-medium mb-2">Preview:</p>
            <img 
              src={preview} 
              alt="Preview" 
              className="max-w-xs rounded border"
            />
          </div>
        )}

        {file && !preview && (
          <div className="mt-4">
            <p className="text-sm">Selected file: {file.name}</p>
          </div>
        )}

        <button
          onClick={handleUpload}
          disabled={!file}
          className="px-4 py-2 bg-violet-500 text-white rounded
            hover:bg-violet-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Upload File
        </button>
      </div>
    </div>
  )
}
