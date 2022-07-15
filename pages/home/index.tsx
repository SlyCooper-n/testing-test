import { AppViewType } from "@core/types";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Home: NextPage = () => {
  const [appView, setAppView] = useState<AppViewType>("habbit-checklist");

  return (
    <div className="w-screen min-h-screen flex flex-col">
      <div className="w-full max-w-7xl mx-auto">
        <nav className="navbar py-4 flex justify-between bg-base-300">
          <h1 className="btn btn-ghost normal-case text-2xl font-semibold">
            <Link href="/home">
              <a>
                <span className="text-primary">Testing</span>Test
              </a>
            </Link>
          </h1>

          <ul className="menu menu-horizontal p-0">
            <li>
              <button
                type="button"
                onClick={() => setAppView("habbit-checklist")}
                className={`${
                  appView === "habbit-checklist" ? "text-accent" : ""
                } btn btn-ghost`}
              >
                Habbit Checklist
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => setAppView("accomplishments")}
                className={`${
                  appView === "accomplishments" ? "text-accent" : ""
                } btn btn-ghost`}
              >
                Accomplishments
              </button>
            </li>
          </ul>

          <div className="avatar mr-4">
            <div className="rounded-full">
              <Image
                src="https://placeimg.com/50/50/people"
                alt="random avatar image"
                width={50}
                height={50}
              />
            </div>
          </div>
        </nav>

        <main className="flex-1">
          {appView === "habbit-checklist" && <div>Habbit</div>}

          {appView === "accomplishments" && <div>Accomplishments</div>}
        </main>
      </div>
    </div>
  );
};

export default Home;
