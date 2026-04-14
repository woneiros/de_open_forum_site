export type HallId = "goldman" | "swig" | "yud";

export interface Speaker {
  name: string;
  title: string;
  company: string;
  linkedin: string;
  avatarUrl: string | null;
  bio: string;
}

export interface Session {
  id: string;
  start: string;
  end: string;
  hall: HallId;
  spansAllHalls?: boolean;
  isSponsored?: boolean;
  sessionType: "Keynote" | "Panel" | "Full Talk" | "Lightning Talk" | "None";
  title: string;
  speakers: Speaker[];
  moderator?: Speaker | null;
  abstract: string;
}

export const halls: Record<
  HallId,
  { name: string; color: string; roomLabel: string }
> = {
  goldman: {
    name: "Goldman Hall",
    roomLabel: "North Gallery",
    color: "border-[#e67e22] bg-[#e67e22]/15 text-[#f6ba7f]",
  },
  swig: {
    name: "Swig Gallery",
    roomLabel: "Central Atrium",
    color: "border-[#3f8cff] bg-[#3f8cff]/15 text-[#9ec7ff]",
  },
  yud: {
    name: "Yud Gallery",
    roomLabel: "South Studio",
    color: "border-[#4caf76] bg-[#4caf76]/15 text-[#9ddfb5]",
  },
};

export const timeSlots = [
  { key: "07:30", start: "8:30 AM", end: "9:30 AM" },
  { key: "09:30", start: "9:30 AM", end: "10:15 AM" },
  { key: "10:30", start: "10:30 AM", end: "11:15 AM" },
  { key: "11:30", start: "11:30 AM", end: "12:15 PM" },
  { key: "12:15", start: "12:15 PM", end: "2:00 PM" },
  { key: "14:00", start: "2:00 PM", end: "2:45 PM" },
  { key: "15:00", start: "3:00 PM", end: "3:45 PM" },
  { key: "16:00", start: "4:00 PM", end: "5:00 PM" },
  { key: "17:30", start: "5:00 PM", end: "7:00 PM" },
];

