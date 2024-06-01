import AboutSection from '@/components/organisms/AboutSection';
import ActivitySection from '@/components/organisms/ActivitySection';
import BlogSection from '@/components/organisms/BlogSection';
import ContactSection from '@/components/organisms/ContactSection';
import EventSection from '@/components/organisms/EventSection';
import FAQSection from '@/components/organisms/FAQSection';
import HeroSection from '@/components/organisms/HeroSection';
import Template from '@/components/templates/Template';
import { getHomePageContent } from '@/data/remote/single';
import getAllInvitationLinks from '@/data/remote/collection/get-all-invitation-links';
import getAllCommunityBenefits from '@/data/remote/collection/get-all-community-benefits';
import getAllCommunityHastags from '@/data/remote/collection/get-all-community-hashtags';
import getAllCommunityActivities from '@/data/remote/collection/get-all-community-activities';
import getAllFAQs from '@/data/remote/collection/get-all-faqs';

export default async function Home() {
  const homePageContent = await getHomePageContent();
  const invitationLinks = await getAllInvitationLinks();
  const communityBenefits = await getAllCommunityBenefits();
  const communityHashtags = await getAllCommunityHastags();
  const communityActivities = await getAllCommunityActivities();
  const faqs = await getAllFAQs();

  return (
    <Template>
      <HeroSection
        heroHeading={homePageContent?.data?.attributes?.hero_section_heading}
        heroBody={homePageContent?.data?.attributes?.hero_section_body}
        heroImages={`${process.env.NEXT_PUBLIC_CMS_BASE_URL}${homePageContent?.data?.attributes?.hero_section_images?.data[0]?.attributes?.url}`}
        invitationLinks={invitationLinks}
        communityBenefits={communityBenefits?.data}
        communityHashtags={communityHashtags?.data}
      />
      <EventSection
        eventHeading={homePageContent?.data?.attributes?.event_section_heading}
      />
      <BlogSection
        blogHeading={homePageContent?.data?.attributes?.blog_section_heading}
      />
      <AboutSection
        aboutHeading={homePageContent?.data?.attributes?.about_section_heading}
        aboutBody={homePageContent?.data?.attributes?.about_section_body}
      />
      <ActivitySection
        activityHeading={
          homePageContent?.data?.attributes?.activity_section_heading
        }
        communityActivities={communityActivities?.data}
      />
      <ContactSection
        contactHeading={
          homePageContent?.data?.attributes?.contact_section_heading
        }
      />
      <FAQSection
        faqHeading={homePageContent?.data?.attributes?.faq_section_heading}
        faqs={faqs?.data}
      />
    </Template>
  );
}
