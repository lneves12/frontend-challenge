import React from 'react';
import renderer from 'react-test-renderer';
import SystemsStatusOverview from "./SystemsStatusOverview";

const mockSystems = [{
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
  "provision_state_id": 2,
  "channels_changed": 1516800657040,
  "cobbler_id": "",
  "machine_id": "a2a7915642f3efeec4837a015a679bc1",
  "hostname": "suma-ref31-cli-sles12sp3-1",
  "created": 1516800657040,
  "modified": 1516800657040
},
  {
    "id": "1000010001",
    "org_id": 1,
    "digital_server_id": "ID-1000010001",
    "server_arch_id": 1029,
    "os": "sles-release",
    "release": "12.3",
    "name": "suma-ref31-cli-sles12sp3-2",
    "description": "Initial Registration Parameters:nOS: sles-releasenRelease: 12.3nCPU Arch: x86_64",
    "info": "",
    "secret": "d910e6d5b694dd01cdb5e9a042b92a20bc09aae85342182b971cf0cc107143a2",
    "creator_id": 1,
    "auto_update": "N",
    "contact_method_id": 0,
    "running_kernel": "4.4.73-5-default",
    "last_boot": 1516800657040,
    "provision_state_id": 1,
    "channels_changed": 1516800657040,
    "cobbler_id": "",
    "machine_id": "a2a7915642f3efeec4837a015a679bc2",
    "hostname": "suma-ref31-cli-sles12sp3-2",
    "created": 1516800657040,
    "modified": 1516800657040
  },
];

describe('renders correctly', () => {
  it('renders correctly with filters ', () => {
    const tree = renderer.create(
      <SystemsStatusOverview
        systems={mockSystems}
        lastUpdated={'1516800657040'}
        onFilterBy={jest.fn()}
        selectedFilters={{
          provision_state_id: [1, 2]
        }}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without filters ', () => {
    const tree = renderer.create(
      <SystemsStatusOverview
        systems={mockSystems}
        lastUpdated={'1516800657040'}
        onFilterBy={jest.fn()}
        selectedFilters={{}}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
