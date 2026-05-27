"use client";

import { motion } from "framer-motion";
import {
  Zap,
  MessageSquare,
  History,
  ListChecks,
  Crown,
  Pencil,
  Eye,
  BookOpen,
  ArrowRight,
  Users,
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

const features = [
  {
    icon: Zap,
    title: "实时同步编辑",
    description: "团队成员同时在一篇文档中写作，所有变更即时同步，零冲突",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    icon: MessageSquare,
    title: "行内评论与讨论",
    description: "选中文本即可评论，支持讨论串、@提及和表情回应",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: History,
    title: "完整版本历史",
    description: "每次编辑自动存档，可视化对比差异，一键回滚到任意版本",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: ListChecks,
    title: "任务与工作流",
    description: "分配写作任务、设定截止日期，看板视图掌控全局进度",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

const detailSections = [
  {
    title: "实时编辑",
    items: ["多人同步编辑，无冲突", "光标位置实时可见", "离线编辑自动同步"],
  },
  {
    title: "评论与审阅",
    items: ["行内评论与讨论串", "@提及通知", "审阅状态追踪"],
  },
  {
    title: "版本控制",
    items: ["自动保存所有历史版本", "可视化版本对比 (diff)", "一键回滚到任意版本"],
  },
  {
    title: "任务管理",
    items: ["为团队成员分配写作任务", "设置截止日期和优先级", "看板视图追踪进度"],
  },
];

const roles = [
  { icon: Crown, label: "所有者", desc: "完全控制", color: "text-yellow-500" },
  { icon: Pencil, label: "编辑者", desc: "编辑 + 评论", color: "text-blue-500" },
  { icon: Eye, label: "审阅者", desc: "评论 + 建议", color: "text-emerald-500" },
  { icon: BookOpen, label: "查看者", desc: "只读", color: "text-muted-foreground" },
];

export default function CollaborationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-500/5 via-background to-emerald-500/5 px-4 pb-12 pt-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-sm text-blue-600 dark:text-blue-400">
            <Users size={14} />
            团队协作
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            与团队一起，创作更好的内容
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            实时协同编辑，流畅如同面对面沟通
          </p>
          <div className="mt-8">
            <Button href="/signup" size="lg">
              开始团队协作 <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Editor Demo */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
            {/* Title Bar */}
            <div className="flex items-center justify-between border-b border-border bg-muted px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <span className="text-sm text-muted-foreground">团队周报.md</span>
              </div>
              <div className="flex items-center gap-2">
                {/* Online avatars */}
                <div className="flex -space-x-2">
                  {["bg-purple-500", "bg-blue-500", "bg-emerald-500"].map((color, i) => (
                    <div
                      key={i}
                      className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-card text-xs font-bold text-white ${color}`}
                    >
                      {["L", "W", "C"][i]}
                    </div>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">3 人在线</span>
              </div>
            </div>

            {/* Editor Body */}
            <div className="grid lg:grid-cols-[1fr_280px]">
              {/* Editor Content */}
              <div className="p-6">
                <div className="space-y-4">
                  <div className="h-7 w-1/2 rounded bg-foreground/10" />
                  <div className="space-y-2">
                    <div className="h-4 w-full rounded bg-foreground/5" />
                    <div className="h-4 w-full rounded bg-foreground/5" />
                    <div className="relative h-4 w-4/5 rounded bg-foreground/5">
                      {/* Cursor indicator */}
                      <div className="absolute right-1/4 top-0 h-full w-0.5 bg-purple-500">
                        <span className="absolute -top-5 left-0 whitespace-nowrap rounded bg-purple-500 px-1.5 py-0.5 text-[10px] text-white">
                          李明
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-full rounded bg-foreground/5" />
                    <div className="relative h-4 w-full rounded bg-blue-500/10">
                      {/* Selection highlight */}
                      <div className="absolute left-1/3 top-0 h-full w-0.5 bg-blue-500">
                        <span className="absolute -top-5 left-0 whitespace-nowrap rounded bg-blue-500 px-1.5 py-0.5 text-[10px] text-white">
                          王芳
                        </span>
                      </div>
                    </div>
                    <div className="h-4 w-3/4 rounded bg-foreground/5" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-full rounded bg-foreground/5" />
                    <div className="h-4 w-5/6 rounded bg-foreground/5" />
                    <div className="relative h-4 w-2/3 rounded bg-foreground/5">
                      <div className="absolute right-1/3 top-0 h-full w-0.5 animate-pulse bg-emerald-500">
                        <span className="absolute -top-5 left-0 whitespace-nowrap rounded bg-emerald-500 px-1.5 py-0.5 text-[10px] text-white">
                          陈志远
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comment Panel */}
              <div className="border-l border-border bg-muted/50 p-4">
                <div className="mb-3 text-xs font-semibold text-muted-foreground">评论 (3)</div>
                <div className="space-y-3">
                  {[
                    { name: "王芳", text: "这段描述可以更简洁一些", color: "bg-blue-500" },
                    { name: "李明", text: "已修改，请查看", color: "bg-purple-500" },
                    { name: "陈志远", text: "数据部分需要更新", color: "bg-emerald-500" },
                  ].map((comment, i) => (
                    <div key={i} className="rounded-lg bg-card p-3">
                      <div className="flex items-center gap-2">
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white ${comment.color}`}
                        >
                          {comment.name[0]}
                        </div>
                        <span className="text-xs font-medium text-foreground">{comment.name}</span>
                      </div>
                      <p className="mt-1.5 text-xs text-muted-foreground">{comment.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Feature Cards */}
      <Section className="bg-muted">
        <SectionHeader title="协作功能一览" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={fadeUp}>
              <Card className="text-center">
                <div
                  className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${feature.bg}`}
                >
                  <feature.icon className={feature.color} size={24} />
                </div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Detail Sections */}
      <Section>
        <SectionHeader title="深入了解每一项协作能力" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid gap-6 sm:grid-cols-2"
        >
          {detailSections.map((section) => (
            <motion.div key={section.title} variants={fadeUp}>
              <Card>
                <h3 className="mb-3 text-lg font-semibold text-foreground">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Roles */}
      <Section className="bg-muted">
        <SectionHeader
          title="灵活的权限管理"
          subtitle="为团队中的每个角色分配合适的权限"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {roles.map((role) => (
            <motion.div key={role.label} variants={fadeUp}>
              <Card className="text-center">
                <role.icon className={`mx-auto mb-2 ${role.color}`} size={28} />
                <div className="font-semibold text-foreground">{role.label}</div>
                <div className="mt-1 text-xs text-muted-foreground">{role.desc}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-emerald-500 px-8 py-16 text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">邀请你的团队</h2>
          <p className="mt-4 text-lg text-white/80">
            免费计划支持最多 3 名协作者，升级即享无限协作
          </p>
          <div className="mt-8">
            <Button
              href="/signup"
              size="lg"
              className="bg-white text-blue-600 hover:bg-white/90"
            >
              免费创建团队 <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
