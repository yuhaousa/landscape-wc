"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { Search, Plus, MessageCircle, Eye, ThumbsUp, Clock, Pin, File as Fire, TrendingUp } from "lucide-react"

const forumCategories = [
  { id: "all", name: "全部", count: 156 },
  { id: "design", name: "设计交流", count: 45 },
  { id: "construction", name: "施工技术", count: 38 },
  { id: "plants", name: "植物配置", count: 29 },
  { id: "maintenance", name: "养护管理", count: 24 },
  { id: "showcase", name: "作品展示", count: 20 },
]

const forumTopics = [
  {
    id: 1,
    title: "现代简约风格园林设计的植物选择建议",
    category: "设计交流",
    author: {
      name: "张设计师",
      avatar: "/placeholder.svg?height=40&width=40",
      level: "资深设计师",
    },
    content: "最近在做一个现代简约风格的园林项目，想请教大家在植物选择方面有什么好的建议...",
    replies: 23,
    views: 456,
    likes: 12,
    isPinned: true,
    isHot: false,
    createdAt: "2小时前",
    lastReply: "30分钟前",
    tags: ["现代设计", "植物配置", "简约风格"],
  },
  {
    id: 2,
    title: "智能灌溉系统在大型项目中的应用经验分享",
    category: "施工技术",
    author: {
      name: "李工程师",
      avatar: "/placeholder.svg?height=40&width=40",
      level: "技术专家",
    },
    content: "分享一下我们团队在某科技园区项目中使用智能灌溉系统的经验和遇到的问题...",
    replies: 18,
    views: 324,
    likes: 15,
    isPinned: false,
    isHot: true,
    createdAt: "5小时前",
    lastReply: "1小时前",
    tags: ["智能灌溉", "技术分享", "项目经验"],
  },
  {
    id: 3,
    title: "春季园林养护要点及常见问题解决方案",
    category: "养护管理",
    author: {
      name: "王园艺师",
      avatar: "/placeholder.svg?height=40&width=40",
      level: "养护专家",
    },
    content: "春季是园林养护的关键时期，总结了一些要点和常见问题的解决方案...",
    replies: 31,
    views: 678,
    likes: 28,
    isPinned: false,
    isHot: true,
    createdAt: "1天前",
    lastReply: "2小时前",
    tags: ["春季养护", "问题解决", "经验分享"],
  },
  {
    id: 4,
    title: "住宅小区景观设计中的儿童活动区域规划",
    category: "设计交流",
    author: {
      name: "陈设计师",
      avatar: "/placeholder.svg?height=40&width=40",
      level: "高级设计师",
    },
    content: "在住宅项目中，儿童活动区域的设计需要考虑安全性、趣味性和教育性...",
    replies: 16,
    views: 289,
    likes: 9,
    isPinned: false,
    isHot: false,
    createdAt: "2天前",
    lastReply: "4小时前",
    tags: ["住宅景观", "儿童设计", "安全规划"],
  },
  {
    id: 5,
    title: "我的屋顶花园改造项目 - 从设计到完工全记录",
    category: "作品展示",
    author: {
      name: "刘业主",
      avatar: "/placeholder.svg?height=40&width=40",
      level: "园艺爱好者",
    },
    content: "分享我家屋顶花园的改造过程，从最初的想法到最终的成果，希望能给大家一些参考...",
    replies: 42,
    views: 892,
    likes: 35,
    isPinned: false,
    isHot: true,
    createdAt: "3天前",
    lastReply: "1小时前",
    tags: ["屋顶花园", "改造记录", "DIY"],
  },
]

const hotTopics = [
  { title: "2025年园林设计流行趋势预测", replies: 67, views: 1234 },
  { title: "如何选择适合北方气候的观赏植物", replies: 45, views: 987 },
  { title: "小面积庭院的空间利用技巧", replies: 38, views: 756 },
]

export default function ForumPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">论坛交流</h1>
            <p className="text-muted-foreground">与同行专家交流经验，分享园林设计心得</p>
          </div>
          <Button className="landscape-gradient text-white">
            <Plus className="mr-2 h-4 w-4" />
            发布话题
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="mb-6">
              <div className="flex gap-4 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="搜索话题..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
                <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
                  {forumCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id} className="text-xs">
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Topic List */}
            <div className="space-y-4">
              {forumTopics.map((topic) => (
                <Card key={topic.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="flex-shrink-0">
                        <AvatarImage src={topic.author.avatar || "/placeholder.svg"} alt={topic.author.name} />
                        <AvatarFallback>{topic.author.name[0]}</AvatarFallback>
                      </Avatar>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          {topic.isPinned && <Pin className="h-4 w-4 text-primary" />}
                          {topic.isHot && <Fire className="h-4 w-4 text-orange-500" />}
                          <Badge variant="secondary">{topic.category}</Badge>
                        </div>

                        <Link href={`/forum/${topic.id}`}>
                          <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors line-clamp-1">
                            {topic.title}
                          </h3>
                        </Link>

                        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{topic.content}</p>

                        <div className="flex flex-wrap gap-1 mb-3">
                          {topic.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="font-medium">{topic.author.name}</span>
                            <Badge variant="outline" className="text-xs">
                              {topic.author.level}
                            </Badge>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{topic.createdAt}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="h-3 w-3" />
                              <span>{topic.likes}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle className="h-3 w-3" />
                              <span>{topic.replies}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              <span>{topic.views}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline">加载更多话题</Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Hot Topics */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">热门话题</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {hotTopics.map((topic, index) => (
                  <div key={index} className="pb-3 border-b border-border last:border-0">
                    <Link href="#" className="block hover:text-primary transition-colors">
                      <h4 className="text-sm font-medium mb-1 line-clamp-2">{topic.title}</h4>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{topic.replies} 回复</span>
                        <span>{topic.views} 浏览</span>
                      </div>
                    </Link>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <h3 className="font-semibold">分类导航</h3>
              </CardHeader>
              <CardContent className="space-y-2">
                {forumCategories.slice(1).map((category) => (
                  <div key={category.id} className="flex items-center justify-between py-1">
                    <Link
                      href="#"
                      className="text-sm hover:text-primary transition-colors"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.name}
                    </Link>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Forum Rules */}
            <Card>
              <CardHeader>
                <h3 className="font-semibold">论坛规则</h3>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• 保持友善和专业的交流态度</p>
                <p>• 发布与园林设计相关的内容</p>
                <p>• 尊重他人的观点和作品</p>
                <p>• 禁止发布广告和垃圾信息</p>
                <p>• 鼓励分享经验和互相学习</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
