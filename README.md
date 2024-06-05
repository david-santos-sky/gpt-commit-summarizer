# gpt-commit-summarizer

_This GitHub Action was forked from [KanHarI/gpt-commit-summarizer](https://github.com/KanHarI/gpt-commit-summarizer) and adapted to use the latest version of OpenAI's chat completions API, through [Azure OpenAI Service](https://learn.microsoft.com/en-us/azure/ai-services/openai/overview)._

The `gpt-commit-summarizer` GitHub Action is a powerful tool that harnesses the capabilities of OpenAI's state-of-the-art `GPT-4` large language model to provide summaries of the changes introduced by a pull request in a repository. By generating the git diff for each commit and for each modified file and sending it to the Azure OpenAI Service with a carefully crafted prompt, the action is able to produce concise and informative summaries that can greatly enhance collaboration and understanding in large codebases.

The action then performs a higher level call to Azure OpenAI to generate a summary of the entire pull request, from the summaries of individual commits and file differences. This summary is then posted as a comment on the pull request.

## Getting Started

### Setting up

To use this action, you will need to have an Azure OpenAI API key.

Once you have your API key, you will need to add it to your GitHub repository as a secret. To do this, go to your repository's settings and navigate to `Secrets and variables > Actions` section. Click on `New repository secret` and enter the secret name `OPENAI_API_KEY` and the value of your API key.

Next, you will need to add the workflow file to your repository. Create a file named `.github/workflows/gpt-commit-summarizer.yml` (relative to the git root folder) and copy the following code into it:

```yaml
name: GPT Commits summarizer
# Summary: This action will write a comment about every commit in a pull request, 
# as well as generate a summary for every file that was modified and add it to the
# review page, compile a PR summary from all commit summaries and file diff 
# summaries, and delete outdated code review comments

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  summarize:
    runs-on: ubuntu-latest
    permissions: write-all  # Some repositories need this line

    steps:
      - uses: david-santos-sky/gpt-commit-summarizer@main
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
```

This workflow file tells GitHub to run the action whenever a new pull request is opened or updated.

That's it! You're now ready to use the gpt-commit-summarizer action in your repository. Each time a pull request is opened or updated, the action will automatically generate a summary of the changes made in each commit, add a summary for every file that was modified to the review page, compile a PR summary from all commit summaries and file diff summaries, and delete outdated code review comments.

### License

This project is licensed under the [MIT License](./LICENSE).

