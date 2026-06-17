export const TEAM_MEMBERS = [
  { id: "rosetti", name: "Dott. Paolo Rosetti", role: "CEO, DPO", bio: "Laurea in Scienze dell'Informazione a Bologna, 20+ anni nell'IT con importanti software house. Partner e amministratore. DPO certificato FAC (UNI 11697:2017), formazione CLUSIT sulla cyber security." },
  { id: "telese", name: "Avv. Sofia Telese", role: "Legal Team Leader", bio: "Avvocato (Ordine di Rimini), Team Leader area Legal. Esperta di NIS2 e AI Act, percorsi CIPP/E e CIPT (IAPP). Integra privacy e sistemi ISO." },
  { id: "inzerilli", name: "Avv. Lucia Inzerilli", role: "Senior Privacy Specialist", bio: "Avvocato (Ordine di Rimini dal 2022), esperta in diritto penale e governance dei dati; focus su dati sanitari, software house e gruppi societari." },
  { id: "mainardi", name: "Ing. Alessia Mainardi", role: "IT Specialist, Auditor ISO 27001", bio: "Ingegnere informatico (Bologna), tesi sulla sicurezza dei sistemi di telecontrollo. Competenze in cybersecurity e valutazione della sicurezza dei sistemi." },
  { id: "capanni", name: "Avv. Filippo Capanni", role: "Senior Privacy Specialist", bio: "Avvocato (Ordine di Rimini), esperto di privacy compliance, diritto penale e data protection nella PA. Autore di pubblicazioni specialistiche." },
  { id: "greppi", name: "Avv. Federica Greppi", role: "Senior Privacy Specialist", bio: "Abilitata alla professione forense, Master in Diritto delle nuove tecnologie (Bologna), Maestro della Protezione Dati & Data Protection Designer® IIP. Focus PMI e sanità." },
  { id: "raffo", name: "Dott.ssa Asia Raffo", role: "Key Account Manager", bio: "Laurea in International Tourism and Leisure Industries (Bologna), Erasmus+ in NL. Coordina progetti di compliance e partnership strategiche." },
  { id: "rossato", name: "Dott.ssa Veronica Rossato", role: "Privacy Specialist", bio: "Laurea Magistrale European Studies — Law and Economics (La Sapienza), tesi su diritto penale europeo e metaverso, premio laureato eccellente 110L. Focus tecnologie emergenti." },
  { id: "marocchi", name: "Dott. Mattia Marocchi", role: "Privacy Specialist", bio: "Laurea in Giurisprudenza per Imprese e PA e Master DPO (Bologna). Competenze in protezione dati e accessibilità digitale." },
  { id: "berardi", name: "Dott. Giuseppe Berardi", role: "Privacy Specialist", bio: "Laurea in Scienze dei Servizi Giuridici (Urbino), tesi sul ruolo del DPO. Formazione specialistica come DPO." },
  { id: "defelicibus", name: "Dott.ssa Marzia De Felicibus", role: "Administration, Privacy Specialist", bio: "Laurea in Economia e Commercio (D'Annunzio, Pescara). Unisce amministrazione e disciplina privacy." },
  { id: "carvelli", name: "Dott.ssa Karen Carvelli", role: "Account Manager", bio: "Doppio diploma ESABAC, laurea in Economia, Management e Statistica (Bologna). Supporta la gestione dei progetti di compliance." }
];

export const FAQS = [
  {
    q: "La mia azienda è davvero obbligata?",
    a: "Se operi in un settore Essenziale o Importante (es. trasporti, sanità, digitale, manifattura) e hai più di 50 dipendenti o 10M€ di fatturato/bilancio, rientri direttamente. Inoltre, potresti rientrarci come fornitore di un soggetto obbligato (requisiti di supply chain)."
  },
  {
    q: "Cosa rischio se non mi adeguo entro il 31/10/2026?",
    a: "Dal 31 ottobre 2026, l'ACN (Agenzia per la Cybersicurezza Nazionale) avvierà le ispezioni. Le sanzioni arrivano fino a 10 milioni di euro (o il 2% del fatturato). È prevista anche la responsabilità personale dei vertici aziendali e il rischio di esclusione dalla supply chain."
  },
  {
    q: "Quanto tempo serve?",
    a: "L'adeguamento richiede in media da alcune settimane a diversi mesi, a seconda del livello di maturità informatica iniziale dell'azienda. Iniziare subito è fondamentale per non farsi trovare impreparati alla scadenza."
  },
  {
    q: "Vi occupate anche della parte tecnica o solo legale?",
    a: "Gestiamo internamente tutta la parte di compliance, assessment, governance, procedure e formazione con il nostro team legale e IT (Auditor ISO 27001). Per la remediation tecnica più profonda, collaboriamo in sinergia con il tuo fornitore IT o partner tecnologici."
  },
  {
    q: "Quanto costa l'adeguamento?",
    a: "Dipende dal settore, dalla dimensione e dallo stato di partenza della tua azienda. La prima analisi conoscitiva serve proprio a definire un percorso su misura."
  },
  {
    q: "Cosa succede dopo l'adeguamento?",
    a: "La conformità NIS2 richiede un mantenimento nel tempo. Ti affianchiamo con audit periodici, formazione continua al personale e supporto nella gestione e notifica proattiva degli incidenti."
  }
];

export const SECTORS_ESSENTIAL = [
  { name: "Energia", icon: "Zap" },
  { name: "Trasporti", icon: "Train" },
  { name: "Banche e finanza", icon: "Landmark" },
  { name: "Mercati finanziari", icon: "TrendingUp" },
  { name: "Sanità", icon: "Stethoscope" },
  { name: "Acqua", icon: "Droplets" },
  { name: "Infrastrutture digitali", icon: "Network" },
  { name: "Servizi ICT", icon: "Server" },
  { name: "Spazio", icon: "Rocket" },
  { name: "Pubblica Amministrazione", icon: "Building" }
];

export const SECTORS_IMPORTANT = [
  { name: "Servizi postali", icon: "Mail" },
  { name: "Gestione rifiuti", icon: "Trash2" },
  { name: "Prodotti chimici", icon: "FlaskConical" },
  { name: "Fornitori digitali", icon: "Globe" },
  { name: "Fabbricazione", icon: "Factory" },
  { name: "Ricerca", icon: "Microscope" },
  { name: "Produzione alimentare", icon: "Wheat" },
  { name: "Autoveicoli e macchinari", icon: "Car" }
];
