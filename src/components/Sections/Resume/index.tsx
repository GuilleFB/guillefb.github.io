import {FC, memo} from 'react';

import {useEducation, useExperience, SectionId, useSkills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';
import TimelineItemExperience from './TimelineItemExperience';
import { useTranslation } from 'react-i18next';

const Resume: FC = memo(() => {
  const { t } = useTranslation();

  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title={t('education_title')}>
          {useEducation().map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title={t('work_title')}>
          {useExperience().map((item, index) => (
            <TimelineItemExperience item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title={t('skills.title')}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {useSkills().map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
