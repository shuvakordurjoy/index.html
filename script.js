/* Shuvakor Bhowmik Durjoy — Interactive Portfolio Logic */

const PORTFOLIO_DATA = {
  en: {
    eyebrow: 'Textile Engineer & Merchandising Specialist · <a href="https://buft.edu.bd/" target="_blank" rel="noopener noreferrer" class="underline decoration-stone-400 hover:text-teal-700 transition">BUFT</a>',
    headline: 'The textile engineer that works for quality',
    subhead: 'Available for Textile Merchandising, Quality Control & Export Apparel Operations · Dhaka & Chattogram, Bangladesh',
    ctaText: 'Download Official CV',
    journalBadge: 'TEXTILE & APPAREL DOSSIER · 2026',
    journalTitle: 'Shuvakor Bhowmik Durjoy',
    journalSubtitle: 'B.Sc. in Textile Engineering (Wet Processing) · QC & Merchandising Specialist',
    journalHighlightTitle: 'Executive Profile',
    journalHighlightText: 'Dedicated to driving efficient production workflows, rigorous Offline & Online Quality Control (QC), buyer communication, and sustainable wet processing from sample development to shipment.'
  },
  bn: {
    eyebrow: 'টেক্সটাইল ইঞ্জিনিয়ার ও মার্চেন্ডাইজিং স্পেশালিস্ট · <a href="https://buft.edu.bd/" target="_blank" rel="noopener noreferrer" class="underline decoration-stone-400 hover:text-teal-700 transition">বিইউএফটি (BUFT)</a>',
    headline: 'মানসম্মত টেক্সটাইল ও মার্চেন্ডাইজিংয়ে নিবেদিত প্রকৌশলী',
    subhead: 'টেক্সটাইল মার্চেন্ডাইজিং, কোয়ালিটি কন্ট্রোল (QC) এবং গার্মেন্টস এক্সপোর্ট অপারেশনের জন্য প্রস্তুত · ঢাকা ও চট্টগ্রাম',
    ctaText: 'সিভি ডাউনলোড করুন',
    journalBadge: 'টেক্সটাইল ও অ্যাপারেল পোর্টফোলিও · ২০২৬',
    journalTitle: 'শুভকর ভৌমিক দুর্জয়',
    journalSubtitle: 'বি.এসসি. ইন টেক্সটাইল ইঞ্জিনিয়ারিং (ওয়েট প্রসেসিং) · কিউসি ও মার্চেন্ডাইজিং',
    journalHighlightTitle: 'পেশাগত সারসংক্ষেপ',
    journalHighlightText: 'টেক্সটাইল ম্যানুফ্যাকচারিং, অফলাইন ও অনলাইন কোয়ালিটি কন্ট্রোল (QC), প্রোডাক্ট ডেভেলপমেন্ট, অর্ডার ফলো-আপ এবং বায়ার কমিউনিকেশনে দক্ষতার সাথে কাজ করতে প্রতিশ্রুতিবদ্ধ।'
  }
};

const HERO_MODES = {
  summary: {
    badge: 'EXECUTIVE SUMMARY · CAREER OBJECTIVE',
    title: 'Precision Merchandising & Quality Control',
    body: 'To work in a reputed national or multinational textile and apparel organization as a Textile Merchandiser utilizing hands-on expertise in textile manufacturing, offline/online quality control, product development, order placement, production follow-up, buyer communication, and export business management.',
    metrics: [
      { label: 'B.Sc. CGPA (BUFT)', value: '3.01 / 4.00' },
      { label: 'SSC Result (2019)', value: '5.00 / 5.00 GPA' },
      { label: 'Industrial QC Internship', value: 'KDS Textile Mills' }
    ]
  },
  research: {
    badge: 'UNDERGRADUATE RESEARCH THESIS · BUFT',
    title: 'Comparative Analysis of Ozone Wash Over Conventional Acid Wash for Knit Apparel',
    body: 'Conducted under the supervision of Shafat Ahmed Bin Kamal, Assistant Professor at BGMEA University of Fashion & Technology (BUFT). Evaluates water reduction, effluent load, shade consistency, and bursting strength retention in sustainable knitwear finishing.',
    metrics: [
      { label: 'Specialization', value: 'Wet Processing' },
      { label: 'Supervisor', value: 'Shafat Ahmed Bin Kamal' },
      { label: 'Focus Area', value: 'Eco-Friendly Denim & Knit Wash' }
    ]
  },
  contact: {
    badge: 'DIRECT RECRUITER ACCESS · DHAKA & CHATTOGRAM',
    title: 'Ready for Immediate Merchandising & QC Roles',
    body: 'Dual residential base in Kazir Dewri, Chattogram and Uttara Sector 11, Dhaka — enabling immediate deployment across major textile hubs in Gazipur, Savar, Narayanganj, and Chattogram EPZ.',
    metrics: [
      { label: 'Phone / WhatsApp', value: '+880 1869-441992' },
      { label: 'Email', value: 'shuvakordurjoy2002@gmail.com' },
      { label: 'Languages', value: 'Bengali (Native), English' }
    ]
  }
};

