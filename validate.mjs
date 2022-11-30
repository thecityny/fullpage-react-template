/* Validate the metadata included in the .env file */
import assert from 'node:assert';
import dotenv from 'dotenv';

const DEFAULTS = {
  REACT_APP_SLUG: 'react-example-page-template',
  REACT_APP_SITE_NAME: 'Example News App',
  REACT_APP_SEO_HEADLINE: 'This is not a search-engine optimized headline',
  REACT_APP_SEO_DESCRIPTION: 'This is not a search-engine optimized description',
  REACT_APP_SOCIAL_HEADLINE: 'This is not a social headline',
  REACT_APP_SOCIAL_DESCRIPTION: 'This is not a social description',
  REACT_APP_PUB_DATE: '2099-12-31 23:58:00',
  REACT_APP_UPDATE_DATE: '2099-12-31 23:58:00',
};

function validate([key, value]) {
  try {
    assert(process.env[key] != value);
    console.log(`✅ ${key}`);
  } catch (err) {
    console.log(`❌ ${key}`);
    console.log(`You must edit the .env file and change ${key}'s default value.`);
    throw err;
  }
}

function main() {
  dotenv.config();
  console.log("Validating metadata");
  Object.entries(DEFAULTS).forEach(validate);
};

main();
