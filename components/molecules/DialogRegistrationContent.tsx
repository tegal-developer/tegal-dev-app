import DialogHeading from '../atoms/DialogHeading';
import MembershipRegistrationForm from './MembershipRegistrationForm';

export default function DialogRegistrationContent() {
  return (
    <div className="modal-box bg-[#FAFBFD] dark:bg-gray-900 text-gray-700 dark:text-white">
      <DialogHeading />
      <MembershipRegistrationForm />
    </div>
  );
}
