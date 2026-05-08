# Roblox攻略网站部署指南

## 📁 网站文件

网站文件位于：`e:\SOLO_Pro\个人网站开发\`

包含以下文件：
- `index.html` - 主页面
- `adopt-me.html`、`brookhaven.html`、`tower-defense.html`、`piggy.html` - 攻略详情页
- `styles.css` - 样式文件
- `script.js` - JavaScript功能
- `locales.js` - 多语言翻译数据

## 🚀 免费托管方案

### 方案1：GitHub Pages（推荐）

1. **创建GitHub账号**
   - 访问 https://github.com
   - 注册一个免费账号

2. **创建仓库**
   - 点击 "New repository"
   - 仓库名可以是 `roblox-guides`
   - 设置为 Public
   - 点击 "Create repository"

3. **上传文件**
   - 点击 "uploading an existing file"
   - 拖拽网站文件夹中的所有文件
   - 点击 "Commit changes"

4. **启用Pages**
   - 进入仓库的 Settings
   - 找到 Pages（在左侧菜单）
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main"
   - 点击 "Save"

5. **访问网站**
   - 几分钟后，你的网站将在：
     `https://你的用户名.github.io/roblox-guides/`

### 方案2：Vercel（推荐）

1. **将代码推送到GitHub/GitLab/Bitbucket**
   - 参考方案1

2. **连接Vercel**
   - 访问 https://vercel.com
   - 使用GitHub账号登录
   - 导入你的仓库
   - 点击 Deploy

3. **获取域名**
   - 网站会自动部署到：
     `https://项目名.vercel.app`
   - 也可以绑定自己的域名

### 方案3：Netlify

1. **拖拽上传**
   - 访问 https://app.netlify.com
   - 登录后，直接拖拽整个网站文件夹到页面

2. **或者使用Git**
   - 连接GitHub仓库，自动部署

## 📦 付费托管方案

### 阿里云OSS + CDN

1. **注册阿里云账号** https://www.aliyun.com
2. **购买OSS存储**
3. **创建Bucket，设置为公开访问**
4. **上传网站文件**
5. **配置静态网站托管**
6. **绑定域名**
7. **（可选）配置CDN加速**

### 腾讯云COS

类似阿里云方案，价格也比较实惠。

### 传统虚拟主机

可以在：
- GoDaddy
- Bluehost
- 阿里云虚拟主机
- 腾讯云轻量应用服务器

## 🌐 购买域名

### 推荐域名注册商

1. **阿里云**（万网）https://wanwang.aliyun.com
2. **腾讯云** https://dnspod.cloud.tencent.com
3. **GoDaddy** https://www.godaddy.com
4. **Namecheap** https://www.namecheap.com

### 推荐域名

- `.com` - 国际通用，最推荐
- `.net` - 也很常见
- `.cn` - 中国域名，需要备案
- `.fun` - 很适合游戏网站
- `.guide` - 很适合攻略网站

### 域名绑定

1. 在域名注册商处，设置DNS解析
2. 将域名指向托管平台的服务器地址
3. 在托管平台上绑定域名

## 📱 验证部署

部署后检查：

- [ ] 所有页面可以正常访问
- [ ] 图片加载正常
- [ ] 语言切换功能正常
- [ ] 响应式布局在移动端正常
- [ ] 链接都可以跳转

## 🔧 后续维护

- 更新内容：重新上传修改的文件
- 备份：定期保存网站文件
- 分析：可以添加 Google Analytics

## 💡 建议

1. **先使用免费托管测试**（GitHub Pages/Vercel）
2. **等网站有流量后再考虑付费方案**
3. **定期更新攻略内容**
4. **可以添加用户评论/反馈功能**

祝你部署顺利！🎮
