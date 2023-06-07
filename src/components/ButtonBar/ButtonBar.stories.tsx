import { Meta, StoryObj } from '@storybook/react';
import ButtonBar from './ButtonBar';
import {CircularProgress, Typography} from '@material-ui/core';

const meta = {
  component: ButtonBar,
  title: "ArtisanUX/ButtonBar",
  argTypes: { }
};

export default meta;

export const Basic = (args) => (
  <ButtonBar {...args} />
);

Basic.args = {
  buttons: [
    { label: "Cancel", onClick: () => alert("canceled")},
    { label: "Accept", onClick: () => alert("accepted!") }
  ]
}

export const LeftAlignedBasic = (args) => <ButtonBar {...args} />;
LeftAlignedBasic.args = {
  buttons: [
    { label: "Accept", onClick: () => alert("accepted!") },
    { label: "Cancel", onClick: () => alert("canceled")},
  ],
  leftAlign: true
}
