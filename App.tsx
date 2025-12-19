
import React, { useEffect, useState } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Users, 
  Zap, 
  Target, 
  XCircle, 
  Network,
  Award,
  Clock,
  ExternalLink
} from 'lucide-react';

// --- Types ---
type Language = 'ko' | 'en' | 'ja';

// --- Constants ---
const APPLY_URL = "https://forms.gle/your-google-form-url"; // 실제 지원 폼 링크

const translations = {
  ko: {
    nav: { overview: '프로그램 가치', schedule: '로드맵', outcomes: '기대 성과', apply: '지금 지원하기' },
    hero: {
      badge: '14-Day Global Entry Camp',
      title: <>UNDERDOGS<br /><span className="text-gradient uppercase tracking-tighter">HOUSE JEJU</span></>,
      desc: <>글로벌 진출을 꿈꾸는 창업가를 위한<br /><span className="text-white font-bold border-b-2 border-blue-500/50">14일간의 숙박형 집중 부스팅 프로그램.</span><br />제주에서 3개국 파운더들과 함께 시장 진입을 정복합니다.</>,
      cta: '프로그램 살펴보기',
      loc: 'Jeju, South Korea'
    },
    philosophy: {
      title: <>왜 언더독스 하우스인가?</>,
      desc: "단순한 휴식이나 강의가 아닙니다. 검증된 창업가들과 언더독스의 전문 코치가 결합하여 24시간 치열하게 비즈니스를 가속화합니다.",
      values: [
        { icon: <Users />, title: "선발된 CEO 피어 피드백", text: "엄격한 기준으로 선발된 3개국 창업가들이 서로의 비즈니스를 날카롭게 검증합니다." },
        { icon: <Award />, title: "언더독스 전문 코칭", text: "수천 명의 창업가를 육성한 언더독스의 노하우를 가진 전담 코치가 밀착 가이드합니다." },
        { icon: <Clock />, title: "24시간 몰입 환경", text: "방해 요소가 없는 제주에서 팀원들과 숙식하며 오직 글로벌 진출에만 집중합니다." },
        { icon: <Network />, title: "글로벌 파트너십 & VC", text: "단순 네트워킹을 넘어 실질적인 로컬 파트너십 체결과 VC 매칭을 지원합니다." }
      ]
    },
    participation: {
      badge: 'Elite Founders Only',
      title: '3개국 경쟁을 뚫고 선발된\n10인의 CEO와 함께합니다',
      processTitle: 'Selection Process',
      steps: [
        { label: 'Step 01', title: '서류 심사', desc: '사업성 및 글로벌 적합성 검토' },
        { label: 'Step 02', title: '심층 인터뷰', desc: '팀 역량 및 참여 의지 확인' },
        { label: 'Step 03', title: '피어 스크리닝', desc: '기존 알럼나이 및 파트너 리뷰' },
        { label: 'Step 04', title: '최종 선발', desc: '국가별 쿼터 기반 정예 멤버 확정' }
      ]
    },
    journey: {
      badge: '14-Day Intensive Roadmap',
      title: '현실적인 시장 진입을 위한 설계',
      details: {
        p1: { title: "Trust & Share", more: "서로의 밑바닥까지 공유하는 시간입니다. 단순한 성과 자랑이 아닌, 글로벌 진출 시 가장 두려운 질문을 꺼내놓고 동료들의 냉정한 피드백을 통해 첫 단추를 다시 뀁니다." },
        p2: { title: "Validation Task Force", more: "현지 파운더들이 직접 참여하여 타겟 시장의 리얼리티를 조사합니다. 언더독스 코치와 함께 가격 정책, 진입 채널, 현지 PoC 시나리오를 구체화하고 즉시 실행 가능한 플랜을 도출합니다." },
        p3: { title: "Network & Output", more: "도출된 플랜을 글로벌 VC 앞에서 브리핑합니다. 단순 발표로 끝나지 않고, 실제 현지 협업이 가능한 파트너와 LoI(의향서) 체결 등 실질적인 성과를 만들어냅니다." }
      }
    },
    outcomes: {
      title: "프로그램 종료 후 당신이 얻게 될 것",
      card1: { title: <>현지 창업가가 검증한<br />실전 진출 리포트</>, desc: '추측이 아닌 실제 현지 반응을 기반으로 한 타켓팅, 프라이싱, 유통 전략이 담긴 50페이지 분량의 실행 보고서' },
      card2: { title: <>글로벌 VC 매칭 &<br />파트너십 확약</>, desc: '단순 만남을 넘어선 1:1 VC 미팅 기회와 현지 파트너사와의 PoC 협업 기회 확보' }
    },
    footer: {
      cta: '지금 바로 도전하기',
      desc: '2025년, 당신의 비즈니스가 국경을 넘는 가장 확실한 14일.'
    }
  },
  en: {
    nav: { overview: 'Value', schedule: 'Roadmap', outcomes: 'Outcomes', apply: 'Apply' },
    hero: {
      badge: '14-Day Global Entry Camp',
      title: <>UNDERDOGS<br /><span className="text-gradient uppercase tracking-tighter">HOUSE JEJU</span></>,
      desc: <>For founders dreaming of global expansion,<br /><span className="text-white font-bold border-b-2 border-blue-500/50">A 14-day residential intensive boosting program.</span><br />Finalize your market entry with 3-nation founders in Jeju.</>,
      cta: 'Explore Program',
      loc: 'Jeju, South Korea'
    },
    philosophy: {
      title: <>Why Underdogs House?</>,
      desc: "This isn't just rest or lectures. It's 24/7 business acceleration where proven founders and expert coaches unite.",
      values: [
        { icon: <Users />, title: "Selected CEO Peer Feedback", text: "Founders from 3 nations, selected with strict criteria, sharpen each other's business models." },
        { icon: <Award />, title: "Underdogs Expert Coaching", text: "Coaches with know-how from training thousands of founders provide close-up guidance." },
        { icon: <Clock />, title: "24/7 Immersive Environment", text: "In Jeju, free from distractions, you live and work with peers to focus solely on global expansion." },
        { icon: <Network />, title: "Partnership & VC Matching", text: "We go beyond networking to support actual local partnership agreements and VC matching." }
      ]
    },
    participation: {
      badge: 'Elite Founders Only',
      title: 'Join 10 Selected CEOs\nfrom 3 Countries',
      processTitle: 'Selection Process',
      steps: [
        { label: 'Step 01', title: 'Document Review', desc: 'Business viability & global fit' },
        { label: 'Step 02', title: 'Intensive Interview', desc: 'Team capability & commitment' },
        { label: 'Step 03', title: 'Peer Screening', desc: 'Review by alumni & partners' },
        { label: 'Step 04', title: 'Final Selection', desc: 'Elite members confirmed by quota' }
      ]
    },
    journey: {
      badge: '14-Day Intensive Roadmap',
      title: 'Designed for Realistic Market Entry',
      details: {
        p1: { title: "Trust & Share", more: "A time to share even the deepest challenges. Peer founders provide objective feedback on your global potential from Day 1." },
        p2: { title: "Validation Task Force", more: "Research local market reality with local founders. Refine pricing, channels, and PoC scenarios with Underdogs coaches." },
        p3: { title: "Network & Output", more: "Brief your plan to global VCs. Secure tangible results like LoIs with local partners for actual collaboration." }
      }
    },
    outcomes: {
      title: "What You Will Gain",
      card1: { title: <>Practical Strategy Report<br />Validated by Peers</>, desc: 'A 50-page execution report including targeting, pricing, and distribution strategies based on real local feedback.' },
      card2: { title: <>Global VC Matching &<br />Partnership Pledges</>, desc: 'Go beyond meetings with 1:1 VC opportunities and PoC collaboration deals with local partners.' }
    },
    footer: {
      cta: 'Apply Now',
      desc: 'The most definitive 14 days for your business to cross borders in 2025.'
    }
  },
  ja: {
    nav: { overview: '価値', schedule: 'ロードマップ', outcomes: '成果', apply: '応募する' },
    hero: {
      badge: '14-Day Global Entry Camp',
      title: <>UNDERDOGS<br /><span className="text-gradient uppercase tracking-tighter">HOUSE JEJU</span></>,
      desc: <>海外進출을 꿈꾸는 起業家のための<br /><span className="text-white font-bold border-b-2 border-blue-500/50">14日間の宿泊型集中ブースティングプログラム。</span><br />済州で3カ国のファウンダーと共に市場参入を完遂します。</>,
      cta: 'プログラムを見る',
      loc: 'Jeju, South Korea'
    },
    philosophy: {
      title: <>왜 언더독스 하우스인가?</>,
      desc: "単なる休息や講義ではありません。検証された起業家たちと専門コーチが結合して24時間体制でビジネスを加速させます。",
      values: [
        { icon: <Users />, title: "選抜されたCEOピアフィードバック", text: "厳格な基準で選ばれた3カ国の起業家たちが、互いのビジネスを鋭く検証します。" },
        { icon: <Award />, title: "専門家によるコーチング", text: "数千人の起業家を育成したノウハウを持つ専任コーチが密着ガイドします。" },
        { icon: <Clock />, title: "24時間没入環境", text: "邪魔な要素がない済州で仲間と寝食を共にし、海外進出だけに集中します。" },
        { icon: <Network />, title: "パートナーシップ & VC", text: "単なる交流を超え、実質的な現地パートナーシップ締結とVCマッチングを支援します。" }
      ]
    },
    participation: {
      badge: 'Elite Founders Only',
      title: '3カ国の競争を勝ち抜いた\n10名のCEOと共に',
      processTitle: 'Selection Process',
      steps: [
        { label: 'Step 01', title: '書類審査', desc: '事業性およびグローバル適合性の検討' },
        { label: 'Step 02', title: '深層面接', desc: 'チームの力量と参加意欲の確認' },
        { label: 'Step 03', title: 'ピアスクリーニング', desc: '既存アルムナイおよびパートナーによるレビュー' },
        { label: 'Step 04', title: '最終選抜', desc: '国別クォータに基づく精鋭メンバーの確定' }
      ]
    },
    journey: {
      badge: '14-Day Intensive Roadmap',
      title: '現実的な市場参入のための設計',
      details: {
        p1: { title: "Trust & Share", more: "互いの底辺まで共有する時間です。単なる成果自慢ではなく、海外進出時の最も恐ろしい問いをさらけ出し、仲間の冷静なフィードバックを通じて一歩目を踏み出します。" },
        p2: { title: "Validation Task Force", more: "現地のファウンダーが直接参加し、ターゲット市場のリアリティを調査します。アンダードッグスのコーチと共に価格政策、参入チャネル、現地PoCシナ리오を具体化します。" },
        p3: { title: "Network & Output", more: "導き出されたプランをグローバルVCの前でブリーフィングします。発表だけで終わらず、実際の現地協業が可能なパートナーとのLoI（意向表明書）締結など実質的な成果を作ります。" }
      }
    },
    outcomes: {
      title: "プログラム終了後に得られるもの",
      card1: { title: <>現地起業家が検証した<br />実戦進出レポート</>, desc: '推測ではなく実際の現地反応に基づいたターゲット設定、プライ싱、流通戦略が盛り込まれた実行報告書' },
      card2: { title: <>グローバルVCマッチング &<br />パートナーシップ確약</>, desc: '単なる出会いを超えた1:1のVCミーティング機会と現地パートナー社とのPoC協業機会の確保' }
    },
    footer: {
      cta: '今すぐ挑戦する',
      desc: '2025年、あなたのビジネスが国境を越える最も確実な14日間。'
    }
  }
};

