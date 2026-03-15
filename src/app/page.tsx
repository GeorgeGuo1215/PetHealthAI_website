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
          <a href="#team" className="hover:text-[#D97742] transition-colors">
            团队介绍
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
    title: "\u767d\u5927\u8902\u6548\u5e94",
    desc: "\u4e34\u5e8a\u8bca\u7597\u73af\u5883\u53ef\u80fd\u8bf1\u53d1\u5f3a\u70c8\u7684\u5e94\u6fc0\u53cd\u5e94\uff0c\u4ece\u800c\u63a9\u76d6\u5ba0\u7269\u771f\u5b9e\u7684\u751f\u7406\u57fa\u7ebf\uff0c\u9020\u6210\u201c\u5e94\u6fc0\u6027\u5931\u771f\u201d\u3002",
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "\u68c0\u6d4b\u975e\u8fde\u7eed",
    desc: "\u73b0\u6709\u76d1\u6d4b\u65b9\u6cd5\u4ec5\u80fd\u5728\u9662\u5185\u8fdb\u884c\u79bb\u6563\u7684\u77ac\u65f6\u91c7\u6837\uff0c\u5ba0\u7269\u79bb\u9662\u540e\u7f3a\u4e4f\u6709\u6548\u768424/7\u5168\u5929\u5019\u8fde\u7eed\u52a8\u6001\u8ffd\u8e2a\u624b\u6bb5\u3002",
  },
  {
    icon: <ShieldAlert className="w-8 h-8" />,
    title: "\u675f\u7f1a\u4e0e\u4f24\u5bb3",
    desc: "\u4f20\u7edf\u4e13\u4e1a\u5fc3\u7535(ECG)\u8bbe\u5907\u9700\u5243\u6bdb\u4e14\u6613\u4f24\u76ae\u80a4\uff0c\u8981\u6c42\u5ba0\u7269\u4fdd\u6301\u9759\u6b62\uff0c\u64cd\u4f5c\u4e0d\u4fbf\u4e14\u4f53\u9a8c\u5dee\uff0c\u65e0\u6cd5\u5b9e\u73b0\u5c45\u5bb6\u76d1\u6d4b\u3002",
  },
];

const hardwareFeatures = [
  {
    title: "\u65e0\u60e7\u6bdb\u53d1\u963b\u9694",
    desc: "\u6beb\u7c73\u6ce2\u4fe1\u53f7\u5177\u5907\u5353\u8d8a\u7a7f\u900f\u529b\uff0c\u65e0\u89c6\u539a\u91cd\u6bdb\u53d1\u5e72\u6270\uff0c\u65e0\u9700\u5243\u6bdb\u5373\u53ef\u76f4\u8fbe\u4f53\u5f81\u76d1\u6d4b\uff0c\u5f7b\u5e95\u544a\u522b\u76ae\u80a4\u635f\u4f24\u3002",
  },
  {
    title: "\u533b\u7597\u7ea7\u7cbe\u51c6\u5ea6",
    desc: "\u6355\u6349\u76ae\u4e0b\u751f\u547d\u4f53\u5f81\u7684\u5fae\u8ddd\u53d8\u5316\uff0c\u751f\u6210\u4e13\u4e1a\u591a\u666e\u52d2\u5fc3\u52a8\u56fe\u4e0e\u547c\u5438\u76f8\u4f4d\u56fe\uff0c\u6570\u636e\u7cbe\u5ea6\u5b8c\u5168\u5bf9\u9f50\u4e34\u5e8a\u533b\u7597\u8bbe\u5907\u3002",
  },
  {
    title: "\u96f6\u538b\u611f\u975e\u63a5\u89e6",
    desc: "\u7eaf\u96f7\u8fbe\u975e\u63a5\u89e6\u5f0f\u611f\u77e5\uff0c\u5ba0\u7269\u5168\u7a0b\u65e0\u611f\u4f69\u6234\uff0c\u4ece\u7269\u7406\u5c42\u9762\u6839\u9664\u201c\u767d\u5927\u8863\u6548\u5e94\u201d\u4e0e\u5e94\u6fc0\u53cd\u5e94\u3002",
  },
];

