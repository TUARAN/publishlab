"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "¥0",
    period: "/月",
    description: "适合验证第一本小册，快速跑通变现起点。",
    features: ["每月 20 篇 AI 生成", "1 个变现项目", "基础模板库", "社区支持"],
    cta: "免费开始",
    href: "/signup",
    featured: false,
  },
  {
    name: "Creator",
    price: "¥79",
    period: "/月",
    description: "适合稳定输出并持续成交的个人创作者。",
    features: ["每月 300 篇 AI 生成", "无限变现项目", "进阶变现模板", "渠道发布清单", "数据复盘看板"],
    cta: "开始变现",
    href: "/signup",
    featured: true,
  },
  {
    name: "Studio",
    price: "¥299",
    period: "/月",
    description: "适合内容团队和工作室协同交付。",
    features: ["Creator 全部能力", "最多 10 人协作", "团队权限管理", "优先客服支持", "私有化 SOP 模板"],
    cta: "联系咨询",
    href: "/signup",
    featured: false,
  },
];

const faqs = [
  {
    q: "我刚开始做内容，适合哪个方案？",
    a: "建议从 Starter 起步，先用免费能力做出第一本小册，再根据成交情况升级。",
  },
  {
    q: "按年付费有优惠吗？",
    a: "目前页面展示的是月付价格。你可以先按月验证，稳定后再联系支持获取年付方案。",
  },
  {
    q: "升级后历史内容会丢失吗？",
    a: "不会。升级只扩展额度和功能，已有文稿、模板和项目会完整保留。",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 pb-12 pt-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            为写作变现设计的定价
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            从第一本小册到稳定成交，按阶段选择最合适的方案。
          </p>
        </div>
      </section>

      <Section>
        <SectionHeader title="选择你的增长节奏" subtitle="先跑通闭环，再放大收入规模" />
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`h-full ${plan.featured ? "border-primary shadow-lg shadow-primary/10" : ""}`}
            >
              {plan.featured ? (
                <div className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  推荐方案
                </div>
              ) : null}
              <h2 className="text-xl font-bold text-foreground">{plan.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              <div className="mt-5 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                <span className="pb-1 text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="mt-5 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button href={plan.href} className="mt-6 w-full" variant={plan.featured ? "primary" : "secondary"}>
                {plan.cta} <ArrowRight size={16} />
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-muted">
        <SectionHeader title="常见问题" />
        <div className="mx-auto grid max-w-4xl gap-4">
          {faqs.map((item) => (
            <Card key={item.q}>
              <h3 className="text-base font-semibold text-foreground">{item.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.a}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
