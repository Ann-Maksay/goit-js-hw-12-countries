import { alert, notice, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

function myAlert() {
  error({
    text: "Too many matches found. Pleace enter a more specific query!",
    closer: false,
    sticker: false,
    delay: 2000,
  });
  
  notice.on('click', () => {
  notice.close();
  });
}

export default myAlert;