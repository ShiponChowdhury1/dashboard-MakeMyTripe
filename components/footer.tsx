import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full bg-muted/30 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">M</span>
            </div>
            <p className="text-sm text-foreground/60">
              Building the future of web applications with modern design and technology.
            </p>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground">Product</h3>
            <div className="space-y-2 text-sm">
              <Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                Security
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="text-foreground/60 hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-foreground/60 hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                Blog
              </Link>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex gap-4">
              <Link href="#" className="p-2 rounded-lg hover:bg-muted transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 rounded-lg hover:bg-muted transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 rounded-lg hover:bg-muted transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>&copy; 2025 Modern App. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
