import './1-Button.stories';
import './2-Constants.stories';
import './3-LinearGradient.stories';
import './4-Font.stories';


// YourComponent.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { YourComponent } from './YourComponent';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
} as ComponentMeta<typeof YourComponent>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof YourComponent> = (args) => <YourComponent {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};