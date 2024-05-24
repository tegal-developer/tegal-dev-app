import TextHeroBody from '../atoms/TextHeroBody';
import TextHeroHeading from '../atoms/TextHeroHeading';

export default function SubHeroContentInfo({
  heroHeading,
  heroBody,
}: {
  heroHeading: string;
  heroBody: string;
}) {
  return (
    <div className="flex flex-col md:items-center xl:items-start 2xl:gap-3">
      <TextHeroHeading text={heroHeading} />
      <TextHeroBody text={heroBody} />
    </div>
  );
}
