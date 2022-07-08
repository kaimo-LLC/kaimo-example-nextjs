// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var axios = require('axios');

export default async function handler(req, res) {
  if (req.method === "POST") {
    var config = {
      method: 'get',
      url: 'https://dev.mykaimo.com/variants',
      headers: { 
        'X-Amz-Security-Token': process.env.KAIMO_DEV_API_KEY
      }
    };
    let request = await axios(config)
    return res
      .status(200)
      .json({ status: "success", message: request.data});


  }

  if (req.method === "GET") {
    return res
      .status(403)
      .json({ status: "error", message: "forbidden action" });
  }

  if (req.method === "PUT") {
    return res
      .status(403)
      .json({ status: "error", message: "forbidden action" });
  }

  if (req.method === "DELETE") {
    return res
      .status(403)
      .json({ status: "error", message: "forbidden action" });
  }
}