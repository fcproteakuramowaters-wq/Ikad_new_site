const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

function parseEnv(envPath) {
  const content = fs.readFileSync(envPath, 'utf8');
  const lines = content.split(/\r?\n/);
  const env = {};
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const k = trimmed.slice(0, eq).trim();
    const v = trimmed.slice(eq + 1).trim();
    env[k] = v;
  }
  return env;
}

function mask(s) {
  if (!s || typeof s !== 'string') return '(none)';
  return s.replace(/.(?=.{2})/g, '*');
}

async function verifyTransport(host, port, secure, user, pass, label) {
  const t = nodemailer.createTransport({ host, port: parseInt(port||'587'), secure: secure === 'true', auth: { user, pass } });
  try {
    console.log(`[${label}] Verifying SMTP: host=${host} user=${mask(user)}`);
    await t.verify();
    console.log(`[${label}] OK`);
  } catch (err) {
    console.error(`[${label}] VERIFY FAILED:`, err && err.message ? err.message : err);
  }
}

async function main() {
  const envPath = path.join(__dirname, '..', '.env');
  if (!fs.existsSync(envPath)) {
    console.error('.env not found at', envPath);
    process.exit(1);
  }
  const env = parseEnv(envPath);

  const smtpHost = env.SMTP_HOST || 'smtppro.zoho.com';
  const smtpPort = env.SMTP_PORT || '587';
  const smtpSecure = env.SMTP_SECURE || 'false';

  await verifyTransport(env.VI_SMTP_HOST || smtpHost, smtpPort, smtpSecure, env.VI_SMTP_USER, env.VI_SMTP_PASSWORD, 'VI');
  await verifyTransport(env.YABA_SMTP_HOST || smtpHost, smtpPort, smtpSecure, env.YABA_SMTP_USER, env.YABA_SMTP_PASSWORD, 'YABA');
}

main().catch((e) => { console.error(e); process.exit(1); });
