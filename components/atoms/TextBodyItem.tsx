import parse from 'html-react-parser';

export default function TextBodyItem({ text }: { text: string }) {
  return (
    <div className="line-clamp-2 tracking-wider text-xs">
      {text !== undefined ? parse(text) : ''}
    </div>
  );
}
