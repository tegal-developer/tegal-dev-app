import { FaCheck } from 'react-icons/fa';
import TextCheck from '../atoms/TextCheck';

export default function BenefitItem({
  communityBenefit,
}: {
  communityBenefit: string;
}) {
  return (
    <div className="flex items-center gap-2 dark:text-white">
      <FaCheck />
      <TextCheck text={communityBenefit} />
    </div>
  );
}
