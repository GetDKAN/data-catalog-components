import React from 'react';

import Modal from '../../components/Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Docz Modal',
  nodeId: '___gatsby',
  children: <p>I am a child of the modal</p>,
};
