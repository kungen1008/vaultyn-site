// 网站文字：简体（zh，默认，不带路径前缀）、繁体（zh-hant）、英文（en）
export type Lang = 'zh' | 'zh-hant' | 'en';
export const LANGS: Lang[] = ['zh', 'zh-hant', 'en'];
export const HTML_LANG: Record<Lang, string> = { zh: 'zh-CN', 'zh-hant': 'zh-Hant', en: 'en' };
export const LANG_LABEL: Record<Lang, string> = { zh: '简', 'zh-hant': '繁', en: 'EN' };
/** 某种语言下某个页面的路径，例如 path('en', 'privacy/') → /en/privacy/ */
export const path = (lang: Lang, p = '') => (lang === 'zh' ? '/' : `/${lang}/`) + p;
/** 截图文件夹 */
export const shots = (lang: Lang) => `/shots/${lang}`;

type Feat = { kicker: string; title: string; text: string; points: string[]; img: string };
type QA = { q: string; a: string };
type Section = { h: string; p: string[] };
export interface Dict {
  meta: { title: string; desc: string };
  nav: { features: string; security: string; pricing: string; help: string; get: string };
  hero: { eyebrow: string; h1a: string; h1b: string; lead: string; store: string; more: string; fine: string; checkTitle: string; checkChips: string[]; checkNote: string; videoLabel: string; pause: string; play: string };
  trust: [string, string][];
  pain: { kicker: string; h: string; p: string; items: [string, string][] };
  feats: Feat[];
  grid: [string, string, string][];
  sec: { kicker: string; h: string; p: string; flow: [string, string][]; nots: [string, string][] };
  price: { kicker: string; h: string; p: string; label: string; amount: string; unit: string; points: string[]; btn: string };
  faq: { kicker: string; h: string; items: QA[] };
  footer: { tagline: string; product: string; support: string; legal: string; links: Record<string, string> };
  privacy: { title: string; updated: string; sections: Section[] };
  help: { title: string; lead: string; contactH: string; contactP: string; startH: string; steps: string[]; faqH: string; items: QA[]; securityH: string; securityP: string };
}

