import fs from "fs";
import path from "path";
import matter from "gray-matter";

const dataDirectory = path.join(process.cwd(), "data");
const rulesAndGuidelinesDirectory = path.join(
  dataDirectory,
  "rules-and-guidelines"
);

/*
  Returns an array of objects tht contain the data of .md file in rules-and-guidelines.
*/
export default function getAllRulesAndGuidelines() {
  // Get the list of file names within rules and guidelines.
  // ex: ["cyberpunk_outfits.md", "file_name.md"]
  const fileNames = fs.readdirSync(rulesAndGuidelinesDirectory);

  // Return an object that contains: {}
  return fileNames.map((fileName) => {
    // File names have ".md" so remove them to use as slugs for links
    const slug = fileName.replace(".md", "");

    // Read file with utf-8 to get content
    const fileContents = fs.readFileSync(
      path.join(rulesAndGuidelinesDirectory, fileName),
      "utf-8"
    );

    // Pass through gray matter which converts the .md text to an object
    const { data, content } = matter(fileContents);

    // Return data, content, slug
    return {
      data,
      content,
      slug,
    };
  });
}
