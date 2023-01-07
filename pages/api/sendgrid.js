import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.API_KEY)

async function sendEmail(req,res){
    const data=req.body.values
    let html='';
    for (let x in data){
        html+=`<p><b>${x}</b> : ${data[x]}</p>`
    }

    
    try{
        await sendgrid.send({
            to:'rekhagadhesariya01@gmail.com',
            from:'kunjgadhesariya@gmail.com',
            subject:`${data.subject}`,
            html:html
        })
        
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
    return res.status(200).json({ success:true});
}

export default sendEmail