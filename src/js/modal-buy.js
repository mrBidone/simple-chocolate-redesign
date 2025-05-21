// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.querySelector('.modal-buy-form');
//   const submitBtn = form.querySelector('.submit-btn');

//   const fields = {
//     name: form.querySelector('input[name="customer-name"]'),
//     surname: form.querySelector('input[name="customer-surname"]'),
//     email: form.querySelector('input[name="customer-email"]'),
//     phone: form.querySelector('input[name="customer-phone-num"]'),
//     comment: form.querySelector('textarea[name="customer-comment"]'),
//   };

//   const productItems = document.querySelectorAll('.modal-products-list-item');
//   let selectedProduct = null;

//   productItems.forEach(item => {
//     item.addEventListener('click', () => {
//       productItems.forEach(el => el.classList.remove('selected'));
//       item.classList.add('selected');
//       selectedProduct = item
//         .querySelector('.modal-buy-price')
//         .textContent.trim();
//       validateForm();
//     });
//   });

//   const validators = {
//     name: value => /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ]{3,}$/u.test(value.trim()),
//     surname: value => /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ]{3,}$/u.test(value.trim()),
//     email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
//     phone: value => value.trim().length > 5, // Placeholder — позже подключим lib
//     comment: value => value.trim().length >= 3 && value.trim().length <= 100,
//   };

//   function validateField(fieldName) {
//     const field = fields[fieldName];
//     const isValid = validators[fieldName](field.value);

//     field.style.borderColor = isValid ? 'green' : 'red';
//     return isValid;
//   }
//   Object.keys(fields).forEach(key => {
//     fields[key].addEventListener('blur', () => {
//       validateField(key);
//       validateForm();
//     });

//     fields[key].addEventListener('input', () => {
//       validateForm();
//     });
//   });

//   // ✅ Проверка всей формы
//   function validateForm() {
//     const allValid = Object.keys(fields).every(key =>
//       validators[key](fields[key].value)
//     );

//     const productSelected = Boolean(selectedProduct);
//     submitBtn.disabled = !(allValid && productSelected);
//   }

//   // ✅ Сбор данных при отправке
//   form.addEventListener('submit', e => {
//     e.preventDefault();

//     if (submitBtn.disabled) return;

//     const formData = {
//       product: selectedProduct,
//       name: fields.name.value.trim(),
//       surname: fields.surname.value.trim(),
//       email: fields.email.value.trim(),
//       phone: fields.phone.value.trim(),
//       comment: fields.comment.value.trim(),
//     };

//     console.log('🟢 Данные для отправки:', formData);
//     // Пока только лог. Потом можно отправить через fetch / emailjs и т.д.
//   });
// });

// import { phoneInstances } from './intl-tel-select.js';

// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.querySelector('.modal-buy-form');
//   const submitBtn = form.querySelector('.submit-btn');

//   const fields = {
//     name: form.querySelector('input[name="customer-name"]'),
//     surname: form.querySelector('input[name="customer-surname"]'),
//     email: form.querySelector('input[name="customer-email"]'),
//     phone: form.querySelector('input[name="customer-phone-num"]'),
//     comment: form.querySelector('textarea[name="customer-comment"]'),
//   };

//   const productItems = document.querySelectorAll('.modal-products-list-item');
//   let selectedProduct = null;

//   productItems.forEach(item => {
//     item.addEventListener('click', () => {
//       productItems.forEach(el => el.classList.remove('selected'));
//       item.classList.add('selected');
//       selectedProduct = item
//         .querySelector('.modal-buy-price')
//         .textContent.trim();
//       validateForm();
//     });
//   });

//   const validators = {
//     name: value => /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ]{3,}$/u.test(value.trim()),
//     surname: value => /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ]{3,}$/u.test(value.trim()),
//     email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
//     phone: value => {
//       const iti = phoneInstances.get(fields.phone);
//       return iti?.isValidNumber?.() || false;
//     },
//     comment: value => value.trim().length >= 3 && value.trim().length <= 100,
//   };

//   function validateField(fieldName) {
//     const field = fields[fieldName];
//     const isValid = validators[fieldName](field.value);
//     field.style.borderColor = isValid ? 'green' : 'red';
//   }

//   Object.keys(fields).forEach(key => {
//     fields[key].addEventListener('blur', () => {
//       validateField(key);
//       validateForm();
//     });

//     fields[key].addEventListener('input', () => {
//       validateForm();
//     });
//   });

//   function validateForm() {
//     const allValid = Object.keys(fields).every(key =>
//       validators[key](fields[key].value)
//     );

//     const productSelected = Boolean(selectedProduct);
//     submitBtn.disabled = !(allValid && productSelected);
//   }

//   form.addEventListener('submit', e => {
//     e.preventDefault();
//     if (submitBtn.disabled) return;

//     const iti = phoneInstances.get(fields.phone);
//     const fullPhoneNumber = iti?.getNumber() || fields.phone.value.trim();
//     const countryIso = iti?.getSelectedCountryData()?.iso2?.toUpperCase() || '';

