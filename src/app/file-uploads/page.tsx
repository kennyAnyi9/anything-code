
import { FileUploader } from './_components/file-uploader'

export default function FileUploadsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">File Upload Examples</h1>
      <div className="space-y-6">
        <h1>File Uploader</h1>
        <FileUploader />
      </div>
    </div>
  )
}
