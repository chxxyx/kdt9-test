// const mysql = require('mysql');
import mysql from 'mysql2/promise';

//mysql 연결
const conn = mysql.createPool({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'kdt',
    port: 3306,
});

//createConnection : 단일 연결, 매번 연결이 필요할 때마다 새로운 연결을 생성한다. -> 연결 수가 많아지면 성능저하
//createPool : 여러 연결, 여러 개의 연결을 미리 생성하고 관리, 요청이 들어올 때마다 생성한 연결을 할당하는 것 -> 동시 처리 가능

export const post_signup = async (data) => {
    try {
        const query = 'INSERT INTO user (userid, pw, name) VALUES (?, ?, ?)' // 준비된 쿼리 방식
        const values = [data.userid, data.pw, data.name];
        
        await conn.query(query, values);
    } catch (error) {
        console.log(error);
    }
}

export const post_signin = async (data) => {
    try {
        const query = 'SELECT * FROM user WHERE userid = ? AND pw = ? '
        const values = [data.userid, data.pw];
        
        const [rows] = await conn.query(query, values); // 1번째 인덱스에는 쿼리문이 나오기 때문에 우리는 0번째 인덱스만 필요해서 구조 분해 할당을 통해 첫번째 요소만 가져온다.
        console.log(rows)
        return rows;
    } catch (error) {
        console.log(error)
    }
}

export const postProfile = async (data) => {
    try {
        const query = 'SELECT * FROM user WHERE userid = ?';
        const [rows] = await conn.query(query, [data.userid]);
        return rows;
    } catch (error) {
        console.log(error)
    }
}

export const editProfile = async (data) => {
    try {
        const query = 'UPDATE user SET userid = ?, pw = ?, name = ? WHERE id = ?';
        const values = [data.userid, data.pw, data.name, data.id];
        const [rows] = await conn.query(query, values);
        return rows;
    } catch (error) {
        console.log(error);
    }
}
export const deleteProfile = async (id) => {
    try {
        const query = 'DELETE FROM user WHERE id = ?';
        await conn.query(query, [id]);
    } catch (error) {
        console.log(error)
    }
}