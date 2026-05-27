"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, ListTree } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

type ProductType = "free-booklet" | "paid-booklet" | "course";

const productTypeLabels: Record<ProductType, string> = {
  "free-booklet": "免费引流小册",
  "paid-booklet": "付费小册 (¥9.9 - ¥99)",
  course: "轻课程 (¥99+)",
};

const sectionTemplates: Record<ProductType, string[]> = {
  "free-booklet": ["痛点场景", "核心方法", "3 个实操步骤", "常见误区", "行动清单"],
  "paid-booklet": ["问题定义", "完整框架", "案例拆解", "执行模板", "转化与复盘"],
  course: ["课程目标", "模块目录", "课时大纲", "作业设计", "交付和答疑安排"],
};

function buildOutline(topic: string, audience: string, productType: ProductType) {
  const safeTopic = topic.trim() || "你的主题";
  const safeAudience = audience.trim() || "目标用户";
  const sections = sectionTemplates[productType];

  return [
    `# ${safeTopic}`,
    "",
    "## 一、目标读者",
    `- 主要受众：${safeAudience}`,
    "- 读者目标：在 7 天内看到可执行的变化",
    "",
    "## 二、核心承诺",
    `- 交付形式：${productTypeLabels[productType]}`,
    "- 结果承诺：读完即可开始执行并验证结果",
    "",
    "## 三、内容目录",
    ...sections.map((item, index) => `${index + 1}. ${item}`),
    "",
    "## 四、成交设计",
    "- 首屏钩子：一句话说明读者能得到什么",
    "- 转化动作：阅读后引导到下一层产品/服务",
    "",
    "## 五、首版发布清单",
    "- 完成封面与简介",
    "- 选择 1 个主发布平台",
    "- 发布后收集前 10 条反馈并迭代",
  ].join("\n");
}

export default function NewDashboardProjectPage() {
  const [topic, setTopic] = useState("");
  const [audience, setAudience] = useState("");
  const [productType, setProductType] = useState<ProductType>("paid-booklet");
  const [generated, setGenerated] = useState(false);

  const outline = useMemo(
    () => buildOutline(topic, audience, productType),
    [topic, audience, productType]
  );

  return (
    <>
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium text-primary">新建项目</p>
          <h1 className="mt-1 text-3xl font-extrabold text-foreground sm:text-4xl">
            创建第一本变现小册
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            先填主题和受众，系统会生成可执行的大纲初稿，你可以直接开始写作和发布。
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="h-fit">
            <h2 className="text-xl font-bold text-foreground">项目信息</h2>
            <p className="mt-2 text-sm text-muted-foreground">30 秒填完，先跑通第一版。</p>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="topic" className="mb-1.5 block text-sm font-medium text-foreground">
                  主题
                </label>
                <input
                  id="topic"
                  value={topic}
                  onChange={(event) => setTopic(event.target.value)}
                  placeholder="例如：AI 写作接单入门"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label htmlFor="audience" className="mb-1.5 block text-sm font-medium text-foreground">
                  目标受众
                </label>
                <input
                  id="audience"
                  value={audience}
                  onChange={(event) => setAudience(event.target.value)}
                  placeholder="例如：想做副业的职场人"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label htmlFor="productType" className="mb-1.5 block text-sm font-medium text-foreground">
                  产品类型
                </label>
                <select
                  id="productType"
                  value={productType}
                  onChange={(event) => setProductType(event.target.value as ProductType)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="free-booklet">免费引流小册</option>
                  <option value="paid-booklet">付费小册 (¥9.9 - ¥99)</option>
                  <option value="course">轻课程 (¥99+)</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button onClick={() => setGenerated(true)}>
                生成大纲初稿 <ListTree size={16} />
              </Button>
              <Button href="/monetize" variant="ghost">
                返回变现工作流
              </Button>
            </div>
          </Card>

          <Card>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold text-foreground">大纲初稿</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {generated ? "已生成。你可以直接复制到写作工具继续完善。" : "点击左侧按钮即可生成。"}
                </p>
              </div>
              {generated ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-secondary/15 px-2.5 py-1 text-xs font-semibold text-secondary">
                  <CheckCircle2 size={12} />
                  已生成
                </span>
              ) : null}
            </div>

            <pre className="mt-5 max-h-[480px] overflow-auto rounded-lg border border-border bg-muted p-4 text-xs leading-6 text-foreground">
              {outline}
            </pre>

            <div className="mt-5">
              <Button href="/dashboard" variant="secondary">
                保存并返回工作台 <ArrowRight size={16} />
              </Button>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
