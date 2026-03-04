"use client";

import { BlogGrid } from "@/components/sections/blog-grid/blog-grid";
import { FeatureSection } from "@/components/sections/feature-section/feature-section";
import { Gallery } from "@/components/sections/gallery/gallery";
import { Hero } from "@/components/sections/hero/hero";
import { RSVPForm } from "@/components/sections/rsvp-form/rsvp-form";
import { Container } from "@/components/ui/container/container";
import { useLanguage } from "@/lib/language-context";

export default function HomePage() {
  const { content } = useLanguage();

  return (
    <>
      <Container>
        <Hero content={content.hero} id="hero" />
        {content.features.map((feature, index) => (
          <FeatureSection
            feature={feature}
            id={index === 0 ? "about" : index === 1 ? "services" : undefined}
            key={feature.id}
          />
        ))}
      </Container>
      <Gallery content={content.gallery} id="gallery" />

      <Container>
        <RSVPForm content={content.contact} id="contact" />
        <BlogGrid content={content.blog} id="blog" />
      </Container>
    </>
  );
}
