// 安全、价格、使用条款、关于：四个文字页面的内容（三种语言）
import type { Lang } from './i18n';

export type Block = { h: string; p?: string[]; list?: string[]; table?: string[][] };
export interface TextPage { title: string; lead: string; updated?: string; blocks: Block[] }

const MAIL = '<a href="mailto:support@vaultyn.com">support@vaultyn.com</a>';

export const SECURITY: Record<Lang, TextPage> = {
  zh: { title: '安全', lead: '没有服务器，就没有服务器会被攻破。下面说明 Vaultyn 怎样保护你的数据，也说明它做不到什么。', blocks: [
    { h: '数据只在你手里', p: ['Vaultyn 没有账号系统，也没有保存你数据的服务器。你记录的全部内容加密后，只保存在你的 Mac 和你自己选的文件夹里（例如 iCloud 云盘）。我们看不到这些数据，也没有办法看到。'] },
    { h: '怎样加密', table: [['环节', '做法'],
      ['主密码 → 密钥', '用 Argon2id（64 MB 内存、3 轮）把主密码变成“钥匙加密钥匙”，每次猜测都很慢、很耗内存，暴力破解极难'],
      ['库密钥', '一把 256 位的随机密钥，用来加密全部数据；它本身再被主密码生成的钥匙加密保存'],
      ['数据', 'AES-256-GCM 加密，同时能发现数据被篡改'],
      ['恢复密钥', '160 位随机数，经 HKDF 生成另一把钥匙，包裹同一把库密钥，用于忘记主密码时重设'],
      ['附件、网站图标', '同样用 AES-256-GCM 加密后保存，文件名是随机编号，看不出内容']],
      p: ['这样设计的好处：修改主密码时只需重新包裹库密钥，不用重新加密全部数据；忘记主密码时，可以用恢复密钥重新设置。'] },
    { h: '使用时的保护', list: ['闲置一段时间、电脑锁屏或睡眠时自动锁定', '复制的密码在设定时间后自动从剪贴板清除', '可以用触控 ID 解锁', '可以开启防截屏：截图、录屏、共享屏幕时窗口显示为空白', '可以给某个分类单独加一道密码', '不自动填写网页，不往网页里注入代码，减少被钓鱼网站利用的可能'] },
    { h: '会联网的功能', p: ['Vaultyn 的核心功能完全离线。以下功能只在你使用时联网，全部可以不用：'],
      list: ['密码泄露检查：只发送密码 SHA-1 哈希值的前 5 个字符，在本机比对，密码本身不离开设备', '网站图标（默认关闭）：发送网站的域名', '泄露网站列表、两步验证支持列表：下载公开列表，不发送你的数据', '汇率（资产功能，默认关闭）：只发送本位币代码'] },
    { h: '它做不到的事', list: ['如果你的 Mac 已经被装了恶意软件（例如键盘记录器），任何密码软件都无法完全防护', '主密码太简单时，加密再强也可能被猜中，请用一个足够长的主密码', '主密码和恢复密钥都丢了，数据就无法打开，我们也无能为力'] },
    { h: '报告安全问题', p: [`如果你发现了安全漏洞，请发邮件到 ${MAIL}，标题注明“安全”。我们会优先处理，修复前请不要公开细节。`] },
  ] },
  'zh-hant': { title: '安全', lead: '沒有伺服器，就沒有伺服器會被攻破。下面說明 Vaultyn 怎樣保護你的資料，也說明它做不到什麼。', blocks: [
    { h: '資料只在你手裡', p: ['Vaultyn 沒有帳號系統，也沒有保存你資料的伺服器。你記錄的全部內容加密後，只保存在你的 Mac 和你自己選的資料夾裡（例如 iCloud 雲碟）。我們看不到這些資料，也沒有辦法看到。'] },
    { h: '怎樣加密', table: [['環節', '做法'],
      ['主密碼 → 金鑰', '用 Argon2id（64 MB 記憶體、3 輪）把主密碼變成「金鑰加密金鑰」，每次猜測都很慢、很耗記憶體，暴力破解極難'],
      ['庫金鑰', '一把 256 位元的隨機金鑰，用來加密全部資料；它本身再被主密碼產生的金鑰加密保存'],
      ['資料', 'AES-256-GCM 加密，同時能發現資料被竄改'],
      ['恢復金鑰', '160 位元隨機數，經 HKDF 產生另一把金鑰，包裹同一把庫金鑰，用於忘記主密碼時重設'],
      ['附件、網站圖示', '同樣用 AES-256-GCM 加密後保存，檔名是隨機編號，看不出內容']],
      p: ['這樣設計的好處：修改主密碼時只需重新包裹庫金鑰，不用重新加密全部資料；忘記主密碼時，可以用恢復金鑰重新設定。'] },
    { h: '使用時的保護', list: ['閒置一段時間、電腦鎖定或睡眠時自動鎖定', '複製的密碼在設定時間後自動從剪貼簿清除', '可以用 觸控 ID 解鎖', '可以開啟防截圖：截圖、錄影、分享螢幕時視窗顯示為空白', '可以給某個分類單獨加一道密碼', '不自動填寫網頁，不往網頁裡注入程式碼，減少被釣魚網站利用的可能'] },
    { h: '會連網的功能', p: ['Vaultyn 的核心功能完全離線。以下功能只在你使用時連網，全部可以不用：'],
      list: ['密碼外洩檢查：只傳送密碼 SHA-1 雜湊值的前 5 個字元，在本機比對，密碼本身不離開裝置', '網站圖示（預設關閉）：傳送網站的網域', '外洩網站清單、兩步驗證支援清單：下載公開清單，不傳送你的資料', '匯率（資產功能，預設關閉）：只傳送本位幣代碼'] },
    { h: '它做不到的事', list: ['如果你的 Mac 已經被裝了惡意軟體（例如鍵盤側錄程式），任何密碼軟體都無法完全防護', '主密碼太簡單時，加密再強也可能被猜中，請用一個足夠長的主密碼', '主密碼和恢復金鑰都遺失了，資料就無法打開，我們也無能為力'] },
    { h: '回報安全問題', p: [`如果你發現了安全漏洞，請寄信到 ${MAIL}，標題註明「安全」。我們會優先處理，修復前請不要公開細節。`] },
  ] },
  en: { title: 'Security', lead: 'No server means no server to breach. Here’s how Vaultyn protects your data — and what it can’t do.', blocks: [
    { h: 'Your data stays with you', p: ['Vaultyn has no account system and no server that holds your data. Everything you record is encrypted and stored only on your Mac and in a folder you choose (for example iCloud Drive). We can’t see your data and have no way to.'] },
    { h: 'How it’s encrypted', table: [['Layer', 'How'],
      ['Master password → key', 'Argon2id (64 MB of memory, 3 passes) turns your master password into a key-encryption key. Every guess is slow and memory-hungry, making brute force very hard'],
      ['Vault key', 'A random 256-bit key encrypts all data; it is itself stored encrypted by the key derived from your master password'],
      ['Data', 'AES-256-GCM, which also detects tampering'],
      ['Recovery key', 'A 160-bit random value, run through HKDF to make a second key that wraps the same vault key, so you can reset a forgotten master password'],
      ['Attachments and icons', 'Also encrypted with AES-256-GCM; file names are random IDs that reveal nothing']],
      p: ['Because of this design, changing your master password only re-wraps the vault key instead of re-encrypting everything, and a forgotten master password can be reset with the recovery key.'] },
    { h: 'Protection while you use it', list: ['Locks automatically after a period of inactivity, and when your Mac locks or sleeps', 'Copied passwords are cleared from the clipboard after a set time', 'Unlock with Touch ID', 'Optional screenshot protection: the window appears blank in screenshots, recordings and screen sharing', 'Add a separate password to any category', 'No autofill and nothing injected into web pages, reducing phishing risk'] },
    { h: 'Features that use the network', p: ['Vaultyn’s core features work fully offline. These connect only when you use them, and all are optional:'],
      list: ['Password breach check: sends only the first 5 characters of the SHA-1 hash; matching happens on your Mac and the password never leaves it', 'Website icons (off by default): sends the website’s domain', 'Breached sites and two-factor support lists: public lists are downloaded; none of your data is sent', 'Exchange rates (assets feature, off by default): sends only your base currency code'] },
    { h: 'What it can’t do', list: ['If your Mac is already infected with malware (such as a keylogger), no password app can fully protect you', 'A weak master password can be guessed no matter how strong the encryption — use a long one', 'If both your master password and recovery key are lost, the data can’t be opened — we can’t help either'] },
    { h: 'Report a security issue', p: [`Found a vulnerability? Email ${MAIL} with “Security” in the subject. We’ll prioritise it — please don’t disclose details before a fix is out.`] },
  ] },
};

