import { LMSLayout } from "@/components/lms/LMSLayout";
import { CourseList } from "@/components/courses/CourseList";
import { ChapterManagement } from "@/components/courses/ChapterManagement";
import { useState } from "react";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  return (
    <LMSLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Courses & Chapters</h1>
          <p className="text-muted-foreground mt-2">
            Manage your assigned courses and organize content into chapters
          </p>
        </div>

        {selectedCourse ? (
          <ChapterManagement 
            courseId={selectedCourse} 
            onBack={() => setSelectedCourse(null)} 
          />
        ) : (
          <CourseList onSelectCourse={setSelectedCourse} />
        )}
      </div>
    </LMSLayout>
  );
};

export default Courses;