//     const formData = {
//       product: selectedProduct,
//       name: fields.name.value.trim(),
//       surname: fields.surname.value.trim(),
//       email: fields.email.value.trim(),
//       phone: fullPhoneNumber,
//       phone_country_iso: countryIso,
//       comment: fields.comment.value.trim(),
//     };

//     console.log('🟢 Данные для отправки:', formData);
//     form.reset();
//     selectedProduct = null;
//     productItems.forEach(el => el.classList.remove('selected'));
//     Object.values(fields).forEach(field => {
//       field.style.borderColor = '';
//     });
//   });
// });

import emailjs from '@emailjs/browser';
import { isValidPhone, getPhoneData } from './intl-tel-select.js';

document.addEventListener('DOMContentLoaded', () => {
  emailjs.init('YTC30gcSXENvou1mq'); // Public key от EmailJS

  const form = document.querySelector('.modal-buy-form');
  if (!form) return;

  const submitBtn = form.querySelector('.submit-btn');
  const LOCAL_STORAGE_KEY = 'modal-buy-data';

  const fields = {
    name: form.querySelector('input[name="customer-name"]'),
    surname: form.querySelector('input[name="customer-surname"]'),
    email: form.querySelector('input[name="customer-email"]'),
    phone: form.querySelector('input[name="customer-phone-num"]'),
    comment: form.querySelector('textarea[name="customer-comment"]'),
  };

  const validators = {
    name: value => /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ]{3,}$/u.test(value.trim()),
    surname: value => /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ]{3,}$/u.test(value.trim()),
    email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
    phone: () => isValidPhone(fields.phone),
    comment: value => value.trim().length >= 3 && value.trim().length <= 100,
  };

  const productItems = document.querySelectorAll('.modal-products-list-item');
  let selectedProduct = null;

  // === 🟡 Загрузка данных из localStorage ===
  const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (savedData) {
    Object.keys(fields).forEach(key => {
      if (savedData[key]) {
        fields[key].value = savedData[key];
      }
    });

    if (savedData.product) {
      productItems.forEach(item => {
        const price = item
          .querySelector('.modal-buy-price')
          ?.textContent.trim();
        if (price === savedData.product) {
          item.classList.add('selected');
          selectedProduct = price;
        }
      });
    }

    validateForm();
  }

  // === 🟡 Обработка выбора продукта ===
  productItems.forEach(item => {
    item.addEventListener('click', () => {
      productItems.forEach(el => el.classList.remove('selected'));
      item.classList.add('selected');
      selectedProduct =
        item.querySelector('.modal-buy-price')?.textContent.trim() || '';
      saveToLocalStorage();
      validateForm();
    });
  });

  function validateField(fieldName) {
    const field = fields[fieldName];
    const isValid = validators[fieldName](field.value);
    field.style.borderColor = isValid ? 'green' : 'red';
  }

  Object.keys(fields).forEach(key => {
    fields[key].addEventListener('blur', () => {
      validateField(key);
      validateForm();
    });

    fields[key].addEventListener('input', () => {
      validateForm();
      saveToLocalStorage();
    });
  });

  function validateForm() {
    const allValid = Object.keys(fields).every(key =>
      key === 'phone'
        ? validators[key]() // phone не принимает аргумент
        : validators[key](fields[key].value)
    );
    const productSelected = Boolean(selectedProduct);
    submitBtn.disabled = !(allValid && productSelected);
  }

  function saveToLocalStorage() {
    const formData = {
      product: selectedProduct,
      name: fields.name.value.trim(),
      surname: fields.surname.value.trim(),
      email: fields.email.value.trim(),
      phone: fields.phone.value.trim(),
      comment: fields.comment.value.trim(),
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
  }

  // === 🟢 Отправка формы через Formspree и EmailJS ===
  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (submitBtn.disabled) return;

    const { number, countryIso } = getPhoneData(fields.phone);

    const formData = {
      product: selectedProduct,
      name: fields.name.value.trim(),
      surname: fields.surname.value.trim(),
      email: fields.email.value.trim(),
      phone: number,
      phone_country_iso: countryIso,
      comment: fields.comment.value.trim(),
    };

    submitBtn.disabled = true;
    submitBtn.textContent = 'Отправка...';

    try {
      // === 🔵 Formspree ===
      const formspreeResponse = await fetch('https://formspree.io/f/mdkgjrqy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await formspreeResponse.json();

      if (!formspreeResponse.ok) {
        throw new Error(result?.message || 'Formspree error');
      }

      console.log('✅ Formspree отправлено!', result);

      // === ✉️ EmailJS ===
      const emailResponse = await emailjs.send(
        'service_kvigldv',
        'template_zy1f7x3',
        formData,
        'YTC30gcSXENvou1mq'
      );

      console.log('✅ EmailJS отправлено!', emailResponse);
      alert('Спасибо! Форма успешно отправлена.');

      form.reset();
      selectedProduct = null;
      productItems.forEach(el => el.classList.remove('selected'));
      Object.values(fields).forEach(field => {
        field.style.borderColor = '';
      });

      localStorage.removeItem(LOCAL_STORAGE_KEY);
      validateForm();
    } catch (error) {
      console.error('❌ Ошибка при отправке:', error);
      alert('Ошибка при отправке формы. Попробуйте позже.');
    }
  });
});
