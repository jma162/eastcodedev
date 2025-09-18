# 邮件发送配置说明

## 环境变量配置

为了启用联系表单的邮件发送功能，您需要创建 `.env.local` 文件并配置以下环境变量：

```bash
# 在项目根目录创建 .env.local 文件
EMAIL_USER=ecd061924@gmail.com
EMAIL_PASS=your_gmail_app_password_here
```

## Gmail 应用密码设置

1. 登录到您的 Gmail 账户 (ecd061924@gmail.com)
2. 前往 [Google 账户设置](https://myaccount.google.com/)
3. 点击 "安全性" 标签
4. 在 "登录 Google" 部分，点击 "两步验证"（如果未启用，请先启用）
5. 在 "两步验证" 页面底部，点击 "应用密码"
6. 选择 "邮件" 作为应用类型
7. 选择 "其他" 作为设备类型，输入 "EastCodeDev Website"
8. 点击 "生成" 获取应用密码
9. 将生成的应用密码复制到 `.env.local` 文件的 `EMAIL_PASS` 变量中

## 功能说明

- 联系表单现在会将消息发送到 `ecd061924@gmail.com`
- 邮件包含发送者的姓名、邮箱、消息内容和时间戳
- 支持中英文双语界面
- 包含发送状态反馈（成功/失败）
- 邮件格式美观，包含HTML和纯文本版本

## 测试

配置完成后，您可以：
1. 运行 `npm run dev` 启动开发服务器
2. 访问 `/contact` 页面
3. 填写并提交联系表单
4. 检查 `ecd061924@gmail.com` 邮箱是否收到邮件

## 故障排除

如果邮件发送失败：
1. 检查 `.env.local` 文件是否正确配置
2. 确认 Gmail 应用密码是否正确
3. 检查控制台错误信息
4. 确保 Gmail 账户已启用两步验证
