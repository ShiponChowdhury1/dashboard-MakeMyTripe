import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "About Us - Modern App",
  description: "Learn about our mission and values",
}

export default function About() {
  return (
    <div className="w-full py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Hero */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance">About Modern App</h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto text-balance">
            We're building the future of web applications with a focus on design, performance, and user experience.
          </p>
        </div>

        {/* Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
            <p className="text-foreground/70 leading-relaxed">
              We believe that great software should be beautiful, intuitive, and powerful. Our mission is to empower
              developers and designers to create amazing digital experiences.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              With modern technologies and thoughtful design, we're helping teams build applications that users love.
            </p>
          </div>

          <div className="relative h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-border flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                <span className="text-5xl text-primary-foreground">🚀</span>
              </div>
              <p className="text-foreground/60 font-medium">Innovation at Scale</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-foreground text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Design Excellence",
                description: "We craft beautiful interfaces that users love to interact with daily.",
              },
              {
                title: "User Focused",
                description: "Every decision is made with the end user in mind.",
              },
              {
                title: "Continuous Innovation",
                description: "We stay ahead of the curve with cutting-edge technologies.",
              },
            ].map((value, i) => (
              <Card key={i} className="border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/60">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="space-y-8 bg-muted/20 rounded-2xl p-8 md:p-12 border border-border">
          <h2 className="text-3xl font-bold text-foreground">Built by Talented People</h2>
          <p className="text-foreground/70">
            Our team is composed of designers, developers, and innovators passionate about creating exceptional digital
            experiences.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Design", "Engineering", "Product", "Marketing"].map((role, i) => (
              <div
                key={i}
                className="h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-border flex items-center justify-center"
              >
                <span className="text-sm font-medium text-foreground/60">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
