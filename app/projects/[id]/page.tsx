import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ArrowLeft, MapPin, Calendar, Ruler, Users, Clock, CheckCircle, ArrowRight } from "lucide-react"

// 模拟项目数据
const projectData = {
  id: 1,
  title: "科技园区景观设计",
  category: "商业景观",
  location: "北京·中关村",
  date: "2024年12月",
  area: "15,000㎡",
  duration: "8个月",
  client: "中关村科技园区",
  budget: "¥2,800万",
  status: "已完成",
  description:
    "这是一个现代化办公园区的绿色空间设计项目，我们将科技感与自然美完美融合，为园区内的员工创造了一个舒适、高效的工作环境。项目注重可持续发展理念，采用了智能灌溉系统和生态环保材料。",
  images: [
    "/modern-corporate-office-garden-with-water-feature-.jpg",
    "/modern-landscape-garden-with-geometric-design-and-.jpg",
    "/professional-landscape-design-team-working-on-plan.jpg",
  ],
  features: ["智能灌溉系统", "雨水收集利用", "LED智能照明", "空气净化植物配置", "无障碍通道设计", "休憩空间规划"],
  challenges: [
    {
      title: "空间限制",
      description: "在有限的空间内最大化绿化效果，同时保证功能性需求。",
      solution: "采用垂直绿化和立体种植技术，充分利用空间层次。",
    },
    {
      title: "维护成本",
      description: "如何在保证景观效果的同时控制后期维护成本。",
      solution: "选择适应性强的本土植物，配置智能化管理系统。",
    },
  ],
  timeline: [
    { phase: "方案设计", duration: "2个月", status: "completed" },
    { phase: "施工图设计", duration: "1个月", status: "completed" },
    { phase: "材料采购", duration: "1个月", status: "completed" },
    { phase: "基础施工", duration: "2个月", status: "completed" },
    { phase: "景观施工", duration: "1.5个月", status: "completed" },
    { phase: "设备安装", duration: "0.5个月", status: "completed" },
  ],
  team: [
    { name: "张设计师", role: "主设计师", avatar: "/placeholder.svg?height=60&width=60" },
    { name: "李工程师", role: "项目经理", avatar: "/placeholder.svg?height=60&width=60" },
    { name: "王技术员", role: "技术负责人", avatar: "/placeholder.svg?height=60&width=60" },
  ],
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/projects">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回项目列表
            </Button>
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="aspect-[16/10] rounded-lg overflow-hidden mb-6">
                <img
                  src={projectData.images[0] || "/placeholder.svg"}
                  alt={projectData.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {projectData.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`项目图片 ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/3">
              <Badge className="mb-4">{projectData.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{projectData.title}</h1>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">{projectData.description}</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium">位置：</span>
                  <span className="text-muted-foreground">{projectData.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium">完成时间：</span>
                  <span className="text-muted-foreground">{projectData.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Ruler className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium">项目面积：</span>
                  <span className="text-muted-foreground">{projectData.area}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium">建设周期：</span>
                  <span className="text-muted-foreground">{projectData.duration}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium">客户：</span>
                  <span className="text-muted-foreground">{projectData.client}</span>
                </div>
              </div>

              <Button size="lg" className="w-full landscape-gradient text-white">
                咨询类似项目
              </Button>
            </div>
          </div>
        </div>

        {/* Project Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">项目特色</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {projectData.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">挑战与解决方案</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectData.challenges.map((challenge, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{challenge.title}</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">挑战：</h4>
                      <p className="text-sm">{challenge.description}</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">解决方案：</h4>
                      <p className="text-sm text-primary">{challenge.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Project Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">项目进度</h2>
          <div className="space-y-4">
            {projectData.timeline.map((phase, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-lg border">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{phase.phase}</h3>
                    <span className="text-sm text-muted-foreground">{phase.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Team */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">项目团队</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectData.team.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <img
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4"
                  />
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Related Projects */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">相关项目</h2>
            <Link href="/projects">
              <Button variant="outline">
                查看更多
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="group overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={`/landscape-project.png?height=300&width=400&query=landscape project ${i}`}
                    alt={`相关项目 ${i}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge className="mb-2">商业景观</Badge>
                  <h3 className="font-semibold mb-2">项目名称 {i}</h3>
                  <p className="text-sm text-muted-foreground">项目简介...</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 landscape-gradient rounded-2xl text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">对这个项目感兴趣？</h2>
          <p className="text-lg mb-8 text-white/90 text-pretty">联系我们了解更多详情或讨论您的项目需求</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              立即咨询
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              获取报价
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
