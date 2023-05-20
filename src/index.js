const sentences = [
  "You should specify a license for your package so that people know how they are permitted to use it",
  "The main field is a module ID that is the primary entry point to your program",
  "The repository field should specify the place where your code lives",
  "The 'scripts' property is a dictionary containing script commands that are run at various times in the lifecycle of your package",
  "Dependencies are specified in a simple object that maps a package name to a version range",
  "It's best to map these additional items such as a test framework, which is not needed for running your project, in a devDependencies object",
  "If you plan to publish your package, the most important things in your package.json are the name and version fields as they will be required",
  "If you don’t plan to publish your package, the name and version fields are optional",
  "Put keywords in it. It's an array of strings. This helps people discover your package as it's listed in npm search",
  "The bugs field should hold the url to your project’s issue tracker and / or the email address to which issues should be reported.",
];

const str = "Repository";

const sentencesWithStr = sentences.filter((a) =>
  a.toLowerCase().includes(str.toLowerCase())
);

console.log(sentencesWithStr);