const zh: Dict = {
  meta: { title: 'Vaultyn · 离线加密的账号账本', desc: '密码、绑定的手机和邮箱、两步验证、备用码、安全问答，一个地方记全。数据加密后只存在你自己的设备和网盘里，没有服务器，不用注册。' },
  nav: { features: '功能', security: '安全', pricing: '价格', help: '帮助', get: '获取' },
  hero: { eyebrow: '离线加密的账号账本', h1a: '每个账号，', h1b: '都记得清清楚楚。',
    lead: '密码、绑定的手机和邮箱、两步验证、备用码、安全问答……一个地方记全。数据加密后只存在你自己的 Mac 和网盘里——没有服务器，不用注册。',
    store: 'Mac App Store · 即将上架', more: '了解功能 →', fine: 'macOS 12 及以上 · 简体中文 / 繁體中文 / English',
    checkTitle: '安全检查', checkChips: ['1 个弱密码', '2 个重复', '2 个到期'], checkNote: '全部在本机完成', videoLabel: 'Vaultyn 使用演示：搜索账号、复制密码、查看验证码和安全检查', pause: '暂停演示', play: '播放演示' },
  trust: [['完全离线', '不联网也能用'], ['不用注册', '没有账号、没有服务器'], ['AES-256 加密', 'Argon2id 保护主密码'], ['每天自动备份', '可放进 iCloud 云盘同步'], ['三种语言', '简体、繁體、English']],
  pain: { kicker: '为什么需要它', h: '密码记住了，其他的呢？', p: '密码管理器帮你记住密码，可真正麻烦的，往往是密码之外的那些事。',
    items: [['“这个网站当初是用哪个邮箱注册的？”', '每个账号绑定的<b>手机、邮箱、登录方式</b>都记在一起，搜一下就知道。'],
      ['“换了手机号，哪些账号要改绑？”', '按手机号、邮箱汇总，<b>一眼看到受影响的全部账号</b>，改完一个是一个。'],
      ['“两步验证的备用码去哪了？”', '验证码、<b>备用码、安全问答</b>和账号放在一起，用过的备用码会标记出来。']] },
  feats: [
    { kicker: '账号关系', title: '一个邮箱牵动多少账号，<br>一目了然', text: '邮箱被盗、手机号要注销之前，先看看会影响哪些账号。', points: ['按邮箱、手机号自动汇总', '记下每个账号的登录方式（例如用另一个账号登录）', '点一下就跳到对应账号去修改'], img: 'audit-rel' },
    { kicker: '安全检查', title: '弱密码、重复密码、<br>泄露和到期，主动提醒', text: '不用自己一个个翻，问题直接列出来，附带修改的入口。', points: ['密码强度、重复使用检查', '已知泄露检查（只发送密码哈希的前 5 位）', '证件、会员、订阅到期前提醒'], img: 'audit' },
    { kicker: '不止是密码', title: '银行卡、证件、Wi-Fi、<br>贷款……30 多种类型', text: '每种类型都有合适的栏位和展示方式：银行卡有卡面，Wi-Fi 能生成连接二维码，贷款会算出每月还款和还款计划。', points: ['常用栏位直接填，其他收在“更多栏位”', '一个账号下挂多张卡、多个证件', '可以自己新建类型'], img: 'loan' },
  ],
  grid: [['🔢', '两步验证码', '内置验证器，直接显示 6 位码'], ['🧾', '备用码管理', '用过的一个个勾掉，剩几个一目了然'], ['📶', 'Wi-Fi 二维码', '家人朋友扫码直接连网'], ['📎', '加密附件', '证件照片、合同扫描件一起加密保存'],
    ['⏰', '到期提醒', '续费、年检、保险缴费，一键顺延'], ['🖨️', '紧急恢复页', '打印出来交给家人，关键时刻能接手'], ['🌙', '深色模式', '跟随系统，夜里看也舒服'], ['🔐', '触控 ID', '用指纹快速解锁']],
  sec: { kicker: '安全', h: '你的数据，只属于你', p: '没有服务器，就没有服务器会被攻破。我们看不到你的数据，也没有办法看到。',
    flow: [['主密码', '只在你脑子里'], ['Argon2id', '把主密码变成加密密钥，暴力破解极慢'], ['AES-256-GCM', '加密全部数据'], ['你的数据文件', '存在你的 Mac 和你选的网盘里']],
    nots: [['不收集数据', '没有统计、没有广告、没有账号系统。'], ['不自动填写', '不往网页里注入代码，减少被钓鱼网站利用的可能。'], ['主密码无法找回', '所以请保存好恢复密钥——这也是“只有你能打开”的保证。']] },
  price: { kicker: '价格', h: '先试用，再决定', p: '下载后 14 天内可以使用全部功能。', label: 'Mac · App Store', amount: 'US$24.99', unit: '解锁全部功能', points: ['免费下载，14 天完整试用', '没有条目数量限制', '支持“家人共享”'], btn: '即将上架' },
  faq: { kicker: '常见问题', h: '你可能想问', items: [
    { q: 'Mac 坏了，数据会丢吗？', a: '每次修改都会自动写入数据文件夹，每天还有备份。把数据文件夹放在 iCloud 云盘等网盘里，换新 Mac 后打开同步文件、输入主密码即可。' },
    { q: '能在多台 Mac 上用吗？', a: '可以。把数据文件夹放在 iCloud 云盘、Dropbox、OneDrive 等同步目录里，各台 Mac 打开同一个文件。' },
    { q: '忘了主密码怎么办？', a: '用创建时保存的恢复密钥重新设置。没有恢复密钥就无法打开——因为连我们也打不开。' },
    { q: '能从其他密码管理器导入吗？', a: '支持从 1Password、Bitwarden、KeePass、LastPass、Apple 密码和浏览器导出的文件导入，也能导入 Google 身份验证器的二维码。' }] },
  footer: { tagline: '离线加密的账号账本', product: '产品', support: '支持', legal: '说明', links: { features: '功能', pricing: '价格', help: '帮助中心', faq: '常见问题', terms: '使用条款', about: '关于', contact: '联系支持', privacy: '隐私政策', security: '安全说明' } },
  privacy: { title: '隐私政策', updated: '最后更新：2026 年 10 月 23 日', sections: [
    { h: '一句话概括', p: ['Vaultyn 不收集、不上传、不出售你的任何个人数据。没有账号系统，没有保存你数据的服务器，也没有统计和广告。'] },
    { h: '你的数据存在哪里', p: ['你在 Vaultyn 里记录的全部内容，都用 AES-256-GCM 加密（密钥由你的主密码经 Argon2id 生成），保存在你的 Mac 上和你自己选择的文件夹里（例如 iCloud 云盘）。', '我们无法访问这些数据，也无法帮你找回主密码。'] },
    { h: '会联网的功能', p: ['以下功能只在你使用时联网，全部可以不用：',
      '<b>网站图标</b>（默认关闭）：打开后，App 会访问条目对应的网站读取图标，或向 icon.horse、favicone.com 查询，会发送该网站的域名。',
      '<b>App Store 图标</b>：为 App 类条目向苹果的公开查询接口发送应用编号。',
      '<b>密码泄露检查</b>：只发送密码 SHA-1 哈希值的前 5 个字符到 Have I Been Pwned（api.pwnedpasswords.com），比对在本机完成，密码本身不会离开你的设备。',
      '<b>泄露网站、两步验证支持列表</b>：从 haveibeenpwned.com 和 2fa.directory 下载公开列表，在本机比对，不发送你的数据。',
      '<b>汇率</b>（资产功能，默认关闭）：从 open.er-api.com 获取汇率，只发送本位币代码。',
      '这些服务由第三方运营，它们能看到你的 IP 地址，并适用它们各自的隐私政策。'] },
    { h: 'App Store 购买', p: ['购买和付款由 Apple 处理。我们只能看到 Apple 提供的匿名销售统计，看不到你的姓名、邮箱或付款信息。'] },
    { h: '本网站', p: ['本网站托管在 GitHub Pages，不使用 Cookie，也没有统计代码。GitHub 可能出于安全目的记录访问者的 IP 地址，详见 GitHub 的隐私声明。'] },
    { h: '联系我们', p: ['对本政策有任何疑问，请发邮件到 <a href="mailto:support@vaultyn.com">support@vaultyn.com</a>。本政策如有更新，会在此页面公布。'] }] },
  help: { title: '使用帮助', lead: '遇到问题、有建议，或者想报告安全问题，都可以联系我们。',
    contactH: '联系我们', contactP: '发邮件到 <a href="mailto:support@vaultyn.com">support@vaultyn.com</a>，我们会尽快回复。请不要在邮件里发送你的密码或主密码。',
    startH: '开始使用', steps: ['设置主密码，并把恢复密钥保存在安全的地方（可以打印出来）。', '选择数据文件夹。想在多台 Mac 上使用，就放在 iCloud 云盘等网盘里。', '添加账号，或者从其他密码管理器导入。'],
    faqH: '常见问题', items: [
      { q: '忘了主密码怎么办？', a: '在锁屏页点“忘记主密码？”，用恢复密钥重新设置。恢复密钥也丢了的话，数据无法打开，我们也无能为力。' },
      { q: '换了新 Mac 怎么继续用？', a: '在新 Mac 上安装 Vaultyn，在锁屏页点“打开同步文件”，选择网盘里的 vault-sync.json，输入主密码即可。' },
      { q: '怎么从备份恢复？', a: '在锁屏页点“从备份恢复”，选择数据文件夹 backups 里某一天的备份文件。' },
      { q: '怎么删除全部数据？', a: '删除数据文件夹，并在“设置”里清除本机保存的数据，然后删除 App 即可。我们这里没有你的任何数据，不需要另外申请删除。' }],
    securityH: '报告安全问题', securityP: '如果你发现了安全漏洞，请发邮件到 <a href="mailto:support@vaultyn.com">support@vaultyn.com</a>，标题注明“安全”。我们会优先处理，修复前请不要公开细节。' },
};

