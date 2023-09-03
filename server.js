// (1) 必要なパッケージをインポートする
const express = require('express');
const { PrismaClient } = require('@prisma/client'); // Prisma Clientを読み込む

// (2) 新しくインスタンスをつくる
const app = express(); // アプリのインスタンス
const prisma = new PrismaClient();

// GET /users
app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

// GET /user/:id
app.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    res.json(user);
});

// (3) Expressアプリケーションにミドルウェアを追加
// HTTPリクエストのボディを解析してJSONとして利用できるようにする
// このように書くことで、JSON形式で送信されたPOSTリクエストのデータを扱うことができる
app.use(express.json());

// (4) Expressアプリケーションをポート3000で起動する。サーバーが起動したら、コンソールにメッセージを表示する。
app.listen(3000, () =>
    console.log('REST API server ready at: http://localhost:3000'),
);