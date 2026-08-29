"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Search,
} from "lucide-react";
import { BlogPost, INITIAL_BLOGS } from "@/data/blogs";

export function BlogListAndUpload() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = INITIAL_BLOGS.filter((blog) => {
    const matchesSearch =
      searchQuery === "" ||
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  return (
    <div className="space-y-10">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <span className="text-primary font-semibold tracking-[0.15em] uppercase text-xs sm:text-sm mb-2 block flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-primary" />
            Knowledge Base & Technical Insights
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Textile Engineering Blogs
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-2 leading-relaxed">
            In-depth guides on fabric GSM selection, yarn counts, zero-AZO dyeing chemistry, and modern garment manufacturing trends.
          </p>
        </div>
      </div>

      {/* Search Bar & Count Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground self-start sm:self-auto">
          Showing {filteredBlogs.length} Articles
        </span>

        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search articles, GSM, dyeing..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-8 py-2.5 bg-muted/60 border border-border rounded-xl text-xs font-medium focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground/70"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              aria-label="Clear search query"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-xs cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.map((blog) => (
          <article
            key={blog.id}
            className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-primary/50 hover:-translate-y-1.5 transition-all duration-400 flex flex-col justify-between group"
          >
            {/* Blog Cover Image */}
            <div className="relative h-56 w-full overflow-hidden bg-muted">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-600 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

              {/* Category & Read Time Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-white/20 backdrop-blur-md bg-black/60 text-white">
                  {blog.category}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-white/90 bg-black/60 px-2.5 py-1 rounded-full border border-white/20 backdrop-blur-md">
                  <Clock className="w-3 h-3 text-brand-bright" />
                  {blog.readTime}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span>{blog.date}</span>
                </div>

                <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 leading-snug line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>

              {/* Tags and Read More Link */}
              <div className="space-y-4 pt-4 border-t border-border/80">
                <div className="flex flex-wrap gap-1.5">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold text-muted-foreground bg-muted px-2.5 py-0.5 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/whats-new/blog/${blog.slug}`}
                  className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-widest text-primary hover:text-foreground transition-colors group/btn pt-1"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <div className="text-center py-16 bg-muted/30 border border-border rounded-3xl p-8">
          <p className="text-muted-foreground text-sm font-medium">
            No articles found matching &quot;{searchQuery}&quot;.
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="mt-4 text-xs font-bold uppercase tracking-wider text-primary hover:underline cursor-pointer"
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
}
