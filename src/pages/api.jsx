// src/pages/ApiDocs.jsx
import React, { useMemo, useState, useRef, useEffect } from 'react'

const DOC_VERSIONS = ['v1', 'v2']
const LANGUAGES = ['Python', 'JavaScript', 'cURL', 'Java']

const baseUrlFor = (v) => `https://api.chikoro.ai/${v}`

function CodeBlock({ code }) {
  const preRef = useRef(null)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      const el = preRef.current?.querySelector('.copy-btn')
      if (el) {
        const prev = el.textContent
        el.textContent = 'Copied!'
        setTimeout(() => (el.textContent = prev), 1200)
      }
    } catch {}
  }
  return (
    <div className="code-block" ref={preRef}>
      <button className="copy-btn" onClick={copy} aria-label="Copy code">📋 Copy</button>
      <pre><code>{code}</code></pre>
    </div>
  )
}

function LangTabs({ active, onChange }) {
  return (
    <div className="lang-tabs">
      {LANGUAGES.map(l => (
        <button key={l} className={active === l ? 'active' : ''} onClick={() => onChange(l)}>
          {l}
        </button>
      ))}
    </div>
  )
}

function VersionTabs({ active, onChange }) {
  return (
    <div className="version-tabs">
      {DOC_VERSIONS.map(v => (
        <button key={v} className={active === v ? 'active' : ''} onClick={() => onChange(v)}>
          {v}
        </button>
      ))}
    </div>
  )
}

