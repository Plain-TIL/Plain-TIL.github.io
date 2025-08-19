import type { User } from "../types/user";

export const users: User[] = [
  {
    name: "승준", 
    streak: 2, 
    max_streak: 10, 
    til: 12, 
    today: false
  },
  {
    name: "준승", 
    streak: 3, 
    max_streak: 13, 
    til: 16, 
    today: true
  },
  {
    name: "슨중", 
    streak: 4, 
    max_streak: 40, 
    til: 44, 
    today: false
  },
  {
    name: "숭즌", 
    streak: 5, 
    max_streak: 20, 
    til: 25, 
    today: true
  },
  {
    name: "노승준", 
    streak: 0, 
    max_streak: 2, 
    til: 2, 
    today: false
  },
];