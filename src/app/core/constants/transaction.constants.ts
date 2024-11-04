import { createMask } from "@ngneat/input-mask";

export const services = [
  {
    iconName: 'smartphone',
    text: 'Recargas',
  },
  {
    iconName: 'description',
    text: 'Transacciones',
  },
  {
    iconName: 'receipt',
    text: 'Factura',
  },
  {
    iconName: 'rss_feed',
    text: 'Operadores',
  },
  {
    iconName: 'location_on',
    text: 'Oficinas',
  },
  {
    iconName: 'comment',
    text: 'Contáctanos',
  },
];

export const showComponent = {
  smartphone: false,
  description: false,
  receipt: false,
  rss_feed: false,
  location_on: false,
  comment: false,
};

export const currencyMask = createMask({
  alias: 'numeric',
  groupSeparator: ',',
  autoUnmask: true,
  digits: '2',
  digitsOptional: true,
  prefix: '$ ',
  placeholder: '0',
  max: '100000',
  min: '1000',
});

export const phoneMask = createMask({
  mask: '3999999999'
});
