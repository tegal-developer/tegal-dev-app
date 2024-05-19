import ActivitySection from '@/components/organisms/ActivitySection';
import ContactUsSection from '@/components/organisms/ContactUsSection';
import FAQSection from '@/components/organisms/FAQSection';
import HeroSection from '@/components/organisms/HeroSection';
import Template from '@/components/templates/Template';
import {
  getAllFAQs,
  getAllServices,
  getCommunityActivities,
  getCommunityPhotos,
  getHomePageContent,
  getInvitationLinks,
  postNewsLetterSubscriber,
} from '@/data/remote';

export default async function Home() {
  const homePageContent = await getHomePageContent();
  const invitationLinks = await getInvitationLinks();
  const addNewsletterSubscriber = async (email: string) => {
    'use server';
    postNewsLetterSubscriber(email);
  };
  const communityPhotos = await getCommunityPhotos();
  const communityActivities = await getCommunityActivities();
  const services = await getAllServices();
  const faqs = await getAllFAQs();

  return (
    <Template>
      <HeroSection
        heroHeading={homePageContent?.data?.attributes?.hero_heading}
        heroBody={homePageContent?.data?.attributes?.hero_description}
        invitationLinks={invitationLinks}
        addNewsletterSubscriber={addNewsletterSubscriber}
        communityPhotos={`${process.env.NEXT_PUBLIC_CMS_BASE_URL}${communityPhotos?.data[0]?.attributes?.photos?.data?.attributes?.url}`}
      />
      <ActivitySection communityActivities={communityActivities?.data} />
      <ContactUsSection services={services?.data} />
      <FAQSection faqs={faqs?.data} />
    </Template>
  );
}
