
import IsTradingInput from "./index.js";
import "../../../index.css";


//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Is Trading Input",
  component: IsTradingInput,
  argTypes: {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <IsTradingInput {...args} />;

export const IsTradingInputExample = Template.bind({});

IsTradingInputExample.args = {
  updateIsTrading: () => console.log("change"),
  currentValue: true
};
