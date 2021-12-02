import AmazingComponent from '../src/AmazingComponent.vue';

export default {
  component: AmazingComponent,
  title: 'Components/AmazingComponent',
};

const Template = (args) => ({
  components: { AmazingComponent },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<AmazingComponent />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'AmazingComponent',
};