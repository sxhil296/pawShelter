import { NextResponse } from "next/server";

let salt_key = "96434309-7796-489d-ab56988a6076";
let merchant_id = "PGTESTPAYUAT86";

export async function POST(req: Request, res: Response) {
  try {
    const reqData = await req.json();

    const data = {
      merchantId: merchant_id,
      merchantTransactionId: reqData.transactionId,
      name: reqData.name,
      phoneNumber: reqData.mobileNumber,
      amount: reqData.amount,
      currency: "INR",
      orderId: reqData.MUID,
      saltKey: salt_key,
      redirectUrl: `http://localhost:3000/api/status?id${reqData.transactionId}`,
      callbackUrl: `http://localhost:3000/api/status?id${reqData.transactionId}`,
      redirectMode: "POST",
      paymentInstrumentType: {
        type: "PAY_PAGE",
      },
    };

    const payload = JSON.stringify(data);
    const payloadBase64 = Buffer.from(payload).toString("base64");
    const keyIndex =1
    const string = payloadBase64 + "/pg/v1/pay" + salt_key
    const sha256Hash = crypto.createHash("sha256")
    console.log(reqData);
    return NextResponse.json({ message: "Order Placed Successfully" });
  } catch (error) {
    console.log(error);
  }
}
