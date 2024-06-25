
//TODO:

const { Storage } = require("@google-cloud/storage");

const storage = new Storage({
  projectId: "blog-app",
  keyFilename: "./gcp_key.json",
});

const uploadToFirebaseStorage = async (filepath, fileName) => {
  try {
    const gcs = storage.bucket("gs://blog-app");
    const storagepath = `blog-app/${fileName}`;

    const result = await gcs.upload(filepath, {
      destination: storagepath,
      public: true,
      metadata: {
        contentType: "application/plain", 
      },
    });
    return result[0].metadata.mediaLink;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

const GoogleCloudService = {
  uploadToFirebaseStorage,
};

module.exports = GoogleCloudService;