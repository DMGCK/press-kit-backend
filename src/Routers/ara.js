import googleService from "../Services/GoogleService.js";
import express from "express";
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const response = await googleService.getAraSheet();
    res.send(response);
  } catch (error) {
    console.error(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const response = await googleService.postNewMerchAra(req);
    res.send(response);
  } catch (error) {
    console.error(error);
  }
});

export default router;