export const sessions: Session[] = [
  {
    id: "s0",
    start: "09:45",
    end: "10:00",
    hall: "goldman",
    spansAllHalls: true,
    isSponsored: true,
    sessionType: "Keynote",
    title:
      "The Evolution of Structured Streaming: How Apache Spark Innovated on Throughput, Latency, and Flexibility",
    speakers: [
      {
        name: "Indrajit Roy",
        title: "Director of Engineering",
        company: "Databricks",
        linkedin: "https://www.linkedin.com/in/indrajit-roy-93759570/",
        avatarUrl: "/speakers/IndrajitRoy.jpg",
        bio: "Indrajit Roy is a Director at Databricks where he leads Spark Structured Streaming and the Enzyme incremental processing engine. Before Databricks, he led the Napa data warehouse at Google, the engine behind some of Google’s most revenue-critical systems including Ads. He spent his earlier years as a principal researcher at HP Labs working on databases and new data infrastructure technologies.",
      },
    ],
    abstract:
      "Apache Spark Structured Streaming serves millions of queries weekly for enterprise users at production sale. Its core innovation- microbatch processing that incrementally processes data - has driven its widespread adoption. Over the last decade we have evolved Structured Streaming to handle the challenges when this microbatch architecture is applied to data engineering, from improving utilization for cost conscious clients to pushing latency down to meet real-time demands. We also brought the power of declarative programming to users by adding new abstractions for stateful processing and making it easier to express complex data engineering tasks via Spark Declarative Pipelines (SDP).",
  },
  {
    id: "s0b",
    start: "10:00",
    end: "10:15",
    hall: "goldman",
    spansAllHalls: true,
    isSponsored: true,
    sessionType: "Keynote",
    title:
      "The Data Odyssey: A 15-Year Voyage from Pipelines to Sovereignty across Big Tech",
    speakers: [
      {
        name: "Jerry Wang",
        title: "Head of Data Development Infrastructure",
        company: "Airbnb",
        linkedin: "https://www.linkedin.com/in/jerry-wang-aa813637",
        avatarUrl: "/speakers/Jerry-Wang.jpg",
        bio: "Senior engineering leader with nearly 20 years of experience building and scaling data engineering, analytics, data infrastructure, and AI/ML platforms at Airbnb, Apple, Netflix, and Meta. Proven track record of leading large, multi-team organizations, modernizing core infrastructure, establishing governance at scale, and delivering durable platforms that improve reliability, developer velocity, and cost efficiency for thousands of engineers and practitioners.",
      },
    ],
    abstract:
      "This talk chronicles \"The Data Odyssey,\" a decade long voyage across Airbnb that redefines the data engineer's role from managing pipelines to architecting data products and achieving data sovereignty. We'll examine key lessons from the past, which drives the transition to data products and services exemplified by the work at Airbnb. The session concludes with a call to action for the next generation of Data Engineers to own the data's entire lifecycle.",
  },
  {
    id: "s5",
    start: "10:30",
    end: "11:15",
    hall: "goldman",
    sessionType: "Full Talk",
    title: "Column storage for the AI era",
    speakers: [
      {
        name: "Julien Le Dem",
        title: "Principal Engineer",
        company: "Datadog",
        linkedin: "https://www.linkedin.com/in/julienledem/",
        avatarUrl: "/speakers/julien-le-dem.png",
        bio: "Julien Le Dem is a Principal Engineer at Datadog, serves as an officer of the ASF and is a member of the LFAI&Data Technical Advisory Council. He co-created the Parquet, Arrow and OpenLineage open source projects and is involved in several others. His career leadership began in Data Platforms at Yahoo! - where he received his Hadoop initiation - then continued at Twitter, Dremio and WeWork. He then co-founded Datakin (acquired by Astronomer) to solve Data Observability. His French accent makes his talks particularly attractive.",
      },
    ],
    abstract:
      "The past few years have brought a Cambrian explosion of new columnar formats, challenging the hegemony of Parquet: Lance, Fastlanes, Nimble, Vortex, AnyBlox, F3. Each promises optimizations for modern workloads. This proliferation introduces the risk of fragmenting the industry into competing standards. The question is whether established projects can adapt fast enough or whether fragmentation is inevitable.\n\nWe’re entering an AI-dominated era. While some argue that the main consumer of data will become AI and not humans, much of our data infrastructure was designed for a very different time before vector embeddings, GPU-optimized memory layouts, and multi-modal training datasets became primary concerns. The premise of these new formats is that the context has changed so much that the design of the previous decade is not going to cut it moving forward.\n\nWhile these new formats incorporate genuine innovation in encoding techniques, enabling more parallel decoding and random access, this framing overlooks what made the original successful in the first place. The main contribution of Parquet has been to provide a standard for columnar storage. It should not simply be viewed for its technical contributions as formats. Rather, as an open source project hosted by the ASF, Parquet acts as a consensus-building machine for the industry, aligning vendors, cloud providers, and open source projects around shared standards. This ecosystem cohesion has delivered immense value: seamless data exchange, reduced integration costs, and accelerated innovation built on stable foundations.\n\nThe real opportunity is not in choosing between old and new, but in leveraging the communities of these established projects to absorb innovations while maintaining interoperability. In this talk, we'll examine what’s driving these new requirements and how we can evolve the columnar ecosystem to meet AI-era demands without fragmenting into incompatible silos.",
  },
  {
    id: "s6",
    start: "10:30",
    end: "11:15",
    hall: "yud",
    sessionType: "Lightning Talk",
    title: "From Manual to Magical: Building AI Agents for ETL Automation",
    speakers: [
      {
        name: "Himanshi Manglunia",
        title: "Senior Data Engineer",
        company: "Amazon Web Services",
        linkedin: "https://www.linkedin.com/in/himanshi-manglunia/",
        avatarUrl: "/speakers/Himanshi-Manglunia.jpeg",
        bio: "Himanshi Manglunia is a Data Engineer at Amazon Web Services with nearly a decade of experience building data pipelines across financial services, payments, and cloud technology. At AWS, she works on data engineering and MLOps, designing large-scale data infrastructure that powers critical business decisions. Himanshi is passionate about using AI agents to eliminate repetitive engineering work, and this talk draws from her hands-on experience building autonomous ETL automation systems.",
      },
    ],
    abstract:
      "Data engineers spend countless hours on repetitive ETL enhancements — adding columns, updating transformations, fixing schema mismatches. A \"simple\" pipeline change that should take 90 minutes routinely balloons into a full day of context switching, redeployment cycles, and debugging. What if AI agents could handle these changes end to end? In this talk, we'll walk through the design of a self-healing ETL automation system powered by AI agents. Rather than one-shot code generation, the system executes a full workflow: parsing requirements from natural language, modifying SQL while preserving team coding patterns, deploying to cloud infrastructure, monitoring execution with exponential backoff, and automatically recovering from common failures — all without human intervention. We'll start with the real cost of repetitive pipeline work and what makes a task a good candidate for automation. Then we'll unpack the architecture: how the agent validates schemas via metadata catalogs, deploys and triggers Airflow DAGs, classifies failures as auto-fixable vs. requiring human intervention, and retries up to 3 times before escalating. We'll also cover why the AI model is only a fraction of the solution — the real product is the context layer: guardrails",
  },
  {
    id: "s13",
    start: "10:30",
    end: "11:15",
    hall: "yud",
    sessionType: "Lightning Talk",
    title: "SparkMedic: First Aid for Failing Jobs",
    speakers: [
      {
        name: "Drasko Profirovic",
        title: "Staff Engineer",
        company: "Pinterest",
        linkedin: "https://ca.linkedin.com/in/pdrasko",
        avatarUrl: "/speakers/drasko-profirovic.jpeg",
        bio: "Drasko started their career as a full-stack engineer before gradually moving deeper into backend and distributed workloads. They spent time at Stripe on the batch processing and storage team, and later joined OpenAI's data platform team, working across domains including workflow orchestration and batch compute.\n\nCurrently, they are a Staff Engineer at Pinterest in the big data processing organization, focused on agentic systems. Their work centers on building the primitives and frameworks that make it easier to build and own agentic solutions-covering areas such as diagnostics tooling, orchestration, and automated resolution.",
      },
    ],
    abstract:
      "In this talk, we will walk through the journey of building an agentic diagnostics tool designed to tackle one of the most time-consuming and frustrating challenges in data engineering: troubleshooting Spark job failures at scale. As Spark workloads and platform complexity grow, traditional dashboards and static playbooks are no longer enough. We set out to build an intelligent Agent that can automatically ingest logs, correlate context, and produce human-quality diagnoses and actionable recommendations in minutes instead of hours.\n\nWe'll start by outlining the core design goals-accuracy, extensibility, and trustworthiness-and then unpack the architectural building blocks we put in place to achieve them. This includes how we structured the Agent around modular capabilities (log parsing, pattern recognition, root cause inference, remediation suggestion), how we integrated with existing Spark and platform metadata, and how we designed the system so new error patterns and domains can be added with minimal friction. We'll also cover our approach to making the Agent testable: how we built a corpus of real incidents, codified them as regression tests, and used them to continuously evaluate reasoning quality and safety.\n\nNext, we'll dive deeper into what it means to push agentic systems to their limits in a production environment. We'll share concrete lessons learned around prompt and tool design, handling ambiguity in logs, preventing hallucinations, dealing with partial or noisy signals, and striking the right balance between automation and human oversight. Along the way, we'll highlight surprising failure modes and how we iterated to address them.\n\nWe'll conclude by sharing our future direction: expanding coverage beyond Spark to other data and ML systems, increasing the Agent's ability to take safe, automated actions, and leveraging feedback loops from engineers to continuously refine its reasoning over time.",
  },
  {
    id: "s7",
    start: "11:30",
    end: "12:15",
    hall: "goldman",
    sessionType: "Panel",
    title:
      "Data, Perspective, Action: Why Most Data Engineering Teams Fail at the 'Perspective' Part",
    speakers: [
      {
        name: "Mick Dreeling",
        title: "Director, Games Data Science and Engineering",
        company: "Netflix",
        linkedin: "https://www.linkedin.com/in/mdreeling/",
        avatarUrl: "/speakers/Mick-Dreeling.jpeg",
        bio: "Mick Dreeling is a technology leader specializing in data engineering, analytics, and large-scale data platforms. He is currently Director of Games Data Science and Engineering at Netflix, where he leads teams responsible for building the data infrastructure and analytics systems that support the company's growing games ecosystem.\n\nPrior to Netflix, Mick was Head of Data Engineering at Riot Games, where he led the data engineering organization during the rapid growth of League of Legends and helped establish data platforms supporting multiple game titles.\n\nWith more than 25 years of experience in software and data engineering, Mick has worked on large-scale distributed data systems and analytics platforms, turning massive operational data streams into actionable insights that improve digital experiences for millions of users.\n\nMick holds a Master's degree in Data Science from UC Berkeley, a Master's degree in Computer Science, and a Bachelor's degree in Applied Computing from Waterford Institute of Technology.",
      },
      {
        name: "Shridhar Iyer",
        title: "Director, Data Engineering",
        company: "Meta",
        linkedin: "https://www.linkedin.com/in/shridhar-iyer/",
        avatarUrl: "/speakers/Shridhar-lyer.png",
        bio: "Shridhar Iyer is a Senior Tech Lead Director at Meta, where he has spent over 13 years building the data infrastructure that powers some of the world's most widely used products. Currently tech leading Meta's AI for Data Stack, he architects the Context Ecosystem Infrastructure - the foundational layer for AI-powered data agents - spanning semantic modeling, metadata governance, and compliance workflows across the Meta Family of Apps. His career traces the arc of data engineering itself: from raw data to information, knowledge, and ultimately wisdom - and he believes AI is now accelerating that journey industry-wide. With 25+ years of engineering experience in supply chain, search analytics, and large-scale data infrastructure, Shridhar brings a practitioner's lens to the evolving role of data engineering in an AI-native world.",
      },
    ],
    moderator: {
      name: "Goutham Budati",
      title: "VP, Data Strategy and Insights",
      company: "The Farmer's Dog",
      linkedin: "https://www.linkedin.com/in/gouthambudati/",
      avatarUrl: "/speakers/Goutham-Budati.jpeg",
      bio: "Goutham Budati is Vice President of Data Strategy and Insights at The Farmer's Dog, where he leads Consumer Research, Voice of the Customer, Data Science, Analytics, and Data Engineering teams. He specializes in building zero-to-one data teams and turning around data organizations that don't scale with business after a strong start, having done so three times across companies ranging from startups to Fortune 10 enterprises, which led him to develop the Data-Perspective-Action Framework.\n\nPreviously at Amazon, Goutham led Data Products and Experimentation, where he scaled experimentation frameworks across the organization. His work at Zocdoc and Oxford Road demonstrates his ability to transform data teams from technical support into strategic partners that bridge technical execution with business impact.\n\nBeyond his executive role, Goutham serves on the University of Maryland's MS in Marketing Analytics Advisory Council. He holds an MBA from University of Maryland Smith School of Business and a BE in Computer Science from Osmania University.",
    },
    abstract:
      "Data engineering teams excel at building pipelines and infrastructure (Data) and executing roadmaps (Action). But the middle layer, Perspective, is where most organizations fail. Without the right perspective on what problems to solve, which stakeholders to influence, and how to translate technical capability into business value, even the best data engineering teams become glorified order-takers.\n\nThis panel explores the Data-Perspective-Action Framework through the lens of organizational transformation. We'll discuss how shifting perspective, not just adding headcount or technology, is what separates high-impact data engineering organizations from those stuck in reactive mode.\n\nWe'll dig into:\n- Why do data teams build the right infrastructure but still can't influence decisions?\n- How perspective shapes everything: what you measure, who you hire, what technical debt you prioritize\n- The hidden cost of misaligned perspectives between data engineering and business stakeholders\n- Building systems that surface insights vs. just serving data\n- How organizational design either enables or blocks the perspective -> action loop.",
  },
  {
    id: "s8",
    start: "11:30",
    end: "12:15",
    hall: "yud",
    sessionType: "Lightning Talk",
    title:
      "MinervaSQL - Lessons Building a Full-fledged SQL interface for a Semantic Layer",
    speakers: [
      {
        name: "Barak Alon",
        title: "Senior Staff Software Engineer",
        company: "Airbnb",
        linkedin: "https://www.linkedin.com/in/barakalon/",
        avatarUrl: "/speakers/barak-alon.jpeg",
        bio: "Barak is the technical lead of Airbnb's semantic layer and metric platform, Minerva, and a core contributor to the SQLGlot open source project. To the bewilderment of his family and friends, Barak is passionate about building elegant data infrastructure.",
      },
    ],
    abstract:
      "Minerva is Airbnb's semantic layer and metric platform. With 1000s of users and 40,000 metrics, Minerva powers analytics and experimentation across the entire company.\n\nA couple years ago, we took the treacherous path and decided to build a full-fledged SQL interface for Minerva, called \"MinervaSQL\". This has enabled a new level of exploratory power for our users, but it comes with some complex challenges.\n\nThis talk covers some of MinervaSQL's unique features, along with their tradeoffs, including:\n1. Virtualized one-big-table for the entire semantic layer\n2. Materialized view selection and automatic rewriting\n3. Passthrough and interoperability with the broader data lake",
  },
  {
    id: "s17",
    start: "11:30",
    end: "12:15",
    hall: "swig",
    sessionType: "Full Talk",
    title:
      "Beyond Vectors: How Apache Doris Brings Hybrid Search and Real-Time Analytics to Context Engineering",
    speakers: [
      {
        name: "Yuankai Shen",
        title: "Principal Product Manager",
        company: "VeloDB",
        linkedin: "https://www.linkedin.com/in/yuankai-kevin-shen/",
        avatarUrl: "/speakers/Kevin-Shen.jpg",
        bio: "Yuankai (Kevin) is currently a principal product manager at VeloDB. Prior to VeloDB, Kevin led various data management products at IBM, such as watsonx.data and IBM Data Virtualization (Watson Query). Aside from working in data management, Kevin has also spent years as a technology consultant at Accenture, working closely with the U.S. federal customers on implementing solutions to reflect legislation.",
      },
    ],
    abstract:
      "Generative AI lives or dies by the context it is provided with, as a lack of appropriate context leads to an ambiguous response, leaving the generated up to probability. In 2020, Meta researchers published the paper, “Embedding-based Retrieval in Facebook Search”, discussing how “Approximate Nearest Neighbor” was implemented through embedding models with high-dimensional vector representation. The retrieval method in this paper resulted in vector-based retrieval-augmented generation (RAG) being the most prevalent architecture for enriching LLMs with context.\n\nHowever, RAG with pure vector search has limitations, including semantic confusion, where pure ANN retrieval with vector embedding and search alone is unable to distinguish among different classes, concepts, or inputs due to high semantic similarity among embeddings (i.e Seattle and San Francisco are all on the west coast hence semantically similar, but may not match the intent of the user). Furthermore, retrieval and context engineering with pure vector search are very memory-intensive, resulting in high infrastructure requirements.\n\nThis talk will introduce hybrid search with Apache Doris as a next-generation retrieval solution for generative AI and context engineering. Addressing the semantic confusion problem by combining vector search, full-text search, and SQL to capture the exact-match intent with semantic similarity, resulting in a more accurate and cost-effective solution.\n\nFinally, we will touch on how the native real-time capability that Apache Doris brings to OLAP can be extended to real-time RAG, helping organizations think about future challenges in this space.",
  },
  {
    id: "s9",
    start: "14:00",
    end: "14:45",
    hall: "goldman",
    sessionType: "Full Talk",
    title: "Powering Netflix’s Multimodal Feature Engineering at Scale",
    speakers: [
      {
        name: "Jack Ye",
        title: "Software Engineer",
        company: "LanceDB",
        linkedin: "https://www.linkedin.com/in/yezhaoqin/",
        avatarUrl: "/speakers/Jack-Ye.jpeg",
        bio: "Jack Ye is an open source software engineer at LanceDB. He is Apache Iceberg, Apache Polaris and Lance PMC Member. Before LanceDB, he was formerly tech lead for AWS SageMaker Lakehouse, EMR, Athena and S3 Tables.",
      },
      {
        name: "Pablo Delgado",
        title: "Machine Learning Engineer",
        company: "Netflix",
        linkedin: "https://www.linkedin.com/in/pabloadelgado/",
        avatarUrl: "/speakers/Pablo-Delgado.jpeg",
        bio: "Pablo Delgado is a Machine Learning Engineer currently working at Netflix. He focuses on the data infrastructure to create large multimodal datasets for Studio and Content Promotion and Production. Previously he worked also at Netflix optimizing performance for training and inference within the Machine Learning Platform at Netflix, which powers personalized recommendation algorithms and content/media production. Prior to that, he contributed to the recommendation systems stack at OpenTable, focusing on personalized restaurant recommendations. Pablo holds a degree in Mathematics and Computer Science from University College London, where he specialized in graph-based methods for collaborative filtering.",
      },
    ],
    abstract:
      "As multimodal models mature, the challenge increasingly shifts from model architecture to feature engineering and dataset construction at scale. In this talk, we’ll share how Netflix builds and curates multimodal features across large video and image corpora, with LanceDB serving as the core storage and query layer for multimodal data.\n\nWe’ll briefly cover how Ray powers distributed ingestion, filtering, and large-scale batch inference across hundreds of GPUs, enabling the application of modern vision-language models to extract rich multimodal embeddings from video and image data. These embeddings capture both low-level visual signals and higher-level semantic context, forming the foundation for downstream tasks such as search, retrieval, and dataset curation.\n\nWe’ll examine how multimodal feature extraction enables semantic search, filtering, and exploration over large video collections, supporting queries expressed as natural language, images, or combinations of both. We’ll discuss how extracted features encode attributes such as scene composition, lighting, mood, and subject matter, enabling practical use cases like content filtering and targeted dataset selection in addition to semantic retrieval.\n\nFinally, we’ll dive into how LanceDB's multimodal lakehouse serves as the high-performance storage and query layer for these features, enabling sub-second search over hundreds of terabytes of data, along with efficient sampling and diversity-aware dataset refinement across the data curation lifecycle. Built on the Lance columnar file format, this architecture is optimized for storing and querying large-scale multimodal embeddings and metadata efficiently. By treating multimodal features as first-class data assets, LanceDB enables scalable retrieval, dataset analysis, and production workflows that support continuous improvement of high-quality training data for text-to-image and video-to-text research.",
  },
  {
    id: "s10",
    start: "15:00",
    end: "15:45",
    hall: "yud",
    sessionType: "Full Talk",
    title:
      "Breaking Down Data Silos: Building Federated Knowledge Infrastructure for Enterprise Agentic AI",
    speakers: [
      {
        name: "Dinesh Thangaraju",
        title: "Head of AWS Data Platform",
        company: "Amazon Web Services",
        linkedin: "https://www.linkedin.com/in/dthangar/",
        avatarUrl: "/speakers/Dinesh-Thangaraju.jpeg",
        bio: "Dinesh Thangaraju, Head of AWS Data Platform | Amazon Web Services\nDinesh Thangaraju is a technology leader and Certified Chief Data Officer with over 15 years of experience building enterprise-scale software and data platforms. As Head of AWS Data Platform, he leads a globally distributed engineering organization empowering 300+ AWS teams across 10+ countries with scalable, secure data and analytics solutions that enable data-driven decision making.\n\nDinesh has driven transformations that eliminated data silos, delivered tens of millions in annual cost savings, and enabled 4X platform adoption growth. His leadership supports AWS's $100B+ annual revenue operations through advanced data lake architecture, business intelligence platforms, and operational analytics at petabyte scale, powering data-driven insights and supporting generative AI use cases across the enterprise. He created a unified system that ensures all AWS teams use the same definitions for critical business metrics like Revenue, eliminating confusion and ensuring everyone is working with consistent, accurate data through a balance of team autonomy and central oversight.\n\nDinesh holds an MS in Computer Science specialized in Data Management and certification on Advanced Databases & Knowledge Discovery from The University of North Carolina at Charlotte. He completed executive education at Stanford Graduate School of Business and earned his Chief Data Officer Executive Certificate from Carnegie Mellon University. As a principal inventor, he holds two US patents in scalable permissions management and data governance frameworks, and has authored multiple independent research papers on enterprise data management and analytics.",
      },
    ],
    abstract:
      "As organizations race to deploy AI agents across their enterprises, they're encountering a critical bottleneck: fragmented knowledge bases and siloed agent capabilities that prevent comprehensive, cross-domain insights. This presentation explores how to address this challenge through a federated approach to enterprise agentic AI infrastructure. This session examines three fundamental challenges facing enterprise AI adoption:\n\nThe Knowledge Fragmentation Problem: Organizations are independently building knowledge bases for specific use cases, leading to duplicated effort, inconsistent data parsing strategies, and context drift as source documents evolve. Each team creates their own chunking, embedding, and retrieval mechanisms without a unified architecture-resulting in AI agents that cannot access cross-functional domain knowledge or maintain accuracy at scale.\n\nThe Agent Collaboration Gap: Today's AI agents operate in isolation within their domains. When business leaders ask complex questions spanning customers, pricing, services, and operations, they receive fragmented answers requiring manual synthesis. Without standardized agent-to-agent communication mechanisms, authentication frameworks, or centralized agent registries, organizations cannot deliver the holistic insights that drive strategic decision-making.\n\nThe Governance and Innovation Paradox: Enterprises need to enable rapid experimentation while maintaining security, compliance, and user experience standards. Traditional centralized approaches stifle innovation; purely decentralized approaches create chaos. The challenge is building federated frameworks that guide discovery, assessment, incubation, and graduation of AI solutions without creating bottlenecks.\n\nThis presentation introduces a three-pillar architecture for enterprise agentic AI:\nUnified Federated Knowledge Base: A bottom-up approach where domain teams create specialized knowledge bases that integrate into an organization-wide ecosystem through standardized ingestion pipelines, interfaces for vector databases and knowledge graphs, and evaluation frameworks for accuracy and relevance.\nCross-Domain Agent Collaboration: Technical mechanisms enabling AI agents to discover, authenticate, and communicate with each other-transforming isolated data points into comprehensive business intelligence that spans organizational boundaries.\nFederated Innovation Framework: Secure sandbox environments with structured governance models that accelerate development time by 50% while maintaining enterprise standards for security and user experience.",
  },
  {
    id: "s11",
    start: "14:00",
    end: "14:45",
    hall: "swig",
    sessionType: "Full Talk",
    title: "Orchestrating LLM Inference with Apache Airflow",
    speakers: [
      {
        name: "Volker Janz",
        title: "Senior Developer Advocate",
        company: "Astronomer",
        linkedin: "https://www.linkedin.com/in/vjanz/",
        avatarUrl: "/speakers/Volker-janz.jpg",
        bio: "Volker is a Senior Developer Advocate at Astronomer with 15 years of experience architecting data platforms. Previously in the gaming industry, he built systems processing billions of daily events using Apache Airflow.\n\nNow, he leverages this expertise to define modern DataOps best practices and empower the global data community. As a regular speaker at international conferences, Volker blends deep technical knowledge with a passion for communication and knowledge sharing.",
      },
    ],
    abstract:
      "Imagine a brilliant chef whose kitchen collapses during the dinner rush because no one prepped the ingredients. Production AI fails the exact same way. Your LLM might be state-of-the-art, but if an agentic pipeline fails silently or an API timeout lacks retry logic, the entire system falls apart.\n\nToday, almost everyone has access to the exact same foundational models. Because of this, real competitive differentiation no longer comes from the model itself, it comes from the operational layer. The ability to orchestrate multiple LLM-inference tasks, or agents, recover from brittle failures, maintain context, and wire in human judgment is what makes the difference. In a high-pressure kitchen, this readiness is called Mise en Place: everything prepared and organized before the rush.\n\nThis session shows how Apache Airflow provides that operational layer for complex AI workflows. Using the TaskFlow API and the open-source Airflow AI SDK, I'll demonstrate how to turn agentic AI components into first-class pipeline tasks with @task.llm, @task.agent, and @task.llm_branch decorators. We'll wire in asynchronous human review steps using Airflow 3.1's new family of Human-in-the-Loop operators, all based on the HITLOperator base class. I'll show how to use these operators to pause pipelines, allowing domain experts to approve AI outputs, input form data, or route agent logic directly via the Airflow UI or REST API. We will also trigger pipelines via message queue events using the Asset and AssetWatcher components.\n\nWe'll walk through actual code examples, showing recipes to orchestrate multi-agent AI pipelines and AI-driven pipeline branching. Because the open-source Airflow AI SDK is built on top of PydanticAI, it automatically supports any LLM that PydanticAI supports, allowing you to easily swap models. Furthermore, because core PydanticAI features are exposed directly in Airflow, we get robust structured outputs out of the box and can even perform advanced multi-modal tasks like image analysis right inside the pipeline. With this, we move well beyond orchestration as a tool for simply moving data from A to B.\n\nBecause the best kitchens learn from every service, improve with every decision, and never let the rush catch them unprepared. Apache Airflow is that kitchen for your AI stack: a single, unified control plane where data pipelines, AI agents, and human judgment come together in one observable, production-grade system.",
  },
  {
    id: "s12",
    start: "14:00",
    end: "14:45",
    hall: "yud",
    sessionType: "Lightning Talk",
    title:
      "Data Lineage in 2026: From Compliance Checkbox to Critical Platform Investment",
    speakers: [
      {
        name: "Dan Shetty",
        title: "Product Manager",
        company: "Spotify",
        linkedin: "https://www.linkedin.com/in/danshetty/",
        avatarUrl: "/speakers/Dhanush-Shetty.png",
        bio: "Proven Product Leader in Data Platforms & ML/AI Infrastructure with 6+ years of experience driving large-scale AI platform strategy, data governance, and developer productivity across enterprise-scale organizations.",
      },
    ],
    abstract:
      "Data lineage is too often treated as a compliance checkbox-until it quietly drives downtime, regulatory risk, cloud waste, and AI mistrust. This session reframes lineage as a core data-platform investment, grounded in production outcomes from Spotify, operating at 600M+ users.\n\nFour High-Impact Use Cases:\n1. Incident Readiness & Reliability\nDuring a major product launch, lineage identified 47 impacted dashboards and ML models in minutes instead of hours, cutting MTTR by 65%. Without lineage, engineers lacked visibility and could not assess or communicate blast radius during incidents.\n2. Regulatory Compliance (GDPR)\nGDPR \"right to be forgotten\" requests once took weeks to audit across hundreds of tables and models. Lineage-driven automation reduced response time to 48 hours with full coverage, eliminating compliance risk and potential multi-million-dollar fines.\n3. Cost Optimization\nBy mapping lineage to cloud spend, we uncovered that 23% of pipelines fed unused or low-value assets-over $2M annually. Lineage became a decision engine for deprecation, optimization, and spend prioritization.\n4. AI Readiness & Model Trust\nAt scale, model trust depends on training data provenance. Lineage powers reproducibility, model cards, and rapid debugging-foundational for responsible and reliable ML systems.\n\nImplementation at Scale\nI'll walk through concrete patterns for capturing and unifying lineage across Spark, Iceberg, dbt, MLflow, Ray, and PyTorch-connecting strategy to execution with real incident postmortems, cost dashboards, and production lessons from one of the world's largest streaming platforms.",
  },
  {
    id: "s14",
    start: "14:00",
    end: "14:45",
    hall: "yud",
    sessionType: "Lightning Talk",
    title:
      "Lessons from building a data observability product with OpenLineage",
    speakers: [
      {
        name: "Harel Shein",
        title: "Senior Engineering Manager",
        company: "Datadog",
        linkedin: "https://www.linkedin.com/in/harelshein/",
        avatarUrl: "/speakers/Harel-Shein.jpeg",
        bio: "Harel Shein is a Senior Engineering Manager at Datadog, a leading observability and security SaaS platform. He works on Data Observability and is a TSC member and committer of OpenLineage. Prior to working at Datadog, he held product engineering leadership positions at Astronomer and data engineering leadership at WeWork.",
      },
    ],
    abstract:
      "We describe practical lessons from building Datadog's Data Observability product on top of the OpenLineage standard. The architecture transforms single OpenLineage events into multiple downstream products: lineage graph nodes/edges, time-series metrics, logs/spans, and data quality events-maximizing value from sparse telemetry.",
  },
  {
    id: "s15",
    start: "10:30",
    end: "11:15",
    hall: "swig",
    sessionType: "Full Talk",
    title: "Apache Spark: Structured Streaming Real-Time Mode",
    speakers: [
      {
        name: "Jerry Peng",
        title: "Staff Software Engineer",
        company: "Databricks",
        linkedin: "https://www.linkedin.com/in/boyang-jerry-peng/",
        avatarUrl: "/speakers/jerrypeng.jpeg",
        bio: "Boyang Jerry Peng is currently a Staff Engineer at Databricks extensively working Apache Spark Structured Streaming. Before joining Databricks, he was a Principal Software Engineer at Splunk working on streaming and messaging projects especially with Apache Pulsar. Jerry is a committer and PMC member of Apache Pulsar, Apache Storm, and Apache Heron projects. Before Splunk, he worked at Streamlio (acquired by Splunk), Citadel, and Yahoo on distributed systems and stream processing. Jerry has been working in the area of distributed systems and stream processing since his days in grad school at the University of Illinois, Urbana-Champaign.",
      },
    ],
    abstract:
      "Apache Spark Structured Streaming is a distributed stream processing engine built on Spark SQL and is widely used for ETL-style workloads, where seconds- to minutes-level latency is acceptable. But millisecond-latency use cases have historically been out of reach. Real-time Mode (RTM) introduces a new low-latency processing capability to Structured Streaming, enabling millisecond-latency processing and allowing Spark to power these workloads as well. This helps organizations consolidate their data platform: instead of using Spark for batch/ETL and a separate system for low-latency streaming, they can now use Spark across workloads with different latency requirements. In this talk, we'll explain how Real-time Mode works, share insights into how we extended the Structured Streaming architecture to enable low-latency processing, and highlight how users are using it.",
  },
  {
    id: "s16",
    start: "15:00",
    end: "15:45",
    hall: "swig",
    sessionType: "Full Talk",
    title:
      "From Repetition to Reuse: The Evolution of Apache Spark Declarative Pipelines",
    speakers: [
      {
        name: "Andreas Neumann",
        title: "Senior Staff Software Engineer",
        company: "Databricks",
        linkedin: "https://www.linkedin.com/in/anew-/",
        avatarUrl: "/speakers/Andreas-Neumann.jpg",
        bio: 'With a career defined by "massive scale", Andreas Neumann currently serves as the Technical Lead for Declarative Pipelines at Databricks. From his early work at IBM and Yahoo! to his time at Google and his journey as the co-founder of Cask Data, Andreas has spent decades solving the data industry\'s toughest architectural puzzles. Beyond his corporate leadership, he is a dedicated advocate for open-source software, having shepherded several Apache projects from incubation to maturity. Andreas holds a PhD in Computer Science for his research in document parsing and query techniques.',
      },
    ],
    abstract:
      "Learn how to build batch and streaming pipelines faster while improving correctness and reducing operational complexity with Apache Spark Declarative Pipelines. Production Spark pipelines often require extensive orchestration code for dependency management, checkpointing, retries, and execution ordering-surrounding a relatively small amount of transformation logic. As pipelines scale, this scaffolding becomes increasingly difficult to maintain and evolve. Introduced in Spark 4.1, Spark Declarative Pipelines (SDP) shifts this model by allowing developers to declare datasets and transformations while Spark constructs and manages the execution plan. By separating what a pipeline does from how it runs, SDP reduces boilerplate and accelerates time to production.",
  },
  {
    id: "s19",
    start: "16:00",
    end: "16:45",
    hall: "goldman",
    spansAllHalls: true,
    sessionType: "Keynote",
    title: "Frontiers of Data: The Future of Data Engineering in an AI World",
    speakers: [
      {
        name: "Paul Ellwood",
        title: "Head of Data Engineering",
        company: "OpenAI",
        linkedin: "https://www.linkedin.com/in/pellwood/",
        avatarUrl: "/speakers/Paul-Ellwood.jpeg",
        bio: "Paul Ellwood is Head of Data Engineering at OpenAI, where he leads the development of data systems that support research, product, and business decision-making at scale. Previously, he was Senior Director of Data Strategy at Airbnb and Vice President of Data Engineering & Infrastructure at Netflix, where he led large-scale data platforms and helped establish self-serve, data-driven cultures. He brings deep experience in data engineering, analytics, and data governance across complex, high-growth environments.",
      },
      {
        name: "Vikram Koka",
        title: "Chief Strategy Officer & Apache Airflow PMC",
        company: "Astronomer",
        linkedin: "https://www.linkedin.com/in/vikramkoka/",
        avatarUrl: "/speakers/Vikram-Koka.jpg",
        bio: "Vikram Koka is Chief Strategy Officer at Astronomer and a member of the Apache Airflow PMC, with a deep passion for data engineering and open-source orchestration. He has been a key contributor to Airflow since 2019, helping lead its evolution from a data orchestration platform into ML and now AI workloads, a journey reflected in both his architectural contributions and the platform's growing community of data, ML, and AI engineers. His design contributions span Airflow's entire modern history: Scheduler High Availability in Airflow 2.0, Data-Driven Scheduling, Dynamic Tasks, Setup/Teardown, and the program management of Airflow 3, the largest release in Airflow's history. He is currently leading Airflow's evolution into AI-native orchestration, introducing Human-in-the-Loop capabilities that allow AI pipelines to incorporate human judgment natively and enabling Airflow's vast connector ecosystem to be leveraged by Agentic workloads. Vikram's open-source roots trace back to his early work on the GNU Debugger (GDB), where he co-developed its remote debugging capabilities. With patents in distributed computing and cryptography, he brings a strong technical foundation alongside extensive experience leading globally distributed engineering and cross-functional teams spanning R&D, UX, product, services, and business development.",
      },
      {
        name: "Laura Pruitt",
        title: "Senior Director, Data Science & Engineering",
        company: "Netflix",
        linkedin: "https://www.linkedin.com/in/lpruitt/",
        avatarUrl: "/speakers/Laura-Pruitt.jpeg",
        bio: "Laura Pruitt is the Senior Director of Technology Data Science & Engineering at Netflix, a team operating at the intersection of data and technology. This organization provides data expertise to Netflix’s technical investments across Infrastructure, Streaming, Security, Privacy and Customer Service. Their experimentation, modeling, analytic tools and data foundations help ensure Netflix works seamlessly for members and effectively for the business. Her current focus includes measuring and improving data health across Netflix, which is a unique challenge in a culture of freedom and responsibility.",
      },
    ],
    moderator: {
      name: "Michelle Ufford",
      title: "Distinguished Architect, Data & AI",
      company: "",
      linkedin: "http://linkedin.com/in/mufford",
      avatarUrl: "/speakers/Michelle-Winters.jpeg",
      bio: 'Michelle Winters is a lifelong data nerd, data leader, data builder, and unapologetic champion of all things data. For 30 years, she has worked across nearly every layer of the data lifecycle-building data platforms, leading data teams, architecting data systems, scaling data organizations, and occasionally explaining what "modern data stack" means to non-data people.\n\nShe has been a data engineer, a data executive, a data startup founder, and a contributor to data OSS. She has written data books, data blogs, and more data documentation than she cares to admit. She has received industry awards for her work in the data community-largely, one suspects, for saying "data" more times per minute than generally advisable.\n\nMichelle believes the only thing better than good data is more data about data. When she\'s not building data teams or designing data platforms, she\'s probably writing a Python script to count how many times she said "data" in her bio. (It\'s.. a lot.)\n\nShe\'s wildly excited about the future of data and can\'t wait to talk data with as many fellow data nerds as possible at DEOF.',
    },
    abstract:
      "Data has never been more important to the enterprise—or more visible. As intelligent agents reshape how we create, move, and trust information, the boundaries of data engineering are shifting fast. This breakout brings together industry luminaries for a candid, forward-looking conversation about the craft's next chapter: from human dashboards to autonomous workflows, from schemas to semantics, from pipelines to products.\n\nWe'll dig into:\n\n- **The evolution of the data engineer:** from moving bytes to governing meaning\n\n- **Semantic contracts and accountability:** where responsibility lives when meaning gets lost in translation\n\n- **Open knowledge vs. black boxes:** the future of standards in an AI-first ecosystem\n\n- **The 24-month pivot:** the single skill to bet on as SQL and ETL automate away\n\n- **Language wars:** the best specs for aligning data teams with business partners and intelligent assistants\n\n- **Trustworthy AI systems:** the role data engineers play in ensuring AI remains reliable, grounded in truth, and aligned to the wellbeing of humanity\n\nIf you're building with data—or building your career on it—this session will cut through the hype and offer practical, inspiring guidance on how to stay relevant, resilient, and impactful in the era of self-managing systems.",
  },
  {
    id: "s21",
    start: "16:45",
    end: "17:00",
    hall: "goldman",
    spansAllHalls: true,
    sessionType: "None",
    title: "Closing Remarks",
    speakers: [],
    abstract: "Closing remarks.",
  },
  {
    id: "s18",
    start: "11:30",
    end: "12:15",
    hall: "yud",
    sessionType: "Lightning Talk",
    title: "From Idea to Production: E2E Traceability for ML Innovation",
    speakers: [
      {
        name: "Booker Gong",
        title: "Senior Staff Data Engineer",
        company: "Meta",
        linkedin: "https://www.linkedin.com/in/booker-g-a52baa154/",
        avatarUrl: "/speakers/Booker-Gong.jpeg",
        bio: "Booker Gong is a Senior Staff Data Engineer at Meta specializing in ML ecosystems insights with over 10 years of experience. Booker currently lives in the Bay Area and enjoys traveling, swimming, reading and game design outside work. Booker studied Electrical Engineering in Columbia University and Physics in Peking University.",
      },
    ],
    abstract:
      'In modern machine learning ecosystems, innovation happens at a staggering pace-new model architectures, training optimizations, feature engineering techniques, and serving improvements emerge continuously from research labs and engineering teams alike. But as organizations scale to thousands of prediction use cases serving billions of users, a fundamental question becomes increasingly difficult to answer: How do innovations actually flow through ML ecosystems, and what value do they create?\n\nThe technical challenges are substantial: innovations are abstract concepts that embody in code, configurations, and processes with varying footprints; models spanning across large heterogeneous ecosystems iterated through multiple frameworks and pipelines; and "existence" of a technique sometimes must be inferred as it is impossible to be explicitly logged.\n\nOur solution combines static analysis, agent-based discovery, dependency resolution, and ML artifact graph to bridge the gap between ML research and production value realization, by building a central innovation platform including many parts: a centralized registry that transforms scattered innovations into a discoverable, governable catalog with rich metadata; a lineage foundation that automatically extracts technique representations across model development process; a recommender that help innovation propagation faster across ML use cases; and an attribution engine that provides unprecedented visibility into the innovation-to-impact lifecycle.',
  },
  {
    id: "s20",
    start: "15:00",
    end: "15:45",
    hall: "goldman",
    sessionType: "Full Talk",
    title: "Inside OpenAI’s Internal AI Data Agent",
    speakers: [
      {
        name: "Bonnie Xu",
        title: "Staff Software Engineer",
        company: "OpenAI",
        linkedin: "https://www.linkedin.com/in/xubonnie/",
        avatarUrl: "/speakers/Bonnie-Xu.png",
        bio: "Bonnie Xu is a software engineer and the tech lead of the Data Productivity team at OpenAI, where she built an AI-powered data tool from the ground up to help teams explore and understand data more intelligently. Before joining OpenAI, she spent four years at Stripe working on Data Platform and previously held engineering roles at Meta and Google. Her work focuses on building scalable systems that bring AI and data together to make analysis faster and more accessible.",
      },
    ],
    abstract:
      "OpenAI's internal data platform spans tens of thousands of tables and hundreds of petabytes of data. It’s powerful, but navigating it without deep institutional knowledge is hard. Our data agent lets employees go from question to insight in minutes, not days. This lowers the bar for pulling data and nuanced analysis across all functions, not just for our data team. In this talk, we’ll share how we built an AI data agent that explores and reasons over our platform.\n\nWe’ll first unpack the core architecture behind our agent and the multiple layers of context it uses to answer questions. We’ll then show why each layer matters, how each one shapes the final response, and how we keep them updated with minimal manual intervention. Additionally, we'll cover the evaluation framework we use to maintain consistently high response quality and how tools like Codex helped us accelerate the agent's development.\n\nFinally, we’ll dive into how we expanded adoption across the company and the tips and tricks we learned for deeply integrating this tool into users' workflows.\n\nAttendees will walk away with practical patterns for building data-aware AI agents, deploying retrieval-augmented systems in complex data environments, and driving sustained adoption of AI-assisted analytics.",
  },
];

