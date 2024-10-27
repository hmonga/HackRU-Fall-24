import { MongoClient } from "mongodb";

export async function GET(request) {
    const client = new MongoClient(process.env.MONGO);
    const username = request.nextUrl.searchParams.get('username');
    const password = request.nextUrl.searchParams.get('password');
    let rec;
    try {
        const db = client.db("Alzaid");
        const users = db.collection("users");
        rec = await users.findOne({ username });
        if (!rec) {
            rec.code = 200;
        } else if (rec.password != password) {
            rec.code = 250;
        } else {
            rec.code = 100;
        }
    } finally {
        client.close();
    }
    return Response.json(rec);
}
