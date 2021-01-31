import fs from "fs";
import path from "path";

// Types
import { readFileReturn } from "./types";

export const imageFileSource = path.resolve(__dirname, "./images");

export const removeFileExtensionIfExists = (fileName: string): string => {
  const fileExtensions = [".jpg", ".png"];
  if (fileName.length) {
    const extractLastFourCharacters = fileName.substr(-4);
    if (fileExtensions.includes(extractLastFourCharacters)) {
      return fileName.substr(0, fileName.length - 4);
    }
    return fileName;
  }
  return "";
};

export const readFile = (fileName: string): readFileReturn => {
  if (fileName) {
    const modifiedFileName = removeFileExtensionIfExists(fileName);
    try {
      const filePath = `${imageFileSource}/${modifiedFileName}.jpg`;
      const imageFromFile = fs.readFileSync(filePath);
      if (imageFromFile) {
        console.log("File read successful");
        return { filePath, fileReadStatus: true, fileName: modifiedFileName };
      }
    } catch (err) {
      console.error(`File doesn't exist`);
      return { fileReadStatus: false };
    }
  }
  return { fileReadStatus: false };
};
