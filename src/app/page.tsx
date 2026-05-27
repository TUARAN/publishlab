"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Users,
  BookOpen,
  Sparkles,
  Pen,
  Languages,
  FileCheck,
  Search,
  Star,
  Share2,
  BarChart3,
  ArrowRight,
  Play,
  CheckCircle2,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const coreFeatures = [
  {
    icon: Bot,
    title: "AI 写作助手",
    description: "智能生成文章、改写润色、翻译适配，支持 20+ 内容类型",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Users,
    title: "实时协作",
    description: "多人同时编辑，评论批注，版本对比，像 Google Docs 一样流畅",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: BookOpen,
    title: "电子书出版",
    description: "专业排版，自动生成目录，导出 EPUB/PDF，直连各大出版平台",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
];

const showcases = [
  {
    title: "AI 驱动，让写作不再困难",
    description:
      "输入主题或大纲，AI 即刻生成高质量文章。支持续写、改写、翻译和语法纠错，让每一段文字都恰到好处。",
    features: ["智能续写与全文生成", "多风格改写", "50+ 语言翻译", "语法与拼写纠错"],
    icon: Sparkles,
  },
  {
    title: "团队协作，高效无缝",
    description:
      "邀请团队成员加入文档，实时看到彼此的光标和编辑。行内评论、版本历史和任务分配，让协作像对话一样自然。",
    features: ["多人实时同步编辑", "行内评论与讨论串", "完整版本历史", "任务分配与追踪"],
    icon: Users,
  },
  {
    title: "从手稿到出版，一站搞定",
    description:
      "从创作到排版，从封面设计到多平台发布。PublishLab 让每个人都能成为出版者，无需专业排版技能。",
    features: ["20+ 排版模板", "AI 封面生成", "EPUB/PDF/MOBI 导出", "直连出版平台"],
    icon: BookOpen,
  },
];

const stats = [
  { value: "50K+", label: "创作者" },
  { value: "1M+", label: "篇文章" },
  { value: "10K+", label: "本电子书" },
  { value: "99.9%", label: "可用性" },
];

const testimonials = [
  {
    quote: "PublishLab 让我的写作效率提升了 3 倍。AI 续写功能帮我突破了无数次写作瓶颈。",
    name: "李明",
    role: "自由撰稿人",
  },
  {
    quote: "团队协作功能太棒了，我们 5 个编辑同时修改一篇长文，完全没有冲突。",
    name: "王芳",
    role: "内容团队主编",
  },
  {
    quote: "用 PublishLab 出版了我的第一本电子书，从写作到上架只花了两周。",
    name: "陈志远",
    role: "独立作者",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid items-center gap-12 lg:grid-cols-2"
          >
            <motion.div variants={fadeUp}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
                <Sparkles size={14} />
                AI 驱动的下一代写作平台
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                用 AI 释放你的
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  创作力
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground">
                从灵感到出版，PublishLab 为作家、博主和出版者提供智能写作、实时协作和一键出版的完整工具链。
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/signup" size="lg">
                  免费开始写作 <ArrowRight size={16} />
                </Button>
                <Button href="#demo" variant="secondary" size="lg">
                  <Play size={16} /> 观看演示
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                无需信用卡 &middot; 永久免费计划可用
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="relative">
              <div className="aspect-[4/3] rounded-2xl border border-border bg-card p-4 shadow-2xl">
                {/* Mock Editor UI */}
                <div className="flex items-center gap-2 border-b border-border pb-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="ml-4 flex gap-2 text-xs text-muted-foreground">
                    <span className="rounded bg-muted px-2 py-0.5">文件</span>
                    <span className="rounded bg-muted px-2 py-0.5">编辑</span>
                    <span className="rounded bg-primary/10 px-2 py-0.5 text-primary">AI 助手</span>
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="h-6 w-3/4 rounded bg-foreground/10" />
                  <div className="h-4 w-full rounded bg-foreground/5" />
                  <div className="h-4 w-full rounded bg-foreground/5" />
                  <div className="h-4 w-5/6 rounded bg-foreground/5" />
                  <div className="mt-4 rounded-lg border border-primary/30 bg-primary/5 p-3">
                    <div className="flex items-center gap-2 text-xs text-primary">
                      <Sparkles size={12} />
                      AI 正在生成...
                    </div>
                    <div className="mt-2 h-3 w-4/5 animate-pulse rounded bg-primary/20" />
                    <div className="mt-1.5 h-3 w-3/5 animate-pulse rounded bg-primary/20" />
                  </div>
                  <div className="h-4 w-full rounded bg-foreground/5" />
                  <div className="h-4 w-2/3 rounded bg-foreground/5" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <Section className="!py-10">
        <p className="text-center text-sm font-medium text-muted-foreground">
          已有 10,000+ 创作者信赖
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-40">
          {["TechCrunch", "36Kr", "少数派", "即刻", "Medium", "知乎"].map((brand) => (
            <span key={brand} className="text-lg font-bold text-foreground">
              {brand}
            </span>
          ))}
        </div>
      </Section>

      {/* Core Features */}
      <Section>
        <SectionHeader
          title="一站式创作工具链"
          subtitle="从写作到出版，PublishLab 覆盖内容创作的每一个环节"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid gap-8 md:grid-cols-3"
        >
          {coreFeatures.map((feature) => (
            <motion.div key={feature.title} variants={fadeUp}>
              <Card className="text-center">
                <div
                  className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${feature.bg}`}
                >
                  <feature.icon className={feature.color} size={28} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Product Showcases */}
      <Section className="bg-muted" id="demo">
        <SectionHeader title="看看 PublishLab 能为你做什么" />
        <div className="space-y-20">
          {showcases.map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-4 text-muted-foreground">{item.description}</p>
                <ul className="mt-6 space-y-3">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle2 size={16} className="shrink-0 text-secondary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="aspect-video rounded-xl border border-border bg-card p-6 shadow-lg">
                  <div className="flex h-full items-center justify-center">
                    <item.icon size={64} className="text-primary/30" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center">
              <div className="text-4xl font-extrabold text-primary">{stat.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-muted">
        <SectionHeader
          title="听听创作者们怎么说"
          subtitle="来自全球创作者的真实反馈"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid gap-8 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={fadeUp}>
              <Card>
                <p className="text-sm italic text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA Banner */}
      <Section>
        <div className="rounded-2xl bg-gradient-to-r from-primary to-primary-dark px-8 py-16 text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">准备好开始你的创作之旅了吗？</h2>
          <p className="mt-4 text-lg text-white/80">
            加入 50,000+ 创作者，用 AI 提升你的写作效率
          </p>
          <div className="mt-8">
            <Button
              href="/signup"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              免费开始写作 <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
