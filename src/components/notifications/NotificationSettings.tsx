import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bell, Mail, MessageSquare, Calendar } from "lucide-react";

const notificationSettings = [
  {
    category: "Live Classes",
    icon: Calendar,
    settings: [
      { key: "class_reminders", label: "Class start reminders", enabled: true },
      { key: "class_cancellation", label: "Class cancellation alerts", enabled: true },
      { key: "student_join", label: "Student join notifications", enabled: false }
    ]
  },
  {
    category: "Content & Tests", 
    icon: MessageSquare,
    settings: [
      { key: "content_approved", label: "Content approval status", enabled: true },
      { key: "test_submissions", label: "Test submission alerts", enabled: true },
      { key: "content_views", label: "Content view notifications", enabled: false }
    ]
  },
  {
    category: "Student Interactions",
    icon: Bell,
    settings: [
      { key: "new_doubts", label: "New doubt notifications", enabled: true },
      { key: "comment_replies", label: "Comment replies", enabled: true },
      { key: "discussion_posts", label: "Discussion forum posts", enabled: false }
    ]
  },
  {
    category: "System Updates",
    icon: Mail,
    settings: [
      { key: "system_maintenance", label: "System maintenance alerts", enabled: true },
      { key: "feature_updates", label: "New feature announcements", enabled: false },  
      { key: "policy_changes", label: "Policy change notifications", enabled: true }
    ]
  }
];

export function NotificationSettings() {
  return (
    <div className="space-y-6">
      {/* General Settings */}
      <Card className="lms-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">General Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="email-frequency">Email Notification Frequency</Label>
              <p className="text-sm text-muted-foreground">How often you receive email summaries</p>
            </div>
            <Select defaultValue="daily">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="instant">Instant</SelectItem>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="never">Never</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="push-notifications">Push Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive browser push notifications</p>
            </div>
            <Switch id="push-notifications" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="sound-alerts">Sound Alerts</Label>
              <p className="text-sm text-muted-foreground">Play sound for important notifications</p>
            </div>
            <Switch id="sound-alerts" defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Category-specific Settings */}
      {notificationSettings.map((category, categoryIndex) => (
        <Card key={categoryIndex} className="lms-card">
          <CardHeader>
            <div className="flex items-center gap-2">
              <category.icon className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg font-semibold">{category.category}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {category.settings.map((setting, settingIndex) => (
              <div key={settingIndex} className="flex items-center justify-between">
                <Label htmlFor={setting.key} className="flex-1 cursor-pointer">
                  {setting.label}
                </Label>
                <Switch id={setting.key} defaultChecked={setting.enabled} />
              </div>
            ))}
          </CardContent>
        </Card>
      ))}

      {/* Save Settings */}
      <div className="flex justify-end gap-3">
        <Button variant="outline">Reset to Default</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}