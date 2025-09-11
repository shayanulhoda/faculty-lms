import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Bell, Clock, CheckCircle, AlertCircle, MessageSquare, Send, Users } from "lucide-react";
import { useState } from "react";

const notifications = [
  {
    id: "1",
    type: "approval",
    title: "Test Approved",
    message: "Your Physics Chapter 5 test has been approved and is now live",
    time: "2 minutes ago",
    read: false,
    icon: CheckCircle,
    color: "text-success"
  },
  {
    id: "2",
    type: "doubt",
    title: "New Doubt Raised",
    message: "Priya Sharma asked about electromagnetic induction in Physics",
    time: "15 minutes ago", 
    read: false,
    icon: MessageSquare,
    color: "text-blue-600"
  },
  {
    id: "3",
    type: "reminder",
    title: "Class Reminder", 
    message: "Chemistry live class starts in 30 minutes",
    time: "30 minutes ago",
    read: true,
    icon: Clock,
    color: "text-warning"
  },
  {
    id: "4",  
    type: "content",
    title: "Content Under Review",
    message: "Your uploaded video is pending admin approval",
    time: "1 hour ago",
    read: true,
    icon: AlertCircle,
    color: "text-orange-600"
  }
];

export function NotificationList() {
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  const [announcement, setAnnouncement] = useState({
    title: "",
    message: "",
    target: "all"
  });

  const handleSendAnnouncement = () => {
    console.log("Sending announcement:", announcement);
    setShowAnnouncement(false);
    setAnnouncement({ title: "", message: "", target: "all" });
  };

  return (
    <div className="space-y-6">
      {/* Send Announcement */}
      <Card className="lms-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-lg font-semibold">Send Announcement</CardTitle>
          <Button onClick={() => setShowAnnouncement(!showAnnouncement)}>
            <Send className="h-4 w-4 mr-2" />
            New Announcement
          </Button>
        </CardHeader>
        {showAnnouncement && (
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Input
                value={announcement.title}
                onChange={(e) => setAnnouncement({...announcement, title: e.target.value})}
                placeholder="Announcement title"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                value={announcement.message}
                onChange={(e) => setAnnouncement({...announcement, message: e.target.value})}
                placeholder="Type your announcement message..."
                rows={3}
              />
            </div>
            <div className="flex gap-3">
              <Button onClick={handleSendAnnouncement}>
                <Users className="h-4 w-4 mr-2" />
                Send to All Students
              </Button>
              <Button variant="outline" onClick={() => setShowAnnouncement(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Notifications List */}
      <Card className="lms-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">All Notifications</CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">
                {notifications.filter(n => !n.read).length} unread
              </Badge>
              <Button variant="outline" size="sm">
                Mark All Read
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {notifications.map((notification) => (
            <div 
              key={notification.id} 
              className={`flex items-start gap-3 p-4 rounded-lg transition-colors ${
                !notification.read ? 'lms-highlight-card' : 'hover:bg-muted/50'
              }`}
            >
              <notification.icon className={`h-5 w-5 mt-0.5 ${notification.color}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-medium text-foreground">{notification.title}</h4>
                  {!notification.read && (
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  )}
                  <Badge variant="secondary" className="text-xs">
                    {notification.type}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{notification.message}</p>
                <p className="text-xs text-muted-foreground">{notification.time}</p>
              </div>
              <Button variant="ghost" size="sm">
                {notification.read ? "Read" : "Mark Read"}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}