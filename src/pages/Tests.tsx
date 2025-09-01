import { LMSLayout } from "@/components/lms/LMSLayout";

const Tests = () => {
  return (
    <LMSLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Tests & Assessments</h1>
          <p className="text-muted-foreground mt-1">
            Create and manage student assessments
          </p>
        </div>
        <div className="lms-card p-8 text-center">
          <h3 className="text-lg font-medium text-foreground mb-2">Assessment Builder</h3>
          <p className="text-muted-foreground">
            Build MCQ, True/False, and Short Answer tests with auto-grading capabilities.
          </p>
        </div>
      </div>
    </LMSLayout>
  );
};

export default Tests;