interface HeadingWithDescriptionInterface {
  headingSize:
    | "text-xs"
    | "text-sm"
    | "text-base"
    | "text-lg"
    | "text-xl"
    | "text-2xl"
    | "text-3xl"
    | "text-4xl"
    | "text-5xl"
    | "text-6xl"
    | "text-7xl";
  paragraphSize:
    | "text-xs"
    | "text-sm"
    | "text-base"
    | "text-lg"
    | "text-xl"
    | "text-2xl";
  headingText: string;
  paragraphText: string;
}

export default function HeadingWithDescription({
  headingSize,
  paragraphSize,
  headingText,
  paragraphText,
}: HeadingWithDescriptionInterface) {
  return (
    <>
      <h1 className={`${headingSize}`}>{headingText}</h1>
      <p className={`${paragraphSize}`}>{paragraphText}</p>
    </>
  );
}
