export interface ILesson {
  id: string;
  subject: string;
  dateFrom: string;
  dateTo: string;
  isDone?: boolean;
  isMarked?: boolean;
  isPay?: boolean;
  link?: string;
}
