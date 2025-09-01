import { 
  LayoutDashboard, 
  BookOpen, 
  Video, 
  ClipboardList, 
  BarChart3, 
  Users, 
  Bell, 
  User 
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Live Classes", href: "/live-classes", icon: Video },
  { name: "Tests", href: "/tests", icon: ClipboardList },
  { name: "Student Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Communities", href: "/communities", icon: Users },
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Profile", href: "/profile", icon: User },
];

export function LMSSidebar() {
  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-sidebar-border">
        <h2 className="text-xl font-semibold text-sidebar-foreground">Faculty LMS</h2>
        <p className="text-sm text-muted-foreground">Teacher Dashboard</p>
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