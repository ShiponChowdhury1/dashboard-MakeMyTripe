import Link from "next/link"
import { ArrowRight, Zap, Shield, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <div className="px-4 py-2 rounded-full bg-muted border border-border">
              <p className="text-sm font-medium text-foreground/80">✨ Welcome to Modern App</p>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance">
            Build Amazing Experiences with{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Advanced UI</span>
          </h1>

          <p className="text-xl text-foreground/60 max-w-2xl mx-auto text-balance">
            A modern full-stack application featuring beautiful design, seamless dark mode, and powerful functionality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button asChild size="lg" className="rounded-lg">
              <Link href="/dashboard">
                Get Started <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-lg bg-transparent">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Powerful Features</h2>
            <p className="text-lg text-foreground/60 text-balance">Everything you need to build modern applications</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized for performance with cutting-edge web technologies",
              },
              {
                icon: Shield,
                title: "Secure",
                description: "Enterprise-grade security to protect your data",
              },
              {
                icon: Sparkles,
                title: "Beautiful Design",
                description: "Modern UI with smooth animations and transitions",
              },
            ].map((feature, i) => {
              const Icon = feature.icon
              return (
                <Card key={i} className="border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-foreground">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/60">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20 p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Ready to get started?</h2>
          <p className="text-lg text-foreground/60 mb-8 text-balance">
            Join thousands of users building with our modern platform
          </p>
          <Button asChild size="lg" className="rounded-lg">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