const Modal = ({ isOpen, onClose, title, content }: { isOpen: boolean, onClose: () => void, title: string, content: string }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md" onClick={onClose}>
      <div className="bg-zinc-900 border border-white/10 p-10 rounded-[2rem] max-w-xl w-full relative animate-fade-in-up" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors">
          <XCircle size={32} />
        </button>
        <h4 className="text-3xl font-black mb-6 italic">{title}</h4>
        <p className="text-zinc-400 text-lg leading-relaxed">{content}</p>
        <button onClick={onClose} className="mt-10 w-full py-4 bg-white text-black font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all">
          Close
        </button>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<Language>('ko');
  const [modalData, setModalData] = useState<{ title: string, content: string } | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-1000 ${isScrolled ? 'bg-black/90 backdrop-blur-2xl py-4 border-b border-white/5' : 'bg-transparent py-10'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="font-black text-2xl tracking-tighter block hover:opacity-70 transition-opacity">
            UNDERDOGS<span className="text-blue-500">.</span>
          </a>
          
          <div className="flex items-center gap-10">
            <div className="hidden lg:flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
              <a href="#overview" className="hover:text-white transition-colors">{t.nav.overview}</a>
              <a href="#schedule" className="hover:text-white transition-colors">{t.nav.schedule}</a>
              <a href="#outcomes" className="hover:text-white transition-colors">{t.nav.outcomes}</a>
            </div>

            <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 ml-4 ring-1 ring-white/5">
              {(['ko', 'en', 'ja'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l as Language)}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase transition-all duration-500 ${lang === l ? 'bg-white text-black shadow-lg scale-105' : 'text-zinc-500 hover:text-white'}`}
                >
                  {l}
                </button>
              ))}
            </div>

            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] px-8 py-3.5 bg-blue-600 text-white rounded-full hover:bg-white hover:text-black transition-all shadow-xl shadow-blue-500/20">
              {t.nav.apply} <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-black">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover grayscale opacity-40 brightness-[0.3] scale-[1.08]">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-rocky-coast-and-waves-34537-large.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black -z-10" />
        <div className="animate-fade-in-up px-6 relative z-10 max-w-6xl w-full">
          <span className="px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] bg-blue-600/20 text-blue-400 border border-blue-500/30 mb-10 inline-block backdrop-blur-md">
            {t.hero.badge}
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-[8rem] font-black mb-12 leading-[0.85] tracking-tighter">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-16 font-medium">
            {t.hero.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#overview" className="group bg-white text-black px-12 py-5 rounded-full font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl">
              {t.hero.cta} <ArrowRight size={20} />
            </a>
            <div className="flex items-center gap-4 text-zinc-200 px-8 py-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
              <MapPin size={20} className="text-blue-500" />
              <span className="font-bold tracking-[0.2em] uppercase text-xs">{t.hero.loc}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Philosophy Section */}
      <section id="overview" className="py-40 px-6 max-w-7xl mx-auto scroll-mt-24">
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">{t.philosophy.title}</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">{t.philosophy.desc}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.philosophy.values.map((v: any, i: number) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-zinc-900/50 border border-white/5 hover:bg-zinc-900 transition-all group">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 text-blue-500 group-hover:scale-110 transition-transform">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{v.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Participation & Selection */}
      <section className="bg-zinc-950 py-40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-6 block">{t.participation.badge}</span>
              <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter whitespace-pre-line">{t.participation.title}</h2>
              <p className="text-zinc-400 text-xl leading-relaxed">
                단순한 네트워킹을 넘어, 각 국가를 대표하는 가장 야심 찬 창업가 10명만이 이 치열한 부스팅 캠프에 탑승할 수 있습니다.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {t.participation.steps.map((step: any, i: number) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
                  <span className="text-blue-500 font-black text-xs block mb-2">{step.label}</span>
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-zinc-500 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Roadmap */}
      <section id="schedule" className="py-40 px-6 max-w-7xl mx-auto scroll-mt-24">
        <div className="mb-32">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">{t.journey.title}</h2>
          <p className="text-xl text-zinc-400 max-w-2xl">{t.journey.badge}</p>
        </div>
        <div className="space-y-32">
          {Object.entries(t.journey.details).map(([key, detail]: any, i: number) => (
            <div key={key} className="relative pl-16 border-l-2 border-zinc-800 group">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
              <div className="grid md:grid-cols-2 gap-16">
                <div>
                  <span className="text-blue-500 font-black text-4xl italic mb-6 block">0{i+1}.</span>
                  <h4 className="text-4xl font-black mb-8 italic">{detail.title}</h4>
                </div>
                <div className="bg-zinc-900 p-10 rounded-[2.5rem] border border-white/5">
                  <p className="text-zinc-400 text-lg leading-relaxed mb-8 line-clamp-3">
                    {detail.more}
                  </p>
                  <button 
                    onClick={() => setModalData({ title: detail.title, content: detail.more })}
                    className="flex items-center gap-2 text-blue-500 font-black text-xs uppercase tracking-widest hover:text-white transition-colors"
                  >
                    Read More <Zap size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Outcomes Section */}
      <section id="outcomes" className="py-40 px-6 max-w-7xl mx-auto scroll-mt-24 bg-zinc-950 rounded-[4rem] border border-white/5">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">{t.outcomes.title}</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          {[t.outcomes.card1, t.outcomes.card2].map((card: any, i: number) => (
            <div key={i} className="p-16 rounded-[3.5rem] bg-zinc-900 border border-white/5 flex flex-col justify-between group hover:border-blue-500/30 transition-all">
              <div>
                {i === 0 ? <Target size={64} className="text-blue-500 mb-10" /> : <Network size={64} className="text-blue-500 mb-10" />}
                <h3 className="text-4xl font-bold mb-8 leading-tight">{card.title}</h3>
                <p className="text-xl text-zinc-500 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer & CTA */}
      <footer className="py-40 px-6 text-center bg-black relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-blue-600/10 blur-[150px] -z-10 rounded-full" />
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter uppercase">{t.footer.cta}</h2>
          <p className="text-zinc-500 mb-16 max-w-xl mx-auto text-xl leading-relaxed">{t.footer.desc}</p>
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-white text-black px-20 py-7 rounded-full font-black text-2xl hover:bg-blue-600 hover:text-white transition-all shadow-2xl">
            {t.footer.cta} <ExternalLink size={24} />
          </a>
        </div>
        <div className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em] gap-8">
          <div className="text-2xl tracking-tighter text-zinc-100">UNDERDOGS<span className="text-blue-500">.</span></div>
          <div>&copy; 2025 Underdogs House Jeju. All rights reserved.</div>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>

      {/* Detail Modal */}
      <Modal 
        isOpen={!!modalData} 
        onClose={() => setModalData(null)} 
        title={modalData?.title || ''} 
        content={modalData?.content || ''} 
      />
    </div>
  );
};

export default App;
