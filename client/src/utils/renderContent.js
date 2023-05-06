import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@sanity/client";

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
    console.log("value", value);
    return (
      <img
        src={urlFor(value.asset._ref)
          .image(value)
          .width(isInline ? 100 : 800)
          .fit("max")
          .auto("format")
          .url()}
        alt={value.alt || " "}
        loading="lazy"
        style={{
          // Display alongside text if image appears inside a block text span
          display: isInline ? "inline-block" : "block",

          // Avoid jumping around with aspect-ratio CSS property
          aspectRatio: width / height,
        }}
      />
    );
  };

  const components = {
    types: {
      image: SampleImageComponent,
      // Any other custom types you have in your content
      // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },
  };

  console.log("renderContent", content);
  return <PortableText value={content} components={components} />;
}
