// import intlTelInput from 'intl-tel-input';

// export const phoneInstances = new Map();

// const inputs = document.querySelectorAll('.phone-input');

// inputs.forEach(input => {
//   const instance = intlTelInput(input, {
//     initialCountry: 'ua',
//     loadUtils: () => import('intl-tel-input/utils'),
//     onlyCountries: [
//       'al',
//       'at',
//       'be',
//       'bg',
//       'hr',
//       'cz',
//       'dk',
//       'ee',
//       'fi',
//       'fr',
//       'de',
//       'gr',
//       'va',
//       'hu',
//       'is',
//       'ie',
//       'it',
//       'lv',
//       'li',
//       'lt',
//       'lu',
//       'md',
//       'nl',
//       'no',
//       'pl',
//       'pt',
//       'ro',
//       'rs',
//       'sk',
//       'si',
//       'es',
//       'se',
//       'ch',
//       'ua',
//       'gb',
//     ],
//     separateDialCode: true,
//     useFullscreenPopup: false,
//     countrySearch: false,
//     strictMode: true,
//     placeholderNumberType: 'MOBILE',
//   });

//   phoneInstances.set(input, instance);
// });

import intlTelInput from 'intl-tel-input';

export const phoneInstances = new Map();

const inputs = document.querySelectorAll('.phone-input');

inputs.forEach(input => {
  const instance = intlTelInput(input, {
    initialCountry: 'ua',
    loadUtils: () => import('intl-tel-input/utils'),
    onlyCountries: [
      'al',
      'at',
      'be',
      'bg',
      'hr',
      'cz',
      'dk',
      'ee',
      'fi',
      'fr',
      'de',
      'gr',
      'va',
      'hu',
      'is',
      'ie',
      'it',
      'lv',
      'li',
      'lt',
      'lu',
      'md',
      'nl',
      'no',
      'pl',
      'pt',
      'ro',
      'rs',
      'sk',
      'si',
      'es',
      'se',
      'ch',
      'ua',
      'gb',
    ],
    separateDialCode: true,
    useFullscreenPopup: false,
    countrySearch: false,
    strictMode: true,
    placeholderNumberType: 'MOBILE',
  });

  phoneInstances.set(input, instance);
});

export function isValidPhone(input) {
  const instance = phoneInstances.get(input);
  return instance?.isValidNumber?.() || false;
}

export function getPhoneData(input) {
  const instance = phoneInstances.get(input);
  return {
    number: instance?.getNumber() || input.value.trim(),
    countryIso: instance?.getSelectedCountryData()?.iso2?.toUpperCase() || '',
  };
}
