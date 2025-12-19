import classNames from 'classnames';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CustomAccordionProps, AccordionType } from './types';

export const CustomAccordion: React.FC<CustomAccordionProps> = ({
  type = AccordionType.SINGLE,
  collapsible = true,
  itemClassName = 'w-full p-5 border-0',
  triggerClassName = 'w-full p-5 hover:no-underline',
  contentClassName = 'w-full p-5',
  value,
  onValueChange,
  isOpen,
  ...rest
}) => {
  const renderItem = (value: string, trigger: React.ReactNode, content: React.ReactNode) => (
    <AccordionItem
      key={value}
      value={value}
      className={classNames(itemClassName, {
        'first:border-0 border-t border-t-secondary': type === 'multiple' && collapsible,
      })}
    >
      <AccordionTrigger className={triggerClassName} triggerDirectionUp={isOpen}>
        {trigger}
      </AccordionTrigger>
      <AccordionContent className={contentClassName}>{content}</AccordionContent>
    </AccordionItem>
  );

  const sections = 'sections' in rest ? rest.sections : [rest.section];
  return (
    <>
      {type === AccordionType.SINGLE ? (
        <Accordion
          type={AccordionType.SINGLE}
          collapsible={collapsible}
          value={typeof value === 'string' ? value : undefined}
          onValueChange={onValueChange as ((value: string) => void) | undefined}
          className="w-full "
        >
          <div className="w-full">
            {sections.map(({ value, trigger, content }) => renderItem(value, trigger, content))}
          </div>
        </Accordion>
      ) : (
        <Accordion
          type={AccordionType.MULTIPLE}
          value={Array.isArray(value) ? value : undefined}
          onValueChange={onValueChange as ((value: string[]) => void) | undefined}
          className="w-full"
        >
          <div className="w-full">
            {sections.map(({ value, trigger, content }) => renderItem(value, trigger, content))}
          </div>
        </Accordion>
      )}
    </>
  );
};