const zhHant: Dict = {
  meta: { title: 'Vaultyn · 離線加密的帳號帳本', desc: '密碼、綁定的手機和電子郵件、兩步驗證、備用碼、安全問答，一個地方記全。資料加密後只存在你自己的裝置和雲端硬碟裡，沒有伺服器，不用註冊。' },
  nav: { features: '功能', security: '安全', pricing: '價格', help: '說明', get: '取得' },
  hero: { eyebrow: '離線加密的帳號帳本', h1a: '每個帳號，', h1b: '都記得清清楚楚。',
    lead: '密碼、綁定的手機和電子郵件、兩步驗證、備用碼、安全問答……一個地方記全。資料加密後只存在你自己的 Mac 和雲端硬碟裡——沒有伺服器，不用註冊。',
    store: 'Mac App Store · 即將上架', more: '了解功能 →', fine: 'macOS 12 以上 · 简体中文 / 繁體中文 / English',
    checkTitle: '安全檢查', checkChips: ['1 個弱密碼', '2 個重複', '2 個到期'], checkNote: '全部在本機完成', videoLabel: 'Vaultyn 使用示範：搜尋帳號、複製密碼、查看驗證碼和安全檢查', pause: '暫停示範', play: '播放示範' },
  trust: [['完全離線', '不連網也能用'], ['不用註冊', '沒有帳號、沒有伺服器'], ['AES-256 加密', 'Argon2id 保護主密碼'], ['每天自動備份', '可放進 iCloud 雲碟同步'], ['三種語言', '简体、繁體、English']],
  pain: { kicker: '為什麼需要它', h: '密碼記住了，其他的呢？', p: '密碼管理器幫你記住密碼，可真正麻煩的，往往是密碼之外的那些事。',
    items: [['「這個網站當初是用哪個信箱註冊的？」', '每個帳號綁定的<b>手機、信箱、登入方式</b>都記在一起，搜尋一下就知道。'],
      ['「換了手機號碼，哪些帳號要改綁？」', '依手機號碼、信箱彙總，<b>一眼看到受影響的全部帳號</b>，改完一個是一個。'],
      ['「兩步驗證的備用碼去哪了？」', '驗證碼、<b>備用碼、安全問答</b>和帳號放在一起，用過的備用碼會標記出來。']] },
  feats: [
    { kicker: '帳號關係', title: '一個信箱牽動多少帳號，<br>一目了然', text: '信箱被盜、手機號碼要停用之前，先看看會影響哪些帳號。', points: ['依信箱、手機號碼自動彙總', '記下每個帳號的登入方式（例如用另一個帳號登入）', '點一下就跳到對應帳號去修改'], img: 'audit-rel' },
    { kicker: '安全檢查', title: '弱密碼、重複密碼、<br>外洩和到期，主動提醒', text: '不用自己一個個翻，問題直接列出來，附帶修改的入口。', points: ['密碼強度、重複使用檢查', '已知外洩檢查（只傳送密碼雜湊的前 5 位）', '證件、會員、訂閱到期前提醒'], img: 'audit' },
    { kicker: '不只是密碼', title: '銀行卡、證件、Wi-Fi、<br>貸款……30 多種類型', text: '每種類型都有合適的欄位和呈現方式：銀行卡有卡面，Wi-Fi 能產生連線 QR 碼，貸款會算出每月還款和還款計畫。', points: ['常用欄位直接填，其他收在「更多欄位」', '一個帳號下掛多張卡、多個證件', '可以自己新增類型'], img: 'loan' },
  ],
  grid: [['🔢', '兩步驗證碼', '內建驗證器，直接顯示 6 位數驗證碼'], ['🧾', '備用碼管理', '用過的一個個勾掉，剩幾個一目了然'], ['📶', 'Wi-Fi QR 碼', '家人朋友掃碼直接連網'], ['📎', '加密附件', '證件照片、合約掃描檔一起加密保存'],
    ['⏰', '到期提醒', '續費、驗車、保費，一鍵順延'], ['🖨️', '緊急恢復頁', '列印出來交給家人，關鍵時刻能接手'], ['🌙', '深色模式', '跟隨系統，夜裡看也舒服'], ['🔐', '觸控 ID', '用指紋快速解鎖']],
  sec: { kicker: '安全', h: '你的資料，只屬於你', p: '沒有伺服器，就沒有伺服器會被攻破。我們看不到你的資料，也沒有辦法看到。',
    flow: [['主密碼', '只在你腦子裡'], ['Argon2id', '把主密碼變成加密金鑰，暴力破解極慢'], ['AES-256-GCM', '加密全部資料'], ['你的資料檔', '存在你的 Mac 和你選的雲端硬碟裡']],
    nots: [['不收集資料', '沒有統計、沒有廣告、沒有帳號系統。'], ['不自動填寫', '不往網頁裡注入程式碼，減少被釣魚網站利用的可能。'], ['主密碼無法找回', '所以請保存好恢復金鑰——這也是「只有你能打開」的保證。']] },
  price: { kicker: '價格', h: '先試用，再決定', p: '下載後 14 天內可以使用全部功能。', label: 'Mac · App Store', amount: 'US$24.99', unit: '解鎖全部功能', points: ['免費下載，14 天完整試用', '沒有項目數量限制', '支援「家人共享」'], btn: '即將上架' },
  faq: { kicker: '常見問題', h: '你可能想問', items: [
    { q: 'Mac 壞了，資料會不見嗎？', a: '每次修改都會自動寫入資料夾，每天還有備份。把資料夾放在 iCloud 雲碟等雲端硬碟裡，換新 Mac 後開啟同步檔、輸入主密碼即可。' },
    { q: '能在多台 Mac 上用嗎？', a: '可以。把資料夾放在 iCloud 雲碟、Dropbox、OneDrive 等同步目錄裡，各台 Mac 開啟同一個檔案。' },
    { q: '忘了主密碼怎麼辦？', a: '用建立時保存的恢復金鑰重新設定。沒有恢復金鑰就無法打開——因為連我們也打不開。' },
    { q: '能從其他密碼管理器匯入嗎？', a: '支援從 1Password、Bitwarden、KeePass、LastPass、Apple 密碼和瀏覽器匯出的檔案匯入，也能匯入 Google 身份驗證器的 QR 碼。' }] },
  footer: { tagline: '離線加密的帳號帳本', product: '產品', support: '支援', legal: '說明', links: { features: '功能', pricing: '價格', help: '說明中心', faq: '常見問題', terms: '使用條款', about: '關於', contact: '聯絡支援', privacy: '隱私權政策', security: '安全說明' } },
  privacy: { title: '隱私權政策', updated: '最後更新：2026 年 10 月 23 日', sections: [
    { h: '一句話概括', p: ['Vaultyn 不收集、不上傳、不出售你的任何個人資料。沒有帳號系統，沒有保存你資料的伺服器，也沒有統計和廣告。'] },
    { h: '你的資料存在哪裡', p: ['你在 Vaultyn 裡記錄的全部內容，都用 AES-256-GCM 加密（金鑰由你的主密碼經 Argon2id 產生），保存在你的 Mac 上和你自己選擇的資料夾裡（例如 iCloud 雲碟）。', '我們無法存取這些資料，也無法幫你找回主密碼。'] },
    { h: '會連網的功能', p: ['以下功能只在你使用時連網，全部可以不用：',
      '<b>網站圖示</b>（預設關閉）：開啟後，App 會造訪項目對應的網站讀取圖示，或向 icon.horse、favicone.com 查詢，會傳送該網站的網域。',
      '<b>App Store 圖示</b>：為 App 類項目向 Apple 的公開查詢介面傳送應用程式編號。',
      '<b>密碼外洩檢查</b>：只傳送密碼 SHA-1 雜湊值的前 5 個字元到 Have I Been Pwned（api.pwnedpasswords.com），比對在本機完成，密碼本身不會離開你的裝置。',
      '<b>外洩網站、兩步驗證支援清單</b>：從 haveibeenpwned.com 和 2fa.directory 下載公開清單，在本機比對，不傳送你的資料。',
      '<b>匯率</b>（資產功能，預設關閉）：從 open.er-api.com 取得匯率，只傳送本位幣代碼。',
      '這些服務由第三方營運，它們能看到你的 IP 位址，並適用它們各自的隱私權政策。'] },
    { h: 'App Store 購買', p: ['購買和付款由 Apple 處理。我們只能看到 Apple 提供的匿名銷售統計，看不到你的姓名、信箱或付款資訊。'] },
    { h: '本網站', p: ['本網站託管在 GitHub Pages，不使用 Cookie，也沒有統計程式碼。GitHub 可能基於安全目的記錄訪客的 IP 位址，詳見 GitHub 的隱私權聲明。'] },
    { h: '聯絡我們', p: ['對本政策有任何疑問，請寄信到 <a href="mailto:support@vaultyn.com">support@vaultyn.com</a>。本政策如有更新，會在此頁面公布。'] }] },
  help: { title: '使用說明', lead: '遇到問題、有建議，或者想回報安全問題，都可以聯絡我們。',
    contactH: '聯絡我們', contactP: '寄信到 <a href="mailto:support@vaultyn.com">support@vaultyn.com</a>，我們會盡快回覆。請不要在信裡傳送你的密碼或主密碼。',
    startH: '開始使用', steps: ['設定主密碼，並把恢復金鑰保存在安全的地方（可以列印出來）。', '選擇資料夾。想在多台 Mac 上使用，就放在 iCloud 雲碟等雲端硬碟裡。', '新增帳號，或者從其他密碼管理器匯入。'],
    faqH: '常見問題', items: [
      { q: '忘了主密碼怎麼辦？', a: '在鎖定畫面點「忘記主密碼？」，用恢復金鑰重新設定。恢復金鑰也遺失的話，資料無法打開，我們也無能為力。' },
      { q: '換了新 Mac 怎麼繼續用？', a: '在新 Mac 上安裝 Vaultyn，在鎖定畫面點「開啟同步檔案」，選擇雲端硬碟裡的 vault-sync.json，輸入主密碼即可。' },
      { q: '怎麼從備份復原？', a: '在鎖定畫面點「從備份復原」，選擇資料夾 backups 裡某一天的備份檔。' },
      { q: '怎麼刪除全部資料？', a: '刪除資料夾，並在「設定」裡清除本機保存的資料，然後刪除 App 即可。我們這裡沒有你的任何資料，不需要另外申請刪除。' }],
    securityH: '回報安全問題', securityP: '如果你發現了安全漏洞，請寄信到 <a href="mailto:support@vaultyn.com">support@vaultyn.com</a>，標題註明「安全」。我們會優先處理，修復前請不要公開細節。' },
};

