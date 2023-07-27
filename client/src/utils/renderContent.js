import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@sanity/client";
import Image from "next/image";

export default function RenderContent({ content }) {
  const client = sanityClient({
    projectId: "ltxzs899",
    dataset: "production",
    useCdn: true,
  });

  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }

  const SampleImageComponent = ({ value, isInline }) => {
    const { width, height } = getImageDimensions(value);

    return (
      <div className="relative w-full aspect-[4/3] h-full">
      <Image
        src={urlFor(value.asset._ref)
          .image(value)
          //  .width(isInline ? 100 : 800)
          //.fit("max")
          //.auto("format")
          .url()}
        alt={value.alt || " "}
        loading="lazy"
        fill={true}
        style={{
          // Display alongside text if image appears inside a block text span
          display: isInline ? "inline-block" : "block",

          // Avoid jumping around with aspect-ratio CSS property
          // aspectRatio: width / height,
        }}
        className="aspect-[4/3] w-full rounded-3xl object-cover "
      />
      </div>
    );
  };

  const SampleBlockComponent = ({ value }) => {
    return (
      // hacemos un style responsive para que se vea bien en mobile
      <div className="text-start" style={{ width: "95%", maxWidth: "95%" }}>
        <PortableText value={value} />
      </div>
    );
  };

  const components = {
    types: {
      image: SampleImageComponent,
      block: SampleBlockComponent,
      // Any other custom types you have in your content
      // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },
  };


  return (
    <div className="flex w-full flex-col items-center justify-center">
      <PortableText value={content} components={components} />
    </div>
  );
}
