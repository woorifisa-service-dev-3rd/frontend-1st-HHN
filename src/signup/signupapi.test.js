import { signup } from "./signupapi";
import { test, expect } from "vitest";

test('아이디, 비밀번호, 이메일을 입력하면 회원가입이 된다', async () => {
    const text_id = 'user1' 
    const text_pw = '1234'
    const text_email = 'user1@testmail.com'

    const result = JSON.parse(await signup(text_id, text_pw, text_email));
    const statusCode = result.statusCode;

    expect(statusCode).toBe('201');

 });