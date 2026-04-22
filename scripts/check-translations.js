const fs = require('fs');
const path = require('path');

const localesDirectory = path.join(__dirname, '..', 'src', 'locales');
const baseLocale = 'en';
const localeFolders = fs
  .readdirSync(localesDirectory, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

const loadLocale = (locale) => {
  const filePath = path.join(localesDirectory, locale, 'translation.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

const flattenKeys = (value, prefix = '') => {
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => flattenKeys(item, `${prefix}[${index}]`));
  }

  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, nestedValue]) =>
      flattenKeys(nestedValue, prefix ? `${prefix}.${key}` : key)
    );
  }

  return [prefix];
};

const baseKeys = flattenKeys(loadLocale(baseLocale)).sort();
let hasIssues = false;

for (const locale of localeFolders.filter((locale) => locale !== baseLocale)) {
  const localeKeys = flattenKeys(loadLocale(locale)).sort();
  const missing = baseKeys.filter((key) => !localeKeys.includes(key));
  const extra = localeKeys.filter((key) => !baseKeys.includes(key));

  if (missing.length === 0 && extra.length === 0) {
    console.log(`${locale}: OK`);
    continue;
  }

  hasIssues = true;
  console.log(`${locale}:`);

  if (missing.length > 0) {
    console.log('  Missing keys:');
    missing.forEach((key) => console.log(`    - ${key}`));
  }

  if (extra.length > 0) {
    console.log('  Extra keys:');
    extra.forEach((key) => console.log(`    - ${key}`));
  }
}

if (hasIssues) {
  process.exitCode = 1;
} else {
  console.log('All locale files match the English translation structure.');
}
