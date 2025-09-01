import { LMSLayout } from "@/components/lms/LMSLayout";

const Courses = () => {
  return (
    <LMSLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Courses</h1>
          <p className="text-muted-foreground mt-1">
            Manage your course content and curriculum
          </p>
        </div>
        <div className="lms-card p-8 text-center">
          <h3 className="text-lg font-medium text-foreground mb-2">Course Management</h3>
          <p className="text-muted-foreground">
            This section will contain course builder, content management, and approval workflows.
          </p>
        </div>
      </div>
    </LMSLayout>
  );
};

export default Courses;