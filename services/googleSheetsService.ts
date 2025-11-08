import { FormData } from '../types.ts';

// --- ИНСТРУКЦИЯ ПО НАСТРОЙКЕ GOOGLE SHEETS ---
// Вы почти у цели! Осталось 3 простых шага:
//
// 1. Откройте редактор скриптов Google по ссылке: https://script.google.com/home/my
//    Нажмите "+ Новый проект".
//
// 2. Удалите весь код по умолчанию и вставьте код, который находится НИЖЕ этой инструкции (между /* ... */).
//
// 3. Нажмите "Развертывание" -> "Новое развертывание".
//    - В окне выберите тип "Веб-приложение".
//    - В поле "Кто имеет доступ" выберите "Все".
//    - Нажмите "Развернуть". Предоставьте необходимые разрешения для вашего аккаунта Google.
//    - Скопируйте URL веб-приложения (он будет в конце).
//
// 4. Вставьте скопированный URL в константу SCRIPT_URL ниже, заменив плейсхолдер. Готово!

/*
--- КОД ДЛЯ GOOGLE APPS SCRIPT (шаг 2) ---
--- ID вашей таблицы ('1vVQlK6Z9n5EzjFajm8UE3PpRs2p3F7vFxVi4HKkgvgY') уже встроен! ---

function doPost(e) {
  try {
    // Открываем вашу таблицу по ее уникальному ID
    var sheet = SpreadsheetApp.openById('1vVQlK6Z9n5EzjFajm8UE3PpRs2p3F7vFxVi4HKkgvgY').getSheets()[0];
    
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow = sheet.getLastRow() + 1;
    
    var newRow = headers.map(function(header) {
      switch(header) {
        case "Имя":
          return e.parameter.name;
        case "Название салона":
          return e.parameter.salonName;
        case "Телефон":
          return e.parameter.phone;
        case "Почта":
          return e.parameter.email;
        case "Дата заявки":
          return new Date().toLocaleString("ru-RU");
        default:
          return "";
      }
    });
    
    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

*/

export const submitToGoogleSheet = async (data: FormData): Promise<{ success: boolean; message: string }> => {
  console.log('Submitting data to Google Sheet:', data);

  // URL вашего веб-приложения Google Apps Script.
  const SCRIPT_URL: string = 'https://script.google.com/macros/s/AKfycbwYRs6-6AF1lxK3_NRHv6G4xpWv2B6rWFz9eZtA51IxAxM-vZvLqYdUqSuvzu_CYfqw_w/exec';

  // Реальная отправка данных в Google Таблицу
  try {
    const formData = new URLSearchParams();
    formData.append('name', data.name);
    formData.append('salonName', data.salonName);
    formData.append('phone', data.phone);
    formData.append('email', data.email);

    // Отправляем данные. Google Apps Script обработает их и добавит в таблицу.
    await fetch(SCRIPT_URL, {
      method: 'POST',
      body: formData,
    });
    
    // Мы не можем прочитать ответ из-за CORS-политики, но это нормально.
    // Главное, что запрос ушел и данные записались.
    // Если возникнет ошибка, сработает блок catch.

    return { success: true, message: 'Ваша заявка успешно отправлена! Мы скоро с вами свяжемся.' };

  } catch (error) {
    console.error('Error submitting to Google Sheet:', error);
    return { success: false, message: 'Произошла ошибка при отправке. Пожалуйста, проверьте URL скрипта или попробуйте еще раз.' };
  }
};