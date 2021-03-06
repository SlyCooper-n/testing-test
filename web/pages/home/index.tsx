import { PageContainer } from "@components/layouts";
import { Accomplishments, HabitChecklist, Rewards } from "@components/modules/";
import { AvatarPopover } from "@components/widgets/";
import { AppViewType } from "@core/types";
import { NextPage } from "next";
import Link from "next/link";
import { List } from "phosphor-react";
import { useState } from "react";

const Home: NextPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [appView, setAppView] = useState<AppViewType>("habit-checklist");

  function chooseAppView(appView: AppViewType) {
    return () => {
      setAppView(appView);
      setMenuOpen(false);
    };
  }

  return (
    <PageContainer
      headTitle={`TestingTest | ${
        appView === "habit-checklist"
          ? "Habit Checklist"
          : appView === "accomplishments"
          ? "Accomplishments"
          : "Rewards"
      }`}
    >
      <nav
        className={`absolute sm:hidden top-[82px] h-screen p-4 bg-base-200 ${
          menuOpen ? "left-0" : "-left-full"
        } transition-all`}
      >
        <ul className="menu menu-vertical gap-1">
          <li>
            <button
              type="button"
              onClick={chooseAppView("habit-checklist")}
              className={`${
                appView === "habit-checklist" ? "text-accent" : ""
              } btn btn-ghost`}
            >
              Habbit Checklist
            </button>
          </li>

          <li>
            <button
              type="button"
              onClick={chooseAppView("accomplishments")}
              className={`${
                appView === "accomplishments" ? "text-accent" : ""
              } btn btn-ghost`}
            >
              Accomplishments
            </button>
          </li>

          <li>
            <button
              type="button"
              onClick={chooseAppView("rewards")}
              className={`${
                appView === "rewards" ? "text-accent" : ""
              } btn btn-ghost`}
            >
              Rewards
            </button>
          </li>
        </ul>
      </nav>

      <div className="flex-1 w-full max-w-7xl mx-auto flex flex-col">
        <header className="navbar py-4 flex justify-between bg-base-300 rounded-br-md rounded-bl-md">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-ghost sm:hidden"
          >
            <List size={24} weight="bold" />
          </button>

          <h1 className="btn btn-ghost mr-auto sm:mr-0 normal-case text-2xl font-semibold">
            <Link href="/home">
              <a>
                <span className="text-primary">Testing</span>Test
              </a>
            </Link>
          </h1>

          <ul className="hidden sm:flex menu menu-horizontal p-0 gap-1">
            <li>
              <button
                type="button"
                onClick={() => setAppView("habit-checklist")}
                className={`btn btn-ghost ${
                  appView === "habit-checklist" ? "text-accent" : null
                }`}
              >
                Habbit Checklist
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => setAppView("accomplishments")}
                className={`btn btn-ghost ${
                  appView === "accomplishments" ? "text-accent" : null
                }`}
              >
                Accomplishments
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => setAppView("rewards")}
                className={`btn btn-ghost ${
                  appView === "rewards" ? "text-accent" : ""
                }`}
              >
                Rewards
              </button>
            </li>
          </ul>

          <AvatarPopover />
        </header>

        <main className="flex-1">
          {appView === "habit-checklist" && <HabitChecklist />}

          {appView === "accomplishments" && <Accomplishments />}

          {appView === "rewards" && <Rewards />}
        </main>
      </div>
    </PageContainer>
  );
};

export default Home;
