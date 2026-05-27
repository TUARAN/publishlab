"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  Wallet,
  Users,
  Megaphone,
  BookOpen,
  Code2,
  Feather,
  Crown,
  Trophy,
  ArrowRight,
  ExternalLink,
  AlertTriangle,
  Lightbulb,
  Target,
  Zap,
  Headphones,
  Building2,
  Library,
  ShoppingCart,
  Tag,
  Bookmark,
  TrendingDown,
  FileText,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShareExportBar } from "@/components/share/share-export-bar";
import { RESEARCH_MARKDOWN } from "./research-markdown";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.06 } },
};

/* ───────────────────── 1. 变现机制总览 ───────────────────── */
const mechanisms = [
  {
    icon: Megaphone,
    title: "流量分成",
    color: "from-slate-400 to-slate-600",
    src: "广告主 → 平台 → 你",
    platforms: "公众号流量主 / 头条 / 视频号 / 百家号",
    difficulty: "低",
    ceiling: "中",
  },
  {
    icon: Users,
    title: "付费订阅 / 社群",
    color: "from-emerald-400 to-emerald-600",
    src: "读者 → 你(平台抽 1%-5%)",
    platforms: "小报童 / 知识星球",
    difficulty: "中",
    ceiling: "高",
  },
  {
    icon: BookOpen,
    title: "付费课程 / 专栏",
    color: "from-blue-400 to-blue-600",
    src: "读者 → 平台分账(40%-55%)",
    platforms: "得到 / 极客时间 / 知乎盐选 / 掘金小册",
    difficulty: "高",
    ceiling: "高",
  },
  {
    icon: Wallet,
    title: "软广 / 品牌合作",
    color: "from-purple-400 to-purple-600",
    src: "品牌方 → 你",
    platforms: "公众号软文 / 小红书蒲公英",
    difficulty: "中",
    ceiling: "中高",
  },
  {
    icon: Crown,
    title: "私域转化",
    color: "from-amber-400 to-orange-500",
    src: "读者 → 你(无平台抽成)",
    platforms: "个人号 / 企微 + 文章导流",
    difficulty: "高",
    ceiling: "极高",
  },
];

/* ───────────────────── 2. 知识/内容平台对比 ───────────────────── */
const knowledgePlatforms = [
  {
    name: "小报童",
    tag: "付费专栏",
    color: "bg-emerald-500",
    threshold: "无门槛",
    take: "84% 到手",
    headTop: "私域文姐年入 7 位数",
    headRange: "头部订阅 5000–10000+",
    notes: "微信生态内,抽成低",
  },
  {
    name: "知识星球",
    tag: "付费社群",
    color: "bg-cyan-500",
    threshold: "需自带信任",
    take: "约 95% 到手",
    headTop: "唐朝 10 分钟 900 万",
    headRange: "洪灏 10 天 764 万 / 刘煜辉 7 年 483 万",
    notes: "财经/投资是巨型赛道",
  },
  {
    name: "公众号流量主",
    tag: "广告分成",
    color: "bg-slate-500",
    threshold: "≥100 粉丝",
    take: "eCPM 0.5–2 元/千",
    headTop: "金融类点击 5–8 元",
    headRange: "教育 2–4 / 电商 0.8–2",
    notes: "纯流量主难,靠软广和导流",
  },
  {
    name: "今日头条",
    tag: "流量分成",
    color: "bg-red-500",
    threshold: "新人易过审",
    take: "互动系数最高 3×",
    headTop: "粉丝 1 万阅读 ≈ 100 元",
    headRange: "非粉 1 万阅读 ≈ 3 元",
    notes: "靠粉丝沉淀,不是纯爆款",
  },
  {
    name: "知乎盐选",
    tag: "稿费分成",
    color: "bg-blue-500",
    threshold: "盐选投稿审核",
    take: "实际到手 45%",
    headTop: "头部故事单篇过万",
    headRange: "中部月稿费几百-几千",
    notes: "适合故事/虚构写手",
  },
  {
    name: "得到 / 极客时间",
    tag: "精品课程",
    color: "bg-amber-500",
    threshold: "需领域信誉",
    take: "作者约 40%-50%",
    headTop: "薛兆丰/李笑来数百万",
    headRange: "新人几乎进不去",
    notes: "当背书,不当主收入",
  },
  {
    name: "小红书蒲公英",
    tag: "品牌商单",
    color: "bg-pink-500",
    threshold: "≥1000 粉丝",
    take: "品牌方付 10% 服务费",
    headTop: "美妆/母婴单条 1000-2000",
    headRange: "通用 200-2000",
    notes: "纯文字写手不友好",
  },
  {
    name: "视频号",
    tag: "分成 3.0",
    color: "bg-green-500",
    threshold: "认证即可",
    take: "视频系数 1.2×",
    headTop: "图文转视频蹭红利",
    headRange: "2025 风口期",
    notes: "图文系数 1.0×",
  },
];

