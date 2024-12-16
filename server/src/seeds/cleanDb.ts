import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    const model = models[modelName];
    // if (!model) {
    //   throw new Error(`Model ${modelName} not found`);
    // }
    if (!model.db || !model.db.db) {
      throw new Error(`Database connection for model ${modelName} is not properly configured`);
    }

    const modelExists = await model.db.db.listCollections({
      name: collectionName
    }).toArray();

    if (modelExists.length) {
      await db.dropCollection(collectionName);
      console.log(`Collection ${collectionName} dropped successfully`);
    } else {
      console.log(`Collection ${collectionName} does not exist`);
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error(`Error in cleaning DB: ${err.message}`);
    } else {
      console.error('Error in cleaning DB:', err);
    }
    throw err;
  }
}
// import models from '../models/index.js';
// import db from '../config/connection.js';

// export default async (modelName: "Question", collectionName: string) => {
//   try {
//     let modelExists = await models[modelName].db.db.listCollections({
//       name: collectionName
//     }).toArray()

//     if (modelExists.length) {
//       await db.dropCollection(collectionName);
//     }
//   } catch (err) {
//     throw err;
//   }
// }
