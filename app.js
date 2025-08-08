const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to Better (Prev: Jalan Technologies)</h1>
    <p>We are an AI-powered software development agency building scalable web, mobile, and custom applications.</p>
    <p><strong>DevOps Internship Assignment:</strong> Showcase a deployment pipeline for this Node.js app using Docker, Kubernetes, GitHub Actions, and Docker Hub or AWS ECR.</p>
    <p>Built by Arveti Ganesh</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