/* ───────────────────── 3. 掘金小册数据 ───────────────────── */
const juejinTop = [
  { rank: 1, name: "Redis 深度历险:核心原理与应用实践", sales: 19351, price: 19.9, revenue: 385085 },
  { rank: 2, name: "前端面试之道", sales: 7479, price: 49.9, revenue: 373202 },
  { rank: 3, name: "MySQL 是怎样运行的:从根儿上理解 MySQL", sales: 7396, price: 29.9, revenue: 221140 },
  { rank: 4, name: "剖析 Vue.js 内部运行机制", sales: 7033, price: 19.9, revenue: 139957 },
  { rank: 5, name: "Netty 入门与实战:仿写微信 IM", sales: 5999, price: 29.9, revenue: 179370 },
  { rank: 6, name: "前端性能优化原理与实践", sales: 5772, price: 19.9, revenue: 114863 },
  { rank: 7, name: "如何写一本掘金小册", sales: 5551, price: 9.9, revenue: 54955 },
  { rank: 8, name: "你不知道的 Chrome 调试技巧", sales: 5090, price: 19.9, revenue: 101291 },
  { rank: 9, name: "Git 原理详解及实用指南", sales: 4968, price: 19.9, revenue: 98863 },
  { rank: 10, name: "使用 webpack 定制前端开发环境", sales: 4382, price: 9.9, revenue: 43382 },
];
const maxJuejinSales = Math.max(...juejinTop.map((b) => b.sales));

/* ───────────────────── 4. 小说平台对比 ───────────────────── */
const novelPlatforms = [
  {
    name: "起点中文网",
    parent: "阅文集团",
    icon: "📜",
    color: "from-red-500 to-orange-500",
    audience: "男频付费天花板",
    model: "VIP 订阅",
    split: "新政 70% 分成",
    bonus: "新书前 3 月 ¥1500/月 + 500 均订奖 ¥1000/月",
    pro: ["付费能力最强读者", "完善晋升体系", "影视/游戏化路径成熟"],
    con: ["竞争白热化", "新人扑街率高", "完本压力大"],
    fit: "已有写作功底的男频作者",
  },
  {
    name: "番茄小说",
    parent: "字节跳动",
    icon: "🍅",
    color: "from-orange-500 to-red-400",
    audience: "免费阅读最大盘",
    model: "广告分成(免费阅读)",
    split: "按广告观看分成",
    bonus: "全勤 ¥600-800/月(需 10 万字 + 听读收益 ¥200)",
    pro: ["签约门槛极低", "流量大反馈快", "题材接受度高"],
    con: ["50 万作者中年入 10 万仅 0.65%", "中下层日入几块", "纯粹拼流量"],
    fit: "新人练笔 + 验证选题",
  },
  {
    name: "七猫小说",
    parent: "趣阅科技",
    icon: "🐱",
    color: "from-amber-500 to-yellow-500",
    audience: "免费 + 保底",
    model: "保底稿酬 + 超额分成",
    split: "千字 20 起,大神千字 1000",
    bonus: "全勤千字 ¥6 (日更 4000 字)",
    pro: ["新人有保底收入", "稳定不靠运气", "门槛友好"],
    con: ["天花板低于起点", "需稳定日更", "题材偏大众"],
    fit: "追求稳定现金流的全职新人",
  },
  {
    name: "晋江文学城",
    parent: "晋江原创",
    icon: "🌸",
    color: "from-pink-500 to-rose-500",
    audience: "女频证道之地",
    model: "VIP 章节订阅(¥0.03/千字)",
    split: "网页 40% / APP 50%",
    bonus: "日更 3k/6k/9k 字 → 5%/10%/15% 加成",
    pro: ["实体书 80% 归作者", "影视改编 50% 分成", "推荐机制公平"],
    con: ["不能多平台发布", "新人曝光难", "言情/纯爱内卷严重"],
    fit: "女频言情/纯爱/幻想作者",
  },
  {
    name: "纵横中文网",
    parent: "百度系",
    icon: "⚔️",
    color: "from-blue-500 to-indigo-500",
    audience: "男频次级阵地",
    model: "VIP 订阅 + 保底",
    split: "保底 + 分成",
    bonus: "千字保底 + 全勤",
    pro: ["签约比起点容易", "保底稿酬有竞争力", "扶持新人"],
    con: ["读者付费力低于起点", "影视化资源少", "头部天花板不高"],
    fit: "想签约但起点过不了的男频作者",
  },
  {
    name: "刺猬猫",
    parent: "次元文化",
    icon: "🦔",
    color: "from-purple-500 to-violet-500",
    audience: "二次元/轻小说",
    model: "订阅 + 打赏",
    split: "约 50%",
    bonus: "细分赛道扶持",
    pro: ["二次元垂直社区", "用户付费意愿强", "题材自由度高"],
    con: ["盘子小", "破圈难", "需懂梗"],
    fit: "ACGN/轻小说/二次元写手",
  },
];

