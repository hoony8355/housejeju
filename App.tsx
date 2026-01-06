
import React, { useEffect, useState } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Users, 
  Target, 
  XCircle, 
  Network,
  Award,
  Calendar,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Briefcase,
  Laptop,
  Zap,
  ChevronRight,
  ChevronLeft,
  Building2,
  Rocket
} from 'lucide-react';

// --- Types ---
type Language = 'ko' | 'en' | 'ja' | 'id';

// --- Constants ---
// const APPLY_URL = "https://forms.gle/your-google-form-url"; // Removed in favor of internal form

const translations = {
  ko: {
    nav: { overview: '프로그램 철학', schedule: '커리큘럼 안내', specs: '참여 대상', apply: '신청하기' },
    hero: {
      badge: 'Global Founder Residency',
      title: <>UNDERDOGS<br /><span className="text-gradient uppercase tracking-tighter">HOUSE JEJU</span></>,
      desc: <>
        <span className="text-blue-400 font-bold">책상 위 계획을 멈추고<br/>글로벌 시장에서 가능성을 확인할 시간</span><br /><br />
        4개국(KR, JP, IN, ID) 창업가들이 제주에 모여<br />
        비즈니스 본질에 몰입하고, 실질적인 성장을 만듭니다.
      </>,
      cta: '커리큘럼 상세 보기',
      loc: 'Jeju, South Korea'
    },
    specs: {
      title: "참여 대상 및 규모",
      items: [
        { label: "기간", value: "2026년 5월 7일부터 5월 20일", icon: <Calendar size={20} /> },
        { label: "장소", value: "제주도 일대 (숙소+오피스)", icon: <MapPin size={20} /> },
        { label: "대상", value: "실행력 있는 창업가 & C-Level", icon: <Briefcase size={20} /> },
        { label: "규모", value: "4개국(한국, 일본, 인도, 인도네시아) 8개 기업", icon: <Users size={20} /> },
      ]
    },
    philosophy: {
      title: <>단순한 배움이 아닌,<br/><span className="text-blue-500">비즈니스 확장을 위한 시간입니다.</span></>,
      desc: "우리는 일방적인 강의를 지양합니다. 각자의 비즈니스 모델을 들고 와서, 글로벌 파운더들과 함께 치열하게 고민하고 답을 찾아가는 '성장의 장'입니다.",
      cards: [
        { 
          title: "Execution & Insight", 
          desc: "계획에 머물지 않습니다. 4개국 창업가와 함께 당신의 전략을 공유하고, 다양한 시각에서 인사이트를 확보합니다.",
          icon: <Target />
        },
        { 
          title: "Global Connection", 
          desc: "혼자만의 고민에서 벗어나십시오. 서로 다른 배경을 가진 파운더들과 깊이 있게 교류하며 생각의 확장을 경험합니다.",
          icon: <MessageCircle />
        },
        { 
          title: "Guaranteed Office Hour", 
          desc: "비즈니스는 계속되어야 합니다. 매일 오전은 온전히 개인 업무 시간으로 보장하여 본업과 성장을 동시에 챙깁니다.",
          icon: <Laptop />
        },
        { 
          title: "Real Business Impact", 
          desc: "단순한 친목 모임이 아닙니다. 모든 참가자는 청자가 아닌 기여자(Contributor)로서, 서로의 비즈니스에 임팩트를 더합니다.",
          icon: <Zap />
        }
      ]
    },
    schedule: {
      title: "14 Days Curriculum",
      subtitle: "전략 점검부터 글로벌 확장까지, 실행하는 창업가를 위한 14일의 로드맵",
      weeks: [
        {
          id: "week1",
          period: "Week 01 : 핵심 문제 정의 (Focus)",
          days: "Day 1 - Day 4",
          theme: "방향이 명확해야, 실행에 힘이 실립니다.",
          desc: "막연한 글로벌 진출이 아닌, '지금 해결해야 할 핵심 과제(MQ)'를 구체화합니다. 4개국 동료들과 신뢰를 쌓고 솔직한 피드백을 시작합니다.",
          details: [
            "[필수] Main Question(MQ) 정의 및 공유",
            "[필수] 4개국 파운더 상호 피드백 세션",
            "[선택] 제주 로컬 인사이트 탐방",
            "[필수] 1:1 페어링 커피챗"
          ]
        },
        {
          id: "week2",
          period: "Week 02 : 가설 검증 및 고도화 (Deep Dive)",
          days: "Day 5 - Day 9",
          theme: "다양한 관점이 더해질수록 전략은 정교해집니다.",
          desc: "수립한 가설을 바탕으로 국가별(KR/JP/IN/ID) 관점에서 리스크를 점검합니다. 동료들의 피드백을 통해 전략을 수정하고 고도화합니다.",
          details: [
            "[필수] 국가별 시장 리서치 및 전략 고도화",
            "[필수] CEO 관점 의사결정 시뮬레이션",
            "[보장] 매일 오전 Office Hour (본업 집중)",
            "[선택] UDHJ 네트워킹 데이 (로컬 창업가)"
          ]
        },
        {
          id: "week3",
          period: "Week 03 : 성과 공유 및 확장 (Expansion)",
          days: "Day 10 - Day 14",
          theme: "결국 해내는 사람은 결과로 증명합니다.",
          desc: "글로벌 VC와 파트너 앞에서 당신의 비즈니스 논리를 펼치십시오. 14일간의 과정을 정리하고, 다음 단계로 나아갈 로드맵을 확정합니다.",
          details: [
            "[필수] 글로벌 VC/파트너 대상 피치",
            "[필수] 최종 향후 전략(Next Step) 발표",
            "[필수] 활동 회고 및 후속 파트너 매칭",
            "[선택] Closing Dinner & 네트워킹"
          ]
        }
      ]
    },
    footer: {
      cta: '성장을 위한 최고의 환경이 준비되었습니다.',
      desc: '지금 지원하고, 2026년 가장 밀도 높은 14일을 경험하세요.'
    }
  },
  en: {
    nav: { overview: 'Philosophy', schedule: 'Curriculum', specs: 'Target', apply: 'Apply Now' },
    hero: {
      badge: 'Global Founder Residency',
      title: <>UNDERDOGS<br /><span className="text-gradient uppercase tracking-tighter">HOUSE JEJU</span></>,
      desc: <>
        <span className="text-blue-400 font-bold">Stop planning on paper.<br/>It's time to validate in the global market.</span><br /><br />
        Founders from 4 nations (KR, JP, IN, ID) gather in Jeju<br />
        to focus on business essentials and create real growth.
      </>,
      cta: 'Check Curriculum',
      loc: 'Jeju, South Korea'
    },
    specs: {
      title: "Program Specs",
      items: [
        { label: "Period", value: "May 7 - May 20, 2026", icon: <Calendar size={20} /> },
        { label: "Location", value: "Jeju Island (Stay + Office)", icon: <MapPin size={20} /> },
        { label: "Target", value: "Action-oriented Founders", icon: <Briefcase size={20} /> },
        { label: "Scale", value: "8 Companies (4 Nations)", icon: <Users size={20} /> },
      ]
    },
    philosophy: {
      title: <>Not just Learning,<br/><span className="text-blue-500">But Expanding Business.</span></>,
      desc: "We avoid one-way lectures. Bring your business model, share it with global founders, and find answers together in this immersive growth environment.",
      cards: [
        { 
          title: "Execution & Insight", 
          desc: "Don't stay in the planning phase. Share your strategy with 4-nation founders and gain diverse insights.",
          icon: <Target />
        },
        { 
          title: "Global Connection", 
          desc: "Move beyond solitary thinking. Connect deeply with founders from different backgrounds and expand your perspective.",
          icon: <MessageCircle />
        },
        { 
          title: "Guaranteed Office Hour", 
          desc: "Business must go on. We guarantee daily morning office hours to balance your core business and growth.",
          icon: <Laptop />
        },
        { 
          title: "Real Business Impact", 
          desc: "Not just a social gathering. Every participant is a Contributor, adding value and impact to each other's business.",
          icon: <Zap />
        }
      ]
    },
    schedule: {
      title: "14 Days Curriculum",
      subtitle: "A 14-day roadmap for executing founders, from strategy check to global expansion.",
      weeks: [
        {
          id: "week1",
          period: "Week 01 : Focus & Definition",
          days: "Day 1 - Day 4",
          theme: "Clear direction powers your execution.",
          desc: "Define the 'Main Question (MQ)' you need to solve now, not vague global dreams. Build trust with peers and start honest feedback.",
          details: [
            "[Mandatory] Define Main Question (MQ)",
            "[Mandatory] 4-Nation Peer Feedback",
            "[Optional] Jeju Local Insight Tour",
            "[Mandatory] 1:1 Pairing Coffee Chat"
          ]
        },
        {
          id: "week2",
          period: "Week 02 : Deep Dive & Refinement",
          days: "Day 5 - Day 9",
          theme: "Diverse perspectives refine your strategy.",
          desc: "Check risks from the perspective of each nation (KR/JP/IN/ID). Refine your strategy through peer feedback and simulation.",
          details: [
            "[Mandatory] Market Research & Strategy Refinement",
            "[Mandatory] CEO Decision Simulation",
            "[Guaranteed] Daily Office Hour (AM)",
            "[Optional] UDHJ Networking Day"
          ]
        },
        {
          id: "week3",
          period: "Week 03 : Expansion & Next Step",
          days: "Day 10 - Day 14",
          theme: "Results speak louder than plans.",
          desc: "Present your business logic to global VCs. Summarize the 14-day journey and finalize the roadmap for your next step.",
          details: [
            "[Mandatory] Pitch to Global VCs/Partners",
            "[Mandatory] Final Strategy Presentation",
            "[Mandatory] Retrospective & Matchmaking",
            "[Optional] Closing Dinner & Networking"
          ]
        }
      ]
    },
    footer: {
      cta: 'The best environment for growth is ready.',
      desc: 'Apply now and experience the most immersive 14 days of 2026.'
    }
  },
  ja: {
    nav: { overview: '哲学', schedule: 'カリキュラム', specs: '対象', apply: '事前登録' },
    hero: {
      badge: 'Global Founder Residency',
      title: <>UNDERDOGS<br /><span className="text-gradient uppercase tracking-tighter">HOUSE JEJU</span></>,
      desc: <>
        <span className="text-blue-400 font-bold">机上の計画はもう終わり。<br/>グローバル市場で可能性を確認する時です。</span><br /><br />
        4カ国(KR, JP, IN, ID)の起業家が済州に集まり<br />
        ビジネスの本質に没頭し、実質的な成長を作ります。
      </>,
      cta: 'カリキュラム詳細',
      loc: 'Jeju, South Korea'
    },
    specs: {
      title: "参加対象および規模",
      items: [
        { label: "期間", value: "2026年 5月7日 - 5月20日", icon: <Calendar size={20} /> },
        { label: "場所", value: "済州島 (宿泊+オフィス)", icon: <MapPin size={20} /> },
        { label: "対象", value: "実行力のある起業家 & C-Level", icon: <Briefcase size={20} /> },
        { label: "規模", value: "4カ国 8社 (KR, JP, IN, ID)", icon: <Users size={20} /> },
      ]
    },
    philosophy: {
      title: <>単なる学びではなく、<br/><span className="text-blue-500">ビジネス拡張のための時間です。</span></>,
      desc: "一方的な講義は行いません。各自のビジネスモデルを持ち寄り、グローバルファウンダーと共に熾烈に悩み、答えを探す「成長の場」です。",
      cards: [
        { 
          title: "Execution & Insight", 
          desc: "計画に留まりません。4カ国の起業家と共に戦略を共有し、多様な視点からインサイトを確保します。",
          icon: <Target />
        },
        { 
          title: "Global Connection", 
          desc: "一人だけの悩みから抜け出してください。異なる背景を持つファウンダーと深く交流し、思考の拡張を経験します。",
          icon: <MessageCircle />
        },
        { 
          title: "Guaranteed Office Hour", 
          desc: "ビジネスは続く必要があります。毎朝は完全に個人業務時間として保証し、本業と成長を同時に手に入れます。",
          icon: <Laptop />
        },
        { 
          title: "Real Business Impact", 
          desc: "単なる親睦会ではありません。参加者は聴衆ではなく貢献者(Contributor)として、互いのビジネスにインパクトを加えます。",
          icon: <Zap />
        }
      ]
    },
    schedule: {
      title: "14 Days Curriculum",
      subtitle: "戦略点検からグローバル拡張まで、実行する起業家のための14日間のロードマップ",
      weeks: [
        {
          id: "week1",
          period: "Week 01 : 核心問題定義 (Focus)",
          days: "Day 1 - Day 4",
          theme: "方向が明確であってこそ、実行に力が宿ります。",
          desc: "漠然としたグローバル進出ではなく、「今解決すべき核心課題(MQ)」を具体化します。4カ国の仲間と信頼を築き、率直なフィードバックを開始します。",
          details: [
            "[必須] Main Question(MQ) 定義および共有",
            "[必須] 4カ国ファウンダー相互フィードバック",
            "[選択] 済州ローカルインサイト探訪",
            "[必須] 1:1 ペアリングコーヒーチャット"
          ]
        },
        {
          id: "week2",
          period: "Week 02 : 仮説検証および高度化 (Deep Dive)",
          days: "Day 5 - Day 9",
          theme: "多様な視点が加わるほど、戦略は精巧になります。",
          desc: "樹立した仮説に基づき、国別(KR/JP/IN/ID)の観点でリスクを点検します。仲間のフィードバックを通じて戦略を修正し、高度化します。",
          details: [
            "[必須] 国別市場リサーチおよび戦略高度化",
            "[必須] CEO観点 意思決定シミュレーション",
            "[保証] 毎日午前 Office Hour (本業集中)",
            "[選択] UDHJ ネットワーキングデー"
          ]
        },
        {
          id: "week3",
          period: "Week 03 : 成果共有および拡張 (Expansion)",
          days: "Day 10 - Day 14",
          theme: "結局やり遂げる人は、結果で証明します。",
          desc: "グローバルVCとパートナーの前でビジネス論理を展開してください。14日間の過程を整理し、次の段階に進むロードマップを確定します。",
          details: [
            "[必須] グローバルVC/パートナー対象ピッチ",
            "[必須] 最終今後の戦略(Next Step) 発表",
            "[必須] 活動振り返りおよび後続パートナーマッチング",
            "[選択] Closing Dinner & ネットワーキング"
          ]
        }
      ]
    },
    footer: {
      cta: '성장을 위한 최고의 환경이 준비되었습니다.',
      desc: '지금 지원하고, 2026년 가장 밀도 높은 14일을 경험하세요.'
    }
  },
  id: {
    nav: { overview: 'Filosofi Program', schedule: 'Kurikulum', specs: 'Target Peserta', apply: 'Daftar Sekarang' },
    hero: {
      badge: 'Global Founder Residency',
      title: <>UNDERDOGS<br /><span className="text-gradient uppercase tracking-tighter">HOUSE JEJU</span></>,
      desc: <>
        <span className="text-blue-400 font-bold">Berhenti berencana di atas kertas.<br/>Waktunya validasi di pasar global.</span><br /><br />
        Pendiri dari 4 negara (KR, JP, IN, ID) berkumpul di Jeju<br />
        untuk fokus pada esensi bisnis dan menciptakan pertumbuhan nyata.
      </>,
      cta: 'Cek Kurikulum',
      loc: 'Jeju, Korea Selatan'
    },
    specs: {
      title: "Spesifikasi Program",
      items: [
        { label: "Periode", value: "7 Mei - 20 Mei 2026", icon: <Calendar size={20} /> },
        { label: "Lokasi", value: "Pulau Jeju (Akomodasi + Kantor)", icon: <MapPin size={20} /> },
        { label: "Target", value: "Founder & C-Level Eksekutor", icon: <Briefcase size={20} /> },
        { label: "Skala", value: "8 Perusahaan (4 Negara)", icon: <Users size={20} /> },
      ]
    },
    philosophy: {
      title: <>Bukan Sekadar Belajar,<br/><span className="text-blue-500">Tapi Ekspansi Bisnis.</span></>,
      desc: "Kami menghindari kuliah satu arah. Bawa model bisnis Anda, bagikan dengan pendiri global, dan temukan jawaban bersama di lingkungan pertumbuhan yang imersif ini.",
      cards: [
        { 
          title: "Execution & Insight", 
          desc: "Jangan hanya berhenti di rencana. Bagikan strategi Anda dengan pendiri dari 4 negara dan dapatkan wawasan yang beragam.",
          icon: <Target />
        },
        { 
          title: "Global Connection", 
          desc: "Keluar dari pemikiran soliter. Terhubung secara mendalam dengan pendiri dari berbagai latar belakang dan perluas perspektif Anda.",
          icon: <MessageCircle />
        },
        { 
          title: "Guaranteed Office Hour", 
          desc: "Bisnis harus terus berjalan. Kami menjamin jam kantor pagi setiap hari untuk menyeimbangkan bisnis inti dan pertumbuhan Anda.",
          icon: <Laptop />
        },
        { 
          title: "Real Business Impact", 
          desc: "Bukan sekadar pertemuan sosial. Setiap peserta adalah Kontributor, memberikan nilai dan dampak pada bisnis masing-masing.",
          icon: <Zap />
        }
      ]
    },
    schedule: {
      title: "14 Days Curriculum",
      subtitle: "Peta jalan 14 hari untuk pendiri eksekutor, dari pemeriksaan strategi hingga ekspansi global.",
      weeks: [
        {
          id: "week1",
          period: "Week 01 : Fokus & Definisi (Focus)",
          days: "Day 1 - Day 4",
          theme: "Arah yang jelas memperkuat eksekusi.",
          desc: "Definisikan 'Pertanyaan Utama (MQ)' yang perlu Anda selesaikan sekarang, bukan mimpi global yang samar. Bangun kepercayaan dengan rekan dan mulai umpan balik yang jujur.",
          details: [
            "[Wajib] Definisi Main Question (MQ)",
            "[Wajib] Umpan Balik Rekan 4 Negara",
            "[Opsional] Tur Wawasan Lokal Jeju",
            "[Wajib] Obrolan Santai 1:1"
          ]
        },
        {
          id: "week2",
          period: "Week 02 : Deep Dive & Penyempurnaan",
          days: "Day 5 - Day 9",
          theme: "Perspektif yang beragam mempertajam strategi.",
          desc: "Periksa risiko dari perspektif setiap negara (KR/JP/IN/ID). Sempurnakan strategi Anda melalui umpan balik rekan dan simulasi.",
          details: [
            "[Wajib] Riset Pasar & Penyempurnaan Strategi",
            "[Wajib] Simulasi Keputusan CEO",
            "[Dijamin] Office Hour Harian (Pagi)",
            "[Opsional] Hari Jejaring UDHJ"
          ]
        },
        {
          id: "week3",
          period: "Week 03 : Ekspansi & Langkah Selanjutnya",
          days: "Day 10 - Day 14",
          theme: "Hasil berbicara lebih keras daripada rencana.",
          desc: "Presentasikan logika bisnis Anda kepada VC global. Ringkas perjalanan 14 hari dan selesaikan peta jalan untuk langkah Anda selanjutnya.",
          details: [
            "[Wajib] Pitch ke VC/Mitra Global",
            "[Wajib] Presentasi Strategi Akhir",
            "[Wajib] Retrospektif & Pencocokan Mitra",
            "[Opsional] Makan Malam Penutupan & Jejaring"
          ]
        }
      ]
    },
    footer: {
      cta: 'Lingkungan terbaik untuk pertumbuhan sudah siap.',
      desc: 'Daftar sekarang dan rasakan 14 hari paling intensif di tahun 2026.'
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
        <p className="text-zinc-400 text-lg leading-relaxed whitespace-pre-line">{content}</p>
        <button onClick={onClose} className="mt-10 w-full py-4 bg-white text-black font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all">
          Close
        </button>
      </div>
    </div>
  );
};

// --- Application Form Component ---
const ApplyOverlay = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    companyName: '',
    website: '',
    founderName: '',
    email: '',
    stage: 'Seed', // Seed, Pre-A, Series A, etc.
    teamSize: '',
    
    // Step 2: Differentiation (변별력)
    problem: '',
    solution: '',
    advantage: '', // Unfair Advantage / Competitive Edge
    motivation: '', // Why this program?
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Application Submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-[200] bg-black flex items-center justify-center p-6 animate-fade-in-up">
        <div className="max-w-xl w-full text-center">
          <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-blue-500/50">
            <CheckCircle2 size={48} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">지원해 주셔서<br/>감사합니다.</h2>
          <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
            제출하신 지원서는 꼼꼼하게 검토 후,<br/>
            이메일로 결과를 안내해 드리겠습니다.
          </p>
          <button onClick={onClose} className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors">
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[200] bg-black overflow-y-auto">
      <div className="min-h-screen flex flex-col max-w-4xl mx-auto px-6 py-20 relative animate-fade-in-up">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
           <div>
             <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-2 block">Application Process</span>
             <h2 className="text-3xl font-black tracking-tighter">참가 신청서</h2>
           </div>
           <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
             <XCircle size={32} />
           </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-zinc-900 h-1 rounded-full mb-16 overflow-hidden">
          <div 
            className="h-full bg-blue-600 transition-all duration-500 ease-out"
            style={{ width: step === 1 ? '50%' : '100%' }}
          />
        </div>

        <form onSubmit={handleSubmit} className="flex-1">
          {step === 1 && (
            <div className="space-y-8 animate-fade-in-up">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm font-black">1</span>
                기업 기본 정보
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Company Name</label>
                  <input required name="companyName" value={formData.companyName} onChange={handleChange} className="w-full bg-zinc-900 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white" placeholder="기업명을 입력하세요" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Website / Link</label>
                  <input required name="website" value={formData.website} onChange={handleChange} className="w-full bg-zinc-900 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white" placeholder="https://" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Founder Name</label>
                  <input required name="founderName" value={formData.founderName} onChange={handleChange} className="w-full bg-zinc-900 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white" placeholder="성함" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Email</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-zinc-900 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white" placeholder="이메일 주소" />
                </div>
                 <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Investment Stage</label>
                  <select name="stage" value={formData.stage} onChange={handleChange} className="w-full bg-zinc-900 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white appearance-none">
                    <option value="Bootstrapped">Bootstrapped</option>
                    <option value="Seed">Seed</option>
                    <option value="Pre-A">Pre-A</option>
                    <option value="Series A">Series A</option>
                    <option value="Series B+">Series B+</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Team Size</label>
                  <input required name="teamSize" value={formData.teamSize} onChange={handleChange} className="w-full bg-zinc-900 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white" placeholder="ex) 12명" />
                </div>
              </div>

              <div className="pt-8 flex justify-end">
                <button type="button" onClick={handleNext} className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2">
                  다음 단계 <ChevronRight size={18} />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-2">
                 <h3 className="text-2xl font-bold flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-black">2</span>
                    핵심 역량 및 차별성
                  </h3>
                 <p className="text-zinc-500 text-sm ml-11">선발 심사 시 가장 중요하게 검토하는 항목입니다. 구체적으로 작성해 주세요.</p>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2"><Target size={14}/> Core Problem & Solution</label>
                  <p className="text-zinc-500 text-sm mb-2">해결하고자 하는 핵심 문제와 귀사의 솔루션은 무엇입니까?</p>
                  <textarea required name="problem" value={formData.problem} onChange={handleChange} rows={4} className="w-full bg-zinc-900 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white resize-none" placeholder="문제와 솔루션을 구체적으로 설명해주세요." />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2"><Rocket size={14}/> Unique Selling Proposition (USP)</label>
                  <p className="text-zinc-500 text-sm mb-2">경쟁사 대비 귀사만이 가진 압도적인 기술적/사업적 우위(Unfair Advantage)는 무엇입니까?</p>
                  <textarea required name="advantage" value={formData.advantage} onChange={handleChange} rows={4} className="w-full bg-zinc-900 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white resize-none" placeholder="기술력, 특허, 독점적 파트너십, 데이터 등 구체적인 근거를 포함해주세요." />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2"><Building2 size={14}/> Motivation & Goal</label>
                  <p className="text-zinc-500 text-sm mb-2">이번 제주 레지던시를 통해 해결하고 싶은 단 하나의 질문(Main Question)은 무엇입니까?</p>
                  <textarea required name="motivation" value={formData.motivation} onChange={handleChange} rows={4} className="w-full bg-zinc-900 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white resize-none" placeholder="예: 인도네시아 시장 진출을 위한 PMF 검증 등" />
                </div>
              </div>

              <div className="pt-8 flex justify-between items-center">
                 <button type="button" onClick={handleBack} className="text-zinc-500 hover:text-white px-4 py-2 font-bold flex items-center gap-2">
                  <ChevronLeft size={18} /> 이전
                </button>
                <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? '제출 중...' : '신청서 제출하기'}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<Language>('ko');
  const [modalData, setModalData] = useState<{ title: string, content: string } | null>(null);
  const [isApplyOpen, setIsApplyOpen] = useState(false);

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
              <a href="#specs" className="hover:text-white transition-colors">{t.nav.specs}</a>
            </div>

            <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 ml-4 ring-1 ring-white/5">
              {(['ko', 'en', 'ja', 'id'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l as Language)}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase transition-all duration-500 ${lang === l ? 'bg-white text-black shadow-lg scale-105' : 'text-zinc-500 hover:text-white'}`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Replaced external link with internal open handler */}
            <button 
              onClick={() => setIsApplyOpen(true)}
              className="hidden sm:flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] px-8 py-3.5 bg-blue-600 text-white rounded-full hover:bg-white hover:text-black transition-all shadow-xl shadow-blue-500/20"
            >
              {t.nav.apply} <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Background Image Layer: Ensure Z-index is handled correctly */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2000&auto=format&fit=crop" 
            alt="Jeju Dark Volcanic Coast" 
            className="w-full h-full object-cover grayscale contrast-125 brightness-[0.4] animate-ken-burns opacity-100"
          />
        </div>
        
        {/* Gradient Overlay Layer: Z-index 10 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black z-10" />
        
        {/* Content Layer: Z-index 20 */}
        <div className="animate-fade-in-up px-6 relative z-20 max-w-6xl w-full">
          <span className="px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] bg-blue-600/20 text-blue-400 border border-blue-500/30 mb-10 inline-block backdrop-blur-md">
            {t.hero.badge}
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-[8rem] font-black mb-12 leading-[0.85] tracking-tighter drop-shadow-2xl">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-16 font-medium drop-shadow-lg whitespace-pre-line">
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

      {/* Specs Overview */}
      <section id="specs" className="py-20 px-6 max-w-7xl mx-auto border-b border-white/5 scroll-mt-24">
        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500 mb-8 text-center md:text-left">{t.specs.title}</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {t.specs.items.map((item: any, i: number) => (
            <div key={i} className="flex flex-col p-6 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-blue-500/30 transition-all">
              <div className="text-blue-500 mb-4">{item.icon}</div>
              <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">{item.label}</span>
              <span className="text-lg font-bold">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="overview" className="py-40 px-6 max-w-7xl mx-auto scroll-mt-24">
        <div className="mb-24 text-center lg:text-left">
           <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-tight">
             {t.philosophy.title}
           </h2>
           <p className="text-xl text-zinc-400 leading-relaxed border-l-4 border-blue-500 pl-6 lg:max-w-2xl">
             {t.philosophy.desc}
           </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {t.philosophy.cards.map((card: any, i: number) => (
            <div key={i} className="p-8 bg-zinc-900 rounded-[2rem] border border-white/5 flex flex-col items-start gap-6 group hover:border-blue-500/50 hover:bg-zinc-800 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                 {card.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 leading-tight">{card.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mood Image */}
        <div className="w-full h-[500px] rounded-[3rem] overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            alt="Office Discussion" 
            className="w-full h-full object-cover grayscale opacity-50 hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
          <div className="absolute bottom-10 left-10 md:left-20 max-w-2xl">
             <p className="text-2xl md:text-4xl font-black italic tracking-tighter text-white">"Your strategies are only hypotheses<br/>until they are validated."</p>
          </div>
        </div>
      </section>

      {/* Schedule Journey */}
      <section id="schedule" className="py-40 bg-zinc-950 border-y border-white/5 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">{t.schedule.title}</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">{t.schedule.subtitle}</p>
          </div>

          <div className="space-y-12">
            {t.schedule.weeks.map((week: any, i: number) => (
              <div key={week.id} className="relative group">
                {/* Connector Line */}
                {i !== t.schedule.weeks.length - 1 && (
                  <div className="absolute left-[27px] top-[80px] bottom-[-48px] w-0.5 bg-zinc-800 group-hover:bg-blue-900 transition-colors" />
                )}
                
                <div className="flex flex-col md:flex-row gap-10 md:gap-20">
                  {/* Left: Time & Label */}
                  <div className="md:w-1/3 flex-shrink-0 flex gap-6">
                    <div className="w-14 h-14 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-blue-500 font-bold text-xl z-10 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl">
                      {i + 1}
                    </div>
                    <div>
                      <span className="text-blue-500 font-black text-xs uppercase tracking-widest block mb-2">{week.days}</span>
                      <h3 className="text-2xl font-black italic">{week.period}</h3>
                      <p className="mt-4 text-zinc-400 font-medium border-l-2 border-zinc-700 pl-4">{week.theme}</p>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 bg-zinc-900/50 p-10 rounded-[2.5rem] border border-white/5 group-hover:border-blue-500/30 transition-all">
                     <p className="text-lg text-zinc-300 mb-8 leading-relaxed font-medium">
                       {week.desc}
                     </p>
                     <div className="grid sm:grid-cols-2 gap-4">
                       {week.details.map((detail: string, idx: number) => (
                         <div key={idx} className="flex items-start gap-3 text-zinc-400 text-sm">
                           <CheckCircle2 size={16} className={`mt-0.5 flex-shrink-0 ${detail.includes('[필수]') || detail.includes('[Mandatory]') || detail.includes('[必須]') || detail.includes('[Wajib]') ? 'text-blue-500' : 'text-zinc-600'}`} />
                           <span className={detail.includes('[필수]') || detail.includes('[Mandatory]') || detail.includes('[必須]') || detail.includes('[Wajib]') ? 'text-zinc-200 font-bold' : ''}>{detail}</span>
                         </div>
                       ))}
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer & CTA */}
      <footer className="py-40 px-6 text-center bg-black relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-blue-600/10 blur-[150px] -z-10 rounded-full" />
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter uppercase">{t.footer.cta}</h2>
          <p className="text-zinc-500 mb-16 max-w-xl mx-auto text-xl leading-relaxed">{t.footer.desc}</p>
          <button onClick={() => setIsApplyOpen(true)} className="inline-flex items-center gap-4 bg-white text-black px-20 py-7 rounded-full font-black text-2xl hover:bg-blue-600 hover:text-white transition-all shadow-2xl">
            {t.footer.cta} <ExternalLink size={24} />
          </button>
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

      {/* Application Overlay Form */}
      <ApplyOverlay isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </div>
  );
};

export default App;
