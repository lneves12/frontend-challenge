import { shape, number, string, oneOf } from 'prop-types';
import {getAllStates} from "../business/systemsState";

export const systemType = shape({
  "id": string.isRequired,
  "org_id": number.isRequired,
  "digital_server_id": string.isRequired,
  "server_arch_id": number.isRequired,
  "os": string.isRequired,
  "release": string.isRequired,
  "name": string.isRequired,
  "description": string.isRequired,
  "info": string.isRequired,
  "secret": string.isRequired,
  "creator_id": number.isRequired,
  "auto_update": string.isRequired,
  "contact_method_id": number.isRequired,
  "running_kernel": string.isRequired,
  "last_boot": number.isRequired,
  "provision_state_id": oneOf(getAllStates().map(state => state.value)),
  "channels_changed": number.isRequired,
  "cobbler_id": string.isRequired,
  "machine_id": string.isRequired,
  "hostname": string.isRequired,
  "created": number.isRequired,
  "modified": number.isRequired
});