const codeTemplates = {
  completions: ({ v, lang }) => {
    const url = `${baseUrlFor(v)}/completions`
    const payload = { model: 'genesis2', prompt: 'Explain photosynthesis in 3 bullets.', max_tokens: 200, temperature: 0.7 }
    switch (lang) {
      case 'Python':
        return `import requests

r = requests.post("${url}", headers={"Authorization": "Bearer YOUR_API_KEY"},
                  json=${JSON.stringify(payload, null, 2)})
print(r.json())`
      case 'JavaScript':
        return `fetch("${url}", {
  method: "POST",
  headers: {"Content-Type":"application/json","Authorization":"Bearer YOUR_API_KEY"},
  body: JSON.stringify(${JSON.stringify(payload, null, 2)})
}).then(r=>r.json()).then(console.log)`
      case 'cURL':
        return `curl -X POST ${url} \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(payload)}'`
      case 'Java':
        return `HttpClient client = HttpClient.newHttpClient();
HttpRequest req = HttpRequest.newBuilder()
  .uri(URI.create("${url}"))
  .header("Authorization","Bearer YOUR_API_KEY")
  .header("Content-Type","application/json")
  .POST(HttpRequest.BodyPublishers.ofString("${JSON.stringify(payload).replace(/"/g,'\\"')}"))
  .build();
HttpResponse<String> res = client.send(req, HttpResponse.BodyHandlers.ofString());
System.out.println(res.body());`
      default: return ''
    }
  },

  chat: ({ v, lang }) => {
    const url = `${baseUrlFor(v)}/chat`
    const payload = {
      model: 'genesis2',
      messages: [
        { role: 'system', content: 'You are a helpful tutor.' },
        { role: 'user', content: 'Help me study for Biology exam.' }
      ]
    }
    switch (lang) {
      case 'Python': return `import requests
r = requests.post("${url}", headers={"Authorization":"Bearer YOUR_API_KEY"}, json=${JSON.stringify(payload, null, 2)})
print(r.json())`
      case 'JavaScript': return `fetch("${url}", {method:"POST", headers:{"Content-Type":"application/json","Authorization":"Bearer YOUR_API_KEY"}, body: JSON.stringify(${JSON.stringify(payload, null, 2)})}).then(r=>r.json()).then(console.log)`
      case 'cURL': return `curl -X POST ${url} -H "Authorization: Bearer YOUR_API_KEY" -H "Content-Type: application/json" -d '${JSON.stringify(payload)}'`
      case 'Java': return `HttpRequest req = HttpRequest.newBuilder().uri(URI.create("${url}")).header("Authorization","Bearer YOUR_API_KEY").header("Content-Type","application/json").POST(HttpRequest.BodyPublishers.ofString("${JSON.stringify(payload).replace(/"/g,'\\"')}")).build();`
      default: return ''
    }
  },

  agents: ({ v, lang }) => {
    const url = `${baseUrlFor(v)}/agents/runs`
    const payload = {
      agent: {
        model: 'genesis2',
        name: 'study-coach',
        tools: [
          { name: 'web_search', schema: { type: 'function', parameters: { q: 'string' } } },
          { name: 'calendar', schema: { type: 'function', parameters: { create_event: 'object' } } }
        ],
        instructions: "Tutor students; when asked for resources, search the web and build a study plan."
      },
      input: "Build a 2-week Biology study plan with daily tasks."
    }
    switch (lang) {
      case 'Python': return `import requests
r = requests.post("${url}", headers={"Authorization":"Bearer YOUR_API_KEY"}, json=${JSON.stringify(payload, null, 2)})
print(r.json())`
      case 'JavaScript': return `fetch("${url}", {method:"POST", headers:{"Content-Type":"application/json","Authorization":"Bearer YOUR_API_KEY"}, body: JSON.stringify(${JSON.stringify(payload, null, 2)})}).then(r=>r.json()).then(console.log)`
      case 'cURL': return `curl -X POST ${url} -H "Authorization: Bearer YOUR_API_KEY" -H "Content-Type: application/json" -d '${JSON.stringify(payload)}'`
      case 'Java': return `HttpRequest req = HttpRequest.newBuilder().uri(URI.create("${url}")).header("Authorization","Bearer YOUR_API_KEY").header("Content-Type","application/json").POST(HttpRequest.BodyPublishers.ofString("${JSON.stringify(payload).replace(/"/g,'\\"')}")).build();`
      default: return ''
    }
  },

  workflows: ({ v, lang }) => {
    const url = `${baseUrlFor(v)}/workflows/runs`
    const payload = {
      workflow: {
        name: 'paper-research',
        steps: [
          { type: 'tool', tool: 'web_search', args: { q: 'photosynthesis site:edu' }, save_as: 'hits' },
          { type: 'llm',  model: 'genesis2', prompt: 'Summarize the top results: {{hits}}' },
          { type: 'tool', tool: 'files.write', args: { path: 'summary.md', content: '{{last.text}}' } }
        ]
      }
    }
    switch (lang) {
      case 'Python': return `import requests
r = requests.post("${url}", headers={"Authorization":"Bearer YOUR_API_KEY"}, json=${JSON.stringify(payload, null, 2)})
print(r.json())`
      case 'JavaScript': return `fetch("${url}", {method:"POST", headers:{"Content-Type":"application/json","Authorization":"Bearer YOUR_API_KEY"}, body: JSON.stringify(${JSON.stringify(payload, null, 2)})}).then(r=>r.json()).then(console.log)`
      case 'cURL': return `curl -X POST ${url} -H "Authorization: Bearer YOUR_API_KEY" -H "Content-Type: application/json" -d '${JSON.stringify(payload)}'`
      case 'Java': return `HttpRequest req = HttpRequest.newBuilder().uri(URI.create("${url}")).header("Authorization","Bearer YOUR_API_KEY").header("Content-Type","application/json").POST(HttpRequest.BodyPublishers.ofString("${JSON.stringify(payload).replace(/"/g,'\\"')}")).build();`
      default: return ''
    }
  },
}

