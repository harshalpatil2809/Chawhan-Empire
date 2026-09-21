"use client";

import { useState } from "react";
import { useStore } from "@/context/StoreProvider";
import { Button, ButtonLink } from "@/components/ui/Button";
import {
  ErrorText,
  Input,
  Label,
  Select,
  Textarea,
} from "@/components/ui/Field";
import ImageUploader from "@/components/ui/ImageUploader";
import type {
  BudgetBand,
  ProjectImage,
  ProjectType,
  PropertyType,
} from "@/lib/types";
import { isEmail, isPhone, sanitize } from "@/lib/utils";

const projectTypes: ProjectType[] = [
  "New Construction",
  "Renovation",
  "Commercial",
  "Residential",
  "Interior",
  "Other",
];

const propertyTypes: PropertyType[] = [
  "Plot / Land",
  "Apartment",
  "Villa / Bungalow",
  "Office",
  "Retail Space",
  "Other",
];

const budgets: BudgetBand[] = [
  "Under Rs. 10 Lakhs",
  "Rs. 10-25 Lakhs",
  "Rs. 25-50 Lakhs",
  "Rs. 50 Lakhs - Rs. 1 Crore",
  "Rs. 1 Crore+",
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  location: string;
  projectType: ProjectType;
  propertyType: PropertyType;
  budget: BudgetBand;
  startDate: string;
  message: string;
}

const empty: FormState = {
  name: "",
  phone: "",
  email: "",
  location: "",
  projectType: "New Construction",
  propertyType: "Plot / Land",
  budget: "Rs. 25-50 Lakhs",
  startDate: "",
  message: "",
};

export default function QuoteForm() {
  const { addEnquiry } = useStore();
  const [form, setForm] = useState<FormState>(empty);
  const [images, setImages] = useState<ProjectImage[]>([]);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) next.name = "Enter your full name.";
    if (!isPhone(form.phone))
      next.phone = "Enter a 10-digit phone number we can reach you on.";
    if (!isEmail(form.email)) next.email = "Enter a valid email address.";
    if (form.location.trim().length < 2)
      next.location = "Tell us the city or area of the site.";
    if (form.message.trim().length < 15)
      next.message = "Add a line or two about the project so we can size it.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async () => {
    setFormError(null);
    if (!validate()) {
      setFormError("Check the highlighted fields and send again.");
      return;
    }
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 650));
      addEnquiry({
        name: sanitize(form.name),
        phone: sanitize(form.phone),
        email: sanitize(form.email),
        location: sanitize(form.location),
        projectType: form.projectType,
        propertyType: form.propertyType,
        budget: form.budget,
        startDate: form.startDate,
        message: sanitize(form.message),
        attachments: images.map((i) => i.url),
      });
      setSubmitted(true);
    } catch {
      setFormError(
        "The enquiry did not go through. Try again, or call us directly.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="border border-concrete-dark bg-white p-8 text-center sm:p-12">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h2 className="mt-5 font-display text-2xl font-semibold text-ink">
          Thank you! Your project enquiry has been received.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-mute">
          Our team will contact you shortly, usually within one working day. If
          it is urgent, call the office and quote your name.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/projects" variant="secondary" size="sm">
            Browse our projects
          </ButtonLink>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              setForm(empty);
              setImages([]);
              setSubmitted(false);
            }}
          >
            Send another enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        void submit();
      }}
      className="border border-concrete-dark bg-white p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" required>
            Full name
          </Label>
          <Input
            id="name"
            value={form.name}
            error={Boolean(errors.name)}
            aria-describedby="name-error"
            onChange={(e) => set("name", e.target.value)}
          />
          <ErrorText id="name-error">{errors.name}</ErrorText>
        </div>
        <div>
          <Label htmlFor="phone" required>
            Phone number
          </Label>
          <Input
            id="phone"
            type="tel"
            inputMode="tel"
            placeholder="+91 98765 43210"
            value={form.phone}
            error={Boolean(errors.phone)}
            aria-describedby="phone-error"
            onChange={(e) => set("phone", e.target.value)}
          />
          <ErrorText id="phone-error">{errors.phone}</ErrorText>
        </div>
        <div>
          <Label htmlFor="email" required>
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            error={Boolean(errors.email)}
            aria-describedby="email-error"
            onChange={(e) => set("email", e.target.value)}
          />
          <ErrorText id="email-error">{errors.email}</ErrorText>
        </div>
        <div>
          <Label htmlFor="location" required>
            Site location
          </Label>
          <Input
            id="location"
            placeholder="Area and city"
            value={form.location}
            error={Boolean(errors.location)}
            aria-describedby="location-error"
            onChange={(e) => set("location", e.target.value)}
          />
          <ErrorText id="location-error">{errors.location}</ErrorText>
        </div>
        <div>
          <Label htmlFor="projectType">Project type</Label>
          <Select
            id="projectType"
            value={form.projectType}
            onChange={(e) => set("projectType", e.target.value as ProjectType)}
          >
            {projectTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </Select>
        </div>
        <div>
          <Label htmlFor="propertyType">Property type</Label>
          <Select
            id="propertyType"
            value={form.propertyType}
            onChange={(e) =>
              set("propertyType", e.target.value as PropertyType)
            }
          >
            {propertyTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </Select>
        </div>
        <div>
          <Label htmlFor="budget">Approximate budget</Label>
          <Select
            id="budget"
            value={form.budget}
            onChange={(e) => set("budget", e.target.value as BudgetBand)}
          >
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </Select>
        </div>
        <div>
          <Label htmlFor="startDate">Expected start date</Label>
          <Input
            id="startDate"
            type="date"
            value={form.startDate}
            onChange={(e) => set("startDate", e.target.value)}
          />
        </div>
      </div>

      <div className="mt-5">
        <Label htmlFor="message" required>
          Project description
        </Label>
        <Textarea
          id="message"
          value={form.message}
          error={Boolean(errors.message)}
          aria-describedby="message-error"
          placeholder="Plot size, number of floors, what you want built, anything already decided."
          onChange={(e) => set("message", e.target.value)}
        />
        <ErrorText id="message-error">{errors.message}</ErrorText>
      </div>

      <div className="mt-6">
        <ImageUploader
          label="Project images (optional)"
          hint="Site photos, sketches or reference images help us quote faster."
          images={images}
          onChange={setImages}
        />
      </div>

      {formError ? (
        <p
          role="alert"
          className="mt-5 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {formError}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={submitting}
        className="mt-6 w-full sm:w-auto"
      >
        {submitting ? "Sending enquiry..." : "Send my enquiry"}
      </Button>
      <p className="mt-3 text-xs text-ink-mute">
        We use your details only to prepare and discuss your estimate.
      </p>
    </form>
  );
}
