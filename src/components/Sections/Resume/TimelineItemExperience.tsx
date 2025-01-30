import {FC, memo, Fragment} from 'react';

// Use a type-only import for TimelineItem
import type {TimelineItem as TimelineItemType} from '../../../data/dataDef';

const renderContent = (content: any) => {
  if (typeof content === 'string') {
    return <li>{content}</li>; // Frases normales como <li>
  }

  if (Array.isArray(content)) {
    return (
      <ul className="space-y-1">
        {content.map((subItem) => 
          Array.isArray(subItem) ? (
            <li key={subItem.toString()}>
              <ul className="list-disc pl-5">
                {subItem.map((nestedItem) => (
                  <li key={nestedItem.toString()} className="ml-5 text-gray-700">{nestedItem}</li>
                ))}
              </ul>
            </li>
          ) : (
            <Fragment key={subItem.toString()}>
              <li className="text-gray-900">{subItem}</li>
            </Fragment>
          )
        )}
      </ul>
    );
  }

  return null;
};



// Use a different name for the component
const TimelineItemComponent: FC<{item: TimelineItemType}> = memo(({item}) => {
  const {title, date, location, content} = item;
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
      {renderContent(content)}
    </div>
  );
});

TimelineItemComponent.displayName = 'TimelineItem';
export default TimelineItemComponent;