const AI_ANSWERS = {
  kds: {
    q: "What was Durjoy's role during his internship at KDS Textile Mills Ltd?",
    a: "From February 2026 to April 2026, Shuvakor Bhowmik Durjoy served as a Textile Engineering Intern at KDS Textile Mills Ltd in Chattogram. His core responsibilities included: (1) Conducting Offline and Online Quality Control (QC) activities to support product quality and buyer compliance; (2) Gaining practical industrial exposure to textile finishing operations and monitoring live production; (3) Observing and supporting quality inspection procedures; (4) Identifying fabric defects and process control parameters; and (5) Coordinating across production teams on the factory floor."
  },
  research: {
    q: "Tell me about his undergraduate research on Ozone Wash vs. Acid Wash.",
    a: "Durjoy completed his undergraduate research project titled 'Comparative Analysis of Ozone Wash Over Conventional Acid Wash for Knit Apparel' at BGMEA University of Fashion & Technology (BUFT) under the instruction of Assistant Professor Shafat Ahmed Bin Kamal. The study benchmarks sustainable ozone bleaching/washing against conventional potassium permanganate/acid washing for knit garments, demonstrating how ozone technology reduces water consumption, chemical effluent, and fabric strength loss while achieving modern vintage fashion effects."
  },
  education: {
    q: "What are Durjoy's academic qualifications and GPA scores?",
    a: "Durjoy holds three verified academic credentials: (1) B.Sc. in Textile Engineering (Major: Wet Processing) from BGMEA University of Fashion & Technology (BUFT), Passing Year 2026, with a 3.01 CGPA; (2) Higher Secondary Certificate (HSC, Science) from Kazem Ali School and College, Chattogram (2021) with a 4.67 GPA; and (3) Secondary School Certificate (SSC, Science) from Chittagong Government Model School and College (2019) with a perfect 5.00 GPA."
  },
  factories: {
    q: "Which textile factories has he visited and what leadership roles has he held?",
    a: "Durjoy has completed industrial visits across four premier Bangladeshi textile conglomerates: HAMS Garments Limited, Pakiza Knit Composite Ltd, Ha-Meem Textiles LTD, and DBL Group. On campus, he served as General Secretary of the BUFT Chittagong Student's Association (2025–2026) and Associate Member of the BUFT Textile Club, alongside completing 60 hours of Graphics Design training (Photoshop & Illustrator) at New Horizons CLC and a 100-hour Spoken English program at Poetic English Zone."
  },
  hire: {
    q: "Draft an interview invitation for Shuvakor Bhowmik Durjoy.",
    a: "Subject: Interview Invitation — Textile Merchandiser / QC Role\n\nDear Shuvakor Bhowmik Durjoy,\n\nWe reviewed your portfolio, your B.Sc. in Textile Engineering (Wet Processing) at BUFT, and your Quality Control internship at KDS Textile Mills Ltd. We would love to invite you for an interview to discuss merchandising and quality assurance opportunities with our team.\n\nDirect Contact: shuvakordurjoy2002@gmail.com | +8801869441992"
  }
};

let currentLang = 'en';
let qcSimulationRunning = true;
let qcStepIndex = 0;
let qcInterval = null;

