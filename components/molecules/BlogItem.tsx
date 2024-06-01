import Image from 'next/image';
import ContohImage from '@/public/1716455754131.jpg';
import BlogItemInfo from './BlogItemInfo';
import ButtonBlogItem from '../atoms/ButtonBlogItem';

export default function BlogItem() {
  return (
    <div
      className="
        bg-white
        dark:bg-gray-900
        min-w-[335px]
        flex
        flex-col
        2xl:flex-row
        gap-5
        p-3
        rounded-xl
        cursor-pointer
        active:scale-95
        duration-300
        hover:bg-gray-100
        dark:hover:bg-gray-700
        dark:border
        dark:border-gray-700"
    >
      <Image
        className="rounded-lg object-cover w-full 2xl:w-[180px]"
        src={ContohImage}
        alt="Contoh image"
        width={200}
        height={100}
      />
      <div className="flex flex-col gap-5">
        <BlogItemInfo />
        <ButtonBlogItem />
      </div>
    </div>
  );
}
