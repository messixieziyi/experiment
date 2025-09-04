import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  CalendarDays,
  MapPin,
  Clock,
  Users,
  Filter,
  LocateFixed,
  Search,
  Dumbbell,
  Volleyball,
  Bike,
  Flag,
  HeartHandshake,
  Plus,
  UserPlus,
  DollarSign,
} from "lucide-react";
import { motion } from "framer-motion";

// -----------------------------
// Constants & Data
// -----------------------------
const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1509223197845-458d87318791?q=80&w=1600&auto=format&fit=crop"; // generic sports fallback

const activities = [
  {
    id: "badminton-ev",
    title: "Badminton Doubles",
    icon: Volleyball,
    time: "Today • 7:30 PM",
    location: "LA Badminton Club, El Monte",
    people: 2,
    needed: 2,
    tags: ["Indoor", "Intermediate"],
    image:
      "https://images.unsplash.com/photo-1604908177225-2f62d7f5a5f6?q=80&w=1600&auto=format&fit=crop",
    paid: false,
    price: null,
  },
  {
    id: "tennis-ev",
    title: "Tennis Rally",
    icon: Dumbbell,
    time: "Tomorrow • 6:15 PM",
    location: "Griffith Park Courts",
    people: 1,
    needed: 1,
    tags: ["Beginner Friendly"],
    image:
      "https://images.unsplash.com/photo-1603386329225-868f9ef4a3f2?q=80&w=1600&auto=format&fit=crop",
    paid: true,
    price: 10,
  },
  {
    id: "run-ev",
    title: "Sunset 5K Run",
    icon: Bike,
    time: "Thu • 7:00 PM",
    location: "Santa Monica Path",
    people: 3,
    needed: 1,
    tags: ["Outdoor", "Casual"],
    image:
      "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&w=1600&auto=format&fit=crop",
    paid: false,
    price: null,
  },
  {
    id: "golf-ev",
    title: "After-Work 9 Holes",
    icon: Flag,
    time: "Fri • 5:20 PM",
    location: "Westchester GC",
    people: 2,
    needed: 2,
    tags: ["Walk", "Social"],
    image:
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=1600&auto=format&fit=crop",
    paid: true,
    price: 25,
  },
];

// -----------------------------
// Helpers (also used by tests)
// -----------------------------
function getBgImage(img?: string | null) {
  return img && img.trim().length > 0 ? img : DEFAULT_IMAGE;
}

function shouldShowPrice(price: number | null | undefined, showPrice?: boolean) {
  return !!(showPrice && typeof price === "number" && isFinite(price));
}