const aiFeatures = [
  {
    icon: <Heart className="text-red-500" />,
    title: "\u5fc3\u5f8b\u4e0e\u547c\u5438\u7387\u5f02\u5e38\u8b66\u62a5",
    desc: "\u5b9e\u65f6\u76d1\u6d4b\u751f\u547d\u4f53\u5f81\uff0c\u5f02\u5e38\u60c5\u51b5\u79d2\u7ea7\u63a8\u9001\u3002",
  },
  {
    icon: <Activity className="text-orange-500" />,
    title: "\u5f02\u5e38\u884c\u4e3a\u6a21\u5f0f\u8bc6\u522b",
    desc: "\u591a\u8f74IMU\u7cbe\u51c6\u6355\u6349\u52a8\u6001\u884c\u4e3a\uff0c\u6df1\u5ea6\u8fd8\u539f\u6d3b\u52a8\u7279\u5f81\u3002",
  },
  {
    icon: <Bone className="text-amber-600" />,
    title: "\u996e\u98df\u4e0e\u751f\u6d3b\u5e72\u9884\u5efa\u8bae",
    desc: "\u7ed3\u5408\u5ba0\u7269\u4e13\u5c5e\u4e0a\u4e0b\u6587(\u54c1\u79cd\u3001\u5e74\u9f84\u3001\u65e2\u5f80\u75c5\u53f2)\u8fdb\u884c\u4ea4\u53c9\u6df1\u5ea6\u5206\u6790\u3002",
  },
  {
    icon: <MessageCircle className="text-blue-500" />,
    title: "AI \u517d\u533b\u601d\u7ef4\u94fe",
    desc: "Agent\u81ea\u52a8\u8c03\u53d6\u8fd1\u671f\u6570\u636e\uff0c\u8054\u5408\u5206\u6790\u75c5\u539f\u53ef\u80fd\uff0c\u7ed9\u51fa\u4e13\u4e1a\u5c31\u533b\u6307\u5bfc\u3002",
  },
];

const comparisonRows = [
  {
    label: "\u751f\u7406\u6307\u6807\u4f20\u611f\u5668",
    old: "\u5149\u7535 (\u6613\u53d7\u6bdb\u53d1\u5e72\u6270)",
    new: "\u6beb\u7c73\u6ce2\u96f7\u8fbe (\u53ef\u7a7f\u900f\u6bdb\u53d1)",
  },
  {
    label: "\u751f\u7406\u6307\u6807\u7cbe\u5ea6",
    old: "\u6a21\u7cca\u4f30\u7b97",
    new: "\u533b\u7597\u7ea7\u7cbe\u5ea6",
  },
  {
    label: "AI\u667a\u80fd\u5206\u6790",
    old: "\u65e0/\u57fa\u7840\u89c4\u5219",
    new: "PetMind\u5782\u7c7b\u5927\u6a21\u578b",
  },
  {
    label: "\u552e\u4ef7",
    old: "200-600 USD",
    new: "<60 USD (\u7ea6\u5408400\u5143)",
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
      "\u9999\u6e2f\u57ce\u5e02\u5927\u5b66\u8d5b\u9a6c\u4f1a\u52a8\u7269\u533b\u5b66\u53ca\u751f\u547d\u79d1\u5b66\u9662\u548c\u521b\u65b0\u5b66\u9662\u8054\u5408\u57f9\u517b\u535a\u58eb\u751f",
      "\u5165\u9009\u5251\u6865\u5927\u5b662025/26\u201c\u672a\u6765\u5168\u7403\u9886\u8896\u201d\u9879\u76ee",
      "\u8363\u83b7\u56fd\u9645\u52a8\u7269\u798f\u5229\u7814\u8ba8\u4f1a\u4f18\u79c0\u8bba\u6587\u5956",
      "\u4ee5 AI \u4e0e\u516c\u5171\u536b\u751f\u601d\u7ef4\uff0c\u91cd\u65b0\u5b9a\u4e49\u5ba0\u7269\u5065\u5eb7\u9884\u8b66\u6807\u51c6",
    ],
  },
  {
    id: "cto",
    name: "Dr. DONG Shuqin",
    role: "CTO",
    desc: [
      "\u4e2d\u56fd\u9996\u4f4dIEEE MTT-S\u533b\u7597\u5e94\u7528\u7814\u7a76\u751f\u5956\u5b66\u91d1\u83b7\u5f97\u8005",
      "\u9999\u6e2f\u57ce\u5e02\u5927\u5b66\u535a\u58eb\u540e\uff0c\u6df1\u8015\u5c04\u9891/\u6beb\u7c73\u6ce2\u751f\u7269\u96f7\u8fbe\u9886\u57df\u8fd110\u5e74",
      "\u7d2f\u8ba1\u53d1\u8868 30 \u4f59\u7bc7\u9ad8\u6c34\u5e73\u56fd\u9645\u5b66\u672f\u8bba\u6587",
      "\u4eb2\u81ea\u4e3b\u6301\u5ba0\u7269\u533b\u7597\u7ea7\u96f7\u8fbe\u6a21\u5757\u7684\u5e95\u5c42\u7b97\u6cd5\u4e0e\u786c\u4ef6\u8bbe\u8ba1",
    ],
  },
  {
    id: "vet",
    name: "Mr. LYU Li",
    role: "Vet Expert",
    desc: [
      "\u9999\u6e2f\u57ce\u5e02\u5927\u5b66-\u5eb7\u5948\u5c14\u5927\u5b66\u8054\u57f9\u517d\u533b\u5b66\u535a\u58eb\u751f",
      "\u5bbe\u5915\u6cd5\u5c3c\u4e9a\u5927\u5b66\u517d\u533b\u5b66\u9662\u8bbf\u95ee\u5b66\u8005",
      "\u83b7\u6b27\u6d32\u7cbe\u51c6\u755c\u7267\u4e1a\u5927\u4f1a\u6700\u4f73\u535a\u58eb\u8bba\u6587\u5956",
      "\u62e5\u6709\u6df1\u539a\u7684\u673a\u5668\u4eba\u8fd0\u52a8\u5b66\u4e0e\u4f20\u611f\u5668\u7b97\u6cd5\u80cc\u666f",
    ],
  },
];

