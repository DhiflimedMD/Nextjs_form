export default function handler(req, res){
    const body = req.body
    console.log('body:', body)

    if (!body.firstName || !body.Email){
        return res.status(400).json({data: 'first or Email not found'})
    }

    res.status(200).json({data: `${body.firstName}` `${body.lastName}`})
}