// -----------------------------
// Main Page
// -----------------------------
export default function ActivityHomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Nav */}
      <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-black text-white grid place-items-center font-semibold">AP</div>
            <span className="text-xl font-semibold tracking-tight">Outivity</span>
          </div>
          <div className="hidden md:flex items-center gap-3 w-1/2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input className="pl-9 rounded-2xl" placeholder="Search activities, places, or people" />
            </div>
            <Button variant="outline" className="rounded-2xl"><Filter className="h-4 w-4 mr-2"/>Filters</Button>
            <Button className="rounded-2xl"><Plus className="h-4 w-4 mr-2"/>Create</Button>
          </div>
          <Avatar className="h-9 w-9 ring-2 ring-offset-2">
            <AvatarImage src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=200&auto=format&fit=crop"/>
            <AvatarFallback>YZ</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div
          className="h-[320px] sm:h-[420px] w-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521417531039-9801e52e38fc?q=80&w=2000&auto=format&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="rounded-3xl shadow-sm md:col-span-2 overflow-hidden">
                <div
                  className="relative h-full"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1600&auto=format&fit=crop)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-white/70" />
                  <CardContent className="relative p-5 sm:p-6 flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground">Welcome back</div>
                      <div className="text-2xl font-semibold leading-tight mt-1">Find a partner today</div>
                      <div className="mt-2 flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <Badge variant="secondary" className="rounded-xl">Near Me</Badge>
                        <Badge variant="secondary" className="rounded-xl">Tonight</Badge>
                        <Badge variant="secondary" className="rounded-xl">Intermediate</Badge>
                      </div>
                    </div>
                    <Button className="rounded-2xl px-6">Find Partners</Button>
                  </CardContent>
                </div>
              </Card>
              <QuickStats />
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mt-8">
          <Tabs defaultValue="discover">
            <TabsList className="rounded-2xl">
              <TabsTrigger value="discover" className="rounded-xl">Discover</TabsTrigger>
              <TabsTrigger value="friends" className="rounded-xl">Friends</TabsTrigger>
              <TabsTrigger value="buddy" className="rounded-xl"><UserPlus className="h-4 w-4 mr-1"/>Buddy</TabsTrigger>
            </TabsList>

            <TabsContent value="discover" className="mt-6">
              <DiscoverFilters />
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {activities.map((a) => (
                  <ActivityCard key={a.id} {...a} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="friends" className="mt-6">
              <FriendsStrip />
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {activities.slice(0, 2).map((a) => (
                  <ActivityCard key={a.id} {...a} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="buddy" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {activities.filter((a) => a.paid).map((a) => (
                  <ActivityCard key={a.id} {...a} showPrice />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Bottom bar */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 md:hidden">
        <div className="bg-white/90 backdrop-blur rounded-full shadow-lg px-4 py-2 flex items-center gap-6">
          <HeartHandshake className="h-5 w-5" />
          <MapPin className="h-5 w-5" />
          <Plus className="h-9 w-9 p-2 rounded-full bg-black text-white" />
          <CalendarDays className="h-5 w-5" />
          <Users className="h-5 w-5" />
        </div>
      </nav>
    </div>
  );
}

// -----------------------------
// Subcomponents
// -----------------------------
function QuickStats() {
  return (
    <Card className="rounded-3xl shadow-sm overflow-hidden">
      <div
        className="relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/80" />
        <CardContent className="relative p-5 sm:p-6">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl border bg-white/70 backdrop-blur p-3">
              <div className="text-xl font-semibold">3</div>
              <div className="text-xs text-muted-foreground">Requests Today</div>
            </div>
            <div className="rounded-2xl border bg-white/70 backdrop-blur p-3">
              <div className="text-xl font-semibold">12</div>
              <div className="text-xs text-muted-foreground">New Near You</div>
            </div>
            <div className="rounded-2xl border bg-white/70 backdrop-blur p-3">
              <div className="text-xl font-semibold">4.9</div>
              <div className="text-xs text-muted-foreground">Partner Rating</div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

function DiscoverFilters() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {[
        { label: "Today" },
        { label: "This Week" },
        { label: "Near Me", icon: LocateFixed },
        { label: "Indoor" },
        { label: "Outdoor" },
        { label: "Beginner" },
        { label: "Intermediate" },
      ].map((f, i) => (
        <Button key={i} variant={i === 0 ? "default" : "secondary"} size="sm" className="rounded-2xl">
          {f.icon ? <f.icon className="h-4 w-4 mr-1" /> : null}
          {f.label}
        </Button>
      ))}
    </div>
  );
}

function FriendsStrip() {
  return (
    <Card className="rounded-3xl shadow-sm overflow-hidden">
      <div
        className="relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1508766206392-8bd5cf550d1b?q=80&w=1600&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/80" />
        <CardHeader className="relative pb-2">
          <CardTitle className="text-lg">Friends Playing</CardTitle>
        </CardHeader>
        <CardContent className="relative pt-0">
          <div className="flex -space-x-2">
            {new Array(10).fill(0).map((_, i) => (
              <Avatar key={i} className="h-10 w-10 ring-2 ring-white">
                <AvatarImage src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${i + 11}`} />
                <AvatarFallback>P{i + 1}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <div className="mt-3 text-sm text-muted-foreground">Tap an avatar to invite.</div>
        </CardContent>
      </div>
    </Card>
  );
}

function ActivityCard({
  title,
  icon: Icon,
  time,
  location,
  people,
  needed,
  tags,
  image,
  price,
  showPrice,
}: {
  title: string;
  icon: React.ElementType;
  time: string;
  location: string;
  people: number;
  needed: number;
  tags: string[];
  image: string;
  price?: number | null;
  showPrice?: boolean;
}) {
  const bgImage = getBgImage(image);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl border overflow-hidden"
    >
      {/* Image header */}
      <div
        className="h-32 sm:h-40 w-full bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="h-full w-full bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-gray-100 grid place-items-center">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-base font-semibold leading-tight">{title}</div>
              <div className="mt-1 text-sm text-muted-foreground flex flex-wrap gap-x-3 gap-y-1">
                <span className="inline-flex items-center gap-1 text-gray-700"><Clock className="h-4 w-4" /> {time}</span>
                <span className="inline-flex items-center gap-1 text-gray-700"><MapPin className="h-4 w-4" /> {location}</span>
              </div>
              {shouldShowPrice(price, showPrice) && (
                <div className="mt-1 text-sm font-semibold text-green-700 inline-flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />${price}
                </div>
              )}
            </div>
          </div>
          <Button size="sm" className="rounded-xl" data-testid="join-btn">JOIN</Button>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {tags.map((t, i) => (
            <Badge key={i} variant="secondary" className="rounded-xl">{t}</Badge>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between text-sm">
          <div className="inline-flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>{people} joined</span>
          </div>
          <div className="text-muted-foreground">Need {needed} more</div>
        </div>
      </div>
    </motion.div>
  );
}

// -----------------------------
// Lightweight test cases (console-only, no UI)
// -----------------------------
function arraysEqual(a: any[], b: any[]) {
  return a.length === b.length && a.every((x, i) => x === b[i]);
}

function runTests() {
  const tests: { name: string; pass: boolean; details?: string }[] = [];

  // Test 1: Paid filter returns only paid activities (order preserved)
  const paidIds = activities.filter((a) => a.paid).map((a) => a.id);
  tests.push({
    name: "Paid filter correctness",
    pass: arraysEqual(paidIds, ["tennis-ev", "golf-ev"]),
    details: `got=[${paidIds.join(",")}]; expected=[tennis-ev,golf-ev]`,
  });

  // Test 2: getBgImage fallback works
  tests.push({
    name: "Background image fallback",
    pass: getBgImage("") === DEFAULT_IMAGE && getBgImage(undefined) === DEFAULT_IMAGE,
  });

  // Test 3: Price display logic
  tests.push({
    name: "Price visibility logic",
    pass:
      shouldShowPrice(10, true) === true &&
      shouldShowPrice(null, true) === false &&
      shouldShowPrice(5, false) === false,
  });

  // Test 4: Icons imported
  const iconsOk = [Volleyball, Bike, Flag, Dumbbell, UserPlus].every((I) => typeof I === "function");
  tests.push({ name: "Icons load", pass: iconsOk });

  // Emit to console only
  // eslint-disable-next-line no-console
  console.log("[ActivityHomePage tests]", tests);
}

if (typeof window !== "undefined") {
  try {
    runTests();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[ActivityHomePage tests] error", err);
  }
}