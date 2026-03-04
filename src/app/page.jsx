"use client";

import { BlogGrid } from "@/components/sections/blog-grid";
import { FeatureSection } from "@/components/sections/feature-section";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { RSVPForm } from "@/components/sections/rsvp-form";
import { useLanguage } from "@/lib/language-context";

export default function HomePage() {
  const { content } = useLanguage();

  return (
    <>
      <Hero content={content.hero} id="hero" />
      {content.features.map((feature, index) => (
        <FeatureSection
          feature={feature}
          id={index === 0 ? "about" : index === 1 ? "services" : undefined}
          key={feature.id}
        />
      ))}
      <Gallery content={content.gallery} id="gallery" />
      <RSVPForm content={content.contact} id="contact" />
      <BlogGrid content={content.blog} id="blog" />
    </>
  );
}
