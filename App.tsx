
import React, { useEffect, useState } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Users, 
  Zap, 
  Target, 
  Globe, 
  CheckCircle2, 
  XCircle, 
  Network
} from 'lucide-react';

// --- Types ---
type Language = 'ko' | 'en' | 'ja';

const translations = {
  ko: {
    nav: { overview: '개요', schedule: '일정', outcomes: '성과', apply: '지원하기' },
    hero: {
      badge: 'Global Founder Residency',
      title: <>UNDERDOGS<br /><span className="text-gradient">HOUSE JEJU</span></>,
      desc: <>글로벌 진출을 고민하는 창업가들이 함께 살고·일하고·서로의 진출을 대신 고민해주는 <span className="text-white font-bold">14일간</span>의 하이브리드 레지던시</>,
      cta: '자세히 보기',
      loc: 'Jeju, South Korea'
    },
    philosophy: {
      title: <>휴식이 아닌,<br /><span className="text-blue-500">실전 검증</span>을 위한 14일</>,
      desc: "회사를 멈추지 않은 채, 2주간 함께 살아보며 '해외 진출'이라는 하나의 질문을 공동으로 검증합니다. 정해진 커리큘럼 없이 창업가들 간의 밀도 있는 상호 피드백에 집중합니다.",
      quote: "Work + Residency Hybrid",
      subquote: "우리는 단순한 숙소가 아닌, 비즈니스 가속화를 위한 전초기지입니다.",
      badTitle: "Underdogs House는 아닙니다",
      badItems: ["단순 워케이션 (휴식 중심)", "강의 중심 레지던시 (교육)", "멘토 중심의 일방적 구조", "관광 위주의 스케줄"],
      goodTitle: "Underdogs House의 핵심 가치",
      goodItems: ["창업가 ↔ 창업가 간 상호 검증", "밀도 있는 피드백 공동생활", "실질적인 해외 네트워크 확보", "성과 중심의 14일 체류"]
    },
    participation: {
      badge: 'Participation Structure',
      title: '누가 함께 하나요?',
      unit: '10명 내외',
      unitDesc: '각 팀의 대표 및 핵심 결정권자 1인 참여',
      nations: '3개 국가 연합 참여',
      nationsDesc: '특정 국가 편중 없이, 항상 상호 검증이 가능한 다국적 창업가 네트워크를 보장합니다.'
    },
    journey: {
      badge: '14-Day Roadmap',
      title: '프로그램 구성',
      desc: '검증에서 연결까지, 밀도 있는 14일의 집중 시간',
      p1: { date: 'Day 01-04', title: 'Trust & Share', items: ['오리엔테이션 및 사업 공유 세션', '제주 서부 자연 속에서의 신뢰 형성', '"가장 두려운 질문"을 꺼내놓는 안전한 공간'], key: 'Key: 사업 현황 공유', keyDesc: '자랑이 아닌, 고민을 공유합니다. 동료들이 당신의 해외 진출 가능성을 냉정하게 바라보는 첫 단계입니다.' },
      p2: { date: 'Day 05-11', title: 'Validation Task Force', sub: 'The Core Period', items: ['국가 교차 팀을 통한 현지 리얼리티 조사', '현지 창업가가 말해주는 "진짜 시장 반응"', '제주 창업 생태계 체험 및 로컬 스타트업 네트워킹', '1:1 집중 피드백 및 전략 수정'], grid: ['현지 시장 조사', '솔직 피드백 데이', '제주 생태계 체험', '수정 피칭', '진입 시나리오 도출', 'PoC 파트너 제안'] },
      p3: { date: 'Day 12-14', title: 'Network & Output', items: ['글로벌 VC 밋업 및 결과 브리핑', '후속 협업을 위한 파트너십 체결', '14일간의 여정 마무리 및 귀가'], out: 'Output Result', outDesc: '"단순한 추측을 넘어선, 동료 창업가들이 직접 검증한 70% 이상의 실전 진출 성공 로드맵"' }
    },
    outcomes: {
      card1: { title: <>구체화된<br />해외 진출 전략</>, desc: '내부의 시선이 아닌, 현지 창업가의 시선으로 걸러낸 타깃, 가격, 진입 방식에 대한 솔직한 전략 보고서', tags: ['진출 국가 확정', '수익 모델 검증', '금지 리스트'] },
      card2: { title: <>강력한<br />해외 파트너십</>, desc: '함께 14일간 숙식하며 생사를 같이한 해외 창업가 파트너들과 글로벌 VC와의 실질적인 연동', tags: ['PoC 현지 연결', '글로벌 VC 매칭', 'Founder Community'] }
    },
    footer: {
      title: 'JOIN THE RESIDENCY',
      desc: '단순한 방문이 아닌, 비즈니스의 다음 단계를 함께 설계할 10명의 용기 있는 파운더를 기다립니다.',
      cta: '지금 바로 지원하기',
      privacy: '개인정보처리방침',
      terms: '이용약관'
    }
  },
  en: {
    nav: { overview: 'Overview', schedule: 'Schedule', outcomes: 'Outcomes', apply: 'Apply Now' },
    hero: {
      badge: 'Global Founder Residency',
      title: <>UNDERDOGS<br /><span className="text-gradient">HOUSE JEJU</span></>,
      desc: <>A <span className="text-white font-bold">14-day</span> hybrid residency where founders aiming for global expansion live, work, and solve market-entry challenges together.</>,
      cta: 'Learn More',
      loc: 'Jeju, South Korea'
    },
    philosophy: {
      title: <>14 Days for<br /><span className="text-blue-500">Validation</span>, Not Rest</>,
      desc: "Stay for 2 weeks without pausing your business to jointly validate your 'Global Entry' strategy. We focus on high-density peer feedback without a fixed curriculum.",
      quote: "Work + Residency Hybrid",
      subquote: "We are more than a guest house; we are an outpost for business acceleration.",
      badTitle: "What Underdogs House is NOT",
      badItems: ["Simple Workation (Rest-oriented)", "Lecture-based Residency (Education)", "Mentor-led top-down structure", "Tourism-heavy schedule"],
      goodTitle: "Core Values of Underdogs House",
      goodItems: ["Founder-to-Founder Cross-validation", "High-density Feedback & Living", "Securing Practical Global Networks", "Performance-oriented 14-day Stay"]
    },
    participation: {
      badge: 'Participation Structure',
      title: 'Who Joins Us?',
      unit: '~10 Founders',
      unitDesc: 'One core decision-maker or representative per team',
      nations: '3-Nation Alliance',
      nationsDesc: 'Guaranteed multi-national network for constant cross-validation without single-country bias.'
    },
    journey: {
      badge: '14-Day Roadmap',
      title: 'Program Structure',
      desc: 'High-density 14 days from validation to connection',
      p1: { date: 'Day 01-04', title: 'Trust & Share', items: ['Orientation & Business Sharing Sessions', 'Building Trust in Jeju\'s Nature', 'A Safe Space for "Scary Questions"'], key: 'Key: Business Sharing', keyDesc: 'Share challenges, not just wins. This is the first step where peers assess your global potential objectively.' },
      p2: { date: 'Day 05-11', title: 'Validation Task Force', sub: 'The Core Period', items: ['Market Reality Research via Cross-border Teams', 'Direct Market Feedback from Local Founders', 'Jeju Startup Ecosystem Experience & Networking', '1:1 Intensive Feedback & Strategy Pivot'], grid: ['Market Research', 'Feedback Day', 'Jeju Ecosystem', 'Strategy Pivot', 'Entry Scenario', 'PoC Proposal'] },
      p3: { date: 'Day 12-14', title: 'Network & Output', items: ['Global VC Meetups & Result Briefing', 'Signing Partnerships for Follow-up', 'Wrapping Up the 14-day Journey'], out: 'Output Result', outDesc: '"A practical global entry roadmap validated by local peers, moving beyond simple assumptions."' }
    },
    outcomes: {
      card1: { title: <>Defined<br />Global Strategy</>, desc: 'A candid strategy report on targets, pricing, and entry methods, filtered through local founders\' perspectives.', tags: ['Target Country Confirmed', 'Revenue Model Validation', 'Avoid List'] },
      card2: { title: <>Powerful<br />Global Partnership</>, desc: 'Practical linkage with global VCs and international founder partners built through 14 days of shared living.', tags: ['Local PoC Connections', 'Global VC Matching', 'Founder Community'] }
    },
    footer: {
      title: 'JOIN THE RESIDENCY',
      desc: 'We are looking for 10 courageous founders to design the next phase of their business together.',
      cta: 'Apply Now',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  },
  ja: {
    nav: { overview: '概要', schedule: '日程', outcomes: '成果', apply: '応募する' },
    hero: {
      badge: 'Global Founder Residency',
      title: <>UNDERDOGS<br /><span className="text-gradient">HOUSE JEJU</span></>,
      desc: <>海外進出を模索する起業家たちが共に住み・働き・互いの進出を共に悩む<span className="text-white font-bold">14日間</span>のハイブリッド・レジ덴시</>,
      cta: '詳しく見る',
      loc: 'Jeju, South Korea'
    },
    philosophy: {
      title: <>休息ではなく、<br /><span className="text-blue-500">実戦検証</span>のための14日間</>,
      desc: "事業を止めることなく2週間共に過ごし、「海外進出」という問いを共同で検証します。決まったカリキュラムはなく、起業家同士の密度の高いフィードバックに集中します。",
      quote: "Work + Residency Hybrid",
      subquote: "単なる宿泊施設ではなく、ビジネス加速のための前哨基地です。",
      badTitle: "Underdogs Houseではありません",
      badItems: ["単純なワーケーション（休息中心）", "講義中心のレジデンシー（教育）", "メンター中心の一方的な構造", "観光中心のスケジュール"],
      goodTitle: "Underdogs Houseの核心価値",
      goodItems: ["起業家 ↔ 起업家間の相互検証", "密度の高いフィードバック共同生活", "実質的な海外ネットワークの確保", "成果中心の14日間滞在"]
    },
    participation: {
      badge: 'Participation Structure',
      title: '誰が参加しますか？',
      unit: '10名程度',
      unitDesc: '各チームの代表および核心的な意思決定者1名が参加',
      nations: '3カ国連合の参加',
      nationsDesc: '特定の国に偏ることなく、常に相互検証が可能な多国籍起業家ネットワークを保証します。'
    },
    journey: {
      badge: '14-Day Roadmap',
      title: 'プログラム構成',
      desc: '検証から連携まで、密度の高い14日間の集中時間',
      p1: { date: 'Day 01-04', title: 'Trust & Share', items: ['オリエンテーションおよび事業共有セッション', '済州西部の自然の中での信頼構築', '「最も恐れている問い」を打ち明ける安全な空間'], key: 'Key: 事業現況の共有', keyDesc: '自慢ではなく、悩みを共有します。仲間たちがあなたの海外進出の可能性를 冷静に見つめる最初の段階です。' },
      p2: { date: 'Day 05-11', title: 'Validation Task Force', sub: 'The Core Period', items: ['国境を越えたチームによる現地リアリティ調査', '現地の起業家が語る「本当の市場反応」', '済州の起業エコシステム体験およびネットワーク', '1:1の集中フィードバックおよび戦略修正'], grid: ['現地市場調査', 'フィードバックデイ', 'エコシステム体験', 'ピッチ修正', '進出シナリオ', 'PoC提案'] },
      p3: { date: 'Day 12-14', title: 'Network & Output', items: ['グローバルVCミートアップおよび結果報告', 'フォローアップのためのパートナーシップ締結', '14日間の旅の締めくくりと帰路'], out: 'Output Result', outDesc: '「単純な推測を超え、仲間の起業家たちが直接検証した70%以上の実戦進出成功ロードマップ」' }
    },
    outcomes: {
      card1: { title: <>具体化された<br />海外進出戦略</>, desc: '内部の視点ではなく、現地の起業家の視点でフィルタリングされたターゲット、価格、参入方式に関する率直な戦略報告書', tags: ['進出国の確定', '収益モデルの検証', 'NGリスト'] },
      card2: { title: <>強力な<br />海外パートナーシップ</>, desc: '共に14日間寝食を共にし、苦楽を共にした海外の起業家パートナーとグローバルVCとの実質的な連動', tags: ['現地PoC連携', 'グローバルVCマッチング', '起業家コミュニティ'] }
    },
    footer: {
      title: 'JOIN THE RESIDENCY',
      desc: '単なる訪問ではなく、ビジネスの次の段階を共に設計する10명의 용기 있는 파운더를 기다립니다.',
      cta: '今すぐ応募する',
      privacy: 'プライバシーポリシー',
      terms: '利用規約'
    }
  }
};

// --- Utility Components ---

const Section = ({ children, className = "", id = "" }: { children?: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-32 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24 ${className}`}>
    {children}
  </section>
);

const Badge = ({ children }: { children?: React.ReactNode }) => (
  <span className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] bg-white/10 text-white border border-white/20 mb-8 inline-block backdrop-blur-md">
    {children}
  </span>
);

const ComparisonCard = ({ title, items, type }: { title: string, items: string[], type: 'bad' | 'good' }) => (
  <div className={`p-8 rounded-2xl border transition-all duration-500 hover:scale-[1.02] ${type === 'bad' ? 'border-red-500/20 bg-red-500/5' : 'border-blue-500/20 bg-blue-500/5'}`}>
    <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
      {type === 'bad' ? <XCircle className="text-red-500" size={20} /> : <CheckCircle2 className="text-blue-500" size={20} />}
      {title}
    </h4>
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
          <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${type === 'bad' ? 'bg-red-500/50' : 'bg-blue-500/50'}`} />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

// --- Content Sections ---

const Hero = ({ t }: { t: any }) => (
  <div className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-black">
    {/* Cinematic Background Video */}
    <div className="absolute inset-0 -z-20 overflow-hidden">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="w-full h-full object-cover grayscale opacity-50 brightness-[0.35] scale-[1.12]"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-rocky-coast-and-waves-34537-large.mp4" type="video/mp4" />
      </video>
    </div>

    {/* Film Grain & Noise Overlay */}
    <div className="absolute inset-0 -z-15 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
    
    {/* Radial Overlay for contrast */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black -z-10" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] -z-10" />
    
    {/* Floating Light Effect */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-blue-600/10 blur-[180px] rounded-full -z-10 animate-pulse transition-all duration-[3000ms]" />
    
    <div className="animate-fade-in-up px-6 relative z-10 max-w-5xl">
      <Badge>{t.hero.badge}</Badge>
      <h1 className="text-6xl sm:text-7xl md:text-9xl font-black mb-10 leading-[0.9] tracking-tighter drop-shadow-2xl">
        {t.hero.title}
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-16 drop-shadow-xl opacity-90 font-medium">
        {t.hero.desc}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <a href="#overview" className="group bg-white text-black px-12 py-5 rounded-full font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-white/5">
          {t.hero.cta} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <div className="flex items-center gap-4 text-gray-200 px-8 py-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-colors">
          <MapPin size={20} className="text-blue-500" />
          <span className="font-semibold tracking-wide uppercase text-sm">{t.hero.loc}</span>
        </div>
      </div>
    </div>
  </div>
);

const Philosophy = ({ t }: { t: any }) => (
  <Section id="overview">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <div>
        <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
          {t.philosophy.title}
        </h2>
        <p className="text-lg text-gray-400 mb-10 leading-relaxed">
          {t.philosophy.desc}
        </p>
        <div className="p-8 border-l-4 border-blue-500 bg-blue-500/5 rounded-r-2xl">
           <p className="text-xl text-white font-medium italic mb-2">"{t.philosophy.quote}"</p>
           <p className="text-sm text-gray-500">{t.philosophy.subquote}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <ComparisonCard title={t.philosophy.badTitle} items={t.philosophy.badItems} type="bad" />
        <ComparisonCard title={t.philosophy.goodTitle} items={t.philosophy.goodItems} type="good" />
      </div>
    </div>
  </Section>
);

const Participation = ({ t }: { t: any }) => (
  <div className="bg-zinc-950 py-32 border-y border-white/5">
    <Section>
      <div className="text-center mb-20">
        <Badge>{t.participation.badge}</Badge>
        <h2 className="text-4xl md:text-5xl font-bold">{t.participation.title}</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-12 rounded-3xl bg-white/5 border border-white/10 text-center flex flex-col items-center justify-center">
          <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20">
            <Users className="text-blue-500" size={40} />
          </div>
          <h3 className="text-5xl font-black mb-4 tracking-tighter">{t.participation.unit}</h3>
          <p className="text-gray-400 font-medium">{t.participation.unitDesc}</p>
        </div>
        <div className="p-12 rounded-3xl bg-white/5 border border-white/10 text-center col-span-2 flex flex-col justify-center">
          <div className="flex justify-center gap-16 mb-12">
            {[{ flag: "🇰🇷", label: "KOREA" }, { flag: "🇯🇵", label: "JAPAN" }, { flag: "🇮🇳", label: "INDIA" }].map(country => (
              <div key={country.label} className="flex flex-col items-center gap-4 group">
                <span className="text-6xl group-hover:scale-110 transition-transform cursor-default">{country.flag}</span>
                <span className="font-black text-sm tracking-widest text-gray-500 group-hover:text-white transition-colors">{country.label}</span>
              </div>
            ))}
          </div>
          <h3 className="text-3xl font-bold mb-4">{t.participation.nations}</h3>
          <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">{t.participation.nationsDesc}</p>
        </div>
      </div>
    </Section>
  </div>
);

const Journey = ({ t }: { t: any }) => (
  <Section id="schedule">
    <div className="mb-20">
      <Badge>{t.journey.badge}</Badge>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.journey.title}</h2>
      <p className="text-gray-400 text-lg">{t.journey.desc}</p>
    </div>
    <div className="space-y-16">
      <div className="relative pl-12 border-l-2 border-white/10 group">
        <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-black border-2 border-blue-500 group-hover:scale-125 transition-transform duration-300" />
        <div className="mb-6 flex items-center gap-6">
          <span className="text-blue-500 font-black text-3xl tracking-tighter italic uppercase">{t.journey.p1.date}</span>
          <span className="h-px bg-gradient-to-r from-white/20 to-transparent flex-grow" />
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-3xl font-bold mb-6 italic">{t.journey.p1.title}</h4>
            <ul className="space-y-4 text-gray-400 text-lg">
              {t.journey.p1.items.map((item: string, i: number) => <li key={i} className="flex gap-3"><span>•</span> {item}</li>)}
            </ul>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <h5 className="font-bold mb-3 flex items-center gap-2 text-white"><Zap size={18} className="text-yellow-400" /> {t.journey.p1.key}</h5>
            <p className="text-gray-400">{t.journey.p1.keyDesc}</p>
          </div>
        </div>
      </div>
      <div className="relative pl-12 border-l-2 border-white/10 group">
        <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-black border-2 border-blue-500 group-hover:scale-125 transition-transform duration-300" />
        <div className="mb-6 flex items-center gap-6">
          <span className="text-blue-500 font-black text-3xl tracking-tighter italic uppercase">{t.journey.p2.date}</span>
          <span className="h-px bg-gradient-to-r from-white/20 to-transparent flex-grow" />
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-3xl font-bold mb-6 italic">{t.journey.p2.title}</h4>
            <p className="text-blue-400 font-bold mb-6 text-lg uppercase tracking-wider">{t.journey.p2.sub}</p>
            <ul className="space-y-4 text-gray-400 text-lg">
              {t.journey.p2.items.map((item: string, i: number) => <li key={i} className="flex gap-3"><span>•</span> {item}</li>)}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
             {t.journey.p2.grid.map((task: string, i: number) => (
               <div key={i} className="text-sm font-bold p-4 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-center hover:bg-white/10 transition-colors">
                 {task}
               </div>
             ))}
          </div>
        </div>
      </div>
      <div className="relative pl-12 border-l-2 border-white/10 group">
        <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-black border-2 border-blue-500 group-hover:scale-125 transition-transform duration-300" />
        <div className="mb-6 flex items-center gap-6">
          <span className="text-blue-500 font-black text-3xl tracking-tighter italic uppercase">{t.journey.p3.date}</span>
          <span className="h-px bg-gradient-to-r from-white/20 to-transparent flex-grow" />
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-3xl font-bold mb-6 italic">{t.journey.p3.title}</h4>
            <ul className="space-y-4 text-gray-400 text-lg">
              {t.journey.p3.items.map((item: string, i: number) => <li key={i} className="flex gap-3"><span>•</span> {item}</li>)}
            </ul>
          </div>
          <div className="bg-blue-600/10 p-8 rounded-2xl border border-blue-500/30">
            <h5 className="font-bold mb-3 flex items-center gap-2 text-blue-400"><Globe size={18} /> {t.journey.p3.out}</h5>
            <p className="text-gray-300 italic text-lg leading-relaxed">{t.journey.p3.outDesc}</p>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

const Outcomes = ({ t }: { t: any }) => (
  <Section id="outcomes">
    <div className="grid lg:grid-cols-2 gap-12">
      <div className="p-16 rounded-[3rem] bg-zinc-900 border border-white/5 flex flex-col justify-between hover:bg-zinc-800/80 transition-colors duration-500">
        <div>
          <Target className="text-blue-500 mb-10" size={56} />
          <h3 className="text-4xl font-bold mb-6 leading-tight">{t.outcomes.card1.title}</h3>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">{t.outcomes.card1.desc}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {t.outcomes.card1.tags.map((tag: string) => <span key={tag} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-gray-400 uppercase tracking-widest">{tag}</span>)}
        </div>
      </div>
      <div className="p-16 rounded-[3rem] bg-zinc-900 border border-white/5 flex flex-col justify-between hover:bg-zinc-800/80 transition-colors duration-500">
        <div>
          <Network className="text-blue-500 mb-10" size={56} />
          <h3 className="text-4xl font-bold mb-6 leading-tight">{t.outcomes.card2.title}</h3>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">{t.outcomes.card2.desc}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {t.outcomes.card2.tags.map((tag: string) => <span key={tag} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-gray-400 uppercase tracking-widest">{tag}</span>)}
        </div>
      </div>
    </div>
  </Section>
);

