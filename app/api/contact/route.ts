import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, language = 'zh' } = await request.json();

    // 验证必填字段
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // 调试信息
    console.log('Received language:', language);

    // 中英文双语邮件内容（英文在前，中文在后）
    const emailContent = {
      subject: `New Contact Form Message / 新联系表单消息 - ${name}`,
      title: 'New Contact Form Message / 新的联系表单消息',
      contactInfo: 'Contact Information / 联系信息',
      name: 'Name / 姓名',
      email: 'Email / 邮箱',
      sendTime: 'Send Time / 发送时间',
      messageContent: 'Message Content / 消息内容',
      footer1: 'This message is from EastCodeDev website contact form / 此消息来自 EastCodeDev 网站联系表单',
      footer2: 'Reply directly to this email to respond to the customer / 直接回复此邮件即可回复客户',
      footer3: 'Customer Email / 客户邮箱'
    };

    // 创建邮件传输器
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // ecd061924@gmail.com
        pass: process.env.EMAIL_PASS, // Gmail应用密码
      },
    });

    // 邮件内容
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'ecd061924@gmail.com',
      replyTo: email, // 设置回复地址为客户邮箱
      subject: emailContent.subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #fbbf24; padding-bottom: 10px;">
            ${emailContent.title}
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">${emailContent.contactInfo}</h3>
            <p><strong>${emailContent.name}:</strong> ${name}</p>
            <p><strong>${emailContent.email}:</strong> ${email}</p>
            <p><strong>${emailContent.sendTime}:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} / ${new Date().toLocaleString('zh-CN', { timeZone: 'America/New_York' })}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">${emailContent.messageContent}</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>${emailContent.footer1}</p>
            <p><strong>${emailContent.footer2}</strong></p>
            <p>${emailContent.footer3}: ${email}</p>
          </div>
        </div>
      `,
      text: `
${emailContent.title}

${emailContent.name}: ${name}
${emailContent.email}: ${email}
${emailContent.sendTime}: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} / ${new Date().toLocaleString('zh-CN', { timeZone: 'America/New_York' })}

${emailContent.messageContent}:
${message}

---
${emailContent.footer1}
${emailContent.footer2}
${emailContent.footer3}: ${email}
      `,
    };

    // 发送邮件
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
