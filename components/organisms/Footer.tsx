import parse from 'html-react-parser';
import SocialIconList from '../molecules/SocialIconList';

export default function Footer({ content }: { content: string }) {
  return (
    <footer
      className="
      bg-[#1B71D8]
        dark:bg-gray-900 
        text-white
        dark:text-white
        p-5
        dark:border-y
        dark:border-gray-700
        text-xs
        tracking-wider"
    >
      <div
        className="lg:container lg:mx-auto
        flex
        flex-col-reverse
        md:flex-row
        gap-5
        justify-between
        items-center"
      >
        <div className="flex gap-1">
          &copy; {`${new Date().getFullYear()} `}{' '}
          {content !== undefined ? parse(content) : ''}
        </div>
        <SocialIconList />
      </div>
    </footer>
  );
}
