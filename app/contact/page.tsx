"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "公司地址",
    content: "北京市朝阳区园林大道123号绿境大厦15层",
    link: "https://maps.google.com",
  },
  {
    icon: Phone,
    title: "联系电话",
    content: "400-888-9999",
    link: "tel:400-888-9999",
  },
  {
    icon: Mail,
    title: "邮箱地址",
    content: "info@furui-landscape.com",
    link: "mailto:info@furui-landscape.com",
  },
  {
    icon: Clock,
    title: "工作时间",
    content: "周一至周五 9:00-18:00",
    link: null,
  },
]

const offices = [
  {
    city: "北京总部",
    address: "朝阳区园林大道123号绿境大厦15层",
    phone: "010-8888-9999",
    email: "beijing@furui-landscape.com",
    image: "/modern-office-building-with-green-facade.jpg",
  },
  {
    city: "上海分公司",
    address: "浦东新区世纪大道456号环球金融中心28层",
    phone: "021-6666-8888",
    email: "shanghai@furui-landscape.com",
    image: "/shanghai-office-building-with-garden.jpg",
  },
  {
    city: "深圳分公司",
    address: "南山区科技园南区深圳湾科技生态园10栋",
    phone: "0755-8888-6666",
    email: "shenzhen@furui-landscape.com",
    image: "/shenzhen-modern-office-with-landscape.jpg",
  },
]

const services = ["园林景观设计", "绿化工程施工", "智能灌溉系统", "园林养护管理", "生态修复工程", "其他服务"]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    budget: "",
    message: "",
    agreement: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 处理表单提交
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4">联系我们</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">开始您的园林项目</h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            无论您有什么想法或需求，我们的专业团队都随时为您提供咨询和服务
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-bold">项目咨询</h2>
                </div>
                <p className="text-muted-foreground">请填写以下信息，我们将在24小时内与您联系</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">姓名 *</Label>
                      <Input
                        id="name"
                        placeholder="请输入您的姓名"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">公司名称</Label>
                      <Input
                        id="company"
                        placeholder="请输入公司名称"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">联系电话 *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="请输入联系电话"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">邮箱地址 *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="请输入邮箱地址"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="service">服务类型</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="请选择服务类型" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">项目预算</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="请选择预算范围" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="50万以下">50万以下</SelectItem>
                          <SelectItem value="50-100万">50-100万</SelectItem>
                          <SelectItem value="100-300万">100-300万</SelectItem>
                          <SelectItem value="300-500万">300-500万</SelectItem>
                          <SelectItem value="500万以上">500万以上</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">项目描述</Label>
                    <Textarea
                      id="message"
                      placeholder="请详细描述您的项目需求、场地情况、设计要求等..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agreement"
                      checked={formData.agreement}
                      onCheckedChange={(checked) => handleInputChange("agreement", checked as boolean)}
                    />
                    <Label htmlFor="agreement" className="text-sm">
                      我已阅读并同意《隐私政策》和《服务条款》
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full landscape-gradient text-white"
                    disabled={!formData.agreement}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    提交咨询
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">联系方式</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 landscape-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">服务保障</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">24小时内响应咨询</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">免费上门勘察</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">专业方案设计</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">全程项目跟踪</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">完善售后服务</span>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="landscape-gradient text-white">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">紧急联系</h3>
                <p className="text-white/90 text-sm mb-4">如有紧急项目需求，请直接致电</p>
                <a href="tel:400-888-9999" className="text-xl font-bold">
                  400-888-9999
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Office Locations */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">办公地点</h2>
            <p className="text-lg text-muted-foreground">我们在全国主要城市设有办事处</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={office.image || "/placeholder.svg"}
                    alt={office.city}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{office.city}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <a href={`tel:${office.phone}`} className="text-sm text-muted-foreground hover:text-primary">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a href={`mailto:${office.email}`} className="text-sm text-muted-foreground hover:text-primary">
                        {office.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
