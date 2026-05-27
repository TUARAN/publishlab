"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  Workflow,
  Megaphone,
  CalendarRange,
  Gauge,
  ArrowRight,
  Gift,
  BookOpen,
  GraduationCap,
  Crown,
  Lightbulb,
  ListTree,
  PenLine,
  Image as ImageIcon,
  LayoutTemplate,
  Share2,
  CheckCircle2,
  ShoppingBag,
  Users,
  Repeat,
  Building2,
  TrendingUp,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const tiers = [
  {
    icon: Gift,
    tier: "引流款",
    form: "免费小册 / PDF",
    price: "¥0",
    cycle: "1 天",
    claude: "大纲 + 正文",
    image: "封面 + 章节插图",
    color: "from-slate-400 to-slate-500",
    badge: "bg-slate-500/10 text-slate-600 dark:text-slate-400",
  },
  {
    icon: BookOpen,
    tier: "入门款",
    form: "付费小册",
    price: "¥9.9 – 29",
    cycle: "2–3 天",
    claude: "结构化教程",
    image: "信息图 / 流程图",
    color: "from-emerald-400 to-emerald-600",
    badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: GraduationCap,
    tier: "主力款",
    form: "系列课程",
    price: "¥99 – 299",
    cycle: "1–2 周",
    claude: "课程脚本 + 讲义",
    image: "课件配图 + 缩略图",
    color: "from-blue-400 to-blue-600",
    badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: Crown,
    tier: "高客单",
    form: "训练营 / 陪跑",
    price: "¥999+",
    cycle: "持续",
    claude: "案例库 + 答疑",
    image: "个性化作品图",
    color: "from-amber-400 to-orange-500",
    badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
];

const pipeline = [
  {
    num: 1,
    icon: Lightbulb,
    title: "选题",
    desc: "关键词工具找痛点 → Claude 生成 10 个标题 → 选 1 个最具钩子的角度。",
  },
  {
    num: 2,
    icon: ListTree,
    title: "大纲",
    desc: "Claude 输出三级目录 + 读者画像 + 转化钩子，确认结构闭环。",
  },
  {
    num: 3,
    icon: PenLine,
    title: "写作",
    desc: "分章生成,每章固定结构:场景 → 原理 → 步骤 → 案例 → 作业。",
  },
  {
    num: 4,
    icon: ImageIcon,
    title: "配图",
    desc: "Codex Image2 出图:封面 1 张 + 信息图 3–5 张 + 章节头图 N 张。",
  },
  {
    num: 5,
    icon: LayoutTemplate,
    title: "排版",
    desc: "Markdown → Notion / 飞书文档 / PDF / Gitbook,选最贴近读者的载体。",
  },
  {
    num: 6,
    icon: Share2,
    title: "分发",
    desc: "小报童 + 知识星球 + 公众号 + 即刻 + 视频号切片,矩阵导流。",
  },
];

const channels = [
  {
    icon: ShoppingBag,
    title: "直接售卖",
    description: "小报童订阅、知识星球社群、Gumroad 海外收款。",
    items: ["小报童", "知识星球", "Gumroad"],
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Users,
    title: "导流分销",
    description: "免费小册做钩子 → 付费课程 → 1v1 咨询,层层加价。",
    items: ["免费引流", "付费转化", "高客单咨询"],
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Repeat,
    title: "二次复用",
    description: "小册章节切片 → 公众号 / 小红书 / 短视频脚本,内容资产复利。",
    items: ["公众号", "小红书", "短视频"],
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    icon: Building2,
    title: "B 端授权",
    description: "把课程模块授权给教育机构 / 企业内训,获取规模化收入。",
    items: ["教育机构", "企业内训", "授权分成"],
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
];

const weeks = [
  {
    week: "W1",
    title: "定垂直 + 1 本免费小册",
    desc: "锁定领域(AI 应用 / 副业 / 设计 / 编程),发布免费小册 + 公众号承接流量。",
    color: "from-purple-500 to-purple-600",
  },
  {
    week: "W2",
    title: "发布 ¥19 付费小册",
    desc: "跑通支付与交付链路,验证最小可行变现闭环。",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    week: "W3",
    title: "上线 ¥99 系列课程",
    desc: "4–6 节课,用 W1 的免费小册持续导流,验证主力款转化率。",
    color: "from-blue-500 to-blue-600",
  },
  {
    week: "W4",
    title: "复盘 ROI 决定方向",
    desc: "横向扩 SKU 做矩阵,或纵向深耕拉客单价至 ¥999+ 训练营。",
    color: "from-orange-500 to-pink-500",
  },
];

const metrics = [
  {
    icon: PenLine,
    value: "≤ 8h",
    label: "单本小册生产时间",
    desc: "Claude + Image2 流水线,远低于手工创作。",
  },
  {
    icon: TrendingUp,
    value: "≥ 5%",
    label: "引流→付费转化率",
    desc: "免费小册→¥19 入门款的基线门槛。",
  },
  {
    icon: GraduationCap,
    value: "≥ 40%",
    label: "课程完课率",
    desc: "完课率影响口碑和复购,是主力款生命线。",
  },
  {
    icon: Gauge,
    value: "≥ 3",
    label: "LTV / CAC",
    desc: "单用户终身价值与获客成本比,决定能否规模化投放。",
  },
];

export default function MonetizePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-500/5 via-background to-pink-500/5 px-4 pb-12 pt-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-1.5 text-sm text-amber-600 dark:text-amber-400">
            <Sparkles size={14} />
            Claude × Codex Image2 变现工作流
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            写小册、出课程,
            <span className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
              一条龙变现
            </span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            从选题到分发的结构化 SOP — 4 层产品矩阵、6 步生产流水线、4 周启动节奏。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/signup" size="lg">
              开始变现 <ArrowRight size={16} />
            </Button>
            <Button href="#pipeline" variant="secondary" size="lg">
              查看 SOP
            </Button>
          </div>
        </div>
      </section>

      {/* Product Matrix */}
      <Section id="matrix">
        <SectionHeader
          title="一、产品矩阵分层"
          subtitle="从免费引流到高客单训练营,客单价阶梯式跃迁"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {tiers.map((t) => (
            <motion.div key={t.tier} variants={fadeUp}>
              <Card className="h-full">
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${t.color}`}
                >
                  <t.icon size={24} className="text-white" />
                </div>
                <div className={`mb-2 inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${t.badge}`}>
                  {t.tier}
                </div>
                <h3 className="text-lg font-bold text-foreground">{t.form}</h3>
                <div className="mt-1 text-2xl font-extrabold text-foreground">{t.price}</div>
                <div className="mt-4 space-y-2 text-xs text-muted-foreground">
                  <div className="flex justify-between border-b border-border pb-1.5">
                    <span>生产周期</span>
                    <span className="font-medium text-foreground">{t.cycle}</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-1.5">
                    <span>Claude 产出</span>
                    <span className="font-medium text-foreground">{t.claude}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Image2 产出</span>
                    <span className="font-medium text-foreground">{t.image}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Pipeline */}
      <Section id="pipeline" className="bg-muted">
        <SectionHeader
          title="二、6 步生产流水线"
          subtitle="可复用的 SOP — 一次跑通,本本复用"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {pipeline.map((step) => (
            <motion.div key={step.num} variants={fadeUp}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-lg font-bold text-white">
                    {step.num}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <step.icon size={16} className="text-primary" />
                      <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Channels */}
      <Section id="channels">
        <SectionHeader
          title="三、变现渠道组合"
          subtitle="直接售卖 + 导流分销 + 二次复用 + B 端授权"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-2"
        >
          {channels.map((c) => (
            <motion.div key={c.title} variants={fadeUp}>
              <Card className="h-full">
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${c.bg}`}>
                  <c.icon className={c.color} size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.items.map((i) => (
                    <span
                      key={i}
                      className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-foreground"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* 4-Week Plan */}
      <Section id="roadmap" className="bg-muted">
        <SectionHeader
          title="四、4 周启动节奏"
          subtitle="从 0 到 1 的最短路径"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {weeks.map((w) => (
            <motion.div key={w.week} variants={fadeUp}>
              <Card className="h-full">
                <div
                  className={`mb-3 inline-block rounded-full bg-gradient-to-r ${w.color} px-3 py-1 text-xs font-bold text-white`}
                >
                  {w.week}
                </div>
                <h3 className="text-base font-bold text-foreground">{w.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{w.desc}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Key Metrics */}
      <Section id="metrics">
        <SectionHeader
          title="五、关键指标"
          subtitle="盯紧这 4 个数,变现链路就跑通了"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {metrics.map((m) => (
            <motion.div key={m.label} variants={fadeUp}>
              <Card className="h-full text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <m.icon className="text-primary" size={24} />
                </div>
                <div className="text-3xl font-extrabold text-primary">{m.value}</div>
                <div className="mt-1 text-sm font-semibold text-foreground">{m.label}</div>
                <p className="mt-2 text-xs text-muted-foreground">{m.desc}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="rounded-2xl bg-gradient-to-r from-amber-500 to-pink-500 px-8 py-16 text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">把一份知识,卖出四种形态</h2>
          <p className="mt-4 text-lg text-white/90">
            用 PublishLab 把 Claude 的脑子和 Image2 的眼睛串成一条变现流水线
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/signup" size="lg" className="bg-white text-pink-600 hover:bg-white/90">
              免费开始 <ArrowRight size={16} />
            </Button>
            <Button
              href="#pipeline"
              size="lg"
              variant="ghost"
              className="border border-white/40 text-white hover:bg-white/10"
            >
              再看一遍 SOP
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
