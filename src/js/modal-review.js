import { isValidPhone, getPhoneData } from '../js/intl-tel-select.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('[data-review-form]');
  if (!form) return;

  const submitBtn = form.querySelector('.send-btn');
  const storageKey = 'review-form-data';

  const fields = {
    name: form.querySelector('input[name="customer-name"]'),
    email: form.querySelector('input[name="customer-email"]'),
    phone: form.querySelector('input[name="customer-phone-num"]'),
    message: form.querySelector('textarea[name="customer-comment"]'),
  };

  // 🟡 1. Загрузка данных из localStorage при инициализации
  const savedData = JSON.parse(localStorage.getItem(storageKey));
  if (savedData) {
    if (savedData.name) fields.name.value = savedData.name;
    if (savedData.email) fields.email.value = savedData.email;
    if (savedData.phone) fields.phone.value = savedData.phone;
    if (savedData.message) fields.message.value = savedData.message;
  }

  const validators = {
    name: value => /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ]{3,}$/u.test(value.trim()),
    email: value => /^\S+@\S+\.\S+$/.test(value.trim()),
    phone: () => isValidPhone(fields.phone),
    message: value => value.trim().length >= 5 && value.trim().length <= 300,
  };

  function validateField(fieldName) {
    const field = fields[fieldName];
    const isValid =
      fieldName === 'phone'
        ? validators.phone()
        : validators[fieldName](field.value);
    field.style.borderColor = isValid ? 'green' : 'red';
  }

  function validateForm() {
    const allValid = Object.keys(fields).every(key => {
      return key === 'phone'
        ? validators[key]()
        : validators[key](fields[key].value);
    });
    submitBtn.disabled = !allValid;
  }

  // 🟡 2. Сохраняем данные в localStorage при любом изменении
  function saveToStorage() {
    const formData = {
      name: fields.name.value.trim(),
      email: fields.email.value.trim(),
      phone: fields.phone.value.trim(),
      message: fields.message.value.trim(),
    };
    localStorage.setItem(storageKey, JSON.stringify(formData));
  }

  Object.keys(fields).forEach(key => {
    fields[key].addEventListener('blur', () => {
      validateField(key);
      validateForm();
    });

    fields[key].addEventListener('input', () => {
      validateForm();
      saveToStorage();
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (submitBtn.disabled) return;

    const { number, countryIso } = getPhoneData(fields.phone);

    const formData = {
      name: fields.name.value.trim(),
      email: fields.email.value.trim(),
      phone: number,
      phone_country_iso: countryIso,
      message: fields.message.value.trim(),
    };

    console.log('🟢 Отзыв отправлен:', formData);

    form.reset();
    localStorage.removeItem(storageKey);
    Object.values(fields).forEach(field => {
      field.style.borderColor = '';
    });
    validateForm();
  });
});
