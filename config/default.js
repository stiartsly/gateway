/*
 * Things Gateway Default Configuration.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

'use strict';

module.exports = {
  // Expose CLI
  cli: true,

  ports: {
    https: 4443,
    http:  8080
  },
  // Whether the gateway is behind port forwarding and should use simplified
  // port-free urls
  behindForwarding: true,
  adapters : {
    gpio: {
      enabled: false,
      path: './adapters/gpio',
      pins: {
        18: {
          name: 'led',
          direction: 'out',   // 'in' or 'out'
          value: 0            // value on required when 'direction' is 'out'
        },
      }
    },
    example_plugin: {
      enabled: true,
      plugin: true,
      path: './adapters/example-plugin',
    },
    zigbee: {
      enabled: true,
      path: './adapters/zigbee',
    },
    zwave: {
      enabled: true,
      path: './adapters/zwave',
    }
  },
  adapterManager: {
    pairingTimeout: 3 * 60,   // seconds
  },
  database: {
    filename: './db.sqlite3',
    removeBeforeOpen: false,
  },
  ipc: {
    protocol: 'ipc',
  },
  settings: {
    directory: './settings', // Directory to store settings in
    defaults: {
      experiments: {
        floorplan: {
          enabled: true,
        },
        rules: {
          enabled: true,
        },
      },
    },
  },
  uploads: {
    directory: '../static/uploads/' // Directory to store uploads in
  },
  authentication: {
    enabled: true,
    defaultUser: null,
    secret: 'top secret 51'      // DO NOT USE THIS IN PRODUCTION
  },
  ssltunnel: {
    enabled: true,
    registration_endpoint: 'https://api.mozilla-iot.org:8443',
    domain: 'mozilla-iot.org',
    pagekite_cmd: './pagekite.py',
    port: 443,
    certemail: 'certificate@mozilla-iot.org'
  },
  bcryptRounds: 2
};
