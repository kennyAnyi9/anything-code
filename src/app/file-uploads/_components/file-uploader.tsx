'use client'
import { ChangeEvent, useState } from 'react'
import axios from 'axios'

type status = 'idle' | 'loading' | 'success' | 'error'

export const FileUploader = () => {
    const [files, setFiles] = useState<File | null>(null)
    const [status, setStatus] = useState<status>('idle')

    const handleUpload = async () => {
        if (!files) return;
        setStatus('loading');

        const formData = new FormData();
        formData.append('file', files);

        try {
            await axios.post("https://httpbin.org/post", formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            setStatus('success')
        } catch (error) {
            setStatus('error')
        }
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0]
        if (selectedFile) {
            setFiles(selectedFile)
        }
    }
    return (
        <div className='space-y-2'>
            <input
                type="file"
                onChange={handleFileChange}
                disabled={status === 'loading'}
            />
            {files && (
                <>
                    <p>File name: {files.name}</p>
                    <p>File type: {files.type}</p>
                    <p>File size: {(files.size / 1024).toFixed(2)} KB</p>
                </>
            )}
            {status === 'error' && (
                <p className="text-red-500">Error uploading file. Please try again.</p>
            )}
            {status === 'success' && (
                <p className="text-green-500">File uploaded successfully!</p>
            )}
            {files && status !== 'loading' && (
                <button
                    onClick={handleUpload}
                    className='bg-gray-200 px-4 py-2 rounded-sm hover:bg-gray-300 transition-colors'
                >
                    Upload
                </button>
            )}
            {status === 'loading' && (
                <p>Uploading...</p>
            )}
        </div>
    )
}