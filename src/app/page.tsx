"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Users,
  BookOpen,
  Sparkles,
  Pen,
  Search,
  Share2,
  ArrowRight,
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
    title: "变现型 AI 写作",
    description: "围绕成交目标生成选题、大纲、正文和 CTA，不只写得快，更要卖得动",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Users,
    title: "协作交付",
    description: "和编辑、设计、运营并行推进，缩短从草稿到上架的交付周期",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: BookOpen,
    title: "多平台发布",
    description: "一键导出小册、长文和课程素材，适配知识星球、小报童等分发渠道",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
];

const monetizationPaths = [
  {
    icon: Search,
    title: "新手起步：免费引流小册",
    description: "先做 1 本免费小册验证选题，建立首批种子用户和私域线索。",
    cta: "查看调研数据",
    href: "/research",
  },
  {
    icon: Pen,
    title: "进阶成交：9.9-99 元付费产品",
    description: "把高频问题做成结构化小册或轻课程，跑通第一次真实成交。",
    cta: "查看变现工作流",
    href: "/monetize",
  },
  {
    icon: Share2,
    title: "规模放大：内容矩阵复用",
    description: "把一份内容拆成图文、短内容和课程素材，持续复用提升 ROI。",
    cta: "开始变现",
    href: "/signup",
  },
];

const showcases = [
  {
    title: "先找能卖的题，再开始写",
    description:
      "从搜索趋势和用户痛点出发，先判断有没有付费意愿，再生成可成交的标题、大纲和落地结构。",
    features: ["选题热度分析", "用户痛点聚类", "标题与卖点生成", "章节结构模板"],
    icon: Sparkles,
  },
  {
    title: "把写作流程拆成可交付节点",
    description:
      "用统一模板推进选题、写作、配图、排版和审核，减少返工，让每次发布都能复用经验。",
    features: ["多人实时同步编辑", "行内评论与讨论串", "完整版本历史", "任务分配与追踪"],
    icon: Users,
  },
  {
    title: "一次创作，多渠道分发成交",
    description:
      "写完后自动整理为适配不同平台的交付版本，让内容资产持续复用、持续带来收入。",
    features: ["小册与课程模板", "封面和配图生成", "EPUB/PDF 导出", "多平台发布清单"],
    icon: BookOpen,
  },
];

const stats = [
  { value: "10K+", label: "创作者在用" },
  { value: "6 步", label: "标准变现流程" },
  { value: "4 周", label: "最小启动周期" },
  { value: "3 条", label: "主流变现路径" },
];

const testimonials = [
  {
    quote: "以前总在打磨内容却卖不出去。现在先跑选题再写，第一本小册上线当周就出了第一单。",
    name: "周航",
    role: "独立创作者",
  },
  {
    quote: "我们把周更文章改成产品化交付，沉淀成可复用模板后，内容团队的成交效率明显更稳。",
    name: "刘敏",
    role: "内容团队负责人",
  },
  {
    quote: "最有价值的是完整 SOP，不再靠灵感硬写，而是按流程做出能卖的内容。",
    name: "陈哲",
    role: "知识产品作者",
  },
];

const caseStudies = [
  {
    title: "技术小册",
    niche: "AI 提效 / 编程",
    offer: "¥19.9 入门小册 + ¥99 系列课",
    timeline: "3 周完成从 0 到首单",
    result: "首月收入区间：¥2,000 - ¥8,000",
  },
  {
    title: "职场写作",
    niche: "简历 / 汇报 / 晋升",
    offer: "¥29 模板包 + ¥199 陪跑营",
    timeline: "4 周形成稳定转化",
    result: "首月收入区间：¥5,000 - ¥20,000",
  },
  {
    title: "知识型社群",
    niche: "副业 / 个人成长",
    offer: "免费手册引流 + ¥299 社群服务",
    timeline: "6 周跑通复购闭环",
    result: "季度收入区间：¥20,000 - ¥80,000",
  },
];

const quickStartChecklist = [
  {
    step: "01",
    title: "选一个能卖的题",
    description: "先选你熟悉且有明确需求的细分题目，避免一开始就做大而泛的主题。",
  },
  {
    step: "02",
    title: "生成第一本小册",
    description: "按模板产出大纲和正文，目标是本周内完成最小可交付版本。",
  },
  {
    step: "03",
    title: "发布并拿到首单",
    description: "优先发布到最熟悉的平台，观察转化并迭代下一版内容。",
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
                写作变现工作台
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                把你的写作变成
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  持续收入
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground">
                从选题、写作到发布与成交，PublishLab 帮你把内容做成可复制的变现产品，而不只是写完一篇文章。
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/signup" size="lg">
                  开始变现 <ArrowRight size={16} />
                </Button>
                <Button href="#paths" variant="secondary" size="lg">
                  查看 3 条变现路径
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

      {/* Quick Start Checklist */}
      <Section className="!pt-10">
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-primary">30 秒起步</p>
              <h2 className="mt-1 text-2xl font-bold text-foreground sm:text-3xl">
                写作变现 checklist
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                不用准备一整套系统，先跑通第一轮就会清晰很多。
              </p>
            </div>
            <Button href="/signup">
              开始变现 <ArrowRight size={16} />
            </Button>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {quickStartChecklist.map((item) => (
              <Card key={item.step}>
                <div className="inline-flex rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                  Step {item.step}
                </div>
                <h3 className="mt-3 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

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
          title="一站式写作变现工具链"
          subtitle="从内容生产到成交转化，核心环节一次配齐"
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

      {/* Monetization Paths */}
      <Section id="paths" className="bg-muted">
        <SectionHeader
          title="3 条写作变现路径"
          subtitle="按你的阶段选择起点：先跑通，再放大"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-3"
        >
          {monetizationPaths.map((path) => (
            <motion.div key={path.title} variants={fadeUp}>
              <Card className="flex h-full flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <path.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{path.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{path.description}</p>
                <Button href={path.href} variant="secondary" className="mt-5">
                  {path.cta} <ArrowRight size={16} />
                </Button>
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

      {/* Case Studies */}
      <Section>
        <SectionHeader
          title="变现案例参考"
          subtitle="不同阶段创作者的真实变现路径样本"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-3"
        >
          {caseStudies.map((item) => (
            <motion.div key={item.title} variants={fadeUp}>
              <Card className="h-full">
                <div className="text-sm font-semibold text-primary">{item.title}</div>
                <h3 className="mt-2 text-lg font-bold text-foreground">{item.offer}</h3>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <p>领域：{item.niche}</p>
                  <p>周期：{item.timeline}</p>
                </div>
                <div className="mt-5 rounded-lg bg-primary/10 px-3 py-2 text-sm font-medium text-primary">
                  {item.result}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-muted">
        <SectionHeader
          title="他们如何用写作拿到第一笔收入"
          subtitle="来自真实创作者的变现反馈"
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
          <h2 className="text-3xl font-bold sm:text-4xl">准备把内容变成可成交的产品了吗？</h2>
          <p className="mt-4 text-lg text-white/80">
            从第一本小册开始，跑通你的写作变现闭环
          </p>
          <div className="mt-8">
            <Button
              href="/signup"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              开始变现 <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
