import Link from "next/link"
import { Leaf, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
              <Leaf className="h-6 w-6" />
              <span>福瑞园林</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              专业的园林设计与施工团队，致力于打造绿色生态空间，提供从设计到施工的一站式服务。
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">快速导航</h3>
            <div className="space-y-2">
              <Link
                href="/projects"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                项目展示
              </Link>
              <Link href="/team" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                团队成员
              </Link>
              <Link
                href="/technology"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                技术优势
              </Link>
              <Link href="/forum" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                论坛交流
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">核心服务</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">园林景观设计</p>
              <p className="text-sm text-muted-foreground">绿化工程施工</p>
              <p className="text-sm text-muted-foreground">智能灌溉系统</p>
              <p className="text-sm text-muted-foreground">生态修复工程</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">联系方式</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>400-888-9999</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@furui-landscape.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>北京市朝阳区园林大道123号</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 福瑞园林科技有限公司. 保留所有权利.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                隐私政策
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                服务条款
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