const Footer = ({ t }: { t: any }) => (
  <footer className="py-32 px-6 border-t border-white/5 text-center bg-zinc-950 relative overflow-hidden">
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-blue-600/5 blur-[120px] -z-10 rounded-full" />
    <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter">{t.footer.title}</h2>
    <p className="text-gray-400 mb-16 max-w-xl mx-auto text-lg">{t.footer.desc}</p>
    <button className="group relative bg-white text-black px-16 py-6 rounded-full font-bold text-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-2xl shadow-white/10">
      {t.footer.cta}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity -z-10" />
    </button>
    <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm gap-6">
      <div className="font-black tracking-tighter text-lg text-gray-400">UNDERDOGS<span className="text-blue-500">.</span></div>
      <div>&copy; 2024 Underdogs House Jeju. All rights reserved.</div>
      <div className="flex gap-8">
        <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
        <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
      </div>
    </div>
  </footer>
);

// --- Main App Component ---

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<Language>('ko');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-black selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${isScrolled ? 'bg-black/95 backdrop-blur-xl py-4 border-b border-white/10 shadow-2xl' : 'bg-transparent py-10'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="font-black text-2xl tracking-tighter block hover:opacity-80 transition-opacity">
            UNDERDOGS<span className="text-blue-500">.</span>
          </a>
          
          <div className="flex items-center gap-10">
            <div className="hidden lg:flex gap-10 text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400">
              <a href="#overview" className="hover:text-white transition-colors block relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-blue-500 after:transition-all hover:after:w-full">{t.nav.overview}</a>
              <a href="#schedule" className="hover:text-white transition-colors block relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-blue-500 after:transition-all hover:after:w-full">{t.nav.schedule}</a>
              <a href="#outcomes" className="hover:text-white transition-colors block relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-blue-500 after:transition-all hover:after:w-full">{t.nav.outcomes}</a>
            </div>

            <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 ml-4">
              {(['ko', 'en', 'ja'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase transition-all ${lang === l ? 'bg-white text-black shadow-lg' : 'text-gray-500 hover:text-white'}`}
                >
                  {l}
                </button>
              ))}
            </div>

            <a href="#contact" className="hidden sm:block text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-3 bg-white text-black border border-white/20 rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
              {t.nav.apply}
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main>
        <Hero t={t} />
        <Philosophy t={t} />
        <Participation t={t} />
        <Journey t={t} />
        <Outcomes t={t} />
      </main>

      <div id="contact" className="scroll-mt-24">
        <Footer t={t} />
      </div>
    </div>
  );
};

export default App;
