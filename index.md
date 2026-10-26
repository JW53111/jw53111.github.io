---
title: 首页 / Index
layout: default
menu: false
---

<div class="home-shell">
  <main class="home">
    <nav class="home-nav" aria-label="首页导航">
      <a class="home-brand" href="/">JW · Personal</a>
      <div class="home-nav-links">
        <a href="#projects">项目</a>
        <a href="#writing">文章</a>
        <a href="#about">关于</a>
        <a href="https://github.com/JW53111/JW-CV/releases/latest">简历</a>
      </div>
    </nav>

    <section class="home-hero" aria-labelledby="home-title">
      <span class="home-eyebrow">个人主页 · 学习记录 · 项目作品</span>
      <h1 class="home-title" id="home-title">你好，我是 <span>Jiawu。</span></h1>
      <p class="home-lede">这里记录我一路上的学习、思考与尝试。我会分享整理过的学习资料、技术笔记，也会写下闲暇时的游戏体验。</p>
      <p class="home-lede-en">A personal space for things I learn, make, and enjoy — from technical notes and study resources to the occasional game reflection.</p>
      <div class="home-links">
        <a class="home-link home-link-primary" href="#projects">看看我的项目 <span aria-hidden="true">&nbsp;↘</span></a>
        <a class="home-link" href="https://github.com/JW53111">GitHub&nbsp; ↗</a>
        <a class="home-link" href="https://github.com/JW53111/JW-CV/releases/latest">简历&nbsp; ↗</a>
      </div>
    </section>

    <section class="home-section" id="projects" aria-labelledby="projects-title">
      <div class="home-section-heading">
        <div>
          <span class="home-section-kicker">Selected work</span>
          <h2 class="home-section-title" id="projects-title">项目</h2>
        </div>
        <p class="home-section-note">做过的尝试、正在推进的想法，以及值得留下来的成果。</p>
      </div>

      <div class="project-grid">
        {% assign projects = site.data.projects %}
        {% if projects and projects.size > 0 %}
          {% for project in projects %}
            <article class="project-card">
              <div>
                <div class="project-meta">
                  <span class="project-number">{% if forloop.index < 10 %}0{% endif %}{{ forloop.index }}</span>
                  {% if project.period %}<span>{{ project.period }}</span>{% endif %}
                </div>
                <h3 class="project-title">
                  {% if project.url %}
                    <a href="{{ project.url }}" target="_blank" rel="noopener noreferrer">{{ project.title }}</a>
                  {% else %}
                    {{ project.title }}
                  {% endif %}
                </h3>
                <p class="project-description">{{ project.description }}</p>
              </div>
              <div class="project-actions">
                {% if project.tags %}
                  <div class="project-tags">
                    {% for tag in project.tags %}<span class="project-tag">{{ tag }}</span>{% endfor %}
                  </div>
                {% endif %}
                {% if project.source %}
                  <a class="project-source" href="{{ project.source }}" target="_blank" rel="noopener noreferrer">查看源码 ↗</a>
                {% endif %}
              </div>
            </article>
          {% endfor %}
        {% else %}
          <article class="project-card project-empty">
            <div class="project-meta"><span class="project-number">PROJECTS</span><span>持续更新</span></div>
            <h3 class="project-title">项目内容即将补充</h3>
            <p class="project-description">项目展示区已经准备好。后续添加项目名称、简介、技术标签和链接后，就会在这里自动生成卡片。</p>
          </article>
        {% endif %}
      </div>
    </section>

    <section class="home-section" id="writing" aria-labelledby="writing-title">
      <div class="home-section-heading">
        <div>
          <span class="home-section-kicker">Notes & thoughts</span>
          <h2 class="home-section-title" id="writing-title">最近记录</h2>
        </div>
        <a class="home-section-note" href="/archive/">查看全部文章&nbsp; ↗</a>
      </div>

      <div class="writing-list">
        {% assign recent_posts = site.posts | slice: 0, 4 %}
        {% for post in recent_posts %}
          <a class="writing-item" href="{{ post.url | relative_url }}">
            <span class="writing-title">{{ post.title | escape }}</span>
            <time class="writing-date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y.%m.%d" }}</time>
          </a>
        {% endfor %}
      </div>
    </section>

    <section class="home-section home-about" id="about" aria-labelledby="about-title">
      <div>
        <span class="home-section-kicker">A little about me</span>
        <h2 class="home-about-title" id="about-title">好奇心让我持续出发。</h2>
      </div>
      <div>
        <p>我喜欢把学到的东西整理清楚，也享受从一个问题出发、慢慢做出结果的过程。这个网站既是我的个人笔记，也会逐渐收录一些值得分享的项目。</p>
        <p style="margin-top: 12px;">I enjoy making sense of what I learn and turning questions into something tangible. This site is both a notebook and a growing record of my work.</p>
      </div>
    </section>

    <footer class="home-footer">
      <span>© {{ site.time | date: "%Y" }} Jiawu</span>
      <span><a href="https://github.com/JW53111">GitHub</a></span>
    </footer>
  </main>
</div>
