import type React from "react"
import DashboardSidebar from "@/components/dashboard-sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col">
      <DashboardSidebar />
      <main className="lg:ml-64 pt-4 px-4 md:px-8">{children}</main>
    </div>
  )
}
