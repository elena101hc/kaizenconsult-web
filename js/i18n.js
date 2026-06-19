(function () {
  const STORAGE_KEY = 'kaizen-lang';
  const DEFAULT_LANG = 'en';

  const translations = {
    en: {
      'meta.index.title': 'KAIzen Consult — Redirecting...',
      'meta.index.redirect': 'Redirecting to',
      'meta.home.title': 'KAIzen Consult — Custom AI Agents for SMBs | Processes + AI + Agile Execution',
      'meta.home.description': 'Custom AI agents for SMBs. Optimized processes, operational efficiency, 24/7 scalability. From idea to production in days. RAG, n8n, Kaizen methodology.',
      'meta.solutions.title': 'Solutions — KAIzen Consult | AI Agents, Automation & Consulting',
      'meta.solutions.description': 'Service details: sales and support AI agents, process automation, reengineering and innovation, voice agents, and training. Projects with measurable ROI.',

      'nav.solutions': 'Solutions',
      'nav.process': 'Process',
      'nav.home': 'Home',
      'nav.contact': 'Contact us',
      'nav.menu': 'Menu',
      'nav.lang': 'Language',

      'hero.badge': 'AI-powered automations · Processes · Innovation · Continuous Improvement',
      'hero.title': 'Cutting-edge automations powered by <span style="color:var(--lime)">AI</span>.',
      'hero.subtitle': 'We help your company stay at the forefront of AI-driven automations: sales, procurement, support, and innovation flows. Business experts with cutting-edge technology (n8n, integrations, RAG, LLMs). From manual processes to systems that scale and work 24/7.',
      'hero.cta1': 'Book a free assessment →',
      'hero.cta2': 'View solutions',
      'hero.stat1.label': 'years in B2B and industry',
      'hero.stat2.label': 'years in processes and reengineering',
      'hero.stat3.label': 'years of combined team experience',

      'badges.label': 'Technologies and integrations',

      'solutions.tag': 'Use cases',
      'solutions.title': 'Scalable AI systems, working 24/7. Executive digitalization focused on results.',
      'solutions.desc': 'Prospecting, outreach, customer support, process automation, reengineering and innovation, voice agents. Our value: we understand your business and build solutions that scale.',
      'solutions.cta': 'Ready to take the leap? →',

      'card.ventas.category': 'B2B Sales',
      'card.ventas.title': 'Prospecting & Outreach Agent',
      'card.ventas.desc': 'Manages the full pipeline: detects leads, researches prospects, drafts personalized outreach, and follows up. Autonomously.',
      'card.ventas.metric1': 'Lead→contact <2 min',
      'card.ventas.metric2': '↑ +40% pipeline',
      'card.ventas.result': '→ Full pipeline from lead to first contact in <2 minutes',
      'card.ventas.cta': 'Learn more and request info',

      'card.soporte.category': 'Customer Experience',
      'card.soporte.title': 'Customer Support Agent',
      'card.soporte.desc': 'Handles Tier 1 on WhatsApp, Slack, and channels linked to your CRM (n8n, OpenClaw). Resolves tickets in seconds, detects patterns, and proactively fixes root causes.',
      'card.soporte.result': '→ 78% auto-resolution · 38s average response',
      'card.soporte.cta': 'Learn more and request info',

      'card.automatizacion.category': 'Operations',
      'card.automatizacion.title': 'Process Automation',
      'card.automatizacion.desc': 'Eliminate bottlenecks. Intelligent document reading, data extraction, and flows that connect your systems without code.',
      'card.automatizacion.result': '→ Hours of manual work eliminated per week',
      'card.automatizacion.cta': 'Learn more and request info',

      'card.consultoria.category': 'Consulting',
      'card.consultoria.title': 'Reengineering & Innovation',
      'card.consultoria.desc': '30+ years in continuous improvement and reengineering in Automotive and DeepTech. The solid foundation every digital transformation needs.',
      'card.consultoria.result': '→ Optimized processes before automation',
      'card.consultoria.cta': 'Learn more and request info',

      'card.voz.category': 'Voice',
      'card.voz.title': 'Voice Agents & Callbots',
      'card.voz.desc': 'Voice assistants for bookings, payments, and phone support. Your switchboard powered by conversational AI. 24/7.',
      'card.voz.result': '→ Support without wait times · Multilingual',
      'card.voz.cta': 'Learn more and request info',

      'card.formacion.category': 'Training',
      'card.formacion.title': 'AI Training',
      'card.formacion.desc': 'Hands-on workshops on prompt engineering and adoption. Your team learns to leverage AI with business judgment.',
      'card.formacion.result': '→ 2 days/week saved on operational tasks',
      'card.formacion.cta': 'Learn more and request info',

      'features.tag': 'Why KAIzen Consult',
      'features.title': 'Execution speed. Processes first. Custom AI.',
      'features.1.title': 'From idea to working solution in days',
      'features.1.desc': 'Kaizen methodology and agile execution. No 6-month projects. We go from brief to production AI agent in days, not months.',
      'features.2.title': 'Processes before code',
      'features.2.desc': 'B2B flows, sales, procurement, operations. We map and optimize before deploying. AI amplifies well-designed processes.',
      'features.3.title': 'Custom AI, not generic',
      'features.3.desc': 'Agents configured for your use case. RAG on your documentation, integrations with your systems, built-in business logic.',

      'process.tag': 'How we work',
      'process.title': 'Kaizen approach: connect, configure, deploy.',
      'process.1.title': 'Connect',
      'process.1.desc': 'Process brief, B2B flows, and integrations. Free opportunity assessment.',
      'process.2.title': 'Configure',
      'process.2.desc': 'Process mapping, custom agent design, and technical stack (RAG, n8n, APIs).',
      'process.3.title': 'Deploy',
      'process.3.desc': 'Agile implementation. From idea to production agent in days. No DevOps, no large teams.',

      'proactive.title': 'Proactive by default',
      'proactive.desc': 'We detect problems before they escalate. We propose actions, not just alerts. Every recommendation translates into direct impact on your P&L.',
      'proactive.mockup.header': 'Live activity · Proactive',
      'proactive.mockup.user': 'Anything unusual in the pipeline this week?',
      'proactive.mockup.bot': '3 deals have been in "Qualified" for more than 10 days. I\'ve drafted follow-up emails for each and flagged the highest-value one (<strong>€42K</strong>) for your review.',

      'team.tag': 'Team',
      'team.title': 'One team. Complete experience.',
      'team.desc': 'Engineering, industry, and pragmatism at one table: not two separate profiles, but the same team bridging real processes with AI that scales.',
      'team.heading': 'We\'re not theorists. We\'re engineers who solve problems',
      'team.pill1': '+40 years of combined experience',
      'team.pill2': 'B2B · AI · Industrial processes',
      'team.pill3': 'One table, one ROI criterion',
      'team.p1': 'KAIzen Consult brings together two complementary paths: on one side, more than a decade in B2B sales, procurement, and headhunting, with engineering applied to AI automations — conversational agents, RAG, n8n, and intelligent workflows. On the other, more than three decades in industrial reengineering, continuous improvement, Lean, and innovation in automotive and industry: the solid foundation every transformation needs before automation.',
      'team.p2': 'Together we bring experience in sectors where mistakes cost money — automotive, manufacturing, logistics, and technology. We\'ve managed teams, negotiated contracts, optimized production lines, and transformed processes before AI was an option. Today we apply the same analytical, pragmatic mindset to AI implementation: we understand your business from the inside and take it to production with technical rigor.',

      'compliance.diff.title': 'Our differentiator',
      'compliance.diff.desc': 'We understand your business before proposing a solution. Because the best technology applied to the wrong problem is just another expense.',
      'compliance.eu.title': 'Regulatory compliance — EU AI Act',
      'compliance.eu.desc': 'Support so your AI systems comply with European regulation: certification, technical documentation, and regulatory training.',

      'testimonials.title': 'What scaling companies say',
      'testimonials.1.quote': '"Identified a bottleneck in our qualification process we hadn\'t seen. From idea to working automation in less than a week."',
      'testimonials.1.role': '— Sales Director',
      'testimonials.1.industry': 'B2B · Industry',
      'testimonials.2.quote': '"The support agent resolved 70% of recurring inquiries from day one. Our team could focus on complex cases."',
      'testimonials.2.role': '— CX Lead',
      'testimonials.2.industry': 'SaaS · Services',

      'contact.title': 'If your business is ready to take the leap, let\'s talk.',
      'contact.desc': 'Free assessment: we identify processes, flows, and custom AI opportunities for your operation.',
      'contact.title.short': 'Let\'s talk?',
      'contact.desc.short': 'Tell us about your project and we\'ll respond with a proposal in under 24 hours.',
      'form.name': 'Your name *',
      'form.email': 'Email *',
      'form.company': 'Company (optional)',
      'form.interest': 'What are you interested in?',
      'form.interest.service': 'Which service interests you?',
      'form.message.home': 'Tell us briefly about your situation...',
      'form.message.solutions': 'Briefly describe your project or need...',
      'form.submit': 'Send message →',
      'form.note': 'No commitment · We respond within 24 hours',
      'form.success': '✓ Message sent. We\'ll respond within 24 hours.',
      'form.subject.home': 'New contact from KAIzen Consult',
      'form.subject.solutions': 'Request from Solutions - KAIzen Consult',
      'form.opt.ventas': 'Sales Agent',
      'form.opt.soporte': 'Support Agent',
      'form.opt.automatizacion': 'Automation',
      'form.opt.voice': 'Voice Agents',
      'form.opt.consultoria': 'Consulting',
      'form.opt.formacion': 'Training',
      'form.opt.otro': 'Other',

      'footer.tagline': '© 2025 KAIzen Consult — AI Agents, Processes & Automation',

      'page.solutions.hero.title': 'Solutions that scale. Services with impact.',
      'page.solutions.hero.desc': 'In this order: Prospecting, Outreach, Customer Support, Process Automation, Reengineering & Innovation, Voice Agents, AI Training. Details for each service and project types. Measurable ROI from day one.',
      'page.solutions.projectTypes': 'Project types:',

      'detail.ventas.desc': 'An AI agent that works your sales pipeline autonomously: detects leads on your website or CRM, researches prospects, drafts personalized outreach, and follows up. Integrated with HubSpot, LinkedIn, Gmail, and your data sources.',
      'detail.ventas.li1': '24/7 inbound lead detection and qualification',
      'detail.ventas.li2': 'Outbound prospecting with real-time research',
      'detail.ventas.li3': 'Automated nurturing until first meeting',
      'detail.ventas.li4': 'Lead scoring and routing to sales with full brief',
      'detail.ventas.cta': 'Request information →',

      'detail.soporte.desc': 'Multichannel chatbots (web, WhatsApp, email) that resolve Tier 1 issues in seconds. RAG on your knowledge base, consistent responses, and scaling without expanding headcount. Detects patterns and proposes proactive fixes.',
      'detail.soporte.li1': 'Web chatbot with RAG on internal documentation',
      'detail.soporte.li2': 'WhatsApp Business integrated with CRM',
      'detail.soporte.li3': 'Automated email with classification and responses',
      'detail.soporte.li4': 'Escalation to human when the agent cannot resolve',

      'detail.automatizacion.desc': 'Eliminate bottlenecks and repetitive tasks. Intelligent document reading (OCR + AI), structured data extraction, flows connecting n8n, CRM, APIs, and your systems without writing code. Process first, technology second.',
      'detail.automatizacion.li1': 'Automatic invoice and document processing',
      'detail.automatizacion.li2': 'Data extraction from PDFs, emails, or forms',
      'detail.automatizacion.li3': 'Flows between CRM, ERP, and team tools',
      'detail.automatizacion.li4': 'Onboarding, approvals, and reporting automation',

      'detail.consultoria.desc': '30+ years in continuous improvement and reengineering in Automotive and DeepTech. The solid foundation every digital transformation needs. Before automating, we optimize: diagnosis, mapping, and flow design.',
      'detail.consultoria.li1': 'Diagnosis and mapping of current processes',
      'detail.consultoria.li2': 'Reengineering to reduce inefficiencies',
      'detail.consultoria.li3': 'Lean and continuous improvement',
      'detail.consultoria.li4': 'Preparation for automation (bottleneck identification)',

      'detail.voz.desc': 'Intelligent voice assistants for bookings, payments, information, and phone support. Real-time conversational AI. Your switchboard powered 24/7, multilingual, with no wait times.',
      'detail.voz.li1': 'Phone bookings (restaurants, clinics, services)',
      'detail.voz.li2': 'Payment and issue management by voice',
      'detail.voz.li3': 'Intelligent call routing',
      'detail.voz.li4': 'Hours, pricing, and availability information',

      'detail.formacion.desc': 'Hands-on workshops on prompt engineering, AI adoption, and change management. Your team learns to leverage AI with business judgment. Not theory: real cases, exercises, and ready-to-use tools.',
      'detail.formacion.li1': 'Prompt engineering for sales, support, or operations teams',
      'detail.formacion.li2': 'AI adoption in day-to-day work',
      'detail.formacion.li3': 'Custom workshops by department',
      'detail.formacion.li4': 'Change management for AI agent implementation',

      'tag.industrial': 'Industrial reengineering',
      'tag.automotive': 'Automotive',
      'tag.continuous': 'Continuous improvement',
      'tag.applied': 'Applied artificial intelligence',
      'tag.industry': 'Industry',
      'tag.bookings': 'Bookings',
      'tag.payments': 'Payments',
      'tag.multilingual': 'Multilingual'
    },

    es: {
      'meta.index.title': 'KAIzen Consult — Redirigiendo...',
      'meta.index.redirect': 'Redirigiendo a',
      'meta.home.title': 'KAIzen Consult — Agentes IA a Medida para Pymes | Procesos + IA + Ejecución Ágil',
      'meta.home.description': 'Agentes IA a medida para pymes. Procesos optimizados, eficiencia operativa, escalabilidad 24/7. De idea a producción en días. RAG, n8n, metodología Kaizen.',
      'meta.solutions.title': 'Soluciones — KAIzen Consult | Agentes IA, Automatización y Consultoría',
      'meta.solutions.description': 'Detalle de servicios: agentes IA de ventas y soporte, automatización de procesos, reingeniería e innovación, agentes de voz y formación. Proyectos con ROI medible.',

      'nav.solutions': 'Soluciones',
      'nav.process': 'Proceso',
      'nav.home': 'Inicio',
      'nav.contact': 'Contáctanos',
      'nav.menu': 'Menú',
      'nav.lang': 'Idioma',

      'hero.badge': 'Automatizaciones impulsadas por IA · Procesos · Innovación · Mejora Continua',
      'hero.title': 'Automatizaciones de vanguardia potenciadas por <span style="color:var(--lime)">IA</span>.',
      'hero.subtitle': 'Te acompañamos para que tu empresa esté a la última en automatizaciones gracias a la IA: flujos de ventas, compras, soporte, innovación. Expertos en negocio y tecnología de vanguardia (n8n, integraciones, RAGs, LLMs). De procesos manuales a sistemas que escalan y trabajan 24/7.',
      'hero.cta1': 'Agendar diagnóstico gratuito →',
      'hero.cta2': 'Ver soluciones',
      'hero.stat1.label': 'años en B2B e industria',
      'hero.stat2.label': 'años en procesos y reingeniería',
      'hero.stat3.label': 'años de experiencia combinada en el equipo',

      'badges.label': 'Tecnologías e integraciones',

      'solutions.tag': 'Casos de uso',
      'solutions.title': 'Sistemas de IA escalables, trabajando 24/7. Digitalización ejecutiva orientada a resultados.',
      'solutions.desc': 'Prospección, Outreach, Soporte al Cliente, Automatización de Procesos, Reingeniería e Innovación, Agentes de voz. Nuestro valor: Entendemos tu negocio y creamos Soluciones que escalan.',
      'solutions.cta': '¿Estás listo para dar el salto? →',

      'card.ventas.category': 'Ventas B2B',
      'card.ventas.title': 'Agente de Prospección y Outreach',
      'card.ventas.desc': 'Gestiona todo el pipeline: detecta leads, investiga prospectos, redacta outreach personalizado y hace seguimiento. Autónomamente.',
      'card.ventas.metric1': 'Lead→contacto <2 min',
      'card.ventas.metric2': '↑ +40% pipeline',
      'card.ventas.result': '→ Pipeline completo de lead a primer contacto en <2 minutos',
      'card.ventas.cta': 'Ver más y solicitar info',

      'card.soporte.category': 'Customer Experience',
      'card.soporte.title': 'Agente de Soporte al Cliente',
      'card.soporte.desc': 'Gestiona Tier 1 en WhatsApp, Slack y canales enlazados a tu CRM (n8n, OpenClaw). Resuelve tickets en segundos, detecta patrones y corrige causas raíz de forma proactiva.',
      'card.soporte.result': '→ 78% auto-resolución · 38s respuesta media',
      'card.soporte.cta': 'Ver más y solicitar info',

      'card.automatizacion.category': 'Operaciones',
      'card.automatizacion.title': 'Automatización de Procesos',
      'card.automatizacion.desc': 'Elimina cuellos de botella. Lectura inteligente de documentos, extracción de datos, flujos que conectan tus sistemas sin código.',
      'card.automatizacion.result': '→ Horas de trabajo manual eliminadas por semana',
      'card.automatizacion.cta': 'Ver más y solicitar info',

      'card.consultoria.category': 'Consultoría',
      'card.consultoria.title': 'Reingeniería e Innovación',
      'card.consultoria.desc': '+30 años en mejora continua y reingeniería en Automoción y DeepTech. La base sólida que toda transformación digital necesita.',
      'card.consultoria.result': '→ Procesos optimizados antes de automatizar',
      'card.consultoria.cta': 'Ver más y solicitar info',

      'card.voz.category': 'Voz',
      'card.voz.title': 'Agentes de Voz y Callbots',
      'card.voz.desc': 'Asistentes de voz para reservas, pagos y atención telefónica. Tu centralita potenciada con IA conversacional. 24/7.',
      'card.voz.result': '→ Atención sin esperas · Multiidioma',
      'card.voz.cta': 'Ver más y solicitar info',

      'card.formacion.category': 'Formación',
      'card.formacion.title': 'Capacitación en IA',
      'card.formacion.desc': 'Workshops prácticos de prompt engineering y adopción. Tu equipo aprende a aprovechar la IA con criterio de negocio.',
      'card.formacion.result': '→ 2 días/semana ahorrados en tareas operativas',
      'card.formacion.cta': 'Ver más y solicitar info',

      'features.tag': 'Por qué KAIzen Consult',
      'features.title': 'Velocidad de ejecución. Procesos primero. IA a medida.',
      'features.1.title': 'Idea a solución funcional en días',
      'features.1.desc': 'Metodología Kaizen y ejecución ágil. No proyectos de 6 meses. Pasamos de brief a agente IA en producción en días, no meses.',
      'features.2.title': 'Procesos antes que código',
      'features.2.desc': 'Flujos B2B, ventas, compras, operaciones. Mapeamos y optimizamos antes de desplegar. La IA amplifica procesos bien diseñados.',
      'features.3.title': 'IA a medida, no genérica',
      'features.3.desc': 'Agentes configurados para tu caso de uso. RAG sobre tu documentación, integraciones con tus sistemas, lógica de negocio incorporada.',

      'process.tag': 'Cómo trabajamos',
      'process.title': 'Enfoque Kaizen: conecta, configura, despliega.',
      'process.1.title': 'Conecta',
      'process.1.desc': 'Brief de procesos, flujos B2B e integraciones. Diagnóstico gratuito de oportunidades.',
      'process.2.title': 'Configura',
      'process.2.desc': 'Mapeo de procesos, diseño del agente a medida y stack técnico (RAG, n8n, APIs).',
      'process.3.title': 'Despliega',
      'process.3.desc': 'Implementación ágil. Idea a agente en producción en días. Sin DevOps, sin equipos grandes.',

      'proactive.title': 'Proactivos por defecto',
      'proactive.desc': 'Detectamos problemas antes de que escalen. Proponemos acciones, no solo alertas. Cada recomendación se traduce en impacto directo en tu P&L.',
      'proactive.mockup.header': 'Actividad en vivo · Proactivo',
      'proactive.mockup.user': '¿Algo raro en el pipeline esta semana?',
      'proactive.mockup.bot': '3 deals llevan más de 10 días en "Cualificado". He redactado emails de seguimiento para cada uno y marcado el de mayor valor (<strong>42K€</strong>) para tu revisión.',

      'team.tag': 'Equipo',
      'team.title': 'Un equipo. Experiencia completa.',
      'team.desc': 'Ingeniería, industria y pragmatismo en una sola mesa: no son dos perfiles sueltos, es el mismo equipo cruzando proceso real con IA que escala.',
      'team.heading': 'No somos teóricos. Somos ingenieros que resuelven problemas',
      'team.pill1': '+40 años de experiencia combinada',
      'team.pill2': 'B2B · IA · Procesos industriales',
      'team.pill3': 'Una sola mesa, un solo criterio de ROI',
      'team.p1': 'KAIzen Consult une dos trayectorias que se complementan: por un lado, más de una década en ventas, compras y headhunting B2B, con ingeniería aplicada a automatizaciones con IA — agentes conversacionales, RAG, n8n y workflows inteligentes. Por otro, más de tres décadas en reingeniería industrial, mejora continua, Lean e innovación en automoción e industria: la base sólida que toda transformación necesita antes de automatizar.',
      'team.p2': 'Juntos sumamos experiencia en sectores donde el error cuesta dinero — automoción, manufactura, logística y tecnología. Hemos gestionado equipos, negociado contratos, optimizado líneas de producción y transformado procesos antes de que la IA fuera una opción. Hoy aplicamos la misma mentalidad analítica y pragmática a la implementación de Inteligencia Artificial: entendemos tu negocio por dentro y lo llevamos a producción con criterio técnico.',

      'compliance.diff.title': 'Nuestro valor diferencial',
      'compliance.diff.desc': 'Entendemos tu negocio antes de proponer una solución. Porque la mejor tecnología aplicada al problema equivocado es solo un gasto más.',
      'compliance.eu.title': 'Cumplimiento normativo — EU AI Act',
      'compliance.eu.desc': 'Soporte para que tus sistemas de IA cumplan con el Reglamento europeo: homologación, documentación técnica y formaciones en normativa.',

      'testimonials.title': 'Lo que dicen empresas que escalan',
      'testimonials.1.quote': '"Identificó un cuello de botella en nuestro proceso de cualificación que no habíamos visto. De idea a automatización funcionando en menos de una semana."',
      'testimonials.1.role': '— Director Comercial',
      'testimonials.1.industry': 'B2B · Industria',
      'testimonials.2.quote': '"El agente de soporte resolvió el 70% de consultas recurrentes desde el primer día. Nuestro equipo pudo pasar a casos complejos."',
      'testimonials.2.role': '— Responsable CX',
      'testimonials.2.industry': 'SaaS · Servicios',

      'contact.title': 'Si tu negocio está listo para dar el salto, hablemos.',
      'contact.desc': 'Diagnóstico gratuito: identificamos procesos, flujos y oportunidades de IA a medida para tu operación.',
      'contact.title.short': '¿Hablamos?',
      'contact.desc.short': 'Cuéntanos tu proyecto y te respondemos con una propuesta en menos de 24h.',
      'form.name': 'Tu nombre *',
      'form.email': 'Email *',
      'form.company': 'Empresa (opcional)',
      'form.interest': '¿Qué te interesa?',
      'form.interest.service': '¿Qué servicio te interesa?',
      'form.message.home': 'Cuéntanos brevemente tu situación...',
      'form.message.solutions': 'Describe brevemente tu proyecto o necesidad...',
      'form.submit': 'Enviar mensaje →',
      'form.note': 'Sin compromiso · Te respondemos en menos de 24h',
      'form.success': '✓ Mensaje enviado. Te responderemos en menos de 24h.',
      'form.subject.home': 'Nuevo contacto desde KAIzen Consult',
      'form.subject.solutions': 'Solicitud desde Soluciones - KAIzen Consult',
      'form.opt.ventas': 'Agente de Ventas',
      'form.opt.soporte': 'Agente de Soporte',
      'form.opt.automatizacion': 'Automatización',
      'form.opt.voice': 'Agentes de Voz',
      'form.opt.consultoria': 'Consultoría',
      'form.opt.formacion': 'Formación',
      'form.opt.otro': 'Otro',

      'footer.tagline': '© 2025 KAIzen Consult — Agentes IA, Procesos y Automatización',

      'page.solutions.hero.title': 'Soluciones que escalan. Servicios con impacto.',
      'page.solutions.hero.desc': 'En este orden: Prospección, Outreach, Soporte al Cliente, Automatización de Procesos, Reingeniería e Innovación, Agentes de voz, Capacitación en IA. Detalle de cada servicio y tipo de proyectos. ROI medible desde el día uno.',
      'page.solutions.projectTypes': 'Tipos de proyectos:',

      'detail.ventas.desc': 'Un agente IA que trabaja tu pipeline comercial de forma autónoma: detecta leads en tu web o CRM, investiga prospectos, redacta outreach personalizado y hace seguimiento. Integrado con HubSpot, LinkedIn, Gmail y tus fuentes de datos.',
      'detail.ventas.li1': 'Detección y cualificación de leads inbound 24/7',
      'detail.ventas.li2': 'Prospección outbound con research en tiempo real',
      'detail.ventas.li3': 'Nurturing automático hasta primera reunión',
      'detail.ventas.li4': 'Lead scoring y routing a comerciales con brief completo',
      'detail.ventas.cta': 'Solicitar información →',

      'detail.soporte.desc': 'Chatbots multicanal (web, WhatsApp, email) que resuelven incidencias Tier 1 en segundos. RAG sobre tu base de conocimiento, respuestas coherentes y escalado sin ampliar plantilla. Detecta patrones y propone correcciones proactivas.',
      'detail.soporte.li1': 'Chatbot web con RAG sobre documentación interna',
      'detail.soporte.li2': 'WhatsApp Business integrado con CRM',
      'detail.soporte.li3': 'Email automático con clasificación y respuestas',
      'detail.soporte.li4': 'Escalado a humano cuando el agente no puede resolver',

      'detail.automatizacion.desc': 'Elimina cuellos de botella y tareas repetitivas. Lectura inteligente de documentos (OCR + IA), extracción de datos estructurados, flujos que conectan n8n, CRM, APIs y tus sistemas sin escribir código. Proceso primero, tecnología después.',
      'detail.automatizacion.li1': 'Procesamiento automático de facturas y documentos',
      'detail.automatizacion.li2': 'Extracción de datos de PDFs, emails o formularios',
      'detail.automatizacion.li3': 'Flujos entre CRM, ERP y herramientas de equipo',
      'detail.automatizacion.li4': 'Automatización de onboarding, aprobaciones y reportes',

      'detail.consultoria.desc': '+30 años en mejora continua y reingeniería en Automoción y DeepTech. La base sólida que toda transformación digital necesita. Antes de automatizar, optimizamos: diagnóstico, mapeo y diseño de flujos.',
      'detail.consultoria.li1': 'Diagnóstico y mapeo de procesos actuales',
      'detail.consultoria.li2': 'Reingeniería para reducir ineficiencias',
      'detail.consultoria.li3': 'Lean y mejora continua',
      'detail.consultoria.li4': 'Preparación para automatización (identificación de cuellos de botella)',

      'detail.voz.desc': 'Asistentes de voz inteligentes para gestión de reservas, pagos, información y atención telefónica. IA conversacional en tiempo real. Tu centralita potenciada 24/7, multiidioma y sin esperas.',
      'detail.voz.li1': 'Reservas por teléfono (restaurantes, clínicas, servicios)',
      'detail.voz.li2': 'Gestión de pagos e incidencias por voz',
      'detail.voz.li3': 'Desviación inteligente de llamadas',
      'detail.voz.li4': 'Información de horarios, precios y disponibilidad',

      'detail.formacion.desc': 'Workshops prácticos de prompt engineering, adopción de IA y change management. Tu equipo aprende a aprovechar la IA con criterio de negocio. No teoría: casos reales, ejercicios y herramientas listas para usar.',
      'detail.formacion.li1': 'Prompt engineering para equipos comerciales, soporte o operaciones',
      'detail.formacion.li2': 'Adopción de IA en el día a día',
      'detail.formacion.li3': 'Workshops a medida por departamento',
      'detail.formacion.li4': 'Change management para implementación de agentes IA',

      'tag.industrial': 'Reingeniería industrial',
      'tag.automotive': 'Automoción',
      'tag.continuous': 'Mejora continua',
      'tag.applied': 'Inteligencia artificial aplicada',
      'tag.industry': 'Industria',
      'tag.bookings': 'Reservas',
      'tag.payments': 'Pagos',
      'tag.multilingual': 'Multiidioma'
    }
  };

  function getLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'es' ? 'es' : DEFAULT_LANG;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  function t(lang, key) {
    return translations[lang]?.[key] ?? translations.en[key] ?? key;
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = t(lang, key);
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      el.placeholder = t(lang, el.getAttribute('data-i18n-placeholder'));
    });

    document.querySelectorAll('[data-i18n-value]').forEach((el) => {
      el.value = t(lang, el.getAttribute('data-i18n-value'));
    });

    const titleKey = document.body.getAttribute('data-page-title');
    if (titleKey) {
      document.title = t(lang, titleKey);
    }

    const descMeta = document.querySelector('meta[name="description"]');
    const descKey = document.body.getAttribute('data-page-description');
    if (descMeta && descKey) {
      descMeta.setAttribute('content', t(lang, descKey));
    }

    const subjectInput = document.querySelector('input[name="_subject"][data-i18n-value]');
    if (subjectInput) {
      subjectInput.value = t(lang, subjectInput.getAttribute('data-i18n-value'));
    }

    const successEl = document.querySelector('.form-success');
    if (successEl) {
      successEl.textContent = t(lang, 'form.success');
    }

    document.querySelectorAll('.lang-option').forEach((btn) => {
      const btnLang = btn.getAttribute('data-lang');
      btn.classList.toggle('active', btnLang === lang);
      btn.setAttribute('aria-pressed', btnLang === lang ? 'true' : 'false');
    });
  }

  function initLangToggle() {
    const toggle = document.getElementById('lang-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', (e) => {
      const target = e.target.closest('[data-lang]');
      if (!target) return;
      setLang(target.getAttribute('data-lang'));
    });
  }

  function init() {
    const lang = getLang();
    applyLang(lang);
    initLangToggle();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.KaizenI18n = { getLang, setLang, t };
})();
