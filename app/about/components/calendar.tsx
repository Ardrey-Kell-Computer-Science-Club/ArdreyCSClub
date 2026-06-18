"use client";

import { addDays } from "date-fns";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function Calendar2() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), 1, 12),
  );
  const [currentMonth, setCurrentMonth] = React.useState<Date>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  );

  return (
    <div className="mx-auto max-w-4xl">
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border border-zinc-800 bg-zinc-950">
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              month={currentMonth}
              onMonthChange={setCurrentMonth}
              fixedWeeks
              className="p-0 [--cell-size:--spacing(9.5)]"
            />
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2 border-t">
            {[
              { label: "Today", value: 0 },
              { label: "Tomorrow", value: 1 },
              { label: "In 3 days", value: 3 },
              { label: "In a week", value: 7 },
              { label: "In 2 weeks", value: 14 },
            ].map((preset) => (
              <Button
                key={preset.value}
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => {
                  const newDate = addDays(new Date(), preset.value);
                  setDate(newDate);
                  setCurrentMonth(
                    new Date(newDate.getFullYear(), newDate.getMonth(), 1),
                  );
                }}
              >
                {preset.label}
              </Button>
            ))}
          </CardFooter>
        </Card>

        <Card className="border border-zinc-800 bg-zinc-950">
          <CardContent>
            <h3 className="mb-2 text-lg font-semibold">Event details</h3>
            {date ? (
              <div className="space-y-2">
                <p className="text-sm text-zinc-400">
                  Selected date:{" "}
                  <span className="font-medium text-white">
                    {date.toDateString()}
                  </span>
                </p>

                <p className="text-sm text-zinc-400">
                  No events on this date yet. You can add project demos,
                  meetings, or competitions here.
                </p>

                <div className="mt-4 flex gap-2">
                  <Button size="sm">Add Event</Button>
                  <Button size="sm" variant="outline">
                    View Projects
                  </Button>
                </div>
              </div>
            ) : (
              <p className="text-sm text-zinc-400">
                Select a date to see events.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
