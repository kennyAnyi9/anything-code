import SimpleForm from './_components/SimpleForm'
import FormWithValidation from './_components/FormWithValidation'

export default function FormsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Form Handling Examples</h1>
      <div className="space-y-6">
        <SimpleForm />
        <FormWithValidation />
      </div>
    </div>
  )
}
