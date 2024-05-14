import SubHeroContent from './SubHeroContent';
import SubHeroImage from './SubHeroImage';

export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid px-5 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <SubHeroContent />
        <SubHeroImage />
      </div>
    </section>
  );
}
