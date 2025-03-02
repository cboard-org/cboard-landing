const crowdinProjectsGroups = require('@crowdin/crowdin-api-client').ProjectsGroups;
const crowdinSourceFiles = require('@crowdin/crowdin-api-client').SourceFiles;
const crowdinUploadStorage = require('@crowdin/crowdin-api-client').UploadStorage;
const fs = require('fs');
const path = require('path');
const resolve = require('path').resolve;

const CROWDIN_TOKEN = process.env.CROWDIN_PERSONAL_TOKEN;
const CROWDIN_PROJECT_ID = 262825;

// initialization of crowdin client
const credentials = {
  token: CROWDIN_TOKEN
};
const zipFilePath = resolve('./alltx.zip');
const extractPath = resolve('./downloads');
const langPath = resolve('./public/locales/en');
let fileId = 92;

// create an instance of the crowdin client
const projectsGroupsApi = new crowdinProjectsGroups(credentials);
const sourceFilesApi = new crowdinSourceFiles(credentials);
const uploadStorageApi = new crowdinUploadStorage(credentials);

const uploadSourceFiles = async () => {
  let projectId = undefined;
  let storageId = undefined;

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

const pretranslateProject = async () => {
  console.log('Trying to pretranslate project...');
  const languageIds = languages.map(lang => lang.dest);
  if (fileId === undefined) {
    console.error('File not found!');
    return;
  }
  const fileIds = [fileId];
  try {
    const result = await translationApi.applyPreTranslation(CROWDIN_PROJECT_ID, {
      languageIds,
      fileIds,
    });
    console.log('Pre-translation started:', result.data);
  } catch (error) {
    console.error('Error pretranslating:', error.message);
  }
};

uploadSourceFiles();
