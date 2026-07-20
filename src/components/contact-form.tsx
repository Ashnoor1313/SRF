"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background border border-border p-8 md:p-12 shadow-sm">
      <h2 className="font-heading text-3xl font-bold uppercase tracking-tight mb-2">Send an Enquiry</h2>
      <p className="text-muted-foreground mb-8">Fill out the form below and our team will get back to you shortly.</p>

      {submitStatus === "success" && (
        <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400 p-4 mb-8 border border-green-200 dark:border-green-800">
          <p className="font-semibold uppercase tracking-wider text-sm">Thank you for your enquiry!</p>
          <p className="text-sm mt-1">We have received your message and will contact you soon.</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-400 p-4 mb-8 border border-red-200 dark:border-red-800">
          <p className="font-semibold uppercase tracking-wider text-sm">Something went wrong.</p>
          <p className="text-sm mt-1">Please try again or contact us directly via email.</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Full Name *</Label>
            <Input
              id="name"
              placeholder="John Doe"
              {...register("name")}
              className={`rounded-none border-border focus-visible:ring-primary ${errors.name ? "border-red-500" : ""}`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              {...register("email")}
              className={`rounded-none border-border focus-visible:ring-primary ${errors.email ? "border-red-500" : ""}`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Phone Number *</Label>
            <Input
              id="phone"
              placeholder="+91 98765 43210"
              {...register("phone")}
              className={`rounded-none border-border focus-visible:ring-primary ${errors.phone ? "border-red-500" : ""}`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="company" className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Company Name</Label>
            <Input
              id="company"
              placeholder="Your Company Ltd."
              {...register("company")}
              className="rounded-none border-border focus-visible:ring-primary"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Your Message *</Label>
          <Textarea
            id="message"
            placeholder="Tell us about your requirements..."
            rows={5}
            {...register("message")}
            className={`rounded-none border-border focus-visible:ring-primary resize-none ${errors.message ? "border-red-500" : ""}`}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-white rounded-none uppercase tracking-widest font-semibold h-14"
        >
          {isSubmitting ? "Sending..." : "Submit Enquiry"}
        </Button>
      </form>
    </div>
  );
}