export const PRICING: Record<Lang, TextPage> = {
  zh: { title: '价格', lead: '先免费试用 14 天，觉得好用再购买。', blocks: [
    { h: 'Vaultyn for Mac', table: [['', ''], ['下载', '免费，在 Mac App Store 获取'], ['试用', '14 天，全部功能都能用'], ['解锁全部功能', 'US$24.99（各地区以 App Store 显示的价格为准）'], ['条目数量', '不限'], ['家人共享', '支持，一家人共用一次购买']] },
    { h: '试用结束以后', p: ['试用结束后，你的数据仍然完整保留，不会丢失。'] },
    { h: '换了新 Mac', p: ['用同一个 Apple 账户登录 App Store，就可以恢复已经购买的内容，不需要再付钱。'] },
    { h: '退款', p: ['购买和付款由 Apple 处理。如果需要退款，请通过 Apple 的“报告问题”页面（reportaproblem.apple.com）申请。'] },
    { h: '有问题？', p: [`发邮件到 ${MAIL}。`] },
  ] },
  'zh-hant': { title: '價格', lead: '先免費試用 14 天，覺得好用再購買。', blocks: [
    { h: 'Vaultyn for Mac', table: [['', ''], ['下載', '免費，在 Mac App Store 取得'], ['試用', '14 天，全部功能都能用'], ['解鎖全部功能', 'US$24.99（各地區以 App Store 顯示的價格為準）'], ['項目數量', '不限'], ['家人共享', '支援，一家人共用一次購買']] },
    { h: '試用結束以後', p: ['試用結束後，你的資料仍然完整保留，不會遺失。'] },
    { h: '換了新 Mac', p: ['用同一個 Apple 帳號登入 App Store，就可以恢復已經購買的內容，不需要再付錢。'] },
    { h: '退款', p: ['購買和付款由 Apple 處理。如需退款，請透過 Apple 的「回報問題」頁面（reportaproblem.apple.com）申請。'] },
    { h: '有問題？', p: [`寄信到 ${MAIL}。`] },
  ] },
  en: { title: 'Pricing', lead: 'Try it free for 14 days, then buy it if you like it.', blocks: [
    { h: 'Vaultyn for Mac', table: [['', ''], ['Download', 'Free on the Mac App Store'], ['Trial', '14 days with every feature'], ['Unlock everything', 'US$24.99 (local prices as shown on the App Store)'], ['Entries', 'Unlimited'], ['Family Sharing', 'Supported — one purchase for the whole family']] },
    { h: 'After the trial', p: ['When the trial ends, your data stays intact — nothing is lost.'] },
    { h: 'On a new Mac', p: ['Sign in to the App Store with the same Apple Account to restore your purchase. No need to pay again.'] },
    { h: 'Refunds', p: ['Purchases and payments are handled by Apple. To request a refund, use Apple’s Report a Problem page (reportaproblem.apple.com).'] },
    { h: 'Questions?', p: [`Email ${MAIL}.`] },
  ] },
};

