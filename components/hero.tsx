import { Search } from "lucide-react";

interface HeroProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export function Hero({ searchQuery, onSearchChange }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary/5 py-16 sm:py-24">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Atlanta Wellness Directory
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Find IV Therapy Clinics Near You
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Discover Atlanta's premier wellness clinics offering IV hydration, vitamin infusions, 
            NAD+ therapy, and more. Your path to optimal health starts here.
          </p>

          <div className="mx-auto mt-10 max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search clinics by name, city, or service..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="h-14 w-full rounded-full border border-border bg-card pl-12 pr-6 text-foreground shadow-sm transition-shadow placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm text-muted-foreground">Popular searches:</span>
            {["Atlanta", "NAD+ Therapy", "Hydration"].map((tag) => (
              <button
                key={tag}
                onClick={() => onSearchChange(tag)}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/5"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
