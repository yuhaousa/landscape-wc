"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { ArrowLeft, ThumbsUp, MessageCircle, Eye, Clock, Share2, Flag, Quote } from "lucide-react"

// 模拟话题数据
const topicData = {
  id: 1,
  title: "现代简约风格园林设计的植物选择建议",
  category: "设计交流",
  author: {
    name: "张设计师",
    avatar: "/placeholder.svg?height=60&width=60",
    level: "资深设计师",
    joinDate: "2020年3月",
    posts: 156,
    reputation: 892,
  },
  content: `最近在做一个现代简约风格的园林项目，想请教大家在植物选择方面有什么好的建议。

项目背景：
- 项目类型：商业办公园区
- 面积：约8000平方米
- 风格定位：现代简约
- 预算：中等偏上

目前的困惑：
1. 如何在保持简约风格的同时，让植物配置不显得单调？
2. 哪些植物既符合现代感，又容易维护？
3. 色彩搭配上有什么需要注意的地方？

希望有经验的同行能给一些建议，特别是在植物品种选择和空间布局方面。谢谢大家！`,
  images: ["/modern-landscape-garden-with-geometric-design-and-.jpg"],
  replies: 23,
  views: 456,
  likes: 12,
  createdAt: "2小时前",
  tags: ["现代设计", "植物配置", "简约风格"],
}

const replies = [
  {
    id: 1,
    author: {
      name: "李园艺师",
      avatar: "/placeholder.svg?height=40&width=40",
      level: "植物专家",
      reputation: 654,
    },
    content: `很好的问题！对于现代简约风格的植物配置，我建议：

1. **选择几何感强的植物**：如龙血树、琴叶榕、橡皮树等，这些植物形态规整，符合现代简约的美学。

2. **色彩以绿色为主，适当点缀**：主要用深浅不同的绿色营造层次，可以适当加入银灰色叶片的植物如银叶菊。

3. **重复种植**：同一种植物成片种植，营造统一感和节奏感。

4. **容器选择**：使用简洁的几何形容器，如方形、圆形的现代花盆。

具体推荐植物：
- 大型：琴叶榕、橡皮树、龙血树
- 中型：虎尾兰、龟背竹、鹤望兰
- 小型：多肉植物、蕨类植物

这样搭配既现代又好维护，你觉得怎么样？`,
    likes: 8,
    createdAt: "1小时前",
    isLiked: false,
  },
  {
    id: 2,
    author: {
      name: "王设计师",
      avatar: "/placeholder.svg?height=40&width=40",
      level: "高级设计师",
      reputation: 432,
    },
    content: `@李园艺师 说得很对！我补充几点：

**空间布局建议**：
- 采用不对称平衡的布局方式
- 留白很重要，不要填满每个角落
- 用线性种植营造现代感

**维护角度**：
建议选择本土适应性强的植物，比如：
- 北方：国槐、银杏、白蜡
- 南方：香樟、桂花、榕树

另外，智能灌溉系统是必须的，既符合现代科技感，又能降低维护成本。`,
    likes: 5,
    createdAt: "45分钟前",
    isLiked: true,
  },
  {
    id: 3,
    author: {
      name: "陈工程师",
      avatar: "/placeholder.svg?height=40&width=40",
      level: "技术专家",
      reputation: 789,
    },
    content: `从施工和维护的角度分享一些经验：

1. **土壤改良**：现代简约风格通常用硬质铺装较多，要注意土壤透气性和排水。

2. **植物间距**：给植物足够的生长空间，避免后期修剪破坏造型。

3. **照明配合**：夜景照明要考虑植物的光影效果，LED线性灯具很适合。

预算控制上，建议把钱花在关键节点的精品植物上，其他区域可以用相对经济的品种。`,
    likes: 3,
    createdAt: "30分钟前",
    isLiked: false,
  },
]

export default function TopicDetailPage({ params }: { params: { id: string } }) {
  const [replyContent, setReplyContent] = useState("")
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/forum">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回论坛
            </Button>
          </Link>
        </div>

        {/* Topic Header */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">{topicData.category}</Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  <span>{topicData.views} 浏览</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="h-3 w-3" />
                  <span>{topicData.replies} 回复</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{topicData.createdAt}</span>
                </div>
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-balance">{topicData.title}</h1>

            <div className="flex flex-wrap gap-1 mb-6">
              {topicData.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-start gap-4">
              <Avatar className="flex-shrink-0">
                <AvatarImage src={topicData.author.avatar || "/placeholder.svg"} alt={topicData.author.name} />
                <AvatarFallback>{topicData.author.name[0]}</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold">{topicData.author.name}</span>
                  <Badge variant="outline" className="text-xs">
                    {topicData.author.level}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  加入时间：{topicData.author.joinDate} • 发帖：{topicData.author.posts} • 声望：
                  {topicData.author.reputation}
                </div>

                <div className="prose prose-sm max-w-none mb-6">
                  <div className="whitespace-pre-wrap">{topicData.content}</div>
                </div>

                {topicData.images && topicData.images.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {topicData.images.map((image, index) => (
                      <img
                        key={index}
                        src={image || "/placeholder.svg"}
                        alt={`话题图片 ${index + 1}`}
                        className="w-full h-auto rounded-lg"
                      />
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <Button
                    variant={isLiked ? "default" : "outline"}
                    size="sm"
                    onClick={() => setIsLiked(!isLiked)}
                    className={isLiked ? "landscape-gradient text-white" : ""}
                  >
                    <ThumbsUp className="mr-1 h-3 w-3" />
                    {isLiked ? topicData.likes + 1 : topicData.likes}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="mr-1 h-3 w-3" />
                    分享
                  </Button>
                  <Button variant="outline" size="sm">
                    <Flag className="mr-1 h-3 w-3" />
                    举报
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Replies */}
        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">回复 ({replies.length})</h2>

          {replies.map((reply, index) => (
            <Card key={reply.id}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="flex-shrink-0">
                    <AvatarImage src={reply.author.avatar || "/placeholder.svg"} alt={reply.author.name} />
                    <AvatarFallback>{reply.author.name[0]}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold">{reply.author.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {reply.author.level}
                      </Badge>
                      <span className="text-sm text-muted-foreground">#{index + 1}</span>
                    </div>

                    <div className="text-sm text-muted-foreground mb-3">
                      声望：{reply.author.reputation} • {reply.createdAt}
                    </div>

                    <div className="prose prose-sm max-w-none mb-4">
                      <div className="whitespace-pre-wrap">{reply.content}</div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Button
                        variant={reply.isLiked ? "default" : "outline"}
                        size="sm"
                        className={reply.isLiked ? "landscape-gradient text-white" : ""}
                      >
                        <ThumbsUp className="mr-1 h-3 w-3" />
                        {reply.likes}
                      </Button>
                      <Button variant="outline" size="sm">
                        <Quote className="mr-1 h-3 w-3" />
                        引用
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reply Form */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">发表回复</h3>
            <div className="space-y-4">
              <Textarea
                placeholder="请输入您的回复内容..."
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                rows={6}
                className="resize-none"
              />
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">支持 Markdown 格式 • 请遵守论坛规则</div>
                <div className="flex gap-2">
                  <Button variant="outline">预览</Button>
                  <Button className="landscape-gradient text-white">发布回复</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
