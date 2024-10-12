import Image from "next/image";
'use client'

import { Button,Form,Input } from 'antd-mobile'
import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Form layout='horizontal'>
          <Form.Item label='用户名' name='username'>
            <Input placeholder='请输入用户名' clearable />
          </Form.Item>
         
        </Form>
        <Link href="/game">
        <Button block color='primary' size='large'>
         登录
        </Button>
        </Link>
      </main>
      
    </div>
  );
}
