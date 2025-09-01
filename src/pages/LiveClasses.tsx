import { LMSLayout } from "@/components/lms/LMSLayout";

const LiveClasses = () => {
  return (
    <LMSLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Live Classes</h1>
          <p className="text-muted-foreground mt-1">
            Schedule and manage your live teaching sessions
          </p>
        </div>
        <div className="lms-card p-8 text-center">
          <h3 className="text-lg font-medium text-foreground mb-2">Live Class Module</h3>
          <p className="text-muted-foreground">
            Schedule sessions, manage whiteboard, screen share, and participant controls.
          </p>
        </div>
      </div>
    </LMSLayout>
  );
};

export default LiveClasses;