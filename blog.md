---
title: "Blog"
subtitle: "A bit of food for thought"
layout: "page.njk"
---

{% for post in collections.posts %}
{{ post.data.date | date: '%Y-%m-%d' }} [{{ post.data.title }}]({{ post.url }})
{% endfor %}
