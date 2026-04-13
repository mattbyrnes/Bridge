"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  ChevronLeft,
  CheckCircle2,
  DollarSign,
  Calendar,
  Building2,
  Loader2,
  AlertCircle,
  Pencil,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useAuth } from "@/lib/auth-context";

interface UserClinicData {
  id: number;
  user_id: number;
  name: string;
  city: string;
  region: string;
  address: string;
  phone: string;
  website: string;
  description: string;
  price_range: string;
  hours: string;
  services: string[] | string;
  status: string;
  created_at: string;
  image?: string;
}

export default function UserClinicListingPage() {
  const params = useParams();
  const id = params?.id as string;
  const { user } = useAuth();
  const [clinic, setClinic] = useState<UserClinicData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!id) return;
    const fetchClinic = async () => {
      try {
        const response = await fetch(`/api/clinics/user/${id}`);
        if (!response.ok) {
          setError("Clinic listing not found.");
          return;
        }
        const data = await response.json();
        setClinic(data);
      } catch {
        setError("Failed to load clinic listing.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchClinic();
  }, [id]);

  const services: string[] = clinic
    ? typeof clinic.services === "string"
      ? JSON.parse(clinic.services)
      : clinic.services ?? []
    : [];

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center">
          <div className="flex flex-col items-center gap-3 text-muted-foreground">
            <Loader2 className="h-8 w-8 animate-spin" />
            <p className="text-sm">Loading clinic listing…</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !clinic) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center px-4">
          <div className="flex flex-col items-center gap-4 text-center">
            <AlertCircle className="h-10 w-10 text-destructive" />
            <h1 className="font-serif text-2xl font-semibold text-foreground">
              Listing Not Found
            </h1>
            <p className="text-sm text-muted-foreground">
              {error || "This clinic listing does not exist."}
            </p>
            <Button asChild>
              <Link href="/">Back to Directory</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const websiteHref = clinic.website
    ? clinic.website.startsWith("http")
      ? clinic.website
      : `https://${clinic.website}`
    : null;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Banner */}
        <div className="bg-primary/10 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Directory
            </Link>

            {/* Image */}
            {clinic.image && (
              <div className="mb-6 overflow-hidden rounded-xl border border-border">
                <img
                  src={clinic.image}
                  alt={clinic.name}
                  className="h-80 w-full object-cover"
                />
              </div>
            )}

            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-primary/20 text-primary">
                {clinic.image ? (
                  <img src={clinic.image} alt={clinic.name} className="h-full w-full object-cover" />
                ) : (
                  <Building2 className="h-8 w-8" />
                )}
              </div>
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      User Submitted
                    </Badge>
                    {clinic.status === "approved" && (
                      <Badge className="gap-1 bg-green-600 text-xs">
                        <CheckCircle2 className="h-3 w-3" />
                        Verified Listing
                      </Badge>
                    )}
                  </div>
                  <h1 className="font-serif text-3xl font-bold text-foreground text-balance sm:text-4xl">
                    {clinic.name}
                  </h1>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">
                        {clinic.city}, GA — {clinic.region}
                      </span>
                    </div>
                    {clinic.hours && (
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{clinic.hours}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {(user?.id === clinic.user_id || user?.isAdmin) && (
                  <Button variant="outline" className="gap-2" asChild>
                    <Link href={`/clinics/user/${id}/edit`}>
                      <Pencil className="h-4 w-4" />
                      Edit Listing
                    </Link>
                  </Button>
                )}

                {websiteHref && (
                  <Button className="gap-2" asChild>
                    <a href={websiteHref} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Visit Website
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left: Main Content */}
            <div className="space-y-8 lg:col-span-2">
              {/* About */}
              {clinic.description && (
                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">
                    About {clinic.name}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {clinic.description}
                  </p>
                </section>
              )}

              {services.length > 0 && (
                <>
                  <hr className="border-border" />
                  {/* Services */}
                  <section>
                    <h2 className="font-serif text-2xl font-semibold text-foreground">
                      Services Offered
                    </h2>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {services.map((service) => (
                        <div
                          key={service}
                          className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                          <span className="text-sm font-medium text-foreground">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>
                </>
              )}

              <hr className="border-border" />

              {/* CTA */}
              <section className="rounded-xl border border-primary/20 bg-primary/5 p-6">
                <h2 className="font-serif text-xl font-semibold text-foreground">
                  Ready to Book?
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Contact {clinic.name} directly to schedule your IV therapy session.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {clinic.phone && (
                    <Button className="gap-2" asChild>
                      <a href={`tel:${clinic.phone}`}>
                        <Calendar className="h-4 w-4" />
                        Call to Schedule
                      </a>
                    </Button>
                  )}
                  {websiteHref && (
                    <Button variant="outline" className="gap-2" asChild>
                      <a href={websiteHref} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Visit Website
                      </a>
                    </Button>
                  )}
                </div>
              </section>
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-6">
              {/* Clinic Info */}
              <Card className="border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Clinic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {clinic.address && (
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Address</p>
                        <p className="text-sm text-muted-foreground">{clinic.address}</p>
                      </div>
                    </div>
                  )}
                  {clinic.phone && (
                    <div className="flex items-start gap-3">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Phone</p>
                        <p className="text-sm text-muted-foreground">
                          {clinic.phone}
                        </p>
                      </div>
                    </div>
                  )}
                  {clinic.website && (
                    <div className="flex items-start gap-3">
                      <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Website</p>
                        <a
                          href={websiteHref ?? "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                          {clinic.website}
                        </a>
                      </div>
                    </div>
                  )}
                  {clinic.price_range && (
                    <div className="flex items-start gap-3">
                      <DollarSign className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Price Range</p>
                        <p className="text-sm text-muted-foreground">{clinic.price_range}</p>
                      </div>
                    </div>
                  )}
                  {clinic.hours && (
                    <div className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Hours</p>
                        <p className="text-sm text-muted-foreground">{clinic.hours}</p>
                      </div>
                    </div>
                  )}

                  <hr className="border-border" />

                  <div className="flex flex-col gap-2">
                    {clinic.phone && (
                      <Button className="w-full gap-2" asChild>
                        <a href={`tel:${clinic.phone}`}>
                          <Calendar className="h-4 w-4" />
                          Book Appointment
                        </a>
                      </Button>
                    )}
                    {websiteHref && (
                      <Button variant="outline" className="w-full gap-2" asChild>
                        <a href={websiteHref} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Visit Website
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Specialties */}
              {services.length > 0 && (
                <Card className="border-border">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Specialties</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {services.map((service) => (
                        <Badge key={service} variant="secondary">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Listing Meta */}
              <Card className="border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Listing Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Status</span>
                    {clinic.status === "approved" ? (
                      <Badge className="gap-1 bg-green-600 text-xs">
                        <CheckCircle2 className="h-3 w-3" />
                        Approved
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="text-xs">
                        {clinic.status}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Listed since</span>
                    <span className="text-sm font-medium text-foreground">
                      {new Date(clinic.created_at).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
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
