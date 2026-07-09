(function () {
  const STORAGE_KEY = 'kaizen-lang';
  const DEFAULT_LANG = 'es';

  const translations = {
    en: {
      'meta.index.title': 'KAIzen Consult — Redirecting...',
      'meta.index.redirect': 'Redirecting to',
      'meta.home.title': 'KAIzen Consult — Process engineering & AI automation for SMBs',
      'meta.home.description': 'We don\'t sell AI — we design processes that run on their own. B2B prospecting, customer support, and operations automated with engineering rigor, on the tools you already use. For B2B and industrial SMBs.',
      'meta.solutions.title': 'Solutions — KAIzen Consult | AI Agents, Automation & Consulting',
      'meta.solutions.description': 'Service details: sales and support AI agents, process automation, reengineering and innovation, voice agents, and training. Projects with measurable ROI.',
      'meta.contact.title': 'Contact — KAIzen Consult',
      'meta.contact.description': 'Get in touch with KAIzen Consult. Book a free discovery session and tell us how we can help automate your processes with AI.',

      'nav.services': 'Services',
      'nav.kaizen': 'Kaizen',
      'nav.solutions': 'Services',
      'nav.process': 'Kaizen',
      'nav.home': 'Home',
      'nav.contact': 'Contact',
      'nav.contact.short': 'Contact',
      'nav.menu': 'Menu',
      'nav.lang': 'Language',

      'breadcrumb.home': 'Home',
      'breadcrumb.solutions': 'Solutions',
      'breadcrumb.blog': 'Blog',
      'breadcrumb.ventas': 'B2B Prospecting Agent',
      'breadcrumb.soporte': 'Customer Support Agent',
      'breadcrumb.automatizacion': 'Process Automation',
      'breadcrumb.blog.article': 'Industry is betting its future',

      'footer.linkedin': 'LinkedIn',

      'cta.banner.title': 'Ready to transform your business with AI?',
      'cta.banner.subtitle': 'Book a free 30-minute discovery session',
      'cta.banner.btn': 'Book your session →',

      'page.contact.hero.title': 'Contact us',
      'page.contact.hero.subtitle': 'We\'re here to help you transform your business with processes that run on their own.',
      'page.contact.form.title': 'Send us a message',
      'page.contact.info.title': 'Contact information',
      'page.contact.phone.label': 'Phone',
      'page.contact.follow': 'Follow us',

      'form.name.label': 'Name',
      'form.company.label': 'Company',
      'form.email.label': 'Email',
      'form.subject.label': 'Subject',
      'form.subject.placeholder': 'What would you like to talk about?',
      'form.message.label': 'Message',
      'form.message.contact': 'Tell us briefly about your situation and how we can help...',
      'form.subject.contact': 'New contact from Contact page - KAIzen Consult',
      'footer.link.support': 'Customer support agent',
      'footer.link.automation': 'Process automation',
      'footer.link.ventas': 'B2B prospecting agent',

      'hero.badge': 'Processes before code · Innovation & automation for SMBs',
      'hero.title': 'We don\'t sell AI. We design <span style="color:var(--lime)">processes</span> that run on their own.',
      'hero.subtitle': 'Large companies automated years ago. At many SMBs, new clients and suppliers still get chased when someone has time, inquiries wait until Monday, and data moves by hand between systems. Whether you have 5 employees or 100, systems that work on their own are within reach.',
      'hero.cta1': 'Book a discovery session →',
      'hero.cta2': 'View services',
      'hero.stat1.value': '+10 years',
      'hero.stat1.label': 'in B2B industry',
      'hero.stat2.value': '+30 years',
      'hero.stat2.label': 'in processes, Lean & reengineering',
      'hero.stat3.value': '+7 systems',
      'hero.stat3.label': 'in production, running today',

      'badges.label': 'We integrate advanced technology into the tools you already use',

      'solutions.tag': 'What we solve',
      'solutions.title': 'Sales, customer support and operations: the three pillars SMBs sustain with hours of work.',
      'solutions.desc': 'We redesign them with engineering rigor and turn them into systems that <span class="highlight-underline">work on their own</span>. On the tools you already use.',
      'solutions.cta': 'Book a discovery session →',

      'card.ventas.category': 'B2B Sales',
      'card.ventas.title': 'Prospecting & Outreach Agent',
      'card.ventas.desc': 'Handles the pipeline pains that hurt most: finds companies like those who already buy from you, writes outreach (with RAG+AI that learns your team\'s tone) and follows up — your team supervises, escalates, and generates more opportunities.',
      'card.ventas.metric1': 'Prospect to contact < 2 min',
      'card.ventas.metric2': '↑ +60% meetings in under 3 months',
      'card.ventas.result': '→ Full pipeline from lead to first contact in <2 minutes · Personalized emails',
      'card.ventas.cta': 'Learn more & request info',

      'card.soporte.category': 'Customer Experience',
      'card.soporte.title': 'Ticketing Agent',
      'card.soporte.desc': 'Most CRM tickets (or support inboxes) have known answers; the bottleneck is classifying and responding without losing important opportunities. Unifies your channels in your CRM and lets automation classify and resolve autonomously. Learns from your processes, detects patterns, and routes only what needs human intervention.',
      'card.soporte.result': '→ Auto-routing & ticket resolution · Custom architecture',
      'card.soporte.cta': 'Learn more & request info',

      'card.automatizacion.category': 'Operations',
      'card.automatizacion.title': 'Digital Transformation',
      'card.automatizacion.desc': 'Your systems don\'t talk to each other — and your team is the translator. We eliminate repetitive tasks, map your processes, and co-design a functional architecture that connects your systems without anyone retyping data.',
      'card.automatizacion.result': '→ More productive teams',
      'card.automatizacion.cta': 'Learn more & request info',

      'card.consultoria.category': 'Consulting',
      'card.consultoria.title': 'Reengineering & Innovation',
      'card.consultoria.desc': 'With 30+ years of operations and management experience in deeptech and automotive from our partner, we design a system to turn ideas into proof-of-concept. Whatever your size, we validate advanced technology applications in your industry.',
      'card.consultoria.result': '→ PoC in days for R&D · Industry 4.0 projects',
      'card.consultoria.cta': 'Learn more & request info',

      'card.voz.category': 'Voice or Chat for B2C',
      'card.voz.title': 'Voice & Chat Agents',
      'card.voz.desc': 'Every missed call or message is a customer who won\'t call back. Bookings, questions, and requests handled instantly, 24/7, in multiple languages.',
      'card.voz.result': '→ No wait times · Bookings · Reminders · Reviews',
      'card.voz.cta': 'Learn more & request info',

      'card.formacion.category': 'Training',
      'card.formacion.title': 'We teach you to turn AI into real work',
      'card.formacion.desc': 'AI doesn\'t fail because of the tool — it fails because of how it\'s used, and it renews every quarter. We run hands-on workshops on your real cases so your team works with it with judgment.',
      'card.formacion.result': '→ AI kit for every department',
      'card.formacion.cta': 'Learn more & request info',

      'features.tag': 'Why KAIzen Consult',
      'features.title': 'Processes first. Custom AI that\'s yours, not rented.',
      'features.1.title': 'From idea to functional architecture in weeks',
      'features.1.desc': 'Kaizen methodology and agile execution. No 6-month projects. We start with the automation that delivers the most return, test it in parallel with the manual process, and scale in a controlled way.',
      'features.2.title': 'Always processes before code',
      'features.2.desc': 'We map and optimize your processes before programming. AI only amplifies well-designed processes — we automate with order.',
      'features.3.title': 'Systems that are yours, not another subscription',
      'features.3.desc': 'Every solution is configured around how you actually work: connected to your systems, documents, and rules — not another off-the-shelf program or subscription.',

      'process.tag': 'How we work',
      'process.title': 'Kaizen approach: connect, configure, deploy.',
      'process.1.title': 'Connect',
      'process.1.desc': 'Free 30-minute discovery session: we understand your business, workflows, and where the hours go. You leave with identified opportunities.',
      'process.2.title': 'Configure',
      'process.2.desc': 'Real process mapping, custom system design, and stack chosen by impact (n8n, RAGs, APIs).',
      'process.3.title': 'Deploy',
      'process.3.desc': 'We build, test in parallel with the manual process, and deliver automation running in production — documented and with your team trained.',
      'process.closing': 'We understand your business before proposing a solution. The best technology applied to the wrong problem is just another expense.',

      'proactive.title': 'Proactive by default',
      'proactive.desc': 'We understand your business before proposing a solution. Because the best technology applied to the wrong problem is just another expense.',
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
      'testimonials.1.quote': '"They identified a bottleneck in our qualification and enrichment process we hadn\'t seen. From idea to working automation in less than a month."',
      'testimonials.1.role': '— Sales Director',
      'testimonials.1.industry': 'B2B · Industry',
      'testimonials.2.quote': '"The support agent resolved 70% of recurring inquiries from day one in production. Our team could focus on higher-value tickets."',
      'testimonials.2.role': '— AI Marketplace Manager',
      'testimonials.2.industry': 'B2B · Marketplace',

      'blog.tag': 'Blog',
      'blog.title': 'Ideas and learnings from industry',
      'blog.1.date': 'April 9, 2026',
      'blog.1.title': 'Industry is betting its future',
      'blog.1.desc': 'Three major challenges from Advanced Factories — competitiveness, implementation, and talent — and concrete levers to address them through AI automation.',
      'blog.1.link': 'Read article →',
      'blog.2.date': 'April 23, 2026',
      'blog.2.title': 'How to automate processes with AI in your company: A practical guide',
      'blog.2.desc': 'Start with the process, never the technology. The 30% rule, the four steps we follow in every project, and where to begin tomorrow.',
      'blog.2.link': 'Read article →',
      'blog.3.date': 'May 7, 2026',
      'blog.3.title': 'AI for businesses: the challenge is 80% business and only 20% technology.',
      'blog.3.desc': 'Don\'t implement out of FOMO. Technology too early, without a process behind it, is a big mistake. Prioritize by real impact on your bottom line, with just the right technology.',
      'blog.3.soon': 'Coming soon',
      'blog.2.cta.title': 'Want to transform your business with AI?',
      'blog.2.cta.desc': 'Book a free discovery session',
      'blog.2.cta.btn': 'Book your session →',

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
      'footer.findUs': 'Find us',
      'footer.address': 'C/ Pau Claris, 162-164, pl. 3\n08037 Barcelona',

      'page.solutions.hero.title': 'What AI systems solve and how they work.',
      'page.solutions.hero.desc': 'B2B prospecting, customer support, admin automation, process reengineering, voice agents, and training. Business value up top; technical detail below for those who want to look inside.',
      'page.solutions.projectTypes': 'Project types:',

      'detail.ventas.desc': 'A prospecting system that runs every day: identifies companies like those who already buy from you, finds the right person, writes with a real reason to reach out, and follows up until the meeting. Your team supervises output and the CRM stays current.',
      'detail.ventas.li1': '24/7 inbound lead detection and qualification',
      'detail.ventas.li2': 'Outbound prospecting with real-time research',
      'detail.ventas.li3': 'Automated nurturing until first meeting',
      'detail.ventas.li4': 'Lead scoring and routing to sales with full brief',
      'detail.ventas.cta': 'Request information →',

      'detail.soporte.desc': 'An assistant that answers your customers in seconds via web, WhatsApp, or email, using only your company information: catalog, terms, policies. Resolves what has a known answer and transfers to your team, with full context, what needs judgment.',
      'detail.soporte.li1': 'Web chatbot with RAG on internal documentation',
      'detail.soporte.li2': 'WhatsApp Business integrated with CRM',
      'detail.soporte.li3': 'Automated email with classification and responses',
      'detail.soporte.li4': 'Escalation to human when the agent cannot resolve',

      'detail.automatizacion.desc': 'When email, ERP, and Excel don\'t talk, a person on your team is the translator. We connect your systems so invoices, orders, and reports flow on their own: intelligent document reading, data transfer without retyping, and exceptions routed for human review. Process first, technology second.',
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
      'meta.home.title': 'KAIzen Consult — Ingeniería de procesos y automatización con IA para pymes',
      'meta.home.description': 'No vendemos IA: diseñamos procesos que funcionan solos. Prospección comercial, atención al cliente y administración, automatizadas con criterio de ingeniería sobre las herramientas que ya usas. Para pymes B2B e industriales.',
      'meta.solutions.title': 'Soluciones — KAIzen Consult | Agentes IA, Automatización y Consultoría',
      'meta.solutions.description': 'Detalle de servicios: agentes IA de ventas y soporte, automatización de procesos, reingeniería e innovación, agentes de voz y formación. Proyectos con ROI medible.',
      'meta.contact.title': 'Contacto — KAIzen Consult',
      'meta.contact.description': 'Contacta con KAIzen Consult. Reserva una sesión de descubrimiento gratuita y cuéntanos cómo podemos ayudarte a automatizar procesos con IA.',

      'nav.services': 'Servicios',
      'nav.kaizen': 'Kaizen',
      'nav.solutions': 'Servicios',
      'nav.process': 'Kaizen',
      'nav.home': 'Inicio',
      'nav.contact': 'Contacto',
      'nav.contact.short': 'Contacto',
      'nav.menu': 'Menú',
      'nav.lang': 'Idioma',

      'breadcrumb.home': 'Inicio',
      'breadcrumb.solutions': 'Soluciones',
      'breadcrumb.blog': 'Blog',
      'breadcrumb.ventas': 'Agente de Prospección B2B',
      'breadcrumb.soporte': 'Agente de Soporte al Cliente',
      'breadcrumb.automatizacion': 'Automatización de Procesos',
      'breadcrumb.blog.article': 'La Industria se juega el futuro',

      'footer.linkedin': 'LinkedIn',

      'cta.banner.title': '¿Preparado para transformar tu negocio con IA?',
      'cta.banner.subtitle': 'Reserva una sesión de descubrimiento gratuita de 30 minutos',
      'cta.banner.btn': 'Reserva tu sesión →',

      'page.contact.hero.title': 'Contacta con nosotros',
      'page.contact.hero.subtitle': 'Estamos aquí para ayudarte a transformar tu negocio con procesos que funcionan solos.',
      'page.contact.form.title': 'Envíanos un mensaje',
      'page.contact.info.title': 'Información de contacto',
      'page.contact.phone.label': 'Teléfono',
      'page.contact.follow': 'Síguenos',

      'form.name.label': 'Nombre',
      'form.company.label': 'Empresa',
      'form.email.label': 'Correo electrónico',
      'form.subject.label': 'Asunto',
      'form.subject.placeholder': '¿Sobre qué quieres hablar?',
      'form.message.label': 'Mensaje',
      'form.message.contact': 'Cuéntanos brevemente tu situación y cómo podemos ayudarte...',
      'form.subject.contact': 'Nuevo contacto desde Contacto - KAIzen Consult',
      'footer.link.support': 'Agente de soporte al cliente',
      'footer.link.automation': 'Automatización de procesos',
      'footer.link.ventas': 'Agente de prospección B2B',

      'hero.badge': 'Procesos antes que código · Innovación y automatización para pymes',
      'hero.title': 'No vendemos IA. Diseñamos <span style="color:var(--lime)">procesos</span> que funcionan solos.',
      'hero.subtitle': 'Las grandes empresas automatizaron hace años. En muchas en cambio, a los nuevos clientes o proveedores se les busca y sigue cuando hay hueco, las consultas esperan al lunes, y los datos viajan a mano entre sistemas. Cada empresa, tenga 5 empleados o 100, tiene sistemas que trabajan solos a su alcance.',
      'hero.cta1': 'Reserva una sesión de descubrimiento →',
      'hero.cta2': 'Ver servicios',
      'hero.stat1.value': '+10 años',
      'hero.stat1.label': 'en industria B2B',
      'hero.stat2.value': '+30 años',
      'hero.stat2.label': 'en procesos, Lean y reingeniería',
      'hero.stat3.value': '+7 sistemas',
      'hero.stat3.label': 'en producción, funcionando hoy',

      'badges.label': 'Integramos tecnología avanzada en las herramientas que ya usas',

      'solutions.tag': 'Lo que resolvemos',
      'solutions.title': 'Ventas, atención al cliente y operaciones: los tres pilares que las pymes sostienen a base de horas.',
      'solutions.desc': 'Los rediseñamos con criterio de ingeniería y los convertimos en sistemas que <span class="highlight-underline">trabajan solos</span>. Sobre las herramientas que ya usas.',
      'solutions.cta': 'Reserva una sesión de descubrimiento →',

      'card.ventas.category': 'Ventas B2B',
      'card.ventas.title': 'Agente de Prospección y Outreach',
      'card.ventas.desc': 'Gestiona todas o las partes del pipeline que más dolores de cabeza dan: encuentra empresas como las que ya te compran, les escribe (con un RAG+IA que aprende del tono y forma de tu propio equipo) y hace el seguimiento — tu equipo supervisa, escala y genera más oportunidades de negocio',
      'card.ventas.metric1': 'De prospecto a contacto < 2 min',
      'card.ventas.metric2': '↑ +60% reuniones en menos de 3 meses',
      'card.ventas.result': '→ Pipeline completo de lead a primer contacto en <2 minutos · Emails personalizados',
      'card.ventas.cta': 'Ver más y solicitar info',

      'card.soporte.category': 'Customer Experience',
      'card.soporte.title': 'Agente de ticketing',
      'card.soporte.desc': 'La mayoría de las consultas en los tickets de tu CRM (o inbox de atención / info) tienen respuestas conocidas; el cuello de botella es categorizar y responder sin perder oportunidades importantes en el camino. Unifica tus canales en tu CRM y deja que la automatización los clasifique y los resuelva de forma autónoma. Aprende de tus procesos, detecta patrones y deriva a tu equipo sólo lo que requiere intervención.',
      'card.soporte.result': '→ Auto-ruta y resolución de tickets · Arquitectura a medida',
      'card.soporte.cta': 'Ver más y solicitar info',

      'card.automatizacion.category': 'Operaciones',
      'card.automatizacion.title': 'Transformación Digital',
      'card.automatizacion.desc': 'Tus sistemas no se hablan entre sí, y el traductor es tu equipo. Erradica las tareas repetitivas, mapeamos tus procesos y diseñamos juntos una arquitectura funcional que conecte tus sistemas sin que nadie los teclee.',
      'card.automatizacion.result': '→ Equipos más productivos',
      'card.automatizacion.cta': 'Ver más y solicitar info',

      'card.consultoria.category': 'Consultoría',
      'card.consultoria.title': 'Reingeniería e Innovación',
      'card.consultoria.desc': 'Gracias a los más de 30 años de experiencia en operaciones y gerencia de empresas deeptech y de automoción de nuestro partner, diseñamos un sistema para convertir ideas en pruebas de concepto. Independientemente de tu tamaño, validamos la aplicación de tecnologías avanzadas en tu industria.',
      'card.consultoria.result': '→ PoC en días para proyectos · I+D · Industria 4.0',
      'card.consultoria.cta': 'Ver más y solicitar info',

      'card.voz.category': 'Voz o Chat para B2C',
      'card.voz.title': 'Agentes de Voz y Chat',
      'card.voz.desc': 'Cada llamada o mensaje que no se coge es un cliente que no vuelve a llamar. Reservas, dudas y gestiones atendidas al momento, 24/7 y en varios idiomas.',
      'card.voz.result': '→ Atención sin esperas · Reservas · Recordatorios · Reseñas',
      'card.voz.cta': 'Ver más y solicitar info',

      'card.formacion.category': 'Capacitación',
      'card.formacion.title': 'Te enseñamos a convertir la IA en trabajo real',
      'card.formacion.desc': 'La IA no falla por la herramienta: falla por cómo se usa y, encima, se renueva cada trimestre y a veces se acaba usando poco o mal. Hacemos talleres prácticos sobre tus casos reales para que tu equipo trabaje con ella con criterio.',
      'card.formacion.result': '→ Kit IA para cada departamento',
      'card.formacion.cta': 'Ver más y solicitar info',

      'features.tag': 'Por qué KAIzen Consult',
      'features.title': 'Procesos primero. IA a medida tuyos, no alquilados.',
      'features.1.title': 'De idea a arquitectura funcional en semanas',
      'features.1.desc': 'Metodología Kaizen y ejecución ágil. No proyectos de 6 meses. Empezamos por la automatización que más retorno da, la probamos en paralelo con el proceso manual y ampliamos de manera controlada.',
      'features.2.title': 'Siempre procesos antes que código',
      'features.2.desc': 'Mapeamos y optimizamos tus procesos antes de programar. La IA amplifica sólo procesos bien diseñados, automatizamos con orden.',
      'features.3.title': 'Sistemas tuyos, no una subscripción más',
      'features.3.desc': 'Cada solución se configura según cómo trabajas de verdad: conectada a tus sistemas, tus documentos y tus reglas — los sistemas no son un programa o subscripción más.',

      'process.tag': 'Cómo trabajamos',
      'process.title': 'Enfoque Kaizen: conecta, configura, despliega.',
      'process.1.title': 'Conecta',
      'process.1.desc': 'Diagnóstico gratuito de 30 minutos: entendemos tu negocio, tus flujos de trabajo y dónde se van las horas. Sales con oportunidades identificadas.',
      'process.2.title': 'Configura',
      'process.2.desc': 'Mapeo del proceso real, diseño del sistema a medida y elección del stack por impacto (n8n, RAGs, Apis).',
      'process.3.title': 'Despliega',
      'process.3.desc': 'Construimos, probamos en paralelo con el proceso manual y entregamos la automatización funcionando en producción, documentada y con el equipo formado.',
      'process.closing': 'Entendemos tu negocio antes de proponer una solución. La mejor tecnología aplicada al problema equivocado es solo un gasto más.',

      'proactive.title': 'Proactivos por defecto',
      'proactive.desc': 'Entendemos tu negocio antes de proponer una solución. Porque la mejor tecnología aplicada al problema equivocado es solo un gasto más.',
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
      'testimonials.1.quote': '"Identificó un cuello de botella en nuestro proceso de cualificación y enriquecimiento que no habíamos visto. De idea a automatización funcionando en menos de un mes."',
      'testimonials.1.role': '— Director Comercial',
      'testimonials.1.industry': 'B2B · Industria',
      'testimonials.2.quote': '"El agente de soporte resolvió el 70% de consultas recurrentes desde el primer día que estuvo en producción. Nuestro equipo pudo pasar a tratar tickets de más valor."',
      'testimonials.2.role': '— AI Marketplace Manager',
      'testimonials.2.industry': 'B2B · Marketplace',

      'blog.tag': 'Blog',
      'blog.title': 'Ideas y aprendizajes desde la industria',
      'blog.1.date': '9 de abril de 2026',
      'blog.1.title': 'La Industria se juega el futuro',
      'blog.1.desc': 'Tres grandes retos desde Advanced Factories — competitividad, implementación y talento — y las palancas concretas para abordarlos desde la automatización con IA.',
      'blog.1.link': 'Leer artículo →',
      'blog.2.date': '23 de abril de 2026',
      'blog.2.title': 'Cómo automatizar procesos con IA en tu empresa: Guía Práctica',
      'blog.2.desc': 'Empieza por el proceso, nunca por la tecnología. La regla del 30%, los cuatro pasos que seguimos en cada proyecto y por dónde empezar mañana.',
      'blog.2.link': 'Leer artículo →',
      'blog.3.date': '7 de mayo de 2026',
      'blog.3.title': 'Inteligencia artificial para empresas: El reto es 80% negocio y solo 20% tecnología.',
      'blog.3.desc': 'No implantes por FOMO. Tecnología antes de tiempo, sin proceso detrás, es un gran error. Prioriza por impacto real en tu cuenta de resultados, y poniendo la tecnología justa.',
      'blog.3.soon': 'Próximamente',
      'blog.2.cta.title': 'Si quieres transformar tu negocio con IA',
      'blog.2.cta.desc': 'Reserva una sesión de descubrimiento gratuita',
      'blog.2.cta.btn': 'Reserva tu sesión →',

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
      'footer.findUs': 'Dónde estamos',
      'footer.address': 'C/ Pau Claris, 162-164, pl. 3\n08037 Barcelona',

      'page.solutions.hero.title': 'Qué resuelven y cómo funcionan los sistemas de IA.',
      'page.solutions.hero.desc': 'Prospección comercial, soporte al cliente, automatización administrativa, reingeniería de procesos, agentes de voz y formación. Arriba, lo que le importa a tu negocio; abajo, el detalle técnico para quien quiera mirar dentro.',
      'page.solutions.projectTypes': 'Tipos de proyectos:',

      'detail.ventas.desc': 'Un sistema de prospección que se ejecuta cada día: identifica empresas como las que ya te compran, localiza a la persona adecuada, escribe con un motivo real de contacto y hace el seguimiento hasta la reunión. Con tu equipo supervisando lo que sale y el CRM siempre al día.',
      'detail.ventas.li1': 'Detección y cualificación de leads inbound 24/7',
      'detail.ventas.li2': 'Prospección outbound con research en tiempo real',
      'detail.ventas.li3': 'Nurturing automático hasta primera reunión',
      'detail.ventas.li4': 'Lead scoring y routing a comerciales con brief completo',
      'detail.ventas.cta': 'Solicitar información →',

      'detail.soporte.desc': 'Un asistente que responde a tus clientes en segundos, por web, WhatsApp o email, usando únicamente la información de tu empresa: catálogo, condiciones, políticas. Resuelve lo que tiene respuesta conocida y transfiere a tu equipo, con todo el contexto, lo que requiere criterio.',
      'detail.soporte.li1': 'Chatbot web con RAG sobre documentación interna',
      'detail.soporte.li2': 'WhatsApp Business integrado con CRM',
      'detail.soporte.li3': 'Email automático con clasificación y respuestas',
      'detail.soporte.li4': 'Escalado a humano cuando el agente no puede resolver',

      'detail.automatizacion.desc': 'Cuando el correo, el ERP y el Excel no se hablan, el traductor es una persona de tu equipo. Conectamos tus sistemas para que facturas, pedidos e informes fluyan solos: lectura inteligente de documentos, traspaso de datos sin teclear y excepciones derivadas a revisión humana. Proceso primero, tecnología después.',
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

  if (typeof window !== 'undefined' && window.__KAIZEN_LANDING_I18N__) {
    for (const lang of ['en', 'es']) {
      if (window.__KAIZEN_LANDING_I18N__[lang]) {
        Object.assign(translations[lang], window.__KAIZEN_LANDING_I18N__[lang]);
      }
    }
  }

  function getLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'es' || stored === 'en' ? stored : DEFAULT_LANG;
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
