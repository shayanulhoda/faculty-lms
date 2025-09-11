import { LMSLayout } from "@/components/lms/LMSLayout";
import { ProfileSettings } from "@/components/profile/ProfileSettings";
import { SecuritySettings } from "@/components/profile/SecuritySettings";
import { AssignedCourses } from "@/components/profile/AssignedCourses";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
  return (
    <LMSLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Profile & Settings</h1>
          <p className="text-muted-foreground mt-2">
            Manage your profile information and account settings
          </p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="courses">Assigned Courses</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="space-y-4">
            <ProfileSettings />
          </TabsContent>
          
          <TabsContent value="security" className="space-y-4">
            <SecuritySettings />
          </TabsContent>
          
          <TabsContent value="courses" className="space-y-4">
            <AssignedCourses />
          </TabsContent>
        </Tabs>
      </div>
    </LMSLayout>
  );
};

export default Profile;