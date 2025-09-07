import OpenAI from 'openai'

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  try {
    const { goalType, experience, daysPerWeek, equipment } = req.body
    const prompt = `Create a 1-week workout plan for a ${experience} person whose goal is ${goalType}, can train ${daysPerWeek} days/week, and has ${equipment}. For each workout day, provide 3-6 exercises with sets, reps, and one-line instruction. Output JSON only with keys as days.`

    const aiRes = await client.responses.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      input: prompt,
      max_output_tokens: 800
    })

    const text = aiRes.output_text || aiRes.output?.[0]?.content[0]?.text || ''
    // Try to find JSON in response
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    const plan = jsonMatch ? JSON.parse(jsonMatch[0]) : { raw: text }

    res.status(200).json({ plan })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to generate plan' })
  }
}