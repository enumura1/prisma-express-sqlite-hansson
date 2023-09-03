// パッケージのインポート
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// 処理を早くするためにこのように書いてる
async function main() {
    // 新規ユーザーとデータを作成
    const data1 = await prisma.user.create({
        data: {
            name: "NameHoge",
            email: "hogeMail",
        }
    })
    // ログ出力
    console.log({ message: { data1 } })



}
main()
