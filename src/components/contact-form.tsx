"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  company: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const QUICK_TOPICS = [
  "Sample Roll Request",
  "Custom Dyeing / Lab Dip",
  "Bulk Fabric Order",
  "Customize Request",
  "Plant Visit Request",
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string>("Sample Roll Request");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "Sample Roll Request",
    },
  });

  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic);
    setValue("subject", topic);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setServerError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          message: `[Subject: ${selectedTopic}]\n${data.message}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
        const body = await response.json().catch(() => null);
        if (typeof body?.error === "string") setServerError(body.error);
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card border border-border p-6 sm:p-10 md:p-12 shadow-xl rounded-3xl space-y-8">
      <div>
        <span className="text-primary font-bold uppercase tracking-widest text-[10px] sm:text-xs bg-primary/10 px-3 py-1 rounded-full mb-3 inline-block">
          Fast Business Inquiry
        </span>
        <h2 className="font-heading text-2xl sm:text-4xl font-bold uppercase tracking-tight text-foreground mb-2">
          Send an Enquiry
        </h2>
        <p className="text-muted-foreground text-xs sm:text-sm">
          Select an inquiry type below and share your fabric specifications. Our Ludhiana sales team usually responds within 2 business hours.
        </p>
      </div>

      {/* Quick Topic Chips */}
      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold block">
          Inquiry Type / Intent
        </label>
        <div className="flex flex-wrap gap-2">
          {QUICK_TOPICS.map((topic) => (
            <button
              key={topic}
              type="button"
              onClick={() => handleTopicClick(topic)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all border ${
                selectedTopic === topic
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "bg-muted text-muted-foreground border-border hover:bg-background hover:text-foreground"
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      {submitStatus === "success" && (
        <div className="bg-green-500/10 text-green-700 dark:text-green-400 p-5 rounded-2xl border border-green-500/30 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold uppercase tracking-wider text-xs">Thank you for your enquiry!</p>
            <p className="text-xs mt-1">We have received your message regarding &ldquo;{selectedTopic}&rdquo; and our representative will contact you shortly.</p>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-500/10 text-red-700 dark:text-red-400 p-5 rounded-2xl border border-red-500/30">
          <p className="font-semibold uppercase tracking-wider text-xs">{serverError || "Something went wrong."}</p>
          <p className="text-xs mt-1">Please try again or contact us directly via WhatsApp (+91 98887 78082).</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
              Full Name *
            </Label>
            <Input
              id="name"
              placeholder="e.g. Rajesh Kumar"
              {...register("name")}
              className={`rounded-xl border-border focus-visible:ring-primary h-12 text-xs font-medium ${errors.name ? "border-red-500" : ""}`}
            />
            {errors.name && <p className="text-red-500 text-[10px] mt-1">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="rajesh@company.com"
              {...register("email")}
              className={`rounded-xl border-border focus-visible:ring-primary h-12 text-xs font-medium ${errors.email ? "border-red-500" : ""}`}
            />
            {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
              Phone / WhatsApp Number *
            </Label>
            <Input
              id="phone"
              placeholder="+91 98765 43210"
              {...register("phone")}
              className={`rounded-xl border-border focus-visible:ring-primary h-12 text-xs font-medium ${errors.phone ? "border-red-500" : ""}`}
            />
            {errors.phone && <p className="text-red-500 text-[10px] mt-1">{errors.phone.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="company" className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
              Company / Brand Name
            </Label>
            <Input
              id="company"
              placeholder="e.g. Apex Apparels Pvt Ltd"
              {...register("company")}
              className="rounded-xl border-border focus-visible:ring-primary h-12 text-xs font-medium"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
            Requirement Details (GSM, Quantity, Color, Structure) *
          </Label>
          <Textarea
            id="message"
            placeholder="Share specific fabric structure (e.g., 220 GSM 100% Cotton Pique in Navy Blue, 500 kg sample order)..."
            rows={4}
            {...register("message")}
            className={`rounded-xl border-border focus-visible:ring-primary resize-none text-xs font-medium ${errors.message ? "border-red-500" : ""}`}
          />
          {errors.message && <p className="text-red-500 text-[10px] mt-1">{errors.message.message}</p>}
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl uppercase tracking-widest font-bold h-14 gap-2 text-xs shadow-md"
        >
          {isSubmitting ? (
            <span>Sending Enquiry...</span>
          ) : (
            <>
              <span>Submit Business Enquiry</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
