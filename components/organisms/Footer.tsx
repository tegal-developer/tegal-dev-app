'use client';

import CopyrightItem from '../molecules/CopyrightItem';
import FooterNavigation from '../molecules/FooterNavigation';

export default function Footer({ footerContent }: { footerContent: any }) {
  return (
    <footer
      className="
        bg-[#1B71D8]
        dark:bg-gray-900 
        text-white
        dark:text-white
        p-5
        dark:border-y
        dark:border-gray-700
        text-xs
        tracking-wider"
    >
      <div
        className="
        lg:container
        lg:max-w-[1800px]
        lg:mx-auto
        flex
        flex-col-reverse
        md:flex-row
        gap-5
        justify-between
        items-center"
      >
        <CopyrightItem content={footerContent?.content} />
        <FooterNavigation
          instagramURL={footerContent?.instagram_url}
          linkedinURL={footerContent?.linkedin_url}
          githubURL={footerContent?.github_url}
        />
      </div>
    </footer>
  );
}
