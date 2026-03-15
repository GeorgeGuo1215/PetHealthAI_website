"use client";

import { motion } from "motion/react";
import {
  Heart,
  Activity,
  ShieldAlert,
  ChevronRight,
  Stethoscope,
  Bone,
  MessageCircle,
  Menu,
  Image as ImageIcon,
  Send,
  Users,
  Bluetooth,
  User,
  PawPrint,
  Apple,
  Wifi,
  Check,
} from "lucide-react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PawPrint className="w-8 h-8 text-[#D97742]" />
          <span className="text-xl font-bold text-gray-900">
            PetHealth<span className="text-[#D97742]">AI</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <a href="#tech" className="hover:text-[#D97742] transition-colors">
            核心技术
          </a>
          <a href="#ai" className="hover:text-[#D97742] transition-colors">
            PetMind AI
          </a>
          <a href="#app" className="hover:text-[#D97742] transition-colors">
            App生态
          </a>
        </div>
        <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors cursor-pointer">
          预定产品
        </button>
      </div>
    </nav>
  );
}

function PhoneMockup() {
  return (
    <div className="w-[300px] h-[600px] bg-gradient-to-b from-[#EBF3FA] to-white rounded-[40px] border-[8px] border-gray-900 shadow-2xl overflow-hidden flex flex-col relative mx-auto">
      <div className="h-6 w-full flex justify-between items-center px-5 pt-1 text-[10px] font-medium text-gray-800">
        <span>19:12</span>
        <div className="flex gap-1 items-center">
          <Wifi className="w-3 h-3" />
          <div className="w-4 h-2 bg-gray-800 rounded-sm relative">
            <div className="absolute right-0.5 top-0.5 bottom-0.5 left-0.5 bg-white rounded-[1px]"></div>
          </div>
        </div>
      </div>

      <div className="px-4 pt-3 pb-2">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-500">
          <Menu className="w-4 h-4" />
        </div>
      </div>

      <div className="flex-1 px-4 flex flex-col items-center mt-2">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 shadow-inner">
          <PawPrint className="w-8 h-8 text-blue-500" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">宠物健康助手</h3>
        <p className="text-[10px] text-gray-500 mb-6 text-center">
          专业的宠物健康咨询，随时为你和爱宠服务
        </p>

        <div className="w-full space-y-2.5">
          <div className="bg-white rounded-xl p-3 flex items-start gap-3 shadow-sm border border-gray-50">
            <div className="mt-0.5 text-blue-400">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-800 mb-0.5">
                健康咨询
              </h4>
              <p className="text-[9px] text-gray-500">
                宠物疾病、症状分析、预防建议
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-3 flex items-start gap-3 shadow-sm border border-gray-50">
            <div className="mt-0.5 text-blue-400">
              <Apple className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-800 mb-0.5">
                营养指导
              </h4>
              <p className="text-[9px] text-gray-500">
                饮食搭配、营养补充、体重管理
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-3 flex items-start gap-3 shadow-sm border border-gray-50">
            <div className="mt-0.5 text-blue-400">
              <Heart className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-800 mb-0.5">
                日常护理
              </h4>
              <p className="text-[9px] text-gray-500">
                行为训练、美容护理、生活习惯
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-[10px] text-gray-400">
          输入问题，开始咨询
        </div>
      </div>

      <div className="bg-white px-3 py-2.5 flex items-center gap-2 border-t border-gray-50">
        <ImageIcon className="w-5 h-5 text-gray-400" />
        <div className="flex-1 bg-gray-100 rounded-full px-3 py-1.5 text-xs text-gray-400 flex items-center">
          <span className="border-l-2 border-blue-500 h-3 mr-1 animate-pulse"></span>
          输入消息...
        </div>
        <div className="w-7 h-7 bg-gray-300 rounded-full flex items-center justify-center">
          <Send className="w-3 h-3 text-white ml-0.5" />
        </div>
      </div>

      <div className="bg-white border-t border-gray-100 flex justify-between px-4 py-2 pb-5">
        <div className="flex flex-col items-center gap-1 text-gray-400">
          <PawPrint className="w-4 h-4" />
          <span className="text-[8px]">首页</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400">
          <Users className="w-4 h-4" />
          <span className="text-[8px]">社交圈</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-[#00A896]">
          <Activity className="w-4 h-4" />
          <span className="text-[8px] font-medium">健康助手</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400">
          <Bluetooth className="w-4 h-4" />
          <span className="text-[8px]">蓝牙测试</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400">
          <User className="w-4 h-4" />
          <span className="text-[8px]">我的</span>
        </div>
      </div>
    </div>
  );
}

const painPoints = [
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: "白大褂效应",
    desc: "临床诊疗环境可能诱发强烈的应激反应，从而掩盖宠物真实的生理基线，造成\u201C应激性失真\u201D。",
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "检测非连续",
    desc: "现有监测方法仅能在院内进行离散的瞬时采样，宠物离院后缺乏有效的24/7全天候连续动态追踪手段。",
  },
  {
    icon: <ShieldAlert className="w-8 h-8" />,
    title: "束缚与伤害",
    desc: "传统专业心电(ECG)设备需剃毛且易伤皮肤，要求宠物保持静止，操作不便且体验差，无法实现居家监测。",
  },
];

const hardwareFeatures = [
  {
    title: "无惧毛发阻隔",
    desc: "毫米波信号具备卓越穿透力，无视厚重毛发干扰，无需剃毛即可直达体征监测，彻底告别皮肤损伤。",
  },
  {
    title: "医疗级精准度",
    desc: "捕捉皮下生命体征的微距变化，生成专业多普勒心动图与呼吸相位图，数据精度完全对齐临床医疗设备。",
  },
  {
    title: "零压感非接触",
    desc: "纯雷达非接触式感知，宠物全程无感佩戴，从物理层面根除\u201C白大衣效应\u201D与应激反应。",
  },
];

