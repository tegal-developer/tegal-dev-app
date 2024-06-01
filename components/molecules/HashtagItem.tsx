export default function HashtagItem({
  hashtagContent,
}: {
  hashtagContent: string;
}) {
  return (
    <p className="text-xs border border-gray-300 w-fit p-1 rounded-lg dark:border-white">
      {hashtagContent}
    </p>
  );
}
