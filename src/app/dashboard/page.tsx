import { ArrowRight, BookOpen, PlusCircle } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const draftProjects = [
  { name: "AI 提效小册", stage: "大纲草稿", updatedAt: "今天" },
  { name: "副业写作指南", stage: "内容整理", updatedAt: "2 天前" },
];

export default function DashboardPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-primary">创作控制台</p>
            <h1 className="mt-1 text-3xl font-extrabold text-foreground sm:text-4xl">你的写作变现工作台</h1>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
              从这里管理选题、大纲和发布节奏，优先把第一本小册做出来。
            </p>
          </div>
          <Button href="/dashboard/new" size="lg">
            新建变现项目 <PlusCircle size={16} />
          </Button>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {draftProjects.map((project) => (
            <Card key={project.name}>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <BookOpen size={12} />
                {project.stage}
              </div>
              <h2 className="text-lg font-bold text-foreground">{project.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">最近更新：{project.updatedAt}</p>
              <div className="mt-5">
                <Button href="/dashboard/new" variant="secondary">
                  继续完善 <ArrowRight size={16} />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
