# 表彰状クリエイター - 公式Webサイト

表彰状クリエイターアプリの公式Webサイトです。アプリの紹介、プライバシーポリシー、お問い合わせフォームを提供しています。

## 🌐 サイト構成

- **ホームページ** (`index.html`) - アプリ紹介・機能説明・ダウンロードリンク
- **プライバシーポリシー** (`privacy-policy.html`) - アプリのプライバシーポリシー
- **お問い合わせ** (`contact.html`) - Tallyフォーム埋め込みによる問い合わせページ

## 🛠 技術スタック

- **HTML5** - セマンティックなマークアップ
- **CSS3** - モダンなデザイン（Grid Layout、Flexbox使用）
- **Tally** - お問い合わせフォーム
- **Vercel** - ホスティング

## 🚀 デプロイ手順

### Vercelでのデプロイ

1. **GitHubリポジトリとの連携**
   ```bash
   # Vercel CLIをインストール（オプション）
   npm i -g vercel
   
   # Vercelにログイン
   vercel login
   
   # プロジェクトをデプロイ
   vercel
   ```

2. **Vercel Webダッシュボードから**
   - [Vercel](https://vercel.com)にログイン
   - "New Project"をクリック
   - GitHubリポジトリ `awardcert-website` を選択
   - "Deploy"をクリック

### 自動デプロイ設定
- `main`ブランチへのプッシュで自動デプロイ
- プレビューデプロイも自動生成

## 📝 Tallyフォーム設定

### 1. Tallyアカウント作成
1. [Tally.so](https://tally.so)でアカウント作成
2. 新しいフォームを作成

### 2. フォーム項目設定
推奨フォーム項目：
- **お名前** (必須) - テキスト入力
- **メールアドレス** (必須) - Email入力
- **お問い合わせ種別** (必須) - 選択肢
  - よくある質問
  - 不具合報告
  - 機能要望
  - その他
- **使用デバイス** - 選択肢
  - iOS
  - Android
  - 両方
- **お問い合わせ内容** (必須) - 長文テキスト

### 3. フォーム埋め込み
1. Tallyでフォーム作成完了後、"Share" → "Embed"を選択
2. 埋め込みコードをコピー
3. `contact.html`の`<!-- Tallyフォーム埋め込みエリア -->`部分を置き換え

```html
<!-- 実際の埋め込みコード例 -->
<iframe 
    data-tally-src="https://tally.so/embed/YOUR_FORM_ID?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
    loading="lazy" 
    width="100%" 
    height="500" 
    frameborder="0" 
    marginheight="0" 
    marginwidth="0" 
    title="お問い合わせフォーム">
</iframe>
<script>
    var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.head.appendChild(s);}
</script>
```

## 🎨 カスタマイズ

### デザインの変更
- `styles.css` - 全体共通スタイル
- `privacy-styles.css` - プライバシーポリシーページ専用
- `contact-styles.css` - お問い合わせページ専用

### カラーパレット
```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --accent-color: #e74c3c;
  --background-color: #f8f9fa;
  --text-color: #2c3e50;
  --muted-color: #7f8c8d;
}
```

## 📱 アプリストア要件

このWebサイトは以下のアプリストア要件を満たします：

### iOS App Store
- ✅ プライバシーポリシーの公開URL
- ✅ サポート連絡先（お問い合わせフォーム）
- ✅ アプリ説明・機能紹介

### Google Play Store
- ✅ プライバシーポリシーの公開URL
- ✅ 開発者連絡先情報
- ✅ アプリの詳細説明

## 🔗 関連リンク

- **メインアプリリポジトリ**: [AwardCertApp](https://github.com/[username]/AwardCertApp)
- **App Store**: [リンク準備中]
- **Google Play**: [リンク準備中]

## 📄 ライセンス

このプロジェクトは[0BSD License](https://choosealicense.com/licenses/0bsd/)の下で公開されています。

---

Made with ❤️ for 表彰状クリエイター