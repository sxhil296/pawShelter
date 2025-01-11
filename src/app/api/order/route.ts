import { NextResponse } from "next/server";
import crypto from "crypto";
import axios from "axios";

const salt_key = "96434309-7796-489d-8924-ab56988a6076";
const merchant_id = "PGTESTPAYUAT86";

export async function POST(req: Request) {
  try {
    const reqData = await req.json();

    const data = {
      merchantId: merchant_id,
      merchantTransactionId: reqData.transactionId,
      merchantUserId: "MU933037302229373",
      name: reqData.name,
      phoneNumber: reqData.mobileNumber,
      amount: reqData.amount *100,
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
    const keyIndex = 1;
    const string = payloadBase64 + "/pg/v1/pay" + salt_key;
    const sha256 = crypto.createHash("sha256").update(string).digest("hex");
    const checksum = sha256 + "###" + keyIndex;
    const prod_url =
      "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";
    const options = {
      method: "POST",
      url: prod_url,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X_VERIFY": checksum,
      },
      data: {
        request: payloadBase64,
      },
    };
    const response = await axios(options);
    return NextResponse.json(response.data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Payment initiation failed." });
  }
}
