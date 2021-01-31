import { removeFileExtensionIfExists } from "../src/utils";

describe("Should return file name without extension", () => {
  it("Removes extension from file name", () => {
    const fileName = "fjord.jpg";
    expect(removeFileExtensionIfExists(fileName)).toMatch("fjord");
  });
});
