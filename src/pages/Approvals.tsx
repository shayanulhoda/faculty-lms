import { LMSLayout } from "@/components/lms/LMSLayout";
import { ApprovalsList } from "@/components/approvals/ApprovalsList";
import { ApprovalFilters } from "@/components/approvals/ApprovalFilters";
import { useState } from "react";

const Approvals = () => {
  const [filter, setFilter] = useState("all");

  return (
    <LMSLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Approvals & Status</h1>
          <p className="text-muted-foreground mt-2">
            Track the status of your submitted content and resubmit if needed
          </p>
        </div>

        <ApprovalFilters currentFilter={filter} onFilterChange={setFilter} />
        <ApprovalsList filter={filter} />
      </div>
    </LMSLayout>
  );
};

export default Approvals;