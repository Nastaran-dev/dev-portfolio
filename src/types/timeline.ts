export interface TimelineEntry {
  id: string;
  title: string;
  organization: string;
  period: string;
  description?: string;
  technologies?: string[];
}
