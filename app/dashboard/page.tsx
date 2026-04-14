"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Droplet,
  Plus,
  Building2,
  Clock,
  CheckCircle2,
  XCircle,
  Trash2,
  LogOut,
  Eye,
  ShoppingBag,
  Pencil,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import { useAuth } from "@/lib/auth-context";

export default function DashboardPage() {
  const router = useRouter();
  const { user, isLoading, logout, userClinics, deleteClinic } = useAuth();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const handleDelete = (clinicId: number) => {
    if (confirm("Are you sure you want to delete this clinic listing?")) {
      deleteClinic(clinicId);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return (
          <Badge variant="default" className="gap-1 bg-green-600">
            <CheckCircle2 className="h-3 w-3" />
            Approved
          </Badge>
        );
      case "rejected":
        return (
          <Badge variant="destructive" className="gap-1">
            <XCircle className="h-3 w-3" />
            Rejected
          </Badge>
        );
      default:
        return (
          <Badge variant="secondary" className="gap-1">
            <Clock className="h-3 w-3" />
            Pending Review
          </Badge>
        );
    }
  };

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

            <div className="flex items-center gap-4">
              <span className="hidden text-sm text-muted-foreground sm:block">
                {user.email}
              </span>
              <Button variant="outline" size="sm" asChild className="gap-2">
                <a
                  href="https://shop.bridgeglobalhealth.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Shop
                </a>
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout} className="gap-2">
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-serif text-3xl font-bold text-foreground">
              Welcome, {user.name}
            </h1>
            <p className="mt-1 text-muted-foreground">
              Manage your clinic listings from your dashboard
            </p>
          </div>
          <Button asChild className="gap-2">
            <Link href="/submit-clinic">
              <Plus className="h-4 w-4" />
              Add New Clinic
            </Link>
          </Button>
        </div>

        <Card className="mb-6 border-primary/20 bg-primary/5">
          <CardContent className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary">
                <ShoppingBag className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Bridge Global Health Shop</p>
                <p className="text-sm text-muted-foreground">
                  Browse IV therapy supplies, wellness products, and more.
                </p>
              </div>
            </div>
            <Button asChild className="shrink-0 gap-2">
              <a
                href="https://shop.bridgeglobalhealth.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShoppingBag className="h-4 w-4" />
                Visit Shop
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Your Clinics
            </CardTitle>
            <CardDescription>
              View and manage your submitted clinic listings
            </CardDescription>
          </CardHeader>
          <CardContent>
            {userClinics.length === 0 ? (
              <Empty className="border border-border">
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <Building2 className="size-5" />
                  </EmptyMedia>
                  <EmptyTitle>No clinics yet</EmptyTitle>
                  <EmptyDescription>
                    You haven&apos;t submitted any clinic listings yet. Add your first clinic to get started.
                  </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <Button asChild>
                    <Link href="/submit-clinic">Add Your Clinic</Link>
                  </Button>
                </EmptyContent>
              </Empty>
            ) : (
              <div className="space-y-4">
                {userClinics.map((clinic) => (
                  <div
                    key={clinic.id}
                    className="flex flex-col gap-4 rounded-lg border border-border p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-foreground">{clinic.name}</h3>
                        {getStatusBadge(clinic.status)}
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {clinic.city}, {clinic.region}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Submitted {new Date(clinic.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="gap-1"
                      >
                        <Link href={`/clinics/user/${clinic.id}`}>
                          <Eye className="h-4 w-4" />
                          View
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="gap-1"
                      >
                        <Link href={`/clinics/user/${clinic.id}/edit`}>
                          <Pencil className="h-4 w-4" />
                          Edit
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(clinic.id)}
                        className="gap-1 text-destructive hover:bg-destructive hover:text-destructive-foreground"
                      >
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
