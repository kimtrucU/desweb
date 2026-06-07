"use client";

import { useState } from "react";

type TabKey =
  | "Puppy Preschool"
  | "Basic Obedience"
  | "Finishing School"
  | "Upcoming Classes";

type ClassRow = {
  name: string;
  teacher: string;
  schedule: string;
  time: string;
  status: string;
};

const scheduleData: Record<
  TabKey,
  {
    title: string;
    rows: ClassRow[];
  }
> = {
  "Puppy Preschool": {
    title: "Puppy Preschool (Beginner Puppy Skills)",
    rows: [
      {
        name: "Puppy Kindergarten",
        teacher: "Kim Trainer",
        schedule: "Tuesdays & Thursdays",
        time: "6:00 PM - 7:00 PM",
        status: "3 spots left",
      },
      {
        name: "Social Puppy Class",
        teacher: "Minh Anh",
        schedule: "Sunday",
        time: "9:00 AM - 10:00 AM",
        status: "5 spots left",
      },
    ],
  },

  "Basic Obedience": {
    title: "Basic Obedience (Core Manners)",
    rows: [
      {
        name: "Basic Obedience",
        teacher: "Kim Trainer",
        schedule: "Saturdays",
        time: "9:00 AM - 10:30 AM",
        status: "4 spots left",
      },
      {
        name: "Loose-Leash Walking",
        teacher: "Hoang Nam",
        schedule: "Wednesday",
        time: "5:30 PM - 6:30 PM",
        status: "2 spots left",
      },
    ],
  },

  "Finishing School": {
    title: "Finishing School (Advanced Skills)",
    rows: [
      {
        name: "Protection & Property Guarding",
        teacher: "Hoang Nam",
        schedule: "Monday & Friday",
        time: "4:00 PM - 6:00 PM",
        status: "2 spots left",
      },
      {
        name: "Trick Performance Training",
        teacher: "Ha Phuong",
        schedule: "Sunday",
        time: "4:00 PM - 5:30 PM",
        status: "4 spots left",
      },
    ],
  },

  "Upcoming Classes": {
    title: "Upcoming Classes",
    rows: [
      {
        name: "Advanced Obedience",
        teacher: "Kim Trainer",
        schedule: "Saturdays",
        time: "11:00 AM - 12:30 PM",
        status: "Opening soon",
      },
      {
        name: "Private Sessions",
        teacher: "Minh Anh",
        schedule: "By appointment",
        time: "Flexible",
        status: "Register first",
      },
    ],
  },
};

const tabs = Object.keys(scheduleData) as TabKey[];

export default function ScheduleBoard() {
  const [activeTab, setActiveTab] = useState<TabKey>("Finishing School");
  const current = scheduleData[activeTab];

  return (
    <div className="mx-auto w-full max-w-6xl">
      {/* Tabs outside board */}
      <div className="mb-12 flex flex-wrap justify-center gap-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-6 py-3 font-montserrat text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-1 md:px-9 ${isActive
                ? "bg-[#2f7f73] text-white shadow-[#2f7f73]/30"
                : "bg-white text-slate-600 hover:text-[#2f7f73]"
                }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Wooden frame */}
      <div className="rounded-2xl bg-[#7a4a1d] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.28)] md:p-6">
        {/* Chalkboard surface */}
        <div
          className="relative overflow-hidden rounded-lg bg-[#202838] px-5 py-10 text-left text-white md:px-12 md:py-12"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "8px 8px",
          }}
        >
          {/* Small chalk decorations */}
          <span className="pointer-events-none absolute left-7 top-7 text-2xl opacity-10">
            🦴
          </span>
          <span className="pointer-events-none absolute right-8 top-7 text-2xl opacity-10">
            🐾
          </span>
          <span className="pointer-events-none absolute bottom-8 right-12 text-2xl opacity-10">
            🐕
          </span>

          <h3
            className="border-b-2 border-dashed border-white/20 pb-8 text-center font-montserrat text-2xl font-black text-[#f6d85f] md:text-4xl"
            style={{
              textShadow: "0 0 16px rgba(246,216,95,0.25)",
            }}
          >
            {current.title}
          </h3>

          {/* Desktop table */}
          <div className="mt-9 hidden md:block">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-left font-montserrat text-[#65d5c8]">
                  <th className="px-4 py-4 font-black">Class</th>
                  <th className="px-4 py-4 font-black">Schedule</th>
                  <th className="px-4 py-4 font-black">Time</th>
                  <th className="px-4 py-4 font-black">Status</th>
                  <th className="px-4 py-4 font-black">Action</th>
                </tr>
              </thead>

              <tbody>
                {current.rows.map((row) => (
                  <tr
                    key={row.name}
                    className="group border-b border-dashed border-white/10 transition-all duration-300 last:border-b-0 hover:bg-white/[0.04]"
                  >
                    <td className="px-4 py-7">
                      <p className="font-montserrat font-black text-white transition-colors duration-300 group-hover:text-[#f6d85f]">
                        {row.name}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-white/65">
                        GV. {row.teacher}
                      </p>
                    </td>

                    <td className="px-4 py-7 font-semibold text-white/80">
                      {row.schedule}
                    </td>

                    <td className="px-4 py-7 font-black text-[#f6d85f]">
                      {row.time}
                    </td>

                    <td className="px-4 py-7">
                      <span className="inline-block rounded-md border border-[#65d5c8]/80 px-3 py-2 text-sm font-bold text-[#65d5c8]">
                        {row.status}
                      </span>
                    </td>

                    <td className="px-4 py-7">
                      <a
                        href="#consultation"
                        className="inline-block rounded-md border-2 border-white px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-rotate-1 hover:bg-white hover:text-[#202838]"
                      >
                        Find out more
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-8 grid gap-5 md:hidden">
            {current.rows.map((row) => (
              <div
                key={row.name}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-5 shadow-inner transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <h4 className="font-montserrat font-black text-white">
                  {row.name}
                </h4>

                <p className="mt-1 text-sm font-semibold text-white/65">
                  GV. {row.teacher}
                </p>

                <div className="mt-4 space-y-2 text-sm text-white/80">
                  <p>
                    <span className="font-bold text-[#65d5c8]">Schedule:</span>{" "}
                    {row.schedule}
                  </p>

                  <p>
                    <span className="font-bold text-[#65d5c8]">Time:</span>{" "}
                    <span className="font-black text-[#f6d85f]">
                      {row.time}
                    </span>
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-md border border-[#65d5c8]/80 px-3 py-2 text-sm font-bold text-[#65d5c8]">
                    {row.status}
                  </span>

                  <a
                    href="#consultation"
                    className="rounded-md border-2 border-white px-4 py-2 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#202838]"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs italic text-white/35">
            * Class schedules are subject to change. Contact us to confirm
            availability.
          </p>
        </div>
      </div>
    </div>
  );
}