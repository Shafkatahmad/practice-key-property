const defaultSettings = {
  theme: 'light',
  fontSize: 14
}

const userSettings = {
  theme: 'dark'
}

const finalSettings = { ...defaultSettings, ...userSettings };
console.log(finalSettings);

// Display theme on page
const themeElement = document.getElementById('theme');
themeElement.innerHTML = `And the user's theme-setting is ${finalSettings.theme}.`;

// Set browser tab color based on theme
const metaThemeColor = document.querySelector("meta[name=theme-color]");

if (finalSettings.theme === 'dark') {
  metaThemeColor.setAttribute("content", "#1a1a1a"); // dark color
} else {
  metaThemeColor.setAttribute("content", "#ffffff"); // light color
}
