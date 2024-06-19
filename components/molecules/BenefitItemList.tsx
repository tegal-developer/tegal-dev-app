import BenefitItem from './BenefitItem';

export default function BenefitItemList({
  communityBenefits,
}: {
  communityBenefits: any;
}) {
  return (
    <div className="flex flex-col md:flex-row md:gap-5 md:justify-center xl:justify-normal">
      {communityBenefits?.map((communityBenefit: any) => (
        <BenefitItem
          key={communityBenefit?.id}
          communityBenefit={communityBenefit?.benefit}
        />
      ))}
    </div>
  );
}
