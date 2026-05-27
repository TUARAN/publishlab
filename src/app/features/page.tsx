"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Pen,
  FileText,
  CheckCheck,
  Languages,
  FileSearch,
  FolderOpen,
  Search,
  Star,
  Share2,
  BarChart3,
  TrendingUp,
  Globe,
  Hash,
  ArrowRight,
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

const aiFeatures = [
  {
    icon: Sparkles,
    title: "智能续写",
    description: "基于上下文预测并续写内容，保持风格一致，帮你突破写作瓶颈",
  },
  {
    icon: Pen,
    title: "风格改写",
    description: "将文本转换为正式、口语、学术、营销等风格，一键适配不同场景",
  },
  {
    icon: FileText,
    title: "全文生成",
    description: "输入主题和大纲，AI 生成完整文章，支持博客、小说、学术等类型",
  },
  {
    icon: CheckCheck,
    title: "语法纠错",
    description: "自动检测并修正语法、拼写、标点错误，让文本更加专业",
  },
  {
    icon: Languages,
    title: "多语言翻译",
    description: "支持 50+ 语言互译，保留原文格式和语义",
  },
  {
    icon: FileSearch,
    title: "摘要提取",
    description: "从长文中提取关键信息，生成不同长度的摘要",
  },
];

const cmsFeatures = [
  {
    icon: FolderOpen,
    title: "智能分类与标签",
    description: "AI 自动识别内容主题，推荐标签，支持自定义分类体系",
  },
  {
    icon: Search,
    title: "全文搜索",
    description: "毫秒级搜索所有文档内容，支持高级筛选和排序",
  },
  {
    icon: Star,
    title: "收藏与归档",
    description: "一键收藏重要文档，自动归档历史版本，永不丢失",
  },
  {
    icon: Share2,
    title: "灵活分享",
    description: "生成公开/私密分享链接，设置访问密码和有效期",
  },
  {
    icon: BarChart3,
    title: "数据分析",
    description: "查看每篇内容的阅读量、分享次数和读者互动数据",
  },
];

const seoFeatures = [
  {
    icon: TrendingUp,
    title: "SEO 评分",
    description: "实时分析文章 SEO 表现，给出优化建议",
  },
  {
    icon: Hash,
    title: "关键词建议",
    description: "AI 分析内容，推荐高流量关键词和长尾词",
  },
  {
    icon: Globe,
    title: "Meta 自动生成",
    description: "自动生成 Title、Description 和 Open Graph 标签",
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background px-4 pb-8 pt-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            强大功能，为每一步创作赋能
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            从 AI 写作到内容管理再到 SEO 优化，PublishLab 提供你需要的一切工具
          </p>
        </div>
      </section>

      {/* AI Writing */}
      <Section id="ai-writing">
        <SectionHeader
          title="AI 写作助手"
          subtitle="用 AI 加速你的创作流程，从构思到成稿"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {aiFeatures.map((feature) => (
            <motion.div key={feature.title} variants={fadeUp}>
              <Card>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Demo */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-16"
        >
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-8">
            <h3 className="mb-4 text-lg font-semibold text-foreground">试试 AI 写作</h3>
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">输入主题</label>
                <div className="flex items-center rounded-lg border border-border bg-background px-4 py-3 text-sm text-muted-foreground">
                  例如：如何提升团队写作效率...
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="mb-1.5 block text-sm font-medium text-foreground">选择功能</label>
                  <div className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground">
                    全文生成
                  </div>
                </div>
                <div className="flex-1">
                  <label className="mb-1.5 block text-sm font-medium text-foreground">风格</label>
                  <div className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground">
                    专业 / 商务
                  </div>
                </div>
              </div>
              <Button className="w-full">
                <Sparkles size={16} /> AI 生成
              </Button>
              <div className="rounded-lg border border-dashed border-primary/30 bg-primary/5 p-4">
                <p className="text-sm text-primary">AI 生成结果将在这里显示...</p>
                <div className="mt-3 space-y-2">
                  <div className="h-3 w-full animate-pulse rounded bg-primary/10" />
                  <div className="h-3 w-5/6 animate-pulse rounded bg-primary/10" />
                  <div className="h-3 w-4/6 animate-pulse rounded bg-primary/10" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Content Management */}
      <Section className="bg-muted" id="cms">
        <SectionHeader
          title="你的内容，井井有条"
          subtitle="强大的内容管理系统让你轻松组织、搜索和分享所有创作内容"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="space-y-4"
        >
          {cmsFeatures.map((feature) => (
            <motion.div key={feature.title} variants={fadeUp}>
              <Card className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                  <feature.icon size={20} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* SEO Tools */}
      <Section id="seo">
        <SectionHeader
          title="SEO 与社交分享优化"
          subtitle="让你的内容被更多人发现和分享"
        />
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-6"
          >
            {seoFeatures.map((feature) => (
              <motion.div key={feature.title} variants={fadeUp} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <feature.icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* SEO Preview Mock */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="rounded-xl border border-border bg-card p-6 shadow-lg">
              <h4 className="mb-4 text-sm font-semibold text-foreground">SEO 预览</h4>
              <div className="space-y-4">
                <div className="rounded-lg bg-muted p-4">
                  <div className="text-xs text-muted-foreground">搜索结果预览</div>
                  <div className="mt-2 text-base font-medium text-blue-600">
                    如何提升团队写作效率 | PublishLab
                  </div>
                  <div className="text-xs text-green-600">publishlab.com/blog/team-writing</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    5 个实用技巧帮助你的团队提升写作效率和内容质量...
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-muted p-4">
                  <span className="text-sm text-foreground">SEO 评分</span>
                  <span className="text-lg font-bold text-secondary">92/100</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["团队写作", "效率提升", "协作工具", "内容策略"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-muted">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">解锁全部功能</h2>
          <p className="mt-4 text-muted-foreground">免费开始，随时升级</p>
          <div className="mt-8">
            <Button href="/signup" size="lg">
              免费注册 <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
