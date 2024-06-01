import parse from 'html-react-parser';

export default function CopyrightItem({ content }: { content: string }) {
  return (
    <div className="flex gap-1">
      &copy; {`${new Date().getFullYear()} `}{' '}
      {content !== undefined ? parse(content) : ''}
    </div>
  );
}
