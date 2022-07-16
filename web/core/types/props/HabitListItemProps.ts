import { FormEvent } from "react";
import { HabitItemType } from "../types";

export interface HabitListItemProps {
  habit: HabitItemType;
  onItemClick: (id: string) => void;
  onDelete: (e: FormEvent, id: string) => void;
}
