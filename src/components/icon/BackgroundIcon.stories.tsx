import { Meta, StoryObj } from '@storybook/react';
import { Vector } from '../../assets/icons/BackgroundIcon/Vector';
import { University } from '../../assets/icons/BackgroundIcon/University';
import { Global } from '../../assets/icons/BackgroundIcon/Global';
import { OnDemad } from '../../assets/icons/BackgroundIcon/OnDemad';
import { Aligned } from '../../assets/icons/BackgroundIcon/Aligned';
import { Explore } from '../../assets/icons/BackgroundIcon/Explore';
import { Career } from '../../assets/icons/BackgroundIcon/Career';
import { PowerTeam } from '../../assets/icons/BackgroundIcon/PowerTeam';
import { World } from '../../assets/icons/BackgroundIcon/World';
import { Interaction } from '../../assets/icons/BackgroundIcon/Interaction';
import { Seo } from '../../assets/icons/BackgroundIcon/Seo';
import { Ecommerce } from '../../assets/icons/BackgroundIcon/Ecommerce';
import { Product } from '../../assets/icons/BackgroundIcon/Product';
import { Engage } from '../../assets/icons/BackgroundIcon/Engage';
import { TalentTeam } from '../../assets/icons/BackgroundIcon/TalentTeam';
import { User } from '../../assets/icons/BackgroundIcon/User';
import { Students } from '../../assets/icons/BackgroundIcon/Students';
import { Rss } from '../../assets/icons/BackgroundIcon/Rss';
import { Flexible } from '../../assets/icons/BackgroundIcon/Flexible';
import { Commerce } from '../../assets/icons/BackgroundIcon/Commerce';
import { Asists } from '../../assets/icons/BackgroundIcon/Asists';
import { ConnectLine } from '../../assets/icons/BackgroundIcon/ConnectLine';
import { Calender } from '../../assets/icons/BackgroundIcon/Calender';
import { Paid } from '../../assets/icons/BackgroundIcon/Paid';
import { Click } from '../../assets/icons/BackgroundIcon/Click';
import { Flexible_2 } from '../../assets/icons/BackgroundIcon/Flexible_2';
import { High } from '../../assets/icons/BackgroundIcon/High';
import { Secure } from '../../assets/icons/BackgroundIcon/Secure';
import { Carbon } from '../../assets/icons/BackgroundIcon/Carbon';
import { ChatBot } from '../../assets/icons/BackgroundIcon/ChatBot';
import { ShowCase } from '../../assets/icons/BackgroundIcon/ShowCase';
import { Resarch } from '../../assets/icons/BackgroundIcon/Resarch';
import { Protoying } from '../../assets/icons/BackgroundIcon/Protoying';
import { ProductSearch } from '../../assets/icons/BackgroundIcon/ProductSearch';
import { DomainResearch } from '../../assets/icons/BackgroundIcon/DomainResearch';
import { Proccess } from '../../assets/icons/BackgroundIcon/Proccess';
import { Insights } from '../../assets/icons/BackgroundIcon/Insights';
import { Materila } from '../../assets/icons/BackgroundIcon/Materila';

