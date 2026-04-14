"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Droplet,
  ArrowLeft,
  Loader2,
  Building2,
  ImageIcon,
  X,
  Pencil,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FieldGroup, Field, FieldLabel, FieldDescription } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/lib/auth-context";
import { regions } from "@/lib/clinics-data";

const serviceOptions = [
  "Hydration Therapy",
  "Vitamin Infusions",
  "NAD+ Therapy",
  "Athletic Recovery",
  "Immune Support",
  "Beauty & Anti-Aging",
  "Hangover Recovery",
  "Weight Loss Support",
];

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

export default function EditClinicPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const { user, isLoading: authLoading } = useAuth();

  const [isFetching, setIsFetching] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const [saveError, setSaveError] = useState("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    region: "",
    address: "",
    phone: "",
    website: "",
    services: [] as string[],
    priceRange: "",
    hours: "",
    description: "",
  });

  // Redirect if not logged in
  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [user, authLoading, router]);

  // Fetch existing clinic data
  useEffect(() => {
    if (!id) return;
    const fetchClinic = async () => {
      try {
        const response = await fetch(`/api/clinics/user/${id}`);
        if (!response.ok) {
          setFetchError("Clinic listing not found.");
          return;
        }
        const data: UserClinicData = await response.json();

        // Guard: only the owner can edit
        if (user && data.user_id !== user.id) {
          router.push(`/clinics/user/${id}`);
          return;
        }

        const parsedServices =
          typeof data.services === "string"
            ? JSON.parse(data.services)
            : data.services ?? [];

        setFormData({
          name: data.name ?? "",
          city: data.city ?? "",
          region: data.region ?? "",
          address: data.address ?? "",
          phone: data.phone ?? "",
          website: data.website ?? "",
          services: parsedServices,
          priceRange: data.price_range ?? "",
          hours: data.hours ?? "",
          description: data.description ?? "",
        });

        if (data.image) {
          setImageUrl(data.image);
          setImagePreview(data.image);
        }
      } catch {
        setFetchError("Failed to load clinic data.");
      } finally {
        setIsFetching(false);
      }
    };
    if (!authLoading) fetchClinic();
  }, [id, authLoading, user, router]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => setImagePreview(ev.target?.result as string);
    reader.readAsDataURL(file);

    setIsUploading(true);
    setSaveError("");

    try {
      const fd = new FormData();
      fd.append("file", file);
      const response = await fetch("/api/upload", { method: "POST", body: fd });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Upload failed");
      setImageUrl(data.url);
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : "Failed to upload image");
      setImagePreview(imageUrl); // revert to previous
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveImage = () => {
    setImageUrl("");
    setImagePreview("");
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveError("");
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/clinics/user/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          image: imageUrl || "",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to update clinic");
      }

      router.push(`/clinics/user/${id}`);
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : "Failed to update clinic");
      setIsSubmitting(false);
    }
  };

  if (authLoading || isFetching) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-3 text-muted-foreground">
          <Loader2 className="h-8 w-8 animate-spin" />
          <p className="text-sm">Loading clinic data…</p>
        </div>
      </div>
    );
  }

  if (fetchError) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-4 text-center">
        <h1 className="font-serif text-2xl font-semibold text-foreground">{fetchError}</h1>
        <Button asChild>
          <Link href="/dashboard">Back to Dashboard</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Droplet className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-semibold leading-tight text-foreground">
                  Bridge IV Therapy Directory
                </span>
              </div>
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <Button variant="ghost" asChild className="mb-6 gap-2">
          <Link href={`/clinics/user/${id}`}>
            <ArrowLeft className="h-4 w-4" />
            Back to Listing
          </Link>
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-serif text-2xl">
              <Pencil className="h-6 w-6" />
              Edit Clinic Listing
            </CardTitle>
            <CardDescription>
              Update your clinic&apos;s information. Changes will appear on your listing immediately.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {saveError && (
              <div className="mb-6 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
                {saveError}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <FieldGroup>
                {/* Image Upload */}
                <Field>
                  <FieldLabel>Clinic Image</FieldLabel>
                  <FieldDescription className="mb-3">
                    Upload a photo of your clinic (JPG, PNG, WebP, or GIF, max 5MB)
                  </FieldDescription>
                  {imagePreview ? (
                    <div className="relative w-full max-w-sm">
                      <img
                        src={imagePreview}
                        alt="Clinic preview"
                        className="h-48 w-full rounded-lg border border-border object-cover"
                      />
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="absolute -right-2 -top-2 rounded-full bg-destructive p-1 text-destructive-foreground shadow-md transition-colors hover:bg-destructive/90"
                        disabled={isUploading}
                      >
                        <X className="h-4 w-4" />
                      </button>
                      {isUploading && (
                        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-background/80">
                          <Loader2 className="h-6 w-6 animate-spin text-primary" />
                        </div>
                      )}
                    </div>
                  ) : (
                    <label className="flex h-48 w-full max-w-sm cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/30 transition-colors hover:border-primary/50 hover:bg-muted/50">
                      <div className="flex flex-col items-center justify-center py-6">
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <ImageIcon className="h-6 w-6 text-primary" />
                        </div>
                        <p className="mb-1 text-sm font-medium text-foreground">
                          Click to upload image
                        </p>
                        <p className="text-xs text-muted-foreground">or drag and drop</p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/jpeg,image/png,image/webp,image/gif"
                        onChange={handleImageUpload}
                        disabled={isUploading}
                      />
                    </label>
                  )}
                </Field>

                {/* Name */}
                <Field>
                  <FieldLabel htmlFor="name">Clinic Name</FieldLabel>
                  <Input
                    id="name"
                    placeholder="e.g., Vitality IV Lounge"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </Field>

                {/* City + Region */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="city">City</FieldLabel>
                    <Input
                      id="city"
                      placeholder="e.g., Atlanta"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="region">Region</FieldLabel>
                    <Select
                      value={formData.region}
                      onValueChange={(value) => setFormData({ ...formData, region: value })}
                    >
                      <SelectTrigger id="region">
                        <SelectValue placeholder="Select a region" />
                      </SelectTrigger>
                      <SelectContent>
                        {regions.map((region) => (
                          <SelectItem key={region} value={region}>
                            {region}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                </div>

                {/* Address */}
                <Field>
                  <FieldLabel htmlFor="address">Full Address</FieldLabel>
                  <Input
                    id="address"
                    placeholder="123 Main St, Suite 100, Atlanta, GA 30301"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                  />
                </Field>

                {/* Phone + Website */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(404) 555-0123"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="website">Website</FieldLabel>
                    <Input
                      id="website"
                      type="text"
                      placeholder="www.yourwebsite.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />
                    <FieldDescription>Optional</FieldDescription>
                  </Field>
                </div>

                {/* Services */}
                <Field>
                  <FieldLabel>Services Offered</FieldLabel>
                  <FieldDescription className="mb-2">
                    Select all services your clinic offers
                  </FieldDescription>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => handleServiceToggle(service)}
                        className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                          formData.services.includes(service)
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </Field>

                {/* Price Range + Hours */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="priceRange">Price Range</FieldLabel>
                    <Input
                      id="priceRange"
                      placeholder="e.g., $100-300"
                      value={formData.priceRange}
                      onChange={(e) => setFormData({ ...formData, priceRange: e.target.value })}
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="hours">Business Hours</FieldLabel>
                    <Input
                      id="hours"
                      placeholder="e.g., Mon-Fri: 9am-6pm"
                      value={formData.hours}
                      onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                      required
                    />
                  </Field>
                </div>

                {/* Description */}
                <Field>
                  <FieldLabel htmlFor="description">Clinic Description</FieldLabel>
                  <Textarea
                    id="description"
                    placeholder="Tell us about your clinic, your team, and what makes you unique..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    required
                  />
                </Field>
              </FieldGroup>

              <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:justify-end">
                <Button type="button" variant="outline" asChild>
                  <Link href={`/clinics/user/${id}`}>Cancel</Link>
                </Button>
                <Button type="submit" disabled={isSubmitting || isUploading} className="gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Saving…
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
