---
layout: page
title: activities
permalink: /activities/
description: Workshops, outreach, and public engagement.
nav: true
nav_order: 4
---

Public engagement, teaching outside the classroom, and events I help organise or take part in.

## Workshops

{% assign workshop_events = site.data.activities.workshops %}
{% if workshop_events and workshop_events.size > 0 %}
<div class="activities-list">
  {% for event in workshop_events %}
  <a class="activity-card" href="{{ event.permalink | relative_url }}">
    {% if event.img %}
    <div class="activity-card-media">
      {% include figure.liquid path=event.img title=event.title class="img-fluid rounded z-depth-1" %}
    </div>
    {% endif %}
    <div class="activity-card-body">
      <h3 class="activity-card-title">{{ event.title }}</h3>
      <p class="activity-card-meta">
        {% if event.start_date and event.end_date %}
          {{ event.start_date | date: "%-d %B" }}–{{ event.end_date | date: "%-d %B %Y" }}
        {% elsif event.date %}
          {{ event.date | date: "%-d %B %Y" }}
        {% endif %}
        {% if event.location %} · {{ event.location }}{% endif %}
      </p>
      {% if event.summary %}
      <p class="activity-card-summary">{{ event.summary }}</p>
      {% endif %}
    </div>
  </a>
  {% endfor %}
</div>
{% else %}
<p>Workshops and similar hands-on sessions will appear here.</p>
{% endif %}

## Outreach

{% assign outreach_events = site.data.activities.outreach %}
{% if outreach_events and outreach_events.size > 0 %}
<div class="activities-list">
  {% for event in outreach_events %}
  <a class="activity-card" href="{{ event.permalink | relative_url }}">
    {% if event.img %}
    <div class="activity-card-media">
      {% include figure.liquid path=event.img title=event.title class="img-fluid rounded z-depth-1" %}
    </div>
    {% endif %}
    <div class="activity-card-body">
      <h3 class="activity-card-title">{{ event.title }}</h3>
      <p class="activity-card-meta">
        {% if event.start_date and event.end_date %}
          {{ event.start_date | date: "%-d %B" }}–{{ event.end_date | date: "%-d %B %Y" }}
        {% elsif event.date %}
          {{ event.date | date: "%-d %B %Y" }}
        {% endif %}
        {% if event.location %} · {{ event.location }}{% endif %}
      </p>
      {% if event.summary %}
      <p class="activity-card-summary">{{ event.summary }}</p>
      {% endif %}
    </div>
  </a>
  {% endfor %}
</div>
{% else %}
<p>Outreach events will appear here.</p>
{% endif %}
