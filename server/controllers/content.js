import { Content } from "../models/content.js";

export const uploadContent = async (req, res) => {
  try {
    const file = req.file.filename;

    const newpost = await Content.create({
      ...req.body,
      file: file,
    });
    if (!newpost) {
      return res.status(400).json({
        error: "Error Occured While Uploading",
      });
    }
    res.status(201).json({
      success: true,
      message: "Successfully Uploaded the Content..",
      data: newpost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getContents = async (req, res) => {
  try {
    const contents = await Content.find({});
    if (!contents) {
      return res.status(400).json({
        error: "No Contents Available",
      });
    }
    res.status(201).json({
      success: true,
      contents: contents,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
