import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Star,
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  Award,
  ChevronLeft,
  ShieldCheck,
  Wifi,
  ParkingSquare,
  Gift,
  Users,
  CheckCircle2,
  Calendar,
  DollarSign,
  Timer,
  Quote,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { clinics } from "@/lib/clinics-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return clinics.map((clinic) => ({ slug: clinic.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const clinic = clinics.find((c) => c.slug === slug);
  if (!clinic) return {};
  return {
    title: `${clinic.name} | Georgia IV Therapy Directory`,
    description: clinic.longDescription.slice(0, 160),
  };
}

const amenityIcons: Record<string, React.ElementType> = {
  "Free Parking": ParkingSquare,
  "Valet Parking": ParkingSquare,
  "Ample Parking": ParkingSquare,
  "Wi-Fi": Wifi,
  "Gift Cards": Gift,
  "Group Packages": Users,
  "Group Discounts": Users,
  "Family Discounts": Users,
  "Family Memberships": Users,
};

export default async function ClinicPage({ params }: Props) {
  const { slug } = await params;
  const clinic = clinics.find((c) => c.slug === slug);

  if (!clinic) notFound();

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Image */}
        <div className="relative h-72 w-full overflow-hidden sm:h-96">
          <Image
            src={clinic.image}
            alt={`Interior of ${clinic.name}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/50" />
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
              <Link
                href="/"
                className="mb-4 inline-flex items-center gap-1.5 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <ChevronLeft className="h-4 w-4" />
                Back to Directory
              </Link>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  {clinic.featured && (
                    <Badge className="mb-2 bg-primary text-primary-foreground gap-1">
                      <Award className="h-3 w-3" />
                      Featured Clinic
                    </Badge>
                  )}
                  <h1 className="font-serif text-3xl font-bold text-white sm:text-4xl text-balance">
                    {clinic.name}
                  </h1>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-white/90">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{clinic.city}, GA — {clinic.region}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-semibold">{clinic.rating}</span>
                      <span className="text-sm text-white/70">({clinic.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button className="gap-2" asChild>
                    <a href={`https://${clinic.website}`} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Visit Website
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">

            {/* Left: Main content */}
            <div className="space-y-8 lg:col-span-2">

              {/* About */}
              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground">About {clinic.name}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {clinic.longDescription}
                </p>
              </section>

              <hr className="border-border" />

              {/* Services Menu */}
              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground">Services &amp; Pricing</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {clinic.serviceDetails.map((service) => (
                    <Card key={service.name} className="border-border">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold text-foreground">{service.name}</h3>
                          <span className="shrink-0 text-sm font-semibold text-primary">{service.price}</span>
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {service.description}
                        </p>
                        <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Timer className="h-3.5 w-3.5" />
                          <span>{service.duration}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <hr className="border-border" />

              {/* Reviews */}
              <section>
                <div className="flex items-center justify-between">
                  <h2 className="font-serif text-2xl font-semibold text-foreground">Patient Reviews</h2>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    <span className="text-lg font-bold text-foreground">{clinic.rating}</span>
                    <span className="text-sm text-muted-foreground">/ 5.0</span>
                  </div>
                </div>
                <div className="mt-4 space-y-4">
                  {clinic.reviews.map((review, i) => (
                    <Card key={i} className="border-border">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-3">
                          <Quote className="mt-0.5 h-5 w-5 shrink-0 text-primary/40" />
                          <div className="flex-1">
                            <p className="text-sm leading-relaxed text-muted-foreground italic">
                              {review.text}
                            </p>
                            <div className="mt-3 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                                  {review.author.charAt(0)}
                                </div>
                                <span className="text-sm font-semibold text-foreground">{review.author}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="flex">
                                  {Array.from({ length: 5 }).map((_, idx) => (
                                    <Star
                                      key={idx}
                                      className={`h-3.5 w-3.5 ${
                                        idx < review.rating
                                          ? "fill-amber-400 text-amber-400"
                                          : "fill-muted text-muted"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-xs text-muted-foreground">{review.date}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-6">

              {/* Quick Info Card */}
              <Card className="border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Clinic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">{clinic.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">
                        {clinic.phone}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Website</p>
                      <a
                        href={`https://${clinic.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {clinic.website}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Price Range</p>
                      <p className="text-sm text-muted-foreground">{clinic.priceRange}</p>
                    </div>
                  </div>
                  <hr className="border-border" />
                  <div className="flex flex-col gap-2">
                    <Button className="w-full gap-2" asChild>
                      <a href={`https://${clinic.website}`} target="_blank" rel="noopener noreferrer">
                        <Calendar className="h-4 w-4" />
                        Book Appointment
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Hours Card */}
              <Card className="border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <CardTitle className="text-base">Hours of Operation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {clinic.hoursDetailed.map((entry) => (
                      <div
                        key={entry.day}
                        className={`flex items-center justify-between text-sm ${
                          entry.day === today
                            ? "font-semibold text-primary"
                            : "text-muted-foreground"
                        }`}
                      >
                        <span>{entry.day}</span>
                        <span className={entry.hours === "Closed" ? "text-destructive font-medium" : ""}>
                          {entry.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Amenities Card */}
              <Card className="border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Amenities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {clinic.amenities.map((amenity) => {
                      const Icon = amenityIcons[amenity] ?? CheckCircle2;
                      return (
                        <li key={amenity} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                          <Icon className="h-4 w-4 shrink-0 text-primary" />
                          {amenity}
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>

              {/* Certifications Card */}
              <Card className="border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <CardTitle className="text-base">Certifications</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {clinic.certifications.map((cert) => (
                      <li key={cert} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Service Tags */}
              <Card className="border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Specialties</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {clinic.services.map((service) => (
                      <Badge key={service} variant="secondary">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
