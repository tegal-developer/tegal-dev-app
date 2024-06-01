import DialogRegistrationContent from './DialogRegistrationContent';

export default function DialogRegistration() {
  return (
    <dialog id="my_modal_2" className="modal">
      <DialogRegistrationContent />
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
