# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

表彰状クリエイター (Award Certificate Creator) の公式Webサイト。iOSアプリのランディングページ、プライバシーポリシー、利用規約、お問い合わせページを提供。

- **本番URL**: https://awardcert.honeymarron.com/
- **ホスティング**: Vercel
- **対応言語**: 日本語 (デフォルト), 英語 (`/en/`)

## Development

```bash
# ローカルサーバー起動
python3 server.py
# → http://localhost:8000

# デプロイ (mainブランチへのpushで自動デプロイ)
git push origin main
```

## Architecture

### ファイル構成
- ルート (`/`) - 日本語ページ
- `/en/` - 英語ページ (同一構造)
- `styles.css` - メインCSS (Gold & Cream テーマ)
- `*-styles.css` - ページ専用スタイル (privacy, terms, contact)
- `script.js` - モバイルメニュー制��

### Design System (styles.css)
- **カラー**: Gold (`#C9A962`) & Cream (`#FFFEF7`) テーマ
- **フォント**: Cormorant Garamond (見出し), DM Sans (本文), Noto Serif/Sans JP (日本語)
- **互換性変数**: レガシーページ用に `--primary-color`, `--gradient-primary` 等をエイリアス定義

### SEO
- 各ページにJSON-LD構造化データ (WebSite, SoftwareApplication, FAQPage, WebPage)
- Google Analytics 4: `G-NG5MN5K8HM`
- hreflang で日英ページを関連付け

### Vercel設定 (vercel.json)
- `cleanUrls: true` - `.html` 拡張子なしでアクセス可能
- リダイレクト設定済み (`/privacy` → `/privacy-policy` 等)
- 静的ファイルに長期キャッシュ設定

## Git Commit Rules

- コミットメッセージに署名 (`🤖 Generated with Claude Code`) を**付けない**
- `Co-Authored-By` 行も不要
