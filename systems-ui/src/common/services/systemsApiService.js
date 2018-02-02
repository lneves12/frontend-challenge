/* global fetch */

import 'whatwg-fetch';

import {normalGetSystemsApi} from './utils/get';

export function getAllProducts() {
  return normalGetSystemsApi('/systems', {});
};