function sectionsData(version) {
  const base = baseUrlFor(version)
  const blocks = {
    overview: {
      title: 'Overview',
      text: `Chikoro API exposes models Genesis 2 and Exodus for completions, chat, embeddings, agentic runs, and declarative workflows. Typical uses include tutoring, research summarization, coding aids, and autonomous business agents. Base URL: ${base}`,
      body: (
        <>
          <p>Chikoro delivers two primary families of capabilities:</p>
          <ul>
            <li><strong>Core LLM APIs:</strong> <code>POST {base}/completions</code>, <code>POST {base}/chat</code>, <code>POST {base}/embeddings</code>.</li>
            <li><strong>Agentic & Workflow APIs:</strong> <code>POST {base}/agents/runs</code> for tool-using agents; <code>POST {base}/workflows/runs</code> for multi-step pipelines with tools + LLMs.</li>
          </ul>
          <p>Models: <strong>Genesis 2</strong> (reasoning, 200K context, multilingual) and <strong>Exodus</strong> (fast, efficient, edge-friendly).</p>
        </>
      )
    },

    auth: {
      title: 'Authentication',
      text: `Use Bearer token. Header: Authorization: Bearer YOUR_API_KEY. Keys are scoped per tenant. Support for per-session tokens and idempotency keys.`,
      body: (
        <>
          <p>Include your API key in every request:</p>
          <CodeBlock code={`Authorization: Bearer YOUR_API_KEY`} />
          <p>Optional headers:</p>
          <ul>
            <li><code>Idempotency-Key</code>: de-duplicate retried POSTs (recommended).</li>
            <li><code>X-Session-ID</code>: tie requests to a session for safety/memory policies.</li>
          </ul>
        </>
      )
    },

    sdks: {
      title: 'SDK Installation',
      text: `Install official SDKs: npm i @chikoro/sdk, pip install chikoro-sdk, and JVM via Maven coordinates.`,
      body: (
        <>
          <p>Install the SDKs:</p>
          <CodeBlock code={`npm install @chikoro/sdk`} />
          <CodeBlock code={`yarn add @chikoro/sdk`} />
          <CodeBlock code={`pip install chikoro-sdk`} />
          <CodeBlock code={`# Java (Gradle)
implementation 'ai.chikoro:sdk:0.2.0'`} />
        </>
      )
    },

    completions: {
      title: 'Text Completions',
      text: `POST ${base}/completions. Params: model, prompt, max_tokens, temperature, top_p, stop, metadata. Streaming via SSE at /completions/stream.`,
      body: (
        <>
          <p>Endpoint: <code>POST {base}/completions</code></p>
          <ul>
            <li><code>model</code> (e.g., <code>genesis2</code> or <code>exodus</code>)</li>
            <li><code>prompt</code> — string or array of segments</li>
            <li><code>max_tokens</code>, <code>temperature</code>, <code>top_p</code>, <code>stop</code></li>
            <li><code>metadata</code> — arbitrary key/values for tracing</li>
          </ul>
          <LangAndCode template="completions" version={version} />
          <p><strong>Streaming:</strong> <code>GET {base}/completions/stream?model=genesis2</code> (Server-Sent Events).</p>
        </>
      )
    },

    chat: {
      title: 'Chat',
      text: `POST ${base}/chat. Messages array with roles system|user|assistant. Tool-use available when used via Agents.`,
      body: (
        <>
          <p>Endpoint: <code>POST {base}/chat</code></p>
          <p>Send a <code>messages</code> array with <code>role</code> and <code>content</code>. System prompts steer behavior.</p>
          <LangAndCode template="chat" version={version} />
        </>
      )
    },

    agents: {
      title: 'Agents (Tool Use)',
      text: `POST ${base}/agents/runs. Define tools with JSON schema. The agent may emit tool_calls; you fulfill them and continue. Webhooks and streaming supported.`,
      body: (
        <>
          <p>Endpoint: <code>POST {base}/agents/runs</code></p>
          <p>Define an <code>agent</code> with <code>model</code>, <code>instructions</code>, and <code>tools</code> (function-like schemas). The run returns planned steps and optional <code>tool_calls</code>.</p>
          <LangAndCode template="agents" version={version} />
          <h4>Tool schema example</h4>
          <CodeBlock code={`{
  "name": "web_search",
  "schema": {
    "type": "function",
    "parameters": {
      "q": "string"
    }
  }
}`} />
          <p><strong>Events:</strong> subscribe to SSE at <code>{base}/agents/events?run_id=...</code> for step-by-step updates.</p>
        </>
      )
    },

    workflows: {
      title: 'Workflows (Multi-step)',
      text: `POST ${base}/workflows/runs. Describe a graph/sequence of steps: tool, llm, branch, map, reduce. Variables available via {{var}} templating.`,
      body: (
        <>
          <p>Endpoint: <code>POST {base}/workflows/runs</code></p>
          <LangAndCode template="workflows" version={version} />
          <h4>Declarative workflow (YAML)</h4>
          <CodeBlock code={`name: paper-research
steps:
  - type: tool
    tool: web_search
    args: { q: "photosynthesis site:edu" }
    save_as: hits
  - type: llm
    model: genesis2
    prompt: "Summarize: {{hits}}"
  - type: tool
    tool: files.write
    args: { path: "summary.md", content: "{{last.text}}" }`} />
        </>
      )
    },

    files: {
      title: 'Files & Data',
      text: `Upload and use files as context or for tool outputs. POST ${base}/files; use file_id in prompts, agents, or workflows.`,
      body: (
        <>
          <p>Upload files: <code>POST {base}/files</code> (multipart/form-data). Use returned <code>file_id</code> in prompts or workflow steps.</p>
          <ul>
            <li><code>GET {base}/files/{'{file_id}'}</code></li>
            <li><code>DELETE {base}/files/{'{file_id}'}</code></li>
          </ul>
        </>
      )
    },

    runs: {
      title: 'Runs & Sessions',
      text: `Track long-lived executions. GET ${base}/runs/{id}. Create sessions to hold memory & policy config: POST ${base}/sessions.`,
      body: (
        <>
          <p>Long tasks create a <code>run_id</code>:</p>
          <ul>
            <li><code>GET {base}/runs/{'{run_id}'}</code> — status, events, outputs</li>
            <li><code>POST {base}/sessions</code> — configure memory scope, safety mode</li>
          </ul>
        </>
      )
    },

    webhooks: {
      title: 'Webhooks',
      text: `Receive callbacks for run.completed, tool.required, file.ready. Register via dashboard or POST ${base}/webhooks.`,
      body: (
        <>
          <p>Register a webhook endpoint to receive events such as <code>run.completed</code>, <code>agent.tool_required</code>, <code>file.ready</code>.</p>
          <p>We sign with <code>Chikoro-Signature</code> header (HMAC-SHA256). Verify before processing.</p>
        </>
      )
    },

    batch: {
      title: 'Batch & Pagination',
      text: `POST ${base}/batch/completions for large jobs. Paginate list endpoints with ?limit & ?cursor.`,
      body: (
        <>
          <ul>
            <li><code>POST {base}/batch/completions</code> — array of completion jobs</li>
            <li>Pagination: <code>?limit=50&cursor=XYZ</code> on listing endpoints</li>
          </ul>
        </>
      )
    },

    errors: {
      title: 'Errors',
      text: `JSON error envelope {error:{type,code,message}} with HTTP 4xx/5xx. Includes request_id for support.`,
      body: (
        <>
          <CodeBlock code={`{
  "error": {
    "type": "invalid_request",
    "code": 400,
    "message": "prompt is required",
    "request_id": "req_abc123"
  }
}`} />
          <ul>
            <li><strong>400</strong> invalid_request / validation_error</li>
            <li><strong>401</strong> unauthorized</li>
            <li><strong>403</strong> permission_denied</li>
            <li><strong>429</strong> rate_limit_exceeded</li>
            <li><strong>500</strong> internal_error</li>
          </ul>
        </>
      )
    },

    limits: {
      title: 'Rate Limits & Quotas',
      text: `Free 60 rpm; Pro 300 rpm; Enterprise custom. Token caps per day; burst buckets per endpoint.`,
      body: (
        <>
          <ul>
            <li>Free: 60 requests/min, daily token cap</li>
            <li>Pro: 300 requests/min, higher cap</li>
            <li>Enterprise: custom SLA + priority queue</li>
          </ul>
          <p>Headers: <code>X-RateLimit-Remaining</code>, <code>X-RateLimit-Reset</code>.</p>
        </>
      )
    },

    best: {
      title: 'Best Practices',
      text: `Use idempotency keys; stream for long outputs; validate tool args; log metadata; keep prompts short and structured.`,
      body: (
        <>
          <ul>
            <li>Use <code>Idempotency-Key</code> on POSTs.</li>
            <li>Prefer streaming for long responses.</li>
            <li>Validate tool parameters server-side.</li>
            <li>Attach <code>metadata</code> for observability.</li>
            <li>Keep prompts crisp; include role, constraints, and examples.</li>
          </ul>
        </>
      )
    },

    security: {
      title: 'Security & Privacy',
      text: `TLS in transit; optional zero-retention; region pinning; BAA on request; PII redaction filters.`,
      body: (
        <>
          <ul>
            <li>Zero-retention mode available (enterprise).</li>
            <li>Region pinning for data locality.</li>
            <li>PII detection/redaction filters configurable per session.</li>
          </ul>
        </>
      )
    },

    changelog: {
      title: 'Changelog',
      text: `v2 adds agent events, workflow DSL, SSE streaming; v1 initial public release.`,
      body: (
        <ul>
          <li><strong>v2</strong>: Agent SSE events, workflow DSL templating, RAG helpers.</li>
          <li><strong>v1</strong>: Completions, chat, embeddings, basic agents.</li>
        </ul>
      )
    },
  }

  const order = [
    'overview','auth','sdks','completions','chat','agents','workflows','files','runs','webhooks','batch','errors','limits','best','security','changelog'
  ]

  return order.map(k => ({
    id: blocks[k].title.replace(/\s+/g,'-'),
    title: blocks[k].title,
    searchText: blocks[k].text.toLowerCase(),
    body: blocks[k].body
  }))
}

