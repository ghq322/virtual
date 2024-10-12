import Image from "next/image";
'use client'
import { sql } from "@vercel/postgres";
import { Button,Form,Input } from 'antd-mobile'
import Link from "next/link";
export default function Home() {

   
  const onFinish =async (values: any) => {
    console.log(values)
    values.id=10000
    values.email = 'test@qq.com'
    values.image_url='./img/2.jpg'
    const { rows } = await sql`INSERT INTO customers (id, name, email, image_url) VALUES (${values.id}, ${values.name}, ${values.email}, ${values.image_url})
      ON CONFLICT (id) DO NOTHING;`;
      console.log('user inserted:',rows)
    }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Form 
        onFinish={onFinish}
        layout='horizontal'
        footer={
          <Button block type='submit' color='primary' size='large'>
            提交
          </Button>
        }>
         <Form.Item
          name='name'
          label='姓名'
          rules={[{ required: true, message: '姓名不能为空' }]}
        >
          <Input onChange={console.log} placeholder='请输入姓名' />
        </Form.Item>
        </Form>
      
      </main>
      
    </div>
  );
}
