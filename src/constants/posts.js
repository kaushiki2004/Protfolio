const posts = [
  {
    id: "b1",
    title:
      "Building a RAG Agent for Academic Work: Chunking, Embeddings, and Evaluation",
    date: "2026-03-09",
    slug: "rag-agent-academic-chunking-embeddings-evaluation",
    excerpt:
      "What I learned experimenting with preprocessing for RAG—chunking strategies, embedding choices, token limits, LLM APIs (open vs closed), and evaluation with RAGAS-style metrics.",
    tags: ["RAG", "NLP", "Evaluation", "LLMs"],
    coverImage:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
    content: `
# Creating a RAG Agent for Academic Settings

I wanted a RAG (Retrieval-Augmented Generation) workflow that *actually helps* in academic contexts: reading papers, answering questions with citations, summarizing sections, and comparing claims across multiple sources. The biggest surprise: the quality of the system is often decided **before** the model answers anything—during preprocessing and retrieval design.

Below is the mental model and experiments that helped me get a more reliable academic RAG pipeline.

---

## 1) The real problem: “retrieval quality” is a preprocessing problem

In academic settings you typically deal with:
- PDFs and messy text extraction (headers/footers, hyphenation, broken sentences)
- Long documents with dense context
- Figures, citations, and references that matter to interpretation

A RAG system can only retrieve what your pipeline *represents* well. That’s why the preprocessing stage is the first thing I focused on.

---

## 2) Data preprocessing: cleaning that pays off

The simplest steps often had the best ROI:
- **Remove repeating headers/footers** that appear on every page
- **Fix line breaks & hyphenation** (e.g., “infor- mation” → “information”)
- **Normalize whitespace** and strip empty blocks
- **Keep section structure** (titles, headings) because it improves chunk meaning

A practical trick: store both the “clean text” AND the original source metadata so you can cite the exact page/section later.

---

## 3) Chunking strategies I experimented with

Chunking decides what your retriever sees. If chunks are too small, you lose context. If they’re too large, retrieval becomes fuzzy and expensive.

### Strategy A: Fixed-size chunking (baseline)
- Example: chunks of 300–600 tokens with overlap
- Pros: simple
- Cons: can split definitions/equations mid-thought

### Strategy B: Sentence-aware chunking
- Use sentence boundaries and build chunks until a target token range
- Pros: fewer “broken ideas”
- Cons: needs careful sentence segmentation for PDF text

### Strategy C: Section-aware chunking (best for academic PDFs)
- Split by headings (Introduction, Methods, etc.)
- Then sub-chunk within each section
- Pros: retrieval results feel more “topic coherent”
- Cons: requires reliable heading detection (can be hard for PDFs)

### Overlap matters
Overlap helps when:
- a definition spans boundary
- a chunk ends right before a key claim

But too much overlap increases index size and can cause redundant retrieval. I treated overlap as a tuning knob rather than a default.

---

## 4) Choosing embedding models (and why it’s not “one-size-fits-all”)

Embedding model choice affects:
- semantic recall (finding relevant content)
- sensitivity to domain language (academic jargon)
- robustness to formatting noise

What I looked for:
- strong semantic performance on technical text
- stable results on long paragraphs
- predictable latency and cost

A practical workflow:
1. Pick 2–3 embedding models
2. Create a small evaluation set (20–50 queries)
3. Compare retrieval results side-by-side
4. Choose the model that gives the most consistent “top-3” hits

Even if generation is strong, poor embeddings will make the system feel unreliable.

---

## 5) Token limits: finding the “right” context window strategy

The model’s context window isn’t just a technical detail—it changes your product behavior:
- If you stuff too many chunks: you get diluted answers
- If you include too few: answers become confident but incomplete
- If chunks are long: you reduce the number of sources you can include

What helped me:
- cap retrieved chunks (e.g., top-k)
- cap total tokens passed into the LLM
- favor diversity: multiple sections/sources instead of 5 near-duplicates

I ended up treating the context as a “budget”:
- allocate tokens for system + instruction
- allocate tokens for question + conversation
- allocate remaining tokens for retrieved evidence

---

## 6) Open vs closed-source LLM APIs: tradeoffs I considered

When building an agent, the LLM is a dependency—so API decisions matter.

### Closed-source APIs
- Pros: strong general performance, easy to call, good reliability
- Cons: cost, privacy constraints, less control, can’t fine-tune most models

### Open-source models (self-hosted or via providers)
- Pros: control, privacy, customization, on-prem options
- Cons: infra complexity, sometimes weaker reasoning, more tuning required

My approach:
- prototype quickly with a strong hosted model
- later validate feasibility with an open-source alternative if privacy/cost demands it

---

## 7) Evaluation: how I avoided “vibes-based” RAG

RAG often “feels good” until it fails a real academic question. So I leaned on **structured evaluation**.

### The core idea
Evaluate retrieval and generation separately:
- **Retrieval:** did we fetch the right evidence?
- **Generation:** did the answer correctly use evidence, avoid hallucination, and stay grounded?

### RAGAS-style metrics (high-level)
The types of signals I cared about:
- **Faithfulness:** answer supported by retrieved context
- **Answer relevance:** answer actually addresses the question
- **Context relevance:** retrieved context is relevant (not noise)
- **Context recall:** missing evidence that should have been retrieved

Even lightweight evaluation helps you iterate: change chunking → rerun eval → compare metrics and qualitative examples.

---

## 8) What I’d do next
- add query rewriting for better recall (especially for vague student questions)
- add citation formatting (page/section)
- test multi-hop retrieval for questions that span multiple papers

---

## Final takeaway
Academic RAG is won or lost in preprocessing, chunking, and evaluation. If you treat the system as a measurable pipeline (not a demo), it becomes dramatically more trustworthy.
`,
  },

  {
    id: "b2",
    title:
      "Fine-Tuning an Open-Source LLM on WhatsApp Chats (Llama 3 7B + Unsloth): Preprocessing First",
    date: "2026-03-05",
    slug: "finetuning-llama3-7b-whatsapp-unsloth-preprocessing",
    excerpt:
      "Fine-tuning isn’t the hard part—data preprocessing is. Here’s how I cleaned multilingual chats (Hindi + English), protected privacy, formatted for instruction tuning, and avoided overfitting.",
    tags: ["Fine-tuning", "Llama", "Unsloth", "Privacy", "Multilingual"],
    coverImage:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    content: `
# Fine-Tuning Llama 3 7B on WhatsApp Chats with Unsloth — The Real Work is Preprocessing

I experimented with fine-tuning an open-source LLM (Llama 3 7B) on my personal WhatsApp chats using Unsloth. The goal wasn’t to build a “perfect clone” of my voice—it was to learn the workflow and see how far careful data work can go.

The main lesson: **preprocessing is the project**. Training is the last 10%.

---

## 0) Ethical + privacy first (seriously)
Before touching any training code, I made rules:
- **Never publish raw chat data** (not on GitHub, not in public notebooks)
- **Do not store raw exports in cloud drives** unless encrypted and intentionally managed
- **Redact personal info** (numbers, emails, addresses, identifiers)
- Keep experiments local or in private storage

If you don’t have a clear privacy strategy, don’t do this experiment.

---

## 1) Why WhatsApp data is messy
WhatsApp exports contain:
- timestamps, sender labels, system messages (“missed call”, “changed group icon”)
- weird line breaks and emoji
- multi-language messages (Hindi + English in my case)
- code-switching and slang (Hinglish)
- mixed contexts (work + friends + family)

If you feed it directly into a fine-tune, the model learns **noise**, not style.

---

## 2) Preprocessing pipeline (my checklist)

### A) Parsing and cleaning
I removed / handled:
- system messages (joined group, deleted message, etc.)
- duplicated whitespace and broken lines
- empty messages and pure reaction-only messages (optional)
- spammy forwards (optional)

### B) Redaction (critical)
I replaced sensitive patterns with placeholders:
- phone numbers → \`<PHONE>\`
- emails → \`<EMAIL>\`
- URLs → \`<URL>\`
- addresses / exact locations → \`<LOCATION>\`
- names (optional, depending on your goal) → \`<NAME>\`

This keeps the structure of conversations while protecting identity.

### C) Handling multilingual text (Hindi + English)
Key issue: slang + code-switching + informal spelling.

I leaned toward models with:
- **larger context windows** (so the model sees more conversational history)
- **better multilingual coverage** (so Hindi and Hinglish aren’t treated as garbage tokens)

The goal isn’t “perfect Hindi,” it’s: does the model keep meaning and tone without collapsing into awkward English-only responses?

---

## 3) Choosing the right model and context length
Two practical constraints:
- long chats need chunking to fit context windows
- instruction tuning formats require consistent input-output shape

I preferred a model/config that could:
- handle longer sequences without truncating the most important parts
- still train efficiently on a consumer GPU setup (depending on quantization and LoRA settings)

---

## 4) Convert chats into *instruction format* (ChatGPT-style)
To fine-tune an instruction model, I formatted each example like:

- **system**: behavior rules (optional)
- **user**: message(s) or prompt
- **assistant**: reply

Example idea (not your real data):
- user: “Bro kal kya plan hai?”
- assistant: “Kal shaam ko free hoon, 7 baje?”

This matters because the model learns:
- how to respond
- where the assistant role starts
- the style of replies

---

## 5) Chunking conversations into bite-sized training examples
Raw chats are long. So I broke them into small windows:
- take N turns of dialogue as context
- predict the next assistant response
- slide the window

Why this helps:
- fits the model context window
- creates many training samples
- avoids mixing unrelated time periods into one sample

I avoided extremely long chunks because they:
- increase training cost
- increase the chance of truncation
- can cause the model to memorize specific rare details

---

## 6) Avoid overfitting: fewer epochs, better dataset
Overfitting risk is real with personal chat data:
- repeated phrases
- inside jokes
- common slang
- frequent names (even after redaction, patterns exist)

So I emphasized:
- **lower training epochs**
- mixing in more diverse conversation contexts (not just one group chat)
- filtering out ultra-repetitive exchanges

The aim: capture *tone and cadence* without memorizing exact messages.

---

## 7) Practical “don’ts” (hard rules)
- Don’t push any chat export to GitHub (even private repos can leak later)
- Don’t share training samples in screenshots
- Don’t log raw samples in experiment trackers
- Don’t forget that metadata (timestamps) can still reveal information

---

## Final takeaway
Fine-tuning open-source LLMs can be surprisingly approachable with Unsloth—but doing it responsibly and effectively means treating preprocessing like the main deliverable:
- clean parsing
- strong redaction
- multilingual handling
- instruction formatting
- chunking to fit context windows
- conservative training to reduce overfitting

If the data is clean and safe, everything else becomes easier.
`,
  },

  // OPTIONAL third post so you still meet the “minimum 3 posts” requirement
  {
    id: "b3",
    title: "RAG vs Fine-Tuning: How I Decide Which One to Use",
    date: "2026-02-25",
    slug: "rag-vs-finetuning-decision-framework",
    excerpt:
      "A practical framework for deciding between RAG and fine-tuning: data sensitivity, freshness, token budgets, and what you actually want the model to learn.",
    tags: ["RAG", "Fine-tuning", "LLMs", "Engineering"],
    coverImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    content: `
# RAG vs Fine-Tuning: A Simple Decision Framework

If you’re building something with LLMs, you’ll eventually face this question:
**Should I use RAG, fine-tuning, or both?**

Here’s the framework I use when deciding.

---

## Choose RAG when…
- Your knowledge changes frequently (freshness matters)
- You need citations and grounded answers
- You have a lot of documents and want coverage without retraining
- You can’t safely bake private data into model weights

RAG is like “open book + smart retrieval.”
It’s usually the fastest path to useful, reliable systems.

---

## Choose fine-tuning when…
- You want consistent style, tone, or format
- You want better behavior on a narrow task
- You have a stable dataset and clear target outputs
- You can preprocess and redact data safely

Fine-tuning is like “teaching the model a habit.”
But it’s easy to waste time if the dataset is noisy.

---

## Choose both when…
- You want a specific writing style *and* fresh document grounding
- You want the model to follow domain-specific instructions consistently
- You want RAG answers to be formatted in a strict way (like “cite sources + bullet summary”)

A common pattern:
- fine-tune for behavior and formatting
- use RAG for facts and citations

---

## The hidden constraint: token and context budgets
Even if you *can* do RAG, your model has a context window limit.
If your retrieved evidence can’t fit, you may need:
- better chunking
- summarization steps
- hierarchical retrieval
- or a model with larger context

---

## Final takeaway
Use RAG for knowledge.
Use fine-tuning for behavior.
Use both if you need both.

And in all cases: preprocessing is the secret weapon.
`,
  },
];

export default posts