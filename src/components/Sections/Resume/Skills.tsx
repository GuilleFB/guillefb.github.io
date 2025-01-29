import React, { FC } from 'react';
import { Skill as SkillType, SkillGroup as SkillGroupType } from '../../../data/dataDef';

// SkillGroup: No necesita memo porque `skillGroup` cambiará dinámicamente con traducciones
export const SkillGroup: FC<{ skillGroup: SkillGroupType }> = ({ skillGroup }) => {
  const { name, skills } = skillGroup;

  return (
    <div className="flex flex-col">
      <span className="text-center text-lg font-bold">{name}</span>
      <div className="flex flex-col gap-y-2">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export const Skill: FC<{ skill: SkillType }> = ({ skill }) => {
  const { name, level, max = 10 } = skill;
  const percentage = max > 0 ? Math.round((level / max) * 100) : 0;

  return (
    <div className="flex flex-col">
      <span className="ml-2 text-sm font-medium">{name}</span>
      <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
        <div
          className="h-full rounded-full bg-orange-400"
          style={{ width: `${percentage}%` }}
          aria-label={`${name} proficiency ${percentage}%`}
        />
      </div>
    </div>
  );
};

export const MemoizedSkill = React.memo(Skill);

