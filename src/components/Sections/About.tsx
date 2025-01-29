import classNames from 'classnames';
import Image from 'next/image';
import { FC, memo } from 'react';
import { useAboutData, SectionId } from '../../data/data';
import Section from '../Layout/Section';
import { useTranslation } from 'react-i18next';

const About: FC = memo(() => {
  const { profileImageSrc, description, aboutItems } = useAboutData();
  const { t } = useTranslation();

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-4', { 'md:grid-cols-4': !!profileImageSrc })}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-60 md:w-60">
              <Image alt="about-me-image" className="h-full w-full object-cover" src={profileImageSrc} />
            </div>
          </div>
        )}
        <div className={classNames('col-span-1 flex flex-col gap-y-6', { 'md:col-span-3': !!profileImageSrc })}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">{t('about.title')}</h2>
            <div className="prose prose-sm text-gray-300 sm:prose-base">{description}</div>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({ label, text, Icon }, idx) => (
              <li className="col-span-1 flex items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-6 w-6 text-white" />}
                <span className="text-sm font-bold text-white">{label}:</span>
                <span className="text-sm text-gray-300">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
