<div>
<h1 style="text-align:center">CI/CD Workflows Demo</h1>
</div>

# Description
This project demonstrates a robust Continuous Integration and Continuous Deployment (CI/CD) workflow using GitHub Actions. The workflow includes:

- Automated Cypress component testing on Pull Requests to the develop branch
- Automatic deployment to Render when code is merged from develop to main

## Features
- GitHub Actions for continuous testing
- Automated deployment pipeline
- Separate workflows for development and production environments

## Workflow Details

### Testing Workflow
- Triggers on Pull Requests to develop branch
- Runs Cypress component tests
- Ensures code quality before merging

### Deployment Workflow
- Triggers when code is merged from develop to main
- Automatically deploys the application to Render

## To collaborate :
1. Clone the repository
2. Install dependencies
3. Set up GitHub Actions secrets for Render deployment
4. Create feature branches and submit PRs to develop

## Technologies Used
- GitHub Actions
- Cypress
- Render
- MongoDB

## Deployment
Deployed on Render: https://ci-cd-workflow-demo.onrender.com

## Repository
https://github.com/Plutarch1971/ci-cd-workflow-demo.git


