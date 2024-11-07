export interface TaskItem {
  name: string;
  description: string;
  date: string;
}

export interface TaskProps {
  name: string;
  description: string;
  date: string;
  tasks: TaskItem[];
  setTasks: (arg: TaskItem[]) => void;
}

export interface ControlsProps {
  setTasks: (arg: TaskItem[]) => void;
  tasks: TaskItem[];
}
