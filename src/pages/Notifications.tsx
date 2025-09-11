import { LMSLayout } from "@/components/lms/LMSLayout";
import { NotificationList } from "@/components/notifications/NotificationList";
import { NotificationSettings } from "@/components/notifications/NotificationSettings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Notifications = () => {
  return (
    <LMSLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Notifications & Alerts</h1>
          <p className="text-muted-foreground mt-2">
            Manage your notifications and send announcements to students
          </p>
        </div>

        <Tabs defaultValue="notifications" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="notifications">All Notifications</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="notifications" className="space-y-4">
            <NotificationList />
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-4">
            <NotificationSettings />
          </TabsContent>
        </Tabs>
      </div>
    </LMSLayout>
  );
};

export default Notifications;