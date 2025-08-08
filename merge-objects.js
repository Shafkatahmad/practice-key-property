const defaultSettings = {
  theme: 'light',
  fontSize: 14
}

const userSettings = {
  theme: 'dark'
}

const finalSettings = {...defaultSettings, ...userSettings};
console.log(finalSettings);

const theme = document.getElementById('theme');
theme.innerHTML = `And the users theme-setting is ${finalSettings.theme}.`