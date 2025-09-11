import { LMSLayout } from "@/components/lms/LMSLayout";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecentNotifications } from "@/components/dashboard/RecentNotifications";

const Index = () => {
  return (
    <LMSLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Teacher Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome back! Here's your teaching overview for today.
          </p>
        </div>

        {/* Overview Cards */}
        <DashboardOverview />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Column - Stats & Charts */}
          <div className="xl:col-span-2 space-y-8">
            <DashboardStats />
          </div>

          {/* Right Column - Quick Actions & Notifications */}
          <div className="space-y-8">
            <QuickActions />
            <RecentNotifications />
          </div>
        </div>
      </div>
    </LMSLayout>
  );
};

export default Index;
