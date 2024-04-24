import { connectToDatabase } from "@/utils/db";
import { NextResponse } from "next/server";
import crypto from 'crypto';
import { SolapiMessageService } from "solapi";

const api_key = 'NCSJTUHVWWQ0EWKT'; 
const api_secret = 'AU16IKRS7CVUPXXWOWP3ECGMEFBB7VCQ';
const templateId = "KA01TP240423034538998qcbYvaZjNwK";
const pfid = "KA01PF22041206411o33TFWW9Sl71Ppp";
const messageService = new SolapiMessageService(api_key, api_secret);

// 암호화를 위한 키
const encryptionKey = crypto.createHash('sha256').update("mySecretKey123").digest('hex').substring(0, 32);
const fixedIV = Buffer.from('0123456789abcdef0123456789abcdef', 'hex');

// 암호화 함수
function encryptPhoneNumber(phoneNumber) {
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(encryptionKey), fixedIV);
    let encrypted = cipher.update(phoneNumber, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}
// 복호화 함수
function decryptPhoneNumber(encryptedPhoneNumber) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(encryptionKey), fixedIV);
    let decrypted = decipher.update(encryptedPhoneNumber, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// GET
// async function getDBconnect() {
//     const connection = await connectToDatabase();
//     try {
//         const [results, fields] = await connection.query("SELECT * FROM alarm");
//         await connection.end();
//         console.log(decryptPhoneNumber(results[1].mobile));
//         return NextResponse.json({results});
//     }catch (err) {
//         console.log(err);
//     }
//   }
  
export async function POST(req, res) {
    const connection = await connectToDatabase();
    const data = await req.json(); // 요청 본문 파싱
    const {name, mobile} = data;
    try {
        const encryptedMobile = encryptPhoneNumber(mobile); // 암호화
        // const decryptedMobile = encryptPhoneNumber(encryptedMobile); // 복호화
        const [results, fields] = await connection.query(`SELECT * FROM alarm WHERE mobile = ?`, [encryptedMobile]);
        if (results.length > 0) {
            connection.end();
            // getDBconnect(); // GET
            return NextResponse.json({ message: "이미 신청 완료된 번호입니다." });
        } else {
            try {
                await connection.query(`INSERT INTO alarm (name, mobile) VALUES (?, ?)`, [name, encryptedMobile]);
                connection.end();
                const response = await messageService.send({
                    to: mobile,
                    from: "계정에서 등록한 발신번호 입력", // 발신번호를 정확하게 입력해주세요.
                    kakaoOptions: {
                        pfId: pfid,
                        templateId: templateId,
                        variables: name ? {
                            "#{name}": name,
                            "#{region}" : "동성로",
                            "#{url}": "market-roan-rho.vercel.app"
                        } : {},
                        disableSms: false // 필요에 따라 disableSms 옵션 사용
                    }
                });
                return NextResponse.json({ message: "신청이 완료되었습니다.", data: response });
            } catch (err) {
                console.log(err);
                connection.end();
            }    
        }
    }catch(err){
        console.log(err);
        connection.end();
    }
}