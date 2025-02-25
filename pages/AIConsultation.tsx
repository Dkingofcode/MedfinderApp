import React from 'react'

type Props = {};

function AIConsultation({}: Props) {
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState("");
  
    const handleConsult = async () => {
      const openai = new OpenAI({ apiKey: "YOUR_OPENAI_API_KEY" });
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: query }],
      });
      setResponse(completion.choices[0].message.content);
    };
  
    return (
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold">AI Consultation</h2>
        <textarea className="w-full p-4 border rounded-lg mt-4" placeholder="Describe your symptoms..." value={query} onChange={(e) => setQuery(e.target.value)}></textarea>
        <button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-lg" onClick={handleConsult}>Consult AI</button>
        {response && <p className="mt-4 p-4 border rounded-lg bg-gray-100">{response}</p>}
      </div>
    );
}

export default AIConsultation;