export const projects = [
  {
    id: "p1",
    title: "Production-Grade RAG System for Academic Querying",
    slug: "production-rag-system-academic-querying",
    description:
      "A scalable retrieval-augmented generation pipeline enabling natural language querying across structured and unstructured academic datasets with measurable evaluation.",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
    techStack: [
      "Python",
      "PyTorch",
      "LangChain",
      "PostgreSQL",
      "PGVector",
      "RAGAS",
      "LLM APIs",
    ],
    githubUrl: "",
    liveUrl: "",
    highlights: [
      "Designed full RAG pipeline: embedding generation → vector indexing → semantic retrieval → response synthesis.",
      "Indexed and optimized 10,000+ records using PostgreSQL + PGVector for low-latency semantic search.",
      "Improved response relevance by 30% through chunking strategy tuning and embedding evaluation.",
      "Implemented structured RAG evaluation using RAGAS metrics (faithfulness, context precision, answer relevance).",
      "Optimized token budgeting and retrieval diversity for improved context utilization.",
    ],
  },

  {
    id: "p2",
    title: "AI Digital Clone (Llama 3 7B Fine-Tuned)",
    slug: "ai-digital-clone-llama3",
    description:
      "A personalized conversational AI built by fine-tuning instruction-tuned LLMs on structured multi-turn chat datasets with privacy-focused preprocessing.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    techStack: [
      "Python",
      "Hugging Face",
      "Unsloth",
      "QLoRA",
      "Llama 3 8B Instruct",
      "PyTorch",
    ],
    githubUrl: "",
    liveUrl: "",
    highlights: [
      "Engineered preprocessing pipeline converting noisy multilingual chat exports into structured instruction datasets.",
      "Redacted sensitive information (phones, emails, names, locations) for safe training.",
      "Fine-tuned Llama 3 8B Instruct using 4-bit QLoRA for memory-efficient single-GPU training.",
      "Designed sliding-window conversation chunking to fit model context limits.",
      "Reduced overfitting by tuning epoch count and balancing dataset diversity.",
    ],
  },

  {
    id: "p3",
    title: "Federated Intrusion Detection System",
    slug: "federated-intrusion-detection-system",
    description:
      "A privacy-preserving federated learning system for intrusion detection supporting decentralized training across non-IID client environments.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Python", "PyTorch", "FedML", "CNN", "LSTM", "SHAP"],
    githubUrl: "",
    liveUrl: "",
    highlights: [
      "Implemented multi-client federated training with non-IID data distribution.",
      "Benchmarked CNN and LSTM architectures across decentralized environments.",
      "Analyzed global vs local aggregation strategies for convergence optimization.",
      "Applied SHAP interpretability techniques to quantify feature influence.",
      "Optimized communication rounds for improved distributed training efficiency.",
    ],
  },
  {
    id: "p4",
    title: "Federated Intrusion Detection System",
    slug: "federated-intrusion-detection-system",
    description:
      "A privacy-preserving federated learning system for intrusion detection supporting decentralized training across non-IID client environments.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Python", "PyTorch", "FedML", "CNN", "LSTM", "SHAP"],
    githubUrl: "",
    liveUrl: "",
    highlights: [
      "Implemented multi-client federated training with non-IID data distribution.",
      "Benchmarked CNN and LSTM architectures across decentralized environments.",
      "Analyzed global vs local aggregation strategies for convergence optimization.",
      "Applied SHAP interpretability techniques to quantify feature influence.",
      "Optimized communication rounds for improved distributed training efficiency.",
    ],
  },
];
