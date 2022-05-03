const express = require("express");
const cors = require("cors");
const axios = require("axios");

const util = require("./utility")
const app = express();

app.use(cors());
app.use(express.json());

app.get("/search", async (req, res) => {
  try {
    const { status, data } = await axios.get(
      "https://help-search-api-prod.herokuapp.com/search",
      { params: req.query }
    );

    let pageData = '';

    if (req.query?.page || req.query?.limit || req.query?.slug || req.query?.sort_key){
      const { page, limit, slug, sort_key } = req.query;
      pageData = util.paginationResult(data, page, limit, slug, sort_key);
    }else{
      pageData = data;
    }
    
    res.status(status);
    res.send(pageData);
  } catch (err) {
    if (err.isAxiosError) {
      res.status(err.response.status);
      res.send(err.response.data);
    } else {
      throw err;
    }
  }
});

exports.startServer = () => {
  const port = process.env.PORT || "3001";
  app.listen(port, () => console.log("Listening on :3001"));
};
