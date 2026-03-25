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
  MapPin,
  Globe,
  HeartHandshake,
  Cpu,
  Brain,
} from "lucide-react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <PawPrint className="w-8 h-8 text-[#D97742]" />
          <span className="text-xl font-bold text-gray-900">
            PetHealth<span className="text-[#D97742]">AI</span>
          </span>
        </motion.div>
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <a
            href="#formula"
            className="hover:text-[#D97742] transition-colors"
          >
            安心配方
          </a>
          <a href="#ai" className="hover:text-[#D97742] transition-colors">
            App生态
          </a>
          <a href="#team" className="hover:text-[#D97742] transition-colors">
            团队介绍
          </a>
          <a
            href="#compare"
            className="hover:text-[#D97742] transition-colors"
          >
            竞品对比
          </a>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors cursor-pointer shadow-lg"
        >
          预定产品
        </motion.button>
      </div>
    </nav>
  );
}

function PhoneMockup() {
  return (
    <motion.div 
      className="w-[300px] h-[600px] bg-gradient-to-b from-[#EBF3FA] to-white rounded-[40px] border-[8px] border-gray-900 shadow-2xl overflow-hidden flex flex-col relative mx-auto"
      animate={{ y: [0, -15, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
    >
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
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white rounded-xl p-3 flex items-start gap-3 shadow-sm border border-gray-50">
            <div className="mt-0.5 text-blue-400">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-800 mb-0.5">健康咨询</h4>
              <p className="text-[9px] text-gray-500">宠物疾病、症状分析、预防建议</p>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white rounded-xl p-3 flex items-start gap-3 shadow-sm border border-gray-50">
            <div className="mt-0.5 text-blue-400">
              <Apple className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-800 mb-0.5">营养指导</h4>
              <p className="text-[9px] text-gray-500">饮食搭配、营养补充、体重管理</p>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white rounded-xl p-3 flex items-start gap-3 shadow-sm border border-gray-50">
            <div className="mt-0.5 text-blue-400">
              <Heart className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-800 mb-0.5">日常护理</h4>
              <p className="text-[9px] text-gray-500">行为训练、美容护理、生活习惯</p>
            </div>
          </motion.div>
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
    </motion.div>
  );
}

const painPoints = [
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: "白大褂效应",
    desc: "临床诊疗环境可能诱发强烈的应激反应，从而掩盖宠物真实的生理基线，进而造成“应激性失真”现象。",
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "检测非连续",
    desc: "现有监测方法仅能在院内进行离散的瞬时采样，宠物离院后缺乏有效的24/7全天候连续动态追踪手段。",
  },
  {
    icon: <ShieldAlert className="w-8 h-8" />,
    title: "束缚与伤害",
    desc: "传统专业心电（ECG）设备需剃毛且易伤皮肤，要求宠物保持静止，操作不便且体验差，无法实现居家监测。",
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
    desc: "纯雷达非接触式感知，宠物全程无感佩戴，从物理层面根除“白大衣效应”与应激反应。",
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
    desc: "结合宠物专属上下文（品种、年龄、既往病史）进行交叉深度分析。",
  },
  {
    icon: <MessageCircle className="text-blue-500" />,
    title: "AI 兽医思维链",
    desc: "Agent多轮思考，分析异常心率、呼吸骤停或微观行为异常，给出专业就医指导。",
  },
];

const socialFeatures = [
  {
    icon: <Globe className="text-[#D97742]" />,
    title: "发现与共鸣",
    desc: "全网精选热门话题，随时随地分享毛孩子日常，在别人的经验中找到自家宠物小毛病的底气与安心。",
  },
  {
    icon: <MapPin className="text-blue-500" />,
    title: "附近宠友",
    desc: "基于高精度定位，发现身边的毛孩子，随时随地约玩，拓展主人的社交边界，交流养宠心得。",
  },
  {
    icon: <HeartHandshake className="text-red-400" />,
    title: "专属互助圈",
    desc: "当设备发出异常预警时，不仅有AI兽医指导，更能一键求助社区同品种的资深宠主，用群体经验彻底缓解突发状况带来的恐慌。",
  },
];

const comparisonRows = [
  {
    label: "生理指标传感器",
    old: "光电（易受毛发干扰）",
    new: "毫米波雷达（可穿透毛发）",
  },
  {
    label: "生理指标精度",
    old: "模糊估算",
    new: "医疗级精度",
  },
  {
    label: "AI智能分析",
    old: "无/基础规则",
    new: "PetMind垂类大模型",
  },
  {
    label: "售价",
    old: "200-600 USD",
    new: "<60 USD (约合400元)",
    highlight: true,
  },
];

interface TeamMember {
  id: string;
  name: string;
  role: string;
  desc: string[];
}

const coreTeam: TeamMember[] = [
  {
    id: "ceo",
    name: "Mr. Guo Zhaojin",
    role: "CEO",
    desc: [
      "香港城市大学兽医医学及生命科学院&创新学院博士生",
      "剑桥大学2025/26“未来全球领袖”",
      "国际动物福利研讨会优秀论文奖、国际顶尖动物科学期刊审稿人",
      "以AI与公共卫生思维，重新定义宠物健康预警标准，负责PetMind和上层算法的设计和训练",
    ],
  },
  {
    id: "cto",
    name: "Dr. DONG Shuqin",
    role: "CTO",
    desc: [
      "中国首位IEEE MTT-S医疗应用研究生奖学金获得者",
      "香港城市大学ITF博士后研究员，深耕射频/毫米波生物雷达领域近10年",
      "发表 40 余篇生物雷达相关国际学术论文",
      "亲自主持宠物医疗级雷达模块的底层算法与硬件设计，确保核心指标达到临床级标准",
    ],
  },
  {
    id: "vet",
    name: "Mr. LYU Li",
    role: "Vet Expert",
    desc: [
      "香港城市大学-康奈尔大学联培兽医学博士生",
      "宾夕法尼亚大学兽医学院访问学者",
      "欧洲精准畜牧业大会最佳博士论文奖、动物环境与福利化养殖优秀论文奖",
      "深厚的机器人运动学与传感器算法背景，负责动态环境下微弱生物信号的提取与识别",
    ],
  },
];

const supportTeam: TeamMember[] = [
  {
    id: "prof_liu",
    name: "Prof. LIU Kai",
    role: "指导教授",
    desc: [
      "香港城市大学赛马会动物医学及生命科学院副教授",
      "主导AI动物健康算法的病理模型构建，深谙动物行为学与福利标准",
      "拥有丰富的精准畜牧与生命体征监测落地经验，提供了海量临床标注数据支持",
    ],
  },
  {
    id: "prof_guo",
    name: "Prof. Guo Yongxin",
    role: "指导教授",
    desc: [
      "香港城市大学电子工程系讲座教授、新加坡国立大学兼职教授",
      "IEEE会士、新加坡工程院院士，长期深耕生物医学电磁学、毫米波与太赫兹集成电路研究",
      "为自研毫米波雷达技术及非侵入式体征监测提供顶层设计与全球领先的理论指导",
    ],
  },
  {
    id: "prof_chan",
    name: "Prof. CHAN Derek",
    role: "指导教授",
    desc: [
      "香港城市大学创新学院教授，专注于将前沿实验室技术转化为高增长的商业实体",
      "现任华润创业 (CR Enterprise) 高级投资总监",
      "担任香港创科创投基金 (HK Tech Venture Investment) 首席投资官，具备卓越的早期项目孵化与退出策略经验",
    ],
  },
];

function FormulaTag({ num }: { num: number }) {
  return (
    <motion.span 
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center gap-1.5 bg-[#D97742]/10 text-[#D97742] px-4 py-1.5 rounded-full text-sm font-bold mb-4 shadow-sm"
    >
      安心配方 {num}
    </motion.span>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm transition-all flex flex-col items-center text-center group"
    >
      <div className="w-32 h-32 rounded-full mb-4 overflow-hidden bg-gray-100 border-4 border-[#FDFBF7] shadow-inner relative flex items-center justify-center group-hover:border-[#D97742]/20 transition-colors duration-300">
        <User className="w-12 h-12 text-gray-400 opacity-50 group-hover:scale-110 transition-transform duration-500" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
      <p className="text-[#D97742] font-medium text-sm mb-4">{member.role}</p>
      <ul className="text-sm text-gray-600 space-y-2 text-left w-full">
        {member.desc.map((d, i) => (
          <li key={i} className="flex items-start gap-2">
            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D97742]/60 shrink-0"></div>
            <span>{d}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function TeamSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section id="team" className="py-24 bg-[#FDFBF7]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            跨学科核心研发团队
          </h2>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            重新定义宠物健康管理，顶尖团队指导和支持构建宠物生态体系
          </p>
        </motion.div>

        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          核心研发团队
        </h3>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {coreTeam.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </motion.div>

        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          顶尖指导与支持
        </h3>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {supportTeam.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-gray-900 selection:bg-[#D97742] selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            className="w-full h-full"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src="/hero-bg.png"
              alt="PetHealthAI Hero Background"
              fill
              className="object-cover opacity-40 mix-blend-multiply"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/90 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-4">
                PetHealth<span className="text-[#D97742]">AI</span>
              </motion.h1>
              <motion.h2 variants={fadeUp} className="text-2xl lg:text-3xl font-medium text-gray-800 mb-6">
                24小时毛孩贴身守护精灵
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-gray-600 mb-4 leading-relaxed">
                毫米波与多模态大模型赋能宠物健康管理新范式
              </motion.p>
              <motion.div variants={fadeUp} className="inline-block bg-white/60 backdrop-blur-sm border border-[#D97742]/20 rounded-2xl p-4 mb-8 shadow-sm">
                <p className="text-xl font-bold text-[#D97742] flex items-center gap-2">
                  <Heart className="w-5 h-5 fill-current" />
                  我们的使命：让每一位宠物主真正地安心
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="flex gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(217, 119, 66, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#D97742] text-white px-8 py-4 rounded-full font-medium transition-colors shadow-lg shadow-[#D97742]/30 flex items-center gap-2 cursor-pointer"
                >
                  探索产品 <ChevronRight className="w-5 h-5" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "#f9fafb" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-900 px-8 py-4 rounded-full font-medium transition-colors shadow-sm border border-gray-200 cursor-pointer"
                >
                  下载 App
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              毛孩子生病不会说话
            </h2>
            <p className="text-lg text-gray-500">
              宠物医疗的致命监控盲区，作为家长最害怕“突然的意外”
            </p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {painPoints.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-[#FDFBF7] p-8 rounded-3xl border border-gray-100 transition-all duration-300"
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
          </motion.div>
        </div>
      </section>

      {/* 安心配方1: Hardware */}
      <section id="formula" className="py-24 bg-[#FDFBF7] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <FormulaTag num={1} />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  硬件革命
                </h2>
                <h3 className="text-xl md:text-2xl text-[#D97742] font-bold mb-6 flex items-center gap-2">
                  <Cpu className="w-6 h-6" /> 突破毛发屏障的毫米波雷达终端
                </h3>
                <p className="text-lg text-gray-600 mb-10">
                  自主研发专利毫米波雷达终端，构建宠物健康的第一道预警防线；结合多模态融合定位（GPS+LBS+WiFi）与高精度多轴IMU。
                </p>
                <div className="space-y-8">
                  {hardwareFeatures.map((item, i) => (
                    <motion.div 
                      key={i} 
                      className="flex gap-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.15 }}
                      viewport={{ once: true }}
                    >
                      <div className="mt-1">
                        <div className="w-6 h-6 rounded-full bg-[#D97742] text-white flex items-center justify-center shadow-md">
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
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 relative w-full max-w-md mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <motion.div 
                  className="aspect-square rounded-full bg-gradient-to-tr from-[#D97742]/20 to-transparent p-8 relative"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Glowing pulse rings */}
                  <motion.div 
                    className="absolute inset-0 border-2 border-[#D97742]/40 rounded-full"
                    animate={{ scale: [1, 1.2, 1.4], opacity: [0.8, 0.4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  ></motion.div>
                  <motion.div 
                    className="absolute inset-0 border-2 border-[#D97742]/40 rounded-full"
                    animate={{ scale: [1, 1.2, 1.4], opacity: [0.8, 0.4, 0] }}
                    transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "easeOut" }}
                  ></motion.div>
                  
                  <div className="absolute inset-8 border border-[#D97742]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                  
                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white">
                    <Image
                      src="/hardware-dog.png"
                      alt="Dog wearing collar"
                      fill
                      className="object-cover scale-110"
                    />
                  </div>
                  
                  {/* Overlay Radar icon */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center z-10 border border-[#D97742]/10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Wifi className="w-10 h-10 text-[#D97742]" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 安心配方2: PetMind AI */}
      <section id="ai" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <FormulaTag num={2} />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              软件大脑
            </h2>
            <h3 className="text-xl md:text-2xl text-blue-500 font-bold mb-4 flex items-center justify-center gap-2">
              <Brain className="w-6 h-6" /> PetMind大模型全方位守护
            </h3>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              针对通用大模型在垂直领域的认知局限，引入海量真实临床数据进行深度训练，构建真正具备“兽医临床思维”的专用 AI 内核。
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-16 justify-center">
            <div id="app" className="lg:w-1/3 flex justify-center perspective-1000">
              <motion.div
                initial={{ opacity: 0, rotateX: 20, y: 50 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                viewport={{ once: true }}
              >
                <PhoneMockup />
              </motion.div>
            </div>
            
            <div className="lg:w-1/2">
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="grid sm:grid-cols-2 gap-6"
              >
                {aiFeatures.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="bg-gradient-to-br from-[#FDFBF7] to-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4 border border-gray-50">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 安心配方3: Social */}
      <section className="py-24 bg-[#FDFBF7] relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#D97742]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <FormulaTag num={3} />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              专属宠物社交圈
            </h2>
            <h3 className="text-xl md:text-2xl text-[#D97742] font-bold mb-4 flex items-center justify-center gap-2">
              <Users className="w-6 h-6" /> 在交友与心得分享中消除焦虑，让宠物主安心
            </h3>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              养宠不应是一座孤岛，我们在精准健康检测基础上，构建了充满温度的社交互助生态。
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {socialFeatures.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -15, scale: 1.02 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-gray-50 rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <motion.div 
                  className="w-16 h-16 bg-[#D97742]/10 rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <TeamSection />

      {/* Comparison */}
      <section id="compare" className="py-24 bg-[#111827] text-white relative overflow-hidden">
        {/* Add subtle grid background pattern */}
        <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              降维打击：全栈技术护城河与“价格屠夫”策略
            </h2>
            <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
              全球极少数同时掌握底层硬件架构、慢病监测核心算法与大语言宠物模型的公司。
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white/5 rounded-3xl border border-white/10 overflow-hidden backdrop-blur-md shadow-2xl"
          >
            <div className="grid grid-cols-3 text-sm md:text-base font-bold border-b border-white/10 bg-white/5">
              <div className="p-6 text-left">功能与指标</div>
              <div className="p-6 text-gray-400">传统产品</div>
              <div className="p-6 text-[#D97742]">PetHealthAI</div>
            </div>
            {comparisonRows.map((row, i) => (
              <motion.div
                key={i}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                className="grid grid-cols-3 text-sm md:text-base border-b border-white/5 last:border-0 transition-colors"
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex justify-center items-center gap-2 mb-6 cursor-pointer"
          >
            <PawPrint className="w-8 h-8 text-[#D97742]" />
            <span className="text-2xl font-bold text-gray-900">
              PetHealth<span className="text-[#D97742]">AI</span>
            </span>
          </motion.div>
          <p className="text-2xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-2">
            <Heart className="w-6 h-6 text-[#D97742] fill-current" />
            我们的使命：让每一位宠物主真正地安心
          </p>
          <p className="text-lg text-gray-600 mb-2">
            用科技消融沟通隔阂，共创心意相通的未来
          </p>
          <p className="text-gray-500 mb-8">
            赋予每一位宠物主真正的安心
          </p>
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} PetHealthAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
