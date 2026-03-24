"use client"

import { TerminalIcon } from 'lucide-react'
import { SidebarMenuButton,
         SidebarMenuItem,
         SidebarMenu
        } from '@/components/ui/sidebar'

export function NavHeader() {

  return (
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div className="flex aspect-square size-6 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <TerminalIcon className="size-3" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-lg">OpenRLM</span>
              <span className="truncate text-xs">v0.1.0</span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
    </SidebarMenu>
  )
}
