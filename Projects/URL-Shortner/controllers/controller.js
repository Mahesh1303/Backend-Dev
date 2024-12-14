const URLDB = require("../models/model");

const HandleGenerateShortURL = async (req, res) => {
  const { nanoid } = await import("nanoid");
  const body = req.body;
  if (!body.url) {
    res.status(400).json({
      error: "URL is required ",
    });
  }
  const shortid = nanoid(8);
  await URLDB.create({
    shortId: shortid,
    redirectURL: body.url,
    VisitHistory: [],
  });
  return res.json({ id: shortid });
};





const RedirectOrgURL=async (req,res)=>{
const shortId=req.params.id

const userURL=await URLDB.findOneAndUpdate({shortId},{$push :{
    VisitHistory:{

        timestamp:Date.now()
    }
}})
if(!userURL){
    return res.status(400).json({
        msg:"NO URL found"
    })
}
return res.redirect(userURL.redirectURL)
 


}


const HandlegetAnalyticsCount =async(req,res)=>{
const shortId=req.params.id
const result=await URLDB.findOne({shortId})

return res.json({
    TotalClicks:result.VisitHistory.length,
    VisitHistory:result.VisitHistory


})
    
    


}

module.exports = { HandleGenerateShortURL ,RedirectOrgURL,HandlegetAnalyticsCount};
