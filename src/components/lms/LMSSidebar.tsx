import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Video,
  FileText,
  Calendar,
  Users,
  MessageSquare,
  Bell,
  BarChart3,
  User,
  CheckSquare,
  GraduationCap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Classes", href: "/classes", icon: Video },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Tests", href: "/tests", icon: FileText },
  { name: "Communities", href: "/communities", icon: MessageSquare },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Approvals", href: "/approvals", icon: CheckSquare },
  { name: "Profile", href: "/profile", icon: User },
];

export function LMSSidebar() {
  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-sidebar-border">
        <h2 className="text-xl font-semibold text-sidebar-foreground">Teacher LMS</h2>
        <p className="text-sm text-muted-foreground">Faculty Portal</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.href}
              end={item.href === "/"}
              className={({ isActive }) =>
                cn(
                  "lms-sidebar-item",
                  isActive ? "lms-sidebar-item-active" : "lms-sidebar-item-inactive"
                )
              }
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="text-xs text-muted-foreground">
          Faculty Portal v2.0
        </div>
      </div>
    </div>
  );
}