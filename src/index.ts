import './components/chronicle-card';
import './components/chronicle-editor';
import { CARD_NAME, CARD_VERSION } from './constants';

// Register card with HA card picker
const windowWithCards = window as any;
windowWithCards.customCards = windowWithCards.customCards || [];
windowWithCards.customCards.push({
  type: CARD_NAME,
  name: 'Chronicle Card (Fork)',
  description: 'A universal, extensible timeline card for Home Assistant — patched fork',
  preview: true,
  documentationURL: 'https://github.com/claudemangen/ha-chronicle-card-fork',
});

console.info(
  `%c CHRONICLE-CARD-FORK %c v${CARD_VERSION} `,
  'color: #fff; background: #7B1FA2; font-weight: 700; padding: 2px 6px; border-radius: 4px 0 0 4px;',
  'color: #7B1FA2; background: #f3e5f5; font-weight: 500; padding: 2px 6px; border-radius: 0 4px 4px 0;',
);
