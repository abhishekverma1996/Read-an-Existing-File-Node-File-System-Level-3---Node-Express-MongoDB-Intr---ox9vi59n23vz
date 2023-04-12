const fs = require("fs/promises");
const fileName = "myfile.txt";
const reader = async (fileName) => {
   try {
    const content = await fs.readFile(fileName, "utf-8");
    return content;
  } catch (error) {
    console.error(`Error reading ${fileName}:`, error);
    throw error;
  }
};


module.exports =  reader ;
