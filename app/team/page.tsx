import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, Award, Users, Target, Heart } from "lucide-react"

const teamMembers = [
  {
    name: "张明华",
    role: "创始人 & 首席设计师",
    experience: "15年",
    education: "清华大学景观建筑学硕士",
    specialties: ["商业景观", "城市规划", "生态设计"],
    achievements: ["国家级景观设计奖", "绿色建筑认证专家", "ASLA会员"],
    image: "/professional-landscape-architect-portrait.jpg",
    description: "拥有15年丰富的景观设计经验，主导完成了200多个大型项目，在商业景观和生态设计领域享有盛誉。",
  },
  {
    name: "李雪梅",
    role: "设计总监",
    experience: "12年",
    education: "北京林业大学园林学博士",
    specialties: ["住宅景观", "植物配置", "园艺疗法"],
    achievements: ["中国风景园林学会优秀奖", "植物配置专家", "园艺疗法师"],
    image: "/female-landscape-designer-portrait.jpg",
    description: "专注于住宅景观设计和植物配置，在园艺疗法领域有深入研究，为多个康复花园项目提供专业指导。",
  },
  {
    name: "王建国",
    role: "工程总监",
    experience: "18年",
    education: "同济大学土木工程学士",
    specialties: ["工程管理", "施工技术", "质量控制"],
    achievements: ["高级工程师", "项目管理专家", "质量管理体系认证"],
    image: "/construction-manager-portrait.png",
    description: "拥有丰富的工程管理经验，确保每个项目的施工质量和进度控制，是团队中不可或缺的技术骨干。",
  },
  {
    name: "陈思雨",
    role: "高级设计师",
    experience: "8年",
    education: "华南理工大学景观设计硕士",
    specialties: ["公共空间", "儿童景观", "无障碍设计"],
    achievements: ["青年设计师奖", "无障碍设计专家", "儿童友好空间认证"],
    image: "/young-female-designer-portrait.jpg",
    description: "专注于公共空间和儿童景观设计，在无障碍设计方面有独到见解，致力于创造包容性的景观环境。",
  },
  {
    name: "刘志强",
    role: "技术总监",
    experience: "10年",
    education: "西安建筑科技大学给排水工程硕士",
    specialties: ["智能灌溉", "雨水管理", "绿色技术"],
    achievements: ["智能灌溉系统专家", "雨水利用技术认证", "绿色建筑顾问"],
    image: "/technical-director-portrait.jpg",
    description: "在智能灌溉和雨水管理系统方面有丰富经验，推动团队在绿色技术应用方面的创新发展。",
  },
  {
    name: "赵美玲",
    role: "项目经理",
    experience: "7年",
    education: "北京工业大学工程管理硕士",
    specialties: ["项目管理", "客户沟通", "成本控制"],
    achievements: ["PMP项目管理认证", "优秀项目经理", "客户满意度专家"],
    image: "/project-manager-portrait.png",
    description: "擅长项目全流程管理和客户沟通，确保项目按时按质完成，在成本控制方面表现出色。",
  },
]

const companyValues = [
  {
    icon: Target,
    title: "专业专注",
    description: "15年专注园林景观设计，积累了丰富的项目经验和专业技能",
  },
  {
    icon: Users,
    title: "团队协作",
    description: "多学科背景的专业团队，通过协作创造出色的设计作品",
  },
  {
    icon: Heart,
    title: "用心服务",
    description: "以客户需求为中心，提供贴心周到的专业服务",
  },
  {
    icon: Award,
    title: "品质保证",
    description: "严格的质量管理体系，确保每个项目都达到最高标准",
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4">团队成员</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">专业的设计团队</h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            我们的团队由经验丰富的设计师、工程师和项目管理专家组成，致力于为客户提供最优质的园林景观服务
          </p>
        </div>

        {/* Team Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">团队成员</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-muted-foreground">平均经验年限</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">专业认证</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">完成项目</div>
            </div>
          </div>
        </section>

        {/* Core Team */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">核心团队</h2>
            <p className="text-lg text-muted-foreground">认识我们的核心团队成员</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <Badge variant="outline">{member.experience}经验</Badge>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 text-center">{member.description}</p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold mb-1">教育背景</h4>
                      <p className="text-sm text-muted-foreground">{member.education}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-2">专业领域</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-2">专业成就</h4>
                      <div className="space-y-1">
                        {member.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Award className="h-3 w-3 text-primary flex-shrink-0" />
                            <span className="text-xs text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t">
                    <Button variant="ghost" size="sm">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Company Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">我们的价值观</h2>
            <p className="text-lg text-muted-foreground">指导我们工作的核心理念</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 landscape-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Join Us */}
        <section className="py-16 landscape-gradient rounded-2xl text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">加入我们的团队</h2>
          <p className="text-lg mb-8 text-white/90 text-pretty max-w-2xl mx-auto">
            我们正在寻找有才华、有激情的专业人士加入我们的团队，一起创造更美好的绿色空间
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              查看职位
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              了解文化
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
