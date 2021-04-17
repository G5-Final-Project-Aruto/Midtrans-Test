const baseURL = 'https://api.sandbox.midtrans.com'
const MerchantID = 'G704244226'
const serverKey = 'SB-Mid-server-OC-CpMu5lkZ2JT7mMyfnvDf0'
const clientKey = 'SB-Mid-client-kOg3pJdjMxNkUPCY'
import { v4 as uuidv4} from 'uuid'

const midtransClient = require('midtrans-client');
// Create Snap API instance

class SnapModel {
    static transaction() {
        return new Promise((resolve,rejects)=>{

            let snap = new midtransClient.Snap({
                    // Set to true if you want Production Environment (accept real transaction).
                    isProduction : false,
                    serverKey : serverKey
                });
             
            let parameter = {
                "transaction_details": {
                    "order_id": uuidv4(),
                    "gross_amount": 10000,
                    "arts": ['Meme','kucing']
                },
                "status":"",
                "customer_details": {
                    "first_name": "budi",
                    "last_name": "pratama",
                    "email": "budi.pra@example.com",
                    "phone": "08111222333"
                },
            };
             
            const Token = snap.createTransaction(parameter)
            // return new Promise ((resolve,rejects) =>{

                then((transaction)=>{
                    // transaction token
                    let transactionToken = transaction.token;
                    console.log('transactionToken:',transactionToken);
                    resolve(transactionToken)
                    let redirectUrl = transaction.redirect_url;
                    console.log('redirectUrl:',redirectUrl);
                })
                .catch( err => {
                  console.log({error: err})
                })
                console.log(Token, 'INITOKEN')
            })
        }
    }
// }

module.exports = SnapModel


//CONTOH RESPONSE  SUCCESS

// {
//   "token":"66e4fa55-fdac-4ef9-91b5-733b97d1b862",
//   "redirect_url":"https://app.sandbox.midtrans.com/snap/v2/vtweb/66e4fa55-fdac-4ef9-91b5-733b97d1b862"
// }