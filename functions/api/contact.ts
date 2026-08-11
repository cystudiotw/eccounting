interface Env {
  RESEND_API_KEY: string;
  CLOUDFLARE_TURNSTILE_SECRET: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { env } = context;

  try {
    const body = await context.request.json();
    const { name, company, email, needs, turnstileToken } = body;

    if (!name || !email || !needs || !turnstileToken) {
      return new Response(JSON.stringify({ ok: false, error: '缺少必填欄位' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Verify Cloudflare Turnstile
    const captchaRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: env.CLOUDFLARE_TURNSTILE_SECRET,
        response: turnstileToken,
      }).toString(),
    });

    const captchaData = await captchaRes.json() as {
      success: boolean;
      action: string;
    };

    if (!captchaData.success || captchaData.action !== 'submit') {
      return new Response(JSON.stringify({ ok: false, error: '機器人驗證失敗，請稍後再試' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Send email via Resend
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: '雲記帳網站 <help@eccounting.com.tw>',
        to: ['help@eccounting.com.tw'],
        reply_to: email,
        subject: `[雲記帳] 新的諮詢 - ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #005f9d;">收到新的諮詢表單</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #666; width: 120px;">姓名</td><td style="padding: 8px 0; font-weight: bold;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">公司名稱</td><td style="padding: 8px 0;">${company || '未填寫'}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">聯絡信箱</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #666; vertical-align: top;">需求內容</td><td style="padding: 8px 0;">${needs.replace(/\n/g, '<br>')}</td></tr>
            </table>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="color: #999; font-size: 12px;">此信件由雲記帳網站表單自動寄送</p>
          </div>
        `,
      }),
    });

    if (!resendRes.ok) {
      const err = await resendRes.text();
      console.error('Resend error:', err);
      return new Response(JSON.stringify({ ok: false, error: '郵件寄送失敗，請稍後再試' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error('Contact API error:', err);
    return new Response(JSON.stringify({ ok: false, error: '伺服器發生錯誤' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