function setHeroMode(modeKey) {
  const mode = HERO_MODES[modeKey] || HERO_MODES.summary;
  const badgeEl = document.getElementById('hero-card-badge');
  const titleEl = document.getElementById('hero-card-title');
  const bodyEl = document.getElementById('hero-card-body');
  const metricsEl = document.getElementById('hero-card-metrics');

  if (badgeEl) badgeEl.textContent = mode.badge;
  if (titleEl) titleEl.textContent = mode.title;
  if (bodyEl) bodyEl.textContent = mode.body;

  if (metricsEl) {
    metricsEl.innerHTML = mode.metrics.map(m => `
      <div class="bg-stone-50/90 rounded-xl p-3 border border-stone-200/70">
        <div class="text-[11px] uppercase tracking-wider text-stone-500 font-medium">${m.label}</div>
        <div class="text-sm font-semibold text-stone-900 mt-0.5">${m.value}</div>
      </div>
    `).join('');
  }

  document.querySelectorAll('.hero-pill-btn').forEach(btn => {
    if (btn.getAttribute('data-mode') === modeKey) {
      btn.classList.add('active-pill', 'ring-2', 'ring-teal-600/30');
    } else {
      btn.classList.remove('active-pill', 'ring-2', 'ring-teal-600/30');
    }
  });
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'bn' : 'en';
  const d = PORTFOLIO_DATA[currentLang];
  const eyebrow = document.getElementById('hero-eyebrow');
  const headline = document.getElementById('hero-headline');
  const subhead = document.getElementById('hero-subhead');
  const ctaLabel = document.getElementById('hero-cta-label');
  const jBadge = document.getElementById('journal-badge');
  const jTitle = document.getElementById('journal-title');
  const jSub = document.getElementById('journal-subtitle');
  const langBtnLabel = document.getElementById('lang-pill-label');

  if (eyebrow) eyebrow.innerHTML = d.eyebrow;
  if (headline) headline.textContent = d.headline;
  if (subhead) subhead.textContent = d.subhead;
  if (ctaLabel) ctaLabel.textContent = d.ctaText;
  if (jBadge) jBadge.textContent = d.journalBadge;
  if (jTitle) jTitle.textContent = d.journalTitle;
  if (jSub) jSub.textContent = d.journalSubtitle;
  if (langBtnLabel) langBtnLabel.textContent = currentLang === 'en' ? 'বাংলা / EN' : 'English / বাংলা';

  showToast(currentLang === 'bn' ? 'ভাষা বাংলায় পরিবর্তন করা হয়েছে' : 'Switched display language to English');
}

function selectPipelineStage(stageId) {
  const stages = {
    buyer: {
      title: '1. Buyer Communication & Order Placement',
      desc: 'Translating international buyer tech packs into clear production specs, negotiating lead times, and aligning export compliance standards.',
      skills: 'Negotiation · English & Bengali Fluency · Tech Pack Review'
    },
    wet: {
      title: '2. Wet Processing & Sustainable Finishing',
      desc: 'Applying B.Sc. Wet Processing specialization and Ozone vs. Acid Wash research to optimize dyeing, washing, shade matching, and chemical efficiency.',
      skills: 'B.Sc. Textile Engineering (BUFT) · Ozone Wash Research · Lab Dip Approval'
    },
    qc: {
      title: '3. Offline & Online Quality Control (QC)',
      desc: 'Executing inline and end-of-line quality inspections, defect identification, and finishing line monitoring honed at KDS Textile Mills Ltd.',
      skills: 'KDS Textile Mills Internship · Defect Analysis · Compliance QC'
    },
    export: {
      title: '4. Production Follow-Up & Export Execution',
      desc: 'Coordinating cross-functional floor teams, tracking Time & Action (T&A) calendars, and ensuring on-time shipment satisfaction.',
      skills: 'T&A Tracking · Team Management · MS Excel & AI Tools'
    }
  };
  const s = stages[stageId] || stages.buyer;
  const box = document.getElementById('pipeline-stage-detail');
  if (box) {
    box.innerHTML = `
      <div class="font-semibold text-stone-900 text-sm">${s.title}</div>
      <p class="text-xs text-stone-600 mt-1 leading-relaxed">${s.desc}</p>
      <div class="mt-2 inline-flex items-center gap-1.5 text-[11px] font-medium text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
        <span>✓</span> <span>${s.skills}</span>
      </div>
    `;
  }
  document.querySelectorAll('.pipeline-node-btn').forEach(btn => {
    if (btn.getAttribute('data-stage') === stageId) {
      btn.classList.add('bg-teal-700', 'text-white', 'border-teal-700');
      btn.classList.remove('bg-white', 'text-stone-700', 'border-stone-300');
    } else {
      btn.classList.remove('bg-teal-700', 'text-white', 'border-teal-700');
      btn.classList.add('bg-white', 'text-stone-700', 'border-stone-300');
    }
  });
}

