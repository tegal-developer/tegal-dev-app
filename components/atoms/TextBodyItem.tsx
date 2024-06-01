export default function TextBodyItem({ text }: { text: string }) {
  return <p className="line-clamp-2 tracking-wider text-xs">{text}</p>;
}
