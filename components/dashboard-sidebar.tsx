"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Menu,
  X,
  LayoutDashboard,
  Settings,
  Calendar,
  MessageSquare,
  ShoppingCart,
  BarChart3,
  ChevronDown,
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function DashboardSidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)
  const pathname = usePathname()

  const menuItems = [
    { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
    {
      label: "Analytics",
      icon: BarChart3,
      submenu: [
        { label: "User Analytics", href: "/dashboard/analytics/users" },
        { label: "Reports", href: "/dashboard/analytics/reports" },
      ],
    },
    {
      label: "Business",
      icon: ShoppingCart,
      submenu: [
        { label: "E-Commerce", href: "/dashboard/business/ecommerce" },
        { label: "Inventory", href: "/dashboard/business/inventory" },
      ],
    },
    { label: "Messages", href: "/dashboard/messages", icon: MessageSquare },
    { label: "Calendar", href: "/dashboard/calendar", icon: Calendar },
    { label: "Settings", href: "/dashboard/settings", icon: Settings },
  ]

  const isActive = (href: string) => pathname === href
  const isSubmenuActive = (submenu: Array<{ href: string }>) => submenu.some((item) => pathname === item.href)

  const toggleSubmenu = (label: string) => {
    setExpandedMenu(expandedMenu === label ? null : label)
  }

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-20 left-4 z-50 p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors lg:hidden"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Overlay for Mobile */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsOpen(false)} />}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-24 h-[calc(100vh-96px)] w-64 bg-card border-r border-border overflow-y-auto transition-transform duration-300 z-40",
          !isOpen && "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="p-6 space-y-2">
          <h2 className="text-lg font-bold text-foreground mb-8">Menu</h2>

          {menuItems.map((item) => {
            const Icon = item.icon
            const hasSubmenu = "submenu" in item
            const isExpanded = expandedMenu === item.label
            const menuActive = hasSubmenu ? isSubmenuActive(item.submenu!) : isActive(item.href!)

            return (
              <div key={item.label}>
                {hasSubmenu ? (
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors",
                      menuActive ? "bg-primary/10 text-primary font-medium" : "text-foreground/70 hover:bg-accent/50",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </div>
                    <ChevronDown className={cn("w-4 h-4 transition-transform", isExpanded && "rotate-180")} />
                  </button>
                ) : (
                  <Link
                    href={item.href!}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                      isActive(item.href!)
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-foreground/70 hover:bg-accent/50",
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                )}

                {/* Submenu */}
                {hasSubmenu && isExpanded && (
                  <div className="mt-2 ml-4 space-y-1 border-l border-border/50 pl-4">
                    {item.submenu!.map((subitem) => (
                      <Link
                        key={subitem.href}
                        href={subitem.href}
                        className={cn(
                          "block px-4 py-2 rounded-lg text-sm transition-colors",
                          isActive(subitem.href)
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-foreground/60 hover:bg-accent/50",
                        )}
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="lg:ml-64 transition-margin duration-300">
        {/* This ensures content doesn't go behind sidebar */}
      </div>
    </>
  )
}
