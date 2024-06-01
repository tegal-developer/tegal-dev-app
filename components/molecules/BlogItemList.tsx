import BlogItem from './BlogItem';

export default function BlogItemList() {
  return (
    <div className="flex gap-5 w-full xl:justify-evenly overflow-x-scroll py-3">
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </div>
  );
}
