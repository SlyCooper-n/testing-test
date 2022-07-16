import { Check, Trash, X } from "phosphor-react";
import { FormEvent } from "react";
import { HabitItemType } from "../HabitChecklist";

interface HabitListItemProps {
  habit: HabitItemType;
  onItemClick: (id: string) => void;
  onDelete: (e: FormEvent, id: string) => void;
}

export const HabitListItem = ({
  habit,
  onItemClick,
  onDelete,
}: HabitListItemProps) => {
  return (
    <li
      onClick={() => onItemClick(habit.id)}
      className="group btn w-full my-2 flex justify-between bg-white hover:bg-white"
    >
      <div className="flex">
        <span className="mr-4">
          {habit.checked ? (
            <Check size={24} weight="bold" className="text-success" />
          ) : (
            <X size={24} weight="bold" className="text-error" />
          )}
        </span>

        <span className="text-lg">{habit.text}</span>
      </div>

      <button onClick={(e) => onDelete(e, habit.id)}>
        <Trash
          size={20}
          weight="bold"
          className="sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 hover:text-error"
        />
      </button>
    </li>
  );
};
