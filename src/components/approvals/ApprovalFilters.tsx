import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ApprovalFiltersProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

const filterOptions = [
  { key: "all", label: "All Items", count: 8 },
  { key: "pending", label: "Pending", count: 3 },
  { key: "approved", label: "Approved", count: 4 },
  { key: "rejected", label: "Rejected", count: 1 }
];

export function ApprovalFilters({ currentFilter, onFilterChange }: ApprovalFiltersProps) {
  return (
    <Card className="lms-card">
      <CardContent className="flex items-center gap-4 p-4">
        <span className="text-sm font-medium text-muted-foreground">Filter by status:</span>
        <div className="flex gap-2">
          {filterOptions.map((option) => (
            <Button
              key={option.key}
              variant={currentFilter === option.key ? "default" : "outline"}
              size="sm"
              onClick={() => onFilterChange(option.key)}
              className="flex items-center gap-2"
            >
              {option.label}
              {option.count > 0 && (
                <Badge variant="secondary" className="text-xs">
                  {option.count}
                </Badge>
              )}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}