function updateQcTicker() {
  const steps = [
    { check: 'Online QC · Knit Finishing Line', status: 'PASS · Shade & GSM Verified', batch: 'KDS-CTG-01' },
    { check: 'Offline QC · Final Fabric Inspection', status: 'PASS · Zero Major Defects', batch: 'KDS-CTG-02' },
    { check: 'Wet Processing · Dimensional Stability', status: 'PASS · Shrinkage Within ±3%', batch: 'KDS-CTG-03' },
    { check: 'Compliance Audit · Buyer Specification', status: 'APPROVED · Ready for Export', batch: 'KDS-CTG-04' }
  ];
  const item = steps[qcStepIndex % steps.length];
  const checkEl = document.getElementById('qc-live-check');
  const statusEl = document.getElementById('qc-live-status');
  const batchEl = document.getElementById('qc-live-batch');
  if (checkEl) checkEl.textContent = item.check;
  if (statusEl) statusEl.textContent = item.status;
  if (batchEl) batchEl.textContent = item.batch;
  qcStepIndex++;
}

function toggleQcSimulation() {
  qcSimulationRunning = !qcSimulationRunning;
  const btn = document.getElementById('qc-sim-toggle-btn');
  const dot = document.getElementById('qc-live-dot');
  if (qcSimulationRunning) {
    if (btn) btn.innerHTML = '<span>⏸</span> <span>Pause QC Inspector</span>';
    if (dot) dot.classList.add('animate-ping');
    startQcLoop();
  } else {
    if (btn) btn.innerHTML = '<span>▶</span> <span>Resume QC Inspector</span>';
    if (dot) dot.classList.remove('animate-ping');
    if (qcInterval) clearInterval(qcInterval);
  }
}

function startQcLoop() {
  if (qcInterval) clearInterval(qcInterval);
  qcInterval = setInterval(() => {
    if (qcSimulationRunning) updateQcTicker();
  }, 2600);
}

function switchWashMethod(method) {
  const ozoneBtn = document.getElementById('wash-btn-ozone');
  const acidBtn = document.getElementById('wash-btn-acid');
  const detail = document.getElementById('wash-comparison-body');

  if (method === 'ozone') {
    if (ozoneBtn) {
      ozoneBtn.className = 'px-3.5 py-1.5 rounded-full text-xs font-semibold bg-teal-700 text-white transition';
    }
    if (acidBtn) {
      acidBtn.className = 'px-3.5 py-1.5 rounded-full text-xs font-semibold bg-stone-200/80 text-stone-700 hover:bg-stone-300/70 transition';
    }
    if (detail) {
      detail.innerHTML = `
        <div class="grid grid-cols-3 gap-2 text-center my-2">
          <div class="bg-emerald-50 border border-emerald-200/80 rounded-xl p-2.5">
            <div class="text-[11px] text-emerald-700 font-medium">Water & Rinsing</div>
            <div class="text-sm font-bold text-emerald-950 mt-0.5">Low Liquor Ratio</div>
          </div>
          <div class="bg-emerald-50 border border-emerald-200/80 rounded-xl p-2.5">
            <div class="text-[11px] text-emerald-700 font-medium">Fabric Strength</div>
            <div class="text-sm font-bold text-emerald-950 mt-0.5">High Retention</div>
          </div>
          <div class="bg-emerald-50 border border-emerald-200/80 rounded-xl p-2.5">
            <div class="text-[11px] text-emerald-700 font-medium">Effluent Load</div>
            <div class="text-sm font-bold text-emerald-950 mt-0.5">Eco-Compliant</div>
          </div>
        </div>
        <p class="text-xs text-stone-600 leading-relaxed">
          <strong>Ozone Wash Findings:</strong> Delivers controlled surface bleaching on knit apparel using dissolved/gaseous O₃, rapidly decomposing back to oxygen with minimal chemical residue and superior hand-feel.
        </p>
      `;
    }
  } else {
    if (acidBtn) {
      acidBtn.className = 'px-3.5 py-1.5 rounded-full text-xs font-semibold bg-stone-900 text-white transition';
    }
    if (ozoneBtn) {
      ozoneBtn.className = 'px-3.5 py-1.5 rounded-full text-xs font-semibold bg-stone-200/80 text-stone-700 hover:bg-stone-300/70 transition';
    }
    if (detail) {
      detail.innerHTML = `
        <div class="grid grid-cols-3 gap-2 text-center my-2">
          <div class="bg-amber-50 border border-amber-200/80 rounded-xl p-2.5">
            <div class="text-[11px] text-amber-800 font-medium">Water & Rinsing</div>
            <div class="text-sm font-bold text-amber-950 mt-0.5">Multi-Bath Rinse</div>
          </div>
          <div class="bg-amber-50 border border-amber-200/80 rounded-xl p-2.5">
            <div class="text-[11px] text-amber-800 font-medium">Fabric Strength</div>
            <div class="text-sm font-bold text-amber-950 mt-0.5">Higher Abrasion</div>
          </div>
          <div class="bg-amber-50 border border-amber-200/80 rounded-xl p-2.5">
            <div class="text-[11px] text-amber-800 font-medium">Effluent Load</div>
            <div class="text-sm font-bold text-amber-950 mt-0.5">ETP Neutralization</div>
          </div>
        </div>
        <p class="text-xs text-stone-600 leading-relaxed">
          <strong>Conventional Acid Wash Baseline:</strong> Relies on pumice/chemical oxidizing agents requiring intensive neutralization baths and tighter process control to avoid knit fabric yellowing or tearing.
        </p>
      `;
    }
  }
}

