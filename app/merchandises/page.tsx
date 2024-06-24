import MerchandiseSection from '@/components/organisms/MerchandiseSection';
import Template from '@/components/templates/Template';
import getAllMerchandises from '@/data/remote/strapi/collection/get-all-merchandises';
import getMerchandisesPageContent from '@/data/remote/strapi/single/get-merchandises-page-content';

export default async function Merchandises() {
  const merchandisesPageContent = await getMerchandisesPageContent();
  const merchandises = await getAllMerchandises(1);

  return (
    <Template>
      <MerchandiseSection
        merchandiseHeading={merchandisesPageContent?.data?.heading}
        merchandises={merchandises?.data}
      />
    </Template>
  );
}
