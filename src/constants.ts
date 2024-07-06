import { SegmentedOptions } from "antd/es/segmented";

export const TASK_FILTERS: SegmentedOptions = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Completed',
    value: 'completed'
  },
  {
    label: 'Active',
    value: 'active'
  }
];
