import { useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [plan, setPlan] = useState(null)

  async function gen() {
    setLoading(true)
    const res = await fetch('/api/generate-plan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ goalType: 'strength', experience: 'beginner', daysPerWeek: 3, equipment: 'none' })
    })
    const data = await res.json()
    setPlan(data.plan)
    setLoading(false)
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">AI Fitness Buddy — MVP</h1>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={gen} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Plan'}
      </button>
      {plan && (
        <pre className="mt-6 p-4 bg-gray-100 rounded">{JSON.stringify(plan, null, 2)}</pre>
      )}
    </main>
  )
}