const aiFeatures = [
  {
    icon: <Heart className="text-red-500" />,
    title: "心律与呼吸率异常警报",
    desc: "实时监测生命体征，异常情况秒级推送。",
  },
  {
    icon: <Activity className="text-orange-500" />,
    title: "异常行为模式识别",
    desc: "多轴IMU精准捕捉动态行为，深度还原活动特征。",
  },
  {
    icon: <Bone className="text-amber-600" />,
    title: "饮食与生活干预建议",
    desc: "结合宠物专属上下文(品种、年龄、既往病史)进行交叉深度分析。",
  },
  {
    icon: <MessageCircle className="text-blue-500" />,
    title: "AI 兽医思维链",
    desc: "Agent自动调取近期数据，联合分析病原可能，给出专业就医指导。",
  },
];

const comparisonRows = [
  {
    label: "生理指标传感器",
    old: "光电 (易受毛发干扰)",
    new: "毫米波雷达 (可穿透毛发)",
  },
  { label: "生理指标精度", old: "模糊估算", new: "医疗级精度" },
  { label: "AI智能分析", old: "无/基础规则", new: "PetMind垂类大模型" },
  {
    label: "售价",
    old: "200-600 USD",
    new: "<60 USD (约合400元)",
    highlight: true,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-gray-900 selection:bg-[#D97742] selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop"
            alt="Owner and dog"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/90 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-4">
                PetHealth<span className="text-[#D97742]">AI</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-medium text-gray-800 mb-6">
                24小时毛孩贴身守护精灵
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                毫米波与多模态大模型赋能宠物健康管理新范式。
                <br />
                让每一位宠物主真正地安心。
              </p>
              <div className="flex gap-4">
                <button className="bg-[#D97742] hover:bg-[#B85D2E] text-white px-8 py-4 rounded-full font-medium transition-colors shadow-lg shadow-[#D97742]/30 flex items-center gap-2 cursor-pointer">
                  探索产品 <ChevronRight className="w-5 h-5" />
                </button>
                <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full font-medium transition-colors shadow-sm border border-gray-200 cursor-pointer">
                  下载 App
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              毛孩子生病不会说话
            </h2>
            <p className="text-lg text-gray-500">
              宠物医疗的致命监控盲区，作为家长最害怕{"\u201C"}突然的意外{"\u201D"}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#FDFBF7] p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-[#D97742]/10 text-[#D97742] rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware */}
      <section id="tech" className="py-24 bg-[#FDFBF7] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  硬件革命：突破毛发屏障的
                  <br />
                  <span className="text-[#D97742]">毫米波雷达终端</span>
                </h2>
                <p className="text-lg text-gray-600 mb-10">
                  自主研发专利毫米波雷达终端，构建宠物健康的第一道预警防线；结合多模态融合定位与高精度多轴IMU。
                </p>

                <div className="space-y-8">
                  {hardwareFeatures.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1">
                        <div className="w-6 h-6 rounded-full bg-[#D97742] text-white flex items-center justify-center">
                          <Check className="w-3 h-3" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 relative w-full max-w-md mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="aspect-square rounded-full bg-gradient-to-tr from-[#D97742]/20 to-transparent p-8 relative">
                  <div className="absolute inset-0 border border-[#D97742]/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute inset-8 border border-[#D97742]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1000&auto=format&fit=crop"
                    alt="Dog wearing collar"
                    fill
                    className="object-cover rounded-full shadow-2xl p-8"
                  />

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center z-10">
                    <Wifi className="w-10 h-10 text-[#D97742]" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Software / PetMind AI */}
      <section id="ai" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              软件大脑：专属垂类大模型{" "}
              <span className="text-blue-500">PetMind</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              针对通用大模型在垂直领域的认知局限，引入海量真实临床数据进行深度训练，构建真正具备"兽医临床思维"的专用
              AI 内核。
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16 justify-center">
            <div id="app" className="lg:w-1/3 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <PhoneMockup />
              </motion.div>
            </div>

            <div className="lg:w-1/2">
              <div className="grid sm:grid-cols-2 gap-6">
                {aiFeatures.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-[#FDFBF7] p-6 rounded-2xl border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-[#111827] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            降维打击：全栈技术护城河与"价格屠夫"
          </h2>
          <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
            全球极少数同时掌握底层硬件架构、慢病监测核心算法与大语言宠物模型的公司。
          </p>

          <div className="max-w-4xl mx-auto bg-white/5 rounded-3xl border border-white/10 overflow-hidden backdrop-blur-md">
            <div className="grid grid-cols-3 text-sm md:text-base font-bold border-b border-white/10 bg-white/5">
              <div className="p-6 text-left">功能与指标</div>
              <div className="p-6 text-gray-400">传统产品</div>
              <div className="p-6 text-[#D97742]">PetHealthAI</div>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 text-sm md:text-base border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors"
              >
                <div className="p-6 text-left text-gray-300 font-medium">
                  {row.label}
                </div>
                <div className="p-6 text-gray-500">{row.old}</div>
                <div
                  className={`p-6 font-bold ${row.highlight ? "text-2xl text-[#D97742]" : "text-white"}`}
                >
                  {row.new}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <PawPrint className="w-8 h-8 text-[#D97742]" />
            <span className="text-2xl font-bold text-gray-900">
              PetHealth<span className="text-[#D97742]">AI</span>
            </span>
          </div>
          <p className="text-xl font-medium text-gray-800 mb-4">
            用科技消融沟通隔阂，共创心意相通的未来
          </p>
          <p className="text-gray-500 mb-8">让每一位宠物主真正地安心</p>
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} PetHealthAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
