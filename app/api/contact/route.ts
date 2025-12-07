import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, language = 'zh' } = body;

    console.log('Received request:', { name, email, messageLength: message?.length, language });

    // 验证必填字段
    if (!name || !name.trim()) {
      console.error('Missing name');
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    if (!email || !email.trim()) {
      console.error('Missing email');
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('Invalid email format');
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (!message || !message.trim()) {
      console.error('Missing message');
      return NextResponse.json(
        { error: 'Message is required' },
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

    // 创建邮件传输器 - Hostinger SMTP配置
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // 使用 SSL (端口 465) 或 false 使用 TLS (端口 587)
      auth: {
        user: process.env.EMAIL_USER, // info@eastcodedev.com
        pass: process.env.EMAIL_PASS, // Hostinger 邮箱密码
      },
    });

    // 邮件内容
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@eastcodedev.com',
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
    
    // 检查是否是环境变量问题
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email configuration:', {
        hasEmailUser: !!process.env.EMAIL_USER,
        hasEmailPass: !!process.env.EMAIL_PASS
      });
      return NextResponse.json(
        { error: 'Email configuration is missing. Please check .env.local file.' },
        { status: 500 }
      );
    }

    // 返回更详细的错误信息
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `Failed to send message: ${errorMessage}` },
      { status: 500 }
    );
  }
}
