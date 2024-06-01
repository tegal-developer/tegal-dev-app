import HashtagItem from './HashtagItem';

export default function HashtagItemList({
  communityHashtags,
}: {
  communityHashtags: any;
}) {
  return (
    <div
      className="
        mt-5
        flex
        gap-3
        md:justify-center
        xl:justify-normal
        overflow-x-scroll
        py-3
        text-gray-700
        dark:text-white
        md:overflow-hidden"
    >
      {communityHashtags?.map((communityHashtag: any) => (
        <HashtagItem
          key={communityHashtag?.id}
          hashtagContent={communityHashtag?.attributes?.hashtag}
        />
      ))}
    </div>
  );
}
