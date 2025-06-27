import React from 'react';
import './Actions.css';
import { Tabs, Collapse } from 'antd';
import Details from './_components/Details';
import Heading from '../shared_components/Headings/Heading';
// import { div } from 'three/tsl';

const { TabPane } = Tabs;
const { Panel } = Collapse;

// 🔹 Reusable InnerTabs component that accepts dynamic tab data
const InnerTabs = ({ tabs }) => (
  <Tabs defaultActiveKey="1" centered className="bg-[#1E293B] custom-tabs2 text-white">
    {tabs.map(({ key, label, content }) => (
      <TabPane tab={label} key={key}>
        {content}
      </TabPane>
    ))}
  </Tabs>
);

// 🔹 Collapse component with injected tab list
const CollapseWithInnerTabs = ({ innerTabs }) => (
  <Collapse accordion className="bg-[#2563EB] text-white custom-collapse">
    <Panel
      header="Open Section"
      key="1"
      className="custom-panel"
      showArrow={false}
    >
      <InnerTabs tabs={innerTabs} />
    </Panel>
  </Collapse>
);

// 🔹 Define tab data for each main tab
const tabsConfig = {
  TranscriptX: [
    { key: '1', label: 'Example 1', content: <Details /> },
    { key: '2', label: 'Example 2', content: 'TranscriptX - Content 2' },
    { key: '3', label: 'Example 3', content: 'TranscriptX - Content 3' },
  ],
  Chartwright: [
    { key: '1', label: 'Example 1', content: 'Chartwright - Content 1' },
    { key: '2', label: 'Example 2', content: 'Chartwright - Content 2' },
  ],
  Redactify: [
    { key: '1', label: 'Example 1', content: 'Redactify - Content 1' },
    { key: '2', label: 'Example 2', content: 'Redactify - Content 2' },
    { key: '3', label: 'Example 3', content: 'Redactify - Content 3' },
    { key: '4', label: 'Example 4', content: 'Redactify - Content 4' },
  ],
  Validify: [
    { key: '1', label: 'Example 1', content: 'Validify - Content 1' },
    { key: '2', label: 'Example 2', content: 'Validify - Content 2' },
    { key: '3', label: 'Example 3', content: 'Validify - Content 3' },
    { key: '4', label: 'Example 4', content: 'Validify - Content 4' },
    { key: '5', label: 'Example 5', content: 'Validify - Content 5' },
  ],
};

const Actions = () => (
<div className='bg-[#1E293B]'>
    <Heading text={'See Our Solutions in Action'} />
      <div className="w-[60vw] text-white p-8 mx-auto">
    <Tabs defaultActiveKey="1" centered className="custom-tabs">
      <TabPane tab="TranscriptX" key="1">
        <CollapseWithInnerTabs innerTabs={tabsConfig.TranscriptX} />
      </TabPane>
      <TabPane tab="Chartwright" key="2">
        <CollapseWithInnerTabs innerTabs={tabsConfig.Chartwright} />
      </TabPane>
      <TabPane tab="Redactify" key="3">
        <CollapseWithInnerTabs innerTabs={tabsConfig.Redactify} />
      </TabPane>
      <TabPane tab="Validify" key="4">
        <CollapseWithInnerTabs innerTabs={tabsConfig.Validify} />
      </TabPane>
    </Tabs>
  </div>
</div>
);

export default Actions;
