import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, Clock, CheckCircle, AlertCircle, MessageSquare } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "approval",
    title: "Test Approved",
    message: "Physics Chapter 5 test has been approved",
    time: "2 minutes ago",
    icon: CheckCircle,
    color: "text-success"
  },
  {
    id: 2,
    type: "doubt",
    title: "New Doubt Raised",
    message: "Student asked about electromagnetic induction",
    time: "15 minutes ago",
    icon: MessageSquare,
    color: "text-blue-600"
  },
  {
    id: 3,
    type: "reminder",
    title: "Class Reminder",
    message: "Live class starts in 30 minutes",
    time: "30 minutes ago",
    icon: Clock,
    color: "text-warning"
  },
  {
    id: 4,
    type: "content",
    title: "Content Under Review",
    message: "Chemistry video pending approval",
    time: "1 hour ago",
    icon: AlertCircle,
    color: "text-orange-600"
  }
];

export function RecentNotifications() {
  return (
    <Card className="lms-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold">Recent Notifications</CardTitle>
        <Button variant="outline" size="sm" asChild>
          <a href="/notifications">View All</a>
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <notification.icon className={`h-5 w-5 mt-0.5 ${notification.color}`} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-sm font-medium text-foreground">{notification.title}</h4>
                <Badge variant="secondary" className="text-xs">
                  {notification.type}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{notification.message}</p>
              <p className="text-xs text-muted-foreground">{notification.time}</p>
            </div>
          </div>
        ))}
        
        <div className="pt-2 border-t">
          <Button variant="ghost" size="sm" className="w-full">
            <Bell className="h-4 w-4 mr-2" />
            Manage Notifications
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}