import { LMSLayout } from "@/components/lms/LMSLayout";
import { DoubtsPanel } from "@/components/communities/DoubtsPanel";
import { CommunityPosts } from "@/components/communities/CommunityPosts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Communities = () => {
  return (
    <LMSLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Communities & Doubts</h1>
          <p className="text-muted-foreground mt-2">
            Interact with students, resolve doubts, and create community posts
          </p>
        </div>

        <Tabs defaultValue="doubts" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="doubts">Student Doubts</TabsTrigger>
            <TabsTrigger value="community">Community Posts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="doubts" className="space-y-4">
            <DoubtsPanel />
          </TabsContent>
          
          <TabsContent value="community" className="space-y-4">
            <CommunityPosts />
          </TabsContent>
        </Tabs>
      </div>
    </LMSLayout>
  );
};

export default Communities;