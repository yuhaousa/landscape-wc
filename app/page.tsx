import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Leaf, Users, Zap, CheckCircle, Star } from "lucide-react"
import HeroCarousel from "@/components/hero-carousel"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden">
        <HeroCarousel />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">完成项目</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-muted-foreground">年专业经验</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">客户满意度</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">专业团队</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">核心服务</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">专业的园林解决方案</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              从设计到施工，从维护到升级，我们提供全生命周期的园林服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 landscape-gradient rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">景观设计</h3>
                <p className="text-muted-foreground mb-4">
                  专业的景观设计团队，结合现代设计理念与生态环保原则，打造独特的园林空间
                </p>
                <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                  <span className="text-sm font-medium">了解更多</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 landscape-gradient rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">工程施工</h3>
                <p className="text-muted-foreground mb-4">
                  经验丰富的施工团队，严格按照设计方案执行，确保工程质量和进度
                </p>
                <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                  <span className="text-sm font-medium">了解更多</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 landscape-gradient rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">智能系统</h3>
                <p className="text-muted-foreground mb-4">智能灌溉、照明控制等现代化园林管理系统，提升管理效率</p>
                <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                  <span className="text-sm font-medium">了解更多</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">精选案例</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">我们的代表作品</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              每个项目都是我们专业实力的体现，见证我们如何将创意转化为现实
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/modern-corporate-office-garden-with-water-feature.jpg"
                  alt="企业园区景观"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2">商业景观</Badge>
                <h3 className="text-xl font-semibold mb-2">科技园区景观设计</h3>
                <p className="text-muted-foreground text-sm">现代化办公园区的绿色空间设计，融合科技感与自然美</p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/residential-community-garden-with-children-playgro.jpg"
                  alt="住宅社区景观"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2">住宅景观</Badge>
                <h3 className="text-xl font-semibold mb-2">高端住宅社区</h3>
                <p className="text-muted-foreground text-sm">为居民打造舒适宜居的生活环境，注重功能性与美观性</p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/public-park-with-walking-paths-and-native-plants.jpg"
                  alt="公共空间景观"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2">公共空间</Badge>
                <h3 className="text-xl font-semibold mb-2">城市公园改造</h3>
                <p className="text-muted-foreground text-sm">提升城市公共空间品质，为市民创造更好的休闲环境</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button size="lg" variant="outline">
                查看更多项目
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4">为什么选择我们</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">专业团队，品质保证</h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                我们拥有15年的行业经验，专业的设计和施工团队，以及完善的项目管理体系，确保每个项目都能达到客户的期望。
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">专业设计团队</h4>
                    <p className="text-muted-foreground text-sm">拥有多名高级景观设计师，具备丰富的项目经验</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">质量保证体系</h4>
                    <p className="text-muted-foreground text-sm">严格的质量控制流程，确保工程质量符合标准</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">售后服务</h4>
                    <p className="text-muted-foreground text-sm">提供完善的售后维护服务，让您的园林持续美丽</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/professional-landscape-design-team-working-on-plan.jpg"
                alt="专业团队"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">4.9/5</span>
                </div>
                <p className="text-sm text-muted-foreground">客户评分</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 landscape-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">准备开始您的园林项目了吗？</h2>
          <p className="text-xl mb-8 text-white/90 text-pretty">联系我们的专业团队，获取免费的项目咨询和报价</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              免费咨询
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              查看案例
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
