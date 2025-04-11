"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  FileText,
  Home,
  Menu,
  Settings,
  Utensils,
  Wrench,
  X,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useMobile } from "@/hooks/use-mobile"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile)

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Attendance", href: "/attendance", icon: CheckCircle2 },
    { name: "Timetable", href: "/timetable", icon: Calendar },
    { name: "Courses", href: "/courses", icon: BookOpen },
    { name: "Results", href: "/results", icon: FileText },
    { name: "Mess Menu", href: "/mess", icon: Utensils },
    { name: "Outpass", href: "/outpass", icon: ClipboardList },
    { name: "Maintenance", href: "/maintenance", icon: Wrench },
    { name: "Settings", href: "/settings", icon: Settings },
  ]

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar for mobile */}
      {isMobile && (
        <div className="fixed inset-0 z-40 flex lg:hidden">
          {sidebarOpen && (
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          )}

          <div
            className={cn(
              "fixed inset-y-0 left-0 z-40 w-64 bg-background transition-transform duration-300 ease-in-out",
              sidebarOpen ? "translate-x-0" : "-translate-x-full",
            )}
          >
            <div className="flex h-16 items-center justify-between px-4">
              <div className="flex items-center">
                <span className="text-xl font-bold">UniPortal</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close sidebar</span>
              </Button>
            </div>
            <div className="flex flex-col gap-1 px-2 py-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                    pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                  onClick={() => isMobile && setSidebarOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="absolute bottom-0 w-full border-t p-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Profile" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">John Smith</p>
                  <p className="text-xs text-muted-foreground">CS-2023-045</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar for desktop */}
      {!isMobile && (
        <div
          className={cn(
            "hidden lg:fixed lg:inset-y-0 lg:z-40 lg:flex lg:flex-col transition-all duration-300",
            sidebarOpen ? "lg:w-64" : "lg:w-20",
          )}
        >
          <div className="flex flex-col h-full border-r">
            <div
              className={cn(
                "flex h-16 items-center justify-between px-4",
                sidebarOpen ? "justify-between" : "justify-center",
              )}
            >
              {sidebarOpen && <span className="text-xl font-bold">UniPortal</span>}
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
                {sidebarOpen ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                <span className="sr-only">Toggle sidebar</span>
              </Button>
            </div>
            <div className="flex flex-col gap-1 px-2 py-2 flex-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                    pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    !sidebarOpen && "justify-center px-2",
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {sidebarOpen && item.name}
                </Link>
              ))}
            </div>
            <div className="border-t p-4">
              <div className={cn("flex items-center gap-3", !sidebarOpen && "justify-center")}>
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Profile" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                {sidebarOpen && (
                  <div>
                    <p className="text-sm font-medium">John Smith</p>
                    <p className="text-xs text-muted-foreground">CS-2023-045</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile header */}
      <div className="lg:hidden flex h-16 items-center gap-4 border-b bg-background px-4">
        <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)}>
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open sidebar</span>
        </Button>
        <span className="text-xl font-bold">UniPortal</span>
      </div>

      {/* Main content */}
      <main
        className={cn(
          "flex flex-col flex-1 overflow-y-auto p-4 lg:p-8",
          isMobile ? "pt-20" : sidebarOpen ? "lg:ml-64" : "lg:ml-20",
        )}
      >
        {children}
      </main>
    </div>
  )
}

