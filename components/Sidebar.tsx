import { Calendar } from "lucide-react"
import { HomeIcon } from "./ui/home"
import { SquareActivityIcon } from "./ui/square-activity"
import { BadgeAlertIcon } from "./ui/badge-alert"
import { UserIcon } from "./ui/user"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SidebarTrigger } from "@/components/ui/sidebar"
// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: HomeIcon,
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: SquareActivityIcon,
  },
  {
    title: "Communities",
    url: "/communities",
    icon: Calendar,
  },
  {
    title: "Emergency",
    url: "/emergency",
    icon: BadgeAlertIcon,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: UserIcon,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="w-64 mt-16 shrink-0 " collapsible="icon" >

      <SidebarContent className="dark:bg-gray-950">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className="
    flex items-center gap-2 px-3 py-2 m-1 rounded-md transition-all
    text-black dark:text-gray-300
    dark:hover:bg-purple-600
 dark:hover:!text-black
  hover:border-blue-600
   hover:!bg-purple-600
   hover:!text-white
  "
                    >
                      <item.icon size={18} />
                      <div className="font-medium text-md" >{item.title}</div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              {/* <SidebarTrigger className="-ml-1 mt-120" /> */}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}