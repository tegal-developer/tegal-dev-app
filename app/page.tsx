import AboutSection from '@/components/organisms/AboutSection';
import ActivitySection from '@/components/organisms/ActivitySection';
import BlogSection from '@/components/organisms/BlogSection';
import ContactUsSection from '@/components/organisms/ContactUsSection';
import EventSection from '@/components/organisms/EventSection';
import FAQSection from '@/components/organisms/FAQSection';
import HeroSection from '@/components/organisms/HeroSection';
import Template from '@/components/templates/Template';
import {
  getAllCommunityBenefits,
  getAllCommunityHastags,
  getAllFAQs,
  getAllCommunityActivities,
  getHomePageContent,
  getAllInvitationLinks,
  postNewsLetterSubscriber,
} from '@/data/remote';

export default async function Home() {
  const homePageContent = await getHomePageContent();
  const invitationLinks = await getAllInvitationLinks();
  const addNewsletterSubscriber = async (email: string) => {
    'use server';
    return postNewsLetterSubscriber(email);
  };
  const communityBenefits = await getAllCommunityBenefits();
  const communityHashtags = await getAllCommunityHastags();
  const communityActivities = await getAllCommunityActivities();
  const faqs = await getAllFAQs();

  return (
    <Template>
      <HeroSection
        heroHeading={homePageContent?.data?.attributes?.hero_heading}
        heroBody={homePageContent?.data?.attributes?.hero_body}
        heroImages={`${process.env.NEXT_PUBLIC_CMS_BASE_URL}${homePageContent?.data?.attributes?.hero_images?.data[0]?.attributes?.url}`}
        invitationLinks={invitationLinks}
        addNewsletterSubscriber={addNewsletterSubscriber}
        communityBenefits={communityBenefits?.data}
        communityHashtags={communityHashtags?.data}
      />
      <EventSection />
      <BlogSection />
      <AboutSection
        aboutContent={homePageContent?.data?.attributes?.about_section}
      />
      <ActivitySection communityActivities={communityActivities?.data} />
      <ContactUsSection />
      <FAQSection faqs={faqs?.data} />
    </Template>
  );
}
