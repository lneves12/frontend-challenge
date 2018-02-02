import React from 'react';
import SystemOverview from './SystemOverview';
import renderer from 'react-test-renderer';
import {MemoryRouter} from "react-router";

const mockSystem = {
  "id": "1000010000",
  "org_id": 1,
  "digital_server_id": "ID-1000010000",
  "server_arch_id": 1029,
  "os": "sles-release",
  "release": "12.3",
  "name": "suma-ref31-cli-sles12sp3-1",
  "description": "Initial Registration Parameters:nOS: sles-releasenRelease: 12.3nCPU Arch: x86_64",
  "info": "",
  "secret": "d910e6d5b694dd01cdb5e9a042b92a20bc09aae85342182b971cf0cc107143a1",
  "creator_id": 1,
  "auto_update": "N",
  "contact_method_id": 0,
  "running_kernel": "4.4.73-5-default",
  "last_boot": 1516800657040,
  "provision_state_id": 1,
  "channels_changed": 1516800657040,
  "cobbler_id": "",
  "machine_id": "a2a7915642f3efeec4837a015a679bc1",
  "hostname": "suma-ref31-cli-sles12sp3-1",
  "created": 1516800657040,
  "modified": 1516800657040
};

it('renders correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <SystemOverview system={mockSystem}/>
    </MemoryRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
