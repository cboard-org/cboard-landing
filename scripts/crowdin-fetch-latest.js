const crowdinTranslations = require('@crowdin/crowdin-api-client').Translations;
const crowdinProjectsGroups = require('@crowdin/crowdin-api-client').ProjectsGroups;
const crowdinSourceFiles = require('@crowdin/crowdin-api-client').SourceFiles;
const crowdinUploadStorage = require('@crowdin/crowdin-api-client').UploadStorage;

const CROWDIN_TOKEN = process.env.CROWDIN_PERSONAL_TOKEN;
const CROWDIN_PROJECT_ID = 262825;

// initialization of crowdin client
const credentials = {
  token: CROWDIN_TOKEN
};
const translationApi = new crowdinTranslations(credentials);
const projectsGroupsApi = new crowdinProjectsGroups(credentials);
const sourceFilesApi = new crowdinSourceFiles(credentials);
const uploadStorageApi = new crowdinUploadStorage(credentials);

const https = require('https');
const fs = require('fs');
const resolve = require('path').resolve;
const DecompressZip = require('decompress-zip');
const fse = require('fs-extra');
const { t } = require('i18next');

const zipFilePath = resolve('./alltx.zip');
const extractPath = resolve('./downloads');
const langPath = resolve('./public/locales');

const uploadTranslations = async () => {
  let projectId = undefined;
  let storageId
  let fileId = undefined;

  try {
    const projects = await projectsGroupsApi.listProjects();
    projects.data.forEach((project) => {
      if (project.data.name === 'Cboard') {
        projectId = project.data.id;
        console.log('Project found:', projectId);
        return;
      }
    });

    if (projectId === undefined) {
      console.error('Project not found!');
      return;
    }

    const fileName = 'common.json';
    const fileContent = fs.readFileSync(`${langPath}/en/common.json`, 'utf8');
    const storageResponse = await uploadStorageApi.addStorage(fileName, fileContent);
    storageId = storageResponse.data.id;
    if (storageId === undefined) {
      console.error('Storage not found!');
      return;
    }
    console.log('Storage found:', storageId);

    const sourceFiles = await sourceFilesApi.listProjectFiles(projectId);
    sourceFiles.data.forEach((file) => {
      if (file.data.name === fileName) {
        fileId = file.data.id;
        console.log('File found:', fileId);
        return;
      }
    });
    if (fileId === undefined) {
      console.error('File not found!');
      return;
    }

    const result = await sourceFilesApi.updateOrRestoreFile(projectId, fileId, {
      storageId: storageId
    });
    console.log('File updated: ', result.data.name);

  } catch (error) {
    console.error('Error uploading translations:', error.message);
  }



};

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
  fs.unlinkSync(zipFilePath);
};

const extractTranslations = () => {

  console.log('Extracting zip to translations folder.');

  const unzipper = new DecompressZip(zipFilePath);

  unzipper.on('error', function (err) {
    console.log('DecompressZip Caught an error:', err);
  });

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

  unzipper.on('extract', function (log) {
    console.log('DecompressZip finished extracting.');
    //copy and rename files
    languages.forEach(lang => {
      fs.copyFileSync(
        `${extractPath}\\website\\new\\${lang.source}\\common.json`,
        `${langPath}\\${lang.dest}\\common.json`
      );
    });
    console.log(`${extractPath}`);
    // languages.forEach((lang, index) => {
    //   // copy source folder to destination
    //   try {
    //     fs.cpSync(
    //       `${extractPath}\\website\\i18n\\${lang.source}`,
    //       `${langPath}\\${lang.dest}\\`
    //     );
    //   } catch (err) {
    //     console.log('An error occured while copying the folder.')
    //     return console.error(err)
    //   }
    console.log('Copy completed!')
    //   if (index === languages.length - 1) {
    try {
      fs.rmdirSync(`${extractPath}`, { recursive: true });
      console.log(`Download folder was deleted.`);
    } catch (err) {
      console.error(`Error while deleting ${extractPath}`);
    }
    //   }
    // });

    deleteTemporaryDownloadFile();
  });

  unzipper.on('progress', function (fileIndex, fileCount) {
    //  console.log('Extracted file ' + (fileIndex + 1) + ' of ' + fileCount);
  });

  unzipper.extract({
    path: extractPath
  });
};
uploadTranslations();
downloadTranslations(extractTranslations);
