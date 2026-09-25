"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarIcon, PinIcon, UsersIcon } from "@/components/Icons";

type HotelKey = "victoria-island" | "yaba";

const BOOKING_PATH: Record<HotelKey, string> = {
  "victoria-island": "/booking/details",
  yaba: "/booking/yaba-details",
};

interface QuickBookProps {
  /** Lock the form to one hotel (hides the hotel picker). */
  hotel?: HotelKey;
  className?: string;
}

function toISO(d: Date) {
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

export default function QuickBook({ hotel, className = "" }: QuickBookProps) {
  const router = useRouter();
  const [selected, setSelected] = useState<HotelKey>(hotel ?? "victoria-island");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const today = toISO(new Date());
  const minCheckOut = checkIn ? toISO(new Date(new Date(checkIn).getTime() + 86400000)) : today;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const [adults, children] = guests.split("+");
    const params = new URLSearchParams({ check_in: checkIn, check_out: checkOut, adults, children: children ?? "0" });
    router.push(`${BOOKING_PATH[selected]}?${params}`);
  };

  const field = "w-full bg-transparent text-sm font-medium text-navy outline-none";
  const label = "flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-500";

  return (
    <form
      onSubmit={submit}
      aria-label="Check availability"
      className={`grid gap-px overflow-hidden rounded-2xl bg-gray-200 shadow-2xl shadow-black/20 ${hotel ? "md:grid-cols-[1fr_1fr_1fr_auto]" : "md:grid-cols-[1.2fr_1fr_1fr_1fr_auto]"} ${className}`}
    >
      {!hotel && (
        <label className="flex flex-col gap-1 bg-white px-5 py-3.5">
          <span className={label}><PinIcon className="h-3.5 w-3.5" /> Hotel</span>
          <select value={selected} onChange={(e) => setSelected(e.target.value as HotelKey)} className={field}>
            <option value="victoria-island">Victoria Island</option>
            <option value="yaba">Yaba</option>
          </select>
        </label>
      )}
      <label className="flex flex-col gap-1 bg-white px-5 py-3.5">
        <span className={label}><CalendarIcon className="h-3.5 w-3.5" /> Check-in</span>
        <input
          type="date"
          required
          min={today}
          suppressHydrationWarning
          value={checkIn}
          onChange={(e) => {
            setCheckIn(e.target.value);
            if (checkOut && checkOut <= e.target.value) setCheckOut("");
          }}
          className={field}
        />
      </label>
      <label className="flex flex-col gap-1 bg-white px-5 py-3.5">
        <span className={label}><CalendarIcon className="h-3.5 w-3.5" /> Check-out</span>
        <input type="date" required suppressHydrationWarning min={minCheckOut} value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className={field} />
      </label>
      <label className="flex flex-col gap-1 bg-white px-5 py-3.5">
        <span className={label}><UsersIcon className="h-3.5 w-3.5" /> Guests</span>
        <select value={guests} onChange={(e) => setGuests(e.target.value)} className={field}>
          <option value="1">1 adult</option>
          <option value="2">2 adults</option>
          <option value="2+1">2 adults, 1 child</option>
        </select>
      </label>
      <button
        type="submit"
        className="bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-navy transition-colors hover:bg-navy hover:text-white"
      >
        Check availability
      </button>
    </form>
  );
}