export const TERMS: Record<Lang, TextPage> = {
  zh: { title: '使用条款', lead: '使用 Vaultyn 前，请阅读以下条款。', updated: '最后更新：2026 年 10 月 23 日', blocks: [
    { h: '许可', p: ['通过 Mac App Store 获得的 Vaultyn，适用 Apple 的<a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">标准最终用户许可协议</a>（Licensed Application End User License Agreement）。本页是对它的补充；两者不一致时，以 Apple 的协议为准。'] },
    { h: '你的数据由你负责', list: ['你的数据只保存在你的设备和你选择的文件夹里，我们无法访问，也无法替你恢复。', '请牢记主密码，妥善保存恢复密钥，并定期备份。主密码和恢复密钥都丢失时，数据将无法打开。', '你应当遵守适用的法律，只保存你有权保存的信息。'] },
    { h: '免责声明', p: ['Vaultyn 按“现状”提供。在法律允许的范围内，我们不保证软件没有错误或能满足你的全部需要，也不对因使用或无法使用本软件造成的数据丢失或其他损失承担责任。'] },
    { h: '第三方服务', p: ['部分可选功能会连接第三方服务（详见<a href="../privacy/">隐私政策</a>）。这些服务由第三方提供，适用它们各自的条款。'] },
    { h: '条款更新', p: ['条款如有更新，会在此页面公布，并更新上方的日期。'] },
    { h: '联系我们', p: [`对条款有疑问，请发邮件到 ${MAIL}。`] },
  ] },
  'zh-hant': { title: '使用條款', lead: '使用 Vaultyn 前，請閱讀以下條款。', updated: '最後更新：2026 年 10 月 23 日', blocks: [
    { h: '授權', p: ['透過 Mac App Store 取得的 Vaultyn，適用 Apple 的<a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">標準終端使用者授權協議</a>（Licensed Application End User License Agreement）。本頁是對它的補充；兩者不一致時，以 Apple 的協議為準。'] },
    { h: '你的資料由你負責', list: ['你的資料只保存在你的裝置和你選擇的資料夾裡，我們無法存取，也無法替你復原。', '請牢記主密碼，妥善保存恢復金鑰，並定期備份。主密碼和恢復金鑰都遺失時，資料將無法打開。', '你應當遵守適用的法律，只保存你有權保存的資訊。'] },
    { h: '免責聲明', p: ['Vaultyn 依「現狀」提供。在法律允許的範圍內，我們不保證軟體沒有錯誤或能滿足你的全部需要，也不對因使用或無法使用本軟體造成的資料遺失或其他損失承擔責任。'] },
    { h: '第三方服務', p: ['部分可選功能會連線第三方服務（詳見<a href="../privacy/">隱私權政策</a>）。這些服務由第三方提供，適用它們各自的條款。'] },
    { h: '條款更新', p: ['條款如有更新，會在此頁面公布，並更新上方的日期。'] },
    { h: '聯絡我們', p: [`對條款有疑問，請寄信到 ${MAIL}。`] },
  ] },
  en: { title: 'Terms of Use', lead: 'Please read these terms before using Vaultyn.', updated: 'Last updated: October 23, 2026', blocks: [
    { h: 'License', p: ['Vaultyn obtained from the Mac App Store is licensed under Apple’s <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Licensed Application End User License Agreement</a>. This page supplements it; where they differ, Apple’s agreement prevails.'] },
    { h: 'You’re responsible for your data', list: ['Your data is stored only on your devices and in folders you choose. We can’t access it or recover it for you.', 'Remember your master password, keep your recovery key safe and back up regularly. If both the master password and recovery key are lost, the data can’t be opened.', 'Follow applicable laws and store only information you have the right to store.'] },
    { h: 'Disclaimer', p: ['Vaultyn is provided “as is”. To the extent permitted by law, we don’t guarantee that it is error-free or meets all your needs, and we are not liable for data loss or other damages arising from using or being unable to use it.'] },
    { h: 'Third-party services', p: ['Some optional features connect to third-party services (see the <a href="../privacy/">privacy policy</a>). Those services are provided by third parties under their own terms.'] },
    { h: 'Changes', p: ['Any changes will be posted on this page with an updated date above.'] },
    { h: 'Contact', p: [`Questions about these terms? Email ${MAIL}.`] },
  ] },
};