function filterExposureCategory(cat) {
  document.querySelectorAll('.exposure-tab-btn').forEach(btn => {
    if (btn.getAttribute('data-cat') === cat) {
      btn.className = 'exposure-tab-btn px-3.5 py-1.5 rounded-full text-xs font-semibold bg-stone-900 text-white transition';
    } else {
      btn.className = 'exposure-tab-btn px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/80 text-stone-700 hover:bg-white transition border border-stone-200/80';
    }
  });
  document.querySelectorAll('.exposure-panel').forEach(panel => {
    if (panel.getAttribute('data-panel') === cat) {
      panel.classList.remove('hidden');
    } else {
      panel.classList.add('hidden');
    }
  });
}

function askAssistantPreset(key) {
  const item = AI_ANSWERS[key];
  if (!item) return;
  const input = document.getElementById('assistant-query-input');
  if (input) input.value = item.q;
  renderAssistantResponse(item.q, item.a);
}

function handleAssistantSubmit(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('assistant-query-input');
  const raw = input ? input.value.trim() : '';
  if (!raw) {
    askAssistantPreset('kds');
    return;
  }
  const qLower = raw.toLowerCase();
  let matched = null;
  if (qLower.includes('kds') || qLower.includes('intern') || qLower.includes('qc') || qLower.includes('quality')) {
    matched = AI_ANSWERS.kds;
  } else if (qLower.includes('ozone') || qLower.includes('acid') || qLower.includes('research') || qLower.includes('thesis')) {
    matched = AI_ANSWERS.research;
  } else if (qLower.includes('cgpa') || qLower.includes('gpa') || qLower.includes('education') || qLower.includes('buft') || qLower.includes('degree')) {
    matched = AI_ANSWERS.education;
  } else if (qLower.includes('factor') || qLower.includes('visit') || qLower.includes('hams') || qLower.includes('dbl') || qLower.includes('pakiza') || qLower.includes('club')) {
    matched = AI_ANSWERS.factories;
  } else if (qLower.includes('hire') || qLower.includes('email') || qLower.includes('contact') || qLower.includes('interview')) {
    matched = AI_ANSWERS.hire;
  } else {
    matched = {
      q: raw,
      a: "Shuvakor Bhowmik Durjoy is a B.Sc. Textile Engineering graduate (Wet Processing, 2026, 3.01 CGPA) from BGMEA University of Fashion & Technology (BUFT) with hands-on Offline & Online QC internship experience at KDS Textile Mills Ltd, Chattogram. He is proficient in Merchandising, Quality Control, MS Office, Canva, Adobe Photoshop/Illustrator (60-hr certified), and fluent in Bengali & English. Reach him directly at shuvakordurjoy2002@gmail.com or +8801869441992."
    };
  }
  renderAssistantResponse(raw, matched.a);
}

