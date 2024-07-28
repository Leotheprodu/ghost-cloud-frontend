import countryCodesJson from '../data/country-codes.json';

export const appName = 'Ghost Cloud';
export const Server1API = 'http://localhost:3000';

export const userRoles = {
  Admin: {
    id: 1,
    name: 'admin',
  },
  User: {
    id: 2,
    name: 'user',
  },
};
export const countryCodes: {
  country: string;
  code: string;
  currency: string;
  langCountry: string;
}[] = countryCodesJson;

export const translates = {
  active: 'Activo',
  inactive: 'Inactivo',
};
