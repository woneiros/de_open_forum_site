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
  sessionType: "Keynote" | "Panel" | "Full Talk" | "Lightning Talk" | "None";
  title: string;
  speakers: Speaker[];
  abstract: string;
}

export const halls: Record<HallId, { name: string; color: string; roomLabel: string }> = {
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
      "The past few years have brought a Cambrian explosion of new columnar formats, challenging the hegemony of Parquet: Lance, Fastlanes, Nimble, Vortex, AnyBlox, F3. Each promises optimizations for modern workloads. This proliferation introduces the risk of fragmenting the industry into competing standards. The question is whether established projects can adapt fast enough or whether fragmentation is inevitable.\n\nWe’re entering an AI-dominated era. While some argue that the main consumer of data will become AI and not humans, much of our data infrastructure was designed for a very different time before vector embeddings, GPU-optimized memory layouts, and multi-modal training datasets became primary concerns. The premise of these new formats is that the context has changed so much that the design of the previous decade is not going to cut it moving forward.\n\nWhile these new formats incorporate genuine innovation in encoding techniques, enabling more parallel decoding and random access, this framing overlooks what made the original successful in the first place. The main contribution of Parquet has been to provide a standard for columnar storage. It should not simply be viewed for its technical contributions as formats. Rather, as an open source project hosted by the ASF, Parquet acts as a consensus-building machine for the industry, aligning vendors, cloud providers, and open source projects around shared standards. This ecosystem cohesion has delivered immense value: seamless data exchange, reduced integration costs, and accelerated innovation built on stable foundations.\n\nThe real opportunity is not in choosing between old and new, but in leveraging the communities of these established projects to absorb innovations while maintaining interoperability. In this keynote, we'll examine what’s driving these new requirements and how we can evolve the columnar ecosystem to meet AI-era demands without fragmenting into incompatible silos.",
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
        bio: "Himanshi Manglunia is a Senior Data Engineer at Amazon Web Services, specializing in marketing measurement and attribution systems. With nearly a decade of experience in data engineering and analytics, she brings deep expertise in designing and building large-scale data pipelines that power critical business decisions.\n\nHimanshi holds a Bachelor's degree in Information Technology and a Master's degree in Data Analytics. At AWS Marketing, she leads the technical development of backend data infrastructure which supports the marketing investment portfolio, including decision-support tools used by senior leadership for goal-setting and resource allocation.\n\nHer technical contributions span end-to-end pipeline development, data architecture design, and cross-functional enablement. She has driven significant process improvements through automation and workflow optimization. Himanshi is the go-to technical advisor for science, economist, and business intelligence teams, establishing office hours, comprehensive documentation, and change management frameworks that have improved cross-team collaboration.\n\nBeyond her individual contributions, Himanshi is committed to developing engineering talent through mentorship and knowledge sharing. She has presented technical sessions to 50+ attendees and on-boarded multiple engineers to independence. Her work exemplifies the intersection of technical excellence, operational efficiency, and organizational impact.",
      },
    ],
    abstract:
      "Data engineers spend countless hours on repetitive ETL enhancements-adding columns, updating transformations, fixing schema mismatches. What if GenAI agents could autonomously handle these changes from start to finish, including detecting and fixing their own errors?\n\nThis talk presents a production implementation of an autonomous ETL automation system powered by Kiro and Claude AI. Through a live demonstration, attendees will see how AI agents can parse requirements from natural language, navigate complex codebases, generate production-ready SQL transformations, deploy to cloud infrastructure, and automatically recover from common failures-all without human intervention.\n\nWhat the attendees will see in the Demo: A complete end-to-end workflow where an AI agent reads a txt file requesting a new column, validates the source table schema exists, locates the correct ETL script among hundreds of files, modifies the SQL while preserving existing code patterns, deploys to S3, triggers an Apache Airflow DAG, detects a \"column not found\" error in CloudWatch logs, automatically applies a COALESCE fix with appropriate defaults, redeploys, retries execution, validates the data in Redshift, and creates a code review-all autonomously in under 10 minutes.\n\nTechnical Architecture:\n1. Layered Validation Strategy: Schema validation via cloud metadata catalogs (Glue) to verify table/column existence pre-deployment, followed by production DAG execution monitoring with exponential backoff, and data validation via Redshift queries post-deployment to confirm correct data population\n2. Intelligent Error Recovery: Pattern matching that classifies failures as auto-fixable (column not found, type mismatches, missing partitions) vs. manual intervention required (table not found, permission errors, resource exhaustion), then automatically applies fixes and retries up to 3 times\n3. Context-Aware Code Generation: Claude models analyze existing codebase patterns to generate SQL that matches team conventions-preserving indentation, naming patterns, and transformation styles for seamless integration\n4. Conditional Progression Gates: Code reviews are only created after successful DAG execution and data validation, ensuring all changes are production-validated before human review\n\nKey Innovation:\nThe system doesn't just generate code-it validates changes in production, learns from failures, and iteratively refines until success. This \"deploy-test-fix-retry\" loop handles approximately 80% of common ETL errors automatically, reducing manual intervention from hours to minutes.\n\nProduction Deployment Insights:\nThe attendees will learn practical strategies for building trust in AI-generated code: comprehensive audit logging for every decision, fail-fast validation to catch issues early, clear boundaries between auto-fixable and manual-intervention errors, and integration with existing DevOps workflows (version control, code review, deployment pipelines).",
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
    title: "Data, Perspective, Action: Why Most Data Engineering Teams Fail at the 'Perspective' Part",
    speakers: [
      {
        name: "Goutham Budati",
        title: "VP, Data Strategy and Insights",
        company: "The Farmer's Dog",
        linkedin: "https://www.linkedin.com/in/gouthambudati/",
        avatarUrl: "/speakers/Goutham-Budati.jpeg",
        bio: "Goutham Budati is Vice President of Data Strategy and Insights at The Farmer's Dog, where he leads Consumer Research, Voice of the Customer, Data Science, Analytics, and Data Engineering teams. He specializes in building zero-to-one data teams and turning around data organizations that don't scale with business after a strong start, having done so three times across companies ranging from startups to Fortune 10 enterprises, which led him to develop the Data-Perspective-Action Framework.\n\nPreviously at Amazon, Goutham led Data Products and Experimentation, where he scaled experimentation frameworks across the organization. His work at Zocdoc and Oxford Road demonstrates his ability to transform data teams from technical support into strategic partners that bridge technical execution with business impact.\n\nBeyond his executive role, Goutham serves on the University of Maryland's MS in Marketing Analytics Advisory Council. He holds an MBA from University of Maryland Smith School of Business and a BE in Computer Science from Osmania University.",
      },
    ],
    abstract:
      "Data engineering teams excel at building pipelines and infrastructure (Data) and executing roadmaps (Action). But the middle layer, Perspective, is where most organizations fail. Without the right perspective on what problems to solve, which stakeholders to influence, and how to translate technical capability into business value, even the best data engineering teams become glorified order-takers.\n\nThis panel explores the Data-Perspective-Action Framework through the lens of organizational transformation. We'll discuss how shifting perspective, not just adding headcount or technology, is what separates high-impact data engineering organizations from those stuck in reactive mode.\n\nKey Discussion Topics:\nThe Perspective Gap:\n1. Why data teams build the \"right\" infrastructure but still can't influence decisions\n2. How perspective shapes everything: what you measure, who you hire, what technical debt you prioritize\n3. The hidden cost of misaligned perspectives between data engineering and business stakeholders\nFrom Data to Perspective:\n1. Moving beyond \"what happened\" to \"what should we do about it\"\n2. How observability, data quality, and architecture decisions reflect your organization's perspective (or lack of one)\n3. Building systems that surface insights vs. just serving data\nFrom Perspective to Action:\n1. How organizational design either enables or blocks the perspective -> action loop\n2. Why reporting structures determine whether your perspective matters\n3. Case studies: Transformations that drove $200M+ impact by fixing the perspective layer\nScaling the Framework:\n1. What changes when you scale from 5 to 50 to 500: Data stays similar, Perspective and Action break\n2. Building teams that maintain perspective as they grow\n3. Teaching perspective: Is it a skill you can hire for or must you build?\nWhy This Panel Matters:\nMost data engineering content focuses on the Data (tooling, architecture) or Action (execution, delivery). This panel tackles the least discussed but most critical layer: Perspective. It's what separates data engineering teams that transform businesses from those that just keep the lights on.\nFormat Flexibility:\nI'm flexible on format and happy to serve as moderator, panelist, or adapt this to a 30-minute talk if that better fits the program needs. I've also applied for the Program Committee and am committed to contributing to the conference's success in whatever capacity is most valuable.\nTarget Audience:\nData engineering leaders navigating organizational transformation, managers building strategic influence, and senior ICs who sense their team's technical excellence isn't translating to business impact\nSuggested Panelist Profile:\n1. Leaders who've transformed data organizations, not just maintained them\n2. People who can speak to both technical and organizational challenges\n3. Mix of scales: startup (finding perspective), scale-up (maintaining it), enterprise (institutionalizing it)",
  },
  {
    id: "s8",
    start: "11:30",
    end: "12:15",
    hall: "yud",
    sessionType: "Lightning Talk",
    title: "MinervaSQL - Lessons Building a Full-fledged SQL interface for a Semantic Layer",
    speakers: [
      {
        name: "Barak Alon",
        title: "Senior Staff Software Engineer",
        company: "Airbnb",
        linkedin: "https://www.linkedin.com/in/barakalon/",
        avatarUrl: "/speakers/barak-alon.jpeg",
        bio: "Barak is the technical lead of Airbnb's semantic layer and metric platform, Minerva, and a core contributor to the SQLGlot open source project. To the bewilderment of his family and friends, Barak is passionate about building elegant data infrastructure. Barak is the technical lead of Airbnb’s semantic layer and metric platform, Minerva, and a core contributor to the SQLGlot open source project. To the bewilderment of his family and friends, Barak is passionate about building elegant data infrastructure.",
      },
    ],
    abstract:
      "Minerva is Airbnb's semantic layer and metric platform. With 1000s of users and 40,000 metrics, Minerva powers analytics and experimentation across the entire company.\n\nA couple years ago, we took the treacherous path and decided to build a full-fledged SQL interface for Minerva, called \"MinervaSQL\". This has enabled a new level of exploratory power for our users, but it comes with some complex challenges.\n\nThis talk covers some of MinervaSQL's unique features, along with their tradeoffs, including:\n1. Virtualized one-big-table for the entire semantic layer\n2. Materialized view selection and automatic rewriting\n3. Passthrough and interoperability with the broader data lake",
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
        bio: "Bio coming soon.",
      },
    ],
    abstract: "Abstract coming soon.",
  },
  {
    id: "s10",
    start: "15:00",
    end: "15:45",
    hall: "goldman",
    sessionType: "Full Talk",
    title: "Breaking Down Data Silos: Building Federated Knowledge Infrastructure for Enterprise Agentic AI",
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
    start: "15:00",
    end: "15:45",
    hall: "swig",
    sessionType: "Full Talk",
    title: "Orchestrating LLM Inference with Apache Airflow",
    speakers: [
      {
        name: "Volker Janz",
        title: "Senior Developer Advocate",
        company: "Astronomer",
        linkedin: "https://www.linkedin.com/in/vjanz/",
        avatarUrl: "/speakers/Volker-janz.png",
        bio: "Bio coming soon.",
      },
    ],
    abstract: "Abstract coming soon.",
  },
  {
    id: "s12",
    start: "14:00",
    end: "14:45",
    hall: "yud",
    sessionType: "Lightning Talk",
    title: "Data Lineage in 2026: From Compliance Checkbox to Critical Platform Investment",
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
    title: "Lessons from building a data observability product with OpenLineage",
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
        bio: "To be added",
      },
    ],
    abstract: "To be added",
  },
  {
    id: "s16",
    start: "14:00",
    end: "14:45",
    hall: "swig",
    sessionType: "Full Talk",
    title: "Apache Spark: Declarative Pipelines",
    speakers: [
      {
        name: "Sandy Ryza",
        title: "Software Engineer",
        company: "Databricks",
        linkedin: "https://www.linkedin.com/in/sandyryza/",
        avatarUrl: "/speakers/sandyryza.jpeg",
        bio: "To be added",
      },
    ],
    abstract: "To be added",
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
    if (value.id === session.id) return slug;
  }
  return slugify(session.title) || session.id;
};

export const getSessionBySlug = (slug: string) => sessionSlugMap.get(slug) ?? null;

export const getSessionTimeRange = (session: Session) => {
  const matchingSlot = timeSlots.find((slot) => slot.key === session.start);
  if (!matchingSlot) {
    return `${session.start} - ${session.end}`;
  }
  return `${matchingSlot.start} - ${matchingSlot.end}`;
};

export const getAllSessionSlugs = () => Array.from(sessionSlugMap.keys());
