---
layout: page
permalink: /publications/
title: publications
description: ""
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

{% assign stats = site.data.citations.metadata %}
{% assign scholar_url = "https://scholar.google.com/citations?user=" | append: site.data.socials.scholar_userid %}

<div class="pub-stats" aria-label="Publication metrics">
  <a class="pub-stat" href="{{ scholar_url }}" rel="noopener noreferrer" target="_blank" title="Google Scholar profile">
    <span class="pub-stat-value">{{ stats.publications }}</span>
    <span class="pub-stat-label">publications</span>
  </a>
  <a class="pub-stat" href="{{ scholar_url }}" rel="noopener noreferrer" target="_blank" title="Google Scholar profile">
    <span class="pub-stat-value">{{ stats.citations }}</span>
    <span class="pub-stat-label">citations</span>
  </a>
  <a class="pub-stat" href="{{ scholar_url }}" rel="noopener noreferrer" target="_blank" title="Google Scholar profile">
    <span class="pub-stat-value">{{ stats.h_index }}</span>
    <span class="pub-stat-label">h-index</span>
  </a>
</div>

<div class="publications">

{% bibliography %}

</div>
