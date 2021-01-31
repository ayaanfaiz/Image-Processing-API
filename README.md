# Image-Processing-API

Project for Udacity Full Stack Nanodegree

## Dependencies:

- Express
- Sharp
- TypeScript
- SuperTest
- Es-Lint
- Prettier
- Jasmine

## Folder Structure

```bash
├── spec
├── src
    ├── images
```

## Scripts

- `test` - Script to run the tests
- `lint` - Script to run ESList across the project
- `start` - Script to start the project
- `build` - Script to build the project
- `prettier` - Script to run prettier throughout the project
- `typescript` - Script to make the TypeScript build

## Steps to run the project

- Run `npm install`
  This installs all the dependency required to run the project.
- Run `npm start`
  This will build and start the local server on port `8000`.
- Open `localhost:8000` in any of the browser.
- Please provide the file name in the following format of the page:

  `http://localhost/image?fileName="YOUR_FILE_NAME"&height="IMAGE_HEIGHT"&width="IMAGE_WIDTH"`

  There are three query params required:

  - fileName - Name of the files.
    Available options for file names are:
    _ encenadaport
    _ fjord
    _ icelandwaterfall
    _ palmtunnel
    _ santamonica
  - Height - Required height of the file.
  - Width - Required width of the file

## Usability

User can import files and resize them according to their own need. The converted files will be available in the directory: `build/images`.
This project can be extended and created into a library for use.
