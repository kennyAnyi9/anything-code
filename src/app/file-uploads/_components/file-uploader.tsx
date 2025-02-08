'use client'


// Essential imports for React state management and Axios HTTP client
import { ChangeEvent, useState } from 'react'
import axios, { AxiosProgressEvent } from 'axios'

// Define a union type for possible upload states
// This helps TypeScript enforce valid status values
type status = 'idle' | 'loading' | 'success' | 'error'

// FileUploader Component: Handles file selection and upload functionality
export const FileUploader = () => {
    // State Management
    // files: Stores the currently selected file (null if no file is selected)
    const [files, setFiles] = useState<File | null>(null)
    // status: Tracks the current state of the upload process
    const [status, setStatus] = useState<status>('idle')
    // progress: Tracks upload progress percentage (0-100)
    const [progress, setProgress] = useState<number>(0)

    // handleUpload: Async function to manage the file upload process
    const handleUpload = async () => {
        // Early return if no file is selected
        if (!files) return;
        // Reset states at the start of upload
        setStatus('loading');
        setProgress(0);

        // Create FormData object to send file to server
        const formData = new FormData();
        formData.append('file', files);

        try {
            // Make POST request to upload endpoint
            // Using httpbin.org as a test endpoint - replace with your actual API endpoint
            await axios.post("https://httpbin.org/post", formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                },
                // Track upload progress using Axios progress event
                onUploadProgress: (progressEvent: AxiosProgressEvent) => {
                    // Calculate progress percentage
                    // If total is undefined, default to 0% progress
                    const progress = progressEvent.total ?
                        Math.round((progressEvent.loaded * 100) / (progressEvent.total || 1))
                        : 0;
                    setProgress(progress)
                }
            })
            // Update states on successful upload
            setStatus('success')
            setProgress(100)
        } catch (error) {
            // Handle upload failure by updating states
            setStatus('error')
            setProgress(0)
        }
    }

    // handleFileChange: Manages file selection from input
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        // Get the first file from the selection (if any)
        const selectedFile = e.target.files?.[0]
        if (selectedFile) {
            setFiles(selectedFile)
        }
    }

    // Component UI Render
    return (
        <div className='space-y-2'>
            {/* File Input Section */}
            <input
                type="file"
                onChange={handleFileChange}
                disabled={status === 'loading'}
            />
            {/* File Details Section */}
            {files && (
                <>
                    <p>File name: {files.name}</p>
                    <p>File type: {files.type}</p>
                    <p>File size: {(files.size / 1024).toFixed(2)} KB</p>
                </>
            )}
            {/* Error Message Section */}
            {status === 'error' && (
                <p className="text-red-500">Error uploading file. Please try again.</p>
            )}
            {/* Success Message Section */}
            {status === 'success' && (
                <p className="text-green-500">File uploaded successfully!</p>
            )}
            {/* Upload Button Section */}
            {files && status !== 'loading' && (
                <button
                    onClick={handleUpload}
                    className='bg-gray-200 px-4 py-2 rounded-sm hover:bg-gray-300 transition-colors'
                >
                    Upload
                </button>
            )}
            {/* Progress Bar Section */}
            {/* Shows during upload process */}
            {status === 'loading' && (
                <>
                    {/* Progress Bar Container */}
                    <div className='w-96 h-4 border border-gray-300 rounded-full'>
                        {/* Dynamic Progress Bar Fill */}
                        <div className='h-full bg-green-500 max-w-96 rounded-full animate-progress' style={{ width: `${progress}%` }}>
                        </div>
                    </div>
                    {/* Progress Percentage Display */}
                    <p>{progress}%</p>
                </>
            )}
        </div>
    )
}