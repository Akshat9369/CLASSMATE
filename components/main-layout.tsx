"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BookOpen,
  Calendar,
  CheckCircle,
  ClipboardList,
  HelpCircle,
  Home,
  LogOut,
  Menu,
  Settings,
  Utensils,
  Users,
  Wrench,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile)

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Attendance", href: "/attendance", icon: CheckCircle },
    { name: "Holidays", href: "/holidays", icon: Calendar },
    { name: "Mess", href: "/mess", icon: Utensils },
    { name: "Timetable", href: "/timetable", icon: BookOpen },
    { name: "Leave & Gate Pass", href: "/outpass", icon: ClipboardList },
    { name: "Maintenance", href: "/maintenance", icon: Wrench },
    { name: "Doubts", href: "/doubts", icon: HelpCircle },
    { name: "Room Booking", href: "/room-booking", icon: Users },
    { name: "Settings", href: "/settings", icon: Settings },
  ]

  // Close sidebar on mobile when route changes
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false)
    }
  }, [pathname, isMobile])

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Mobile sidebar backdrop */}
      {isMobile && sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-background border-r transition-transform duration-300 ease-in-out",
          isMobile ? (sidebarOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0",
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b">
          <div className="flex items-center">
            <span className="text-xl font-bold">CLASSMATE</span>
          </div>
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close sidebar</span>
            </Button>
          )}
        </div>

        <div className="flex flex-col h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex-1 px-2 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                  pathname === item.href || pathname.startsWith(`${item.href}/`)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </div>

          <div className="p-4 border-t">
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/login">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={cn("flex flex-col flex-1 overflow-hidden", isMobile ? "ml-0" : "ml-64")}>
        {/* Top header */}
        <header className="h-16 border-b bg-background flex items-center px-4 sticky top-0 z-30">
          <div className="flex items-center gap-4 w-full">
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)}>
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open sidebar</span>
              </Button>
            )}

            <div className="flex-1">
              <h1 className="text-lg font-semibold">
                {navigation.find((item) => pathname === item.href || pathname.startsWith(`${item.href}/`))?.name ||
                  "Dashboard"}
              </h1>
            </div>

            <Link href="/profile">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Profile" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

