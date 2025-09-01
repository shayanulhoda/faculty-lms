import { LMSLayout } from "@/components/lms/LMSLayout";
import { OverviewCards } from "@/components/lms/OverviewCards";
import { QuickActions } from "@/components/lms/QuickActions";
import { UpcomingClasses } from "@/components/lms/UpcomingClasses";
import { StudentAnalytics } from "@/components/lms/StudentAnalytics";

const Index = () => {
  return (
    <LMSLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back, Prof. Johnson. Here's what's happening with your classes today.
          </p>
        </div>

        {/* Overview Cards */}
        <OverviewCards />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Left Column - Quick Actions */}
          <div className="xl:col-span-1">
            <QuickActions />
          </div>

          {/* Right Column - Upcoming Classes */}
          <div className="xl:col-span-2">
            <UpcomingClasses />
          </div>
        </div>

        {/* Analytics Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Student Performance Analytics</h2>
          <StudentAnalytics />
        </div>
      </div>
    </LMSLayout>
  );
};

export default Index;
