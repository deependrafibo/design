import { CardWithRadioGroup } from './CardWithRadioGroup';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/CardWithRadioGroup',
  component: CardWithRadioGroup,
  argTypes: {
    onChange: {
      action: 'selectedId',
      description: 'Fires when the selected card changes',
    },
  },
};

export const Default = () => (
  <CardWithRadioGroup
    options={[
      { id: '1', title: 'Option 1', description: 'Description for Option 1' },
      { id: '2', title: 'Option 2', description: 'Description for Option 2' },
      { id: '3', title: 'Option 3', description: 'Description for Option 3' },
    ]}
    defaultSelectedId="1"
    onChange={action('Card selected')}
  />
);

export const CustomDefaultSelection = () => (
  <CardWithRadioGroup
    options={[
      { id: '1', title: 'Option 1', description: 'Description for Option 1' },
      { id: '2', title: 'Option 2', description: 'Description for Option 2' },
      { id: '3', title: 'Option 3', description: 'Description for Option 3' },
    ]}
    defaultSelectedId="2"
    onChange={action('Card selected')}
  />
);

export const EmptyState = () => (
  <CardWithRadioGroup options={[]} defaultSelectedId="" onChange={action('Card selected')} />
);
