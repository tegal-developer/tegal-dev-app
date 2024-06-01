import parse from 'html-react-parser';

export default function TextHeadingSection({ heading }: { heading: string }) {
  return (
    <div className="text-2xl md:text-4xl lg:text-4xl font-bold">
      {heading !== undefined ? parse(heading) : ''}
    </div>
  );
}
