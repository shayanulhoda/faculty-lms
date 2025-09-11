import { LMSLayout } from "@/components/lms/LMSLayout";
import { EngagementAnalytics } from "@/components/analytics/EngagementAnalytics";
import { PerformanceAnalytics } from "@/components/analytics/PerformanceAnalytics";
import { TeacherActivityStats } from "@/components/analytics/TeacherActivityStats";

const Analytics = () => {
  return (
    <LMSLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics & Reports</h1>
          <p className="text-muted-foreground mt-2">
            Detailed insights into student engagement and performance
          </p>
        </div>

        {/* Teacher Activity Overview */}
        <TeacherActivityStats />

        {/* Main Analytics Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <EngagementAnalytics />
          <PerformanceAnalytics />
        </div>
      </div>
    </LMSLayout>
  );
};

export default Analytics;