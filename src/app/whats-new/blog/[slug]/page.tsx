import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Tag,
  User,
  Sparkles,
  Layers,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { INITIAL_BLOGS } from "@/data/blogs";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return INITIAL_BLOGS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = INITIAL_BLOGS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog Article | Siya Ram Fabrics",
    };
  }

  return {
    title: `${post.title} | Siya Ram Fabrics`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = INITIAL_BLOGS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero / Article Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-[#111111] via-[#1a0e12] to-[#111111] text-white overflow-hidden">
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-bright/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl space-y-6">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/60">
            <Link href="/whats-new" className="hover:text-white transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>What&apos;s New</span>
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-bright">{post.category}</span>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full border border-white/20 bg-black/60 text-brand-bright backdrop-blur-md">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-white/80 bg-black/40 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
              <Clock className="w-3.5 h-3.5 text-brand-bright" />
              {post.readTime}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-white/80 bg-black/40 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              {post.date}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Main Article Body */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-12">
          {/* Featured Cover Image */}
          <div className="relative h-[320px] sm:h-[450px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-border">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Article Introduction */}
          <div className="bg-muted/40 border border-border p-6 sm:p-8 rounded-3xl">
            <p className="text-base sm:text-lg text-foreground font-medium leading-relaxed">
              {post.content.intro}
            </p>
          </div>

          {/* Structured Sections */}
          <div className="space-y-10">
            {post.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight text-foreground">
                  {section.heading}
                </h2>

                <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {section.body.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {section.keyTakeaway && (
                  <div className="bg-primary/5 border-l-4 border-primary p-4 sm:p-5 rounded-r-2xl my-4 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary block">
                      Engineering Takeaway
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-foreground leading-snug">
                      {section.keyTakeaway}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="border-t border-border pt-8 space-y-4">
            <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-foreground">
              Summary & Manufacturing Advice
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              {post.content.conclusion}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mr-2">
              Tags:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold text-foreground bg-muted border border-border px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Back Navigation */}
          <div className="text-center pt-6">
            <Link
              href="/whats-new"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to What&apos;s New & All Blogs</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
