# 邮件发送配置说明

## 环境变量配置

为了启用联系表单的邮件发送功能，您需要创建 `.env.local` 文件并配置以下环境变量：

```bash
# 在项目根目录创建 .env.local 文件
EMAIL_USER=info@eastcodedev.com
EMAIL_PASS=your_hostinger_email_password
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
```

## Hostinger 邮箱配置

1. 登录到您的 Hostinger 账户
2. 前往邮箱管理页面
3. 确保您的邮箱账户已创建并激活
4. 使用您的完整邮箱地址作为 `EMAIL_USER`
5. 使用您的邮箱密码作为 `EMAIL_PASS`

### SMTP 设置说明

- **SMTP 服务器：** smtp.hostinger.com
- **端口：** 465 (SSL) 或 587 (TLS)
- **加密方式：** SSL (端口 465) 或 TLS (端口 587)
- **用户名：** 您的完整邮箱地址（例如：info@eastcodedev.com）
- **密码：** 您的邮箱账户密码

**注意：** 如果使用端口 587 (TLS)，请在代码中将 `secure: true` 改为 `secure: false`

## 功能说明

- 联系表单现在会将消息发送到 `info@eastcodedev.com`
- 邮件包含发送者的姓名、邮箱、消息内容和时间戳
- 支持中英文双语界面
- 包含发送状态反馈（成功/失败）
- 邮件格式美观，包含HTML和纯文本版本

## 测试

配置完成后，您可以：
1. 运行 `npm run dev` 启动开发服务器
2. 访问 `/contact` 页面
3. 填写并提交联系表单
4. 检查 `info@eastcodedev.com` 邮箱是否收到邮件

## 故障排除

如果邮件发送失败：
1. 检查 `.env.local` 文件是否正确配置
2. 确认 Gmail 应用密码是否正确
3. 检查控制台错误信息
4. 确保 Gmail 账户已启用两步验证