/* ───────────────────── 5. 关键洞察 ───────────────────── */
const insights = [
  {
    icon: Target,
    title: "单价 × 信任 = 收入",
    desc: "公众号流量主 ¥0.3-2/人,1v1 咨询 ¥1000-10000/人 — 差 100 倍本质是信任差 100 倍。",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: Trophy,
    title: "头部效应极端化",
    desc: "番茄 50 万作者中年入 10 万仅 0.65%;知识星球 Top 1% 拿走 80%+ 收入。",
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    icon: AlertTriangle,
    title: "单平台是死路",
    desc: "公众号封号即归零。最稳是「公域引流 → 订阅复利 → 高客单 → 私域沉淀」四级火箭。",
    color: "bg-red-500/10 text-red-600 dark:text-red-400",
  },
  {
    icon: Zap,
    title: "AI 是杠杆不是答案",
    desc: "AI 代写小红书月入 1.2 万,但平台正打标 AI 内容。AI 做规模,人工做差异化。",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
];

/* ───────────────────── 6. 路径建议 ───────────────────── */
const paths = [
  {
    level: "A",
    title: "零基础(0 粉 0 信誉)",
    color: "from-slate-500 to-slate-600",
    steps: [
      "W1–4 头条号写垂直科普(粉丝阅读单价高 33×)",
      "M2–3 公众号承接,养到 1000 粉开蒲公英",
      "M4–6 开小报童 ¥9.9 体验专栏",
    ],
    goal: "6 个月月入 ¥3000–5000",
  },
  {
    level: "B",
    title: "已有 1000+ 粉丝",
    color: "from-emerald-500 to-emerald-600",
    steps: [
      "立即开小报童 ¥29–99 入门款",
      "公众号软广 + 蒲公英商单同步",
      "6 个月内开 ¥199–488 知识星球",
    ],
    goal: "1 年月入 ¥1–3 万",
  },
  {
    level: "C",
    title: "已有领域信誉(KOL)",
    color: "from-amber-500 to-orange-500",
    steps: [
      "跳过流量平台,直接 ¥488–1499 星球",
      "得到/极客时间课程当背书",
      "训练营 ¥2999–9999 + 企业内训",
    ],
    goal: "年入 ¥100 万+",
  },
  {
    level: "D",
    title: "小说作者(虚构创作)",
    color: "from-pink-500 to-rose-500",
    steps: [
      "新人去番茄/七猫验证选题",
      "稳定后转起点(男频)或晋江(女频)",
      "完本后谋影视/有声改编",
    ],
    goal: "千字稿费 → 版权变现",
  },
];

export default function ResearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-500/5 via-background to-emerald-500/5 px-4 pb-12 pt-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-sm text-blue-600 dark:text-blue-400">
            <BarChart3 size={14} />
            中国写作变现 · 深度调研 2025-2026
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            写作变现的
            <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
              真实数据地图
            </span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            5 种变现机制 · 8 个内容平台 · 6 大小说网站 · 掘金小册 · 微信读书 · 583 家传统出版社
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="#mechanisms" size="lg">
              开始浏览 <ArrowRight size={16} />
            </Button>
            <Button href="#paths" variant="secondary" size="lg">
              直接看路径
            </Button>
            <ShareExportBar
              title="中国写作变现 · 深度调研 2025-2026"
              description="5 种变现机制 · 8 个内容平台 · 6 大小说网站 · 掘金小册 · 微信读书 · 583 家传统出版社"
              markdown={RESEARCH_MARKDOWN}
              filename="publishlab-writing-monetization-research-2026"
            />
          </div>
        </div>
      </section>

      {/* 1. 五种变现机制 */}
      <Section id="mechanisms">
        <SectionHeader
          title="一、5 种变现机制"
          subtitle="中国写作变现的钱,本质只有这 5 种来源"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-5"
        >
          {mechanisms.map((m) => (
            <motion.div key={m.title} variants={fadeUp}>
              <Card className="h-full">
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${m.color}`}
                >
                  <m.icon size={22} className="text-white" />
                </div>
                <h3 className="text-base font-bold text-foreground">{m.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{m.src}</p>
                <div className="mt-3 text-xs text-foreground">{m.platforms}</div>
                <div className="mt-4 flex gap-2 text-xs">
                  <span className="rounded bg-muted px-2 py-0.5">门槛 {m.difficulty}</span>
                  <span className="rounded bg-muted px-2 py-0.5">天花板 {m.ceiling}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* 2. 知识/内容平台对比 */}
      <Section id="knowledge" className="bg-muted">
        <SectionHeader
          title="二、知识/内容平台对比"
          subtitle="8 大平台的真实抽成、门槛和头部案例"
        />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] border-separate border-spacing-0 text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="border-b border-border bg-card px-4 py-3 font-semibold">平台</th>
                <th className="border-b border-border bg-card px-4 py-3 font-semibold">门槛</th>
                <th className="border-b border-border bg-card px-4 py-3 font-semibold">分成 / 单价</th>
                <th className="border-b border-border bg-card px-4 py-3 font-semibold">头部案例</th>
                <th className="border-b border-border bg-card px-4 py-3 font-semibold">参考区间</th>
                <th className="border-b border-border bg-card px-4 py-3 font-semibold">备注</th>
              </tr>
            </thead>
            <tbody>
              {knowledgePlatforms.map((p, i) => (
                <tr key={p.name} className={i % 2 === 0 ? "bg-card" : "bg-background"}>
                  <td className="border-b border-border px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className={`inline-block h-2.5 w-2.5 rounded-full ${p.color}`} />
                      <span className="font-semibold text-foreground">{p.name}</span>
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{p.tag}</div>
                  </td>
                  <td className="border-b border-border px-4 py-3 text-foreground">{p.threshold}</td>
                  <td className="border-b border-border px-4 py-3 font-medium text-primary">{p.take}</td>
                  <td className="border-b border-border px-4 py-3 text-foreground">{p.headTop}</td>
                  <td className="border-b border-border px-4 py-3 text-muted-foreground">{p.headRange}</td>
                  <td className="border-b border-border px-4 py-3 text-xs text-muted-foreground">{p.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* 3. 掘金小册数据 */}
      <Section id="juejin">
        <SectionHeader
          title="三、掘金小册 Top 10 销量"
          subtitle="技术写作的最强变现样本(数据来源:掘金小册公开统计)"
        />

        {/* 关键指标 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { label: "Top 1 销量", value: "19,351", sub: "Redis 深度历险" },
            { label: "Top 1 收益", value: "¥38.5万", sub: "单本累计" },
            { label: "Top 10 均价", value: "¥22.9", sub: "9.9–49.9 区间" },
            { label: "Top 10 入门线", value: "4,382 本", sub: "约 ¥4.3 万" },
          ].map((s) => (
            <motion.div key={s.label} variants={fadeUp}>
              <Card className="text-center">
                <div className="text-3xl font-extrabold text-primary">{s.value}</div>
                <div className="mt-1 text-sm font-semibold text-foreground">{s.label}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.sub}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* 销量条形图 */}
        <Card className="overflow-hidden">
          <div className="mb-4 flex items-center gap-2">
            <Code2 size={18} className="text-primary" />
            <h3 className="text-base font-bold text-foreground">销量排行(本)</h3>
          </div>
          <div className="space-y-3">
            {juejinTop.map((b) => (
              <motion.div
                key={b.rank}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: b.rank * 0.04 }}
                className="grid grid-cols-12 items-center gap-3 text-xs sm:text-sm"
              >
                <div className="col-span-1 text-right font-bold text-muted-foreground">#{b.rank}</div>
                <div className="col-span-5 truncate text-foreground sm:col-span-4" title={b.name}>
                  {b.name}
                </div>
                <div className="col-span-4 sm:col-span-5">
                  <div className="relative h-6 overflow-hidden rounded bg-muted">
                    <div
                      className="absolute inset-y-0 left-0 flex items-center justify-end rounded bg-gradient-to-r from-blue-500 to-emerald-500 px-2 text-xs font-semibold text-white"
                      style={{ width: `${(b.sales / maxJuejinSales) * 100}%` }}
                    >
                      {b.sales.toLocaleString()}
                    </div>
                  </div>
                </div>
                <div className="col-span-2 text-right font-semibold text-primary">
                  ¥{(b.revenue / 10000).toFixed(1)}万
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3 text-xs text-amber-700 dark:text-amber-400">
            <strong>洞察:</strong> 掘金小册客单 ¥9.9–49.9,头部 2 本即破 30 万,印证了
            「技术垂类 + 刚需 + 一次写作长尾分成」是程序员变现性价比最高的路径。
          </div>
        </Card>
      </Section>

      {/* 4. 小说平台 */}
      <Section id="novel" className="bg-muted">
        <SectionHeader
          title="四、小说写作平台矩阵"
          subtitle="6 大主流网文平台 · 题材/分成/适合人群一图看清"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {novelPlatforms.map((p) => (
            <motion.div key={p.name} variants={fadeUp}>
              <Card className="flex h-full flex-col p-0 overflow-hidden">
                <div className={`flex items-center gap-3 bg-gradient-to-r ${p.color} px-5 py-4`}>
                  <span className="text-3xl">{p.icon}</span>
                  <div>
                    <div className="text-base font-bold text-white">{p.name}</div>
                    <div className="text-xs text-white/80">{p.parent} · {p.audience}</div>
                  </div>
                </div>
                <div className="flex-1 p-5">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between gap-3 border-b border-border pb-2">
                      <span className="text-muted-foreground">变现模式</span>
                      <span className="text-right font-medium text-foreground">{p.model}</span>
                    </div>
                    <div className="flex justify-between gap-3 border-b border-border pb-2">
                      <span className="text-muted-foreground">分成</span>
                      <span className="text-right font-semibold text-primary">{p.split}</span>
                    </div>
                    <div className="flex justify-between gap-3 border-b border-border pb-2">
                      <span className="text-muted-foreground">奖励</span>
                      <span className="text-right text-xs text-foreground">{p.bonus}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">✓ 优势</div>
                    <ul className="mt-1.5 space-y-1 text-xs text-foreground">
                      {p.pro.map((x) => (
                        <li key={x} className="flex gap-2">
                          <span className="text-emerald-500">·</span>
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3">
                    <div className="text-xs font-semibold text-red-500">✕ 劣势</div>
                    <ul className="mt-1.5 space-y-1 text-xs text-foreground">
                      {p.con.map((x) => (
                        <li key={x} className="flex gap-2">
                          <span className="text-red-400">·</span>
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 rounded-lg bg-muted px-3 py-2 text-xs">
                    <span className="font-semibold text-foreground">适合: </span>
                    <span className="text-muted-foreground">{p.fit}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* 小说赛道大表 */}
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[700px] border-separate border-spacing-0 text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="border-b border-border bg-card px-4 py-3 font-semibold">维度</th>
                <th className="border-b border-border bg-card px-4 py-3 font-semibold">付费阅读</th>
                <th className="border-b border-border bg-card px-4 py-3 font-semibold">免费阅读(广告)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-card">
                <td className="border-b border-border px-4 py-3 font-semibold text-foreground">代表</td>
                <td className="border-b border-border px-4 py-3 text-foreground">起点 / 晋江 / 纵横 / 刺猬猫</td>
                <td className="border-b border-border px-4 py-3 text-foreground">番茄 / 七猫 / 飞读</td>
              </tr>
              <tr className="bg-background">
                <td className="border-b border-border px-4 py-3 font-semibold text-foreground">收入来源</td>
                <td className="border-b border-border px-4 py-3 text-muted-foreground">订阅 + 打赏 + 影视/版权</td>
                <td className="border-b border-border px-4 py-3 text-muted-foreground">广告分成 + 保底稿酬</td>
              </tr>
              <tr className="bg-card">
                <td className="border-b border-border px-4 py-3 font-semibold text-foreground">读者画像</td>
                <td className="border-b border-border px-4 py-3 text-muted-foreground">付费力强 / 重度核心用户</td>
                <td className="border-b border-border px-4 py-3 text-muted-foreground">下沉市场 / 海量长尾</td>
              </tr>
              <tr className="bg-background">
                <td className="border-b border-border px-4 py-3 font-semibold text-foreground">天花板</td>
                <td className="border-b border-border px-4 py-3 text-primary">极高(IP 改编千万级)</td>
                <td className="border-b border-border px-4 py-3 text-primary">中高(纯稿费百万)</td>
              </tr>
              <tr className="bg-card">
                <td className="border-b border-border px-4 py-3 font-semibold text-foreground">新人友好度</td>
                <td className="border-b border-border px-4 py-3 text-muted-foreground">低(起点) / 中(纵横/晋江)</td>
                <td className="border-b border-border px-4 py-3 text-muted-foreground">高(番茄几乎来者不拒)</td>
              </tr>
              <tr className="bg-background">
                <td className="border-b border-border px-4 py-3 font-semibold text-foreground">完本压力</td>
                <td className="border-b border-border px-4 py-3 text-muted-foreground">中(可慢更精写)</td>
                <td className="border-b border-border px-4 py-3 text-muted-foreground">极高(日更 4k+ 是基础)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* 5. 微信读书生态 */}
      <Section id="weread">
        <SectionHeader
          title="五、微信读书生态"
          subtitle="腾讯系阅读最大平台 · 时长分成 · 14 亿微信流量入口"
        />

        {/* 核心数据 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { icon: Wallet, label: "年卡会员", value: "¥168", sub: "无限卡 / 季卡可选" },
            { icon: TrendingUp, label: "出版方分成", value: "70%", sub: "按阅读时长占比" },
            { icon: Users, label: "估算订阅收入", value: "¥33.8亿", sub: "200 万+ 重度用户" },
            { icon: Bookmark, label: "微信生态", value: "14 亿 MAU", sub: "WX + 视频号无缝跳转" },
          ].map((s) => (
            <motion.div key={s.label} variants={fadeUp}>
              <Card className="text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                  <s.icon className="text-green-600 dark:text-green-400" size={20} />
                </div>
                <div className="text-2xl font-extrabold text-primary">{s.value}</div>
                <div className="mt-1 text-sm font-semibold text-foreground">{s.label}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.sub}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* 分成机制 + 进入路径 双栏 */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <div className="mb-4 flex items-center gap-2">
              <Library size={18} className="text-green-600 dark:text-green-400" />
              <h3 className="text-base font-bold text-foreground">独特的「时长分成」机制</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              不同于按销量/订阅分成,微信读书把会员费按
              <span className="font-semibold text-foreground"> 全平台阅读时长占比 </span>
              切给版权方,再由出版社/作者按合同结算。
            </p>
            <div className="mt-4 rounded-lg bg-muted p-4 text-sm">
              <div className="mb-2 font-semibold text-foreground">公式</div>
              <code className="block text-xs text-foreground">
                你的分成 = ¥168 × N(年卡用户数) × 70% × (你的书阅读时长 / 全平台阅读时长)
              </code>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span>长尾红利:旧书一直被翻阅就一直有收入</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span>读书时长越长越赚,内容质量直接驱动收益</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">✕</span>
                <span>个人作者无法直接入驻,必须通过出版社/版代</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">✕</span>
                <span>「无限卡 + 邀请免费」常态使付费力被稀释</span>
              </li>
            </ul>
          </Card>

          <Card>
            <div className="mb-4 flex items-center gap-2">
              <ArrowRight size={18} className="text-green-600 dark:text-green-400" />
              <h3 className="text-base font-bold text-foreground">作者进入微信读书的 3 条路</h3>
            </div>
            <div className="space-y-4">
              {[
                {
                  num: 1,
                  title: "出版社合作书",
                  desc: "传统纸书出版后,出版社把电子版授权给微信读书,作者按合同分版税(通常 6%-10%)。",
                },
                {
                  num: 2,
                  title: "阅文系网文",
                  desc: "起点/QQ阅读/红袖等阅文集团书,自动进入微信读书内循环,作者按阅文体系分成。",
                },
                {
                  num: 3,
                  title: "数字版权代理",
                  desc: "通过百道、中信、新华等第三方版代或独立电子书发行商上架,门槛较低但分成被层层抽。",
                },
              ].map((step) => (
                <div key={step.num} className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-sm font-bold text-green-600 dark:text-green-400">
                    {step.num}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{step.title}</div>
                    <div className="mt-0.5 text-xs text-muted-foreground">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3 text-xs text-amber-700 dark:text-amber-400">
              <strong>关键洞察:</strong>{" "}
              微信读书是「IP 长尾变现」的最佳渠道,不是首发渠道。先在其他地方写出影响力,再被微信读书放大。
            </div>
          </Card>
        </div>

        {/* 2024 出版业争议:下架电子书 */}
        <Card className="mt-6 border-amber-500/30">
          <div className="flex items-start gap-3">
            <AlertTriangle size={20} className="shrink-0 text-amber-500" />
            <div>
              <h3 className="text-base font-bold text-foreground">2024 出版业反扑:下架电子书潮</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                2024 初,中信、磨铁、果麦等出版社陆续从微信读书下架部分电子书,原因是
                <span className="font-semibold text-foreground">「按时长分成」单本收益远低于纸书版税</span>。
                这暴露了平台模式与传统版权方的根本矛盾 — 也是写作者选择渠道时必须看清的底层博弈。
              </p>
            </div>
          </div>
        </Card>
      </Section>

      {/* 6. 传统出版社生态 */}
      <Section id="publishing" className="bg-muted">
        <SectionHeader
          title="六、传统出版社生态"
          subtitle="2025 全国 583 家出版单位 · 码洋 1104 亿 · 短视频带货改写格局"
        />

        {/* 行业大盘指标 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { icon: Building2, label: "出版单位", value: "583 家", sub: "2024 核验通过", trend: "稳定" },
            { icon: ShoppingCart, label: "零售市场", value: "¥1104亿", sub: "2025 上半年码洋", trend: "-2.24%" },
            { icon: FileText, label: "新书品种", value: "15.1 万", sub: "百道监测原创占 87%", trend: "饱和" },
            { icon: Tag, label: "电子书市场", value: "¥69亿", sub: "2022 基线,稳定增长", trend: "细分" },
          ].map((s) => (
            <motion.div key={s.label} variants={fadeUp}>
              <Card className="text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                  <s.icon className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div className="text-2xl font-extrabold text-primary">{s.value}</div>
                <div className="mt-1 text-sm font-semibold text-foreground">{s.label}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.sub}</div>
                <div className="mt-2 inline-block rounded bg-muted px-2 py-0.5 text-[10px] font-medium text-foreground">
                  {s.trend}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* 渠道结构 — 横向条形图 */}
        <Card className="mb-6">
          <div className="mb-4 flex items-center gap-2">
            <TrendingDown size={18} className="text-blue-600 dark:text-blue-400" />
            <h3 className="text-base font-bold text-foreground">2025 图书零售渠道结构</h3>
            <span className="ml-auto text-xs text-muted-foreground">码洋占比</span>
          </div>
          <div className="space-y-4">
            {[
              { name: "内容电商(短视频带货)", pct: 40.53, change: "+30.43%", color: "from-red-500 to-orange-500", trend: "up" },
              { name: "平台电商(京东/当当/天猫)", pct: 45.82, change: "-相对下滑", color: "from-blue-500 to-indigo-500", trend: "down" },
              { name: "实体书店", pct: 13.65, change: "-4.63%", color: "from-slate-400 to-slate-500", trend: "down" },
            ].map((c) => (
              <div key={c.name}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">{c.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground">{c.pct}%</span>
                    <span
                      className={`text-xs font-semibold ${
                        c.trend === "up" ? "text-green-600 dark:text-green-400" : "text-red-500"
                      }`}
                    >
                      {c.change}
                    </span>
                  </div>
                </div>
                <div className="h-3 overflow-hidden rounded bg-muted">
                  <div
                    className={`h-full rounded bg-gradient-to-r ${c.color}`}
                    style={{ width: `${c.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-lg border border-red-500/20 bg-red-500/5 p-3 text-xs text-red-700 dark:text-red-400">
            <strong>关键变化:</strong> 2025 内容电商首次超越平台电商,
            <span className="font-semibold">抖音/快手图书带货</span>成最大单一渠道。
            想出书,先想清楚 — 你的书能不能在 3 分钟视频里被一个达人讲清楚?
          </div>
        </Card>

        {/* 双栏:出版方式 vs 版税结构 */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* 三种出版方式 */}
          <Card>
            <div className="mb-4 flex items-center gap-2">
              <BookOpen size={18} className="text-blue-600 dark:text-blue-400" />
              <h3 className="text-base font-bold text-foreground">3 种出版方式对比</h3>
            </div>
            <div className="space-y-4">
              {[
                {
                  name: "传统出版(版税制)",
                  threshold: "极高(选题策划/编辑挑书)",
                  cost: "0(出版社全包)",
                  income: "版税 6%-10% × 印数",
                  fit: "已有内容/IP/影响力的作者",
                  color: "border-l-blue-500",
                },
                {
                  name: "合作出版",
                  threshold: "中(作者分担部分成本)",
                  cost: "¥1-3 万",
                  income: "销售利润分成 + 部分版税",
                  fit: "看好自己书的销路但出版社犹豫",
                  color: "border-l-purple-500",
                },
                {
                  name: "自费出版",
                  threshold: "低(只要不违规)",
                  cost: "¥3-8 万(书号 + 排版 + 印刷)",
                  income: "扣去 50 本备案后全归自己",
                  fit: "把书当名片 / 内训资料 / 礼品书",
                  color: "border-l-amber-500",
                },
              ].map((m) => (
                <div key={m.name} className={`border-l-4 ${m.color} bg-muted/50 py-2 pl-3`}>
                  <div className="text-sm font-bold text-foreground">{m.name}</div>
                  <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
                    <div>
                      <span className="text-muted-foreground">门槛:</span>{" "}
                      <span className="text-foreground">{m.threshold}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">成本:</span>{" "}
                      <span className="text-foreground">{m.cost}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-muted-foreground">收益:</span>{" "}
                      <span className="font-semibold text-primary">{m.income}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-muted-foreground">适合:</span>{" "}
                      <span className="text-foreground">{m.fit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* 版税计算实例 */}
          <Card>
            <div className="mb-4 flex items-center gap-2">
              <Wallet size={18} className="text-blue-600 dark:text-blue-400" />
              <h3 className="text-base font-bold text-foreground">版税公式与真实算账</h3>
            </div>

            <div className="rounded-lg bg-muted p-4 text-sm">
              <div className="mb-2 font-semibold text-foreground">公式</div>
              <code className="block text-xs text-foreground">
                版税 = 定价 × 印数(或销量) × 版税率
              </code>
            </div>

            <div className="mt-4">
              <div className="mb-3 text-sm font-semibold text-foreground">📚 案例:一本 ¥50 定价的小说</div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-xs text-muted-foreground">
                    <th className="border-b border-border py-2 text-left font-medium">印数</th>
                    <th className="border-b border-border py-2 text-right font-medium">8% 版税</th>
                    <th className="border-b border-border py-2 text-right font-medium">10% 版税</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { print: "5,000(首印保底)", v8: 20000, v10: 25000 },
                    { print: "10,000(畅销门槛)", v8: 40000, v10: 50000 },
                    { print: "50,000(地区畅销)", v8: 200000, v10: 250000 },
                    { print: "100,000(全国畅销)", v8: 400000, v10: 500000 },
                  ].map((r) => (
                    <tr key={r.print}>
                      <td className="border-b border-border py-2 text-foreground">{r.print}</td>
                      <td className="border-b border-border py-2 text-right font-semibold text-primary">
                        ¥{r.v8.toLocaleString()}
                      </td>
                      <td className="border-b border-border py-2 text-right font-semibold text-primary">
                        ¥{r.v10.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 space-y-1.5 text-xs text-muted-foreground">
              <div className="flex gap-2">
                <span className="text-foreground">·</span>
                <span><strong className="text-foreground">预付版税:</strong> 出版前预付,不少于预计总版税的 50%</span>
              </div>
              <div className="flex gap-2">
                <span className="text-foreground">·</span>
                <span><strong className="text-foreground">首印保底:</strong> 5000-10000 册是主流首印,新人靠近下限</span>
              </div>
              <div className="flex gap-2">
                <span className="text-foreground">·</span>
                <span><strong className="text-foreground">重印率:</strong> 行业头部如中国出版传媒达 60%,小作者首印滞销不再印</span>
              </div>
            </div>
          </Card>
        </div>

        {/* 出版业 vs 自媒体 对比 */}
        <Card className="mt-6">
          <h3 className="mb-4 text-base font-bold text-foreground">📊 传统出版 vs 知识付费:同样写一本书,收入差多少?</h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="border-b border-border py-2.5 font-semibold">维度</th>
                  <th className="border-b border-border py-2.5 font-semibold">传统出版</th>
                  <th className="border-b border-border py-2.5 font-semibold">知识付费小册</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { k: "周期", a: "1-2 年(选题→出版)", b: "1-2 周" },
                  { k: "门槛", a: "极高(编辑认可)", b: "无(自己上架)" },
                  { k: "单本到手", a: "¥2-5 万(5000 印数)", b: "¥1-40 万(销量决定)" },
                  { k: "信用背书", a: "极强(职称/学术认可)", b: "弱(野生)" },
                  { k: "长尾", a: "重印才有,大多没有", b: "永久长尾分成" },
                  { k: "版权操作", a: "受限(影视/海外需谈)", b: "完全自有" },
                ].map((r) => (
                  <tr key={r.k}>
                    <td className="border-b border-border py-2.5 font-medium text-foreground">{r.k}</td>
                    <td className="border-b border-border py-2.5 text-muted-foreground">{r.a}</td>
                    <td className="border-b border-border py-2.5 text-muted-foreground">{r.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3 text-xs text-emerald-700 dark:text-emerald-400">
            <strong>结论:</strong> 传统出版用「时间换信用」,知识付费用「信用换钱」。
            最优解 = 先用付费小册积累信用,再用传统出版镀金,反过来抬高所有渠道客单。
          </div>
        </Card>
      </Section>

      {/* 7. 关键洞察 */}
      <Section id="insights">
        <SectionHeader title="七、4 条核心规律" subtitle="跨越所有平台的底层逻辑" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-2"
        >
          {insights.map((it) => (
            <motion.div key={it.title} variants={fadeUp}>
              <Card className="flex h-full gap-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${it.color}`}>
                  <it.icon size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* 8. 路径建议 */}
      <Section id="paths" className="bg-muted">
        <SectionHeader title="八、按起点选路径" subtitle="4 种作者画像 → 各自的最优解" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {paths.map((p) => (
            <motion.div key={p.level} variants={fadeUp}>
              <Card className="flex h-full flex-col">
                <div
                  className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-base font-bold text-white`}
                >
                  {p.level}
                </div>
                <h3 className="text-base font-bold text-foreground">{p.title}</h3>
                <ol className="mt-3 flex-1 space-y-2 text-sm text-foreground">
                  {p.steps.map((s, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="font-bold text-primary">{i + 1}.</span>
                      <span className="text-muted-foreground">{s}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-4 rounded-lg bg-primary/5 px-3 py-2 text-xs">
                  <span className="font-semibold text-primary">目标: </span>
                  <span className="text-foreground">{p.goal}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* 数据来源 */}
      <Section id="sources">
        <SectionHeader title="数据来源" center={false} />
        <Card>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              { name: "小报童帮助中心", url: "https://help.xiaobot.net/" },
              { name: "小报童排行榜(订阅数)", url: "https://xiaobot.osguider.com/sort/subscriber-count/" },
              { name: "21 经济网:洪灏 10 天 764 万", url: "https://www.21jingji.com/article/20251103/herald/fff5fa27cd46638727c41157bfed7e23.html" },
              { name: "新浪财经:唐朝 10 分钟 900 万", url: "https://finance.sina.com.cn/roll/observe/baijiu/2025-03-19/doc-ineqehuu1677948.shtml" },
              { name: "今日头条 2025 文字分成升级", url: "https://k.sina.com.cn/article_1960332210_74d84bb2001019ijg.html" },
              { name: "知乎盐选投稿与分成", url: "https://baike.baidu.com/item/%E7%9F%A5%E4%B9%8E%E7%9B%90%E9%80%89%E4%B8%93%E6%A0%8F/67213448" },
              { name: "掘金小册官方", url: "https://juejin.cn/course" },
              { name: "GitHub:掘金小册销量统计脚本", url: "https://github.com/axetroy/juejin.book" },
              { name: "阅文集团星计划(起点)", url: "https://acts.qidian.com/2020/2020_09/index.html" },
              { name: "番茄小说能否赚钱(知乎)", url: "https://www.zhihu.com/question/7717562062" },
              { name: "晋江文学城作者收入(综合)", url: "https://www.dian0871.com/detail-1709.html" },
              { name: "网文平台对比:起点/纵横/番茄/七猫", url: "https://zhuanlan.zhihu.com/p/1936374238455001232" },
              { name: "小红书蒲公英帮助中心", url: "https://pgy.xiaohongshu.com/help/home" },
              { name: "视频号创作者激励", url: "https://support.weixin.qq.com/cgi-bin/mmsupportacctnodeweb-bin/pages/oz39sImIssbhGCIT" },
              { name: "微信读书会员服务条款", url: "https://weread.qq.com/policy?type=membership" },
              { name: "澎湃新闻:出版业自救从下架电子书开始", url: "https://www.thepaper.cn/newsDetail_forward_26389645" },
              { name: "人人都是产品经理:微信读书还能走多远", url: "https://www.woshipm.com/it/5969361.html" },
              { name: "国家新闻出版署:2024 年度核验图书出版单位(583 家通过)", url: "https://www.nppa.gov.cn/xxfb/tzgs/202409/t20240905_861636.html" },
              { name: "国家新闻出版署:2024 图书零售市场 ¥1129 亿", url: "https://www.nppa.gov.cn/xxfb/ywdt/202501/t20250110_881307.html" },
              { name: "新浪财经:2025 图书零售行业市场规模分析", url: "https://finance.sina.com.cn/stock/relnews/cn/2025-09-17/doc-infqumnp9925117.shtml" },
              { name: "新京报:2025 开卷图书零售趋势(内容电商超平台电商)", url: "https://m.bjnews.com.cn/detail/1767865693169344.html" },
              { name: "百道图书影响力数据(原创新书 15.1 万种)", url: "https://news.qq.com/rain/a/20250110A06L8O00" },
              { name: "国家版权局:出版文字作品报酬规定", url: "https://law.pkulaw.com/chinalaw/22737.html" },
              { name: "中国出版传媒 2024 年度报告(总品种 2.1 万)", url: "https://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?stockid=601949&id=11004211" },
            ].map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary hover:underline"
                >
                  {s.name}
                  <ExternalLink size={12} />
                </a>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      {/* CTA */}
      <Section>
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-emerald-500 px-8 py-16 text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">看完数据,挑一条路开干</h2>
          <p className="mt-4 text-lg text-white/90">
            把调研→选题→写作→出版→变现,全部交给 PublishLab
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/monetize" size="lg" className="bg-white text-blue-600 hover:bg-white/90">
              查看变现工作流 <ArrowRight size={16} />
            </Button>
            <Button
              href="/signup"
              size="lg"
              variant="ghost"
              className="border border-white/40 text-white hover:bg-white/10"
            >
              免费开始
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
