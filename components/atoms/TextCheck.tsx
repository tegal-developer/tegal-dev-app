export default function TextCheck({ text }: { text: string }) {
  return (
    <h3
      className="
        items-center
        justify-center
        py-3
        text-xs
        font-medium
        text-center"
    >
      {text}
    </h3>
  );
}
