import Button from '../atoms/Button';
import ButtonLink from '../atoms/ButtonLink';
import InputText from '../atoms/InputText';
import TextHeroBody from '../atoms/TextHeroBody';
import TextHeroHeading from '../atoms/TextHeroHeading';
import SocialIconList from './SocialIconList';

export default function SubHeroContent() {
  return (
    <div className="mr-auto place-self-center lg:col-span-7">
      <div className="flex flex-col gap-5">
        <TextHeroHeading text="Tegal Developer Group" />
        <TextHeroBody
          text="Sebuah komunitas yang mewadahi dan menghubungkan para developer di Tegal
untuk tumbuh bersama melalui kolaborasi dan inovasi menuju kemajuan
teknologi"
        />
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex gap-5">
          <ButtonLink href="#" text="Join Membership" />
          <ButtonLink href="#" text="Join WhatsApp Community" />
          <ButtonLink href="#" text="Join Discord Server" />
        </div>
        <div className="flex gap-10">
          <InputText
            type="text"
            id="email"
            placeholder="johndoe@example.com"
            isRequired={true}
          />
          <Button
            label="Join Newsletter"
            backgroundColor="#1B71D8"
            textColor="white"
          />
        </div>
        <SocialIconList />
      </div>
    </div>
  );
}
