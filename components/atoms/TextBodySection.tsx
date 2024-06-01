import parse from 'html-react-parser';

export default function TextBodySection({ body }: { body: string }) {
  return (
    <div className="max-w-[720px] text-center tracking-widest leading-relaxed text-sm">
      {body !== undefined ? parse(body) : ''}
    </div>
  );
}
