import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { cn } from '@/lib/utils';
import { ChevronUpIcon } from '@radix-ui/react-icons';

function Accordion({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('border-b last:border-b-0', className)}
      {...props}
    />
  );
}

type AccordionTriggerProps = React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  triggerDirectionUp?: boolean;
};

function AccordionTrigger({ className, children, triggerDirectionUp = false, ...props }: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="flex w-full items-start">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'w-full focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1  hover:cursor-pointer items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50',
          className,
        )}
        {...props}
      >
        {children}
        {triggerDirectionUp ? (
          <ChevronUpIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 mt-3 transition-transform duration-200" />
        ) : (
          <ChevronUpIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 mt-3 transition-transform duration-200 rotate-180" />
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="w-full data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn('pt-0 pb-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
