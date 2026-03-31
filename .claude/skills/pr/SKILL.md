---
name: pr
description: Create a GitHub Pull Request with auto-detected base branch, type/mode labels, self-assign, and auto-reviewer selection. Use when the user says "pr", "PR 만들어", "풀리퀘", or wants to create a pull request.
---

Create a GitHub Pull Request for the current branch with full automation.

## Steps

### 1. Gather branch info

Run these commands in parallel:

```bash
# Current branch name
git rev-parse --abbrev-ref HEAD

# Detect the base branch (where this branch was created from)
git log --oneline --decorate --all --ancestry-path HEAD..main --merges 2>/dev/null | head -1
# Fallback: find the merge-base with main
git merge-base HEAD main

# Get the current user's GitHub username
gh api user --jq '.login'

# Get all repo collaborators (excluding yourself) for reviewer assignment
gh api repos/{owner}/{repo}/collaborators --jq '.[].login'

# Check if there are unpushed commits
git status
git log --oneline origin/$(git rev-parse --abbrev-ref HEAD)..HEAD 2>/dev/null
```

Determine the **base branch**: Use `git merge-base --fork-point main HEAD` or `git merge-base main HEAD` to find where the current branch diverged from. The base branch is `main` unless the branch was created from another feature branch (detect via branch naming or merge-base).

### 2. Analyze changes

```bash
# All commits on this branch since diverging from base
git log --oneline $(git merge-base main HEAD)..HEAD

# Full diff against base
git diff $(git merge-base main HEAD)..HEAD --stat
git diff $(git merge-base main HEAD)..HEAD
```

Read all the commits and the diff carefully to understand:

- What was changed and why
- The scope and risk of the changes
- Whether tests, lint, or build were affected

### 3. Select labels

Based on the commit messages and changes, select exactly **one `type:*` label** and **one `mode:*` label**.

**Type labels** (pick one):
| Label | When to use |
|---|---|
| `type:bug` | Fixes broken expected behavior |
| `type:feat` | Adds new functionality or user value |
| `type:refactor` | Improves internal structure without behavior change |
| `type:chore` | Config, dependencies, CI, maintenance |
| `type:docs` | Documentation changes |
| `type:test` | Test code additions or improvements |
| `type:style` | Formatting, no code logic change |
| `type:ci` | CI/CD pipeline changes |
| `type:perf` | Performance improvement |

**Mode labels** (pick one):
| Label | When to use |
|---|---|
| `mode:ai` | AI drove the work |
| `mode:human` | Human drove the work |
| `mode:mixed` | Both AI and human contributed substantially |

Determine the mode label by examining commit messages and the conversation context. If commits contain `Co-Authored-By: Claude` or similar AI indicators, lean toward `mode:ai` or `mode:mixed`. If unsure, ask the user.

### 4. Fill PR template

Use the repository's PR template at `.github/pull_request_template.md`. Fill in all sections based on your analysis:

```markdown
## ✨ 이번 PR 한줄 요약
<!-- 변경 내용을 한 줄로 요약 -->

---

## 📅 기본 정보
- 일자: <!-- yyyy-mm-dd (오늘 날짜) -->
- 작성자: AI Agent
- 작업 시간: <!-- 커밋 히스토리로 추정 -->

---

## 🤖 AI 사용 정보 (선택)
- OMC 사용 여부: <!-- 커밋에 Co-Authored-By: Claude 있으면 O, 없으면 X -->
- OMC 작동 시간: <!-- 추정 불가 시 생략 -->
- 사용 토큰 수: <!-- 추정 불가 시 생략 -->
- 주요 사용 목적:
  - <!-- 코드 생성 / 리팩토링 / 디버깅 / 환경 세팅 등 -->

---

## ✨ 무엇을 했나요?
-
-
-

---

## 🤔 왜 했나요?
-
-

---

## 🧠 작업하면서 느낀 점 (선택)
-
-

---

## 📈 Before / After (선택)
- Before:
- After:

---

## 👀 보면 좋은 포인트
-
-

---

## 🧪 어떻게 확인하나요?
-
-

---

## ⚠️ 참고 / 리스크
-
-

---

## 💬 한마디
<!-- 자유롭게 -->
```

Fill in all sections based on your analysis. Write in Korean.

### 5. Push and create PR

```bash
# Push current branch if needed (with upstream tracking)
git push -u origin $(git rev-parse --abbrev-ref HEAD)

# Create PR with:
# - base branch = detected base
# - labels = one type + one mode
# - assignee = current user (self)
# - reviewer = collaborators excluding self (if available)
gh pr create \
  --base <base-branch> \
  --title "<concise title in Korean, under 70 chars>" \
  --body "$(cat <<'EOF'
<filled template content>
EOF
)" \
  --label "type:<type>" \
  --label "mode:<mode>" \
  --assignee "@me" \
  --reviewer "<other-collaborators>"
```

**Reviewer selection rules:**

- Get all repo collaborators via `gh api repos/{owner}/{repo}/collaborators --jq '.[].login'`
- Exclude the current user (`@me` / your own login)
- Add all remaining collaborators as reviewers
- If no other collaborators exist, skip `--reviewer` flag

### 6. Report result

After creating the PR, output:

- PR URL
- Selected labels
- Assigned reviewers
- A brief summary of what was included

## Important rules

- ALWAYS detect the base branch from git history, do not assume `main`
- ALWAYS select exactly one `type:` and one `mode:` label
- ALWAYS assign self as assignee
- ALWAYS add other collaborators as reviewers (if any exist)
- ALWAYS use the PR template from `.github/pull_request_template.md`
- ALWAYS write PR title and summary content in Korean
- If the branch has no commits ahead of base, warn the user and do not create the PR
- If there are uncommitted changes, warn the user before proceeding
