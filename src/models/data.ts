export interface IBalance {
  id: string;
  name: string;
  count: string;
}

export interface IClosestLessons {
  id: string;
  name: string;
  date: string;
  time: string;
  teacher: string;
  disabled?: boolean;
}

export interface DropdownItem {
  key: string;
  value: string;
}
