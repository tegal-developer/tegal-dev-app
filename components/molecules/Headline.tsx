export default function Headline({ text }: { text: string }) {
  return (
    <div className="bg-[#1B71D8] p-5 flex justify-center text-white">
      <h1 className="text-xl font-bold tracking-wider">{text}</h1>
    </div>
  );
}
