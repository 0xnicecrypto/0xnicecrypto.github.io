---
title: "GitHub Pages Custom Domain Setup"
description: "What after you purchased your domain? A step-by-step guide to setting up a custom domain for your GitHub Pages site."
publishDate: "2026-02-11"
author: "bubbleBoy"
tags: ["tutorial", "github", "domain"]
draft: true
---

## What after you purchased your domain?

So you just decided that you want to step up the game a little bit. You want your GitHub Pages website to be shown on the new domain you purchased for your personal website. But the GitHub Doc was not very helpful. Here is the guide for you. With visual guidance. You are welcome.

## Step 1: Create CNAME file under your project directory

Simply type in the domain you just purchased.

![CNAME file example](/images/posts/cname-file-example.png)

*Example: CNAME file with your custom domain*

## Step 2: Change DNS records and CNAME records

1. Now, go to the website that you just purchased your domain. (for me was NameCheap, but it can be GoDaddy, CloudFlare, or whatever website you used to purchase your domain)
2. Go to the DNS settings section and add these records.

   | Type | Host | Value |
   |------|------|-------|
   | **A** | `@` | `185.199.108.153` |
   | **A** | `@` | `185.199.109.153` |
   | **A** | `@` | `185.199.110.153` |
   | **A** | `@` | `185.199.111.153` |
   | **CNAME** | `www` | `yourusername.github.io` |

   ![DNS Records Example](/images/posts/dns-records-example.png)

3. Save

## Step 3: Change the settings in GitHub

1. Go to the repository of your GitHub page `<YOUR_GITHUB_USERNAME>.github.io`
2. Navigate to **Settings** → **Pages**
3. Under "Custom domain", enter your domain and click **Save**

   ![GitHub Pages Settings](/images/posts/github-pages-settings.png)

4. Check **"Enforce HTTPS"** after the domain is verified

---

## Summary

Here's the complete flow:

![Custom Domain Setup Flow](/images/posts/domain-setup-flow.png)

### Checklist

- [ ] CNAME file created with your domain
- [ ] DNS A records pointing to GitHub Pages IPs
- [ ] CNAME record for www subdomain
- [ ] GitHub Pages custom domain configured
- [ ] HTTPS enforced

Once DNS propagates (can take a few minutes to 24 hours), your site will be live at your custom domain! 🎉
