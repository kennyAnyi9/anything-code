import StateExample from './_components/StateExample'
import EffectExample from './_components/EffectExample'

export default function HooksPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">React Hooks Examples</h1>
      <div className="space-y-6">
        <StateExample />
        <EffectExample />
      </div>
    </div>
  )
}
