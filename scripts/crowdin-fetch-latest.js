const crowdinTranslations = require('@crowdin/crowdin-api-client').Translations;
const https = require('https');
const fs = require('fs');
const resolve = require('path').resolve;
const DecompressZip = require('decompress-zip');
const fse = require('fs-extra');

const CROWDIN_TOKEN = process.env.CROWDIN_PERSONAL_TOKEN;
const CROWDIN_PROJECT_ID = 262825;

// initialization of crowdin client
const credentials = {
  token: CROWDIN_TOKEN
};

// create an instance of the crowdin client
const translationApi = new crowdinTranslations(credentials);

// languages to download
const languages = [
  {
    source: 'ar-SA',
    dest: 'ar'
  },
  {
    source: 'de-DE',
    dest: 'de'
  },
  {
    source: 'en-US',
    dest: 'en'
  },
  {
    source: 'es-ES',
    dest: 'es'
  },
  {
    source: 'id-ID',
    dest: 'id'
  },
  {
    source: 'pt-BR',
    dest: 'pt'
  },
  {
    source: 'zh-CN',
    dest: 'zh'
  }
];

// paths
const zipFilePath = resolve('./alltx.zip');
const extractPath = resolve('./downloads');
const langPath = resolve('./public/locales');
let fileId = 92;

const downloadTranslations = async onComplete => {
  console.log('Trying to download latest translation strings...');

  // get project build
  const build = await translationApi.listProjectBuilds(CROWDIN_PROJECT_ID);
  const buildId = build.data[0].data.id;
  const download = await translationApi.downloadTranslations(CROWDIN_PROJECT_ID, buildId);
  const allTxZip = fs.createWriteStream(zipFilePath);
  https.get(download.data.url, function (response) {
    response.pipe(allTxZip);
    allTxZip.on('finish', function () {
      console.log('Translation download complete.');
      allTxZip.close(onComplete);
    });
    allTxZip.on('error', function (err) {
      console.log('Translation download encountered error!');
      console.log(err);
    });
  });
};

const deleteTemporaryDownloadFile = () => {
  console.log('Deleting temp file.');
  try {
    fs.unlinkSync(zipFilePath);
    console.log(`Deleted ${zipFilePath}`);
  } catch (err) {
    console.error(`Error while deleting ${zipFilePath} ` + err.message);
  }
};

const extractTranslations = () => {

  console.log('Extracting zip to translations folder.');

  const unzipper = new DecompressZip(zipFilePath);

  unzipper.on('error', function (err) {
    console.log('DecompressZip Caught an error:', err);
  });

  unzipper.on('extract', function (log) {
    console.log('DecompressZip finished extracting.');
    //copy and rename files
    languages.forEach((lang, index) => {
      // copy source folder to destination
      try {
        fs.cpSync(
          `${extractPath}\\website\\${lang.source}`,
          `${langPath}\\${lang.dest}\\`,
          { recursive: true }
        );
      } catch (err) {
        console.log('An error occured while copying the folder.')
        return console.error(err)
      }
      console.log('Language: ' + lang.dest + ' - Copy completed!')
      if (index === languages.length - 1) {
        try {
          fs.rm(`${extractPath}`, { recursive: true });
          console.log(`Download folder was deleted.`);
        } catch (err) {
          console.error(`Error while deleting ${extractPath}`);
        }
      }
    });

    deleteTemporaryDownloadFile();
  });

  unzipper.on('progress', function (fileIndex, fileCount) {
    //  console.log('Extracted file ' + (fileIndex + 1) + ' of ' + fileCount);
  });

  unzipper.extract({
    path: extractPath
  });
};
downloadTranslations(extractTranslations);
