import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Cpu,
  Droplets,
  Lightbulb,
  Leaf,
  Shield,
  BarChart3,
  Smartphone,
  CheckCircle,
  Award,
  Users,
  Target,
} from "lucide-react"

const technologies = [
  {
    icon: Droplets,
    title: "智能灌溉系统",
    description: "基于物联网技术的精准灌溉解决方案",
    features: ["土壤湿度实时监测", "天气数据自动获取", "分区域精准控制", "节水率达40%以上"],
    image: "/smart-irrigation-system-in-modern-garden.jpg",
    maturity: 95,
  },
  {
    icon: Lightbulb,
    title: "LED智能照明",
    description: "节能环保的智能景观照明系统",
    features: ["自动调光控制", "色温智能调节", "节能80%以上", "远程监控管理"],
    image: "/led-smart-lighting-in-landscape-design.jpg",
    maturity: 90,
  },
  {
    icon: Cpu,
    title: "BIM设计技术",
    description: "三维建筑信息模型在园林设计中的应用",
    features: ["3D可视化设计", "施工图自动生成", "成本精确预算", "协同设计平台"],
    image: "/bim-3d-landscape-design-software.jpg",
    maturity: 85,
  },
  {
    icon: Leaf,
    title: "生态修复技术",
    description: "基于生态学原理的环境修复解决方案",
    features: ["土壤改良技术", "植被恢复方案", "生物多样性保护", "可持续发展理念"],
    image: "/ecological-restoration-project-before-after.jpg",
    maturity: 88,
  },
  {
    icon: Shield,
    title: "环境监测系统",
    description: "实时监测园林环境质量的智能系统",
    features: ["空气质量监测", "噪音水平检测", "温湿度记录", "数据可视化分析"],
    image: "/environmental-monitoring-sensors-in-garden.jpg",
    maturity: 82,
  },
  {
    icon: Smartphone,
    title: "移动管理平台",
    description: "园林管理的移动端解决方案",
    features: ["实时状态查看", "任务分配管理", "问题快速上报", "维护记录追踪"],
    image: "/mobile-app-for-landscape-management.jpg",
    maturity: 78,
  },
]

const achievements = [
  {
    icon: Award,
    title: "技术专利",
    count: "15+",
    description: "获得多项园林技术专利认证",
  },
  {
    icon: Users,
    title: "技术团队",
    count: "25+",
    description: "专业的技术研发团队",
  },
  {
    icon: Target,
    title: "成功案例",
    count: "200+",
    description: "技术应用成功案例",
  },
  {
    icon: BarChart3,
    title: "效率提升",
    count: "60%",
    description: "平均项目效率提升",
  },
]

const certifications = [
  "ISO 9001 质量管理体系认证",
  "ISO 14001 环境管理体系认证",
  "高新技术企业认证",
  "绿色建筑技术认证",
  "智能建筑系统集成资质",
  "园林绿化施工资质一级",
]

export default function TechnologyPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4">技术优势</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">领先的园林科技</h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            我们将最新的科技成果应用到园林设计与施工中，为客户提供更智能、更环保、更高效的解决方案
          </p>
        </div>

        {/* Achievements */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 landscape-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{achievement.count}</div>
                  <h3 className="font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Core Technologies */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">核心技术</h2>
            <p className="text-lg text-muted-foreground">我们掌握的前沿园林技术</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={tech.image || "/placeholder.svg"}
                    alt={tech.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 landscape-gradient rounded-lg flex items-center justify-center">
                      <tech.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{tech.title}</h3>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {tech.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>技术成熟度</span>
                      <span className="font-semibold">{tech.maturity}%</span>
                    </div>
                    <Progress value={tech.maturity} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Innovation Process */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">创新流程</h2>
            <p className="text-lg text-muted-foreground">我们的技术创新和应用流程</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 landscape-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">需求调研</h3>
              <p className="text-sm text-muted-foreground">深入了解市场需求和技术发展趋势</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 landscape-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">技术研发</h3>
              <p className="text-sm text-muted-foreground">组织专业团队进行技术攻关和创新</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 landscape-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">试点应用</h3>
              <p className="text-sm text-muted-foreground">在实际项目中进行小规模试点验证</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 landscape-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">推广应用</h3>
              <p className="text-sm text-muted-foreground">成熟技术在更多项目中推广应用</p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">资质认证</h2>
            <p className="text-lg text-muted-foreground">我们获得的专业认证和资质</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="group hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 landscape-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 landscape-gradient rounded-2xl text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">体验我们的技术优势</h2>
          <p className="text-lg mb-8 text-white/90 text-pretty max-w-2xl mx-auto">
            让先进的园林技术为您的项目增添更多价值，创造更美好的绿色空间
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              技术咨询
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              预约演示
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
