"use client";

import { motion } from "framer-motion";
import {
  PenLine,
  LayoutTemplate,
  Image,
  Download,
  Rocket,
  ArrowRight,
  BookOpen,
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

const steps = [
  {
    num: 1,
    icon: PenLine,
    title: "智能写作",
    subtitle: "AI 助你构思与创作",
    description:
      "输入书名和主题，AI 自动生成大纲。逐章节展开写作，智能续写帮你突破瓶颈，保持创作流畅。",
    features: ["AI 生成章节大纲", "智能续写与扩展", "章节拖拽排序"],
    color: "from-purple-500 to-purple-600",
  },
  {
    num: 2,
    icon: LayoutTemplate,
    title: "专业排版",
    subtitle: "20+ 精美模板，一键套用",
    description:
      "从小说、教程到学术论文，选择适合你的排版模板。自定义字体、间距、页边距，所见即所得。",
    features: ["20+ 排版模板", "自定义字体与样式", "实时预览"],
    color: "from-blue-500 to-blue-600",
  },
  {
    num: 3,
    icon: Image,
    title: "封面设计",
    subtitle: "AI 生成封面，或从模板库选择",
    description:
      "描述你的书籍风格，AI 为你生成多个封面方案。也可从专业模板库中选择并自定义。",
    features: ["AI 封面生成", "100+ 封面模板", "自定义编辑器"],
    color: "from-pink-500 to-pink-600",
  },
  {
    num: 4,
    icon: Download,
    title: "多格式导出",
    subtitle: "EPUB、PDF、MOBI，一键导出",
    description: "支持所有主流电子书格式，确保在各种设备和平台上完美呈现。",
    features: ["EPUB 3 标准", "PDF 高清排版", "MOBI / HTML / DOCX"],
    color: "from-emerald-500 to-emerald-600",
  },
  {
    num: 5,
    icon: Rocket,
    title: "一键出版",
    subtitle: "直连主流出版平台",
    description:
      "一键提交到 Amazon KDP、Apple Books、豆瓣阅读等平台，自动适配各平台要求。",
    features: ["Amazon KDP", "Apple Books", "豆瓣阅读 / 微信读书"],
    color: "from-orange-500 to-orange-600",
  },
];

const formats = [
  { name: "EPUB 3", desc: "通用电子书标准" },
  { name: "PDF", desc: "高清打印排版" },
  { name: "MOBI", desc: "Kindle 兼容" },
  { name: "HTML", desc: "网页发布" },
  { name: "DOCX", desc: "Word 兼容" },
];

const templates = [
  { name: "现代小说", category: "小说", color: "from-violet-400 to-violet-600" },
  { name: "技术教程", category: "教程", color: "from-blue-400 to-blue-600" },
  { name: "诗歌散文", category: "诗集", color: "from-rose-400 to-rose-600" },
  { name: "学术论文", category: "学术", color: "from-emerald-400 to-emerald-600" },
  { name: "商业报告", category: "商务", color: "from-amber-400 to-amber-600" },
  { name: "儿童绘本", category: "绘本", color: "from-pink-400 to-pink-600" },
];

export default function EbookPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-500/5 via-background to-orange-500/5 px-4 pb-12 pt-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/5 px-4 py-1.5 text-sm text-pink-600 dark:text-pink-400">
            <BookOpen size={14} />
            电子书出版
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            从手稿到出版，只需一步
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            专业排版、精美封面、多格式导出，让每个人都能成为出版者
          </p>
          <div className="mt-8">
            <Button href="/signup" size="lg">
              开始创建电子书 <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline Progress */}
      <Section>
        <SectionHeader title="5 步完成出版" subtitle="从创意到上架的完整工作流" />
        {/* Step Indicators */}
        <div className="mb-16 hidden items-center justify-center gap-0 md:flex">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${step.color} text-sm font-bold text-white`}
              >
                {step.num}
              </div>
              {i < steps.length - 1 && (
                <div className="h-0.5 w-16 bg-gradient-to-r from-border to-border lg:w-24" />
              )}
            </div>
          ))}
        </div>

        {/* Step Details */}
        <div className="space-y-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`grid items-center gap-10 lg:grid-cols-2`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div
                  className={`mb-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${step.color} px-3 py-1 text-xs font-bold text-white`}
                >
                  Step {step.num}
                </div>
                <h3 className="text-2xl font-bold text-foreground">{step.subtitle}</h3>
                <p className="mt-3 text-muted-foreground">{step.description}</p>
                <ul className="mt-5 space-y-2">
                  {step.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 size={16} className="shrink-0 text-secondary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="aspect-[4/3] rounded-xl border border-border bg-card p-6 shadow-lg">
                  <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color}`}
                    >
                      <step.icon size={32} className="text-white" />
                    </div>
                    <div className="text-lg font-semibold text-foreground">{step.title}</div>
                    <div className="text-sm text-muted-foreground">{step.subtitle}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Export Formats */}
      <Section className="bg-muted">
        <SectionHeader
          title="支持所有主流格式"
          subtitle="一次创作，多平台发布"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {formats.map((format) => (
            <motion.div key={format.name} variants={fadeUp}>
              <Card className="text-center">
                <div className="mb-2 text-2xl font-bold text-primary">{format.name}</div>
                <div className="text-xs text-muted-foreground">{format.desc}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Templates */}
      <Section>
        <SectionHeader
          title="精美排版模板"
          subtitle="为不同类型的书籍量身打造"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {templates.map((template) => (
            <motion.div key={template.name} variants={fadeUp}>
              <Card className="overflow-hidden p-0">
                <div
                  className={`flex h-40 items-center justify-center bg-gradient-to-br ${template.color}`}
                >
                  <BookOpen size={48} className="text-white/80" />
                </div>
                <div className="p-4">
                  <div className="text-sm font-semibold text-foreground">{template.name}</div>
                  <div className="text-xs text-muted-foreground">{template.category}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-8 text-center">
          <Button href="#" variant="secondary">
            查看全部模板 <ArrowRight size={16} />
          </Button>
        </div>
      </Section>

      {/* Publishing Platforms */}
      <Section className="bg-muted">
        <SectionHeader
          title="直连主流出版平台"
          subtitle="一键提交，自动适配各平台要求"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {["Amazon KDP", "Apple Books", "豆瓣阅读", "微信读书"].map((platform) => (
            <motion.div key={platform} variants={fadeUp}>
              <Card className="text-center">
                <div className="mb-2 flex h-12 w-12 mx-auto items-center justify-center rounded-xl bg-foreground/5">
                  <Rocket size={24} className="text-primary" />
                </div>
                <div className="text-sm font-semibold text-foreground">{platform}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="rounded-2xl bg-gradient-to-r from-pink-600 to-orange-500 px-8 py-16 text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">创建你的第一本电子书</h2>
          <p className="mt-4 text-lg text-white/80">
            从今天开始，用 PublishLab 实现你的出版梦想
          </p>
          <div className="mt-8">
            <Button
              href="/signup"
              size="lg"
              className="bg-white text-pink-600 hover:bg-white/90"
            >
              免费开始 <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
