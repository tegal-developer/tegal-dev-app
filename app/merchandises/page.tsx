import MerchandiseSection from '@/components/organisms/MerchandiseSection';
import Template from '@/components/templates/Template';
import getMerchandisesPageContent from '@/data/remote/strapi/single/get-merchandises-page-content';

export default async function Merchandises() {
  const merchandisesPageContent = await getMerchandisesPageContent();

  return (
    <Template>
      <MerchandiseSection
        merchandiseHeading={merchandisesPageContent?.data?.heading}
      />
    </Template>
  );
}
