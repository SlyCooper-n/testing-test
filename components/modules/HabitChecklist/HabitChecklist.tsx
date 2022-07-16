import { nanoid } from "nanoid";
import { FormEvent, useEffect, useState } from "react";
import { HabitListItem } from "./components/HabitListItem";

export type HabitItemType = {
  id: string;
  text: string;
  checked: boolean;
};

export const HabitChecklist = () => {
  const [habitChecklist, setHabitChecklist] = useState<HabitItemType[]>([]);
  const [newHabit, setNewHabit] = useState("");

  useEffect(() => {
    const initalChecklist = localStorage.getItem("habitChecklist");

    if (initalChecklist) {
      setHabitChecklist(JSON.parse(initalChecklist));
    }
  }, []);

  function addNewHabit(e: FormEvent) {
    e.preventDefault();

    if (newHabit.trim() === "") return;

    setHabitChecklist([
      ...habitChecklist,
      {
        id: nanoid(),
        text: newHabit,
        checked: true,
      },
    ]);
    setNewHabit("");

    localStorage.setItem(
      "habitChecklist",
      JSON.stringify([
        ...habitChecklist,
        {
          id: nanoid(),
          text: newHabit,
          checked: true,
        },
      ])
    );
  }

  function toggleIcon(id: string) {
    const newChecklist = habitChecklist.map((habit) =>
      habit.id === id ? { ...habit, checked: !habit.checked } : habit
    );

    setHabitChecklist(newChecklist);
    localStorage.setItem("habitChecklist", JSON.stringify(newChecklist));
  }

  function deleteHabitItem(e: FormEvent, id: string) {
    e.stopPropagation();

    const newChecklist = habitChecklist.filter((habit) => habit.id !== id);

    setHabitChecklist(newChecklist);
    localStorage.setItem("habitChecklist", JSON.stringify(newChecklist));
  }

  return (
    <div className="w-full sm:w-1/2 h-full mx-auto pt-12 flex flex-col items-center">
      <h2 className="mb-12 text-3xl font-semibold">Habbit Checklist</h2>

      <form className="w-full mb-8 px-4 sm:px-0 flex" onSubmit={addNewHabit}>
        <input
          type="text"
          aria-label="Insert your habbit here"
          placeholder="Insert your habbit here"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          className="input mr-4 flex-1 rounded-md bg-white"
        />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>

      <ul className="w-full px-4 sm:px-0">
        {habitChecklist.map((habit) => (
          <HabitListItem
            key={habit.id}
            habit={habit}
            onItemClick={toggleIcon}
            onDelete={deleteHabitItem}
          />
        ))}
      </ul>
    </div>
  );
};