const meta: Meta<typeof Vector> = {
  title: 'Icons/BackgroundIcon',
  component: Vector,
  argTypes: {
    width: {
      control: 'number',
      description: 'The width of the icon (default: 24)',
      defaultValue: 24,
    },
    height: {
      control: 'number',
      description: 'The height of the icon (default: 24)',
      defaultValue: 24,
    },
    color: {
      control: 'color',
      description: 'The color of the icon',
      defaultValue: 'black',
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable vector document icon, supporting different sizes and colors.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Vector>;

export const VectorIcon: Story = {
  render: (args) => <Vector {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#FF9F43',
    backgroundColor: '#FF9F43',
  },
};
export const UniversityIcon: Story = {
  render: (args) => <University {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#0D6EFD',
    backgroundColor: '#0D6EFD',
  },
};

export const GlobalIcon: Story = {
  render: (args) => <Global {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#28C76F',
    backgroundColor: '#28c76F',
  },
};

export const OnDemadIcon: Story = {
  render: (args) => <OnDemad {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#651FFF',
    backgroundColor: '#651FFF',
  },
};
export const AlignedIcon: Story = {
  render: (args) => <Aligned {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#00CFE8',
    backgroundColor: '#00CFE8',
  },
};

export const ExploreIcon: Story = {
  render: (args) => <Explore {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#FF9F43',
    backgroundColor: '#FF9F43',
  },
};

export const CareerIcon: Story = {
  render: (args) => <Career {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#0D6EFD',
    backgroundColor: '#0D6EFD',
  },
};

export const PowerTeamIcon: Story = {
  render: (args) => <PowerTeam {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#651FFF',
    backgroundColor: '#651FFF',
  },
};

export const WorldIcon: Story = {
  render: (args) => <World {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#00CFE8',
    backgroundColor: '#00CFE8',
  },
};

export const InteractionIcon: Story = {
  render: (args) => <Interaction {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#FF9A62',
    backgroundColor: '#FF9F43',
  },
};

export const SeoIcon: Story = {
  render: (args) => <Seo {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#0D6EFD',
    backgroundColor: '#0D6EFD',
  },
};
export const EcommerceIcon: Story = {
  render: (args) => <Ecommerce {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#651fff',
  },
};

export const ProductIcon: Story = {
  render: (args) => <Product {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#00CFE8',
  },
};

export const EngageIcon: Story = {
  render: (args) => <Engage {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#46D8D5',
    backgroundColor: '#46D8D5',
  },
};

export const TalentTeamIcon: Story = {
  render: (args) => <TalentTeam {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#FF9F43',
    backgroundColor: '#FF9F43',
  },
};

export const UserIcon: Story = {
  render: (args) => <User {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#0D6EFD',
    backgroundColor: '#0D6EFD',
  },
};

export const StudentsIcon: Story = {
  render: (args) => <Students {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#FF9F43',
    backgroundColor: '#FF9F43',
  },
};

export const RssIcon: Story = {
  render: (args) => <Rss {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#00CFE8',
    backgroundColor: '#00CFE8',
  },
};

export const FlexibleIcon: Story = {
  render: (args) => <Flexible {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#0D6EFD',
    backgroundColor: '#0D6EFD',
  },
};

export const CommerceIcon: Story = {
  render: (args) => <Commerce {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#0D6EFD',
    backgroundColor: '#0D6EFD',
  },
};

export const AsistsIcon: Story = {
  render: (args) => <Asists {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#651FFF',
  },
};

export const ConnectLineIcon: Story = {
  render: (args) => <ConnectLine {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#46D8D5',
    backgroundColor: '#46D8D5',
  },
};

export const CalenderIcon: Story = {
  render: (args) => <Calender {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#2196F3',
    backgroundColor: '#0D6EFD',
  },
};

export const PaidIcon: Story = {
  render: (args) => <Paid {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#FF9F43',
  },
};

export const ClickIcon: Story = {
  render: (args) => <Click {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#28C76F',
    backgroundColor: '#28C76F',
  },
};

export const Flexible_2Icon: Story = {
  render: (args) => <Flexible_2 {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#2196F3',
    backgroundColor: '#0D6EFD',
  },
};

export const HighIcon: Story = {
  render: (args) => <High {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#FF9F43',
    backgroundColor: '#0D6EFD',
  },
};
export const SecureIcon: Story = {
  render: (args) => <Secure {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#28C76F',
  },
};

export const CarbonIcon: Story = {
  render: (args) => <Carbon {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#FF9F43',
  },
};

export const ChatBotIcon: Story = {
  render: (args) => <ChatBot {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#2196F3',
    backgroundColor: '#0D6EFD',
  },
};

export const ShowCaseIcon: Story = {
  render: (args) => <ShowCase {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#28C76F',
  },
};

export const ResarchIcon: Story = {
  render: (args) => <Resarch {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#28C76F',
    backgroundColor: '#28C76F',
  },
};

export const ProtoyingIcon: Story = {
  render: (args) => <Protoying {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#FF9F43',
  },
};

export const ProductSearchIcon: Story = {
  render: (args) => <ProductSearch {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#0D6EFD',
  },
};
export const DomainResearchIcon: Story = {
  render: (args) => <DomainResearch {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#651FFF',
    backgroundColor: '#651FFF',
  },
};

export const ProccessIcon: Story = {
  render: (args) => <Proccess {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#28C76F',
    backgroundColor: '#28C76F',
  },
};

export const InsightsIcon: Story = {
  render: (args) => <Insights {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#FF9F43',
  },
};

export const MaterilaIcon: Story = {
  render: (args) => <Materila {...args} />,
  args: {
    width: 75,
    height: 75,
    color: '#46D8D5',
    backgroundColor: '#46D8D5',
  },
};