const en: Dict = {
  meta: { title: 'Vaultyn · The offline, encrypted account ledger', desc: 'Passwords, linked phones and emails, two-factor codes, backup codes and security questions — all in one place. Encrypted and stored only on your own devices and cloud drive. No servers, no sign-up.' },
  nav: { features: 'Features', security: 'Security', pricing: 'Pricing', help: 'Help', get: 'Get' },
  hero: { eyebrow: 'The offline, encrypted account ledger', h1a: 'Every account,', h1b: 'clearly accounted for.',
    lead: 'Passwords, linked phones and emails, two-factor codes, backup codes, security questions… all in one place. Encrypted and kept only on your own Mac and cloud drive — no servers, no sign-up.',
    store: 'Mac App Store · Coming soon', more: 'See features →', fine: 'macOS 12 or later · 简体中文 / 繁體中文 / English',
    checkTitle: 'Security check', checkChips: ['1 weak', '2 reused', '2 expiring'], checkNote: 'Done entirely on this Mac', videoLabel: 'Vaultyn demo: searching an account, copying a password, viewing a code and the security check', pause: 'Pause demo', play: 'Play demo' },
  trust: [['Fully offline', 'Works without internet'], ['No sign-up', 'No accounts, no servers'], ['AES-256', 'Argon2id protects your master password'], ['Daily backups', 'Sync through iCloud Drive'], ['Three languages', 'English, 简体, 繁體']],
  pain: { kicker: 'Why Vaultyn', h: 'Passwords remembered. What about the rest?', p: 'Password managers remember your passwords. The real headaches are often everything around them.',
    items: [['“Which email did I sign up with?”', 'Each account keeps its <b>phone, email and sign-in method</b> together — just search.'],
      ['“New phone number — which accounts need updating?”', 'Grouped by phone and email, so you <b>see every affected account at a glance</b>.'],
      ['“Where are my backup codes?”', 'Two-factor codes, <b>backup codes and security questions</b> live with the account; used codes are marked.']] },
  feats: [
    { kicker: 'Account map', title: 'See everything that hangs<br>on one email address', text: 'Before an email gets hacked or a number gets cancelled, see exactly which accounts it affects.', points: ['Grouped by email and phone automatically', 'Record how each account signs in (e.g. via another account)', 'Jump straight to the account to fix it'], img: 'audit-rel' },
    { kicker: 'Security check', title: 'Weak, reused, breached<br>and expiring — flagged for you', text: 'No digging through entries: problems are listed with a way to fix each one.', points: ['Password strength and reuse checks', 'Known-breach check (sends only the first 5 characters of a hash)', 'Reminders before IDs, memberships and subscriptions expire'], img: 'audit' },
    { kicker: 'More than passwords', title: 'Cards, IDs, Wi-Fi, loans…<br>30+ entry types', text: 'Every type gets the right fields and layout: cards show a card face, Wi-Fi makes a join QR code, loans calculate monthly payments and a full schedule.', points: ['Common fields up front, the rest under “More fields”', 'Several cards or IDs under one account', 'Create your own types'], img: 'loan' },
  ],
  grid: [['🔢', 'Two-factor codes', 'Built-in authenticator shows 6-digit codes'], ['🧾', 'Backup codes', 'Tick off used codes; see how many are left'], ['📶', 'Wi-Fi QR code', 'Guests scan to join your network'], ['📎', 'Encrypted files', 'Keep ID photos and scans encrypted too'],
    ['⏰', 'Expiry reminders', 'Renewals and payments, rolled forward in one click'], ['🖨️', 'Emergency sheet', 'Print it so family can take over if needed'], ['🌙', 'Dark mode', 'Follows your system setting'], ['🔐', 'Touch ID', 'Unlock with your fingerprint']],
  sec: { kicker: 'Security', h: 'Your data belongs to you', p: 'No server means no server to breach. We can’t see your data — and have no way to.',
    flow: [['Master password', 'Only in your head'], ['Argon2id', 'Turns it into a key; brute force is very slow'], ['AES-256-GCM', 'Encrypts everything'], ['Your data file', 'On your Mac and your chosen cloud drive']],
    nots: [['No data collection', 'No analytics, no ads, no account system.'], ['No autofill', 'Nothing is injected into web pages, reducing phishing risk.'], ['No password recovery', 'Keep your recovery key safe — that’s what makes it yours alone.']] },
  price: { kicker: 'Pricing', h: 'Try it first', p: 'Every feature is yours for 14 days after you download.', label: 'Mac · App Store', amount: 'US$24.99', unit: 'unlocks everything', points: ['Free download with a 14-day full trial', 'No limit on the number of entries', 'Family Sharing supported'], btn: 'Coming soon' },
  faq: { kicker: 'FAQ', h: 'Questions you might have', items: [
    { q: 'What if my Mac dies?', a: 'Every change is written to your data folder automatically, with daily backups. Keep the folder in iCloud Drive or another cloud drive, then open the sync file on your new Mac and enter your master password.' },
    { q: 'Can I use it on more than one Mac?', a: 'Yes. Keep the data folder in iCloud Drive, Dropbox, OneDrive or similar, and open the same file on each Mac.' },
    { q: 'What if I forget my master password?', a: 'Reset it with the recovery key you saved when you created the vault. Without it the data can’t be opened — not even by us.' },
    { q: 'Can I import from another password manager?', a: 'Yes — files exported from 1Password, Bitwarden, KeePass, LastPass, Apple Passwords and browsers, plus Google Authenticator export QR codes.' }] },
  footer: { tagline: 'The offline, encrypted account ledger', product: 'Product', support: 'Support', legal: 'Legal', links: { features: 'Features', pricing: 'Pricing', help: 'Help Center', faq: 'FAQ', terms: 'Terms of Use', about: 'About', contact: 'Contact support', privacy: 'Privacy policy', security: 'Security' } },
  privacy: { title: 'Privacy policy', updated: 'Last updated: October 23, 2026', sections: [
    { h: 'In one sentence', p: ['Vaultyn does not collect, upload or sell any of your personal data. There is no account system, no server holding your data, and no analytics or ads.'] },
    { h: 'Where your data lives', p: ['Everything you record in Vaultyn is encrypted with AES-256-GCM (the key is derived from your master password with Argon2id) and stored on your Mac and in a folder you choose (for example iCloud Drive).', 'We cannot access this data and cannot recover your master password.'] },
    { h: 'Features that use the network', p: ['These features connect only when you use them, and all are optional:',
      '<b>Website icons</b> (off by default): when on, the app visits the entry’s website to read its icon, or asks icon.horse / favicone.com, sending that website’s domain.',
      '<b>App Store icons</b>: for app entries, sends the app’s ID to Apple’s public lookup service.',
      '<b>Password breach check</b>: sends only the first 5 characters of the password’s SHA-1 hash to Have I Been Pwned (api.pwnedpasswords.com); matching happens on your device and the password never leaves it.',
      '<b>Breached sites and two-factor support lists</b>: public lists are downloaded from haveibeenpwned.com and 2fa.directory and compared on your device; none of your data is sent.',
      '<b>Exchange rates</b> (assets feature, off by default): fetched from open.er-api.com, sending only your base currency code.',
      'These services are run by third parties, can see your IP address, and have their own privacy policies.'] },
    { h: 'App Store purchases', p: ['Purchases and payments are handled by Apple. We only see anonymous sales figures from Apple — never your name, email or payment details.'] },
    { h: 'This website', p: ['This site is hosted on GitHub Pages and uses no cookies or analytics. GitHub may log visitors’ IP addresses for security purposes; see GitHub’s privacy statement.'] },
    { h: 'Contact', p: ['Questions about this policy? Email <a href="mailto:support@vaultyn.com">support@vaultyn.com</a>. Any changes will be posted on this page.'] }] },
  help: { title: 'Help', lead: 'Problems, suggestions or a security report — we’d like to hear from you.',
    contactH: 'Contact us', contactP: 'Email <a href="mailto:support@vaultyn.com">support@vaultyn.com</a> and we’ll reply as soon as we can. Please never include your passwords or master password.',
    startH: 'Getting started', steps: ['Set a master password and keep the recovery key somewhere safe (you can print it).', 'Choose a data folder. To use several Macs, put it in iCloud Drive or another cloud drive.', 'Add accounts, or import from another password manager.'],
    faqH: 'FAQ', items: [
      { q: 'I forgot my master password.', a: 'On the lock screen, click “Forgot master password?” and reset it with your recovery key. If the recovery key is lost too, the data cannot be opened — we can’t help either.' },
      { q: 'How do I move to a new Mac?', a: 'Install Vaultyn on the new Mac, click “Open sync file” on the lock screen, choose vault-sync.json in your cloud drive and enter your master password.' },
      { q: 'How do I restore a backup?', a: 'Click “Restore from backup” on the lock screen and pick a daily backup from the backups folder inside your data folder.' },
      { q: 'How do I delete all my data?', a: 'Delete your data folder, clear the locally stored data in Settings, then delete the app. We hold none of your data, so there is nothing else to request.' }],
    securityH: 'Report a security issue', securityP: 'Found a vulnerability? Email <a href="mailto:support@vaultyn.com">support@vaultyn.com</a> with “Security” in the subject. We’ll prioritise it — please don’t disclose details before a fix is out.' },
};

export const T: Record<Lang, Dict> = { zh, 'zh-hant': zhHant, en };