export const hallOrder: HallId[] = ["goldman", "swig", "yud"];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const sessionSlugMap = (() => {
  const map = new Map<string, Session>();
  const slugCount = new Map<string, number>();

  for (const session of sessions) {
    const baseSlug = slugify(session.title) || session.id;
    const currentCount = slugCount.get(baseSlug) ?? 0;
    const nextCount = currentCount + 1;
    slugCount.set(baseSlug, nextCount);

    const slug = nextCount === 1 ? baseSlug : `${baseSlug}-${nextCount}`;
    map.set(slug, session);
  }

  return map;
})();

export const getSessionSlug = (session: Session) => {
  for (const [slug, value] of sessionSlugMap.entries()) {
    if (value === session) return slug;
    if (
      value.id === session.id &&
      value.title === session.title &&
      value.start === session.start &&
      value.end === session.end &&
      value.hall === session.hall
    ) {
      return slug;
    }
  }
  return slugify(session.title) || session.id;
};

export const getSessionBySlug = (slug: string) =>
  sessionSlugMap.get(slug) ?? null;

const formatTime = (value: string) => {
  const match = /^(\d{2}):(\d{2})$/.exec(value);
  if (!match) return value;

  const hours24 = Number.parseInt(match[1], 10);
  const minutes = match[2];
  const suffix = hours24 >= 12 ? "PM" : "AM";
  const hours12 = hours24 % 12 || 12;

  return `${hours12}:${minutes} ${suffix}`;
};

export const getSessionTimeRange = (session: Session) => {
  const matchingSlot = timeSlots.find(
    (slot) =>
      slot.key === session.start && slot.end === formatTime(session.end),
  );
  if (!matchingSlot) {
    return `${formatTime(session.start)} - ${formatTime(session.end)}`;
  }
  return `${matchingSlot.start} - ${matchingSlot.end}`;
};

export const getAllSessionSlugs = () => Array.from(sessionSlugMap.keys());
