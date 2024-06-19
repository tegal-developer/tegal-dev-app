import Image from 'next/image';
import TextHeadingSection from '../atoms/TextHeadingSection';
import Container from '../templates/Container';

export default function CommunityPartnerSection({
  communityPartners,
}: {
  communityPartners: any;
}) {
  return (
    <section
      id="contact"
      className="
      bg-white
      dark:bg-gray-900
        dark:border-t
        dark:border-gray-700
        px-5
        py-6
        md:py-12
        text-gray-700
        dark:text-white
        text-center"
    >
      <Container>
        <TextHeadingSection heading="Community Partners" />
        {communityPartners?.map((communityPartner: any) => (
          <Image
            key={communityPartner?.id}
            src={communityPartner?.image?.url}
            alt={communityPartner?.name}
            width={250}
            height={250}
            className="bg-white rounded-xl cursor-pointer hover:brightness-75 duration-300"
          />
        ))}
      </Container>
    </section>
  );
}
