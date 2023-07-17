/* eslint-disable import/no-commonjs */
/* eslint-disable no-console */

const fs = require('fs');

const algoliasearch = require('algoliasearch');
const StreamArray = require('stream-json/streamers/StreamArray');

const client = algoliasearch('29DJWCHMLQ', '3ad39b883a1f194b8118d161235cf389');
const index = client.initIndex('spencer_and_williams');

const clientData = require('../../data/products.json');

const discountedFileName = 'discounted.json';

// Reusable functions, in case we need to discount other categories or by different amounts
function discountItemCategory(itemCategory, discountAmount) {
  const discountedPayload = [];
  for (const item of clientData) {
    for (const category of item.categories) {
      if (category.includes(itemCategory)) {
        item.price = Math.floor(
          item.price - (discountAmount * item.price) / 100
        );
      }
    }
    discountedPayload.push(item);
  }
  saveToFile(discountedPayload, discountedFileName);
  return discountedPayload;
}

// Saving the file separately, so that we can choose to store the discounted payloads
function saveToFile(payload, fileName) {
  const data = JSON.stringify(payload);
  fs.writeFile(`./${fileName}`, data, err => {
    if (err) {
      console.log('Error storing discounted data to file', err);
    } else {
      console.log('Successfully stored discounted data to file');
    }
  });
}

// Keeping they payload available, so that we can do any further manipulations directly in-memory, without touching the stored file
const discountedPayload = discountItemCategory('Cameras & Camcorders', 20);

// Implementation copy-pasted from your documentation
const stream = fs
  .createReadStream(`./${discountedFileName}`)
  .pipe(StreamArray.withParser());
let chunks = [];

stream
  .on('data', ({ value }) => {
    chunks.push(value);
    if (chunks.length === 10000) {
      stream.pause();
      index
        .saveObjects(chunks, { autoGenerateObjectIDIfNotExist: true })
        .then(() => {
          chunks = [];
          stream.resume();
        })
        .catch(console.error);
    }
  })
  .on('end', () => {
    if (chunks.length) {
      index
        .saveObjects(chunks, {
          autoGenerateObjectIDIfNotExist: true,
        })
        .catch(console.error);
    }
  })
  .on('error', err => console.error(err));
