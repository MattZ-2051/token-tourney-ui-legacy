import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { UserProvider } from '@auth0/nextjs-auth0';
import Header from '../components/Header';

export default {
  component: Header,
} as Meta;

const mockedData = {
  user: {
    name: 'John Doe',
  },
};

export const LoggedInHeader: Story = (args) => (
  <UserProvider user={mockedData.user}>
    <Header {...args} />
  </UserProvider>
);

export const LoggedOutHeader: Story = (args) => (
  <UserProvider>
    <Header {...args} />
  </UserProvider>
);
