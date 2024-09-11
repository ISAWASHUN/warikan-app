import SettlementList from "./SettlementList";

const meta = {
  title: 'SettlementList',
  component: SettlementList,
  argTypes: {
    settlements: {
      description: 'The list of settlements to display',
      table: {
        type: {
          summary: 'Settlement[]',
        },
      },
    },
    onSettlementClick: {
      description: 'Callback for when a settlement is clicked',
      table: {
        type: {
          summary: 'Function',
        },
      },
    },
  },
} as Meta<typeof SettlementList>;

export default meta;

