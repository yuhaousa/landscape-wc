import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Search, Filter, MapPin, Calendar, ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "科技园区景观设计",
    category: "商业景观",
    location: "北京·中关村",
    date: "2024年12月",
    area: "15,000㎡",
    image: "/modern-corporate-office-garden-with-water-feature-.jpg",
    description: "现代化办公园区的绿色空间设计，融合科技感与自然美，为员工创造舒适的工作环境。",
    tags: ["现代设计", "智能灌溉", "生态环保"],
  },
  {
    id: 2,
    title: "高端住宅社区景观",
    category: "住宅景观",
    location: "上海·浦东新区",
    date: "2024年11月",
    area: "8,500㎡",
    image: "/luxury-residential-community-garden-with-children-.jpg",
    description: "为高端住宅社区打造的综合性景观环境，注重居住体验和生活品质的提升。",
    tags: ["住宅配套", "儿童友好", "休闲空间"],
  },
  {
    id: 3,
    title: "城市公园改造项目",
    category: "公共空间",
    location: "深圳·南山区",
    date: "2024年10月",
    area: "25,000㎡",
    image: "/urban-park-renovation-with-walking-paths-native-pl.jpg",
    description: "对老旧城市公园进行全面改造升级，提升市民休闲体验和城市形象。",
    tags: ["公园改造", "生态修复", "市民休闲"],
  },
  {
    id: 4,
    title: "酒店度假村景观",
    category: "商业景观",
    location: "三亚·海棠湾",
    date: "2024年9月",
    area: "12,000㎡",
    image: "/luxury-resort-hotel-landscape-with-tropical-plants.jpg",
    description: "热带风情的度假村景观设计，营造放松惬意的度假氛围。",
    tags: ["度假风情", "热带植物", "水景设计"],
  },
  {
    id: 5,
    title: "学校校园景观",
    category: "教育空间",
    location: "杭州·西湖区",
    date: "2024年8月",
    area: "6,800㎡",
    image: "/school-campus-landscape-with-educational-garden-an.jpg",
    description: "为学校打造的教育性景观环境，融入学习元素，促进学生与自然的互动。",
    tags: ["教育景观", "互动体验", "安全设计"],
  },
  {
    id: 6,
    title: "医院康复花园",
    category: "医疗空间",
    location: "广州·天河区",
    date: "2024年7月",
    area: "4,200㎡",
    image: "/hospital-healing-garden-with-therapeutic-plants-an.jpg",
    description: "专为医院设计的康复花园，运用园艺疗法理念，为患者提供康复辅助环境。",
    tags: ["康复花园", "园艺疗法", "无障碍设计"],
  },
]

const categories = ["全部", "商业景观", "住宅景观", "公共空间", "教育空间", "医疗空间"]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4">项目展示</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">我们的精品项目</h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            每个项目都承载着我们的专业态度和创新精神，见证我们如何将设计理念转化为现实空间
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="搜索项目..." className="pl-10" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "全部" ? "default" : "outline"}
                size="sm"
                className={category === "全部" ? "landscape-gradient text-white" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary">{project.category}</Badge>
                  <span className="text-sm text-muted-foreground">{project.area}</span>
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Link href={`/projects/${project.id}`}>
                    <Button variant="ghost" size="sm" className="w-full group/btn">
                      查看详情
                      <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            加载更多项目
          </Button>
        </div>

        {/* CTA Section */}
        <section className="mt-20 py-16 landscape-gradient rounded-2xl">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">有项目想法？让我们来实现它</h2>
            <p className="text-lg mb-8 text-white/90 text-pretty">
              无论是商业空间还是住宅项目，我们都能为您提供专业的解决方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                开始咨询
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                了解流程
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
