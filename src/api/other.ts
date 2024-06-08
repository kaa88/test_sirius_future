import { IBalance, IClosestLessons } from "../models/data";

export const balance: IBalance[] = [
  {
    id: "1",
    name: "Ментальная арифметика",
    count: "32",
  },
  {
    id: "2",
    name: "Программирование",
    count: "0",
  },
  {
    id: "3",
    name: "Скорочтение",
    count: "4",
  },
  {
    id: "4",
    name: "Таблица умножения",
    count: "1",
  },
  {
    id: "5",
    name: "Подготовка к школе",
    count: "5",
  },
];
export const closestLessons: IClosestLessons[] = [
  {
    id: "11",
    name: "Ментальная арифметика",
    date: "1 мая",
    time: "14:00-14:25",
    teacher: "Белкина Инна",
    disabled: true,
  },
  {
    id: "22",
    name: "Программирование",
    date: "30 октября",
    time: "11:00-11:11",
    teacher: "Животновская Оксана",
  },
  {
    id: "33",
    name: "Скорочтение",
    date: "16 ноября",
    time: "09:00-09:45",
    teacher: "Мин Елена",
  },
];
