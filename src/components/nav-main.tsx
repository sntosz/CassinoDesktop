'use client'

import { ChevronRight, type LucideIcon } from 'lucide-react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import { useEffect, useState } from 'react'

export function NavMain({
  items,
}: {
  items: {
    title: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      icon?: LucideIcon
      url?: string
    }[]
  }[]
}) {
  // const router = useRouter()
  // const [isMounted, setIsMounted] = useState(false)

  // useEffect(() => {
  //   setIsMounted(true)
  // }, [])

  // const handleNavigation = (url?: string) => {
  //   if (isMounted) {
  //     router.push(`/painel/${url}`)
  //   }
  // }

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive || item.title === 'Documentos'}
            className="group/collapsible hover:color:[#13C296]"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon ? <item.icon /> : null}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub className="max-h-64 overflow-y-auto">
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <button>
                          {subItem.icon ? <subItem.icon /> : null}
                          <span>{subItem.title}</span>
                        </button>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
