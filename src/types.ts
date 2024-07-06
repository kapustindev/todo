export enum ETaskStatus {
  Active = 'active',
  Completed = 'completed'
}

export type TaskFilterStatus = 'all' | ETaskStatus;

export type TaskItem = {
  title: string;
  status: ETaskStatus;
};

export type ErrorObject = {
  status: 'error';
  message: string;
}