const supportTeam: TeamMember[] = [
  {
    id: "prof_liu",
    name: "Prof. LIU Kai",
    role: "\u6307\u5bfc\u6559\u6388",
    desc: [
      "\u9999\u6e2f\u57ce\u5e02\u5927\u5b66\u8d5b\u9a6c\u4f1a\u52a8\u7269\u533b\u5b66\u53ca\u751f\u547d\u79d1\u5b66\u9662\u526f\u6559\u6388",
      "\u4e3b\u5bfcAI\u52a8\u7269\u5065\u5eb7\u7b97\u6cd5\u7684\u75c5\u7406\u6a21\u578b\u6784\u5efa",
      "\u6df1\u8c19\u52a8\u7269\u884c\u4e3a\u5b66\u4e0e\u798f\u5229\u6807\u51c6",
    ],
  },
  {
    id: "prof_guo",
    name: "Prof. Guo Yongxin",
    role: "\u6307\u5bfc\u6559\u6388",
    desc: [
      "\u9999\u6e2f\u57ce\u5e02\u5927\u5b66\u7535\u5b50\u5de5\u7a0b\u7cfb\u8bb2\u5ea7\u6559\u6388\u3001\u5168\u7403STEM\u6559\u6388",
      "\u56fd\u9645\u7535\u6c14\u4e0e\u7535\u5b50\u5de5\u7a0b\u5e08\u534f\u4f1a\u4f1a\u58eb\u3001\u65b0\u52a0\u5761\u5de5\u7a0b\u9662\u9662\u58eb",
      "\u4e3a\u81ea\u7814\u6beb\u7c73\u6ce2\u96f7\u8fbe\u6280\u672f\u63d0\u4f9b\u9876\u5c42\u8bbe\u8ba1\u4e0e\u7406\u8bba\u6307\u5bfc",
    ],
  },
  {
    id: "prof_chan",
    name: "Prof. CHAN Derek",
    role: "\u6307\u5bfc\u6559\u6388",
    desc: [
      "\u9999\u6e2f\u57ce\u5e02\u5927\u5b66\u521b\u65b0\u5b66\u9662\u6559\u6388",
      "\u73b0\u4efb\u534e\u6da6\u521b\u4e1a (CR Enterprise) \u9ad8\u7ea7\u6295\u8d44\u603b\u76d1",
      "\u62c5\u4efb\u9999\u6e2f\u521b\u79d1\u521b\u6295\u57fa\u91d1 (HK Tech Venture Investment) \u9996\u5e2d\u6295\u8d44\u5b98",
    ],
  },
];

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
    >
      <div className="w-32 h-32 rounded-full mb-4 overflow-hidden bg-gray-100 border-4 border-[#FDFBF7] shadow-inner relative flex items-center justify-center">
        <User className="w-12 h-12 text-gray-400 opacity-50" />
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
  return (
    <section id="team" className="py-24 bg-[#FDFBF7]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            跨学科核心研发团队
          </h2>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            重新定义宠物健康管理，顶尖团队指导和支持构建宠物生态体系
          </p>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          核心研发团队
        </h3>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {coreTeam.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          顶尖指导与支持
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {supportTeam.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

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
              宠物医疗的致命监控盲区，作为家长最害怕{"\u201C"}突然的意外
              {"\u201D"}
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
              针对通用大模型在垂直领域的认知局限，引入海量真实临床数据进行深度训练，构建真正具备{"\u201C"}兽医临床思维{"\u201D"}的专用
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

      {/* Team */}
      <TeamSection />

      {/* Comparison */}
      <section className="py-24 bg-[#111827] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            降维打击：全栈技术护城河与{"\u201C"}价格屠夫{"\u201D"}
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
