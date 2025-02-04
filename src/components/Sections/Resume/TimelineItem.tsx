import {FC, memo} from 'react';

// Use a type-only import for TimelineItem
import type {TimelineItem as TimelineItemType} from '../../../data/dataDef';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

// Use a different name for the component
const TimelineItemComponent: FC<{item: TimelineItemType}> = memo(({item}) => {
  const {title, date, location, content, href} = item;
  if (href) {
    return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
      </div>
      <div className="flex items-center">
        {content} <a href={href} className="ml-2 text-orange-500">Download <FontAwesomeIcon icon={faFileArrowDown} /></a>
      </div>
    </div>
    );
  }
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
      </div>
      {content}
    </div>
  );
});

TimelineItemComponent.displayName = 'TimelineItem';
export default TimelineItemComponent;