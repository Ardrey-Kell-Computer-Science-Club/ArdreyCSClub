"use client";

import { format, isSameDay } from "date-fns";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";

type ClubEvent = {
  id: string;
  title: string;
  date: Date;
  time: string;
  location: string;
  category: string;
  description: string;
};

const events: ClubEvent[] = [
  {
    id: "kickoff",
    title: "Welcome & Club Kickoff",
    date: new Date(2026, 7, 27),
    time: "3:00–4:00 PM",
    location: "Room 312",
    category: "Meeting",
    description:
      "Meet the club, hear what we are building this year, and find a project team that matches your interests.",
  },
  {
    id: "fall-hackathon",
    title: "AKCS Fall Hackathon",
    date: new Date(2026, 8, 12),
    time: "9:00 AM–6:00 PM",
    location: "AK Media Center",
    category: "Hackathon",
    description:
      "Our all-day fall hackathon lands in the second week of September. Form a team, build a working idea, meet mentors, and present your project at the closing showcase. Beginners are welcome.",
  },
  {
    id: "web-workshop",
    title: "Build Your First Website",
    date: new Date(2026, 8, 24),
    time: "3:00–4:15 PM",
    location: "Room 312",
    category: "Workshop",
    description:
      "A beginner-friendly HTML and CSS workshop. Bring a laptop and leave with a small site you can keep improving.",
  },
  {
    id: "coding-night",
    title: "October Coding Night",
    date: new Date(2026, 9, 16),
    time: "4:00–6:30 PM",
    location: "Room 312",
    category: "Social",
    description:
      "An open build session for club projects, coding challenges, peer help, snacks, and low-pressure collaboration.",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Capture the Flag",
    date: new Date(2026, 10, 7),
    time: "10:00 AM–1:00 PM",
    location: "Computer Lab",
    category: "Competition",
    description:
      "Work through beginner security puzzles involving ciphers, web vulnerabilities, digital forensics, and hidden clues.",
  },
  {
    id: "guest-speaker",
    title: "Tech Careers Guest Speaker",
    date: new Date(2026, 10, 19),
    time: "3:00–4:00 PM",
    location: "Room 312",
    category: "Speaker",
    description:
      "Hear from a local software professional about their path into technology, day-to-day work, and advice for students.",
  },
  {
    id: "winter-showcase",
    title: "Winter Project Showcase",
    date: new Date(2026, 11, 10),
    time: "5:00–7:00 PM",
    location: "AK Media Center",
    category: "Showcase",
    description:
      "Celebrate the semester with demos from student teams, quick project talks, and time to try what everyone built.",
  },
  {
    id: "python-workshop",
    title: "Python Problem-Solving Lab",
    date: new Date(2027, 0, 21),
    time: "3:00–4:15 PM",
    location: "Computer Lab",
    category: "Workshop",
    description:
      "Practice Python fundamentals through short challenges, pair programming, and guided help from experienced members.",
  },
  {
    id: "ai-lab",
    title: "Intro to AI Lab",
    date: new Date(2027, 1, 11),
    time: "3:00–4:30 PM",
    location: "Room 312",
    category: "Workshop",
    description:
      "Explore how modern AI systems work and build a small hands-on experiment while discussing responsible use.",
  },
  {
    id: "spring-code-jam",
    title: "Spring Code Jam",
    date: new Date(2027, 2, 13),
    time: "10:00 AM–2:00 PM",
    location: "AK Media Center",
    category: "Competition",
    description:
      "Teams race through creative programming challenges at multiple difficulty levels, with prizes for strong solutions.",
  },
  {
    id: "app-sprint",
    title: "Mobile App Design Sprint",
    date: new Date(2027, 3, 15),
    time: "3:00–5:00 PM",
    location: "Room 312",
    category: "Workshop",
    description:
      "Turn an idea into an app prototype by mapping a user flow, sketching screens, and testing the experience with peers.",
  },
  {
    id: "year-end",
    title: "Year-End Demo Day",
    date: new Date(2027, 4, 20),
    time: "5:00–7:00 PM",
    location: "AK Media Center",
    category: "Showcase",
    description:
      "Our final gathering of the school year features student demos, awards, reflections, and a preview of next year.",
  },
];

export function Calendar2() {
  const [activeEvent, setActiveEvent] = React.useState(events[1]);
  const [currentMonth, setCurrentMonth] = React.useState<Date>(
    new Date(2026, 8, 1),
  );

  function selectEvent(date: Date) {
    const event = events.find((item) => isSameDay(item.date, date));

    if (event) {
      setActiveEvent(event);
    }
  }

  return (
    <section className="border-t border-zinc-800 bg-zinc-950/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
            2026–27 school year
          </p>
          <h2 className="text-4xl font-bold">Events Calendar</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Browse the calendar and select a highlighted date to learn more
            about an event.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[28rem_minmax(0,1fr)]">
          <Card className="border border-zinc-800 bg-black py-0">
            <CardContent className="flex items-center justify-center p-4 sm:p-5">
              <Calendar
                mode="single"
                selected={activeEvent.date}
                onDayClick={selectEvent}
                month={currentMonth}
                onMonthChange={setCurrentMonth}
                startMonth={new Date(2026, 7, 1)}
                endMonth={new Date(2027, 4, 1)}
                fixedWeeks
                modifiers={{ event: events.map((event) => event.date) }}
                modifiersClassNames={{
                  event:
                    "after:absolute after:bottom-1 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-purple-400",
                }}
                className="min-w-max p-0 [--cell-size:3rem] sm:[--cell-size:3.5rem]"
              />
            </CardContent>
          </Card>

          <Card className="min-h-105 border border-purple-500/30 bg-black">
            <CardContent className="flex h-full flex-col justify-center p-8 md:p-10">
              <span className="mb-5 w-fit rounded-full bg-purple-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-300">
                {activeEvent.category}
              </span>

              <h3 className="text-3xl font-bold text-white">
                {activeEvent.title}
              </h3>

              <div className="mt-6 grid gap-3 text-sm text-zinc-300 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <CalendarDays className="size-4 text-purple-400" />
                  {format(activeEvent.date, "EEEE, MMMM d, yyyy")}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-purple-400" />
                  {activeEvent.time}
                </div>
                <div className="flex items-center gap-2 sm:col-span-2">
                  <MapPin className="size-4 text-purple-400" />
                  {activeEvent.location}
                </div>
              </div>

              <div className="my-7 h-px bg-zinc-800" />

              <p className="text-base leading-7 text-zinc-400">
                {activeEvent.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