export const ABOUT: Record<Lang, TextPage> = {
  zh: { title: '关于', lead: 'Vaultyn（密码保险箱）是一个独立开发的 Mac 应用：一本离线加密的账号账本。', blocks: [
    { h: '我们在意的事', list: ['你的数据只属于你：没有服务器，没有账号系统，不收集任何数据', '不只是记住密码，而是把每个账号的来龙去脉都记清楚', '简单、安静、可靠'] },
    { h: '联系我们', p: [`问题、建议、合作，都欢迎发邮件到 ${MAIL}。`] },
  ] },
  'zh-hant': { title: '關於', lead: 'Vaultyn（密碼保險箱）是一個獨立開發的 Mac 應用程式：一本離線加密的帳號帳本。', blocks: [
    { h: '我們在意的事', list: ['你的資料只屬於你：沒有伺服器，沒有帳號系統，不收集任何資料', '不只是記住密碼，而是把每個帳號的來龍去脈都記清楚', '簡單、安靜、可靠'] },
    { h: '聯絡我們', p: [`問題、建議、合作，都歡迎寄信到 ${MAIL}。`] },
  ] },
  en: { title: 'About', lead: 'Vaultyn is an independently developed Mac app: an offline, encrypted account ledger.', blocks: [
    { h: 'What we care about', list: ['Your data belongs to you: no servers, no account system, no data collection', 'Not just remembering passwords — keeping track of everything around each account', 'Simple, quiet and dependable'] },
    { h: 'Contact', p: [`Questions, ideas or partnerships — email ${MAIL}.`] },
  ] },
};
