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
    }
  },
} as Meta<typeof SettlementList>;

export default meta;