function LangAndCode({ template, version }) {
  const [lang, setLang] = useState('Python')
  const code = codeTemplates[template]({ v: version, lang })
  return (
    <>
      <LangTabs active={lang} onChange={setLang} />
      <CodeBlock code={code} />
    </>
  )
}

function useDocsSearch(sections, query) {
  const q = query.trim().toLowerCase()
  if (!q) return []
  const hits = []
  sections.forEach(s => {
    if (s.searchText.includes(q)) {
      const idx = s.searchText.indexOf(q)
      const start = Math.max(0, idx - 60)
      const end = Math.min(s.searchText.length, idx + q.length + 60)
      const snippet = s.searchText.slice(start, end)
      hits.push({ id: s.id, title: s.title, snippet })
    }
  })
  return hits
}

export default function ApiDocs() {
  const [version, setVersion] = useState('v1')
  const [open, setOpen] = useState({})
  const [query, setQuery] = useState('')
  const [activeAnchor, setActiveAnchor] = useState('')
  const secs = useMemo(() => sectionsData(version), [version])
  const results = useDocsSearch(secs, query)

  useEffect(() => {
    const handler = () => {
      const anchors = secs.map(s => document.getElementById(s.id)).filter(Boolean)
      const top = window.scrollY + 120
      let current = ''
      for (const el of anchors) {
        if (el.offsetTop <= top) current = el.id
      }
      setActiveAnchor(current)
    }
    handler()
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [secs])

  const toggle = (id) => setOpen(o => ({ ...o, [id]: !o[id] }))

  return (
    <div className="docs-shell">
      <aside className="docs-sidebar">
        <div className="sidebar-head">
          <h2>Chikoro API</h2>
          <VersionTabs active={version} onChange={setVersion} />
          <input
            className="search"
            placeholder="Search docs…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {!!query && (
            <div className="search-results">
              {results.length === 0 && <div className="search-empty">No matches</div>}
              {results.map(r => (
                <a key={r.id + r.snippet} href={`#${r.id}`} onClick={() => setQuery('')}>
                  <div className="sr-title">{r.title}</div>
                  <div className="sr-snippet" dangerouslySetInnerHTML={{
                    __html: r.snippet.replace(new RegExp(query, 'ig'), m => `<mark>${m}</mark>`)
                  }} />
                </a>
              ))}
            </div>
          )}
        </div>
        <nav className="toc">
          {secs.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={activeAnchor === s.id ? 'active' : ''}
            >
              {s.title}
            </a>
          ))}
        </nav>
      </aside>

      <main className="docs-main">
        <header className="page-hero">
          <h1>Scales API Documentation</h1>
          <p>Build agents, workflows, and apps with Genesis 2 and Exodus. Secure, scalable, and Africa-first.</p>
        </header>

        {secs.map(s => (
          <section key={s.id} id={s.id} className="doc-section">
            <h2 onClick={() => toggle(s.id)}>
              {s.title}
              <span className="chev">{open[s.id] === false ? '＋' : '－'}</span>
            </h2>
            {(open[s.id] !== false) && (
              <div className="section-body">
                {s.body}
              </div>
            )}
          </section>
        ))}
      </main>
    </div>
  )
}