function renderAssistantResponse(question, answer) {
  const out = document.getElementById('assistant-answer-box');
  if (!out) return;
  out.classList.remove('hidden');
  out.innerHTML = `
    <div class="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-1 flex items-center justify-between">
      <span>Verified CV Response</span>
      <button type="button" onclick="copyTextToClipboard(${JSON.stringify(answer).replace(/"/g, '&quot;')})" class="text-[11px] text-stone-500 hover:text-stone-900 underline">Copy Answer</button>
    </div>
    <div class="text-xs font-medium text-stone-500 mb-1.5">Q: "${question.replace(/</g, '&lt;')}"</div>
    <div class="text-sm text-stone-800 leading-relaxed whitespace-pre-line">${answer.replace(/</g, '&lt;')}</div>
  `;
}

function toggleFaq(index) {
  const body = document.getElementById('faq-body-' + index);
  const icon = document.getElementById('faq-icon-' + index);
  if (!body || !icon) return;
  const isHidden = body.classList.contains('hidden');
  if (isHidden) {
    body.classList.remove('hidden');
    icon.textContent = '×';
    icon.classList.add('bg-stone-900', 'text-white');
    icon.classList.remove('bg-white/80', 'text-stone-700');
  } else {
    body.classList.add('hidden');
    icon.textContent = '+';
    icon.classList.remove('bg-stone-900', 'text-white');
    icon.classList.add('bg-white/80', 'text-stone-700');
  }
}

function copyTextToClipboard(text) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast('Copied to clipboard!');
      }).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  } catch (err) {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    showToast('Copied to clipboard!');
  } catch (e) {
    showToast('Ready to copy: ' + text);
  }
  document.body.removeChild(ta);
}

function showToast(msg) {
  const toast = document.getElementById('portfolio-toast');
  const label = document.getElementById('portfolio-toast-msg');
  if (!toast || !label) return;
  label.textContent = msg;
  toast.classList.remove(' opacity-0', 'pointer-events-none', 'translate-y-4');
  toast.classList.add('opacity-100', 'translate-y-0');
  if (window._toastTimer) clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
    toast.classList.remove('opacity-100', 'translate-y-0');
  }, 2800);
}

function openModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) m.classList.remove('hidden');
}

function closeModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) m.classList.add('hidden');
}

function handleDownloadCV() {
  // Check if running on GitHub Pages with external PDF or inside standalone preview
  const link = document.getElementById('direct-pdf-download-link');
  if (link && link.getAttribute('href') && !link.getAttribute('href').startsWith('#')) {
    showToast('Downloading Shuvakor_Bhowmik_Durjoy_CV.pdf...');
    return true;
  }
  openModal('cv-preview-modal');
  return false;
}

function handleQuickMessageSubmit(e) {
  if (e) e.preventDefault();
  const name = (document.getElementById('msg-sender-name')?.value || '').trim() || 'Hiring Team';
  const org = (document.getElementById('msg-sender-org')?.value || '').trim() || 'Apparel Organization';
  const role = (document.getElementById('msg-sender-role')?.value || '').trim() || 'Textile Merchandiser';
  const notes = (document.getElementById('msg-sender-notes')?.value || '').trim() || 'We reviewed your portfolio and would like to schedule an interview.';

  const subject = encodeURIComponent(`Interview Opportunity: ${role} — ${org}`);
  const body = encodeURIComponent(`Dear Shuvakor Bhowmik Durjoy,

${notes}

Best regards,
${name}
${org}`);
  const mailtoUrl = `mailto:shuvakordurjoy2002@gmail.com?subject=${subject}&body=${body}`;

  const previewEl = document.getElementById('composed-outreach-box');
  const mailLink = document.getElementById('composed-mailto-btn');
  const waLink = document.getElementById('composed-whatsapp-btn');

  if (previewEl) previewEl.classList.remove('hidden');
  if (mailLink) mailLink.setAttribute('href', mailtoUrl);
  if (waLink) {
    const waText = encodeURIComponent(`Hi Shuvakor, I am ${name} from ${org} regarding a ${role} opportunity. ${notes}`);
    waLink.setAttribute('href', `https://wa.me/8801869441992?text=${waText}`);
  }
  showToast('Outreach message prepared! Click Send via Email or WhatsApp below.');
}

window.addEventListener('DOMContentLoaded', () => {
  setHeroMode('summary');
  selectPipelineStage('buyer');
  switchWashMethod('ozone');
  startQcLoop();
});
